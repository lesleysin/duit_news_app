import { Color, Text } from "duit_js"

export const HeadingText = (text: string, color?: Color) => {
    return Text({
        attributes: {
            data: text,
            style: {
                fontWeight: 700,
                fontSize: 26,
                color
            },
        }
    });
}

export const BoldText = (text: string, color?: Color) => {
    return Text({
        attributes: {
            data: text,
            style: {
                fontWeight: 500,
                fontSize: 18,
                color
            },
        }
    });
}

export const SemicBoldText = (text: string, color?: Color) => {
    return Text({
        attributes: {
            data: text,
            style: {
                fontWeight: 500,
                fontSize: 16,
                color
            },
        }
    });
}


export const NormalText = (text: string, color?: Color) => {
    return Text({
        attributes: {
            data: text,
            style: {
                fontWeight: 400,
                fontSize: 14,
                color
            },
        }
    });
}