import 'package:flutter/material.dart';
import 'package:patient_app/constants/app_colors.dart';
import 'package:patient_app/widgets/chatbot/custom_list_tile.dart';
import 'package:patient_app/widgets/chatbot/chat_input_field.dart';
import 'package:patient_app/widgets/chatbot/message_widget.dart';

class ChatBotScreen extends StatefulWidget {
  const ChatBotScreen({Key? key}) : super(key: key);

  @override
  State<ChatBotScreen> createState() => _ChatBotScreenState();
}

class _ChatBotScreenState extends State<ChatBotScreen> {
  final TextEditingController _chatController = TextEditingController();

  @override
  void dispose() {
    _chatController.dispose();
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
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              children: const [
                ChatMessageWidget(
                  message: "Hello, how can I help you?",
                  svgAsset: "assets/icons/boot.svg",
                  isFromBot: true,
                ),
                ChatMessageWidget(
                  message: "I have a headache.",
                  svgAsset: "assets/icons/boot.svg",
                  isFromBot: false,
                ),
              ],
            ),
          ),

          // Chat input field pinned at bottom
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: ChatInputField(
              controller: _chatController,
              onSend: () {
                print("Send: ${_chatController.text}");
                _chatController.clear();
              },
              onVoice: () {
                print("Voice input activated");
              },
            ),
          ),
        ],
      ),
    );
  }
}
