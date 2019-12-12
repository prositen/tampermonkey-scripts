// ==UserScript==
// @name         Remove twitter sidebar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove sidebar
// @author       Anna Holmgren
// @match        *://*.twitter.com/*
// @require      https://code.jquery.com/jquery-3.4.1.slim.min.js
// @update       https://github.com/prositen/tampermonkey-scripts/raw/master/twitter.remove-sidebar.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

waitForKeyElements("[data-testid='sidebarColumn']", hideIt);

function hideIt(node) {
   node.hide();
}
