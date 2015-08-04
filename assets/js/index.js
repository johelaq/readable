/**
 * Main JS file for Readable behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");
        $("div.masthead").autoHidingNavbar();

    });

}(jQuery));

