import 'package:flutter/material.dart';

class RoundedCard extends StatelessWidget {
  final Widget? child;
  final double borderRadius;
  final EdgeInsetsGeometry? padding;
  final EdgeInsetsGeometry? margin;

  const RoundedCard({
    Key? key,
    this.child,
    this.borderRadius = 16.0,
    this.padding,
    this.margin,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(borderRadius),
      ),
      color: Colors.white,
      elevation: 0, // No shadow
      margin: margin ?? EdgeInsets.all(18.0),
      child: Padding(
        padding: padding ?? EdgeInsets.all(16.0),
        child: child ?? SizedBox.shrink(),
      ),
    );
  }
}
