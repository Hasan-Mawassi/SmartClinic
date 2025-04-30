import 'package:flutter/material.dart';
import 'package:patient_app/constants/app_colors.dart';
import 'package:patient_app/widgets/basic/custom_button.dart';
import 'package:patient_app/widgets/basic/rounded_card.dart';

class MedicineInfoCard extends StatelessWidget {
  final String medicineName;
  final String quantity;
  final String frequency;
  final String duration;
  final String date;
  final VoidCallback onTookIt;

  const MedicineInfoCard({
    super.key,
    required this.medicineName,
    required this.quantity,
    required this.frequency,
    required this.duration,
    required this.date,
    required this.onTookIt,
  });

  @override
  Widget build(BuildContext context) {
    return RoundedCard(
      margin: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),

      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: [
            // Left column
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    "Medicine",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                  const SizedBox(height: 15),
                  Text("Name: $medicineName"),
                  const SizedBox(height: 4),
                  Text("Quantity: $quantity"),
                  const SizedBox(height: 4),
                  Text("Frequency: $frequency"),
                  const SizedBox(height: 4),
                  Text("Duration: $duration"),
                ],
              ),
            ),
            const SizedBox(width: 16),
            // Right column
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text("Date: $date"),
                  const SizedBox(height: 10),
                  Container(
                    padding: const EdgeInsets.all(10),
                    color: Colors.grey[200],
                    child: const Text(
                      "When you take the medicine, press 'I took it' to track your treatment.",
                      style: TextStyle(fontSize: 12),
                    ),
                  ),
                  const SizedBox(height: 10),
                  CustomButton(
                    text: "I took it",
                    onPressed: onTookIt,
                    backgroundColor: AppColors.secandary,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
