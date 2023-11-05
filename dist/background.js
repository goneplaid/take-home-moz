"use strict";
browser.browserAction.onClicked.addListener((tab) => {
    // Execute script in the context of the tab
    browser.tabs.executeScript((tab.id = 0), {
        file: "content.js",
    });
});
