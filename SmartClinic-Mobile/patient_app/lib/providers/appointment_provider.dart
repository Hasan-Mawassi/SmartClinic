import 'package:flutter/material.dart';
import 'package:patient_app/utils/request.dart';
import '../models/appointment.dart';

class AppointmentProvider with ChangeNotifier {
  final requestClient = RequestClient().dio;

  List<Appointment> _appointments = [];
  bool _isLoading = false;

  List<Appointment> get appointments => _appointments;
  bool get isLoading => _isLoading;
void removeAppointment(int id) {
  _appointments.removeWhere((a) => a.id == id);
  notifyListeners();
}
  Future<void> fetchAppointments(int patientId) async {
    try {
      _isLoading = true;
      notifyListeners();
      final response = await requestClient.get("patient/getAppointments?id=$patientId");
      print(response);
      final data = response.data['appointments'] as List;

      _appointments = data.map((e) => Appointment.fromJson(e)).toList();
    } catch (e) {
      print("Error fetching appointments: $e");
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }
}
