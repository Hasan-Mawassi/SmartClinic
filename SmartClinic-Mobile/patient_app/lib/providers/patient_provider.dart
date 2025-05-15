import 'package:flutter/material.dart';

class PatientProvider extends ChangeNotifier {
  String? _patientId;
  String? _patientName;

  String? get patientId => _patientId;
  String? get patientName => _patientName;

  void setPatient({required String id, required String name}) {
    _patientId = id;
    _patientName = name;
    notifyListeners();
  }

  void clearPatient() {
    _patientId = null;
    _patientName = null;
    notifyListeners();
  }
}
