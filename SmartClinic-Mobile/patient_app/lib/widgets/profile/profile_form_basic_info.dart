import 'package:flutter/material.dart';
import 'package:patient_app/widgets/basic/input_field_border.dart';

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
        InputFieldBorder(controller: nameController, hintText: "Name"),
        const SizedBox(height: 10),
        InputFieldBorder(
          hintText: "Age",
          keyboardType: TextInputType.number,
          controller: ageController,
        ),
      ],
    );
  }
}
