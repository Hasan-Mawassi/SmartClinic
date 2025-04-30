import 'package:flutter/material.dart';

class InputFieldBorder extends StatelessWidget {
  final String hintText;
  // final IconData icon ;
  final TextInputType keyboardType;
  final bool obscureText;
  final TextEditingController? controller;

  const InputFieldBorder({
    Key? key,
    required this.hintText,
    // this.icon,
    this.keyboardType = TextInputType.text,
    this.obscureText = false,
    this.controller,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      keyboardType: keyboardType,
      obscureText: obscureText,
      decoration: InputDecoration(
        labelText: hintText,
        border: OutlineInputBorder(),
        enabledBorder: OutlineInputBorder(
          borderSide: BorderSide(color: Colors.grey),
        ),
        focusedBorder: OutlineInputBorder(
          borderSide: BorderSide(color: Colors.blue, width: 2),
        ),
      ),
    );
  }
}
