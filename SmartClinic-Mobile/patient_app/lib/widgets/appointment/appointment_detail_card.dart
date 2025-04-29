import 'package:flutter/material.dart';

class AppointmentTile extends StatelessWidget {
  final String photoUrl;
  final String doctorName;
  final String date;
  final String time;
  final VoidCallback? onCancel;

  const AppointmentTile({
    Key? key,
    required this.photoUrl,
    required this.doctorName,
    required this.date,
    required this.time,
    this.onCancel,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 8),
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Row(
          children: [
            // Doctor photo
            ClipRRect(
              borderRadius: BorderRadius.circular(8),
              child: Image.network(
                photoUrl,
                width: 80,
                height: 100,
                fit: BoxFit.cover,
              ),
            ),
            const SizedBox(width: 12),

            // Doctor info
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    doctorName,
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 4),
                  const Text("You have an appointment"),
                  const SizedBox(height: 6),
                  Row(
                    children: [
                      Text(date, style: const TextStyle(color: Colors.grey)),
                      const Text(" | "),
                      Text(time, style: const TextStyle(color: Colors.grey)),
                    ],
                  ),
                  const SizedBox(height: 8),
                  OutlinedButton(
                    onPressed: onCancel,
                    child: const Text("Cancel"),
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
