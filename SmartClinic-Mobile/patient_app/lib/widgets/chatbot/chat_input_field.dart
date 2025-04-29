import 'package:flutter/material.dart';

class ChatInputField extends StatelessWidget {
  final TextEditingController controller;
  final VoidCallback onSend;
  final VoidCallback onVoice;

  const ChatInputField({
    Key? key,
    required this.controller,
    required this.onSend,
    required this.onVoice,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border(top: BorderSide(color: Colors.grey.shade300)),
      ),
      child: Row(
        children: [
          // Text input
          Expanded(
            child: TextField(
              controller: controller,
              decoration: const InputDecoration(
                hintText: "Type a message",
                border: InputBorder.none,
              ),
            ),
          ),

          const SizedBox(width: 8),

          // Voice button
          GestureDetector(
            onTap: onVoice,
            child: const CircleAvatar(
              backgroundColor: Colors.blue,
              radius: 20,
              child: Icon(Icons.mic, color: Colors.white),
            ),
          ),

          const SizedBox(width: 8),

          // Send button
          GestureDetector(
            onTap: onSend,
            child: const CircleAvatar(
              backgroundColor: Colors.blue,
              radius: 20,
              child: Icon(Icons.send, color: Colors.white),
            ),
          ),
        ],
      ),
    );
  }
}
