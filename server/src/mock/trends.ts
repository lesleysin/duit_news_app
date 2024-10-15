import { TrendNewsComponent, TrendTemp } from "../components/trend_news";

export const trendNews = () => {
    const arr = [];

    for (let index = 0; index < 10; index++) {
        arr.push({
            tag: TrendNewsComponent.tag,
            data: {

                title: "Central Bank: key rate remained at 16%",
                description: "Wall Streen Journal",
                tag: "Finance",
                image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5wWR4NKGmsqKRw5RiSzNyXvFiw5s0s7Tpg&s",
            },
            id: String(index),
        })
    }

    return arr;
}

export const trendNews2 = (from = 0) => {
    const arr = [];
    const colors = [
        "#cc6600",
        "#9966cc",
        "#ffbcd9",
    ];

    for (let index = 0; index < 10; index++) {
        const col = {
            borderRadius: 8,
            color: colors[index % colors.length],
        };
        arr.push({
            tag: TrendTemp.tag,
            data: {
                title: "Central Bank: key rate remained at 16%",
                description: "Wall Streen Journal",
                tag: `${index + from}`,
                image_url: `https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=${index + from}`,
                color: col,
                builderId: `id:X${index+from}`,
            },
            id: String(index),
        })
    }

    return arr;
}