/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/main.js":
/*!********************************!*\
  !*** ../src/assets/js/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app */ "../src/assets/js/modules/app.js");


/***/ }),

/***/ "../src/assets/js/modules/app.js":
/*!***************************************!*\
  !*** ../src/assets/js/modules/app.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _utils_globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/globals.js */ "../src/assets/js/utils/globals.js");


function initScrollbar() {
  $("#slider__slides").mCustomScrollbar({
    axis: "x",
    mouseWheel: {
      enable: true,
      scrollAmount: parseInt(_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["$window"].width() / 3)
    },
    callbacks: {
      onCreate: function onCreate() {
        $('.slider__slide--devider').each(function () {
          var $this = $(this);
          $this.attr('data-offset-left', parseInt($this.offset().left));
        });
      },
      whileScrolling: function whileScrolling(options) {
        scrollProgress($("#slider__slides .mCSB_container"));
        sliderThumbs(this.mcs);
      }
    },
    advanced: {
      updateOnContentResize: true
    }
  });
  $(".timeline-wrapper").mCustomScrollbar({
    axis: "x",
    contentTouchScroll: false,
    mouseWheel: {
      enable: false
    },
    callbacks: {
      onCreate: function onCreate() {
        lazyLoadImgAlt();
      },
      whileScrolling: function whileScrolling(options) {
        lazyLoadImgAlt();
      }
    },
    advanced: {
      updateOnContentResize: true
    }
  });
}

function scrollProgress($element) {
  var width = parseInt($element.css('width'));
  var left = Math.abs(parseInt($element.css('left')));
  $('.widget-gallery .progress').css('width', (left / (width - _utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["$window"].width()) * 100).toFixed(1) + '%');
}

function lazyLoadImg() {}

function lazyLoadImgAlt() {}

function sliderThumbs(options) {
  if (!$('.section-main').hasClass('is-activated')) {
    return;
  }

  $('.slider__slide--devider').each(function () {
    var $this = $(this);

    if (_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["$window"].width() > $this.offset().left) {
      if (!$this.hasClass('animated')) {
        $(".timeline-wrapper").mCustomScrollbar("scrollTo", $($this.data('target')));
      }

      $this.addClass('animated');
    } else {
      if ($this.hasClass('animated')) {
        if (_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["$window"].width() < $this.offset().left) {
          if (Math.abs(options.left) < _utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["$window"].width()) {
            $(".timeline-wrapper").mCustomScrollbar("stop").mCustomScrollbar("scrollTo", 'first');
            return;
          } else {
            $(".timeline-wrapper").mCustomScrollbar("scrollTo", $($this.data('target-prev')));
          }
        }

        $this.removeClass('animated');
      }
    }
  });
}

function calcTimelineWidth() {
  var timelineWidth = 0;
  $('.timeline > span').each(function () {
    timelineWidth += parseInt($(this).outerWidth());
  });
  $('.timeline').width(timelineWidth);
}

$('.js-btn').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  $this.closest('.section-main').addClass('is-active-' + $this.data('lang'));
  $('.section-main').hasClass('is-active-en') ? $('.hidden-en').remove() : $('.hidden-fr').remove();
  $('#audio').attr('src', $this.attr('href')).get(0).play();
  $('#audio').on("canplay", function () {
    $("#slider__slides").mCustomScrollbar('scrollTo', 'last', {
      timeout: 0,
      scrollEasing: "linear",
      scrollInertia: this.duration * 1000
    });
  }).on('ended', function () {
    $('.js-btn-skip').trigger('click');
  });
});
$('.js-btn-skip').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  $this.closest('.section-main').addClass('is-skipped');
  $('#audio').get(0).pause();
  setTimeout(function () {
    $("#slider__slides").mCustomScrollbar("stop").mCustomScrollbar('scrollTo', 'first', {
      timeout: 0,
      scrollEasing: "linear",
      scrollInertia: 0
    });
  }, 400);
  setTimeout(function () {
    $this.closest('.section-main').addClass('is-activated');
  }, 500);
  setTimeout(function () {
    $('.js-intro').trigger('click');
  }, 1500);
});
$('.js-popup').on('click', function (e) {
  e.preventDefault();
  $($(this).data('target')).toggleClass('is-visible');
});
$('.icon .audio-btn').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  $this.closest('.icon').addClass('playing').append('<audio controls><source src="' + $this.data('audio') + '" type="audio/mpeg"></audio>').closest('.icon').find('> audio').get(0).play();
  $this.closest('.icon').find('> audio').on('pause ended', function () {
    $this.closest('.icon').removeClass('playing');
    setTimeout(function () {
      $this.closest('.icon').find('audio').remove();
    }, 400);
  });
});
$('.js-popup-text').magnificPopup({
  type: 'inline',
  midClick: true,
  removalDelay: 300,
  mainClass: 'mfp-fade'
});
$('.js-popup-gallery').magnificPopup({
  type: 'inline',
  midClick: true,
  removalDelay: 300,
  mainClass: 'mfp-fade',
  callbacks: {
    open: function open() {
      $('.slider-alt .slider__slides-alt').slick({
        dots: true
      });
    },
    close: function close() {
      $('.slider-alt .slider__slides-alt').slick('unslick');
    }
  }
});
$('.js-popup-video').magnificPopup({
  type: 'inline',
  midClick: true,
  removalDelay: 300,
  mainClass: 'mfp-fade',
  callbacks: {
    open: function open() {
      $(this.currItem.src).append('<video controls><source src="' + $(this.currItem.src).data('video') + '" type="video/mp4"></video>');
    },
    close: function close() {
      $(this.currItem.src).find('video').remove();
    }
  }
});
$('.section-main .slider__slides').on('mouseenter touchstart', function () {
  var $this = $(this);

  if ($('.section-main').hasClass('is-activated')) {
    $this.addClass('no-animation');
  }
});
_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["$window"].on('load', function () {
  initScrollbar();
  calcTimelineWidth();
  $('body').addClass('is-visible');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/utils/globals.js":
/*!*****************************************!*\
  !*** ../src/assets/js/utils/globals.js ***!
  \*****************************************/
/*! exports provided: $window, $document, $body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$window", function() { return $window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$document", function() { return $document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$body", function() { return $body; });
var $window = $(window);
var $document = $(document);
var $body = $('body');
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });