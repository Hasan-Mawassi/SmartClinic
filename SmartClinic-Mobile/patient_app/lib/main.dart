import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'routes/app_router.dart';
import 'package:patient_app/providers/chat_provider.dart';
import 'package:patient_app/providers/doctor_provider.dart';
import 'package:patient_app/providers/appointment_provider.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
      ChangeNotifierProvider(create: (_) => ChatProvider()),
      ChangeNotifierProvider(create: (_) => DoctorProvider()),
       ChangeNotifierProvider(create: (_) => AppointmentProvider()),
      ],
      child: const MyApp(),
    ), 
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: router,
      debugShowCheckedModeBanner: false,
    );
  }
}
