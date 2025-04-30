import 'package:flutter/material.dart';
import 'dart:math';

class ArcPainter extends CustomPainter {
  final double startAngleDeg;
  final double sweepAngleDeg;

  ArcPainter({required this.startAngleDeg, required this.sweepAngleDeg});

  @override
  void paint(Canvas canvas, Size size) {
    final paint =
        Paint()
          ..color = Colors.blue
          ..style = PaintingStyle.fill;

    final rect = Rect.fromLTWH(0, 0, size.width, size.height);
    final startAngle = radians(startAngleDeg);
    final sweepAngle = radians(sweepAngleDeg);

    final path =
        Path()
          ..moveTo(rect.center.dx, rect.center.dy)
          ..arcTo(rect, startAngle, sweepAngle, false)
          ..close();

    canvas.drawPath(path, paint);
  }

  double radians(double degrees) => degrees * pi / 180;

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}