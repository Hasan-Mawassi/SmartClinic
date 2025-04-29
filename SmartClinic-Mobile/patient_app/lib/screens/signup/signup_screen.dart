import 'package:flutter/material.dart';
import 'package:patient_app/utils/arc_painter.dart';
import 'package:patient_app/widgets/basic/custom_input_field.dart';
import 'package:patient_app/widgets/basic/rounded_card.dart';
import 'package:patient_app/constants/app_colors.dart';
import 'package:go_router/go_router.dart';

class SignupScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: AppColors.backgroundColor,
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
                  color: AppColors.white,
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
            LayoutBuilder(
              builder: (context, constraints) {
                return SingleChildScrollView(
                  padding: EdgeInsets.symmetric(horizontal: 16),
                  child: ConstrainedBox(
                    constraints: BoxConstraints(
                      minHeight: constraints.maxHeight,
                    ),
                    child: IntrinsicHeight(
                      child: Center(
                        child: RoundedCard(
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Text(
                                "Register",
                                style: TextStyle(
                                  fontSize: 24,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              SizedBox(height: 20),
                              CustomInputField(
                                hintText: 'Enter Username',
                                icon: Icons.person_outlined,
                                keyboardType: TextInputType.emailAddress,
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
                                keyboardType: TextInputType.text,
                                obscureText: true,
                              ),
                              SizedBox(height: 20),
                              Padding(
                                padding: EdgeInsets.only(
                                  top: 10.0,
                                  right: 30.0,
                                  bottom: 15.0,
                                ),
                                child: GestureDetector(
                                  onTap: () {
                                    context.go('/login');
                                  },
                                  child: Text(
                                    "Have an Account? Login",
                                    style: TextStyle(color: Colors.black),
                                  ),
                                ),
                              ),
                              ElevatedButton(
                                onPressed: () {},
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: AppColors.primary,
                                  padding: EdgeInsets.symmetric(
                                    horizontal: 40,
                                    vertical: 12,
                                  ),
                                ),
                                child: Text(
                                  "Register",
                                  style: TextStyle(
                                    fontSize: 16,
                                    fontWeight: FontWeight.bold,
                                    color: AppColors.white,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
