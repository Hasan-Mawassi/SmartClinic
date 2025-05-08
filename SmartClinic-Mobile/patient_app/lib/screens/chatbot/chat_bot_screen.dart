import 'package:flutter/material.dart';
import 'package:patient_app/constants/app_colors.dart';
import 'package:patient_app/widgets/chatbot/custom_list_tile.dart';
import 'package:patient_app/widgets/chatbot/chat_input_field.dart';
import 'package:patient_app/widgets/chatbot/message_widget.dart';
import 'package:patient_app/widgets/chatbot/voice_message.dart';
import 'package:provider/provider.dart';
import 'package:patient_app/providers/chat_provider.dart';
import 'package:patient_app/models/messages.dart';
import 'dart:convert';
import 'package:flutter_sound/flutter_sound.dart';
import 'dart:typed_data';
import 'package:permission_handler/permission_handler.dart';
import 'dart:io';
import 'package:path_provider/path_provider.dart';
class ChatBotScreen extends StatefulWidget {
  const ChatBotScreen({Key? key}) : super(key: key);

  @override
  State<ChatBotScreen> createState() => _ChatBotScreenState();
}

class _ChatBotScreenState extends State<ChatBotScreen> {
  final TextEditingController _chatController = TextEditingController();
  late FlutterSoundRecorder _audioRecorder;
  bool _isRecording = false;
  String? _audioPath;
  

  Future<void> _initRecorder() async {
   _audioRecorder = FlutterSoundRecorder();

  await _audioRecorder.openRecorder();
  await _audioRecorder.setSubscriptionDuration(
    const Duration(milliseconds: 500),
  );

  await Permission.microphone.request(); // Request permission once
}
Future<void> _startRecording() async {
  try {
    if (_audioRecorder.isRecording) return;

    final directory = await getApplicationDocumentsDirectory();
    _audioPath = '${directory.path}/${DateTime.now().millisecondsSinceEpoch}.m4a';

    await _audioRecorder.startRecorder(
      toFile: _audioPath!,
       codec: Codec.aacMP4,
    );

    setState(() => _isRecording = true);
  } catch (e) {
    print('Recording error: $e');
  }
}

Future<void> _stopRecording() async {
  try {
    if (_isRecording) {
      await _audioRecorder.stopRecorder();
      setState(() => _isRecording = false);

      if (_audioPath != null) {
  File audioFile = File(_audioPath!);
  if (await audioFile.exists()) {
    int length = await audioFile.length();
    print('Audio file length: $length bytes');
    
    Uint8List bytes = await audioFile.readAsBytes();
    String base64Audio = base64Encode(bytes);
    print('base64Audio (===================: ${base64Audio}');
    
    Provider.of<ChatProvider>(context, listen: false)
        .addUserMessage(base64Audio, isVoice: true);
  } else {
    print('Audio file does not exist at $_audioPath');
  }}
    }
  } catch (e) {
    print('Stop recording error: $e');
  }
}
@override
void initState() {
  super.initState();
   _initRecorder();
}
  @override
  void dispose() {
    _chatController.dispose();
     _audioRecorder.closeRecorder();
    super.dispose();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.backgroundColor,
      appBar: AppBar(
        titleSpacing: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
        title: const Text(
          "Chats",
          style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
        ),
      ),
      body: Column(
        children: [
          // Doctor Header
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: DoctorListTile(
              doctorName: "Dr. John Doe",
              photoUrl: "https://picsum.photos/200/300",
            ),
          ),

          // Chat messages list
           Expanded(
            child: Consumer<ChatProvider>( 
              builder: (context, chatProvider, _) {
                return ListView.builder(
                  padding: const EdgeInsets.symmetric(horizontal: 16.0),
                  itemCount: chatProvider.messages.length,
                  itemBuilder: (context, index) {
                    final msg = chatProvider.messages[index];
                    return msg.type == MessageType.voice
                    ? VoiceMessageWidget(
                        base64Audio: msg.text,
                        // isFromBot: msg.sender == Sender.ai,
                      )
                    : ChatMessageWidget(
                        svgAsset: "assets/icons/boot.svg",
                        message: msg.text,
                        isFromBot: msg.sender == Sender.ai,
                      );
                  },
                );
              },
              
            ),
          ),
if (_isRecording)
  Padding(
    padding: EdgeInsets.all(8.0),
    child: Row(
      children: [
        Icon(Icons.mic, color: Colors.red),
        SizedBox(width: 8),
        Text('Recording...'),
      ],
    ),
  ),
          // Chat input field pinned at bottom
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: ChatInputField(
              controller: _chatController,
              onSend: () {
                final text = _chatController.text.trim();
                if (text.isNotEmpty) {
                  Provider.of<ChatProvider>(context, listen: false)
                      .addUserMessage(text); // SEND TO PROVIDER
                  _chatController.clear();
                }
              },
              onVoice: () {
                print("Voice button pressed");
              },
              onVoiceStart: _startRecording,
              onVoiceStop: _stopRecording,
            ),
          ),
        ],
      ),
    );
  }
}