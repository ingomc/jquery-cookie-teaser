/*
 * 2016 Andre Bellmann
 *
 * Teaser is invisible by default (CSS). If Cookie isnt accepted, we turn the teaser visible
 */
(function($) {
    $.fn.cookieTeaser = function(options) {
        var defaults = {
            acceptFunction: function(cookieValue) {
                if (cookieValue != 'enabled' && cookieValue != 'accepted') window.location = window.location.href;
            },
            expireDays: 365, //Number of days for cookieTeaser cookie to be stored for
            ctCookieID: "",
            ctContainerSizzle: ".cookie-teaser",
            ctCloseBtnSizzle: ".close",
            showCloseBtn: true,
            closeBtnHTML: '<button class="close close-ct" aria-hidden="true" data-dismiss="dismiss-teaser" type="button">×</button>',
            referrer: String(document.referrer) //Where visitor has come from
        };
        var options = $.extend(defaults, options);
        //Sets expiration date for cookie
        var expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + (options.expireDays * 86400000));
        expireDate = expireDate.toGMTString();
        this.each(function () {
            var $t = $(this);
            //Add closebutton
            if (options.showCloseBtn) {
                $t.prepend(options.closeBtnHTML);
            }
            var cookieID = $t.data("cookie-id");
            if (typeof cookieID === 'string' && cookieID.length > 3 ) {
                options.ctCookieID = cookieID;
            } else {
                console.info("× Cookieattribut am Div fehlt!");
                console.info($t.context);
            }
            if (options.ctCookieID === "") {
                console.warn("× Cookieattribut am Div fehlt! Es wird kein Cookie gesetzt. " + $t.name)
            } else {
                var cookieEntry = options.ctCookieID + '={value}; expires=' + expireDate + '; path=/';
                // console.log(cookieEntry);

                //Retrieves current cookie preference
                var i, cookieValue = '',
                    aCookie, aCookies = document.cookie.split('; ');
                for (i = 0; i < aCookies.length; i++) {
                    aCookie = aCookies[i].split('=');
                    if (aCookie[0] == options.ctCookieID) {
                        cookieValue = aCookie[1];
                    }
                }
                if (cookieValue == '') {
                    cookieValue = 'enabled';
                    document.cookie = cookieEntry.replace('{value}', 'enabled');
                }
                var removeBar = function(fn) {
                    if (typeof(fn) === 'function') fn(cookieValue);
                };
                var cookieAccept = function() {
                    document.cookie = cookieEntry.replace('{value}', 'accepted');
                    removeBar(options.acceptFunction);
                };
                if (cookieValue == 'accepted') {
                    removeBar(options.acceptFunction);
                } else {
                    $t.addClass('visible');
                    $t.find(options.ctCloseBtnSizzle).on('click', function() {
                        // console.debug('✓ click');
                        $(this).parents(options.ctContainerSizzle).slideUp('fast', function() {
                            // console.log("✓ log cookie close");
                            cookieAccept();
                        });
                    });
                }
            }
        });
    };
}(jQuery));
