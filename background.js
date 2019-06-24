var isExtensionEnabled = true;

chrome.webRequest.onBeforeRequest.addListener(
    function () {
        return {
            cancel: isExtensionEnabled
        };
    }, {
        urls: [
            "*://*.bitrix24.ru/*/site_button/*.js*",
            "*://*.eyenewton.ru/scripts/callback*",
            "*://*.callbaska.ru/callback.js",
            "*://*.callbackhunter.com/*.js",
            "*://*.callbackkiller.com/*.js",
            "*://*.cashmyvisit.com/*.js",
            "*://*.roistat.com/*.js",
            "*://*.whitesaas.com/*",
            "*://*.perezvoni.com/*",
            "*://*.redhelper.ru/*",
            "*://*.pozvonim.com/*",
            "*://cdn.callibri.ru/callibri.js",
            "*://leadback.ru/js/leadback.js",
            "*://cdn.carrotquest.io/api.min.js",
            /**
             *  added list of sites from https://github.com/bcye/Hello-Goodbye
             */
            "*://widget.intercom.io/*",
            "*://connect.facebook.net/en_US/sdk/xfbml.customerchat.js",
            "*://assets.producthunt.com/assets/upwigloader.js",
            "*://js.driftt.com/include/*",
            "*://*.crisp.chat/*",
            "*://*.intergram.xyz/js/*",
            "*://widget.mfy.im/*",
            "*://connect.podium.com/*",
            "*://js.usemessages.com/*",
            "*://static.getchipbot.com/",
            "*://static.zdassets.com/ekr/snippet.js",
            "*://www.couchbase.com/webfiles/1552355627964/js/contact-popup-form.js",
            "*://assetscdn-wchat.freshchat.com/*",
            "*://wchat.freshchat.com/*",
            "*://code.jivosite.com/script/widget/*",
            "*://code.tidio.co/*",
            "*://*.user.com/static/js/*",
            "*://secure.livechatinc.com/*",
            "*://*.justanswer.com/revizely/2/core/ja-com.js",
            "*://code.snapengage.com/*",
            "*://sdk.inbenta.io/chatbot/*",
            "*://pi2.movoto.com/1.7.654/javascripts/desktop/movoto.min.js",
            "*://*.zopim.com/*",
            "*://cdn.gubagoo.io/*",
            "*://leadconnect.ipmaxi.se/*",
            "*://static.small.chat/messenger.js",
            "*://smartsupp-widget-161959.c.cdn77.org/build/smartchat-2.3.20.min.js",
            "*://plugins.help.com/*"
        ],
        types: ["script"]
    },
    ["blocking"]
);

chrome.browserAction.onClicked.addListener(function (tab) {
    isExtensionEnabled = !isExtensionEnabled;
    isExtensionEnabled
        ?
        chrome.browserAction.setIcon({
            path: "icons/icon48.png"
        }) :
        chrome.browserAction.setIcon({
            path: "icons/disabled.png"
        });
    chrome.tabs.reload();
});
