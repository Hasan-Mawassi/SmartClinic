import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:flutter_sound/flutter_sound.dart';
import 'dart:typed_data';
import 'dart:io';
import 'package:path_provider/path_provider.dart';

class VoiceMessageWidget extends StatefulWidget {
  final String base64Audio;

  const VoiceMessageWidget({Key? key, required this.base64Audio})
    : super(key: key);

  @override
  _VoiceMessageWidgetState createState() => _VoiceMessageWidgetState();
}

class _VoiceMessageWidgetState extends State<VoiceMessageWidget> {
  late FlutterSoundPlayer _audioPlayer;
  bool _isPlaying = false;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 90), // Adjust as needed
      child: FractionallySizedBox(
        widthFactor: 0.6, // 60% of the available width
        child: Container(
          height: 48,
          decoration: BoxDecoration(
            color: const Color.fromARGB(255, 246, 246, 246),
            borderRadius: BorderRadius.circular(12),
          ),
          child: InkWell(
            borderRadius: BorderRadius.circular(12),
            onTap: _togglePlay,
            child: Center(
              child: Icon(
                _isPlaying ? Icons.pause : Icons.play_arrow,
                color: Colors.black,
              ),
            ),
          ),
        ),
      ),
    );
  }

  @override
  void initState() {
    super.initState();
    _initPlayer();
  }

  Future<void> _initPlayer() async {
    _audioPlayer = FlutterSoundPlayer();
    await _audioPlayer.openPlayer();
  }

  Future<void> _togglePlay() async {
    if (_isPlaying) {
      await _audioPlayer.stopPlayer();
    } else {
      Uint8List bytes = base64Decode(widget.base64Audio);
      final dir = await getTemporaryDirectory();
      File file = File('${dir.path}/temp_audio.mp4');
      await file.writeAsBytes(bytes);

      await _audioPlayer.startPlayer(
        fromURI: file.path,
        codec: Codec.aacMP4,
        whenFinished: () => setState(() => _isPlaying = false),
      );
    }
    setState(() => _isPlaying = !_isPlaying);
  }

  @override
  void dispose() {
    _audioPlayer.closePlayer();
    super.dispose();
  }
}
