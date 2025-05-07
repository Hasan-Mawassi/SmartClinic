import 'package:flutter/material.dart';
import 'package:patient_app/constants/app_colors.dart';
import 'package:patient_app/widgets/chatbot/custom_list_tile.dart';
import 'package:patient_app/widgets/chatbot/chat_input_field.dart';
import 'package:patient_app/widgets/chatbot/message_widget.dart';
import 'package:provider/provider.dart';
import 'package:patient_app/providers/chat_provider.dart';
import 'package:patient_app/models/messages.dart';
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
            child: Consumer<ChatProvider>( 
              builder: (context, chatProvider, _) {
                return ListView.builder(
                  padding: const EdgeInsets.symmetric(horizontal: 16.0),
                  itemCount: chatProvider.messages.length,
                  itemBuilder: (context, index) {
                    final msg = chatProvider.messages[index];
                    return ChatMessageWidget(
                      message: msg.text,
                      svgAsset: "assets/icons/boot.svg",
                      isFromBot: msg.sender == Sender.ai, 
                    );
                  },
                );
              },
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
                print("Voice input activated");
              },
            ),
          ),
        ],
      ),
    );
  }
}