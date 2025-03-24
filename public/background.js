const apiKey = "AIzaSyC38lP-2iSF-7x_QWMEKCb9kp-ksZhqEco";
const url = "https://www.googleapis.com/webfonts/v1/webfonts";

const res = await chrome.storage.local.get(["fontsData"]);

if (!res.fontsData || Date.now() - res.fontsData.expire > 1.728e8)
    await chrome.storage.set({ fontsData: await getNewResponse() });

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        files: ["content.js"],
    });
});

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

async function getResponse(sort) {
    return (await (await fetch(`${url}?key=${apiKey}&sort=${sort}`)).json())
        .items;
}
