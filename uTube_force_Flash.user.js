// ==UserScript==
// @name          uTube Force Flash
// @namespace     YT_flash_force
// @description  Force Flash player embed
// @updateURL https://github.com/juneyourtech/GM_YT/raw/master/uTube_force_Flash.user.js
// @version 0.2.1
// @include       *.youtube.com/watch*
// @grant         GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)
/* ____80_character_separator________________________________________________ */

/* 28.07.2017: Code to enable Flash Player, with huge thanks to Alexander Nartov 
   for the bulk of the code, and Victor Desfe for the showinfo/autoplay line.
   Additional credits: JAOOTPYKHA for fixing height/width issues. 
   • Errata: Make sure you have HTML5 switched off for this to work. */

window.setTimeout(function() {
   var embedFrame = document.createElement("iframe");
   embedFrame.src = location.href.replace(/watch\?v=([^&]*).*/, "embed/$1");
   embedFrame.src = embedFrame.src + ("?showinfo=0");
   embedFrame.style = "width: 100%; height: 100%;";
   var player = document.getElementById("player-api");
   
   // grab the current dimensions of the player
   var wid = player.clientWidth
   var hei = player.clientHeight
   
   player.innerHTML = "";
   
   // set the embedded player's dimensions to proper size
   embedFrame.style.height=hei+'px';
   embedFrame.style.width=wid+'px';
   
   player.appendChild(embedFrame);
   unsafeWindow.spf.dispose();
},
3000);
 //next to showinfo: &autoplay=1

//29.07.2017: disable static in player area (somewhat resource-intensive)
GM_addStyle("DIV.ytp-error CANVAS.ytp-tv-static {display:none;}")
