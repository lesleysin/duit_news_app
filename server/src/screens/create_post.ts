import { DuitView, SingleChildScrollView, Text } from "duit_js";

export function CreatePostScreen() {
    const buildr = DuitView.builder();

    const root = SingleChildScrollView(
        {
            attributes: {}
        },
        Text(
            {
                attributes: {
                    data: "Hellow from post creator"
                }
            }
        )
    )

    buildr.rootFrom(root);

    return buildr.build();
}