import 'package:flutter/material.dart';
import 'package:patient_app/utils/arc_painter.dart';
import 'package:patient_app/widgets/basic/custom_input_field.dart';

class LoginScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 121, 188, 255),
      body: Stack(
        children: [
          // Top-right arc (240° to 330°)
          Positioned(
            top: -250,
            right: -250,
            child: CustomPaint(
              size: Size(500, 500),
              painter: ArcPainter(startAngleDeg: -180, sweepAngleDeg: -90),
            ),
          ),
          Positioned(
            top: 20,
            right: 20,
            child: Text(
              "Smart Clinic",
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
          ),
          // Bottom-left arc (0° to 90°)
          Positioned(
            bottom: -200,
            left: -200,
            child: CustomPaint(
              size: Size(400, 400),
              painter: ArcPainter(startAngleDeg: 0, sweepAngleDeg: -90),
            ),
          ),
          // Center login card
          Center(
            child: Card(
              elevation: 8,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(20),
              ),
              color: Colors.white,
              child: Container(
                width: 300,
                padding: EdgeInsets.all(20),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      "Welcome Back",
                      style: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 20),
                    CustomInputField(
                      hintText: 'Enter your email',
                      icon: Icons.email_outlined,
                      keyboardType: TextInputType.emailAddress,
                    ),
                    SizedBox(height: 20),
                    CustomInputField(
                      hintText: 'Enter your password',
                      icon: Icons.lock_outlined,
                      keyboardType: TextInputType.visiblePassword,
                    ),
                    SizedBox(height: 20),
                    ElevatedButton(
                      onPressed: () {},
                      child: Text("Login"),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.blue,
                        padding: EdgeInsets.symmetric(
                          horizontal: 40,
                          vertical: 12,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
