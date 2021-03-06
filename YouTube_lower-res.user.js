﻿// ==UserScript==
// @name          uTube Rez
// @namespace     YT_lowerres
// @description  Site layout improvements for smaller-resolution displays, such as 1024x768 and 800x600 px. This primarily affects the player part. (All trademarks are belong to their respective owners.) The userscript that forces Flash over HTML5 is now in a new location: raw.githubusercontent.com/juneyourtech/GM_YT_Flash/master/uTube_force_Flash.user.js
// @updateURL https://github.com/juneyourtech/GM_YT/raw/master/YouTube_lower-res.user.js
// @version 0.8.8.8.7.5.9
// @include       *.youtube.com/*
// @grant         GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)
/* ____80_character_separator________________________________________________ */

/* Earliest note on update:
   CSS last updated on P., 24.03.2013. /secondary location
Other update dates:
T., 02.04.2013. primary location;
E., 02.09.2013, from code via primary location;
T., 03.09.2013, updated from code via secondary location;
R., 13.09.2013 or somesuch, updated via secondary location.
Major update to accommodate the 01.2015 design. */

/* BODY, HEIGHT, FONTS */
/* GM_addStyle("HTML BODY.exp-roboto, HTML .exp-roboto BUTTON, HTML .exp-roboto INPUT, HTML .exp-roboto TEXTAREA, HTML .exp-roboto SELECT {font-family:\'Arial\',\'sans-serif\';}"); */

/* 26.11.2017 */
GM_addStyle("HTML > BODY, HTML > BODY > #body-container {min-height:unset !important;}");
/* This fixes one of the excessive height issues. */

GM_addStyle("HTML > BODY.kevlar-homepage {background-color:#F1F1F1;}");

GM_addStyle("HTML BODY, HTML > BODY, HTML INPUT, HTML BUTTON, HTML TEXTAREA, HTML SELECT {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\',\'Roboto\';}");
/* This affects BODY anywhere in the document. I might consider consolidating this. */

GM_addStyle("HTML > BODY, DIV#watch7-headline H1 {color:black;}");
/* 18.10.2016: Consolidated HTML &gt; BODY and headline here. Fonts now inherited from above. */
/* In particular, this affects BODY directly, but also TITLE and comment 
text.
With HTML &gt; BODY, the black color only applies to the actual site, 
but not video embeds, which very likely use other colors, such as white on black. */

/* TOP */
GM_addStyle("DIV#yt-masthead-container {min-width:640px !important;}"); /* min-width:1003 */
GM_addStyle("DIV#masthead-expanded-container {min-width:688px !important;}"); /* min-width:1003 */

GM_addStyle("DIV#masthead-positioner {position:absolute;}");
/* 18.10.2016: Was then temporarily set to relative.
   This affects the frontpage either way. */

/* Consent banner: "A privacy reminder..." | N., 05.09.2019. */
GM_addStyle("DIV.yt-consent-banner {min-width:496px;}");

GM_addStyle("DIV#masthead-positioner-height-offset {height:73px;}");
/* original: 90px */
/* 18.10.2016: This affects the frontpage and other non-player areas.
   Setting it to 5px does not quite work.
   73px seems like a good compromise, at least for the front page. */

GM_addStyle("BODY.appbar-hidden #masthead-positioner-height-offset {height:50px !important;}");
/* 25.10.2016.: Added this _and_ with !important, because at some point, 
manual style height is added into the element. Mostly affects the player UI. */

GM_addStyle("DIV#yt-masthead-content {min-width:284px;}");
GM_addStyle("FORM#masthead-search {min-width:132px;}");
GM_addStyle("DIV#masthead-search-terms {min-width:66px !important;}");

/* NOTIFICATIONS (as in playlist additions) | Section added 15.10.2016 */
GM_addStyle("DIV#appbar-main-guide-notification-container {top:0px; left:201px;}");
/* Overlayed across the search bar */

/* ALERTS | 15.11.2016 */
GM_addStyle("DIV[class*=\'home\'] DIV.alerts-wrapper {margin-top:18px;}");
/* Let's see how it works. | testing
   16.11.2016: Set it to work on frontpage only, with DIV.home. */

GM_addStyle("DIV#alerts {width:auto !important; min-width:480px !important; max-width:988px !important;}"); /* older code */

/* Alerts New style (as of 10.2013) */
GM_addStyle("BODY.site-center-aligned #alerts, BODY.site-center-aligned #content, BODY.site-center-aligned.appbar-old-pl #player {width:auto; min-width:770px; max-width: 1003px;}");
/* min-width:780px was the previous appliccable value. It applies well 
   with playlists, but don't know if yet in plain form. */
/* February 2014: original max-width was set to 1040 px. */

/* FRONTPAGE (added 17.10.2016) */
GM_addStyle("@media only screen and (max-width:910px) { BODY.exp-responsive .home #content {width:100%; min-width:240px; max-width:unset;} }");
/* min-width:240px; max-width:644px; */

/* GUIDE horizontal strip (September 2013) */
GM_addStyle("BODY.site-center-aligned .yt-base-gutter {min-width:640px;}");
/* max-width doesn't seem to be specified, so original min-width:1003px. */
/* BODY.site-center-aligned.flex-width-enabled #content is of secondary 
   consideration, but I've included it anyway.
   • 05.03.2014: Where? ^ */

/* off the top area: Guide (old) */
GM_addStyle("DIV#guide {width:auto !important; max-width:160px !important;}");

GM_addStyle("DIV#guide-main .guide-module-toggle-icon {margin-top:-21px !important; margin-left:30px; padding:0px;}"); /* modification */

GM_addStyle("DIV#guide-main .guide-module-toggle-arrow {left:-11px; top:32px !important;}");

/* GUIDE ITSELF | before the 09.2013 redesign */
GM_addStyle("BODY.site-left-aligned #page.watch #guide-container {top:0px; left:0px; width:170px; margin-right:0px; padding-left:0px; padding-top:2px;}"); /* experimental, has effect */

GM_addStyle("DIV.guide-module#watch-context-container {margin-bottom:0px;}"); /* tv thingy, let's see if it works | testing */

GM_addStyle("DIV#watch-context-container .guide-module-toggle-icon {margin-top:-56px; left:61px;}");

/* GM_addStyle("UL[class~=\"guide\"] LI {margin-right:1px; border-right:1px solid navy;}"); */

GM_addStyle(".guide-section-separator {margin-right:0px;}");

/* GM_addStyle("DIV#guide-subs-footer-container {margin-right:0px;}"); */
GM_addStyle("UL.guide-channels-list .guide-channel A {width:156px;}");
/* Guide link widths. */

GM_addStyle("A.guide-item .guide-count {right:0px;}");

/* GUIDE (NEW STYLE) */

GM_addStyle("DIV#page.watch #guide {width:auto; max-width:1003px;}");

/* GUIDE 10.2015 */
GM_addStyle("HTML.show-guide #appbar-guide-menu {margin-top:0px !important;}"); /* z-index: 1999999999 (kinda works in the original) */

/* The CONTENT area, which is so difficult to get to... */
GM_addStyle("DIV.watch7-playlist, DIV#watch7-video-container, DIV#watch7-video, DIV.watch7-playlist, DIV#watch7-main, DIV#watch7-main-container {margin-left:auto !important; margin-right:auto !important;}"); /* padding-left:0px !important; */
/* 09.09.2019.: removed the background parameter, as it had not been given a value for some reason. */

/* GM_addStyle("DIV.site-left-aligned.guide-collapsed DIV#watch7-main-container {width:auto; min-width:928px;}"); */
/* This is ostensibly when the guide is collapsed...
   Commented out on 06.10.2016. */

/* 26.11.2017: TODO: MERGE */
GM_addStyle("DIV#player, DIV#watch7-main, BODY.site-center-aligned #content, BODY.site-center-aligned .watch #content.content-alignment {width:auto; min-width:784px; max-width:1003px;}");
/* applies well when expanded, so from 780px to 640px... was 780, then 
   769, and then 766 px by 21.12.2014. */
/* it was 150px for some reason; then min-width:926px; */
/* 06.10.2016: Was 766px (seemed to work really well before the 
   implementation of larger thumbnails). Now set to 784px. */

GM_addStyle("BODY.site-center-aligned #player, BODY.site-center-aligned .watch #content.content-alignment, BODY.site-center-aligned #player.watch-small {width:auto; min-width:784px; max-width:1003px; margin-left:auto; margin-right:auto; background-color:inherit;}");
/* Note, that min-width 838px is good for playlist; don't know about player yet, 
   but could just as well be 780px
   • Feburary-March 2014: max-width was set to 1040px.
   • April 2014: min-width: 771px
   • 06.10.2016: Was 766px (seemed to work really well before the implementation 
     of larger thumbnails). Now set to 784px. */

GM_addStyle("DIV.watch #content.content-alignment, DIV.watch.watch-non-stage-mode #player.content-alignment {min-width:784px; max-width:1003px;}");
/* • November 2014: min-width 766px | Updated at end of November 2014. 
     Original max-width is 1066px.
   • 06.10.2016: Was 766px (seemed to work really well before the 
     implementation of larger thumbnails). Now set to 784px. */

/* EMBEDS */
GM_addStyle("DIV#player[CLASS=\'full-frame\'] {min-width:100%; max-width:100%;}"); /* This applies to embeds. */

/* EMBEDS */
GM_addStyle("DIV#player:not(.content-alignment) {display:inline;}");
/* 23.01.2017
   This applies to embeds.
 • elements in embeds contain: class="date-20170120 "
   site element contains: role="complementary"
   site element classes not in embeds: 
   class="appbar-hidden visibility-logging-enabled not-nirvana-dogfood  flex-width-enabled  flex-width-enabled-snap  yt-user-logged-in [if logged in]  page-loaded"
   player classes not in embeds: class=" content-alignment watch-small" */

/* FRONTPAGE */
GM_addStyle("DIV.yt-card {background-color:inherit;}");
/* DIV.yt-card works, but adversely affects many other divs */

GM_addStyle("DIV.yt-card.yt-card-has-padding#action-panel-details {padding-top:0px; padding-left:11px;}"); /* Works. */
/* The DOM Inspector interprets it like this: 
   DIV#action-panel-details.yt-card.yt-card-has-padding {:;} */

GM_addStyle("DIV.individual-feed {background-color:transparent; margin-left:22px; margin-right:22px;}");
/* DIV.yt-card works, but aversely affects many other divs
   background-color was set to white
12.10.2016: now transparent */

/* GOOGLE PLUS NOTIFICATIONS (WRAPPER) */
GM_addStyle("HTML > BODY #sb-wrapper {min-width:699px;}");
/* 766px so far...
   699px is at the bell
   +width 100% !important; */

/* CARD (NOTIFICATIONS, ALERTS) */
GM_addStyle("DIV.sb-card {right:0px; top:47px;}");
/* +position:relative; margin-left:620px; */

GM_addStyle("DIV.sb-on {z-index:1999999999;}"); /* does not seem to work */
GM_addStyle("DIV.sb-card-arrow, DIV.sb-card-body-arrow {right:82px;}");

GM_addStyle("DIV.l4a {margin-right:0px; width:100%;}");

/* SEARCH, etc. */
GM_addStyle("BODY.exp-responsive .search #content {width:auto; min-width:644px;}");

/* SEARCH RESULTS */
GM_addStyle("DIV.browse-list-item-container.feed-item-container.branded-page-box, DIV.compact-shelf.branded-page-box {padding-left:0px; padding-right:7px;}");

/* SEARCH RESULT THUMB */
GM_addStyle("DIV.yt-lockup.yt-lockup-tile .yt-lockup-thumbnail {margin-right:0px;}");

/* SEARCH RESULT ITEM */
GM_addStyle("DIV.yt-lockup .yt-lockup-content {background:linear-gradient(to bottom, rgb(255, 255, 255) 0px, transparent 21px, transparent 100%); padding-left:2px;}");
/* 15.10.2016: padding-left:2px (from 7px), b/c .yt-lockup-content is used often. */

GM_addStyle("DIV.yt-lockup.yt-lockup-tile .yt-lockup-content {padding-left:7px;}");
/* 15.10.2016: separate padding for tiled search results only. */

/* LINK UNDERLINE ON ITEM HOVER */
GM_addStyle("DIV.yt-lockup .yt-lockup-content:hover H3.yt-lockup-title A {text-decoration:underline;}");

/* SEARCH RESULT ITEM LINK */
GM_addStyle("BODY.exp-search-font-18 #results .yt-lockup-tile .yt-lockup-title {font-size:15px;}");
/* +05.12.2016, per December 2016 redesign. */

GM_addStyle("DIV.yt-lockup-content H3.yt-lockup-title A {background-color:inherit;}");
GM_addStyle("DIV.yt-lockup-content H3.yt-lockup-title A:visited {color:SlateBlue;}");

GM_addStyle("DIV.yt-ui-ellipsis {background-color:inherit; color:black;}");

/* CHANNELS | lists videos in a channel (uploads)
   video list | videos list | uploads list */
GM_addStyle("UL.channels-browse-content-grid {margin-right:unset; padding-right:5px;}");
/* 15.11.2018: +padding */

GM_addStyle("LI.yt-shelf-grid-item {margin-right:5px;}");
/* 15.11.2018: +rule */

/* CHAT */
GM_addStyle("DIV.live-chat-widget .comment-text {display:inline-block; width:100%;}");

GM_addStyle("DIV.live-chat-widget DIV#comments-view .content {width:auto !important; min-width:unset !important;}");

/* #PLAYLIST */
GM_addStyle("DIV#page.watch .content-alignment {width:auto; min-width:783px;}");
/* width:auto is just a failsafe parameter; 
   min-width:886px; is to make sure that the text is wide enough, but 
   it's not enough for 800x600px resolutions, so min-width:783px is for 
   this resolution.
   Unfortunately, it interferes with layouts that don't include the 
   playlist, so... Use + and a preceding selector. */

/* TOP BAR RIGHT */
GM_addStyle("DIV.watch7-playlist-bar-right {background-color:rgb(27, 27, 27);}");

/* TOP: Video count */
GM_addStyle("DIV.playlist #watch7-playlist-bar-controls {width:auto; min-width:81px; max-width:120px;}"); /* min-width is provisional; in some rare cases, there might be playlists with maybe a thousand or so items. */

/* TOP: SHUFFLE and other buttons' location */
GM_addStyle("DIV.watch7-playlist-bar-secondary-controls {padding-right:15px;}");

GM_addStyle("OL#watch7-playlist-tray {overflow-y:scroll;}");
/* ^ This ensures that the scroller is always visible. It works, but is still a temporary solution. */

GM_addStyle("OL#watch7-playlist-tray .video-list-item {border-top:none;}");

/* TRAY: PLAYLIST ITEM | 2014.04 */
GM_addStyle("DIV#watch-appbar-playlist .playlist-videos-list > LI {padding-right:0px; padding-top:0px; padding-bottom:1px; font-size:0px; border-bottom:solid 1px black;}");
/* font-size:0px should ensure that the item won't have that superfluous bottom space...
09.09.2019.: There are two instances of padding-bottom. In the earlier one, replaced 0px with 1px, and remove the later one. */

/* TRAY: PLAYLIST ITEM LINK */
GM_addStyle("OL#watch7-playlist-tray .video-list-item A {padding-top:0px; padding-bottom:0px; padding-left:30px;}"); /* works */

/* TRAY: PLAYLIST ITEM COUNT */
GM_addStyle("LI.video-list-item .stat {line-height:inherit; height:inherit; white-space:normal; padding-bottom:1px;}"); /* this also applies to other video listings, especially the sidebar */
GM_addStyle("OL#watch7-playlist-tray .video-list-item .count {top:0px; left:0px; width:22px; margin-top:8px; margin-bottom:0px; text-align:right;}");

/* TRAY: PLAYLIST ITEM INDEX (ARROW) (outside the link, btw)
 | 2014.04 */
GM_addStyle("DIV#watch-appbar-playlist .playlist-videos-list .video-index {margin-left:0px; margin-right:0px;}"); /* original: 2px for both */

/* PLAYLIST VIDEO LINK 2014.04-05 */
GM_addStyle("DIV#watch-appbar-playlist .playlist-video {height:auto; min-height:45px;}");

/* PLAYLIST: NOW PLAYING | CURRENTLY PLAYING */
GM_addStyle("DIV#player-playlist :not(.watch-queue-nav) .playlist-videos-list LI.currently-playing {height:auto; min-height:45px;}");

/* TRAY: PLAYLIST THUMBNAIL */
GM_addStyle("DIV#watch-appbar-playlist .playlist-video .video-thumb {margin-top:3px; background:none;}"); /* original:4px */
/* 15.04.2017: +no background to remove white borders */

/* OLD, before 2014-04:
GM_addStyle("OL#watch7-playlist-tray .video-list-item .ux-thumb-wrap {margin-top:2px; margin-bottom:4px;}");
*/ /* works */
/* span... margin-top can also be 3px */

/* TRAY: PLAYLIST ITEM TITLE */
GM_addStyle("OL#watch7-playlist-tray .video-list-item .title {display:inline; width:auto;}");
/* GM_addStyle("LI.video-list-item .title {display:inline;}"); */
/* ^ works, but is an older variant. */
/* Should allow for text to flow; title for SPAN, if needed.
 • Note that if only LI.video-list-item is specified, then it also 
   affects the video suggestion list which also includes the :before 
   statement that follows. */

/* Added 28.11.2015. */
GM_addStyle("DIV#player-playlist .playlist-video-description {top:0px; width:auto; min-width:120px; padding-left:1px;}");
/* top:0px is to align text with the top side of the thumbnail. 
   Min-width sets the text to reflow below the thumbnail, if viewport 
   width is small.
   
P., 13.11.2016: +padding-left to separate text from right video border. */

/* PLAYLIST ITEM TITLE PREFIX MARGIN */
/* GM_addStyle("OL#watch7-playlist-tray .video-list-item .title:before {display:block; content:\'---\'; font-size:0px; height:1px; width:10px; margin-left:72px; border:none; background-color:blue;}"); */
/* ^ Works as block, but not as inline-block, if it's prefixed to inline 
   text to allow it to have 1px padding. Because it's a block, it's 
   somehow put out of normal flow and requires margin-left... I had set 
   the original width to 25px. */

/* REMOVE FROM PLAYLIST BUTTON */
GM_addStyle("BUTTON.yt-uix-button-playlist-remove-item {margin-right:0px; margin-top:0px; background:linear-gradient(to left, rgb(0, 0, 0) 0%, transparent 100%); border:none;}"); /* WORKS */
/* ^ transparent to black
• border-color:maroon;
• possible background:linear-gradient(to left, rgb(128, 0, 0) 0%, transparent 100%) — maroon to transparent
• linear-gradient(to left, rgb(0, 0, 0) 0%, transparent 100%) — IN USE */
/* GM_addStyle(" "); */

/* VIDEO: SPINNER | 26.11.2017. */
GM_addStyle("DIV.ytp-spinner > .ytp-spinner-container {display:none;}");
/* Mod: 24.05.2018 */
GM_addStyle("DIV.ytp-spinner:before {content:\'A spinner\.\'; display:inline;}");
/* 24.05.2018: Replaced from: Just a friendly spinner replacement... */

/* #VIDEO: STUPID OVERLAYS NEAR END OF THE VIDEO, which, like, no-one 
   ever asked for. Will display upon video hover. Gecko browsers only. Added 27.11.2017. */
GM_addStyle("BODY.gecko DIV.ytp-ce-element.ytp-ce-element-show {opacity:0; visibility:hidden;}");
GM_addStyle("BODY.gecko DIV#movie_player:hover DIV.ytp-ce-element.ytp-ce-element-show {opacity:1; visibility:visible;}");
/* While I did consider BODY.yt-user-logged-in , then I chose not to use 
   it, as some people prefer to watch videos when not logged in at all, 
   or watch certain videos like that. */

/* #VIDEO: NOTIFICATIONS | 30.10.2016 */
GM_addStyle("DIV#watch7-speedyg-area {margin-top:-9px; margin-bottom:3px;}");
/* It seems, that these margins are pretty definite. I'm currently testing 
margin-bottom: 3px (was:6px) */

/* #VIDEO: TITLE BELOW */
GM_addStyle("DIV#watch-header {padding-left:0px; padding-right:0px; padding-top:0px; min-height:130px; background-color:inherit;}");

/* This was added around 29.07.2017. The message should now be moot. */
/* GM_addStyle("DIV#watch-header:before {content:\'Notice: The Greasemonkey code forcing Flash has been moved into a new file. Check about:addons \\> User Scripts \\> uTube Rez description to copy its URL.\'; display:inline-block; font-size:10pt; border:solid 1px Silver; padding:1px; margin:1px;}"); */

/* TITLE */
GM_addStyle("DIV#watch7-headline, HTML.not-watch8 #watch-headline {padding-left:0px; padding-right:188px; position:relative;}");
/* 15.10.2016: added position:relative to allow absolute positioning of 
   trending notifications.
   11.04.2017: right padding 165px to 188px */

GM_addStyle("DIV#watch7-headline H1 {width:unset;}"); /* original: 75%. */
/* 18.10.2016.: unset. This may cause overlap w/ very large view counts. */

/* GM_addStyle("DIV#watch7-headline H1:hover {background:linear-gradient(to right, rgb(244, 164, 96) 0px, rgb(241, 241, 241) 100%);}"); */
/* 255,127,80 = Coral
   255,218,185 PeachPuff
   244,164, 96 SandyBrown */

/* GM_addStyle("DIV#watch7-headline H1:hover > SPAN:after {content:\'Clicking on the title has caused NoScript to alert about a possible XSS attempt.\'; display:block; position:relative; font-size:x-small;}"); */
/* 19.03.2016: Turns out, that this was caused by NoScript. */

/* TITLE LETTER-SPACING (for Arial font) */
/* GM_addStyle("DIV#watch7-headline H1 .long-title {letter-spacing:-0.04em;}"); */ /* Works for all .long-title selectors */
GM_addStyle("DIV#watch7-headline H1 .long-title[TITLE*=\'ll\'], DIV#watch7-headline H1 .long-title[TITLE*=\'õn\'], DIV#watch7-headline H1 .long-title[TITLE*=\'ne\'], DIV#watch7-headline H1 .long-title[TITLE*=\'le\'], DIV#watch7-headline H1 .long-title[TITLE*=\'ol\'], DIV#watch7-headline H1 .long-title[TITLE*=\'on\'], DIV#watch7-headline H1 .long-title[TITLE*=\'öl\'] {letter-spacing:-0.04em;}"); /* WORKS! - default -0.05em */

/* GM_addStyle("SELECTOR_NOT_SPECIFIED {letter-spacing:-0.03em;}"); */
/* WORKS! - Keep for other things. */

GM_addStyle("DIV#watch7-headline H1 .long-title[TITLE*=\'rl\'], DIV#watch7-headline H1 .long-title[TITLE*=\'rm\'], DIV#watch7-headline H1 .long-title[TITLE*=\'rn\'], DIV#watch7-headline H1 .long-title[TITLE*=\'rv\'], DIV#watch7-headline H1 .long-title[TITLE*=\'õe\'] {letter-spacing:-0.02em;}");
/* 'rm' and 'rn' to make sure that the closeness of 'r' with either 'm' or 'n' won't cause people to misread it as a duble 'm' or 'n'. */

GM_addStyle("DIV#watch7-headline H1 .long-title[TITLE*='rl'] {letter-spacing:-0.01em;}");
/* 'rm' and 'rn' to make sure that the closeness of 'r' with either 'm' or 'n' won't cause people to misread it as a duble 'm' or 'n'. */

/* RIGHT-SIDE SUBSCRIBE BUTTON | +31.07.2017 */
GM_addStyle("SPAN.yt-subscribe-button-right {position:absolute; right:5px; bottom:-84px; border:solid 1px rgba(229,33,23,0.5);}");
/* Removes the button from main text flow, and moves it below. */

GM_addStyle("SPAN.yt-material-subscribe-button .yt-uix-button.yt-uix-button-subscribe-branded, SPAN.yt-material-subscribe-button .yt-uix-button.yt-uix-button-subscribed-branded {padding-top:3px; padding-bottom:3px; background-color:transparent;}"); /* 31.07.2017 */

/* TELLI/SUBSCRIBE | 31.07.2017 */
GM_addStyle("BUTTON.yt-uix-button-subscribe-branded .subscribe-label {color:rgba(229,33,23,0.7);}");
GM_addStyle("BUTTON.yt-uix-button-subscribe-branded .subscribe-label:after {content:\':\'; display:inline; color:rgba(229,33,23,0.7);}");

/* TELLI/SUBSCRIBE BUTTON HOVER (below video) | 09.09.2019. */
GM_addStyle("BUTTON.yt-uix-button-subscribe-branded:hover .subscribe-label, BUTTON.yt-uix-button-subscribe-branded:hover .subscribe-label:after {color:white;}");

/* SUBSCRIBER COUNT | 31.07.2017 */
GM_addStyle("BODY.exp-responsive #content .yt-material-subscribe-button.yt-uix-button-subscription-container .yt-subscriber-count {color:#434343;}");

/* LONG TITLE :after pseudo-element
 | This shows if there's a long title. I need this to see if 
   letter-spacing:-0.05em as set by default .long-title rule. */
/* GM_addStyle("DIV#watch7-headline H1 .long-title:after {display:inline-block; content:\'LONG TITLE\'; font-size:x-small; border:solid 1px maroon;}"); */
/* ^ The above rule should ideally be moved to the future development 
   version of the userstyle, as the current file is now like a 
   production version. Of sorts. */

/* GM_addStyle("DIV#watch7-headline .yt-uix-expander-head {letter-spacing:-0.04em;}"); */
/* works, but is more generic and is not necessary either. */

/* Comment added 15.10.2016: Because the view count and ratings are 
   absolutely positioned, the title is given a right margin to avoid 
   overlap into one another. */
GM_addStyle("DIV#watch7-headline.yt-uix-expander-collapsed H1, DIV#watch7-headline.yt-uix-expander H1 {margin-right:107px;}");
/* works for first item, */

/* TRENDING (video popularity) status | Section added 15.10.2016 */
GM_addStyle("SPAN.standalone-collection-badge-renderer-text {position:absolute; bottom:-43px; right:0px; z-index:1;}");
GM_addStyle("SPAN.standalone-collection-badge-renderer-text A {margin-right:5px; background-color:transparent; padding:0px; color:#555;}");
/* Trending notification moved below video count and ratings, depends on bottom.
   Options: right:165px; bottom:-12px */

/* USER INFO (NAME) */
GM_addStyle("DIV#watch7-user-header {margin-top:5px; background:linear-gradient(to right, rgb(241, 241, 241) 48px, white 0%, rgb(241, 241, 241) 100%); padding-top:0px; padding-bottom:0px;}");
/* L., 17.12.2016: 
   rgb(241) set to 48px; was: 53px
 • Old gradient variant: (rgb(241, 241, 241) 48px, white 0%, rgb(241, 241, 241) 100%)
 • Alternate gradient variant: (white 0%, rgb(241, 241, 241) 100%)
 + padding-top:5px; original(?):11px. Then 0.
 + margin-top. */

GM_addStyle("DIV#watch-header .yt-user-info {padding-bottom:0px; margin-left:53px;}");
/* L., 17.12.2016: +margin-left, original: 58px */

/* The left-side RED SUBSCRIBE BUTTON | Code added on L., 17.12.2016. */
GM_addStyle("SPAN#watch7-subscription-container {margin-left:5px;}");

/* 03.09.2017 | Subscribe button (branded) */
GM_addStyle("BODY.exp-invert-logo .yt-uix-button-subscribe-branded {border:solid 1px transparent; border-image:linear-gradient(to right, rgba(204, 24, 30,0.7) 0%, #cccccc 100%) 1 1 1 1; border-image-slice:1; background-color:transparent;}");
/* rgb(240,24,30) = #CC181E */

/* 09.09.2019. | Subscribe button (below video) hover */
GM_addStyle("BODY.exp-invert-logo .yt-uix-button-subscribe-branded:hover {background-color:rgba(204, 24, 30,0.7);}");

/* YouTube logo border before inside Subscribe button. | 09.09.2019. */
GM_addStyle("BUTTON.yt-uix-button-subscribe-branded::before {border:solid 1px rgba(204,24,30,0.5); border-radius:4px;}");

/* YouTube logo border hover. | 09.09.2019. */
GM_addStyle("BUTTON.yt-uix-button-subscribe-branded:hover::before {border:solid 1px rgba(204,24,30,0.7);}");

/* BELOW TITLE: ACTION BUTTONS */
GM_addStyle("DIV#watch8-secondary-actions {position:relative; left:0px; background:linear-gradient(to bottom, white 50%, transparent 100%);}");

/* BELOW TITLE: VIEWS COUNT and RATINGS */

/* GM_addStyle("DIV#watch7-views-info {top:-96px; right:0px; height:29px;}"); */
/* Original: -47px | was:-42px | March 2015: -95px
   right: was 8px until changed to 0 on march 2015. Set height. */

GM_addStyle("DIV#watch8-sentiment-actions {position:absolute; top:-77px; right:0px;}"); /* June 2015 */
/* The position of this bock depends on #watch7-user-header and its top padding. 
top was: -88px. L., 17.12.2016: set to -82px. Then -77px. */

/* June 2015 */
GM_addStyle("DIV#watch7-views-info {position:relative; bottom:0px; right:unset; padding-right:5px;}");
/* June 2015 proposal, because has a parent container. Already absolutely 
positioned:
DIV#watch7-views-info {top:0px;} — Note that top assumes absolute positioning
DIV#watch8-sentment-actions {:;}
• struck height.
• E., 09.09.2019.: right was set from :; to unset. */

/* VIEW COUNT */
GM_addStyle("DIV.watch-view-count {position:static; text-align:right;}");

/* LIKES/DISLIKES BAR */
GM_addStyle("DIV#watch7-views-info .video-extras-sparkbars {margin-top:0px;}"); /* orig: 4px; then 3px; June 2015: 0px */
/* DISLIKES */
GM_addStyle("DIV.video-extras-sparkbar-dislikes {background-color:#e52b21;}"); /* was: rgb(204) */

/* LIKES/DISLIKES BUTTONS | vote */
GM_addStyle("SPAN.like-button-renderer {float:right; margin-top:-1px; background-color:transparent; padding-right:5px;}"); /* works */
/* #99ccff
 • 27.11.2016: Made background-color:transparent, color was rgb(241, 241, 241) */

/* LIKES/DISLIKES BUTTON TEXT | vote */
GM_addStyle("BUTTON.yt-uix-button-has-icon.no-icon-markup .yt-uix-button-content {color:black;}");

/* June 2015: Temporarily took out. width of 88px */
/* GM_addStyle("SPAN.like-button-renderer:before {content:\'---\'; display:block; font-size:0px; height:28px !important; width:88px; background-color:blue; clear:both;}"); */
/* March 2015, [the original] WORKS; background-color:blue; float:right; */

/* GM_addStyle("SPAN#watch-like-dislike-buttons {position:absolute; top:-65px; right:0px;}"); */
/* v.March 2015: WORKS; background-color:#99ccff; */

/* COMMENTS */
GM_addStyle("DIV.all-comments, DIV.mj {background-color:inherit; color:black;}");

/* COMMENT MARGINS | All added on R., 23.12.2016. */
GM_addStyle("SECTION.comment-thread-renderer {margin-right:0px;}");
GM_addStyle("DIV.comment-renderer {margin-right:15px;}");
GM_addStyle("DIV.branded-page-box {padding-left:0px; padding-right:1px;}");
/* This one is now inline with username. */

/* COMMENT "add comment" textbox border */
GM_addStyle("DIV.comment-simplebox-arrow .arrow-inner {border:unset;}");

/* LINKS IN COMMENTS */
GM_addStyle("DIV.all-comments A {background-color:inherit; color:navy;}");
GM_addStyle("DIV.all-comments A:hover {color:blue;}");

/* COMMENT TEXT COLOR */
GM_addStyle("DIV.comments .comment-item .content {color:black;}");

/* COMMENT AUTHOR?? */
GM_addStyle(".comment-header, DIV#watch-discussion .comment-text, DIV#watch-discussion .comment .author {background-color:white;}");
/* DIV.comments .comment-text .comment-text-content {padding-left:2px;} */

/* COMMENT TEXT COLOR (AGAIN) */
GM_addStyle("DIV.comments .comment-text .comment-text-content {background-color:white; color:black;}");

/* COMMENT TEXT: HOVER TO see bigger text */
GM_addStyle("DIV.comment-renderer-text-content:hover {max-height:unset; font-size:175%; line-height:1.3em; font-family:\'Open Sans Condensed Light\',\'DejaVu Sans ExtraLight\',\'Source Sans Pro ExtraLight\',\'Liberation Sans Narrow\',\'Arial\',\'Helvetica\',\'Helv\';}");

GM_addStyle("BODY:not([class*=\'gecko-5\']) DIV.comment-renderer-text-content:hover {font-family:\'Open Sans Condensed Light\',\'DejaVu Sans ExtraLight\',\'Source Sans Pro ExtraLight\',\'Liberation Sans Narrow\',\'Symbola\';}");
/* These two rulesets are meant to make comment text bigger on hover in 
   order to better see emojis. To test, check out this one: 0fX14KNFJDg.
   E., 21.11.2016.: Separated font-family from font-size, because 
   Firefox 50 and newer have built-in emoji support with a special font. 
Older browsers, however, must do with Symbola. The upper ruleset has a 
   graeter font selection, because not all computers and users have 
   Open Sans Condensed Light. The line-height, btw, applies to that same 
   font. It was chosen because of its condensed character strokes at a 
   big (175%) size. */

/* COMMENT RATE BUTTONS | VOTE */
GM_addStyle("DIV.comments .mod-button {font-size:x-small; line-height:1.4em;}");

GM_addStyle("DIV.comments .mod-button-content {font-size:8px; line-height:1.2em;}");

/* COMMENTS LIKE/DISLIKE BUTTONS | VOTE */
GM_addStyle("DIV.comments .sprite_like {margin-top:0px; padding-top:0px;}");
GM_addStyle("DIV.comments .sprite_dislike {margin-bottom:0px; padding-bottom:0px;}");

GM_addStyle("DIV.comments .sprite_like, DIV.comments .sprite_dislike {cursor:pointer;}");

/* (VIDEO LIST, SUBSCRIBE BUTTON) */
GM_addStyle("SPAN.qualified-channel-title.ellipsized {display:inline;}");
/* GM_addStyle("UL.video-list .video-list-item .yt-uix-button-subscription-container {left:inherit; right:8px; bottom:0px;}"); */
/* The above ruleset fixes the inline stuff. */

/* SIDEBAR AUTOPLAY (HEAD) */
GM_addStyle("DIV.autoplay-bar .checkbox-on-off {display:block; position:absolute; top:0px; right:unset; left:0px; width:168px; margin-left:0px;}");
/* margin-left:52px was apparently added on 02.2015. 
   K., 21.12.2016:
   Use these when appropriate: 
   border-top:solid 1px Silver; border-right:solid 1px Silver; border-bottom:solid 1px Silver;
*/

/* GM_addStyle("LABEL[for=\"autoplay-checkbox\"] {line-height:1.5em;}"); */
/* that is nitpicking, too. */

/* GM_addStyle("DIV.autoplay-bar .autoplay-info-icon {margin-top:0px; background-position:-263px -189px;}"); */
/* that's nitpicking already... */

/* SIDEBAR HEAD (H4) */
/* GM_addStyle("DIV#watch7-sidebar-modules .autoplay-bar .watch-sidebar-head {margin-left:0px; margin-right:0px; width:auto; min-width:120px;}"); */ /* 06.2014 */
/* min-width:177px added on 02.2015 | worked until June 2015.
   min-width:120px was apparently then set to on 06.2015[, but] below. */
GM_addStyle("DIV#watch7-sidebar .watch-sidebar-head {display:inline-block; width:98%; margin-left:0px; margin-right:0px; padding-right:0px; overflow:initial; white-space:normal; word-wrap:normal; text-overflow:unset; text-align:right; border-top:solid 1px white; border-right:solid 1px white; border-bottom:solid 1px white;}");
/* 21.12.2016: removed min-width:120px, replaced with 98%; +text-align:right.
   21.12.2016: +inline-block (resolves positioning the below :before pseudoelement)
   21.12.2016: white-space set to normal. Resolves floating issues.
   21.12.2016: unset text-overflow; was:ellipsis */

GM_addStyle("DIV#watch7-sidebar H4.watch-sidebar-head:before {content:\'---\'; display:block; margin:0px; font-size:0px; height:19px; width:168px; float:left;}"); /* 21.12.2016., works */
/* background-color:Thistle; */

GM_addStyle("DIV#watch7-sidebar H4.watch-sidebar-head:after {content:\'\:\'; display:inline; margin:0px; margin-left:-4px; padding:0px;}"); /* 21.12.2016., experimental.\0150 – | works.  background-color:Thistle; */

GM_addStyle("@media only screen and (max-width:832px) { DIV.autoplay-bar .checkbox-on-off, DIV#watch7-sidebar H4.watch-sidebar-head:before {width:135px;} }"); /* K., 21.12.2016, experimental. */

/* 
GM_addStyle("DIV.autoplay-bar .watch-sidebar-body {clear:both; display:inline-block; width:100%;}"); */
/* experimental; uncomment as needed. */

/* SIDEBARS: Main and Playlist sidebar. */
GM_addStyle("DIV.watch7-playlist-sidebar, DIV#watch7-sidebar {margin-right:0px; min-width:120px;}"); /* 06.2014 */

/* SIDEBAR */
GM_addStyle("DIV#watch7-sidebar, DIV.watch-sidebar {margin-left:auto; margin-right:auto; padding-right:0px; transition:none;}"); /* 06.2014 */
GM_addStyle("DIV.watch-sidebar {min-width:198px;}"); /* 06.2014 */

GM_addStyle("DIV#watch7-sidebar {width:auto; max-width:400px; min-width:120px; margin-left:640px; margin-right:0px; background-color:inherit;}"); /* 06.2014 */
/* border-top:solid 1px white; border-right:solid 1px white; */
/* margin-left:640px keeps the sidebar to the right next to the video.
   Also in the original: margin-top:-370px */

GM_addStyle("@media only screen and (max-width:777px) { DIV#yt-masthead-container {min-width:496px !important;}  DIV#watch7-main {min-width:496px; margin-left:0px !important; display:flex; flex-direction:row;}  DIV#watch7-content {width:496px;}  DIV#watch7-sidebar {width:144px; min-width:144px; margin-left:0px; margin-top:0px; clear:none;}  DIV.watch7-sidebar-contents {position:absolute;}  DIV.watch.watch-non-stage-mode #player.content-alignment, BODY.site-center-aligned .watch #content.content-alignment, BODY.site-center-aligned #content, DIV#page.watch .content-alignment, DIV.watch.watch-non-stage-mode #player.content-alignment {min-width:496px;} }");
/* N., 05.09.2019. This should help with even lower screen resolutions. 
So far, this is quite a cluster, but mostly seems to work. */

/* SEARCH RESULTS LIST | N., 05.09.2019. */
GM_addStyle("@media only screen and (max-width:704px) { BODY.exp-responsive .feed #content {width:100%;} }");

/* SEARCH RESULTS LIST | N., 05.09.2019. */
GM_addStyle("@media only screen and (max-width:910px) { BODY.exp-responsive .feed #content {width:100%;} }");

/* sidebar gutter */
GM_addStyle("BODY.site-center-aligned .watch-sidebar-gutter {padding-right:0px;}"); /* 06.2014 */
GM_addStyle("BODY.site-center-aligned #watch-sidebar-contents, DIV#watch7-sidebar-contents {padding-left:0px; background-color:transparent;}"); /* 06.2014, adjusted on 08.2014 */
/* ^
GM_addStyle("DIV#watch7-sidebar .watch-sidebar-section {margin-left:0px;}"); */
/* Introduced 08.2014, commented out 22.11.2014 */

/* GM_addStyle("UL.video-list {min-width:198px;}"); */

/* SIDEBAR ITEM */
GM_addStyle("LI[class~=video-list-item] {margin-bottom:7px; display:inline-block; width:98%; border:solid 1px white; border-left:none; overflow-x:hidden;}"); /* original was 5px for both (was that margin-bottom?) | 06.2014 */
/* 02.2015.: set margin-bottom to 7px from 10px.
   02.2015.: Strangely enough, the width cannot be set to 100%.
01.09.2016.: Set width to 98% to avoid the scollbar. But something is not quite right there.
06.10.2016.: +overflow-x to avoid an early (?) horizontal scrollbar.
15.04.2017.: Replaced 98% with calc(100% - 2px), but then it didn't quite work out. */

/* SIDEBAR ITEM/TEST: 02.2015.: This :before is for a specific SIDEBAR ITEM, mainly for testing. */
/* GM_addStyle("DIV#watch7-sidebar-modules .autoplay-bar .watch-sidebar-head + DIV.watch-sidebar-body LI[class~=video-list-item]:before {content:\'---\'; display:block; font-size:0px; height:68px !important; width:120px; background-color:#409fff; float:left;}"); */ /* works */
/* border:solid 1px red; */

/* This BEFORE is for all SIDEBAR ITEMS */
GM_addStyle("LI[class~=video-list-item]:before {content:\'---\'; display:block; margin-right:5px; font-size:0px; height:94px !important; width:168px; background-color:Silver; float:left;}");
/* original: width:120px; height:68px
   width:120px; height:120px; NEW 180x101px
   border:solid 1px red; background-color:Silver
new size: 180px × 101px
new size for 08.2016: 168x94px */

/* When the viewport width gets to less than 832px, make sidebar items' 
   thumbnails smaller. There is a todo below the ruleset for future 
   changes. */
GM_addStyle("@media only screen and (max-width:832px) { LI[class~=video-list-item]:before {content:\'---\'; height:76px !important; width:136px; margin-right:0px;}  BODY.exp-wn-big-thumbs .related-list-item .yt-uix-simple-thumb-related IMG, BODY.exp-wn-big-thumbs-v3 .related-list-item .thumb-wrapper, BODY.exp-wn-big-thumbs-v3 .related-list-item .yt-pl-thumb .yt-thumb, BODY.exp-search-big-thumbs .related-list-item .thumb-wrapper, BODY.exp-search-big-thumbs .related-list-item .yt-pl-thumb .yt-thumb, BODY.exp-search-big-thumbs .related-list-item .yt-pl-thumb .yt-thumb IMG, BODY.exp-search-big-thumbs .related-list-item .yt-uix-simple-thumb-related, BODY.exp-search-big-thumbs .related-list-item .yt-uix-simple-thumb-related IMG {width:136px !important; height:76px;}  SPAN.video-time {bottom:1px;} LI.related-list-item .video-time {right:1px;} }");
/* Strangely, this (had) created a horizontal scrollbar only when logged in. */
/* This line reduces video thumbnails' size in the sidebar, among other things. 

   T., 28.02.2017: video-time in small sizes.

   Current original:
   .video-list-item .yt-uix-simple-thumb-wrap {margin-right:8px;}
   
   N., 23.03.2017:
 • Apparently, exp-wn-big-thumbs might not exist any longer (march 2017 design 
   change), which means, that three new selectors with another topmost selector 
   had to be added; the latter being BODY.exp-search-big-thumbs.
   Because topmost selectors at BODY might change from time to time, I might add 
   instead a wildcard stringmatch selector for '-big-thumbs'.
 • Added another one that affects the mix playlist thumb, and then set the 
   width to !important.
 • video-time: bottom: from 19px to 1px. 
 • video-list-item:before: +margin-right:0px */

/* SIDEBAR LINK (A) */
GM_addStyle("LI[class~=\"video-list-item\"] A {display:block; min-width:95px; padding-left:0px; padding-right:1px; padding-bottom:0px;}");
/* original was 5px for both | 06.2014
02.2015: +width:99% (display:block seems to prevail)
         currently related to all links.
         min-width:120px is equal to thumb width.
01.09.2016: Is paddin-right:1px ok? */

GM_addStyle("LI[class~=video-list-item] > A {margin-top:-1px; padding-top:1px;}");
/* border:solid 1px white; border-left:none;
01.09.2016: removed width:100%; (caused a scrollbar to happen) */
/* 2015 start | This generally works, and is useful for testing. */
/* GM_addStyle("UL[class~=video-list] > LI[class~=video-list-item]:after {content:\'---\'; display:block; position:relative; font-size:0px; height:5px; width:99%; border:solid 1px red; background-color:#99ccff;}"); */
/* LI[class~=video-list-item] > A:after - positions it within the A element. */

/* SIDEBAR LINK: RELATED PLAYLIST for new Gecko | 21.11.2016 */
GM_addStyle("BODY[class~=exp-searchbox-redesign] LI[class~=video-list-item][class~=related-list-item-compact-radio]:before, BODY[class~=exp-searchbox-redesign] LI[class~=video-list-item][class~=related-list-item-compact-playlist]:before {display:none;}");
/* Appending the selector with [class~=related-list-item-compact-radio] and 
   with [related-list-item-compact-plyalist] works. */
GM_addStyle("BODY[class~=exp-searchbox-redesign] LI[class~=video-list-item] > A.related-playlist {position:unset;}"); /* was:absolute */
/* Gecko50-based (?) browsers seem to have issues related to thumbnail 
   link placements of mix links. Here, I used the BODY class related to 
   the search box redesign, which should apply to browsers with a newer 
   Gecko rendering engine. Gecko 39, 38, and lesser ones should then not 
   be affected. I first discovered the search box redesign for new Gecko 
   on 20.11.2016. */

/* SIDEBAR VIDEO LINK VISITED COLOR */
GM_addStyle("LI[class~=video-list-item] A:visited .title {color:SlateBlue !important; background-color:gray;}"); /* Underlining and background color don't seem to work. | 06.2014 | was: video-lis-item [sic?] */

/* SIDEBAR VIDEO LINK WATCHED VIDEO PLAYBACK PROGRESS BAR | purple
 | K., 21.12.2016. */
GM_addStyle("SPAN.resume-playback-background {background-color:#222;}"); /* was: 777; original: #eee */
GM_addStyle("BODY.exp-invert-logo SPAN.resume-playback-progress-bar {background-color:SlateBlue; width:100% !important;}");
/* The progress bar for each visited video was introduced in late 2016, 
   around October, November, or December.
   Color change in late August / September 2017. Set back on 03.09.2017.
   26.11.2017: +width. */

/* SIDEBAR VIDEO KEYWORDS | First seen P., 23.04.2017 */
GM_addStyle("SPAN.standalone-collection-badge-renderer-icon {margin:0px 0px 1px 0px; padding:0px 0px;}"); /* also uses yt-badge */
/* 2px 0px   3px    0px
   top|right|bottom|left */

/* SIDEBAR VIDEO TITLES
   Set video suggestions' titles as blocks, min-width:120px */
GM_addStyle("UL.video-list .video-list-item .title {display:block; min-width:95px; max-height:2.45em; margin-right:0px; line-height:1.17em;}"); /* 06.2014 | \'LONG TITLE \\2010\' */
/* originally set block min-width:120px (thumb width), but then lessened it to 60px.
   original max-height:2.4em
26.11.2017: +margin-right. original: 15px. */

/* SIDEBAR VIDEO TITLES' HYPHEN CHARACTER
 | separated from above ruleset on 09.09.2019. as a test. */
GM_addStyle("UL.video-list .video-list-item .title {hyphenate-character:\'\\002D\';}");
/* This one yields the error about the wrong property in the ruleset, 
for which reason I've separated it. */

/* SIDEBAR VIDEO LINKS set to BOLD */
GM_addStyle("UL.video-list .video-list-item .title, H3.yt-lockup-title A {font-size:100%; font-weight:600;}");
/* This was the location for error: 
"Unexpected end of file while searching for ';' or '}' to end declaration.  Unexpected end of file while searching for closing } of declaration block."

Use this regular expression string to search:

\{.*[^\}]\"

\{     the searchable string must contain and starts with a curly brace, which is escaped (it's a special character);
.*     any characters (that follow);
[^\}]  "^" is the "not" operator inside corner braces. ^ must be followed by a character or string to be excluded, such as a curly brace which is escaped so as to be treated as a normal character;
\"     escaped double quote, which, if not escaped, is a special character.

*/

/*
GM_addStyle("@media only screen and (max-width:1023px) { .frontBlock.frontBlock.frontType13 .frontLead, {:;} }");
*/

/* SIDEBAR ITEM & LINKS, THUMBNAILS | 2015 start */
GM_addStyle("LI[class~=related-list-item] .content-wrapper {display:block; position:relative; width:100%; margin-left:0px; margin-right:0px; padding-right:0px;}"); /* 02.2015 */
/* strangely:min-width:100% (?) */

/* 25.08.2016, from Summer redesign */
GM_addStyle("BODY[class~=exp-wn-big-thumbs] .related-list-item .content-wrapper {margin-left:unset;}");

GM_addStyle("LI[class~=related-list-item] .content-wrapper {border-top:solid 1px transparent;}"); /* 02.2015 | borders can be made white now. */

GM_addStyle("LI[class~=related-list-item] .content-link {min-height:unset;}"); /* 02.2015 | borders can be made white now. */
/* 08.2016: padding-left:47px; is temporary. Unset min-height. */

GM_addStyle("BODY[class~=exp-wn-big-thumbs-v3] .related-list-item .content-link {min-height:unset;}"); /* 25.08.2016 */

GM_addStyle("BODY[class~=exp-wn-big-thumbs] .related-list-item .content-link {min-height:unset;}"); /* 25.08.2016 */

GM_addStyle("LI.related-list-item .content-link {min-height:unset;}");
/* 25.08.2016 */

GM_addStyle("LI[class~=related-list-item] .thumb-wrapper {top:0px; left:0px; margin-left:0px; margin-right:0px;}"); /* 02.2015. margin-right is of little consequence */

/* VIDEO LINK SETTING | THREE-POINT BUTTON | RELATED LIST ITEM ACTION MENU */
GM_addStyle("LI.related-list-item .related-item-action-menu {min-width:10px; min-height:16px;}"); /* 26.11.2017 */
/* Original: width:9px (computed); height:16px (computed) */

/* VIDEO LINK SETTING | THREE-POINT BUTTON | RELATED LIST ITEM ACTION MENU BACKROUND */
GM_addStyle("LI.related-list-item .related-item-action-menu:hover {background-color:rgba(255,255,255,0.85);}"); /* 13.10.2016 */
/* set to white for better targeting */

/* VIDEO LINK SETTING | THREE-POINT BUTTON | RELATED LIST ITEM ACTION MENU LINK (BUTTON) */
GM_addStyle("DIV.related-item-dismissable .related-item-action-menu .yt-uix-button {margin-top:-4px; margin-right:0px; height:15px; width:13px;}"); /* 26.11.2017 */
/* Original width appears to be 10px. The 13px width is required to 
   accommodate the width of a :before pseudoelement that is 13px wide, 
   and has caused issues with horizontal scrollbars, when 
LI.video-list-item width is set to 100% from 98%, which was a compromise 
   measure. Let's see how it works. | testing */

/* UNDO 'NOT INTERESTED'. Added 13.10.2016. | All this requires a logged-in state. */
GM_addStyle("DIV.related-item-dismissed-container {position:absolute; right:0px; width:100%;}");
/* defaults to top at absolute position */

GM_addStyle("BODY.exp-wn-big-thumbs .service-endpoint-replace-enclosing-action-notification {height:auto; min-height:92px; margin-left:169px;}");

/* 17.10.2016: Fix for 'undo recommendation' issues on frontpage (grid) */
GM_addStyle("BODY.exp-wn-big-thumbs DIV.yt-lockup.yt-lockup-grid .service-endpoint-replace-enclosing-action-notification {margin-left:0px;}");

/* The following two rules depend on viewport width and the language set 
   for the page. The first rule is global. */
GM_addStyle("@media only screen and (max-width:915px) { BODY.exp-wn-big-thumbs .service-endpoint-replace-enclosing-action-notification {margin-left:0px; width:168px;} }"); /* 18.10.2016 */
/* Setting for Estonian and other languages in the UI: 895+22=917px, 
   reduced to 915px */

GM_addStyle("@media only screen and (max-width:893px) { HTML:lang(en) > BODY.exp-wn-big-thumbs .service-endpoint-replace-enclosing-action-notification {margin-left:0px; width:168px;} }"); /* 17.10.2016 */
/* 18.10.2016: Added HTML:lang(en) to accommodate the English-language UI.
   The alternative is HTML[lang=|"en"] ; The pipe is responsible for 
   hyphen-separated values beginning with en (en-us, etc).
   This assumes, that en is actually used by default.
 • 23.03.2017: The main selector might be affected by the 03.2017 design 
   change.
 • With en, viewport width is 871px, but add 22px (for some reason). */

GM_addStyle("@media only screen and (max-width:832px) { BODY.exp-wn-big-thumbs .service-endpoint-replace-enclosing-action-notification {min-height:74px; width:136px;} }");

GM_addStyle("BODY.exp-wn-big-thumbs .replace-enclosing-action-message {padding-top:0px;}");
/* SIDEBAR END */

/* normal mode (aligned) | Set margins here to put into the middle of the page */
GM_addStyle(".site-left-aligned #page.watch, .site-left-aligned #page.watch #guide, .site-left-aligned #watch7-playlist-container .watch7-playlist, .site-left-aligned #watch7-playlist, .site-left-aligned #watch7-video-container #watch7-video, DIV.site-left-aligned #watch7-main-container #watch7-main {margin-left:auto !important; margin-right:auto !important; padding-left:0px;}"); /* 06.2014 */
/* padding-left should be 0. Seems to work :-) */

/* GUIDE EXPANDED */
GM_addStyle("BODY.site-left-aligned.guide-expanded #player, .site-left-aligned.guide-expanded #watch7-main-container {padding-left:170px; min-width:780px;}"); /* Works :-) */
/* Older stuff: */
/* GM_addStyle("BODY.site-left-aligned.guide-expanded DIV.watch7-playlist, .site-left-aligned.guide-expanded #watch7-video-container, .site-left-aligned.guide-expanded #player, .site-left-aligned.guide-expanded #watch7-main-container {padding-left:inherit !important;}"); */
/* padding-left:0 must be taken away when the guide is expanded. Since it's the only parameter, I could commment it out... */

/* ^ Old information:
width:823px; width:841px !important;width:823px !important;
margin-left:0px !important; margin-right:0px !important; */

/* normal mode (guide collapsed) | original padding-left was 58px */
/* GM_addStyle("DIV#watch7-container .site-left-aligned.guide-collapsed DIV.watch7-playlist, DIV#watch7-container .site-left-aligned.guide-collapsed #watch7-video-container, DIV#watch7-container .site-left-aligned.guide-collapsed #player, DIV#watch7-container .site-left-aligned.guide-collapsed #watch7-main-container {padding-left:0px !important; margin-left:auto !important; margin-right:auto !important;}"); */

GM_addStyle(".site-left-aligned.guide-collapsed .watch7-playlist, .site-left-aligned.guide-collapsed #player-legacy, .site-left-aligned.guide-collapsed #player, .site-left-aligned.guide-collapsed #watch7-main-container {min-width:780px; padding-left:0px !important; margin-left:auto; margin-right:auto; max-width:970px;}");

/* PLAYLIST and PLAYLIST EDITOR
Some of it is outdated by now, as the playlist editor went from black bg to white. */

/* DIV#content {:;} */ /* 06.03.2014.: Is that within it? */
/* Original: min-width:970px */
GM_addStyle(".branded-page #content {width:100% !important; min-width:320px !important;}"); /* original width:970/1003px */
GM_addStyle("#masthead-subnav {width:auto !important; min-width:240px; max-width:970px !important;}");

GM_addStyle("#playlist-editor-heading-container {width:auto !important; min-width:240px; max-width:970px;}");

GM_addStyle(".ytg-wide {width:auto !important; max-width:970px;}");

GM_addStyle("#branded-page-header {min-width:726px;}");
/* This width seems to be temporary, at least within the context of 
editing the playlist. */

GM_addStyle("DIV#playlist {margin-right:0px !important; min-width:856px;}");
/* This sets the minium width of the playlist area and also controls the 
playlist tray width. At some point the min-width could have been 830px, 
then later 838px to allow for more text not to have space between lines 
because of longer strings per word.
 
At some point a better solution has to be found to allow for item titles 
to jump below video thumbnails with ease, just as with the suggested 
videos sidebar. */

/* COMMENTS */
GM_addStyle("LI[class~=child] {width:540px;}");
GM_addStyle("DIV#comments-view .content {width:auto !important; min-width:460px;}");

/* FOOTER footer-container */
GM_addStyle("DIV#footer-container {clear:both; width:auto !important; min-width:320px !important; max-width:1003px !important;}");
/* N., 05.09.2019.: +clear */

/* FOOTER */
GM_addStyle("DIV#footer, DIV#footer-container {width:auto !important; max-width:1003px !important;}");
/* N., 23.03.2017: Fixed width param syntax. Let's see. | testing */

/* 29.07.2017: disable static in player area (resource-intensive) */
GM_addStyle("DIV.ytp-error CANVAS.ytp-tv-static {display:none;}");

/* 30.07.2017: If you're looking for code that forces the Flash-based 
   player, then I've moved it here:
   https://github.com/juneyourtech/GM_YT/blob/master/uTube_force_Flash.user.js
   
   The installation link for the userscript is here:
   https://github.com/juneyourtech/GM_YT/raw/master/uTube_force_Flash.user.js
*/
