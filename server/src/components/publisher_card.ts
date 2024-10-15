import { AnimatedBuilder, AnimationMethod, AnimationTrigger, Column, CommonEventGroup, ComponentDescription, Container, EdgeInsetsUtils, GestureDetector, HttpAction, LocalExecutedAction, Row, SizedBox, Text } from "duit_js";
import { wsjIcon } from "../mock/forbes_icon";
import Svg from "./svg";

export const PublisherCard = ComponentDescription("publisher_card",
    Container(
        {
            attributes: {
                decoration: {
                    borderRadius: 8,
                    color: "#ecf7ff"
                },
                padding: EdgeInsetsUtils.all(8)
            },
        },
        Column(
            {
                attributes: {}
            },
            [
                Row(
                    {
                        attributes: {
                            mainAxisAlignment: "spaceBetween",
                        },
                    },
                    [
                        Row(
                            {
                                attributes: {}
                            },
                            [
                                // Svg({
                                //     width: 14,
                                //     height: 14,
                                //     content: wsjIcon
                                // }),
                                SizedBox(
                                    {
                                        attributes: {
                                            width: 8
                                        }
                                    }
                                ),
                                Column(
                                    {
                                        attributes: {
                                            mainAxisAlignment: "spaceBetween",
                                            crossAxisAlignment: "start",
                                        }
                                    },
                                    [
                                        Text(
                                            {
                                                attributes: {
                                                    data: "",
                                                    style: {
                                                        fontWeight: 400,
                                                        fontSize: 14,
                                                        color: "#999999"
                                                    },
                                                    refs: [
                                                        {
                                                            attributeKey: "data",
                                                            objectKey: "publisher_name"
                                                        }
                                                    ]
                                                },
                                            }
                                        ),
                                        Text(
                                            {
                                                attributes: {
                                                    data: "",
                                                    style: {
                                                        fontWeight: 400,
                                                        fontSize: 14,
                                                        color: "#999999"
                                                    },
                                                    refs: [
                                                        {
                                                            attributeKey: "data",
                                                            objectKey: "date"
                                                        }
                                                    ]
                                                },
                                            }
                                        ),
                                    ]
                                )
                            ]
                        ),
                        GestureDetector(
                            {
                                attributes: {
                                    onTap: LocalExecutedAction(
                                        CommonEventGroup(
                                            [

                                            ]
                                        )
                                    )
                                }
                            },
                            AnimatedBuilder(
                                {
                                    id: "builder",
                                    attributes: {
                                        refs: [
                                            {
                                                attributeKey: "persistentId",
                                                objectKey: "builderId"
                                            }
                                        ],
                                        tweenDescriptions: [
                                            {
                                                type: "decorationTween",
                                                begin: {
                                                    borderRadius: 8,
                                                    color: "#DCDCDC",
                                                },
                                                end: {
                                                    borderRadius: 18,
                                                    color: "#ecf7ff",
                                                },
                                                duration: 1000,
                                                animatedPropKey: "decoration",
                                                trigger: AnimationTrigger.onEnter,
                                                method: AnimationMethod.repeat,
                                            },
                                            {
                                                type: "textStyleTween",
                                                duration: 1000,
                                                animatedPropKey: "style",
                                                trigger: AnimationTrigger.onEnter,
                                                method: AnimationMethod.repeat,
                                                begin: {
                                                    fontWeight: 400,
                                                    fontSize: 14,
                                                    color: "#000000"
                                                },
                                                end: {
                                                    fontWeight: 700,
                                                    fontSize: 18,
                                                    color: "#000000"
                                                }

                                            }
                                        ],
                                    },
                                },
                                Container(
                                    {
                                        controlled: false,
                                        id: "follow_button",
                                        attributes: {
                                            decoration: {
                                                borderRadius: 8,
                                                color: "#DCDCDC"
                                            },
                                            padding: EdgeInsetsUtils.all(8),
                                            affectedProperties: ["decoration"],
                                            parentBuilderId: "some_id",
                                            refs: [
                                                {
                                                    attributeKey: "parentBuilderId",
                                                    objectKey: "builderId"
                                                }
                                            ]
                                        },
                                    },
                                    Text(
                                        {
                                            attributes: {
                                                data: "Follow",
                                                style: {
                                                    fontWeight: 400,
                                                    fontSize: 14,
                                                    color: "#000000"
                                                },
                                                affectedProperties: ["style"],
                                                parentBuilderId: "some_id",
                                                refs: [
                                                    {
                                                        attributeKey: "parentBuilderId",
                                                        objectKey: "builderId"
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
            ]
        )
    )
)