// ==UserScript==
// @name          uTube Force Flash
// @namespace     YT_flash_force
// @description   Force Flash player embed. Video settings available from the User Script Commands submenu. Note, that the code might be buggy, and might cause conflicts with Flashblock. Acknowledgements to Alexander Nartov for providing the initial code, and to Victor Desfe and JAOOTPYKHA for improvements to it. This userscript requires that HTML5 playback be switched off in about:config
// @author        JuneYourTech | github.com/juneyourtech | and contributors
// @updateURL     https://github.com/juneyourtech/GM_YT/raw/master/uTube_force_Flash.user.js
// @version       0.3.3.1
// @encoding      utf-8
// @include       *.youtube.com/watch*
// @grant         GM_addStyle
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_registerMenuCommand
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)
/* ____80_character_separator________________________________________________ */

/* 28.07.2017: Code to enable Flash Player, with huge thanks to Alexander Nartov 
   for the bulk of the code, and Victor Desfe for the showinfo/autoplay line.
   Additional credits: JAOOTPYKHA for fixing height/width issues. 
   • Errata: Make sure you have HTML5 switched off for this to work. */

/* Menu commands, autoplay and video quality settings added on 03.08.2017. */
GM_registerMenuCommand('240p', vid_quality_small);
GM_registerMenuCommand('360p', vid_quality_medium);
GM_registerMenuCommand('480p', vid_quality_large);
GM_registerMenuCommand('720p', vid_quality_hd);
GM_registerMenuCommand('1080p', vid_quality_fullhd);
GM_registerMenuCommand('High Res', vid_quality_highres);
GM_registerMenuCommand('Default quality', vid_quality_default);
GM_registerMenuCommand('Autoplay ON', autoplay_on);
GM_registerMenuCommand('Autoplay OFF', autoplay_off);

function vid_quality_small() {
   GM_setValue("video_quality", "small");
   }; //240p

function vid_quality_medium() {
   GM_setValue("video_quality", "medium");
   }; //360p

function vid_quality_large() {
   GM_setValue("video_quality", "large");
   }; //480p

function vid_quality_hd() {
   GM_setValue("video_quality", "hd720");
   }; //HD/720p

function vid_quality_fullhd() {
   GM_setValue("video_quality", "hd1080");
   }; //FullHD/1080p

function vid_quality_highres() {
   GM_setValue("video_quality", "highres");
   }; //High resolution / greater than 1080p

function vid_quality_default() {
   GM_setValue("video_quality", "default");
   };

function autoplay_on() {
   GM_setValue("autoplay", "1");
   };

function autoplay_off() {
   GM_setValue("autoplay", "0");
   };

window.setTimeout(function() {
   var embedFrame = document.createElement("iframe");
   
   embedFrame.src = location.href.replace(/watch\?(?:.*)v=([A-Za-z0-9_-]{11}).*/, "embed/$1");
/* The first inner parentheses group is a non-capturing group, and is not included in '$1'.
   The first group is in place to match stringdata after '\?' and before 'v=', if there is any.
 • The second parentheses group _is_ a capturing group, and remembers the captured data into '$1',
   which is then included after 'embed/'. It captures 11 alphanumeric characters, including 
   an underscore and a dash.   
   */
   
   embedFrame.src = embedFrame.src + ('?showinfo=0&autoplay=' + GM_getValue('autoplay','1') + '&vq=' + GM_getValue('video_quality','default'));
   //GM_getValue here has two parameter values: 
   //get value from storage, if none exists, uses second one
   
   embedFrame.style = "width: 100%; height: 100%;";
   var player = document.getElementById("player-api");
   
   // grab the current dimensions of the player
   var wid = player.clientWidth;
   var hei = player.clientHeight;
   
   player.innerHTML = "";
   
   // set the embedded player's dimensions to proper size
   embedFrame.style.height=hei+'px';
   embedFrame.style.width=wid+'px';
   
   player.appendChild(embedFrame);
   unsafeWindow.spf.dispose();
},
1000);
/* Apparently, setTimeout sets a delay until the function loads.
   1000 = 1 second
   3000 = 3 seconds, etc. */

//29.07.2017: disable static in player area (somewhat resource-intensive)
GM_addStyle("DIV.ytp-error CANVAS.ytp-tv-static {display:none;}");
