import 'package:flutter/material.dart';
import 'package:patient_app/widgets/appointment/appointment_detail_card.dart';
import 'package:patient_app/constants/app_colors.dart';
class AppointmentScreen extends StatelessWidget {
  const AppointmentScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.backgroundColor,
      appBar: AppBar(title: const Text("Appointment")),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          AppointmentTile(
            photoUrl: "https://picsum.photos/150",
            doctorName: "Dr. Sarah Johnson",
            date: "12-02-2025",
            time: "12:00 AM",
            onCancel: () {
              print("Appointment canceled");
            },
          ),
          const SizedBox(height: 10),
          AppointmentTile(
            photoUrl: "https://picsum.photos/150",
            doctorName: "Dr. Sarah Johnson",
            date: "12-02-2025",
            time: "12:00 AM",
            onCancel: () {
              print("Appointment canceled");
            },
          ),
          const SizedBox(height: 10),
          AppointmentTile(
            photoUrl: "https://picsum.photos/150",
            doctorName: "Dr. Sarah Johnson",
            date: "12-02-2025",
            time: "12:00 AM",
            onCancel: () {
              print("Appointment canceled");
            },
          ),
          const SizedBox(height: 10),
          AppointmentTile(
            photoUrl: "https://picsum.photos/150",
            doctorName: "Dr. Sarah Johnson",
            date: "12-02-2025",
            time: "12:00 AM",
            onCancel: () {
              print("Appointment canceled");
            },
          ),
          const SizedBox(height: 10),
          AppointmentTile(
            photoUrl: "https://picsum.photos/150",
            doctorName: "Dr. Sarah Johnson",
            date: "12-02-2025",
            time: "12:00 AM",
            onCancel: () {
              print("Appointment canceled");
            },
          ),
        ],
      ),
    );
  }
}
