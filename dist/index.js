/*!
 * xns-audio-player-simple v2.1.0
 * (c) James Sinkala
 * Released under the ISC License.
 */
"use strict";var t=require("vue-ionicons/dist/ios-repeat"),e=require("vue-ionicons/dist/ios-skip-backward"),n=require("vue-ionicons/dist/ios-play"),r=require("vue-ionicons/dist/ios-pause"),i=require("vue-ionicons/dist/ios-square"),s=require("vue-ionicons/dist/ios-skip-forward"),a=require("vue-ionicons/dist/ios-more"),o=require("vue-ionicons/dist/ios-add-circle-outline"),l=require("vue-ionicons/dist/ios-add-circle"),c=require("vue-ionicons/dist/ios-remove-circle-outline"),d=require("vue-ionicons/dist/ios-remove-circle"),u=require("vue-ionicons/dist/ios-musical-note");function h(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var p=h(t),f=h(e),m=h(n),g=h(r),w=h(i),y=h(s),v=h(a),k=h(o),b=h(l),x=h(c),C=h(d),T=h(u);!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}("/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\r\n   ========================================================================== */\n\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\n\n/* Sections\r\n   ========================================================================== */\n\n/**\r\n * Remove the margin in all browsers.\r\n */\n\n/**\r\n * Render the `main` element consistently in IE.\r\n */\n\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\n\n/* Grouping content\r\n   ========================================================================== */\n\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\n\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\n\n/* Text-level semantics\r\n   ========================================================================== */\n\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\n\na {\n  background-color: transparent;\n}\n\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\n\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\n\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\n\n/**\r\n * Add the correct font size in all browsers.\r\n */\n\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\n\n/* Embedded content\r\n   ========================================================================== */\n\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\r\n   ========================================================================== */\n\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\n\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\n\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\n\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\n\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\n\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\n\n/**\r\n * Correct the padding in Firefox.\r\n */\n\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\n\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\n\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\n\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\n\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\n\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\n\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\n\n/* Interactive\r\n   ========================================================================== */\n\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\n\ndetails {\n  display: block;\n}\n\n/*\r\n * Add the correct display in all browsers.\r\n */\n\n/* Misc\r\n   ========================================================================== */\n\n/**\r\n * Add the correct display in IE 10+.\r\n */\n\ntemplate {\n  display: none;\n}\n\n/**\r\n * Add the correct display in IE 10.\r\n */\n\n[hidden] {\n  display: none;\n}\n\n/**\r\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\r\n * A thin layer on top of normalize.css that provides a starting point more\r\n * suitable for web applications.\r\n */\n\n/**\r\n * Removes the default spacing and border for appropriate elements.\r\n */\n\n/**\r\n * Work around a Firefox/IE bug where the transparent `button` background\r\n * results in a loss of the default `button` focus styles.\r\n */\n\n/**\r\n * Tailwind custom reset styles\r\n */\n\n/**\r\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\r\n *    sans-serif font stack as a fallback) as a sane default.\r\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\r\n *    to override it to ensure consistency even when using the default theme.\r\n */\n\n/**\r\n * 1. Prevent padding and border from affecting element width.\r\n *\r\n *    We used to set this in the html element and inherit from\r\n *    the parent element for everything else. This caused issues\r\n *    in shadow-dom-enhanced elements like <details> where the content\r\n *    is wrapped by a div with box-sizing set to `content-box`.\r\n *\r\n *    https://github.com/mozdevs/cssremedy/issues/4\r\n *\r\n *\r\n * 2. Allow adding a border to an element by just adding a border-width.\r\n *\r\n *    By default, the way the browser specifies that an element should have no\r\n *    border is by setting it's border-style to `none` in the user-agent\r\n *    stylesheet.\r\n *\r\n *    In order to easily add borders to elements by just setting the `border-width`\r\n *    property, we change the default border-style for all elements to `solid`, and\r\n *    use border-width to hide them instead. This way our `border` utilities only\r\n *    need to set the `border-width` property instead of the entire `border`\r\n *    shorthand, making our border utilities much more straightforward to compose.\r\n *\r\n *    https://github.com/tailwindcss/tailwindcss/pull/116\r\n */\n\n*,\r\n::before,\r\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e2e8f0; /* 2 */\n}\n\n/*\r\n * Ensure horizontal rules are visible by default\r\n */\n\n/**\r\n * Undo the `border-style: none` reset that Normalize applies to images so that\r\n * our `border-{width}` utilities have the expected effect.\r\n *\r\n * The Normalize reset is unnecessary for us since we default the border-width\r\n * to 0 on all elements.\r\n *\r\n * https://github.com/tailwindcss/tailwindcss/issues/362\r\n */\n\nimg {\n  border-style: solid;\n}\n\n/**\r\n * Reset links to optimize for opt-in styling instead of\r\n * opt-out.\r\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\r\n * Reset form element properties that are easy to forget to\r\n * style explicitly so you don't inadvertently introduce\r\n * styles that deviate from your design system. These styles\r\n * supplement a partial reset that is already applied by\r\n * normalize.css.\r\n */\n\n/**\r\n * Use the configured 'mono' font family for elements that\r\n * are expected to be rendered with a monospace font, falling\r\n * back to the system monospace stack if there is no configured\r\n * 'mono' font family.\r\n */\n\n/**\r\n * Make replaced elements `display: block` by default as that's\r\n * the behavior you want almost all of the time. Inspired by\r\n * CSS Remedy, with `svg` added as well.\r\n *\r\n * https://github.com/mozdevs/cssremedy/issues/14\r\n */\n\nimg,\r\naudio {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\r\n * Constrain images and videos to the parent width and preserve\r\n * their instrinsic aspect ratio.\r\n *\r\n * https://github.com/mozdevs/cssremedy/issues/14\r\n */\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n.tw-bg-transparent {\n  background-color: transparent;\n}\n\n.tw-bg-center {\n  background-position: center;\n}\n\n.tw-bg-no-repeat {\n  background-repeat: no-repeat;\n}\n\n.tw-bg-cover {\n  background-size: cover;\n}\n\n.tw-cursor-pointer {\n  cursor: pointer;\n}\n\n.tw-flex {\n  display: flex;\n}\n\n.tw-inline-flex {\n  display: inline-flex;\n}\n\n.tw-flex-row {\n  flex-direction: row;\n}\n\n.tw-flex-col {\n  flex-direction: column;\n}\n\n.tw-flex-wrap {\n  flex-wrap: wrap;\n}\n\n.tw-items-center {\n  align-items: center;\n}\n\n.tw-justify-start {\n  justify-content: flex-start;\n}\n\n.tw-justify-end {\n  justify-content: flex-end;\n}\n\n.tw-justify-center {\n  justify-content: center;\n}\n\n.tw-justify-between {\n  justify-content: space-between;\n}\n\n.tw-flex-1 {\n  flex: 1 1 0%;\n}\n\n.tw-flex-grow-0 {\n  flex-grow: 0;\n}\n\n.tw-flex-grow {\n  flex-grow: 1;\n}\n\n.tw-float-right {\n  float: right;\n}\n\n.tw-float-left {\n  float: left;\n}\n\n.tw-m-0 {\n  margin: 0;\n}\n\n.tw-m-1 {\n  margin: 0.25rem;\n}\n\n.tw-mx-1 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.tw-mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\n.tw-mt-0 {\n  margin-top: 0;\n}\n\n.tw-mr-0 {\n  margin-right: 0;\n}\n\n.tw-mb-0 {\n  margin-bottom: 0;\n}\n\n.tw-ml-0 {\n  margin-left: 0;\n}\n\n.tw-max-h-simplePlyrmaxheightsm {\n  max-height: 80px;\n}\n\n.tw-py-0 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.tw-px-0 {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.tw-py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.tw-text-white {\n  color: #fff;\n}\n\n.tw-text-primary-green {\n  color: #21FB92;\n}\n\n.tw-align-middle {\n  vertical-align: middle;\n}\n\n.tw-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.tw-w-12 {\n  width: 3rem;\n}\n\n.tw-w-auto {\n  width: auto;\n}\n\n.tw-w-full {\n  width: 100%;\n}\n\n.tw-z-20 {\n  z-index: 20;\n}");var P={name:"XnsAudioPlayerSimple",components:{RepeatIcon:p.default,SkipBackwardIcon:f.default,PlayIcon:m.default,PauseIcon:g.default,SquareIcon:w.default,SkipForwardIcon:y.default,BufferingIcon:v.default,VolumeAddIcon:b.default,VolumeReduceIcon:C.default,VolumeReduceIconInactive:x.default,VolumeAddIconInactive:k.default,MusicalNoteIcon:T.default},props:{playlist:{type:Array,default:function(){return[]}},playerWidth:{type:Number,default:0},repeatAll:{type:Boolean,default:!1},playerVolume:{type:Number,default:.5},stopPlayback:{type:Boolean,default:!1},pausePlayback:{type:Boolean,default:!1},showAudioDuration:{type:Boolean,default:!0},showAudioData:{type:Boolean,default:!0},progressBarColor:{type:String,default:"#008080"},progressBarListen:{type:Boolean,default:!0},progressBarHeight:{type:Number,default:20},progressBarShadeColor:{type:String,default:"#e1e1e1"},progressBarColorIntensity:{type:Number,default:.5}},data:function(){return{localPlayerWidth:0,localProgressBarColor:"",songs:[],songsCount:0,playerIsPlaying:!1,playerIsPaused:!1,playerIsStopped:!1,isFirstTrack:!0,isMuted:!1,playerIsLoading:!1,continuousPlaybackStatus:!1,audio:new Audio,volume:.5,buffered:0,currentTrackId:0,currentTrackTime:0,currentTrackDuration:0,lastSongId:0,coverColors:["#009688","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#00bcd4","#4caf50","#ff9800","#607d8b","#795548","#008080"],coverColor:"",progress:0,progressBarTotalWidth:0}},watch:{immediate:!0,playerVolume:function(){this.updatePlayerVolume(this.playerVolume)},repeatAll:function(){this.updateContinuousPlaybackStatus(this.repeatAll)},playlist:function(){this.updateSongs(this.playlist)},stopPlayback:function(){this.stopPlayback&&this.stop()},pausePlayback:function(){this.pausePlayback&&this.pause()},playerWidth:function(){this.adjustPlayerDimensions(this.playerWidth)},progressBarColor:function(){this.validateProgressColor(this.progressBarColor)},currentTrackTime:function(){this.calibrateProgress(this.currentTrackTime)},currentTrackDuration:function(){this.calibrateProgress(this.currentTrackTime,this.currentTrackDuration)},progressBarListen:function(){this.listenToEvents(this.progressBarListen)},progressBarColorIntensity:function(){this.hexOpacity(this.progressBarColor,this.progressBarColorIntensity)}},filters:{doubleDigits:function(t){if(isNaN(t))return"00";if(t<60)return t.toFixed()<10?"0 : 0"+t.toFixed():"0 : "+t.toFixed();var e=t.toFixed()%60==60?"00":(t%60).toFixed();return Math.floor(t.toFixed()/60).toFixed()+" : "+(e<10?"0"+e:e)}},mounted:function(){var t=this;this.songs=this.playlist,setTimeout((function(){t.coverColor=t.pickRandomColor(),t.lastSongId=t.songs.length-1,t.updatePlayerVolume(t.playerVolume),t.updateContinuousPlaybackStatus(t.repeatAll),t.adjustPlayerDimensions(t.playerWidth),t.updateSongs(t.playlist),t.validateProgressColor(t.progressBarColor)}),300),this.audio.volume=this.volume,this.calibrateProgress(this.currentTrackTime,this.currentTrackDuration),this.hexOpacity(this.progressBarColor,this.progressBarColorIntensity),this.listenToEvents(this.progressBarListen),window.addEventListener("resize",this.windowResize,!1)},methods:{getClickPosition:function(t){var e=(t=t||window.event).target||t.srcElement;3==e.nodeType&&(e=e.parentNode),this.progressBarTotalWidth=this.progressBarTotalWidth||e.offsetWidth;var n=t.offsetX;this.progress=n/this.progressBarTotalWidth*100;var r=this.progress/100*this.currentTrackDuration;this.seekPlayer(r)},detectMouseDown:function(t){t.preventDefault(),this.$refs.trackprogress.addEventListener("mousemove",this.getClickPosition,!1)},detectMouseUp:function(){this.$refs.trackprogress.removeEventListener("mousemove",this.getClickPosition,!1)},windowResize:function(){var t=this;setTimeout((function(){t.progressBarTotalWidth=t.$refs.trackprogress.offsetWidth}),200)},listenToEvents:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?(this.$refs.trackprogress.addEventListener("click",this.getClickPosition,!1),this.$refs.trackprogress.addEventListener("mousedown",this.detectMouseDown,!1),this.$refs.trackprogress.addEventListener("mouseup",this.detectMouseUp,!1)):(this.$refs.trackprogress.removeEventListener("click",this.getClickPosition,!1),this.$refs.trackprogress.removeEventListener("mousedown",this.detectMouseDown,!1),this.$refs.trackprogress.removeEventListener("mouseup",this.detectMouseUp,!1))},calibrateProgress:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentTrackTime,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentTrackDuration,n=t/e*100;this.progress=n<=100?n:100},hexOpacity:function(t,e){var n=100*(e+this.volume)<=99?100*(e+this.volume):99;this.localProgressBarColor="".concat(t)+n},adjustPlayerDimensions:function(t){this.localPlayerWidth=t<320&&0!==t?320:t},validateProgressColor:function(t){this.localProgressBarColor=-1!==this.coverColors.indexOf(t)?t:"#008080",this.hexOpacity(this.localProgressBarColor,this.progressBarColorIntensity)},pickRandomColor:function(){return this.coverColors[Math.floor(Math.random()*this.coverColors.length)]},checkPlayerWidth:function(t){return this.localPlayerWidth>=t||0===this.localPlayerWidth},emitPlayerStatus:function(t){var e=this;setTimeout((function(){e.$emit("player-status",t)}),200)},decreaseVolume:function(){this.updatePlayerVolume(this.volume-.1>=0?this.volume-.1:0)},increaseVolume:function(){this.updatePlayerVolume(this.volume+.1<=1?this.volume+.1:1)},audioListening:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?(this.audio.addEventListener("loadeddata",this.proccessPlaybackStart,!1),this.audio.addEventListener("timeupdate",this.proccessPlaybackTimeUpdate,!1),this.audio.addEventListener("pause",this.proccessPlaybackPause,!1),this.audio.addEventListener("emptied",this.proccessPlaybackEmptied,!1),this.audio.addEventListener("ended",this.proccessPlaybackStop,!1)):(this.audio.removeEventListener("loadeddata",this.proccessPlaybackStart,!1),this.audio.removeEventListener("timeupdate",this.proccessPlaybackTimeUpdate,!1),this.audio.removeEventListener("pause",this.proccessPlaybackPause,!1),this.audio.removeEventListener("emptied",this.proccessPlaybackEmptied,!1),this.audio.removeEventListener("ended",this.proccessPlaybackStop,!1))},updateUi:function(t){this.updateLoadingStatus(t.loading),this.updatePlayingStatus(t.playing),this.updatePauseStatus(t.pause),this.updateStopStatus(t.stop)},proccessPlaybackStart:function(){this.updateUi({loading:!1,playing:!0,pause:!1,stop:!1}),this.updateCurrentTrackDuration(this.audio.duration),this.emitPlayerStatus("playing")},proccessPlaybackTimeUpdate:function(){isNaN(this.currentTrackDuration)||!isFinite(this.currentTrackDuration)?this.updateCurrentTrackDuration(260):this.updateCurrentTrackDuration(isNaN(this.audio.duration)||!isFinite(this.audio.duration)?260:this.audio.duration),this.playerIsLoading&&this.updateLoadingStatus(!1),this.updateCurrentTrackTime(this.audio.currentTime),this.updateUi({loading:!1,playing:!0,pause:!1,stop:!1})},proccessPlaybackPause:function(){this.updateUi({loading:!1,playing:!1,pause:!0,stop:!1}),this.emitPlayerStatus("paused")},proccessPlaybackEmptied:function(){this.audio.removeEventListener("loadeddata",this.proccessPlaybackStart,!1),this.audio.removeEventListener("timeupdate",this.proccessPlaybackTimeUpdate,!1),this.audio.removeEventListener("pause",this.proccessPlaybackEmptied,!1),this.updateCurrentTrackTime(0),this.updateCurrentTrackDuration(100),this.updateUi({loading:!1,playing:!1,pause:!1,stop:!0}),this.emitPlayerStatus("stopped")},proccessPlaybackStop:function(){this.emitPlayerStatus("stopped"),this.audio.removeEventListener("loadeddata",this.proccessPlaybackStart,!1),this.audio.removeEventListener("timeupdate",this.proccessPlaybackTimeUpdate,!1),this.audio.removeEventListener("pause",this.proccessPlaybackPause,!1),this.updateCurrentTrackTime(0),this.updateCurrentTrackDuration(100),this.updateUi({loading:!1,playing:!1,pause:!1,stop:!0}),this.continuousPlaybackStatus&&(this.currentTrackId+1<=this.lastSongId?(this.updatePlayingStatus(!0),this.updateCurrentTrackId(this.currentTrackId+1),this.playTrack()):(this.updatePlayingStatus(!0),this.updateCurrentTrackId(0),this.playTrack()))},updateSongs:function(t){this.songs=t,this.songsCount=t.length,this.lastSongId=t.length-1},updateContinuousPlaybackStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.continuousPlaybackStatus;this.continuousPlaybackStatus=t},updateCurrentTrackId:function(t){this.currentTrackId=t},updateCurrentTrackTime:function(t){this.currentTrackTime=t,this.$emit("playback-timer",{playingItemDuration:this.currentTrackDuration,playingItemTime:this.currentTrackTime})},updateCurrentTrackDuration:function(t){this.currentTrackDuration=t},updatePlayerVolume:function(t){this.volume=t,this.audio.volume=this.volume},updateLoadingStatus:function(t){this.playerIsLoading=t},updatePlayingStatus:function(t){this.playerIsPlaying=t},updatePauseStatus:function(t){this.playerIsPaused=t},updateStopStatus:function(t){this.playerIsStopped=t},playTrack:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentTrackId,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.songsCount<=0)return!1;var r=this;this.playerIsPaused&!n?(this.audio.currentTime=this.currentTrackTime,setTimeout((function(){t.audio.play(),r.audioListening()}),10)):(this.audio.load(),this.coverColor=this.pickRandomColor(),this.playerIsLoading=!0,this.currentTrackId=e,this.audio.src=this.songs[e].audio,this.audio.play(),setTimeout((function(){r.audioListening()}),10)),this.audio.volume=this.volume},pause:function(){var t=this;this.audioListening(!1),setTimeout((function(){t.audio.pause(),t.updateUi({loading:!1,playing:!1,pause:!0,stop:!1})}),10)},stop:function(){var t=this,e=this;e.audio.load(),setTimeout((function(){t.currentTrackTime=0,t.audio.currentTime=0,e.updateUi({loading:!1,playing:!1,pause:!1,stop:!0}),e.audioListening(!1)}),10)},next:function(){var t=this,e=this;this.currentTrackId+1<=this.lastSongId?(this.currentTrackId+=1,this.audioListening(!1),setTimeout((function(){e.playTrack(t.currentTrackId,!0)}),10)):this.continuousPlaybackStatus&&(this.currentTrackId=0,this.audioListening(!1),setTimeout((function(){e.playTrack(t.currentTrackId,!0)}),10))},previous:function(){var t=this,e=this;this.currentTrackId-1>=0?(this.currentTrackId-=1,this.audioListening(!1),setTimeout((function(){e.playTrack(t.currentTrackId,!0)}),10)):this.continuousPlaybackStatus&&(this.currentTrackId=this.lastSongId,this.audioListening(!1),setTimeout((function(){e.playTrack(t.currentTrackId,!0)}),10))},seekPlayer:function(t){var e=this;this.audioListening(!1),this.currentTrackTime=t,this.audio.currentTime=t,setTimeout((function(){e.audioListening()}),10)}}};function I(t,e,n,r,i,s,a,o,l,c){"boolean"!=typeof a&&(l=o,o=a,a=!1);const d="function"==typeof n?n.options:n;let u;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),r&&(d._scopeId=r),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=u):e&&(u=a?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,o(t))}),u)if(d.functional){const t=d.render;d.render=function(e,n){return u.call(n),t(e,n)}}else{const t=d.beforeCreate;d.beforeCreate=t?[].concat(t,u):[u]}return n}const S="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function E(t){return(t,e)=>function(t,e){const n=S?e.media||"default":t,r=B[n]||(B[n]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);let n=e.source;if(e.map&&(n+="\n/*# sourceURL="+e.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===L&&(L=document.head||document.getElementsByTagName("head")[0]),L.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(n),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{const t=r.ids.size-1,e=document.createTextNode(n),i=r.element.childNodes;i[t]&&r.element.removeChild(i[t]),i.length?r.element.insertBefore(e,i[t]):r.element.appendChild(e)}}}(t,e)}let L;const B={};var _=I({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"tw-flex tw-flex-row tw-flex-wrap tw-z-20 tw-min-h-10 tw-max-h-simplePlyrmaxheightsm tw-py-0 tw-px-0 tw-mt-0 tw-mr-0 tw-mb-0 tw-ml-0 tw-bg-no-repeat tw-bg-center tw-bg-cover pp",style:"width: "+(0===t.localPlayerWidth?"100%":t.localPlayerWidth+"px")},[n("div",{staticClass:"tw-flex tw-flex-row tw-w-full tw-items-center tw-justify-between"},[n("div",{ref:"trackprogress",staticClass:"xns-seeker-progress-wrapper",style:"height: "+t.progressBarHeight+"px; background: "+t.progressBarShadeColor},[n("div",{staticClass:"xns-seeker-progress-bar",style:"width: "+t.progress+"%; background: "+t.localProgressBarColor})])]),t._v(" "),n("div",{staticClass:"tw-flex tw-flex-row tw-w-full tw-p-r-3 tw-p-l-1 tw-m-0 tw-w-full pp-controls",attrs:{title:t.songsCount>0?t.songs[t.currentTrackId].artist+" - "+t.songs[t.currentTrackId].title:"No Audio To Play"}},[n("div",{staticClass:"tw-inline-flex tw-flex-grow-0 tw-w-12 tw-m-1 tw-float-left",style:t.songsCount>0&&""!==t.songs[t.currentTrackId].cover?"":"background-color: "+t.coverColor},[t.songsCount>0&&""!==t.songs[t.currentTrackId].cover?n("img",{staticClass:"tw-h-auto tw-w-full",attrs:{src:t.songs[t.currentTrackId].cover}}):n("MusicalNoteIcon",{staticClass:"tw-cursor-pointer tw-text-white",attrs:{"root-class":"pp-icons tw-h-full tw-w-auto",w:"40",h:"40"}})],1),t._v(" "),n("div",{staticClass:"tw-inline-flex tw-flex-grow tw-flex-col tw-items-center tw-w-full"},[n("div",{staticClass:"tw-inline-flex tw-flex-row tw-w-full tw-items-center tw-align-middle tw-justify-between tw-p-l-3 tw-p-r-1 tw-py-1"},[n("div",{staticClass:"tw-inline-flex tw-flex-row tw-justify-start"},[(t.currentTrackId>0||t.continuousPlaybackStatus)&&t.songsCount>0?n("div",{staticClass:"tw-flex-1 tw-m-1 tw-justify-center tw-align-middle",on:{click:function(e){return t.previous()}}},[n("SkipBackwardIcon",{staticClass:"tw-cursor-pointer tw-text-white",attrs:{"root-class":"pp-icons",w:"30",h:"30"}})],1):t._e(),t._v(" "),n("div",{staticClass:"tw-flex-1 tw-m-1 tw-justify-center tw-align-middle"},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.playerIsPlaying&&!t.playerIsLoading,expression:"!playerIsPlaying && !playerIsLoading"}],on:{click:function(e){return t.playTrack()}}},[n("PlayIcon",{staticClass:"tw-cursor-pointer tw-text-white",attrs:{"root-class":"pp-icons",w:"30",h:"30"}})],1),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.playerIsPlaying&&!t.playerIsLoading,expression:"playerIsPlaying && !playerIsLoading"}],attrs:{disabled:t.songsCount<=0},on:{click:function(e){return t.pause()}}},[n("PauseIcon",{staticClass:"tw-cursor-pointer tw-text-white",attrs:{"root-class":"pp-icons",w:"30",h:"30"}})],1),t._v(" "),n("span",[n("BufferingIcon",{directives:[{name:"show",rawName:"v-show",value:t.playerIsLoading,expression:"playerIsLoading"}],staticClass:"tw-text-white tw-cursor-pointer",attrs:{"root-class":"pp-icons",animate:"beat",w:"30",h:"30"}})],1)]),t._v(" "),n("div",{staticClass:"tw-flex-1 tw-m-1 tw-justify-center tw-align-middle",attrs:{disabled:t.songsCount<=0},on:{click:function(e){return t.stop()}}},[n("SquareIcon",{staticClass:"tw-cursor-pointer tw-text-white",attrs:{"root-class":"pp-icons",w:"30",h:"30"}})],1),t._v(" "),(t.currentTrackId<t.lastSongId||t.continuousPlaybackStatus)&&t.songsCount>0?n("div",{staticClass:"tw-flex-1 tw-m-1 tw-justify-center tw-align-middle",attrs:{disabled:t.songsCount<=0},on:{click:function(e){return t.next()}}},[n("SkipForwardIcon",{staticClass:"tw-cursor-pointer tw-text-white",attrs:{"root-class":"pp-icons",w:"30",h:"30"}})],1):t._e()]),t._v(" "),t.checkPlayerWidth(600)&&t.songs[t.currentTrackId]&&t.showAudioData?n("div",{staticClass:"tw-inline-flex tw-flex-row tw-justify-start tw-text-white tw-truncate"},[t._v("\n            "+t._s(t.songs[t.currentTrackId].artist||"Unknown")+" - "+t._s(t.songs[t.currentTrackId].title||"Unknown")+"\n          ")]):t._e(),t._v(" "),n("div",{staticClass:"tw-inline-flex tw-flex-row tw-justify-end"},[t.checkPlayerWidth(400)&&t.showAudioDuration?n("div",{staticClass:"tw-inline-flex tw-flex-row tw-justify-end tw-text-white timer"},[t._v("\n              "+t._s(t.checkPlayerWidth(600)?t.$options.filters.doubleDigits(t.currentTrackTime):"")+" "+t._s(t.checkPlayerWidth(600)?"-":"")+" "+t._s(t._f("doubleDigits")(t.currentTrackDuration))+"\n            ")]):t._e(),t._v(" "),n("div",{staticClass:"tw-flex-1 tw-mx-1"},[n("div",{class:t.checkPlayerWidth(400)?"tw-bg-transparent tw-float-right tw-text-white tw-p-t-2":"tw-bg-transparent tw-float-right tw-text-white",attrs:{disabled:t.volume<=.1||t.songsCount<=0},on:{click:function(e){return t.decreaseVolume()}}},[t.volume>0?n("VolumeReduceIcon",{staticClass:"tw-cursor-pointer tw-text-white",attrs:{"root-class":"pp-icons",w:t.checkPlayerWidth(500)?"35":"25",h:t.checkPlayerWidth(500)?"35":"25"}}):n("VolumeReduceIconInactive",{staticClass:"tw-cursor-pointer tw-text-white",attrs:{"root-class":"pp-icons",w:t.checkPlayerWidth(500)?"35":"25",h:t.checkPlayerWidth(500)?"35":"25"}})],1)]),t._v(" "),n("div",{class:t.checkPlayerWidth(400)?"tw-flex-1 tw-mx-2 tw-p-t-2":"tw-flex-1 tw-mx-2"},[n("div",{staticClass:"tw-bg-transparent tw-float-right tw-text-white",attrs:{disabled:t.volume>=1||t.songsCount<=0},on:{click:function(e){return t.increaseVolume()}}},[t.volume<1?n("VolumeAddIcon",{staticClass:"tw-cursor-pointer tw-text-white",attrs:{"root-class":"pp-icons",w:t.checkPlayerWidth(500)?"35":"25",h:t.checkPlayerWidth(500)?"35":"25"}}):n("VolumeAddIconInactive",{staticClass:"tw-cursor-pointer tw-text-white",attrs:{"root-class":"pp-icons",w:t.checkPlayerWidth(500)?"35":"25",h:t.checkPlayerWidth(500)?"35":"25"}})],1)]),t._v(" "),n("div",{class:t.checkPlayerWidth(400)?"tw-flex-1 tw-mx-1 tw-p-t-2":"tw-flex-1 tw-mx-1"},[n("span",{class:t.continuousPlaybackStatus?"tw-bg-transparent tw-float-right tw-text-white tw-text-primary-green":"tw-bg-transparent tw-float-right tw-text-white",on:{click:function(e){return t.updateContinuousPlaybackStatus()}}},[n("RepeatIcon",{staticClass:"tw-cursor-pointer tw-text-white",attrs:{"root-class":t.continuousPlaybackStatus?"pp-icons-green":"pp-icons",w:t.checkPlayerWidth(500)?"35":"25",h:t.checkPlayerWidth(500)?"35":"25"}})],1)])])])])])])])},staticRenderFns:[]},(function(t){t&&t("data-v-0ae4a8d0_0",{source:".pp[data-v-0ae4a8d0]{background:#232526;background:-webkit-linear-gradient(to right,rgba(35,37,38,.8),rgba(65,67,69,.8));background:linear-gradient(to right,rgba(35,37,38,.8),rgba(65,67,69,.8))}.pp-controls[data-v-0ae4a8d0]{background:#303942;background:-webkit-linear-gradient(to right,rgba(43,51,59,.95),rgba(41,50,60,.95));background:linear-gradient(to right,rgba(43,51,59,.95),rgba(41,50,60,.95))}.pp-icons[data-v-0ae4a8d0]{fill:#fff!important}.pp-icons[data-v-0ae4a8d0]:focus{fill:grey!important}.pp-icons-green[data-v-0ae4a8d0]{fill:#32cd32}[data-v-0ae4a8d0]::selection{background:0 0}.timer[data-v-0ae4a8d0]{margin:auto;padding:10px}.tw-p-t-2[data-v-0ae4a8d0]{padding-top:7px}.xns-seeker-progress-wrapper[data-v-0ae4a8d0]{display:flex;flex:1;width:inherit;position:relative;overflow:hidden}.xns-seeker-progress-bar[data-v-0ae4a8d0]{position:absolute;left:0;right:0;bottom:0;top:0;height:inherit}",map:void 0,media:void 0})}),P,"data-v-0ae4a8d0",!1,void 0,!1,E,void 0,void 0),R={install:function(t){t.component("xns-audio-player-simple",_)}};module.exports=R;
