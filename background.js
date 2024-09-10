chrome.commands.onCommand.addListener(function(command) {
  if (command === "open-popup-mode") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var currentUrl = tabs[0].url;
      var currentTabId = tabs[0].id;
      
      chrome.windows.create({
        url: currentUrl,
        type: "popup",
      }, function(newWindow) {
        // Close the original tab
        chrome.tabs.remove(currentTabId);
      });
    });
  }
});
