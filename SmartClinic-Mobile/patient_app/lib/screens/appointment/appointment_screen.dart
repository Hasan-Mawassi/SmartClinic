import 'package:flutter/material.dart';
import 'package:patient_app/widgets/appointment/appointment_detail_card.dart';

class AppointmentScreen extends StatelessWidget {
  const AppointmentScreen({super.key});
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
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
