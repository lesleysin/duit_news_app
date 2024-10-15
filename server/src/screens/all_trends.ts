import { Component, DuitView, EdgeInsetsUtils, Expanded, HttpAction, ListKind, ListViewWidget, SingleChildScrollView, SizedBox, Text } from "duit_js";
import { SeparatorVerticalComponent } from "../components/separator";
import { trendNews, trendNews2 } from "../mock/trends";

export function AllTrends() {
    const buildr = DuitView.builder();

    const root = SizedBox(
        {
            attributes: {
                height: 350,
            },

        },
        ListViewWidget(
            {
                id: "tl",
                controlled: true,
                attributes: {
                    type: ListKind.separated,
                    padding: EdgeInsetsUtils.symmetric({vertical: 0, horizontal: 16}),
                    separator: Component({
                        data: {},
                        tag: SeparatorVerticalComponent.tag
                    }),
                    scrollEndReachedThreshold: 250,
                    childObjects: trendNews2(0).map((trend) => Component(trend)),
                    shrinkWrap: true,
                },
                action: HttpAction("/get_trends", {method: "GET"},[])
            },
        ),
    );

    buildr.rootFrom(root);

    return buildr.build();
}