(function () {
  const paragraphTexts = Array.from(document.querySelectorAll("p")).map(
    (p) => p.textContent
  );

  browser.runtime.sendMessage({ paragraphTexts });

  console.log("hello there");
})();
