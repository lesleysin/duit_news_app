import 'package:dio/dio.dart';

import 'constants.dart';

class HttpService {
  final Dio _dio = Dio();

  Future<void> init() async {
    _dio.options.baseUrl = appUrl;
    _dio.options.headers = {
      "Content-Type": "application/json",
    };
  }

  Future<Response<T>> get<T>(String path) async {
    return await _dio.get(
      path,
    );
  }

  Future<Response<T>> post<T>(String path, Map<String, dynamic> data) async {
    return await _dio.post(
      path,
      data: data,
    );
  }
}
