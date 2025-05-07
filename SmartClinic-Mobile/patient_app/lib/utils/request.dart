import 'package:dio/dio.dart';

class RequestClient {
  late final Dio dio;

  RequestClient() {
    dio = Dio();

    final options = BaseOptions(
      baseUrl: "http://10.0.2.2:5000/api/v1/",
      headers: {Headers.contentTypeHeader: "application/json"},
    );

    dio.options = options;
  }
}
