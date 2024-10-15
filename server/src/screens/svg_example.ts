import { Column, DuitView, SingleChildScrollView, Text } from "duit_js";
import Svg from "../components/svg";
import fs from "fs";

export function SvgExample() {
    const buildr = DuitView.builder();

    const root = SingleChildScrollView(
        {
            attributes: {}
        },
        Column(
            {
                attributes: {},
            },
            [
                Text(
                    {
                        attributes: {
                            data: "Svg widget example"
                        }
                    }),
                Svg({ content: fs.readFileSync("./assets/svg_pic.svg").toString(), height: 500, width: 350 },),
                Text(
                    {
                        attributes: {
                            data: "End of view"
                        }
                    }),
            ]
        )
    )

    buildr.rootFrom(root);

    return buildr.build();
}