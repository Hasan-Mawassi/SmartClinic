import 'package:flutter/material.dart';
import 'package:patient_app/constants/app_colors.dart';
import 'package:patient_app/widgets/home/search_bar.dart'; // Adjust the path accordingly
import 'package:patient_app/widgets/home/custom_doctor_tile.dart'; // Adjust the path accordingly
import 'package:provider/provider.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:go_router/go_router.dart';
import 'package:patient_app/providers/doctor_provider.dart';
import 'package:patient_app/providers/chat_provider.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  _HomeScreemState createState() => _HomeScreemState();
}

class _HomeScreemState extends State<HomeScreen> {
  final TextEditingController _searchController = TextEditingController();
  String _searchQuery = '';
  @override
  void initState() {
    super.initState();
    // Fetch doctors when screen is loaded
    WidgetsBinding.instance.addPostFrameCallback((_) {
      final doctorProvider = Provider.of<DoctorProvider>(
        context,
        listen: false,
      );
      doctorProvider.fetchDoctors();
    });
  }

  @override
  Widget build(BuildContext context) {
    final doctorProvider = Provider.of<DoctorProvider>(context);

    if (doctorProvider.loading) {
      return const Scaffold(body: Center(child: CircularProgressIndicator()));
    }

    final filteredDoctors =
        doctorProvider.doctors.where((doctor) {
          return doctor.name.toLowerCase().contains(_searchQuery.toLowerCase());
        }).toList();

    return Scaffold(
      backgroundColor: AppColors.backgroundColor,
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
              child: ListView.builder(
                itemCount: filteredDoctors.length,
                itemBuilder: (context, index) {
                  final doctor = filteredDoctors[index];
                  return DoctorCard(
                    name: 'Dr.  ${doctor.name}',
                    imageUrl: doctor.profilePicture,
                    rating: doctor.yearsExperience.toDouble(),
                    reviews: 0,
                    onBook: () {
                      final selectedDoctor = {
                        "id": doctor.id.toString(),
                        "name": doctor.name,
                        "profilePic": doctor.profilePicture,
                        "startTime": doctor.schedules[0].startTime,
                        "endTime": doctor.schedules[0].endTime,
                        "slotDuration": doctor.schedules[0].slotDuration,
                      };

                      Provider.of<ChatProvider>(
                        context,
                        listen: false,
                      ).setSelectedDoctor(selectedDoctor);

                      context.push('/chatbot');
                    },
                    onView: () {
                      print("View clicked for ${doctor.name}");
                    },
                  );
                },
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
