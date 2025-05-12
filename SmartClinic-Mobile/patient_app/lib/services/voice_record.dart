import 'dart:convert';
import 'dart:io';

import 'package:flutter_sound/flutter_sound.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:path_provider/path_provider.dart';

class VoiceRecorderService {
  VoiceRecorderService._();
  static final instance = VoiceRecorderService._();

  late FlutterSoundRecorder _recorder;
  bool _isInitialized = false;

  /// Call once at app start (e.g. in initState).
  Future<void> init() async {
    _recorder = FlutterSoundRecorder();
    await _recorder.openRecorder();
    await _recorder.setSubscriptionDuration(const Duration(milliseconds: 500));
    final status = await Permission.microphone.request();
    if (status == PermissionStatus.granted) {
      _isInitialized = true;
    } else {
      throw Exception('Microphone permission not granted');
    }
  }

  /// Starts recording to a temp file.
  Future<void> start() async {
    if (!_isInitialized) throw Exception('Recorder not initialized');
    if (_recorder.isRecording) return;
    final dir = await getApplicationDocumentsDirectory();
    final path = '${dir.path}/${DateTime.now().millisecondsSinceEpoch}.m4a';
    await _recorder.startRecorder(toFile: path, codec: Codec.aacMP4);
  }

  Future<String> stop() async {
    if (!_isInitialized) throw Exception('Recorder not initialized');
    if (!_recorder.isRecording) return '';
    final path = await _recorder.stopRecorder();
    if (path == null) return '';
    final file = File(path);
    if (!await file.exists()) return '';
    final bytes = await file.readAsBytes();
    return base64Encode(bytes);
  }

  /// Release resources; call in dispose().
  Future<void> dispose() async {
    await _recorder.closeRecorder();
  }
}
