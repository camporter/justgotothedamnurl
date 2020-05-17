const searchEngineInput = document.querySelector("#search-engine-url");

function updateUI(restoredSettings) {
    searchEngineInput.value = restoredSettings.searchEngineUrl;
}

function onError(err) {
    console.error(err);
}

function saveOptions() {
    browser.storage.local.set({
        searchEngineUrl: searchEngineInput.value
    });
}

const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(updateUI, onError);

const saveButton = document.querySelector("#save-button");
saveButton.addEventListener("click", saveOptions);
