import "dart:async";

import "package:flutter/material.dart";
import "package:flutter_duit/flutter_duit.dart";
import "package:go_router/go_router.dart";

class _Handler implements ExternalEventHandler {
  @override
  FutureOr<void> handleNavigation(
    BuildContext context,
    String path,
    Object? extra,
  ) {
    context.push(path);
  }

  @override
  FutureOr<void> handleOpenUrl(String url) {
    // TODO: implement handleOpenUrl
    throw UnimplementedError();
  }

  @override
  FutureOr<void> handleCustomEvent(
      BuildContext context, String key, Object? extra) {
    // TODO: implement handleCustomEvent
    throw UnimplementedError();
  }
}

class DuitScreen extends StatefulWidget {
  final String path;

  const DuitScreen({
    super.key,
    required this.path,
  });

  @override
  State<DuitScreen> createState() => _DuitScreenState();
}

class _DuitScreenState extends State<DuitScreen> {
  late final DuitDriver _driver;

  @override
  void initState() {
    _driver = DuitDriver(
      widget.path,
      eventHandler: _Handler(),
      transportOptions: HttpTransportOptions(
        baseUrl: "http://localhost:8999",
        defaultHeaders: {
          "Content-Type": "application/json",
        }
      ),
    );
    super.initState();
  }

  @override
  void dispose() {
    _driver.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return DuitViewHost(
      driver: _driver,
      context: context,
      placeholder: const CircularProgressIndicator(),
    );
  }
}