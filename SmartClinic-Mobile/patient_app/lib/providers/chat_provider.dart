
import 'package:flutter/material.dart';
import 'package:patient_app/utils/request.dart';
import 'package:patient_app/utils/handle_ai_response.dart';

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

  void addUserMessage(String text, {bool isVoice = false}) {
    final message = Message(
      text: text,
      sender: Sender.user,
      type: isVoice ? MessageType.voice : MessageType.text,
    );
    _messages.add(message);
    notifyListeners();
    isVoice ? sendVoiceMessage(text) : _sendToApi(text);
    // _sendToApi(text);
  }

  Future<void> _sendToApi(String userInput) async {
    final requestClient = RequestClient().dio;
    try {
      final response = await requestClient.post(
        "ai/chat",
        data: {"userName": username, "message": userInput, "doctor": doctor},
      );
     handleAIResponse(response, _messages);
     
    } catch (e) {
      _messages.add(
        Message(text: "Failed to connect to server.", sender: Sender.ai),
      );
    }

    notifyListeners();
  }

  void sendVoiceMessage(String base64Audio) async {
    final requestClient = RequestClient().dio;
    messages.add(Message(sender: Sender.user, text: "[Voice message sent]"));
    notifyListeners();

    // Send base64Audio to your API here
    try {
      final response = await requestClient.post(
        "ai/voice",
        data: {
          "userName": username,
          "audioBase64": base64Audio,
          "doctor": doctor,
          "fileType": "m4a",
        },
      );
      print("Response: ${response.data}");
       handleAIResponse(response, _messages);
    } catch (e) {
      _messages.add(
        Message(text: "Failed to connect to server.", sender: Sender.ai),
      );
      print("Request failed: $e");
    }
    

    notifyListeners();
  }
}


