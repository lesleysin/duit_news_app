import { DuitView, SingleChildScrollView, Text } from "duit_js";

export function ProfileScreen() {
    const buildr = DuitView.builder();

    const root = SingleChildScrollView(
        {
            attributes: {}
        },
        Text(
            {
                attributes: {
                    data: "Hellow from profile"
                }
            }
        )
    )

    buildr.rootFrom(root);

    return buildr.build();
}