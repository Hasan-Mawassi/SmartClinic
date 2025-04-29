import 'package:flutter/material.dart';
import 'package:patient_app/constants/app_colors.dart';
import 'package:patient_app/widgets/home/search_bar.dart'; // Adjust the path accordingly
import 'package:patient_app/widgets/home/custom_doctor_tile.dart'; // Adjust the path accordingly
import 'package:flutter_svg/flutter_svg.dart';
import 'package:go_router/go_router.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  _HomeScreemState createState() => _HomeScreemState();
}

class _HomeScreemState extends State<HomeScreen> {
  final TextEditingController _searchController = TextEditingController();
  String _searchQuery = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Doctors")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            CustomSearchBar(
              controller: _searchController,
              onChanged: (value) {
                setState(() {
                  _searchQuery = value;
                });
              },
              onClear: () {
                setState(() {
                  _searchQuery = '';
                });
              },
            ),
            const SizedBox(height: 20),
            Expanded(
              child: ListView(
                children: [
                  DoctorCard(
                    name: "Dr. Sarah Johnson",
                    imageUrl: "https://picsum.photos/150",
                    rating: 4.8,
                    reviews: 120,
                    onBook: () {
                      print("onBook clicked");
                    },
                    onView: () {
                      print("View clicked");
                    },
                  ),
                  DoctorCard(
                    name: "Dr. Sarah Johnson",
                    imageUrl: "https://picsum.photos/150",
                    rating: 4.8,
                    reviews: 120,
                    onBook: () {
                      print("onBook clicked");
                    },
                    onView: () {
                      print("View clicked");
                    },
                  ),
                  DoctorCard(
                    name: "Dr. hasan mawassi",
                    imageUrl: "https://picsum.photos/150",
                    rating: 4.8,
                    reviews: 120,
                    onBook: () {
                      print("onBook clicked");
                    },
                    onView: () {
                      print("View clicked");
                    },
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Your action
          context.push('/chatbot');
        },
        backgroundColor: AppColors.secandary, // Customize background
        child: SvgPicture.asset(
          'assets/icons/boot.svg',
          width: 40,
          height: 40,
          // Optional if your SVG is colorless
        ),
      ),
    );
  }
}
