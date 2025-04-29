import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ChatMessageWidget extends StatelessWidget {
  final String message;
  final String svgAsset;
  final bool isFromBot;

  const ChatMessageWidget({
    Key? key,
    required this.message,
    required this.svgAsset,
    this.isFromBot = true,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisAlignment:
          isFromBot ? MainAxisAlignment.start : MainAxisAlignment.end,
      children: [
        if (isFromBot) ...[
          // Bot avatar
          CircleAvatar(
            radius: 20,
            backgroundColor: Colors.white,
            child: SvgPicture.asset(svgAsset, width: 30, height: 30),
          ),
          const SizedBox(width: 10),
        ],

        // Chat bubble
        Flexible(
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
            margin: const EdgeInsets.symmetric(vertical: 6),
            decoration: BoxDecoration(
              color: isFromBot ? Colors.grey.shade200 : Colors.blue.shade100,
              borderRadius: BorderRadius.circular(12),
            ),
            child: Text(message, style: const TextStyle(fontSize: 14)),
          ),
        ),

        if (!isFromBot) ...[
          const SizedBox(width: 10),
          // User avatar
          CircleAvatar(
            radius: 20,
            backgroundColor: Colors.white,
            child: SvgPicture.asset(svgAsset, width: 24, height: 24),
          ),
        ],
      ],
    );
  }
}
