import 'package:patient_app/utils/request.dart';

class AppointmentService {
  final requestClient = RequestClient().dio; // your custom client

  AppointmentService({required requestClient});

  Future<void> deleteAppointment(int id) async {
    final response = await requestClient.delete("appointment/$id");

    if (response.statusCode == 200) {
      return;
    } else if (response.statusCode == 404) {
      throw Exception("Appointment not found");
    } else {
      throw Exception("Failed to delete appointment");
    }
  }
}
