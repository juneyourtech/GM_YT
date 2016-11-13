// ==UserScript==
// @name        GPlus
// @namespace   GPlus
// @description Google Plus font fix for long texts (Windows XP). (Note: All trademarks are the property of their respective owners.)
// @updateURL https://github.com/juneyourtech/GM_YT/raw/master/GPlus.user.js
// @include     https://plus.google.com/*
// @version     0.1.1.2
// @grant       GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)
// One of the earllier recordings of this file's date is L., 12.03.2016., 14:38:51

//BODY, FONTS

GM_addStyle("HTML > BODY, BODY.ub-PNa-Ng {font-family:\'Arial\',\'Roboto\',\'sans-serif\';}") //
//BODY.ub-PNa-Ng selector added on 13.11.2016.

GM_addStyle("DIV.dn {font-size:12px; line-height:1.5em; color:black;}") //

GM_addStyle("DIV.b-i {left:0px !important; background-color:black; color:white; text-rendering:optimizespeed; text-transform:none;}") //
