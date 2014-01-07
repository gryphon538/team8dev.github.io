/*****************************************************************************/
/*                                                                                                                                  
/* General                                                                                                                          
/*                                                                                                                                  
/*****************************************************************************/
window.onresize = function() {
    if (document.getElementById('resizingIframe') != null) {
	var obj = document.getElementById('resizingIframe');
	obj.style.height = (obj.parentNode.offsetWidth / 16 * 9) + "px";
    }
}

/*****************************************************************************/
/* 
/* Off-Canvas Fix
/*
/*****************************************************************************/

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.offcanvas = {
    name : 'offcanvas',

    version : '5.0.0',

    settings : {},

    init : function (scope, method, options) {
      this.events();
    },

    events : function () {
      $(this.scope).off('.offcanvas')
        .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {
          e.preventDefault();
          $(this).closest('.off-canvas-wrap').toggleClass('move-right');
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas',  function (e) {
          e.preventDefault();
          $(".off-canvas-wrap").removeClass("move-right");
        })
        .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {
          e.preventDefault();
          $(this).closest(".off-canvas-wrap").toggleClass("move-left");
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          e.preventDefault();
          $(".off-canvas-wrap").removeClass("move-left");
        });
      $(window)
	.on('resize', function (e) {
	  if ($(this).width() > 640) {
	    e.preventDefault();
	    $(".off-canvas-wrap").removeClass("move-left");
	  }
	})
	.on('resize', function (e) {
	  if ($(this).width() > 640) {
	    e.preventDefault();
	    $(".off-canvas-wrap").removeClass("move-right");
          }
	})
    },

    reflow : function () {}
  };
}(jQuery, this, this.document));

$(document).ready(function () {
    var url = window.location.origin;
    // if we're on a dev box
    if (url != "http://palyrobotics.com") {
	var regex = new RegExp("/[a-zA-Z0-9]+$");
	// go through every link element
	$("a").each(function changeURLs (ind, val) {
	    var $val = $(val);
	    var $href = $val.attr("href");
	    // if it's a link to a page, add a '.html'
	    if (regex.test($href)) $val.attr("href", $href+".html");
	});
    }
});