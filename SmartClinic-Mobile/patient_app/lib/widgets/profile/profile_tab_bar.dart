import 'package:flutter/material.dart';

class ProfileTabBar extends StatelessWidget {
  final TabController controller;

  const ProfileTabBar({required this.controller, super.key});

  @override
  Widget build(BuildContext context) {
    return TabBar(
      controller: controller,
      tabs: const [
        Tab(text: "Basic Info"),
        Tab(text: "Chronic Disease"),
        Tab(text: "Allergy"),
      ],
    );
  }
}
