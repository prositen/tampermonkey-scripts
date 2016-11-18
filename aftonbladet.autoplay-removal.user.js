// ==UserScript==
// @name         Aftonbladet autoplay removal
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Remove autoplay from videos
// @author       prositen
// @match        *://www.aftonbladet.se/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';
    var jq = jQuery.noConflict();
    jq('iframe[allowfullscreen=true]').each(function(i,v) {
        var src = v.src;
        var new_src = src.replace('autoplay=true', 'autoplay=false');
        if (new_src == src) {
            new_src += "&autoplay=false";
        }
        v.src = new_src;
    });
})();
