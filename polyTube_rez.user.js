// ==UserScript==
// @name          polyTube Rez
// @namespace     YT_polyTube_rez
// @description  Site layout improvements the awful polymer version of desktop YouTube. (All trademarks are belong to their respective owners.)
// @version 0.1
// @include       *.youtube.com/*
// @grant         GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)
/* ____80_character_separator________________________________________________ */

/* Creation date for the polymer-based YouTube design, which makes computers slow.
// @updateURL https://github.com/juneyourtech/GM_YT/raw/master/YouTube_lower-res.user.js
*/

/* [ESCAPED] BODY, HEIGHT, FONTS */
/* GM_addStyle("HTML BODY.exp-roboto, HTML .exp-roboto BUTTON, HTML .exp-roboto INPUT, HTML .exp-roboto TEXTAREA, HTML .exp-roboto SELECT {font-family:\'Arial\',\'sans-serif\';}"); */

/* L., 19.12.2020. */
GM_addStyle("*, HTML, HTML > BODY, HTML > BODY *, HTML > BODY *:before, HTML > BODY *:after {transition-duration:0ms !important; touch-action:none !important;}");
/* L., 19.12.2020: +touch-action */

/* N., 17.12.2020 */
GM_addStyle("HTML, HTML > BODY {transition:none !important; transform:none !important; animation:none !important; will-change:unset !important; touch-action:none !important;}");
/* L., 19.12.2020: +touch-action */

GM_addStyle("*:not([class*=\'ytp\']):not(app-header), HTML > BODY *:not([class*=\'ytp\']):not(app-header), HTML > BODY *:before, HTML > BODY *:after {transition:none !important; transform:none !important; animation:none !important; will-change:unset !important;}");
/* L,. 19.12.2020.: Moved transition-duration:0ms !important; up top. */

/*:not([class*=\'gecko-5\'])*/
/* P., 06.12.2020. | 2020yt design: Removes animations. */
GM_addStyle("HTML *:not([class*=\'ytp\']):not(app-header), BODY *:not([class*=\'ytp\']):not(app-header), HTML *:after, HTML *:before, BODY *:after, BODY *:before {transition-duration:0ms !important; touch-action:none !important;}");
/* test: removed transition.  animation-delay:0s !important;
animation:none; 
11.12.2020. +transition-duration */

/* P., 06.12.2020: 2020yt design | top bar to relative */
/* GM_addStyle("DIV#masthead-container.ytd-app {position:relative; top:unset;}"); */
/* test| transition:none;*/

/* P., 06.12.2020: 2020yt design | below top bar */
/* GM_addStyle("ytd-page-manager#page-manager.ytd-app {margin-top:5px;}"); */

/* P., 06.12.2020., 2020yt design: margins and paddings for left-side content */
/* GM_addStyle("DIV.ytd-watch-flexy[flexy_] #primary.ytd-watch-flexy {margin-left:0px; padding-right:5px;}"); */

/* R., 11.12.2020. | yt2020: pop-up container of dialogs */
GM_addStyle("ytd-popup-container.ytd-app {width:auto; top:unset; position:relative; float:left;}");

/* R., 11.12.2020. | yt2020: Dialogs (notifications) */
GM_addStyle("paper-dialog.style-scope.ytd-popup-container {top:unset !important; left:unset !important; bottom:unset !important; margin:1p !important; border:solid 1px Silver; color:inherit !important; font-family:inherit !important; box-shadow:none !important; font-weight:inherit !important;}"); /* position:;*/

/* T., 08.12.2020: YouTube animations */
/*spinner container when active */
GM_addStyle("DIV#spinnerContainer.active.paper-spinner {animation:none !important; transform:none !important;}");
GM_addStyle("DIV#spinnerContainer.active.paper-spinner:before {content:\'\.\.\.\'; background-color:rgba(0,0,0,0.5); color:white; border-radius:5px;}");
/*contains spinner elements*/
GM_addStyle("DIV.active.paper-spinner > DIV.spinner-layer.style-scope.paper-spinner {animation:none !important; animation-name:unset !important; transform:none !important; display:none !important;}");
GM_addStyle("DIV.circle.style-scope.paper-spinner {animation:none !important; transform:none !important;}");
GM_addStyle("DIV.circle-clipper.left.paper-spinner .circle.paper-spinner {transform:none !important; border-width:3px !important;}");
GM_addStyle("DIV.circle-clipper.left.paper-spinner .circle.paper-spinner {transform:none !important;}");
GM_addStyle("DIV.active.paper-spinner .circle-clipper.paper-spinner .circle.paper-spinner {animation-duration:unset !important; animation-timing-function:unset !important; animation-iterration-count:unset !important; animation:none !important;}");
GM_addStyle("DIV.active.paper-spinner .circle-clipper.left.paper-spinner .circle.paper-spinner {animation-name:unset !important; animation:none !important;}");
GM_addStyle("DIV#spinnerContainer.active.paper-spinner > DIV {animation:none !important; display:none;}");
/* GM_addStyle(""); */

/* FONTS */
GM_addStyle("HTML BODY, HTML > BODY, HTML INPUT, HTML BUTTON, HTML TEXTAREA, HTML SELECT, DIV.html5-video-player {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\',\'YouTube Noto\',\'Roboto\';}");
/* This affects BODY anywhere in the document. I might consider consolidating this. */

/* TOP: header position fix | N., 17.12.2020. | test */
GM_addStyle("DIV#masthead-container.ytd-app {position:relative;}");

/* TOP: PAGE MANAGER overflow fix (contains LEFT and RIGHT) | N., 24.12.2020. */
GM_addStyle("DIV#content > ytd-page-manager#page-manager.ytd-app {overflow:visible;}");

/* TOP: PAGE MANAGER position fix (contains LEFT and RIGHT) | N., 17.12.2020. */
GM_addStyle("ytd-page-manager#page-manager.ytd-app {margin-top:0px;}"); /* Not too low... | Also, a test. */

/* VIDEO: Set height and width to 360px only. */
GM_addStyle("ytd-page-manager > ytd-watch-flexy[flexy_] #player-container-outer.ytd-watch-flexy, ytd-page-manager > ytd-watch-flexy[flexy_][is-two-columns_][is-four-three-to-sixteen-nine-video_] #primary.ytd-watch-flexy {min-width:unset; max-width:unset; width:640px; height:360px;}"); 
/* This is a test */
/*ytd-watch-flexy[flexy_][is-two-columns_][is-four-three-to-sixteen-nine-video_] #primary.ytd-watch-flexy*/

/* player-container > ytd-player*/
GM_addStyle("ytd-page-manager > ytd-watch-flexy[flexy_] DIV#player-container.ytd-watch-flexy, DIV#player-container > ytd-player {height:360px; width:100%; background-color:black;}");

/* VIDEO element */
GM_addStyle("DIV.html5-video-player .video-stream {left:unset !important; position:relative; margin:0 auto;}");
/* The relative psotion allows setting margin left-right to auto (centered). */

/* VIDEO | SET z-index to top for video for better performance */
GM_addStyle("DIV.html5-video-player.playing-mode .video-stream {z-index:42;}");
/* This is a test, as it might not work with overlays, subtitles, and other important stuff. (update: overlays show) */

/* hide VIDEO OVERLAYS at video end; show when hovering over video | R., 25.12.2020. */
GM_addStyle("DIV.ytp-ce-element.ytp-ce-element-show {transition:none; display:none;}");
GM_addStyle("DIV.ytp-ce-element, DIV.ytp-ce-element * {transition:none; transform:none; animation:none;}");
GM_addStyle("DIV#movie_player:hover > DIV.ytp-ce-element.ytp-ce-element-show {display:block;}");

/* Playback: show controls */
/*  VIDEO plays, no controls:
DIV#movie_player.playing-mode
html5-video-player ytp-transparent ytp-exp-bottom-control-flexbox ytp-exp-bigger-button ytp-hide-info-bar ytp-autohide playing-mode
*/
/* VIDEO has ended
DIV#movie_player
html5-video-player ytp-transparent ytp-exp-bottom-control-flexbox ytp-exp-bigger-button ytp-hide-info-bar ended-mode*/

/* VIDEO: above CONTROLS: PREVIEW at marker | L., 19.12.2020. */
GM_addStyle("DIV.ytp-tooltip.ytp-preview:not(.ytp-text-detail) {background-color:black; text-shadow:none;}");
/* VIDEO: CONTROLS: PREVIEW at marker, timestamp | L., 19.12.2020. */
GM_addStyle("DIV.ytp-preview:not(.ytp-text-detail) .ytp-tooltip-text {text-shadow:none; background-color:black; color:Silver; border-radius:4px;}");

/* VIDEO: CONTROLS: remove the SHADOW gradient above controls | L., 19.12.2020. */
GM_addStyle("DIV.ytp-exp-bigger-button .ytp-gradient-bottom {display:none; height:43px; padding-top:0px; transition:none !important;}");
/* In a nice twist of HTML and CSS genius to originally accommodate Firefox, the developers decided to use a PNG gradient image instead of a CSS-based solution, as the latter would have affected font rendering. */

/* VIDEO: CONTROLS and further controls container (includes progress bar) | L., 19.12.2020. */
GM_addStyle("DIV.ytp-chrome-bottom {position:initial; bottom:unset; left:unset; margin:-43px auto; padding-top:0px; background-color:black; text-shadow:none; transition:none !important;}");
/* width:100% !important; does not work.
left:2px !important;
*/ /* includes left side buttons */

/* VIDEO: PROGRESS BAR CONTAINER */
GM_addStyle("DIV.ytp-exp-bigger-button .ytp-progress-bar-container {bottom:unset; position:relative;}");

/* VIDEO: CONTROLS: PROGRESS BAR width when video width is also affected. This is the RUNNING progress bar WHEN HOVERING. | L., 19.12.2020. */
GM_addStyle("DIV.ytp-chapter-hover-container {float:unset; margin:0 auto;}");
/*width:100% !important; doesn't work. */

/* VIDEO: CONTROLS: PROGRESS BAR SCRUBBER width when video width is also affected. This is the stopped progress bar. | L., 19.12.2020. */
/* GM_addStyle("DIV.ytp-scrubber-container {transform:translateX(640px);}"); 
^ That won't work because of JavaScript stuff. Should I set the progress bar to what it was previously? */

/* VIDEO: CONTROLS: without progress bar. */
GM_addStyle("DIV.ytp-exp-bigger-button .ytp-chrome-controls {position:absolute; left:0px; bottom:-3px; z-index:10; width:100%; background-color:black; padding-left:10px; padding-right:10px;}");


/* VIDEO: [ESCAPED] SPINNER | 26.11.2017. */
GM_addStyle("DIV.ytp-spinner:before {content:\'Oh wait\.\.\.\';}");
/*  24.05.2018.: Replaced from: Just a friendly spinner replacement...
P., 03.11.2019.: Replaced "A spinner" with "Oh wait..." */

/* VIDEO: SPINNER | 26.11.2017. */
GM_addStyle("DIV.ytp-spinner > .ytp-spinner-container {display:none;}");
/* Mod: 24.05.2018 */
GM_addStyle("DIV.ytp-spinner:before {display:inline;}");
/*  P., 03.11.2019.: Moved escaped content to top. */

/* #VIDEO: STUPID OVERLAYS NEAR END OF THE VIDEO, which, like, no-one 
   ever asked for. Will display upon video hover. Gecko browsers only. Added 27.11.2017. */
GM_addStyle("BODY.gecko DIV.ytp-ce-element.ytp-ce-element-show {opacity:0; visibility:hidden;}");
GM_addStyle("BODY.gecko DIV#movie_player:hover DIV.ytp-ce-element.ytp-ce-element-show {opacity:1; visibility:visible;}");
/* While I did consider BODY.yt-user-logged-in , then I chose not to use 
   it, as some people prefer to watch videos when not logged in at all, 
   or watch certain videos like that. */

/* VIDEO PLAYBACK: STUPID OVERLAYS' TEXT COLORS | 26.02.2020. */
GM_addStyle("DIV.ytp-ce-element DIV.ytp-ce-video-title {color:white; background-color:rgba(0,0,0,0.3);}");

/* LEFT container */
GM_addStyle("DIV#primary.ytd-watch-flexy {padding-right:0px;}");

/* LEFT | 12.2020. */
GM_addStyle("ytd-page-manager > ytd-watch-flexy[flexy_] #primary.ytd-watch-flexy {margin-left:0px;}");

/* LEFT: LIKES/DISLIKES BAR | N., 17.12.2020. */
GM_addStyle("ytd-sentiment-bar-renderer#sentiment.ytd-video-primary-info-renderer {top:4px; left:unset; right:4px; width:200px !important;}");
GM_addStyle("DIV.ytd-video-primary-info-renderer > ytd-sentiment-bar-renderer {padding-top:0px; padding-bottom:0px;}");
GM_addStyle("DIV#container.ytd-sentiment-bar-renderer {background-color:#e52b21;}"); /* dislikes as bg */
GM_addStyle("DIV#like-bar.ytd-sentiment-bar-renderer {background-color:#0077ee;}");/* likes bgcolor */

/* RIGHT container | L., 19.12.2020. */
GM_addStyle("ytd-page-manager > ytd-watch-flexy[flexy_] #secondary.ytd-watch-flexy {padding-right:0px; padding-left:5px;}");

/* RIGHT: VIDEO SUGGESTIONS: This fixes thumbnails set at top:50%, which would be transformed "up". 
Whoever made this entire site design, and added animations, transforms, and transitions to everything, is incompetent, does not care about, and is deeply inconsiderate towards people with old computers. */
GM_addStyle("DIV.style-scope > ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail, ytd-playlist-video-thumbnail-renderer > yt-img-shadow.ytd-playlist-video-thumbnail-renderer {top:unset;}");
/* L., 19.12.2020.: Added second selector. */

/* RIGHT: THUMBNAILS' progress bar | N., 17.12.2020. */
GM_addStyle("DIV#progress.ytd-thumbnail-overlay-resume-playback-renderer {background-color:SlateBlue;}");
