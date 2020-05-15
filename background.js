
function searchListener(details) {
    let searchLocation = "https://duckduckgo.com/?q=";
    let encodedSearchUrl = encodeURIComponent(searchLocation);

    if (details.url.indexOf(encodedSearchUrl) !== -1) {
        // The request has already been redirected once, don't modify it again
        return {};
    }
    return {
        redirectUrl: details.url + "&search=" + encodedSearchUrl
    };
}

browser.webRequest.onBeforeRequest.addListener(
    searchListener,
    {urls: ["https://justgotothedamnurl.com/search*"], types: ["main_frame"]},
    ["blocking"]
);
