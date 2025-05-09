import 'package:flutter/material.dart';
import '../models/doctor.dart';
import 'package:patient_app/utils/request.dart';

class DoctorProvider with ChangeNotifier {
  final requestClient = RequestClient().dio;

  List<Doctor> _doctors = [];
  List<Doctor> get doctors => _doctors;

  bool _loading = false;
  bool get loading => _loading;

  Future<void> fetchDoctors() async {
    _loading = true;
    notifyListeners();

    try {
      final response = await requestClient.get("app/getdoctors");
      print('doctors response: ${response.data}');
      final List<dynamic> data = response.data;

      _doctors = data.map((json) => Doctor.fromJson(json)).toList();
    } catch (e, stackTrace) {
      print("Failed to fetch doctors: $e");
      print("StackTrace: $stackTrace");
    } finally {
      _loading = false;
      notifyListeners();
    }
  }
}
