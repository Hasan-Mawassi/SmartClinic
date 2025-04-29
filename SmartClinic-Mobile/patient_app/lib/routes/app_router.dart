// import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:patient_app/screens/login/login_screen.dart';
import 'package:patient_app/screens/signup/signup_screen.dart';
import 'package:patient_app/layouts/main_layout.dart';

final GoRouter router = GoRouter(
  initialLocation: '/',
  routes: [
    GoRoute(path: '/', builder: (context, state) => MainLayout()),
    GoRoute(path: '/login', builder: (context, state) => LoginScreen()),
    GoRoute(path: '/signup', builder: (context, state) => SignupScreen()),
  ],
);
