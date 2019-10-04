/*!
 * xns-audio-player-simple v0.1.13
 * (c) James Sinkala
 * Released under the ISC License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var RefreshIcon = _interopDefault(require('vue-ionicons/dist/ios-refresh'));
var SkipBackwardIcon = _interopDefault(require('vue-ionicons/dist/ios-skip-backward'));
var PlayIcon = _interopDefault(require('vue-ionicons/dist/ios-play'));
var PauseIcon = _interopDefault(require('vue-ionicons/dist/ios-pause'));
var SquareIcon = _interopDefault(require('vue-ionicons/dist/ios-square'));
var SkipForwardIcon = _interopDefault(require('vue-ionicons/dist/ios-skip-forward'));
var BufferingIcon = _interopDefault(require('vue-ionicons/dist/ios-refresh-circle'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@-webkit-keyframes ionShake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n\n@keyframes ionShake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n\n@-webkit-keyframes ionRotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes ionRotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ionBeat {\n  0% {\n    transform: scale(0.75);\n  }\n\n  20% {\n    transform: scale(1);\n  }\n\n  40% {\n    transform: scale(0.75);\n  }\n\n  60% {\n    transform: scale(1);\n  }\n\n  80% {\n    transform: scale(0.75);\n  }\n\n  100% {\n    transform: scale(0.75);\n  }\n}\n\n@keyframes ionBeat {\n  0% {\n    transform: scale(0.75);\n  }\n\n  20% {\n    transform: scale(1);\n  }\n\n  40% {\n    transform: scale(0.75);\n  }\n\n  60% {\n    transform: scale(1);\n  }\n\n  80% {\n    transform: scale(0.75);\n  }\n\n  100% {\n    transform: scale(0.75);\n  }\n}\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\n\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\n/**\n * Add the correct font size in all browsers.\n */\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\n/*\n * Add the correct display in all browsers.\n */\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * 1. Prevent padding and border from affecting element width\n * https://goo.gl/pYtbK7\n * 2. Change the default font family in all browsers (opinionated)\n */\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nbutton {\n  background: transparent;\n  padding: 0;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the system font stack as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n * to override it to ensure consistency even when using the default theme.\n */\n\n/**\n * Allow adding a border to an element by just adding a border-width.\n *\n * By default, the way the browser specifies that an element should have no\n * border is by setting it's border-style to `none` in the user-agent\n * stylesheet.\n *\n * In order to easily add borders to elements by just setting the `border-width`\n * property, we change the default border-style for all elements to `solid`, and\n * use border-width to hide them instead. This way our `border` utilities only\n * need to set the `border-width` property instead of the entire `border`\n * shorthand, making our border utilities much more straightforward to compose.\n *\n * https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n*::before,\n*::after {\n  border-width: 0;\n  border-style: solid;\n  border-color: #e2e8f0;\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ninput::-webkit-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::-moz-placeholder {\n  color: #a0aec0;\n}\n\ninput:-ms-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::-ms-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::placeholder {\n  color: #a0aec0;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\ncanvas,\naudio {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n.tw-bg-transparent {\n  background-color: transparent;\n}\n\n.tw-bg-center {\n  background-position: center;\n}\n\n.tw-bg-no-repeat {\n  background-repeat: no-repeat;\n}\n\n.tw-bg-cover {\n  background-size: cover;\n}\n\n.tw-cursor-pointer {\n  cursor: pointer;\n}\n\n.tw-flex {\n  display: flex;\n}\n\n.tw-inline-flex {\n  display: inline-flex;\n}\n\n.tw-flex-row {\n  flex-direction: row;\n}\n\n.tw-flex-col {\n  flex-direction: column;\n}\n\n.tw-flex-wrap {\n  flex-wrap: wrap;\n}\n\n.tw-items-center {\n  align-items: center;\n}\n\n.tw-justify-center {\n  justify-content: center;\n}\n\n.tw-justify-between {\n  justify-content: space-between;\n}\n\n.tw-justify-around {\n  justify-content: space-around;\n}\n\n.tw-flex-1 {\n  flex: 1 1 0%;\n}\n\n.tw-flex-grow-0 {\n  flex-grow: 0;\n}\n\n.tw-flex-grow {\n  flex-grow: 1;\n}\n\n.tw-float-right {\n  float: right;\n}\n\n.tw-float-left {\n  float: left;\n}\n\n.tw-m-0 {\n  margin: 0;\n}\n\n.tw-m-1 {\n  margin: 0.25rem;\n}\n\n.tw-mt-0 {\n  margin-top: 0;\n}\n\n.tw-mr-0 {\n  margin-right: 0;\n}\n\n.tw-mb-0 {\n  margin-bottom: 0;\n}\n\n.tw-ml-0 {\n  margin-left: 0;\n}\n\n.tw-max-h-simplePlyrmaxheightsm {\n  max-height: 60px;\n}\n\n.tw-py-0 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.tw-px-0 {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.tw-py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.tw-px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.tw-text-white {\n  color: #fff;\n}\n\n.tw-text-primary-green {\n  color: #21FB92;\n}\n\n.tw-align-middle {\n  vertical-align: middle;\n}\n\n.tw-w-1 {\n  width: 0.25rem;\n}\n\n.tw-w-12 {\n  width: 3rem;\n}\n\n.tw-w-auto {\n  width: auto;\n}\n\n.tw-w-full {\n  width: 100%;\n}\n\n.tw-z-20 {\n  z-index: 20;\n}";
styleInject(css);

//
var script = {
  name: 'XnsAudioPlayerSimple',
  components: {
    RefreshIcon: RefreshIcon,
    SkipBackwardIcon: SkipBackwardIcon,
    PlayIcon: PlayIcon,
    PauseIcon: PauseIcon,
    SquareIcon: SquareIcon,
    SkipForwardIcon: SkipForwardIcon,
    BufferingIcon: BufferingIcon
  },
  props: {
    songs: {
      type: Array,
      "default": function _default() {
        return [{
          audio: 'https://www.zapsplat.com/wp-content/uploads/2015/music-one/music_zapsplat_chiller.mp3',
          artist: 'Chiller',
          tittle: 'funky disco house',
          album: '',
          cover: 'https://i.pinimg.com/originals/a3/81/72/a3817233df6f98ecd03f399bbdc114f4.jpg'
        }];
      }
    },
    playrWidth: {
      type: Number,
      "default": 300
    },
    repeatAll: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      playerVolume: 1,
      playerProgressPercent: 0,
      presentSongId: 0,
      lastSongId: 0,
      isPlaying: false,
      audio: new Audio(),
      isPaused: false,
      volume: 0.5,
      //
      timeLapse: false,
      timeBufferSecs: 0,
      timeBufferMins: 0,
      playerIsBuffering: false,
      currentTrackTime: 0,
      lastRecordedTrackTime: -1,
      countCheck: 0,
      currentTrackDuration: 0,
      //
      color: '#8dff97',
      progressPercent: 0,
      continuousPlay: false
    };
  },
  filters: {
    doubleDigits: function doubleDigits(val) {
      if (isNaN(val)) {
        return '00';
      } else {
        return val < 10 ? '0' + val : val;
      }
    }
  },
  watch: {
    volume: function volume() {
      this.audio.volume = this.volume;
    },
    timeLapse: function timeLapse() {
      var _this = this;

      var xns = this;

      if (this.timeLapse) {
        this.timeLapse = false;
        this.viewShit();
      }

      if (this.currentTrackDuration === 'NaN : NaN' || this.progressPercent === 'NaN' || this.progressPercent === 0) {
        // fix to displaying track time 'NaN : NaN' & timeBufferMins being stuck at 0
        this.countCheck = 0;
        this.viewShit();
        setTimeout(function () {
          if (_this.progressPercent === 'NaN' || _this.progressPercent === 0) {
            xns.audio.currentTime = xns.audio.currentTime;
            xns.viewShit();
          }
        }, 2000);
      }
    },
    audio: function audio() {
      this.currentTrackTime = parseInt(this.audio.currentTime);
      this.lastRecordedTrackTime = -1; // console.log('changed Track')
    }
  },
  mounted: function mounted() {
    var xns = this;
    this.continuousPlay = this.repeatAll;
    setTimeout(function () {
      xns.lastSongId = xns.songs.length - 1;
    }, 1500);
    this.audio.volume = this.volume;
  },
  methods: {
    viewShit: function viewShit() {
      var xns = this;
      setTimeout(function () {
        xns.currentTrackTime = parseInt(xns.audio.currentTime); // console.log('Current Track Time: ' + xns.currentTrackTime + ' lstRecTime: ' + xns.lastRecordedTrackTime)

        xns.progressPercent = xns.currentTrackTime / xns.audio.duration * 100;

        if (xns.countCheck === 0) {
          // initializer start check
          // console.log('Current Track Time: ' + xns.currentTrackTime + ' lstRecTime: ' + xns.lastRecordedTrackTime)
          var ctdSecs = parseInt(xns.audio.duration) % 60 < 10 ? '0' + parseInt(xns.audio.duration) % 60 : parseInt(xns.audio.duration) % 60;
          xns.currentTrackDuration = parseInt(parseInt(xns.audio.duration) / 60) + ' : ' + ctdSecs;
        }

        if (xns.currentTrackTime !== xns.lastRecordedTrackTime) {
          // console.log(parseInt(xns.audio.currentTime))
          if (parseInt(xns.audio.currentTime) >= 60) {
            xns.timeBufferMins = Math.floor(xns.audio.currentTime / 60);
            xns.timeBufferSecs = parseInt(Math.floor(xns.audio.currentTime)) % 60;
          } else {
            xns.timeBufferSecs = parseInt(Math.floor(xns.audio.currentTime));
          }

          xns.duration -= 1;
          xns.timeLapse = !xns.timeLapse;
          xns.timeLapse = true; // continue time lapse

          xns.countCheck += 1; //

          xns.lastRecordedTrackTime = parseInt(Math.floor(xns.audio.currentTime));
        } else {
          if (!xns.audio.paused) {
            xns.isPlaying = true;
            xns.isPaused = false;
          } else {
            xns.timeBufferMins = 0;
            xns.timeBufferSecs = 0;
            xns.timeLapse = false; // stop time lapse

            this.countCheck = 0; // initializer end

            xns.isPlaying = false;
            xns.isPaused = false;

            if (xns.continuousPlay) {
              // if continuous play === true
              xns.nextSong();
            }
          }
        }
      }, 1000);
    },
    play: function play() {
      var songId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.presentSongId;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var xns = this;
      this.progressPercent = 0; // reset playback progress

      if (this.isPlaying && !this.isPaused) {
        if (type !== '') {
          // next/previous
          this.audio.src = this.songs[songId].audio;
          this.audio.play(); // initial track timer

          this.timeBufferMins = 0;
          this.currentTrackDuration = 0; // change player controls icons

          this.isPlaying = true;
          this.isPaused = false; // begin buffering of track

          this.playerIsBuffering = true;
          this.audio.addEventListener('loadeddata', function () {
            xns.playerIsBuffering = false; // enough media to begin playback
          });
          this.audio.addEventListener('playing', function () {
            // Audio has started playing
            xns.countCheck = 0;
            xns.lastRecordedTrackTime = -1;
            xns.timeBufferMins = 0;
          });
        } else {
          // pause
          this.audio.pause();
          this.isPlaying = false;
          this.isPaused = true;
        }
      } else if (!this.isPlaying && this.isPaused) {
        if (type !== '') {
          // next/previous
          this.audio.src = this.songs[songId].audio;
          this.audio.play(); // initial track timer

          this.timeBufferMins = 0;
          this.currentTrackDuration = 0; // change player controls icons

          this.isPlaying = true;
          this.isPaused = false; // begin buffering of track

          this.playerIsBuffering = true;
          this.audio.addEventListener('loadeddata', function () {
            xns.playerIsBuffering = false; // enough media to begin playback
          });
          this.audio.addEventListener('playing', function () {
            // player has moved to +type+ song
            xns.countCheck = 0;
            xns.lastRecordedTrackTime = -1;
            xns.timeBufferMins = 0;
          });
        } else {
          // resume playing
          this.audio.play(); // initial track timer

          this.timeBufferMins = 0;
          this.currentTrackDuration = 0; // change player controls icons

          this.isPlaying = true;
          this.isPaused = false; // begin buffering of track

          this.playerIsBuffering = true;
          this.audio.addEventListener('loadeddata', function () {
            xns.playerIsBuffering = false; // enough media to begin playback
          });
          this.audio.addEventListener('playing', function () {
            // Audio has resumed playing
            xns.countCheck = 0;
            xns.lastRecordedTrackTime = -1;
            xns.timeBufferMins = 0;
          });
        }
      } else if (!this.isPlaying && !this.isPaused) {
        this.audio.src = this.songs[songId].audio;
        this.audio.play(); // initial track timer

        this.timeBufferMins = 0;
        this.currentTrackDuration = 0; // change player controls icons

        this.isPlaying = true;
        this.isPaused = false; // begin buffering of track

        this.playerIsBuffering = true;
        this.audio.addEventListener('loadeddata', function () {
          xns.playerIsBuffering = false; // enough media to begin playback
        });
        this.audio.addEventListener('playing', function () {
          // Audio has started playing for the first time
          xns.countCheck = 0;
          xns.lastRecordedTrackTime = -1;
          xns.timeBufferMins = 0;
        });
      } //


      this.countCheck = 0;
      this.lastRecordedTrackTime = -1;
      this.timeBufferMins = 0;
      this.viewShit();
    },
    nextSong: function nextSong() {
      if (this.presentSongId + 1 <= this.lastSongId) {
        this.presentSongId += 1;
        this.play(this.presentSongId, 'next');
      } else {
        if (this.continuousPlay) {
          // if continuous play === true
          this.play(0); // restart the playlist
        } else {
          this.stop(); // console.log('We\'ve arrived at the end of the playlist!')
        }
      }

      this.countCheck = 0;
      this.lastRecordedTrackTime = -1;
      this.timeBufferMins = 0;
      this.viewShit();
    },
    prevSong: function prevSong() {
      if (this.presentSongId - 1 >= 0) {
        this.presentSongId -= 1;
        this.play(this.presentSongId, 'prev');
      } else {
        this.stop(); // console.log('We\'ve arrived at the start of the playlist!')
      }

      this.countCheck = 0;
      this.lastRecordedTrackTime = -1;
      this.timeBufferMins = 0;
      this.viewShit();
    },
    stop: function stop() {
      if (this.audio) {
        this.audio.load();
        this.isPlaying = false;
        this.isPaused = false;
        this.continuousPlay = false; // halt continuous play
      }

      this.countCheck = 1;
      this.lastRecordedTrackTime = -1;
      this.timeBufferMins = 0;
    },
    scrubToTime: function scrubToTime() {
      this.audio.currentTime = this.progressPercent * this.audio.duration / 100;
      this.viewShit();
    },
    changeContinuousPlay: function changeContinuousPlay() {
      this.continuousPlay = !this.continuousPlay;
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('div', {
    staticClass: "tw-flex tw-flex-row tw-flex-wrap tw-z-20 tw-min-h-10 tw-max-h-simplePlyrmaxheightsm tw-py-0 tw-px-0 tw-mt-0 tw-mr-0 tw-mb-0 tw-ml-0 tw-bg-no-repeat tw-bg-center tw-bg-cover pp",
    style: 'max-width:' + _vm.playrWidth + 'px'
  }, [_c('div', {
    staticClass: "tw-flex tw-flex-row tw-w-full tw-p-r-3 tw-p-l-1 tw-m-0 tw-w-full pp-controls"
  }, [_c('div', {
    staticClass: "tw-inline-flex tw-flex-grow-0 tw-w-12 tw-m-1 tw-float-left"
  }, [_c('img', {
    staticClass: "tw-h-full tw-w-auto",
    attrs: {
      "src": _vm.songs[_vm.presentSongId].cover
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "tw-inline-flex tw-flex-grow tw-flex-col tw-items-center tw-w-full"
  }, [_c('div', {
    staticClass: "tw-inline-flex tw-flex-row tw-w-full tw-items-center tw-align-middle tw-justify-around tw-px-4 tw-py-1"
  }, [_vm.presentSongId > 0 && _vm.lastSongId > 0 ? _c('div', {
    staticClass: "tw-flex-1 tw-m-1 tw-justify-center tw-align-middle",
    on: {
      "click": function click($event) {
        return _vm.prevSong();
      }
    }
  }, [_c('SkipBackwardIcon', {
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": 'pp-icons',
      "w": "30",
      "h": "30"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tw-flex-1 tw-m-1 tw-justify-center tw-align-middle",
    on: {
      "click": function click($event) {
        return _vm.play();
      }
    }
  }, [_c('PlayIcon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isPlaying && !_vm.playerIsBuffering,
      expression: "!isPlaying && !playerIsBuffering"
    }],
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": 'pp-icons',
      "w": "30",
      "h": "30"
    }
  }), _vm._v(" "), _c('PauseIcon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isPlaying && !_vm.playerIsBuffering,
      expression: "isPlaying && !playerIsBuffering"
    }],
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": 'pp-icons',
      "w": "30",
      "h": "30"
    }
  }), _vm._v(" "), _c('BufferingIcon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.playerIsBuffering,
      expression: "playerIsBuffering"
    }],
    staticClass: "tw-text-white tw-cursor-pointer",
    attrs: {
      "root-class": 'pp-icons',
      "animate": "rotate",
      "w": "30",
      "h": "30"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tw-flex-1 tw-m-1 tw-justify-center tw-align-middle",
    on: {
      "click": function click($event) {
        return _vm.stop();
      }
    }
  }, [_c('SquareIcon', {
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": 'pp-icons',
      "w": "30",
      "h": "30"
    }
  })], 1), _vm._v(" "), _vm.presentSongId < _vm.lastSongId && _vm.lastSongId > 0 ? _c('div', {
    staticClass: "tw-flex-1 tw-m-1 tw-justify-center tw-align-middle",
    on: {
      "click": function click($event) {
        return _vm.nextSong();
      }
    }
  }, [_c('SkipForwardIcon', {
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": 'pp-icons',
      "w": "30",
      "h": "30"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tw-flex-1 tw-w-1/5"
  }, [_c('span', {
    "class": _vm.continuousPlay ? 'tw-bg-transparent tw-float-right tw-text-white tw-text-primary-green' : 'tw-bg-transparent tw-float-right tw-text-white',
    on: {
      "click": function click($event) {
        return _vm.changeContinuousPlay();
      }
    }
  }, [_c('RefreshIcon', {
    attrs: {
      "root-class": _vm.continuousPlay ? 'pp-icons-green' : 'pp-icons',
      "w": "25",
      "h": "25"
    }
  })], 1)])])])])])]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-d27fd684_0", {
    source: ".pp[data-v-d27fd684]{background:#232526;background:-webkit-linear-gradient(to right,rgba(35,37,38,.8),rgba(65,67,69,.8));background:linear-gradient(to right,rgba(35,37,38,.8),rgba(65,67,69,.8))}.pp-controls[data-v-d27fd684]{background:#303942;background:-webkit-linear-gradient(to right,rgba(43,51,59,.95),rgba(41,50,60,.95));background:linear-gradient(to right,rgba(43,51,59,.95),rgba(41,50,60,.95))}.pp-icons[data-v-d27fd684]{fill:#fff!important}.pp-icons-green[data-v-d27fd684]{fill:#32cd32}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-d27fd684";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

var XnsAudioPlayerSimple = normalizeComponent_1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

var index = {
  install: function install(Vue) {
    // register component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("xns-audio-player-simple", XnsAudioPlayerSimple);
  }
};

module.exports = index;
