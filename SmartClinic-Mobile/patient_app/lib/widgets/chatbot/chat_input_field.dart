import 'package:flutter/material.dart';

class ChatInputField extends StatefulWidget {
  final TextEditingController controller;
  final VoidCallback onSend;
  final VoidCallback onVoice;
  final VoidCallback onVoiceStart;
  final VoidCallback onVoiceStop;

  const ChatInputField({
    Key? key,
    required this.controller,
    required this.onSend,
    required this.onVoice,
    required this.onVoiceStart,
    required this.onVoiceStop,
  }) : super(key: key);

  @override
  _ChatInputFieldState createState() => _ChatInputFieldState();
}

class _ChatInputFieldState extends State<ChatInputField> {
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
              controller: widget.controller,
              decoration: const InputDecoration(
                hintText: "Type a message",
                border: InputBorder.none,
              ),
            ),
          ),

          const SizedBox(width: 8),

          // Voice button
          GestureDetector(
            onTap: widget.onVoice,
             onLongPressStart: (_) => widget.onVoiceStart(),
             onLongPressEnd: (_) => widget.onVoiceStop(),
            child: const CircleAvatar(
              backgroundColor: Colors.blue,
              radius: 20,
              child: Icon(Icons.mic, color: Colors.white),
            ),
          ),

          const SizedBox(width: 8),

          // Send button
          GestureDetector(
            onTap: widget.onSend,
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
