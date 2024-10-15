import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:news_app_duit/bdui/duit_screen.dart';

import 'main_scaffold.dart';

final routes = <String>["/feed", "/all_trends"];

final router = GoRouter(
  initialLocation: "/feed",
  routes: [
    ShellRoute(
      routes: [
        GoRoute(
            path: routes[0],
            builder: (context, state) {
              return DuitScreen(
                path: routes[0],
              );
            }),
        GoRoute(
            path: routes[1],
            builder: (context, state) {
              return DuitScreen(
                path: routes[1],
              );
            }),
      ],
      builder: (BuildContext context, GoRouterState state, Widget child) {
        return MainScaffold(child: child);
      },
    ),
  ],
);
