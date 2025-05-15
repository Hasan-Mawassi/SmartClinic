class Appointment {
  final int id;
  final DateTime dateTime;
  final String doctorName;
  final String doctorImage;

  Appointment({
    required this.id,
    required this.dateTime,
    required this.doctorName,
    required this.doctorImage,
  });

  factory Appointment.fromJson(Map<String, dynamic> json) {
    return Appointment(
      id: json['id'],
      dateTime: DateTime.parse(json['dateTime']),
      doctorName: "Dr. ${json['doctor']['name']}",
      doctorImage: json['doctor']['profilePicture'],
    );
  }
}
