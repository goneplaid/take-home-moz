(() => {
  const paragraphs = document.querySelectorAll<HTMLParagraphElement>("p");

  const paragraphTexts = Array.from(paragraphs)
    .map((p) => p.textContent)
    .filter((text): text is string => text !== null);

  browser.runtime.sendMessage({ paragraphTexts });
})();
