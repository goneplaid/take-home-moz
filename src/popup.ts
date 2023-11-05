document.getElementById("scrape-this")!.addEventListener("click", () => {
  browser.tabs
    .query({ active: true, currentWindow: true })
    .then((tabs) => {
      // Assuming tabs[0] exists and has an id
      const tabId = tabs[0].id;

      if (typeof tabId === "number") {
        browser.tabs
          .sendMessage(tabId, { action: "scrape" })
          .then((response) => {
            const dataElement = document.getElementById("data");
            if (dataElement) {
              dataElement.textContent = JSON.stringify(response, null, 2);
            }
          })
          .catch((error) => console.error(`Error sending message: ${error}`));
      }
    })
    .catch((error) => console.error(`Error querying tabs: ${error}`));
});
