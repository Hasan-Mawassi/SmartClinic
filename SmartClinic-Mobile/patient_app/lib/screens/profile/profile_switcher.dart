import 'package:flutter/material.dart';
import 'package:patient_app/widgets/profile/profile_form_basic_info.dart';
import 'package:patient_app/widgets/profile/profile_form_chronic.dart';
import 'package:patient_app/widgets/profile/profile_form_allergy.dart';

class ProfileFormSwitcher extends StatelessWidget {
  final int tabIndex;
  final TextEditingController nameController;
  final TextEditingController ageController;
  final TextEditingController chronicController;
  final TextEditingController allergyController;

  const ProfileFormSwitcher({
    super.key,
    required this.tabIndex,
    required this.nameController,
    required this.ageController,
    required this.chronicController,
    required this.allergyController,
  });

  @override
  Widget build(BuildContext context) {
    switch (tabIndex) {
      case 0:
        return ProfileFormBasicInfo(nameController: nameController, ageController: ageController);
      case 1:
        return ProfileFormChronic(controller: chronicController);
      case 2:
        return ProfileFormAllergy(controller: allergyController);
      default:
        return const SizedBox();
    }
  }
}
