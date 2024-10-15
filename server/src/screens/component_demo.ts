import { Column, Component, DuitView, SingleChildScrollView, Text } from "duit_js";

export const ComponentDemo = () => {
    const buildr = DuitView.builder();

    const root = SingleChildScrollView({attributes: {}}, Column({attributes: {}},         [
        Text({attributes: {data: "Duit component demo"}}),
        Component({tag: "demo_cont", data: {"w": 100, "c": "#32a877"}}),
        Component({tag: "demo_cont", data: {"w": 150, "c": "#DCDCDC"}}),
        Component({tag: "demo_cont", data: {"w": 200, "c": "#32a877"}})
    ]));

    buildr.rootFrom(root);

    return buildr.build();
}