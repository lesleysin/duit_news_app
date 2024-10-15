import { AnimatedBuilder, AnimationMethod, AnimationTrigger, Clip, Column, ComponentDescription, Container, DecoratedBox, EdgeInsetsUtils, Expanded, Image, Padding, Positioned, Row, SizedBox, Stack, Text } from "duit_js";
import { NormalText } from "../widgets/text";
import Svg from "./svg";
import { wsjIcon } from "../mock/forbes_icon";

export interface TrendNewsComponentProps {
    title: string;
    description: string;
    tag: string;
    image_url: string;
    id?: string;
}

export const TrendTemp = ComponentDescription("trend", 
    AnimatedBuilder(
        {
            id: "root",
            attributes: {
                tweenDescriptions: [
                    {
                        type: "decorationTween",
                        animatedPropKey: "decoration",
                        duration: 1000,
                        reverseOnRepeat: true,
                        begin: {
                            borderRadius: 8,
                            color: "#ecf7ff",
                        },
                        end: {
                            borderRadius: 12,
                            color: "#DCDCDC",
                        },
                        trigger: AnimationTrigger.onEnter,
                        method: AnimationMethod.repeat,
                    },
                ],
                refs: [
                    {
                        attributeKey: "persistentId",
                        objectKey: "builderId"
                    }
                ]
            }
        },
        Container(
            {
                attributes: {
                    decoration: {
                        borderRadius: 8,
                        color: "#ecf7ff",
    
                    },
                    height: 400,
                    affectedProperties: ["decoration"],
                    parentBuilderId: "id",
                    refs: [
                        {
                            attributeKey: "parentBuilderId",
                            objectKey: "builderId"
                        }
                    ]
                },
            },
            Padding({
                attributes: {
                    padding: EdgeInsetsUtils.all(16),
                },
                
            },
            Column(
                {
                    attributes: {
                        mainAxisAlignment: "spaceBetween",
                    },
    
                },
                [
                    Stack(
                        {
                            attributes: {
                                clipBehavior: Clip.none,
                            },
                        },
                        [
                            SizedBox(
                                {
                                    attributes: {
                                        height: 161,
                                    }
                                },
                                Image({
                                    attributes: {
                                        type: "network",
                                        src: "",
                                        fit: "fill",
                                        refs: [
                                            {
                                                attributeKey: "src",
                                                objectKey: "image_url"
                                            }
                                        ]
                                    }
                                }),
                            ),
                            Positioned(
                                {
                                    attributes: {
                                        left: 12,
                                        top: 12,
                                    }
                                },
                                DecoratedBox(
                                    {
                                        attributes: {
                                            decoration: {
                                                borderRadius: 8,
                                                color: "#2ABAFF"
                                            },
                                        refs: [
                                            {
                                                "attributeKey": "decoration",
                                                "objectKey": "color"
                                            }
                                        ]
                                        },
                                    },
                                    Padding(
                                        {
                                            attributes: {
                                                padding: EdgeInsetsUtils.symmetric({
                                                    vertical: 6,
                                                    horizontal: 8,
                                                }),
                                            }
                                        },
                                        Text(
                                            {
                                                attributes: {
                                                    data: "tag here",
                                                    style: {
                                                        fontWeight: 500,
                                                        fontSize: 14,
                                                        color: "#FFFFFF"
                                                    },
                                                    refs: [
                                                        {
                                                            attributeKey: "data",
                                                            objectKey: "tag"
                                                        }
                                                    ]
                                                }
                                            }
                                        )
                                    )
                                )
                            )
                        ]
                    ),
                    SizedBox(
                        {
                            attributes: {
                                height: 12,
                            }
                        }
                    ),
                    Expanded(
                        {
                            attributes: {}
                        },
                        Text(
                            {
                                attributes: {
                                    data: "",
                                    style: {
                                        fontWeight: 500,
                                        fontSize: 18,
                                    },
                                    maxLines: 3,
                                    overflow: "ellipsis",
                                    refs: [
                                        {
                                            attributeKey: "data",
                                            objectKey: "title"
                                        }
                                    ]
                                }
                            }
                        )
                    ),
                    SizedBox(
                        {
                            attributes: {
                                height: 12,
                            }
                        }
                    ),
                    Row(
                        {
                            attributes: {
                                mainAxisAlignment: "spaceBetween",
                            },
                        },
                        [
                            Row(
                                {
                                    attributes: {},
                                },
                                [
                                    Svg({
                                        width: 14,
                                        height: 14,
                                        content: wsjIcon
                                    }),
                                    SizedBox({
                                        attributes: {
                                            width: 8
                                        }
                                    }),
                                    Text(
                                        {
                                            attributes: {
                                                data: "",
                                                style: {
                                                    fontWeight: 400,
                                                    fontSize: 14,
                                                },
                                                refs: [
                                                    {
                                                        attributeKey: "data",
                                                        objectKey: "description"
                                                    }
                                                ]
                                            }
                                        }
                                    ),
                                ]
                            ),
                            NormalText("Jun 7, 2024"),
                        ],
                    ),
                ]
            )
        )
        )
    )
)

export const TrendNewsComponent = ComponentDescription("trend_news",
    Container(
        {
            attributes: {
                decoration: {
                    borderRadius: 8,
                    color: "#ecf7ff",

                },
                padding: EdgeInsetsUtils.all(8),
                width: 301,
            },
        },
        Column(
            {
                attributes: {
                    mainAxisAlignment: "spaceBetween",
                },

            },
            [
                Stack(
                    {
                        attributes: {
                            clipBehavior: Clip.hardEdge,
                        },
                    },
                    [
                        SizedBox(
                            {
                                attributes: {
                                    height: 161,
                                }
                            },
                            Image({
                                attributes: {
                                    type: "network",
                                    src: "",
                                    fit: "fill",
                                    refs: [
                                        {
                                            attributeKey: "src",
                                            objectKey: "image_url"
                                        }
                                    ]
                                }
                            }),
                        ),
                        Positioned(
                            {
                                attributes: {
                                    left: 12,
                                    top: 12,
                                }
                            },
                            DecoratedBox(
                                {
                                    attributes: {
                                        decoration: {
                                            borderRadius: 8,
                                            color: "#2ABAFF"
                                        }
                                    }
                                },
                                Padding(
                                    {
                                        attributes: {
                                            padding: EdgeInsetsUtils.symmetric({
                                                vertical: 6,
                                                horizontal: 8,
                                            }),
                                        }
                                    },
                                    Text(
                                        {
                                            attributes: {
                                                data: "tag here",
                                                style: {
                                                    fontWeight: 500,
                                                    fontSize: 14,
                                                    color: "#FFFFFF"
                                                },
                                                refs: [
                                                    {
                                                        attributeKey: "data",
                                                        objectKey: "tag"
                                                    }
                                                ]
                                            }
                                        }
                                    )
                                )
                            )
                        )
                    ]
                ),
                SizedBox(
                    {
                        attributes: {
                            height: 12,
                        }
                    }
                ),
                Expanded(
                    {
                        attributes: {}
                    },
                    Text(
                        {
                            attributes: {
                                data: "",
                                style: {
                                    fontWeight: 500,
                                    fontSize: 18,
                                },
                                maxLines: 3,
                                overflow: "ellipsis",
                                refs: [
                                    {
                                        attributeKey: "data",
                                        objectKey: "title"
                                    }
                                ]
                            }
                        }
                    )
                ),
                SizedBox(
                    {
                        attributes: {
                            height: 12,
                        }
                    }
                ),
                Row(
                    {
                        attributes: {
                            mainAxisAlignment: "spaceBetween",
                        },
                    },
                    [
                        Row(
                            {
                                attributes: {},
                            },
                            [
                                Svg({
                                    width: 14,
                                    height: 14,
                                    content: wsjIcon
                                }),
                                SizedBox({
                                    attributes: {
                                        width: 8
                                    }
                                }),
                                Text(
                                    {
                                        attributes: {
                                            data: "",
                                            style: {
                                                fontWeight: 400,
                                                fontSize: 14,
                                            },
                                            refs: [
                                                {
                                                    attributeKey: "data",
                                                    objectKey: "description"
                                                }
                                            ]
                                        }
                                    }
                                ),
                            ]
                        ),
                        NormalText("Jun 7, 2024"),
                    ],
                ),
            ]
        )
    )
);