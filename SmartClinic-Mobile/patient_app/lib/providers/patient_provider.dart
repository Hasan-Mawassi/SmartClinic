import 'dart:ffi';

import 'package:flutter/material.dart';

class PatientProvider extends ChangeNotifier {
  int? _patientId;
  String? _patientName;

  int? get patientId => _patientId;
  String? get patientName => _patientName;

  void setPatient({required int id, required String name}) {
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
