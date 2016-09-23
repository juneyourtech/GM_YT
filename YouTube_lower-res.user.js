// ==UserScript==
// @name          YouTube
// @namespace     YT
// @description  YouTube site layout improvements for monitors with smaller resolutions.
// @include       *.youtube.com/*
// @grant         GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

// CSS last updated on P., 24.03.2013. /Mus
// File last updated on T., 02.04.2013. /Vi
// Last updated from code on E., 02.09.2013 /via Vi
// Updated from code on T., 03.09.2013 /via Mus
// Updated R., 13.09.2013 or somesuch /via Mus
// Major update to accommodate 01.2015 design.

//BODY, FONTS
//GM_addStyle("HTML BODY.exp-roboto, HTML .exp-roboto button, HTML .exp-roboto input, HTML .exp-roboto textarea, HTML .exp-roboto select {font-family:Arial,sans-serif; }") //

GM_addStyle("HTML BODY, HTML input, HTML button, HTML textarea, HTML select {font-family:Arial,sans-serif,Roboto;}") //

GM_addStyle("HTML > BODY, HTML input, HTML button, HTML textarea, HTML select {font-family:Arial,sans-serif,Roboto;}") //

//TOP
GM_addStyle("DIV#yt-masthead-container {min-width:640px !important;}") //min-width:1003
GM_addStyle("DIV#masthead-expanded-container {min-width:688px !important;}") //min-width:1003
GM_addStyle("DIV#masthead-expanded-container {min-width:688px !important;}") //min-width:1003
GM_addStyle("DIV#masthead-positioner {position:absolute;}")
GM_addStyle("DIV#yt-masthead-content {min-width:284px;}")
GM_addStyle("FORM#masthead-search {min-width:132px;}")
GM_addStyle("DIV#masthead-search-terms {min-width:66px !important;}")

//ALERTS
GM_addStyle("div#alerts {width:auto !important; min-width:480px !important; max-width:988px !important;}")

//Alerts New style (as of 10.2013)
GM_addStyle("BODY.site-center-aligned #alerts, BODY.site-center-aligned #content, BODY.site-center-aligned.appbar-old-pl #player {width:auto; min-width:770px; max-width: 1003px;}")
/* min-width:780px was the previous appliccable value. It applies well with 
playlists, but don't know if yet in plain form. */
//February 2014: original max-width was set to 1040 px.

//GUIDE horizontal strip (September 2013)
GM_addStyle("BODY.site-center-aligned .yt-base-gutter {min-width:640px;}") //max-width doesn't seem to be specified, so original min-width:1003px.
/* BODY.site-center-aligned.flex-width-enabled #content is of secondary 
consideration, but I've included it anyway.
• 05.03.2014: Where? ^ */

//off the top area: Guide (old)
GM_addStyle("DIV#guide {width:auto !important; max-width:160px !important;}")

GM_addStyle("DIV#guide-main .guide-module-toggle-icon {margin-top:-21px !important; margin-left:30px; padding:0px;}") //modification

GM_addStyle("DIV#guide-main .guide-module-toggle-arrow {left:-11px; top:32px !important;}")

//GUIDE ITSELF //before 09.2013 redesign
GM_addStyle("BODY.site-left-aligned #page.watch #guide-container {margin-right:0px; top:0px; left:0px; padding-left:0px; width:170px; padding-top:2px;}") //experimental, has effect

GM_addStyle("DIV.guide-module#watch-context-container {margin-bottom:0px;}") //tv thingy, let's see if it works

GM_addStyle("div#watch-context-container .guide-module-toggle-icon {margin-top:-56px; left:61px}")

//GM_addStyle("UL[class~="guide"] LI {margin-right:1px; border-right:1px solid navy;}")

GM_addStyle(".guide-section-separator {margin-right:0px;}")

//GM_addStyle("div#guide-subs-footer-container {margin-right:0px;}")
GM_addStyle("UL.guide-channels-list .guide-channel A {width:156px;}") //Guide link widths.

GM_addStyle("A.guide-item .guide-count {right:0px;}")

//GUIDE (NEW STYLE)

GM_addStyle("DIV#page.watch #guide {width:auto; max-width:1003px;}")

//GUIDE 10.2015
GM_addStyle("HTML.show-guide #appbar-guide-menu {margin-top:0px !important;}") //z-index: 1999999999 (kinda works in the original)

//The CONTENT area, which is so difficult to get to...
GM_addStyle("div.watch7-playlist, div#watch7-video-container, div#watch7-video, div.watch7-playlist, div#watch7-main, div#watch7-main-container {margin-left:auto !important; margin-right:auto !important; background}") //padding-left:0px !important;

GM_addStyle("div.site-left-aligned.guide-collapsed div#watch7-main-container {width:auto; min-width:928px;}") //This is ostensibly when the guide is collapsed...
GM_addStyle("div#player, div#watch7-main, BODY.site-center-aligned #content, BODY.site-center-aligned .watch #content.content-alignment {width:auto; min-width:766px; max-width:1003px;}")
/* applies well when expanded, so from 780px to 640px... was 780, then 769, then 766 px by 21.12.2014. */
//it was 150px for some reason; then min-width:926px;

GM_addStyle("BODY.site-center-aligned #player, BODY.site-center-aligned .watch #content.content-alignment, BODY.site-center-aligned #player.watch-small {width:auto; min-width:766px; max-width:1003px; margin-left:auto; margin-right:auto; background-color:inherit;}") //Note that min-width 838px is good for playlist; don't know about player yet, but could just as well be 780px //Feburary-March 2014: max-width was set to 1040px. //April 2014: min-width: 771px
GM_addStyle("DIV.watch #content.content-alignment, DIV.watch.watch-non-stage-mode #player.content-alignment {min-width:766px; max-width:1003px;}")
//November 2014: min-width 766px //Updated end Nove 2014. Original max-width is 1066px

GM_addStyle("div#player[CLASS='full-frame'] {min-width:100%; max-width:100%;}") //This applies to embeds

//FRONTPAGE
GM_addStyle("DIV.yt-card {background-color:inherit;}")
//DIV.yt-card works, but aversely affects many other divs

GM_addStyle("DIV.yt-card.yt-card-has-padding#action-panel-details {padding-top:0px; padding-left:11px;}") //Works.
/* The DOM Inspector interprets it like this: DIV#action-panel-details.yt-card.yt-card-has-padding {} */

GM_addStyle("DIV.individual-feed {background-color:white; margin-left:22px; margin-right:22px;}")
//DIV.yt-card works, but aversely affects many other divs

//PLUS NOTIFICATIONS (WRAPPER)
GM_addStyle("HTML > BODY #sb-wrapper {min-width:699px;}") //766px so far...
//699px is at the bell
//+width 100% !important;

//CARD (NOTIFICATIONS, ALERTS)
GM_addStyle("DIV.sb-card {right:0px; top:47px;}") //
//+position:relative; margin-left:620px;

GM_addStyle("DIV.sb-on {z-index:1999999999}") //does not seem to work
GM_addStyle("DIV.sb-card-arrow, DIV.sb-card-body-arrow {right:82px;}") //

GM_addStyle("DIV.l4a {margin-right:0px; width:100%;}") //

//SEARCH, etc
GM_addStyle("DIV.yt-lockup-content H3.yt-lockup-title a {background-color:inherit; background:linear-gradient(to bottom, rgb(255, 255, 255) 0%, transparent 100%);}") //
GM_addStyle("DIV.yt-lockup-content H3.yt-lockup-title a:visited {color:SlateBlue;}") //
GM_addStyle("DIV.yt-ui-ellipsis {background-color:inherit; color:black;}") //

//CHANNELS
GM_addStyle("UL.channels-browse-content-grid {margin-right:unset;}") //

//CHAT
GM_addStyle("DIV.live-chat-widget .comment-text {display:inline-block; width:100%;}") //

GM_addStyle("DIV.live-chat-widget div#comments-view .content {width:auto !important; min-width:unset !important;}")

//#PLAYLIST
GM_addStyle("DIV#page.watch .content-alignment {width:auto; min-width:783px;}") //width:auto is just a failsafe parameter; 
/* min-width:886px; is to make sure that the text is wide enough, but it's not enough for 800x600px resolutions, so min-width:783px is for this resolution. Unfortunately, it interferes with layouts that don't include the playlist, so... Use + and a preceding selector. */

//TOP BAR RIGHT
GM_addStyle("DIV.watch7-playlist-bar-right {background-color:rgb(27, 27, 27);}")

//TOP: Video count
GM_addStyle("DIV.playlist #watch7-playlist-bar-controls {width:auto; min-width:81px; max-width:120px;}") //min-width is provisional; in some rare cases, there might be plalylists with maybe a thousand or so items.

//TOP: SHUFFLE and other buttons' location
GM_addStyle("DIV.watch7-playlist-bar-secondary-controls {padding-right:15px;}")

GM_addStyle("OL#watch7-playlist-tray {overflow-y:scroll;}") //This makes sure that the scroller is always visible. This works, but is still a temporary solution.

GM_addStyle("OL#watch7-playlist-tray .video-list-item {border-top:none;}")

//TRAY: PLAYLIST ITEM
//2014.04
GM_addStyle("DIV#watch-appbar-playlist .playlist-videos-list > LI {padding-right:0px; padding-top:0px; padding-bottom:0px; font-size:0px; border-bottom:solid 1px black; padding-bottom:1px;}")
/* font-size:0px should ensure that the item won't have that superfluous bottom space...
*/

//TRAY: PLAYLIST ITEM LINK
GM_addStyle("OL#watch7-playlist-tray .video-list-item A {padding-top:0px; padding-bottom:0px; padding-left:30px;}") //works

//TRAY: PLAYLIST ITEM COUNT
GM_addStyle("LI.video-list-item .stat {line-height:inherit; height:inherit; white-space:normal; padding-bottom:1px;}") //this also applies to other video listings, especially the sidebar
GM_addStyle("OL#watch7-playlist-tray .video-list-item .count {top:0px; left:0px; margin-top:8px; margin-bottom:0px; width:22px; text-align:right;}")

//TRAY: PLAYLIST ITEM INDEX (ARROW) (outside the link, btw)
//2014.04
GM_addStyle("DIV#watch-appbar-playlist .playlist-videos-list .video-index {margin-left:0px; margin-right:0px;}") //original: 2px for both

//PLAYLIST VIDEO LINK 2014.04-05
GM_addStyle("DIV#watch-appbar-playlist .playlist-video {height:auto; min-height:45px;}")

//TRAY: PLAYLIST THUMBNAIL
GM_addStyle("DIV#watch-appbar-playlist .playlist-video .video-thumb {margin-top:3px;}") //original:4px

//OLD, before 2014-04 GM_addStyle("OL#watch7-playlist-tray .video-list-item .ux-thumb-wrap {margin-top:2px; margin-bottom:4px;}") //works
//span... margin-top can also be 3px

//TRAY: PLAYLIST ITEM TITLE
GM_addStyle("OL#watch7-playlist-tray .video-list-item .title {display:inline; width:auto;}")
//GM_addStyle("LI.video-list-item .title {display:inline;}") //works, but older variant
//Should allow for text to flow; title for span, if needed
/* Note that if only LI.video-list-item is specified, then it also affects the 
video suggestion list, that also includes the following :before statement */

//Added 28.11.2015.
GM_addStyle("DIV#player-playlist .playlist-video-description {top:0px; width:auto; min-width:120px;}") //top:0px is to align text with the top side of thethumbnail. Min-width sets the text to reflow below the thumbnail, if viewport width is small.

//PLAYLIST ITEM TITLE PREFIX MARGIN
//GM_addStyle("OL#watch7-playlist-tray .video-list-item .title:before {display:block; content:\'---\'; font-size:0px; height:1px; width:10px; margin-left:72px; border:none; background-color:blue;}") //works as block, but not as inline-block, if it's prefixed to inline text to allow it to have 1px padding. Because it's a block, it's somehow put out of normal flow and requires margin-left... I had set the original width to 25px.

//REMOVE FROM PLAYLIST BUTTON
GM_addStyle("BUTTON.yt-uix-button-playlist-remove-item {margin-right:0px; margin-top:0px; background:linear-gradient(to left, rgb(0, 0, 0) 0%, transparent 100%); border:none;}") //WORKS
/* ^ transparent to black
• border-color:maroon;
• possible background:linear-gradient(to left, rgb(128, 0, 0) 0%, transparent 100%) — maroon to transparent
• linear-gradient(to left, rgb(0, 0, 0) 0%, transparent 100%) — IN USE */
//GM_addStyle(" ")

//#VIDEO: TITLE BELOW
GM_addStyle("DIV#watch-header {padding-left:0px; padding-right:0px; padding-top:0px; min-height:130px; background-color:inherit;}")

//TITLE
GM_addStyle("DIV#watch7-headline, HTML.not-watch8 #watch-headline {padding-left:0px; padding-right:150px}")

GM_addStyle("DIV#watch7-headline h1 {font-family:\'Arial\',\'Roboto\',\'sans-serif\';}") //

//GM_addStyle("DIV#watch7-headline h1:hover {background:linear-gradient(to right, rgb(244, 164, 96) 0px, rgb(241, 241, 241) 100%);}")
//255,127,80 = Coral
//255 218 185 PeachPuff
//244 164  96 SandyBrown

//GM_addStyle("DIV#watch7-headline H1:hover > SPAN:after {content:\'Clicking on the title has caused NoScript to alert about a possible XSS attempt.\'; display:block; position:relative; font-size:x-small;}")
/* 19.03.2016: Turns out, that this was caused by NoScript. */

//GM_addStyle("DIV#watch7-headline h1 .long-title {letter-spacing:-0.04em;}") //Works for all .long-title selectors
GM_addStyle("DIV#watch7-headline h1 .long-title[TITLE*='ll'], DIV#watch7-headline h1 .long-title[TITLE*='õn'], DIV#watch7-headline h1 .long-title[TITLE*='ne'], DIV#watch7-headline h1 .long-title[TITLE*='le'], DIV#watch7-headline h1 .long-title[TITLE*='ol'], DIV#watch7-headline h1 .long-title[TITLE*='on'], DIV#watch7-headline h1 .long-title[TITLE*='öl'] {letter-spacing:-0.04em;}") //WORKS! - default -0.05em

//GM_addStyle(" {letter-spacing:-0.03em;}") //WORKS! - Keep for other things.

GM_addStyle("DIV#watch7-headline h1 .long-title[TITLE*='rl'], DIV#watch7-headline h1 .long-title[TITLE*='rm'], DIV#watch7-headline h1 .long-title[TITLE*='rn'], DIV#watch7-headline h1 .long-title[TITLE*='rv'], DIV#watch7-headline h1 .long-title[TITLE*='õe'] {letter-spacing:-0.02em;}")
/* 'rm' and 'rn' to make sure that the closeness of 'r' with either 'm' or 'n' won't cause people to misread it as a duble 'm' or 'n'. */

GM_addStyle("DIV#watch7-headline h1 .long-title[TITLE*='rl'] {letter-spacing:-0.01em;}")
/* 'rm' and 'rn' to make sure that the closeness of 'r' with either 'm' or 'n' won't cause people to misread it as a duble 'm' or 'n'. */

GM_addStyle("DIV#watch7-headline h1 .long-title:after {display:inline-block; content:\'LONG TITLE\'; font-size:x-small; border:solid 1px maroon;}") //This shows if there's a long title. I need this to see if letter-spacing = -0.05em as set by default .long-title rule.

//GM_addStyle("DIV#watch7-headline .yt-uix-expander-head {letter-spacing:-0.04em;}") //works, but is more generic and is not necessary either.

GM_addStyle("DIV#watch7-headline.yt-uix-expander-collapsed h1, DIV#watch7-headline.yt-uix-expander h1 {margin-right:107px;}") //works for first item,

//USER INFO (NAME)
GM_addStyle("DIV#watch7-user-header {padding-bottom:0px; background:linear-gradient(to right, rgb(241, 241, 241) 53px, white 0%, rgb(241, 241, 241) 100%);}")

GM_addStyle("DIV#watch-header .yt-user-info {padding-bottom:0px;}")

//BELOW TITLE: ACTION BUTTONS
GM_addStyle("div#watch8-secondary-actions {position:relative; left:0px; background:linear-gradient(to bottom, white 50%, transparent 100%);}")

//BELOW TITLE: VIEWS COUNT and RATINGS

//GM_addStyle("div#watch7-views-info {top:-96px; right:0px; height:29px;}") //Original -47px //was:-42px //march 2015: -95px
//right was 8px until changed to 0 on march 2015. Set height.

GM_addStyle("div#watch8-sentiment-actions {position:absolute; top:-88px; right:0px;}") //June 2015

//June 2015
GM_addStyle("div#watch7-views-info {position:relative; bottom:0px; right:; padding-right:5px;}")
/* June 2015 proposal, because has a parent container. Already absolutely 
positioned.:
div#watch7-views-info {top:0px;} — Note that top assumes absolute positioning
div#watch8-sentment-actions {}
• struck height
*/

//VIEW COUNT
GM_addStyle("div.watch-view-count {position:static; text-align:right;}")

//LIKES/DISLIKES BAR
GM_addStyle("div#watch7-views-info .video-extras-sparkbars {margin-top:0px;}") //orig: 4px; then 3px; June 2015: 0px
//DISLIKES
GM_addStyle("div.video-extras-sparkbar-dislikes {background-color:#e52b21;}") //was: rgb(204)

//LIKES/DISLIKES BUTTONS //vote
GM_addStyle("span.like-button-renderer {float:right; margin-top:-1px; background-color:rgb(241, 241, 241); padding-right:5px;}") //works
// #99ccff

//LIKES/DISLIKES BUTTON TEXT //vote
GM_addStyle("BUTTON.yt-uix-button-has-icon.no-icon-markup .yt-uix-button-content {color:black;}")

//June 2015: Temporarily took out. width of 88px
//GM_addStyle("span.like-button-renderer:before {content:\'---\'; display:block; font-size:0px; height:28px !important; width:88px; background-color:blue; clear:both;}")
//March 2015, [the original] WORKS; background-color:blue; float:right;

//GM_addStyle("span#watch-like-dislike-buttons {position:absolute; top:-65px; right:0px;}") //v.March 2015: WORKS; background-color:#99ccff;

//COMMENTS
GM_addStyle("DIV.all-comments, DIV.mj {background-color:inherit; color:black;}") //

GM_addStyle("DIV.all-comments a {background-color:inherit; color:navy;}")
GM_addStyle("DIV.all-comments a:hover {color:blue;}")

GM_addStyle("DIV.comments .comment-item .content {color:black;}")

GM_addStyle(".comment-header, div#watch-discussion .comment-text, div#watch-discussion .comment .author {background-color:white;}")
//div.comments .comment-text .comment-text-content {padding-left:2px}

GM_addStyle("DIV.comments .comment-text .comment-text-content {background-color:white; color:black;}")

//COMMENT TEXT: HOVER TO see bigger text
GM_addStyle("DIV.comment-renderer-text-content:hover {max-height:unset; font-family:'Open Sans Condensed Light','Symbola'; font-size:175%; line-height:1.3em;}")

//COMMENT RATE BUTTONS //VOTE
GM_addStyle("DIV.comments .mod-button {font-size:x-small; line-height:1.4em;}")

GM_addStyle("DIV.comments .mod-button-content {font-size:8px; line-height:1.2em;}")

//COMMENTS LIKE/DISLIKE BUTTONS //VOTE
GM_addStyle("DIV.comments .sprite_like {margin-top:0px; padding-top:0px;}")
GM_addStyle("DIV.comments .sprite_dislike {margin-bottom:0px; padding-bottom:0px;}")

GM_addStyle("DIV.comments .sprite_like, DIV.comments .sprite_dislike {cursor:pointer;}")

//(VIDEO LIST, SUBSCRIBE BUTTON)
GM_addStyle("SPAN.qualified-channel-title.ellipsized {display:inline;}")
//GM_addStyle("UL.video-list .video-list-item .yt-uix-button-subscription-container {left:inherit; right:8px; bottom:0px;}") //The above ruleset fixes the inline stuff.

// SIDEBAR AUTOPLAY (HEAD)
//GM_addStyle("div#watch7-sidebar-modules .autoplay-bar .watch-sidebar-head {margin-left:0px; margin-right:0px; width:auto; min-width:120px;}") //06.2014
//min-width:177px added on 02.2015 //worked until June 2015.

GM_addStyle("div#watch7-sidebar .watch-sidebar-head {margin-left:0px; margin-right:0px; width:auto; min-width:120px;}") //06.2015

GM_addStyle("div.autoplay-bar .checkbox-on-off {margin-left:52px;}") //02.2015

// SIDEBAR
GM_addStyle("div.watch7-playlist-sidebar, div#watch7-sidebar {margin-right:0px; min-width:120px;}") //06.2014
GM_addStyle("div#watch7-sidebar, DIV.watch-sidebar {padding-right:0px; margin-right:auto; margin-left:auto;}") //06.2014
GM_addStyle("DIV.watch-sidebar {min-width:198px;}") //06.2014

GM_addStyle("div#watch7-sidebar {margin-left:640px; margin-right:0px; width:auto; max-width:400px; min-width:120px; background-color:inherit;}") //06.2014 // border-top:solid 1px white; border-right:solid 1px white;

//gutter
GM_addStyle("BODY.site-center-aligned .watch-sidebar-gutter {padding-right:0px;}") //06.2014
GM_addStyle("BODY.site-center-aligned #watch-sidebar-contents, DIV#watch7-sidebar-contents {padding-left:0px; background-color:transparent;}") //06.2014, adjusted on 08.2014
//GM_addStyle("div#watch7-sidebar .watch-sidebar-section {margin-left:0px;}") //Introduced 08.2014, commented out 22.11.2014

//SIDEBAR ITEM
GM_addStyle("LI[class~=video-list-item] {margin-bottom:7px; display:inline-block; width:98%; border:solid 1px white; border-left:none;}") //original was 5px for both (was that margin-bottom?) //06.2014
//02.2015.: set margin-bottom to 7px from 10px.
//02.2015.: Strangely enough, the width cannot be set to 100%.
//01.09.2016.: Set width to 98% to avoid the scollbar. But something is not quite right there.

//02.2015.: This :before is for a specific SIDEBAR ITEM, mainly for testing.
//GM_addStyle("div#watch7-sidebar-modules .autoplay-bar .watch-sidebar-head + div.watch-sidebar-body LI[class~=video-list-item]:before {content:\'---\'; display:block; font-size:0px; height:68px !important; width:120px; background-color:#409fff; float:left;}") //works
//border:solid 1px red;

// This BEFORE is for all SIDEBAR ITEMS
GM_addStyle("LI[class~=video-list-item]:before {content:\'---\'; display:block; margin-right:5px; font-size:0px; height:94px !important; width:168px; background-color:Silver; float:left;}")
//original: width:120px; height:68px
//width:120px; height:120px; NEW 180x101px
//border:solid 1px red; background-color:Silver
//new size: 180px × 101px
//new size for 08.2016: 168x94

GM_addStyle("@media only screen and (max-width:832px) {LI[class~=video-list-item]:before {content:\'---\'; height:76px !important; width:136px;}  BODY.exp-wn-big-thumbs .related-list-item .yt-uix-simple-thumb-related IMG, BODY.exp-wn-big-thumbs-v3 .related-list-item .thumb-wrapper, BODY.exp-wn-big-thumbs-v3 .related-list-item .yt-pl-thumb .yt-thumb {width:136px; height:76px;}}")

//SIDEBAR LINK (A)
GM_addStyle("LI[class~=video-list-item] A {display:block; min-width:95px; padding-left:0px; padding-right:1px; padding-bottom:0px;}") 
//original was 5px for both  //06.2014
//02.2015: +width:99% (display:block seems to prevail)
//currently related to all links.
//min-width:120px is equal to thumb width.
//01.09.2016: Is paddin-right:1px ok?

GM_addStyle("LI[class~=video-list-item] > a {margin-top:-1px; padding-top:1px;}")
// border:solid 1px white; border-left:none;
// 01.09.2016: removed width:100%; (caused a scrollbar to happen)
//2015 start //This generally works, and is useful for testing.
//GM_addStyle("UL[class~=video-list] > LI[class~=video-list-item]:after {content:\'---\'; display:block; position:relative; font-size:0px; height:5px; width:99%; border:solid 1px red; background-color:#99ccff;}") 
/* LI[class~=video-list-item] > a:after - positions it within the A element.*/

//SIDEBAR VIDEO LINK VISITED COLOR
GM_addStyle("LI[class~=video-list-item] a:visited .title {color:SlateBlue !important; background-color:gray;}") //Underlining and background color don't seem to work. //06.2014 //was video-lis-item

//SIDEBAR VIDEO TITLES
//Set video suggestions' titles as blocks, min-width:120px
GM_addStyle("UL.video-list .video-list-item .title {display:block; min-width:95px; max-height:2.45em; hyphenate-character:\'\\002D\'; line-height:1.17em;}") //06.2014 //\'LONG TITLE \\2010\'
//originally set block min-width:120px (thumb width), but then lessened it to 60px
//original max-height 2.4em

GM_addStyle("UL.video-list .video-list-item .title, H3.yt-lockup-title a {font-size:100%; font-weight:600;") //BOLD links

/*
GM_addStyle("@media only screen and (max-width:1023px) {.frontBlock.frontBlock.frontType13 .frontLead,
*/

//SIDEBAR ITEM & LINKS, THUMBNAILS //2015 start
GM_addStyle("LI[class~=related-list-item] .content-wrapper {display:block; position:relative; width:100%; margin-left:0px; margin-right:0px; padding-right:0px;}") //02.2015 //strangely:min-width:100% (?)

//25.08.2016, from Summer redesign
GM_addStyle("BODY[class~=exp-wn-big-thumbs] .related-list-item .content-wrapper {margin-left:unset;}")

GM_addStyle("LI[class~=related-list-item] .content-wrapper {border-top:solid 1px transparent;}") //02.2015 //borders can be made white now.

GM_addStyle("LI[class~=related-list-item] .content-link {min-height:unset;}") //02.2015 //borders can be made white now.
//08.2016: padding-left:47px; is temporary. Unset min-height.

GM_addStyle("BODY[class~=exp-wn-big-thumbs-v3] .related-list-item .content-link {min-height:unset;}") //25.08.2016

GM_addStyle("BODY[class~=exp-wn-big-thumbs] .related-list-item .content-link {min-height:unset;}") //25.08.2016

GM_addStyle("LI.related-list-item .content-link {min-height:unset;}") //25.08.2016

GM_addStyle("LI[class~=related-list-item] .thumb-wrapper {top:0px; left:0px; margin-left:0px; margin-right:0px;}") //02.2015. margin-right is of little consequence

//normal mode (aligned) //Set margins here to put into the middle of the page
GM_addStyle(".site-left-aligned #page.watch, .site-left-aligned #page.watch #guide, .site-left-aligned #watch7-playlist-container .watch7-playlist, .site-left-aligned #watch7-playlist, .site-left-aligned #watch7-video-container #watch7-video, div.site-left-aligned #watch7-main-container #watch7-main {margin-left:auto !important; margin-right:auto !important; padding-left:0px;}") //06.2014 //Padding-left  should be 0. Seems to work :-) 

//GUIDE EXPANDED
GM_addStyle("BODY.site-left-aligned.guide-expanded #player, .site-left-aligned.guide-expanded #watch7-main-container {padding-left:170px; min-width:780px;}") //Works :-)
/* 
Older stuff: GM_addStyle("body.site-left-aligned.guide-expanded div.watch7-playlist, .site-left-aligned.guide-expanded #watch7-video-container, .site-left-aligned.guide-expanded #player, .site-left-aligned.guide-expanded #watch7-main-container {padding-left:inherit !important;}")
//padding-left:0 must be taken away when the guide is expanded. Since it's the only parameter, I could commment it out... */

/* ^ Old information:
width:823px; width:841px !important;width:823px !important;
margin-left:0px !important; margin-right:0px !important; */

//normal mode (guide collapsed) //original left padding was 58px
/* GM_addStyle("div#watch7-container .site-left-aligned.guide-collapsed div.watch7-playlist, div#watch7-container .site-left-aligned.guide-collapsed #watch7-video-container, div#watch7-container .site-left-aligned.guide-collapsed #player, div#watch7-container .site-left-aligned.guide-collapsed #watch7-main-container {padding-left:0px !important; margin-left:auto !important; margin-right:auto !important;}") */

GM_addStyle(".site-left-aligned.guide-collapsed .watch7-playlist, .site-left-aligned.guide-collapsed #player-legacy, .site-left-aligned.guide-collapsed #player, .site-left-aligned.guide-collapsed #watch7-main-container {min-width:780px; padding-left:0px !important; margin-left:auto; margin-right:auto; max-width:970px;}")

/* PLAYLIST and PLAYLIST EDITOR
Some of it is outdated by now as the playlist editor went from black bg to white. */

//DIV#content {} //06.03.2014.: Is that within it?
//Original: min-width:970px
GM_addStyle(".branded-page #content {width:100% !important; min-width:320px !important;}") //original width:970/1003px
GM_addStyle("#masthead-subnav {width:auto !important; min-width:240px; max-width:970px !important;}")

GM_addStyle("#playlist-editor-heading-container {width:auto !important; min-width:240px; max-width:970px;}")

GM_addStyle(".ytg-wide {width:auto !important; max-width:970px;}")

GM_addStyle("#branded-page-header {min-width:726px;}")
/* This width seems to be temporary, at least within the context of editing 
the playlist. */

GM_addStyle("div#playlist {margin-right:0px !important; min-width:856px;}")
/* This sets the minium width of the playlist area and also controls the 
 playlist tray width. At some point the min-width could have been 830px, then 
 later 838px to allow for more text not to have space between lines because of 
 longer strings per word.
 
 At some point a better solution has to be found to allow for item titles to 
 jump below video thumbnails with ease, just as with the suggested videos 
 sidebar. */

//COMMENTS
GM_addStyle("li[class~=child] {width:540px;}")
GM_addStyle("div#comments-view .content {width:auto !important; min-width:460px;}")

//FOOTER
GM_addStyle("div#footer-container {width:auto !important; min-width:320px !important; max-with:1003px !important;}")
GM_addStyle("div#footer, div#footer-container {width:auto !important; max-with:1003px !important;}")
