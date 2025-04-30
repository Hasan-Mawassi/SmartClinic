import 'package:flutter/material.dart';
import 'package:patient_app/constants/app_colors.dart';

class ProfileTabBar extends StatelessWidget implements PreferredSizeWidget {
  final TabController controller;

  const ProfileTabBar({super.key, required this.controller});

  @override
  Size get preferredSize => const Size.fromHeight(50.0);

  @override
  Widget build(BuildContext context) {
    return TabBar(
      labelColor: AppColors.primary,
      indicatorColor: AppColors.primary,
      controller: controller,
      tabs: const [
        Tab(text: "Basic Info"),
        Tab(text: "Chronic Disease"),
        Tab(text: "Allergy"),
      ],
    );
  }
}
