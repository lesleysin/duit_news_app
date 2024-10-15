import { ComponentDescription, Container, Ref } from "duit_js";

export const ComponentExample = ComponentDescription("demo_cont", Container({
    attributes: {
        height: 150,
        color: "#DCDCDC",
        refs: [
            Ref("width", "w"),
            Ref("color", "c"),
        ]
    }
},));