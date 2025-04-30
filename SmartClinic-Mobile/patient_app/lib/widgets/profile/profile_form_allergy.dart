import 'package:flutter/material.dart';
import 'package:patient_app/widgets/basic/input_field_border.dart';

class ProfileFormAllergy extends StatelessWidget {
  final TextEditingController controller;

  const ProfileFormAllergy({required this.controller, super.key});

  @override
  Widget build(BuildContext context) {
    return InputFieldBorder(controller: controller, hintText: "Allergy Info");
  }
}
