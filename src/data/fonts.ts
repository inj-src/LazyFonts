import { fontsType } from "../context/fontsData";
import { storage } from "../utils/storage";

const apiKey = `AIzaSyC38lP-2iSF-7x_QWMEKCb9kp-ksZhqEco`;

export type sortType = "alpha" | "popularity" | "style" | "trending";

// ! code doesn't need in production
export async function getFontsData(sort: sortType) {
    const response = await storage.get("fontsData");

    if (
        !response?.fontsData ||
        response.fontsData.expire - Date.now() > 1.728e8
    ) {
        const response = await getNewResponse();
        storage.set("fontsData", response);
        return response[sort];
    }
    return response.fontsData[sort] as fontsType[];
}

async function getNewResponse() {
    const [alpha, popularity, style, trending] = await Promise.all([
        getResponse("alpha"),
        getResponse("popularity"),
        getResponse("style"),
        getResponse("trending"),
    ]);

    return {
        alpha,
        popularity,
        style,
        trending,
        expire: Date.now(),
    };
}

async function getResponse(sort: string) {
    return (
        await (
            await fetch(
                `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=${sort}`
            )
        ).json()
    ).items as fontsType[];
}
