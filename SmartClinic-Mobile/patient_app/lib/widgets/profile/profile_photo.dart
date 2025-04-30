import 'package:flutter/material.dart';

class ProfilePhoto extends StatelessWidget {
  final String imageUrl;

  const ProfilePhoto({required this.imageUrl, super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ClipRRect(
        borderRadius: BorderRadius.circular(8),
        child: Image.network(
          imageUrl,
          width: 120,
          height: 120,
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}
