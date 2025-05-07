import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:patient_app/utils/request.dart';

import '../models/messages.dart';

class ChatProvider with ChangeNotifier {
  final List<Message> _messages = [];

  List<Message> get messages => _messages;

  // These could be set during user login/init
  String username = "john_doe";
  Map<String, dynamic> doctor = {
    "id": "1",
    "startTime": "09:00",
    "endTime": "17:00",
    "slotDuration": 30,
  };

  void addUserMessage(String text) {
    _messages.add(Message(text: text, sender: Sender.user));
    notifyListeners();
    _sendToApi(text);
  }

  Future<void> _sendToApi(String userInput) async {
    final requestClient = RequestClient().dio;
    try {
      final response = await requestClient.post(
        "ai/chat",
        data: {"userName": username, "message": userInput, "doctor": doctor},
      );

      if (response.statusCode == 200) {
        final data = response.data;
        final rawMessage =
            data['data']['message'] ?? 'Sorry, something went wrong.';

        
        try {
          final parsedMessage = json.decode(rawMessage);

          // Case: Available slots
          if (parsedMessage['available_slots'] != null) {
            final date = parsedMessage['date'];
            final prompt = parsedMessage['message'];
            
            final slots = parsedMessage['available_slots'] as List<dynamic>;

            final formatted =
                '\n$prompt \n Available slots on $date:\n' +
                slots.asMap().entries.map((e) => "${e.key + 1}. ${e.value}").join('\n');

            _messages.add(Message(text: formatted, sender: Sender.ai));
          }
          // Case: Appointment confirmation
          else if (parsedMessage['appointment_details'] != null) {
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
            _messages.add(Message(text: formatted, sender: Sender.ai));
          } else {
            // Unstructured or unknown format
            _messages.add(Message(text: rawMessage, sender: Sender.ai));
          }
        } catch (e) {
          // rawMessage is plain text
          _messages.add(Message(text: rawMessage, sender: Sender.ai));
        }
      } else {
        _messages.add(
          Message(
            text: "Error: ${response.statusCode} ${response.statusMessage}",
            sender: Sender.ai,
          ),
        );
      }
    } catch (e) {
      _messages.add(
        Message(text: "Failed to connect to server.", sender: Sender.ai),
      );
    }

    notifyListeners();
  }

  void sendVoiceMessage(String base64Audio) async {
    final requestClient = RequestClient().dio;
  messages.add(
    Message(sender: Sender.user, text: "[Voice message sent]"),
  );
  notifyListeners();

  // Send base64Audio to your API here
  final response = await requestClient.post(
        "ai/voice",
        data: {"userName": username, "message": base64Audio, "doctor": doctor, "fileType": "m4a"},
      );
  // = await api.sendVoice(base64Audio);

  messages.add(
    Message(sender: Sender.ai, text: response.data['message']),
  );
  notifyListeners();
}

}
