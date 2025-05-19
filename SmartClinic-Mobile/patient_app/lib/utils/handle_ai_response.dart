import 'dart:convert';
import 'package:dio/dio.dart';
import '../models/messages.dart'; // Adjust path to your Message model
// import '../models/sender.dart';  // Adjust path to your Sender enum/class

void handleAIResponse(Response response, List<Message> messages) {
  if (response.statusCode == 200) {
    final data = response.data;

    try {
      final responseData = data['data'];

      if (responseData.containsKey('available_slots')) {
        // Handle available slots response
        final String prompt = responseData['message'] ?? 'Available slots:';
        final String date = responseData['date'] ?? '';
        final String slots = responseData['available_slots'] ?? '';

        final String formatted =
            '\n$prompt\n\n$slots \n  Please let me know which time works best for you by replying the number next to your preferred option!';

        messages.add(Message(text: formatted, sender: Sender.ai));
      } else if (responseData.containsKey('appointment_details')) {
        // Handle booked appointment response
        final details = responseData['appointment_details'];
        final String date = details['date'] ?? '';
        final String time = details['time'].substring(0, 5) ?? '';

        final String formatted = '''
            📅 Appointment Details:
            - Date: $date
            - Time: $time
            
            📝 Note: You will found your booked   
                      appointments in appointment
                      section
            ''';

        messages.add(Message(text: formatted, sender: Sender.ai));
      } else {
        // Unexpected format
        final String fallback = data['message'] ?? 'Unexpected response.';
        messages.add(Message(text: fallback, sender: Sender.ai));
      }
    } catch (e) {
      // Handle parsing or logic error
      messages.add(
        Message(text: 'Error parsing response: $e', sender: Sender.ai),
      );
    }
  }
}
