# GM_YT

This repository contains a userscript with userstyles for YouTube.
I primarily refer to the userscript file as a userstyle, because I don't use 
any scripting there.

The userstyles do the following:
* Adjust the video viewing design for smaller displays, such as those with a 1024x768 resolution.

  This was the primary rationale, as the target audience would be users with 
  computers and computer monitors that cannot display in any greater resolution. 
  Nowadays, these are typically notebook computers and netbooks that are still 
  perfectly capable of video playback on YouTube.
  
  The other reason was, that I wanted the browser window showing YouTube to be
  narrower, especially if I wanted it side-by-side with another window. This 
  works well with wider screens.
  
  I've also tried avoiding horizontal scrollbars.
  
  The design is meant to be fluid, but avoids @media hooks.
  (Though at some point, YouTube's own @media CSS kicks in when reducing window widths to much less than 1024px.)

* Design: The search bar at the top is not fixed anymore and scrolls with the rest of the page, and thus won't take away screen real estate.
* Specific font colour for links to viewed videos.
  
* Change the background colour from an all-white to a light gray;
* I think I changed the font to Arial and Helvetica, which offer better legibility because of font rendering issues in Firefox on Windows xp. Font changes are not widespread, so they're not applied everywhere.
* Font size was changed on some UI elements to avoid the 2015/2016+ design disease of bigger text everywhere (presumably to appease people with large-resolution tablets).
* Font size changes when hovering over a comment to better view font-based emoticons. The emoticons themselves require the latest version of the Symbola font. I hear that font is free software. But that hover feature may be a bit jarring.

Some pre-requisites:
* The styles are meant for use on Gecko-based browsers. These include Firefox, SeaMonkey, GNU IceCat, and Debian Iceweasel (of which most are typically running on Windows xp).
* The styles have been developed and tested in an environment, where NoScript and Adblock Plus browser extensions are active; If you're not using either of these add-ons, your experience may be different.
* But the styles themselves do not block advertisements, and are not meant to do so. If you like someone's work on YouTube, don't hesitate to unblock their ads.

Code characteristics:
* Instead of using !important in a CSS declaration, I investigate the code to supersede the existing selector with its element name: If a selector contains .selectorname, I supersede it with DIV.selectorname. DIV is just an example; any other element name can be put, depending on which is used.

Errata
* Dead code still exists, because I created the styles for personal use, and haven't removed much anything from years past (2013+).
* Some (interactive) notifications are not exactly visible. Sorry about that.

Rationale
* I created this repository, because I spread the userstyles to a couple other computers, and there needed to be a way to auto-update them when necessary.
* Greasemonkey was chosen perhaps for the following reasons:
  * Historic purposes: When I needed custom CSS to change CSS for a webpage in an early version of Firefox, then the only add-on that worked, was Greasemonkey. Stylish worked in newer browser versions, and I really appreciate Stylish on Firefox and Icecat for mobile.
  * Usability;
  * The possibility to include local styles.
  * The possibility to include comments in userstyles.
