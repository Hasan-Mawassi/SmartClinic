import 'package:flutter/material.dart';
import 'package:patient_app/constants/app_colors.dart';
import 'package:patient_app/widgets/medicine/medicine_info_card.dart';

class MedicineScreen extends StatelessWidget {
  const MedicineScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.backgroundColor,
      appBar: AppBar(title: const Text("Medicine")),
      body: ListView(
        padding: const EdgeInsets.all(16.0),
        children: [
          MedicineInfoCard(
            medicineName: "Paracetamol",
            quantity: "1 pill",
            frequency: "Daily",
            duration: "1 month",
            date: "29-04-2025",
            onTookIt: () {
              print("Medicine taken");
            },
          ),
          MedicineInfoCard(
            medicineName: "Ibuprofen",
            quantity: "1 pill",
            frequency: "2 a day",
            duration: "2 weeks",
            date: "30-04-2025",
            onTookIt: () {
              print("Medicine taken");
            },
          ),
          // Add more MedicineInfoCards here as needed
        ],
      ),
    );
  }
}
