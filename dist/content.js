"use strict";
(() => {
    const paragraphs = document.querySelectorAll("p");
    const paragraphTexts = Array.from(paragraphs)
        .map((p) => p.textContent)
        .filter((text) => text !== null);
    browser.runtime.sendMessage({ paragraphTexts });
})();
