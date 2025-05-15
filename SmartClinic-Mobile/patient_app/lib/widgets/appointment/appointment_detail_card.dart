import 'package:flutter/material.dart';
import 'package:patient_app/widgets/basic/custom_button_outlined.dart';
import 'package:patient_app/widgets/basic/confirmation_dialog.dart';
import 'package:patient_app/widgets/basic/rounded_card.dart';

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
    return RoundedCard(
      margin: const EdgeInsets.symmetric(vertical: 3),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Row(
          children: [
            // Doctor photo
            // ClipRRect(
            //   borderRadius: BorderRadius.circular(8),
            //   child: Image.network(
            //     photoUrl,
            //     width: 80,
            //     height: 100,
            //     fit: BoxFit.cover,
            //   ),
            // ),
            const SizedBox(width: 5),

            // Doctor info
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    doctorName,
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 4),
                  const Text("You have an appointment"),
                  const SizedBox(height: 6),
                  // Modified this Row to prevent overflow
                  Row(
                    children: [
                      Flexible(
                        child: Text(
                          date,
                          style: const TextStyle(color: Colors.grey),
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                      const Text(" | "),
                      Flexible(
                        child: Text(
                          time,
                          style: const TextStyle(color: Colors.grey),
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                      SizedBox(width: 100),
                      Flexible(
                        child: Padding(
                          padding: const EdgeInsets.only(left: 2),
                          child: CustomOutlinedButton(
                            text: "Cancel",
                            onPressed: () {
                              showCancelConfirmationDialog(
                                context: context,
                                onConfirm: () {
                                  print("Appointment cancelled");
                                  // Add your cancellation logic here
                                },
                              );
                            },
                          ),
                        ),
                      ),
                    ],
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
