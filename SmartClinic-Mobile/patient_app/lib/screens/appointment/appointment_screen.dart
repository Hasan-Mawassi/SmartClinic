import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:patient_app/widgets/appointment/appointment_detail_card.dart';
import 'package:patient_app/constants/app_colors.dart';
import 'package:patient_app/providers/appointment_provider.dart';

class AppointmentScreen extends StatefulWidget {
  final String patientId;

  const AppointmentScreen({super.key, required this.patientId});

  @override
  State<AppointmentScreen> createState() => _AppointmentScreenState();
}

class _AppointmentScreenState extends State<AppointmentScreen> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      Provider.of<AppointmentProvider>(
        context,
        listen: false,
      ).fetchAppointments(widget.patientId);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.backgroundColor,
      appBar: AppBar(title: const Text("Appointment")),
      body: Consumer<AppointmentProvider>(
        builder: (context, provider, _) {
          if (provider.isLoading) {
            return const Center(child: CircularProgressIndicator());
          }

          if (provider.appointments.isEmpty) {
            return const Center(child: Text("No appointments found."));
          }

          return ListView.builder(
            padding: const EdgeInsets.symmetric(vertical: 16.0),
            itemCount: provider.appointments.length,
            itemBuilder: (context, index) {
              final appointment = provider.appointments[index];
              final date =
                  "${appointment.dateTime.day.toString().padLeft(2, '0')}-${appointment.dateTime.month.toString().padLeft(2, '0')}-${appointment.dateTime.year}";
              final time = TimeOfDay.fromDateTime(
                appointment.dateTime,
              ).format(context);

              return Padding(
                padding: const EdgeInsets.symmetric(
                  vertical: 16.0,
                ), // Space between items
                child: AppointmentTile(
                  photoUrl: appointment.doctorImage,
                  doctorName: appointment.doctorName,
                  date: date,
                  time: time,
                  onCancel: () {
                    print("Appointment ${appointment.id} canceled");
                  },
                ),
              );
            },
          );
        },
      ),
    );
  }
}
