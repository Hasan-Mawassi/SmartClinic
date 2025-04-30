import 'package:flutter/material.dart';

class ProfileFormChronic extends StatelessWidget {
  final TextEditingController controller;

  const ProfileFormChronic({required this.controller, super.key});

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      decoration: const InputDecoration(labelText: "Chronic Disease Details"),
      maxLines: 3,
    );
  }
}
