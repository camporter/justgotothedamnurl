# justgotothedamnurl-webextension

Firefox >=77 now searches when you enter perfectly legitimate URLs.
Reverse this behavior with a search engine that just goes to the URL.

URL-like search terms will be handled as URLs, otherwise the configured
search URL will be used to actually perform a search with the search terms.
By default, DuckDuckGo is used. Other search engines can be configured
in the addon preferences.

## Using

* Install from https://addons.mozilla.org/en-US/firefox/addon/justgotothedamnurl/ or install the extension manually.
* If not initially prompted to set the default search provider to `justgotothedamnurl`, then go to the search preferences and set it as the default.
* Enter a local URL that Firefox tries to let search handle (eg `hostname.local`) which should now go to the actual website instead of searching for it.

## Building
* Install a recent version of node.
* Run `./build.sh`
* Use the zip that was created in `web-ext-artifacts`.

## Testing
* Rebuild the extension.
* Run `npx web-ext run`