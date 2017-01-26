var isExtensionEnabled = true;

chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: isExtensionEnabled};
    },
    {
        urls: [
            "*://*.bitrix24.ru/*/site_button/*.js*",
            "*://*.eyenewton.ru/scripts/callback*",
            "*://*.callbaska.ru/callback.js",
            "*://*.callbackhunter.com/*.js",
            "*://*.callbackkiller.com/*.js",
            "*://*.cashmyvisit.com/*.js",
            "*://*.roistat.com/*.js",
            "*://*.whitesaas.com/*",
            "*://*.redhelper.ru/*",
            "*://*.pozvonim.com/*"
        ],
        types: ["script"]
    },
    ["blocking"]
);

chrome.browserAction.onClicked.addListener(function(tab) {
    isExtensionEnabled = !isExtensionEnabled;
    (isExtensionEnabled ?
        chrome.browserAction.setIcon({path: 'icons/icon48.png'}):
        chrome.browserAction.setIcon({path: 'icons/disabled.png'})
    );
    chrome.tabs.reload();
});