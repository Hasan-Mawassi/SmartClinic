import 'package:flutter/material.dart';
import 'package:patient_app/screens/appointment/appointment_screen.dart';
import 'package:patient_app/screens/home/home_screen.dart';
import 'package:patient_app/screens/medicine/medicine_screen.dart';
import 'package:patient_app/screens/profile/profile_screen.dart';
import 'package:patient_app/constants/app_colors.dart';

class MainLayout extends StatefulWidget {
  const MainLayout({Key? key}) : super(key: key);

  @override
  State<MainLayout> createState() => _MainLayoutState();
}

class _MainLayoutState extends State<MainLayout> {
  int _selectedIndex = 0;

  final List<Widget> _pages = const [
    HomeScreen(),
    MedicineScreen(),
    AppointmentScreen(patientId: "2",),
    ProfileScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _pages[_selectedIndex],
      bottomNavigationBar: NavigationBar(
        selectedIndex: _selectedIndex,
        onDestinationSelected: (int index) {
          setState(() {
            _selectedIndex = index;
          });
        },
        destinations: const [
          NavigationDestination(
            icon: Icon(Icons.home_outlined),
            selectedIcon: Icon(Icons.home, color: AppColors.primary),
            label: 'Home',
          ),
          NavigationDestination(
            icon: Icon(Icons.medication_liquid_outlined),
            selectedIcon: Icon(
              Icons.medication_liquid,
              color: AppColors.primary,
            ),
            label: 'Medicine',
          ),
          NavigationDestination(
            icon: Icon(Icons.calendar_month_outlined),
            selectedIcon: Icon(Icons.calendar_month, color: AppColors.primary),
            label: 'Appointment',
          ),
          NavigationDestination(
            icon: Icon(Icons.person_outlined),
            selectedIcon: Icon(Icons.person, color: AppColors.primary),
            label: 'Profile',
          ),
        ],
      ),
    );
  }
}
