import 'package:flutter/material.dart';
import 'package:patient_app/constants/app_colors.dart';
import 'package:patient_app/widgets/basic/custom_button.dart';

class DoctorCard extends StatelessWidget {
  final String name;
  final String imageUrl;
  final double rating;
  final int reviews;
  final VoidCallback? onBook;
  final VoidCallback? onView;

  const DoctorCard({
    super.key,
    required this.name,
    required this.imageUrl,
    required this.rating,
    required this.reviews,
    this.onBook,
    this.onView,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.all(12),
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Square image
            Container(
              width: 80,
              height: 100,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(8),
                image: DecorationImage(
                  image: NetworkImage(imageUrl),
                  fit: BoxFit.cover,
                ),
              ),
            ),
            const SizedBox(width: 12),

            // Right side content
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    name,
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 6),

                  Row(
                    children: [
                      const Icon(Icons.star, size: 18, color: Colors.orange),
                      const SizedBox(width: 4),
                      Text(
                        "$rating",
                        style: const TextStyle(fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(width: 8),
                      Text(
                        "($reviews reviews)",
                        style: const TextStyle(color: Colors.grey),
                      ),
                    ],
                  ),
                  const SizedBox(height: 10),

                  Row(
                    children: [
                      Expanded(
                        child: SizedBox(
                          height: 40,
                          child: CustomButton(
                            text: "Book",
                            onPressed: onBook ?? () {},
                            backgroundColor: AppColors.primary,
                            isFullWidth: false,
                            width: 10,
                          ),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: SizedBox(
                          height: 40,
                          child: OutlinedButton(
                            onPressed: onView,
                            child: const Text("View"),
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
