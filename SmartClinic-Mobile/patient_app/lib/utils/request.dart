import 'package:dio/dio.dart';

class RequestClient {
  late final Dio dio;

  RequestClient() {
    dio = Dio();

    final options = BaseOptions(
      baseUrl: "http://192.168.1.13:5000/api/v1/",
      headers: {Headers.contentTypeHeader: "application/json"},
    );

    dio.options = options;
  }
}
