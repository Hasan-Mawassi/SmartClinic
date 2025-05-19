import 'package:dio/dio.dart';
import 'package:patient_app/utils/request.dart'; // adjust the path as needed

class AuthService {
 final requestClient = RequestClient().dio;

  Future<Response> login(String email, String password) async {
    try {
      final response = await requestClient.post(
        'auth/patient/login', 
        data: {
          'email': email,
          'password': password,
        },
      );

      return response;
    } on DioException catch (e) {
      // Handle API error responses
      final errorMessage = e.response?.data?['message'] ?? 'Login failed';
      throw Exception(errorMessage);
    } catch (e) {
      throw Exception('Something went wrong');
    }
  }
}
