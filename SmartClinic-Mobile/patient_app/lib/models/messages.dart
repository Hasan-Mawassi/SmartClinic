enum Sender { user, ai }

class Message {
  final String text;
  final Sender sender;

  Message({required this.text, required this.sender});
}
