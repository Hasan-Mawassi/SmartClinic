import 'package:flutter/material.dart';
import 'package:patient_app/widgets/profile/profile_photo.dart';
import 'package:patient_app/widgets/profile/profile_tab_bar.dart';
import 'package:patient_app/widgets/basic/custom_button.dart';
import './profile_switcher.dart';


class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;

  final nameController = TextEditingController();
  final ageController = TextEditingController();
  final chronicController = TextEditingController();
  final allergyController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
    _tabController.addListener(() {
      if (_tabController.indexIsChanging) {
        setState(() {}); // Rebuild on tab index change
      }
    });
  }

  @override
  void dispose() {
    _tabController.dispose();
    nameController.dispose();
    ageController.dispose();
    chronicController.dispose();
    allergyController.dispose();
    super.dispose();
  }

  void _handleSubmit() {
    print("Name: ${nameController.text}");
    print("Age: ${ageController.text}");
    print("Chronic: ${chronicController.text}");
    print("Allergy: ${allergyController.text}");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Profile"),
        bottom: ProfileTabBar(controller: _tabController),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: ListView(
          children: [
            const ProfilePhoto(imageUrl: "https://picsum.photos/200"),
            const SizedBox(height: 24),
            ProfileFormSwitcher(
              tabIndex: _tabController.index,
              nameController: nameController,
              ageController: ageController,
              chronicController: chronicController,
              allergyController: allergyController,
            ),
            const SizedBox(height: 24),
            CustomButton(text: "Submit", onPressed: _handleSubmit),
          ],
        ),
      ),
    );
  }
}
