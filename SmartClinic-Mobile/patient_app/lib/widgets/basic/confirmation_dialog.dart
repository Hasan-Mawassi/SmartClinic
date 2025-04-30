import 'package:flutter/material.dart';
import 'package:patient_app/widgets/basic/custom_button.dart';
import 'package:patient_app/widgets/basic/custom_button_outlined.dart';

Future<void> showCancelConfirmationDialog({
  required BuildContext context,
  required VoidCallback onConfirm,
}) {
  return showDialog<void>(
    context: context,
    builder: (BuildContext dialogContext) {
      return AlertDialog(
        title: const Text('Cancel Appointment'),
        content: const Text(
          'Are you sure you want to cancel this appointment?',
        ),
        actions: <Widget>[
          CustomOutlinedButton(
            onPressed: () {
              Navigator.of(dialogContext).pop(); // Close the dialog
            },
            text: 'Cancel',
          ),
          CustomButton(
            onPressed: () {
              Navigator.of(dialogContext).pop(); // Close the dialog
              onConfirm(); // Trigger your cancellation logic
            },
            text: 'Confirm',
            isFullWidth: false,
            width: 100,
          ),
        ],
      );
    },
  );
}
