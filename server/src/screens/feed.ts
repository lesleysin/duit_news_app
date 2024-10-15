import { Column, Component, DuitView, EdgeInsetsUtils, GestureDetector, HttpAction, ListKind, ListViewWidget, LocalExecutedAction, NavigationEvent, Row, SingleChildScrollView, SizedBox, Text } from "duit_js";
import { BoldText, HeadingText, NormalText } from "../widgets/text";
import { TrendNewsComponent } from "../components/trend_news";
import { SeparatorComponent } from "../components/separator";
import { trendNews } from "../mock/trends";

export function FeedScreen() {
    const buildr = DuitView.builder();

    const root = SingleChildScrollView(
        {
            attributes: {
                padding: EdgeInsetsUtils.all(16)
            }
        },
        Column(
            {
                attributes: {
                    crossAxisAlignment: "start",
                },
            },
            [
                HeadingText("Welcome back, User"),
                NormalText("Discover a world of news that matters to you", "#999999"),
                SizedBox(
                    {
                        attributes: {
                            height: 24,
                        }
                    }
                ),
                Row(
                    {
                        attributes: {
                            mainAxisAlignment: "spaceBetween",
                        }
                    },
                    [
                        BoldText("Trending news"),
                        GestureDetector(
                            {
                                attributes: {
                                    onTap: LocalExecutedAction(NavigationEvent("/all_trends")),
                                },

                            },
                            NormalText("See all", "#999999"),
                        )
                    ]
                ),
                SizedBox(
                    {
                        attributes: {
                            height: 24,
                        }
                    },
                ),
                SizedBox(
                    {
                        attributes: {
                            height: 305
                        }
                    },
                    ListViewWidget(
                        {   
                            controlled: true,
                            attributes: {
                                type: ListKind.separated,
                                shrinkWrap: true,
                                scrollDirection: "horizontal",
                                separator: Component({
                                    tag: "separator",
                                    data: {}
                                }),
                                childObjects: trendNews().map(trend => Component(trend))
                            },
                        },
                    ),
                ),
                SizedBox(
                    {
                        attributes: {
                            height: 24,
                        }
                    }
                ),
        
            ]

        )
    )

    buildr.rootFrom(root);

    return buildr.build();
}