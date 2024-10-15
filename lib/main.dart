import 'package:duit_kernel/duit_kernel.dart';
import 'package:flutter/material.dart';
import 'package:news_app_duit/bdui/svg_widget.dart';
import 'package:news_app_duit/core/dio.dart';

import 'navigation/router.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  DuitRegistry.register(
    "svg",
    modelFactory: svgModelFactory,
    buildFactory: svgBuildFactory,
    attributesFactory: svgAttributeFactory,
  );

  final http = HttpService();
  await http.init();

  final res = await http.get("/components");

  final data = List.from(res.data).cast<Map<String, dynamic>>();

  DuitRegistry.registerComponents(data);

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.red),
        useMaterial3: true,
      ),
      routerConfig: router,
    );
  }
}
