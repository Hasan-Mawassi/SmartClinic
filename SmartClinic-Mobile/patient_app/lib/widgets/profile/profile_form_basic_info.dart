import 'package:flutter/material.dart';

class ProfileFormBasicInfo extends StatelessWidget {
  final TextEditingController nameController;
  final TextEditingController ageController;

  const ProfileFormBasicInfo({
    required this.nameController,
    required this.ageController,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextField(
          controller: nameController,
          decoration: const InputDecoration(labelText: "Name"),
        ),
        TextField(
          controller: ageController,
          decoration: const InputDecoration(labelText: "Age"),
          keyboardType: TextInputType.number,
        ),
      ],
    );
  }
}
