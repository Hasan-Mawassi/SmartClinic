import 'package:flutter/material.dart';
import 'package:patient_app/utils/request.dart';
import 'package:patient_app/utils/handle_ai_response.dart';
import 'package:patient_app/providers/patient_provider.dart';
import 'package:provider/provider.dart';
import '../models/messages.dart';

class ChatProvider with ChangeNotifier {
  final List<Message> _messages = [];

  List<Message> get messages => _messages;

  // These could be set during user login/init
  String username = "john_doe";
  // Map<String, dynamic> doctor = {
  //   "id": "1",
  //   "startTime": "09:00",
  //   "endTime": "17:00",
  //   "slotDuration": 30,
  // };
  Map<String, dynamic>? _selectedDoctor;

  Map<String, dynamic>? get selectedDoctor => _selectedDoctor;

  void setSelectedDoctor(Map<String, dynamic> doctor) {
    _selectedDoctor = doctor;
    print('selected doctor ---============= $_selectedDoctor');
    notifyListeners();
  }

  void addUserMessage(String text, int patientId, {bool isVoice = false}) {
    final message = Message(
      text: text,
      sender: Sender.user,
      type: isVoice ? MessageType.voice : MessageType.text,
    );
    _messages.add(message);
    notifyListeners();
    isVoice ? sendVoiceMessage(text,patientId) : _sendToApi(text,patientId);
    // _sendToApi(text);
  }

  Future<void> _sendToApi(String userInput , int patientId) async {
    final requestClient = RequestClient().dio;
    try {
      print(
        'reqquestClient: $username  userInput: $userInput  doctor: $_selectedDoctor',
      );
      final response = await requestClient.post(
        "ai/chat",
        data: {"userName": patientId, "message": userInput, "doctor": _selectedDoctor},
      );
      print(response);
      handleAIResponse(response, _messages);
    } catch (e) {
      print("Request failed:========================= $e");
      _messages.add(
        Message(text: "Failed to connect to server.", sender: Sender.ai),
      );
    }

    notifyListeners();
  }

  void sendVoiceMessage(String base64Audio,int patientId) async {
    final requestClient = RequestClient().dio;
    messages.add(Message(sender: Sender.user, text: "[Voice message sent]"));
    notifyListeners();

    // Send base64Audio to your API here
    try {
      final response = await requestClient.post(
        "ai/voice",
        data: {
          "userName": patientId,
          "audioBase64": base64Audio,
          "doctor": _selectedDoctor,
          "fileType": "m4a",
        },
      );
      print("Response: ${response.data}");
      handleAIResponse(response, _messages);
    } catch (e) {
      print("Request failed:========================= $e");
      _messages.add(
        Message(text: "Failed to connect to server.", sender: Sender.ai),
      );
    }

    notifyListeners();
  }
}
