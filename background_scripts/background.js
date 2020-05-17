import normalizeUrl from "normalize-url";

const defaultSettings = {
    searchEngineUrl: "https://duckduckgo.com/?q="
};

async function searchListener(details) {
    let urlObj = new URL(details.url);
    const searchTerm = urlObj.searchParams.get('q');

    // Try to use the search term as a URL if it normalizes successfully
    try {
        const normalized = normalizeUrl(
            searchTerm,
            {
                stripWWW: false,
                removeQueryParameters: [],
                removeTrailingSlash: false,
                sortQueryParameters: false
            }
        );
        return {
            redirectUrl: normalized

        };
    } catch (err) {
        // Ignore normalization failures
    }

    // Use the search term... as a search term :)
    let redirectUrl = await browser.storage.local.get().then(function (storedSettings) {
        return storedSettings.searchEngineUrl + searchTerm;
    });
    return {
        redirectUrl: redirectUrl
    };
}

function checkStoredSettings(storedSettings) {
    if (!storedSettings.searchEngineUrl) {
        browser.storage.local.set(defaultSettings);
    }
}

function onError(err) {
    console.error(err);
}

const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(checkStoredSettings, onError);

browser.webRequest.onBeforeRequest.addListener(
    searchListener,
    {urls: ["https://justgotothedamnurl.com/search*"], types: ["main_frame"]},
    ["blocking"]
);
