class Schedule {
  final int id;
  final String startTime;
  final String endTime;
  final int slotDuration;
  final List<String> offdays;

  Schedule({
    required this.id,
    required this.startTime,
    required this.endTime,
    required this.slotDuration,
    required this.offdays,
  });

  factory Schedule.fromJson(Map<String, dynamic> json) {
    return Schedule(
      id: json['id'],
      startTime: json['startTime'].replaceAll('"', ''),
      endTime: json['endTime'].replaceAll('"', ''),
      slotDuration: json['slotDuration'],
      offdays: List<String>.from(json['offdays']),
    );
  }
}

class Doctor {
  final int id;
  final String name;
  final String email;
  final int yearsExperience;
  final String profilePicture;
  final List<Schedule> schedules;

  Doctor({
    required this.id,
    required this.name,
    required this.email,
    required this.yearsExperience,
    required this.profilePicture,
    required this.schedules,
  });

  factory Doctor.fromJson(Map<String, dynamic> json) {
    final schedulesJson = json['schedules'];

    return Doctor(
      id: json['id'],
      name: json['name'],
      email: json['email'],
      yearsExperience: json['yearsExperience'],
      profilePicture: json['profilePicture'],
      schedules:
          schedulesJson is List
              ? schedulesJson.map((e) => Schedule.fromJson(e)).toList()
              : [],
    );
  }
}
