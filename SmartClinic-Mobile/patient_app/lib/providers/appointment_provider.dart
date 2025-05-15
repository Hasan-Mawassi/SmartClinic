import 'package:flutter/material.dart';
import 'package:patient_app/utils/request.dart';
import '../models/appointment.dart';

class AppointmentProvider with ChangeNotifier {
  final requestClient = RequestClient().dio;

  List<Appointment> _appointments = [];
  bool _isLoading = false;

  List<Appointment> get appointments => _appointments;
  bool get isLoading => _isLoading;

  Future<void> fetchAppointments(String patientId) async {
    try {
      _isLoading = true;
      notifyListeners();
      final response = await requestClient.get("patient/getAppointments?id=2");

      final data = response.data as List;
      
      _appointments = data.map((e) => Appointment.fromJson(e)).toList();
    } catch (e) {
      print("Error fetching appointments: $e");
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }
}
