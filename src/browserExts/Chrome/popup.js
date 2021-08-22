let changeColor = document.getElementById("changeColor");
changeColor.addEventListener("click", async () => {
    chrome.tabs.create({
        active: true,
        url:  'index.html'
    }, null);
});

