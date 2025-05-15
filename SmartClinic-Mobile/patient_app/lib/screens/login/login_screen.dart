import 'package:flutter/material.dart';
import 'package:patient_app/utils/arc_painter.dart';
import 'package:patient_app/widgets/basic/custom_button.dart';
import 'package:patient_app/widgets/basic/custom_input_field.dart';
import 'package:patient_app/widgets/basic/rounded_card.dart';
import 'package:patient_app/constants/app_colors.dart';
import 'package:go_router/go_router.dart';
import 'package:patient_app/services/auth_login_service.dart';
import 'package:patient_app/providers/patient_provider.dart';
import 'package:provider/provider.dart';
class LoginScreen extends StatelessWidget {
  final TextEditingController _emailController = TextEditingController();
final TextEditingController _passwordController = TextEditingController();

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
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 16),
              child: Center(
                child: RoundedCard(
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
                            context.go(
                              '/signup',
                            ); // <- uses go_router to navigate
                          },
                          child: Text(
                            "Create an Account. Sign Up",
                            style: TextStyle(
                              color: Colors.black,
                              // decoration: TextDecoration.underline,
                            ),
                          ),
                        ),
                      ),
                      CustomButton(
                        text: "Login",
                        onPressed: () async {
                          final email = _emailController.text.trim();
                          final password = _passwordController.text;

                          if (email.isEmpty || password.isEmpty) {
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(content: Text("Please fill in all fields")),
                            );
                            return;
                          }

                          final authService = AuthService();

                          try {
                            final response = await authService.login(email, password);

                            // Extract patient data from response
                            final patientId = response.data['id'];
                            final patientName = response.data['name'];

                            // Save to provider
                            Provider.of<PatientProvider>(context, listen: false).setPatient(
                              id: patientId,
                              name: patientName,
                            );

                            // Navigate to home
                            context.go('/');
                          } catch (e) {
                            ScaffoldMessenger.of(context).showSnackBar(
                              SnackBar(content: Text("Login failed: ${e.toString()}")),
                            );
                          }
                        },
                        backgroundColor: AppColors.primary,
                        textColor: AppColors.white,
                        isFullWidth: false,
                        width: 150,
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
