"use strict";
/***************************************************
****************************************************
// Core Active JS
****************************************************
***************************************************/
$(function () {
	hljs.initHighlightingOnLoad();
	$(document).adminify({
		submenu_animation_speed: 100,
		submenu_opacity_animation: true,
		page_boxed: false,
		page_sidebar_fixed: true,
		page_sidebar_collapsed: false
	});

});


/***************************************************
****************************************************
// Color Switcher JS
****************************************************
***************************************************/
// Show and hide color-switcher
var handleColorSwitcher = function() {
	$(".color-switcher .switcher-button").on('click', function () {
		$(".color-switcher").toggleClass("show-color-switcher", "hide-color-switcher", 800);
	});

	// Color Skins
	$('a.color').on('click', function () {
		var title = $(this).attr('title');
		$('#style-colors').attr('href', 'assets/css/skin/skin-' + title + '.css');
		return false;
	});
};


/***************************************************
****************************************************
// Dropdown Animation
****************************************************
***************************************************/
// Add slidedown & fadein animation to dropdown
var handleDropdownAnimation = function() {
	$('.dropdown').on('show.bs.dropdown', function (e) {
		var $dropdown = $(this).find('.dropdown-menu');
		var orig_margin_top = parseInt($dropdown.css('margin-top'));
		$dropdown.css({
			'margin-top': (orig_margin_top + 25) + 'px',
			opacity: 0
		}).animate({
			'margin-top': orig_margin_top + 'px',
			opacity: 1
		}, 500, function () {
			$(this).css({
				'margin-top': ''
			});
		});
	});
	// Add slidedown & fadeout animation to dropdown
	$('.dropdown').on('hide.bs.dropdown', function (e) {
		var $dropdown = $(this).find('.dropdown-menu');
		var orig_margin_top = parseInt($dropdown.css('margin-top'));
		$dropdown.css({
			'margin-top': orig_margin_top + 'px',
			opacity: 1,
			display: 'block'
		}).animate({
			'margin-top': (orig_margin_top + 25) + 'px',
			opacity: 0
		}, 500, function () {
			$(this).css({
				'margin-top': '',
				display: ''
			});
		});
	});

}


/***************************************************
****************************************************
// Tables Responsive
****************************************************
***************************************************/
var handleTablesResponsive = function tableResponsive() {
	setTimeout(function () {
		$('.table').each(function () {
			window_width = $(window).width();
			table_width = $(this).width();
			content_width = $(this).parent().width();
			if (table_width > content_width) {
				$(this).parent().addClass('force-table-responsive');
			} else {
				$(this).parent().removeClass('force-table-responsive');
			}
		});
	}, 200);
}


/***************************************************
****************************************************
// Toster Notifications
****************************************************
***************************************************/
var handleTosterNotifications = function() {
	var i = -1;
	var toastCount = 0;
	var $toastlast;
	var getMessage = function () {
		var msg = 'Hi, welcome to Adminify. This is example of Toastr notification box.';
		return msg;
	};

	$('#showsimple').click(function () {
		// Display a success toast, with a title
		toastr.success('Without any options', 'Simple notification!')
	});
	$('#showtoast').click(function () {
		var shortCutFunction = $("#toastTypeGroup input:radio:checked").val();
		var msg = $('#message').val();
		var title = $('#title').val() || '';
		var $showDuration = $('#showDuration');
		var $hideDuration = $('#hideDuration');
		var $timeOut = $('#timeOut');
		var $extendedTimeOut = $('#extendedTimeOut');
		var $showEasing = $('#showEasing');
		var $hideEasing = $('#hideEasing');
		var $showMethod = $('#showMethod');
		var $hideMethod = $('#hideMethod');
		var toastIndex = toastCount++;
		toastr.options = {
			closeButton: $('#closeButton').prop('checked'),
			debug: $('#debugInfo').prop('checked'),
			progressBar: $('#progressBar').prop('checked'),
			preventDuplicates: $('#preventDuplicates').prop('checked'),
			positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
			onclick: null
		};
		if ($('#addBehaviorOnToastClick').prop('checked')) {
			toastr.options.onclick = function () {
				alert('You can perform some custom action after a toast goes away');
			};
		}
		if ($showDuration.val().length) {
			toastr.options.showDuration = $showDuration.val();
		}
		if ($hideDuration.val().length) {
			toastr.options.hideDuration = $hideDuration.val();
		}
		if ($timeOut.val().length) {
			toastr.options.timeOut = $timeOut.val();
		}
		if ($extendedTimeOut.val().length) {
			toastr.options.extendedTimeOut = $extendedTimeOut.val();
		}
		if ($showEasing.val().length) {
			toastr.options.showEasing = $showEasing.val();
		}
		if ($hideEasing.val().length) {
			toastr.options.hideEasing = $hideEasing.val();
		}
		if ($showMethod.val().length) {
			toastr.options.showMethod = $showMethod.val();
		}
		if ($hideMethod.val().length) {
			toastr.options.hideMethod = $hideMethod.val();
		}
		if (!msg) {
			msg = getMessage();
		}
		$("#toastrOptions").text("Command: toastr[" +
			shortCutFunction +
			"](\"" +
			msg +
			(title ? "\", \"" + title : '') +
			"\")\n\ntoastr.options = " +
			JSON.stringify(toastr.options, null, 2)
		);
		var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
		$toastlast = $toast;
		if ($toast.find('#okBtn').length) {
			$toast.delegate('#okBtn', 'click', function () {
				alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
				$toast.remove();
			});
		}
		if ($toast.find('#surpriseBtn').length) {
			$toast.delegate('#surpriseBtn', 'click', function () {
				alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
			});
		}
	});

	function getLastToast() {
		return $toastlast;
	}
	$('#clearlasttoast').click(function () {
		toastr.clear(getLastToast());
	});
	$('#cleartoasts').click(function () {
		toastr.clear();
	});
};


/***************************************************
****************************************************
// Mask Formatter
****************************************************
***************************************************/
var handleMaskFormatter = function() {
	provider.initFormatter = function () {
		if (!$.fn.formatter) {
			return;
		}

		provider.provide('formatter', function () {
			var options = {
				pattern: $(this).data('format'),
				persistent: $(this).dataAttr('persistent', true),
			}

			$(this).formatter(options);
		});

	}

};


/***************************************************
****************************************************
// Card - Remove / Reload / Collapse / Expand
****************************************************
***************************************************/
var cardActionRunning = false;
var handleCardAction = function() {
	"use strict";

	if (cardActionRunning) {
		return false;
	}
	cardActionRunning = true;
	    
	// collapse
	$(document).on('mouseover', '[data-toggle=collapse]', function(e) {
		if (!$(this).attr('data-init')) {
			$(this).tooltip({
				title: 'Collapse/Expand',
				placement: 'bottom',
				trigger: 'hover',
				container: 'body'
			});
			$(this).tooltip('show');
			$(this).attr('data-init', true);
		}
	});
	/*$(document).on('click', '[data-toggle=collapse]', function(e) {
		e.preventDefault();
		$(this).closest('.card').find('.card-body').slideToggle();
	});*/

	// reload
	$(document).on('mouseover', '[data-toggle=refresh]', function(e) {
		if (!$(this).attr('data-init')) {
			$(this).tooltip({
				title: 'Refresh',
				placement: 'bottom',
				trigger: 'hover',
				container: 'body'
			});
			$(this).tooltip('show');
		}
	});
	$(document).on('click', '[data-toggle=refresh]', function(e) {
		e.preventDefault();
		var target = $(this).closest('.card');
		if (!$(target).hasClass('card-loading')) {
			var targetBody = $(target).find('.card-body');
			var spinnerClass = ($(this).attr('data-spinner-class')) ? $(this).attr('data-spinner-class') : 'text-primary';
			var spinnerHtml = '<div class="card-loader"><div class="spinner-border '+ spinnerClass +'"></div></div>';
			$(target).addClass('card-loading');
			if ($(targetBody).length !== 0) {
				$(targetBody).append(spinnerHtml);
			} else {
				$(target).append(spinnerHtml);
			}
			setTimeout(function() {
				$(target).removeClass('card-loading');
				$(target).find('.card-loader').remove();
			}, 2000);
		}
	});

	// expand
	$(document).on('mouseover', '[data-toggle=expand]', function(e) {
		if (!$(this).attr('data-init')) {
			$(this).tooltip({
				title: 'Minimize/Maximize',
				placement: 'bottom',
				trigger: 'hover',
				container: 'body'
			});
			$(this).tooltip('show');
			$(this).attr('data-init', true);
		}
	});
	$(document).on('click', '[data-toggle=expand]', function(e) {
		e.preventDefault();
		var target = $(this).closest('.card');
		var targetBody = $(target).find('.card-body');
		var targetClass = 'card-expand';
		var targetTop = 40;
		if ($(targetBody).length !== 0) {
			var targetOffsetTop = $(target).offset().top;
			var targetBodyOffsetTop = $(targetBody).offset().top;
			targetTop = targetBodyOffsetTop - targetOffsetTop;
		}

		if ($('body').hasClass(targetClass) && $(target).hasClass(targetClass)) {
			$('body, .card').removeClass(targetClass);
			$('.card').removeAttr('style');
			$(targetBody).removeAttr('style');
		} else {
			$('body').addClass(targetClass);
			$(this).closest('.card').addClass(targetClass);
		}
		$(window).trigger('resize');
	});
		
	// remove
	$(document).on('mouseover', '[data-toggle=remove]', function(e) {
		if (!$(this).attr('data-init')) {
			$(this).tooltip({
				title: 'Remove',
				placement: 'bottom',
				trigger: 'hover',
				container: 'body'
			});
			$(this).tooltip('show');
			$(this).attr('data-init', true);
		}
	});
	$(document).on('click', '[data-toggle=remove]', function(e) {
		e.preventDefault();
		$(this).tooltip('dispose');
		$(this).closest('.card').remove();
	});

	
};


/***************************************************
****************************************************
// Tooltip & Popover
****************************************************
***************************************************/
var handelTooltipPopoverActivation = function() {
	"use strict";
	if ($('[data-toggle="tooltip"]').length !== 0) {
		$('[data-toggle=tooltip]').tooltip();
	}
	if ($('[data-toggle="popover"]').length !== 0) {
		$('[data-toggle=popover]').popover();
	}
};


/***************************************************
****************************************************
// Scrollbar
****************************************************
***************************************************/
var handleSlimScroll = function() {
	"use strict";
	$('[data-scrollbar=true]').each( function() {
		generateSlimScroll($(this));
	});
};
var generateSlimScroll = function(element) {
	if ($(element).attr('data-init')) {
		return;
	}
	var dataHeight = $(element).attr('data-height');
		dataHeight = (!dataHeight) ? $(element).height() : dataHeight;

	var scrollBarOption = {
		height: dataHeight, 
		alwaysVisible: false
	};
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$(element).css('height', dataHeight);
		$(element).css('overflow-x','scroll');
	} else {
		$(element).slimScroll(scrollBarOption);
		$(element).closest('.slimScrollDiv').find('.slimScrollBar').hide();
	}
	$(element).attr('data-init', true);
};


/***************************************************
****************************************************
// Scroll to Top Button
****************************************************
***************************************************/
var handleScrollToTopButton = function() {
	"use strict";
	$(document).scroll( function() {
		var totalScroll = $(document).scrollTop();

		if (totalScroll >= 200) {
			$('[data-click=scroll-top]').addClass('show');
		} else {
			$('[data-click=scroll-top]').removeClass('show');
		}
	});
	$('.content').scroll( function() {
		var totalScroll = $('.content').scrollTop();

		if (totalScroll >= 200) {
			$('[data-click=scroll-top]').addClass('show');
		} else {
			$('[data-click=scroll-top]').removeClass('show');
		}
	});
	$('[data-click=scroll-top]').on('click', function(e) {
		e.preventDefault();
		$('html, body, .content').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});
};

/***************************************************
****************************************************
// Custom ScrollBar JS
****************************************************
***************************************************/

jQuery(document).ready(function(){
    jQuery('.scrollbar-outer').scrollbar();
});


/***************************************************
****************************************************
// Application Controller
****************************************************
***************************************************/
var App = function () {
	"use strict";
	
	return {
		init: function () {
			this.initComponent();
		},
		initComponent: function() {
			handleColorSwitcher();
			handleDropdownAnimation();
			handleTablesResponsive();
			handleTosterNotifications();
			handleCardAction();
			handelTooltipPopoverActivation();
			handleSlimScroll();
			handleScrollToTopButton();
		},
		scrollTop: function() {
			$('html, body, .content').animate({
				scrollTop: $('body').offset().top
			}, 0);
		}
	};
}();

$(document).ready(function() {
	App.init();
});