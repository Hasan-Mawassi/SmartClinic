enum Sender { user, ai }
enum MessageType { text, voice }

class Message {
  final String text;
  final Sender sender;
  final MessageType type;

  Message({
    required this.text,
    required this.sender,
    this.type = MessageType.text,
  });
}