console.log("hi");

// THIS DOES NOT WORK
// source: https://stackoverflow.com/questions/74414895/how-to-open-chrome-extension-on-new-window-instead-of-the-default-popup
//         https://stackoverflow.com/questions/47314799/how-do-i-open-a-chrome-extension-in-its-own-window
//
// chrome.browserAction.onClicked.addListener(function (activeTab) {
//   chrome.windows.create({
//     url: chrome.runtime.getURL("index.html"),
//     type: "popup",
//   });
// });

chrome.windows.create({
  url: chrome.runtime.getURL("index.html"),
  type: "popup",
  height: 500,
  width: 300,
});
