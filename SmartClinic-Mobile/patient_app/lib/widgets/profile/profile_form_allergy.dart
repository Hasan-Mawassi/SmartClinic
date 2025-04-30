import 'package:flutter/material.dart';

class ProfileFormAllergy extends StatelessWidget {
  final TextEditingController controller;

  const ProfileFormAllergy({required this.controller, super.key});

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      decoration: const InputDecoration(labelText: "Allergy Info"),
      maxLines: 3,
    );
  }
}
