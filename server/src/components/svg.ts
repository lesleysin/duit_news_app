import { CustomWidget } from "duit_js/dist/widget_models";

interface SvgAttributes {
    width?: number;
    height?: number;
    content: string;
}

class SvgWidget extends CustomWidget<SvgAttributes> {

    constructor(attrs: SvgAttributes, tag: string, id?: string) {
       super(attrs, tag, id, undefined, false);
    }
}

const Svg = (attributes: SvgAttributes, id?: string) => {
    return new SvgWidget(attributes, "svg", id);
}

export default Svg;
