import 'dart:convert';
import 'package:dio/dio.dart';
import '../models/messages.dart'; // Adjust path to your Message model
// import '../models/sender.dart';  // Adjust path to your Sender enum/class

void handleAIResponse(Response response, List<Message> messages) {
  if (response.statusCode == 200) {
    final data = response.data;
    final rawMessage = data['data']['message'] ?? 'Sorry, something went wrong.';

    try {
      final parsedMessage = json.decode(rawMessage);

      if (parsedMessage['available_slots'] != null) {
        final date = parsedMessage['date'];
        final prompt = parsedMessage['message'];
        final slots = parsedMessage['available_slots'] as List<dynamic>;

        final formatted =
            '\n$prompt \n Available slots on $date:\n' +
            slots
                .asMap()
                .entries
                .map((e) => "${e.key + 1}. ${e.value}")
                .join('\n');

        messages.add(Message(text: formatted, sender: Sender.ai));
      } else if (parsedMessage['appointment_details'] != null) {
        final details = parsedMessage['appointment_details'];
        final date = details['date'];
        final time = details['time'];
        final status = details['status'];
        final note = parsedMessage['message'] ?? "";

        final formatted = '''
📅 Appointment Details:
- Date: $date
- Time: $time
- Status: $status

📝 Note: $note
''';
        messages.add(Message(text: formatted, sender: Sender.ai));
      } else {
        messages.add(Message(text: rawMessage, sender: Sender.ai));
      }
    } catch (e) {
      messages.add(Message(text: rawMessage, sender: Sender.ai));
    }
  } else {
    messages.add(
      Message(
        text: "Error: ${response.statusCode} ${response.statusMessage}",
        sender: Sender.ai,
      ),
    );
  }
}
