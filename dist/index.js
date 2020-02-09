/*!
 * xns-audio-player-simple v2.0.0
 * (c) James Sinkala
 * Released under the ISC License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var RepeatIcon = _interopDefault(require('vue-ionicons/dist/ios-repeat'));
var SkipBackwardIcon = _interopDefault(require('vue-ionicons/dist/ios-skip-backward'));
var PlayIcon = _interopDefault(require('vue-ionicons/dist/ios-play'));
var PauseIcon = _interopDefault(require('vue-ionicons/dist/ios-pause'));
var SquareIcon = _interopDefault(require('vue-ionicons/dist/ios-square'));
var SkipForwardIcon = _interopDefault(require('vue-ionicons/dist/ios-skip-forward'));
var BufferingIcon = _interopDefault(require('vue-ionicons/dist/ios-more'));
var VolumeAddIconInactive = _interopDefault(require('vue-ionicons/dist/ios-add-circle-outline'));
var VolumeAddIcon = _interopDefault(require('vue-ionicons/dist/ios-add-circle'));
var VolumeReduceIconInactive = _interopDefault(require('vue-ionicons/dist/ios-remove-circle-outline'));
var VolumeReduceIcon = _interopDefault(require('vue-ionicons/dist/ios-remove-circle'));
var MusicalNoteIcon = _interopDefault(require('vue-ionicons/dist/ios-musical-note'));

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

var css = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\n\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\n/**\n * Add the correct font size in all browsers.\n */\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n  padding: 0;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e2e8f0; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ninput::-webkit-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::-moz-placeholder {\n  color: #a0aec0;\n}\n\ninput:-ms-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::-ms-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::-webkit-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::-moz-placeholder {\n  color: #a0aec0;\n}\n\ninput:-ms-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::-ms-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::placeholder {\n  color: #a0aec0;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\ncanvas,\naudio {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n.tw-bg-transparent {\n  background-color: transparent;\n}\n\n.tw-bg-center {\n  background-position: center;\n}\n\n.tw-bg-no-repeat {\n  background-repeat: no-repeat;\n}\n\n.tw-bg-cover {\n  background-size: cover;\n}\n\n.tw-cursor-pointer {\n  cursor: pointer;\n}\n\n.tw-flex {\n  display: flex;\n}\n\n.tw-inline-flex {\n  display: inline-flex;\n}\n\n.tw-flex-row {\n  flex-direction: row;\n}\n\n.tw-flex-col {\n  flex-direction: column;\n}\n\n.tw-flex-wrap {\n  flex-wrap: wrap;\n}\n\n.tw-items-center {\n  align-items: center;\n}\n\n.tw-justify-start {\n  justify-content: flex-start;\n}\n\n.tw-justify-end {\n  justify-content: flex-end;\n}\n\n.tw-justify-center {\n  justify-content: center;\n}\n\n.tw-justify-between {\n  justify-content: space-between;\n}\n\n.tw-flex-1 {\n  flex: 1 1 0%;\n}\n\n.tw-flex-grow-0 {\n  flex-grow: 0;\n}\n\n.tw-flex-grow {\n  flex-grow: 1;\n}\n\n.tw-float-right {\n  float: right;\n}\n\n.tw-float-left {\n  float: left;\n}\n\n.tw-m-0 {\n  margin: 0;\n}\n\n.tw-m-1 {\n  margin: 0.25rem;\n}\n\n.tw-mx-1 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.tw-mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\n.tw-mt-0 {\n  margin-top: 0;\n}\n\n.tw-mr-0 {\n  margin-right: 0;\n}\n\n.tw-mb-0 {\n  margin-bottom: 0;\n}\n\n.tw-ml-0 {\n  margin-left: 0;\n}\n\n.tw-max-h-simplePlyrmaxheightsm {\n  max-height: 80px;\n}\n\n.tw-py-0 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.tw-px-0 {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.tw-py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.tw-text-white {\n  color: #fff;\n}\n\n.tw-text-primary-green {\n  color: #21FB92;\n}\n\n.tw-align-middle {\n  vertical-align: middle;\n}\n\n.tw-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.tw-w-12 {\n  width: 3rem;\n}\n\n.tw-w-auto {\n  width: auto;\n}\n\n.tw-w-full {\n  width: 100%;\n}\n\n.tw-z-20 {\n  z-index: 20;\n}";
styleInject(css);

/*!
 * xns-seek-bar v1.0.0
 * (c) James Sinkala
 * Released under the ISC License.
 */

//
//
//
//
//
//
//
var script = {
  name: "XnsSeekBar",
  props: {
    currentValue: {
      type: Number,
      "default": 0
    },
    totalValue: {
      type: Number,
      "default": 20
    },
    listen: {
      type: Boolean,
      "default": true
    },
    barHeight: {
      type: Number,
      "default": 60
    },
    barColor: {
      type: String,
      "default": '#008080'
    },
    barShadeColor: {
      type: String,
      "default": '#e1e1e1'
    },
    intensity: {
      type: Number,
      "default": 0.5
    }
  },
  data: function data() {
    return {
      progress: 0,
      // a value less than totalValue
      localValue: 0,
      // total value
      progressTotalWidth: 0,
      colorIntensity: ''
    };
  },
  computed: {
    localListen: function localListen() {
      return this.listen;
    }
  },
  watch: {
    immediate: true,
    currentValue: function currentValue() {
      var max = this.currentValue / this.totalValue * 100;
      this.progress = max <= 100 ? max : 100;
    },
    listen: function listen() {
      this.listenToEvents(this.listen);
    },
    intensity: function intensity() {
      this.colorIntensity = 50 + this.intensity * 50 >= 100 ? '' : 50 + this.intensity * 50;
    }
  },
  mounted: function mounted() {
    var max = this.currentValue / this.totalValue * 100;
    this.progress = max <= 100 ? max : 100;
    this.colorIntensity = 50; // progress opacity value

    this.listenToEvents(this.localListen); // recalibrate progress width on window width resize

    window.addEventListener('resize', this.windowResize, false);
  },
  methods: {
    getClickPosition: function getClickPosition(el) {
      el = el || window.event; // get target element

      var targ = el.target || el.srcElement;
      if (targ.nodeType == 3) targ = targ.parentNode; // defeat Safari bug

      this.progressTotalWidth = this.progressTotalWidth || targ.offsetWidth; // set initial progressbar width

      var seekWidth = el.offsetX; //change seek position

      this.progress = seekWidth / this.progressTotalWidth * 100; // convert seeked posiion(%) to value

      var trackTime = this.progress / 100 * this.totalValue; // emit seeked value

      this.$emit('seekedTo', trackTime);
    },
    detectMouseDown: function detectMouseDown(e) {
      e.preventDefault(); // prevent browser from moving objects, following links etc
      // start listening to mouse movements

      this.$refs.trackprogress.addEventListener("mousemove", this.getClickPosition, false);
    },
    detectMouseUp: function detectMouseUp() {
      // stop listening to mouse movements
      this.$refs.trackprogress.removeEventListener("mousemove", this.getClickPosition, false);
    },
    windowResize: function windowResize() {
      var pp = this;
      setTimeout(function () {
        pp.progressTotalWidth = pp.$refs.trackprogress.offsetWidth;
      }, 200);
    },
    listenToEvents: function listenToEvents() {
      var listen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (listen) {
        this.$refs.trackprogress.addEventListener("click", this.getClickPosition, false);
        this.$refs.trackprogress.addEventListener("mousedown", this.detectMouseDown, false);
        this.$refs.trackprogress.addEventListener("mouseup", this.detectMouseUp, false);
      } else {
        this.$refs.trackprogress.removeEventListener("click", this.getClickPosition, false);
        this.$refs.trackprogress.removeEventListener("mousedown", this.detectMouseDown, false);
        this.$refs.trackprogress.removeEventListener("mouseup", this.detectMouseUp, false);
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    ref: "trackprogress",
    staticClass: "progress-wrapper",
    style: 'position: inherit; display: flex; flex: 1; width: inherit; height: ' + _vm.barHeight + 'px; position: relative; background: ' + _vm.barShadeColor + '; overflow: hidden;'
  }, [_c('div', {
    staticClass: "progressbar",
    style: 'background: rgba(3,169,244, .8); width: ' + _vm.progress + '%;position: absolute; left: 0; right: 0; bottom: 0; top: 0; height: inherit; background: ' + _vm.barColor + '' + _vm.colorIntensity
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-15c9f83f_0", {
    source: "[data-v-15c9f83f]::selection{background:0 0}*[data-v-15c9f83f],[data-v-15c9f83f]:hover{cursor:default}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-15c9f83f";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

var index = {
  install: function install(Vue) {
    // register component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("xns-seek-bar", __vue_component__);
  }
};

var dist = index;

//
var script$1 = {
  name: 'XnsAudioPlayerSimple',
  components: {
    RepeatIcon: RepeatIcon,
    SkipBackwardIcon: SkipBackwardIcon,
    PlayIcon: PlayIcon,
    PauseIcon: PauseIcon,
    SquareIcon: SquareIcon,
    SkipForwardIcon: SkipForwardIcon,
    BufferingIcon: BufferingIcon,
    VolumeAddIcon: VolumeAddIcon,
    VolumeReduceIcon: VolumeReduceIcon,
    VolumeReduceIconInactive: VolumeReduceIconInactive,
    VolumeAddIconInactive: VolumeAddIconInactive,
    MusicalNoteIcon: MusicalNoteIcon,
    XnsSeekBar: dist
  },
  props: {
    playlist: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    playerWidth: {
      type: Number,
      "default": 320
    },
    repeatAll: {
      type: Boolean,
      "default": false
    },
    playerVolume: {
      type: Number,
      "default": 0.5
    },
    stopPlayback: {
      type: Boolean,
      "default": false
    },
    pausePlayback: {
      type: Boolean,
      "default": false
    },
    showAudioDuration: {
      type: Boolean,
      "default": true
    },
    showAudioData: {
      type: Boolean,
      "default": true
    },
    progressBarColor: {
      type: String,
      "default": '#008080'
    }
  },
  data: function data() {
    return {
      // player details
      localPlayerWidth: 320,
      localProgressBarColor: '',
      // audio tracks list
      songs: [],
      songsCount: 0,
      //bools - playback helpers
      playerIsPlaying: false,
      playerIsPaused: false,
      playerIsStopped: false,
      isFirstTrack: true,
      isMuted: false,
      playerIsLoading: false,
      continuousPlaybackStatus: false,
      // player element
      audio: new Audio(),
      // player properties
      volume: 0.5,
      buffered: 0,
      // custom helper properties
      currentTrackId: 0,
      currentTrackTime: 0,
      currentTrackDuration: 0,
      lastSongId: 0,
      // cover art colors
      coverColors: ['#009688', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#4caf50', '#ff9800', '#607d8b', '#795548', '#008080'],
      coverColor: ''
    };
  },
  watch: {
    immediate: true,
    playerVolume: function playerVolume() {
      this.updatePlayerVolume(this.playerVolume);
    },
    repeatAll: function repeatAll() {
      this.updateContinuousPlaybackStatus(this.repeatAll);
    },
    playlist: function playlist() {
      this.updateSongs(this.playlist);
    },
    // let user programatically stop playback
    stopPlayback: function stopPlayback() {
      if (this.stopPlayback) {
        this.stop();
      }
    },
    // let user programatically pause playback
    pausePlayback: function pausePlayback() {
      if (this.pausePlayback) {
        this.pause();
      }
    },
    // observe player width adjustment
    playerWidth: function playerWidth() {
      this.adjustPlayerDimensions(this.playerWidth);
    },
    // observe changes on the progress-bar color
    progressBarColor: function progressBarColor() {
      this.validateProgressColor(this.progressBarColor);
    }
  },
  filters: {
    doubleDigits: function doubleDigits(val) {
      if (isNaN(val)) {
        return '00';
      } else {
        if (val < 60) {
          return val.toFixed() < 10 ? '0 : 0' + val.toFixed() : '0 : ' + val.toFixed();
        } else {
          var seconds = val.toFixed() % 60 == 60 ? '00' : (val % 60).toFixed();
          var minutes = Math.floor(val.toFixed() / 60).toFixed();
          return minutes + ' : ' + (seconds < 10 ? '0' + seconds : seconds);
        }
      }
    }
  },
  mounted: function mounted() {
    var xns = this;
    this.songs = this.playlist;
    setTimeout(function () {
      xns.coverColor = xns.pickRandomColor(); // assign random color

      xns.lastSongId = xns.songs.length - 1;
      xns.updatePlayerVolume(xns.playerVolume);
      xns.updateContinuousPlaybackStatus(xns.repeatAll);
      xns.adjustPlayerDimensions(xns.playerWidth);
      xns.updateSongs(xns.playlist);
      xns.validateProgressColor(xns.progressBarColor);
    }, 300);
    this.audio.volume = this.volume;
  },
  methods: {
    adjustPlayerDimensions: function adjustPlayerDimensions(width) {
      this.localPlayerWidth = width < 320 ? 320 : width > 1366 ? 1366 : width;
    },
    validateProgressColor: function validateProgressColor(color) {
      this.localProgressBarColor = this.coverColors.indexOf(color) !== -1 ? color : '#008080';
    },
    pickRandomColor: function pickRandomColor() {
      return this.coverColors[Math.floor(Math.random() * this.coverColors.length)];
    },
    emitPlayerStatus: function emitPlayerStatus(status) {
      var xns = this;
      setTimeout(function () {
        xns.$emit('player-status', status);
      }, 200);
    },
    decreaseVolume: function decreaseVolume() {
      this.updatePlayerVolume(this.volume - 0.1 >= 0 ? this.volume - 0.1 : 0);
    },
    increaseVolume: function increaseVolume() {
      this.updatePlayerVolume(this.volume + 0.1 <= 1 ? this.volume + 0.1 : 1);
    },
    audioListening: function audioListening() {
      var listen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (listen) {
        // start listening
        this.audio.addEventListener('loadeddata', this.proccessPlaybackStart, false);
        this.audio.addEventListener('timeupdate', this.proccessPlaybackTimeUpdate, false);
        this.audio.addEventListener('pause', this.proccessPlaybackPause, false);
        this.audio.addEventListener('emptied', this.proccessPlaybackEmptied, false);
        this.audio.addEventListener('ended', this.proccessPlaybackStop, false);
      } else {
        // stop listening
        this.audio.removeEventListener('loadeddata', this.proccessPlaybackStart, false);
        this.audio.removeEventListener('timeupdate', this.proccessPlaybackTimeUpdate, false);
        this.audio.removeEventListener('pause', this.proccessPlaybackPause, false);
        this.audio.removeEventListener('emptied', this.proccessPlaybackEmptied, false);
        this.audio.removeEventListener('ended', this.proccessPlaybackStop, false);
      }
    },
    updateUi: function updateUi(status) {
      this.updateLoadingStatus(status.loading);
      this.updatePlayingStatus(status.playing);
      this.updatePauseStatus(status.pause);
      this.updateStopStatus(status.stop);
    },
    // when first frame of media has finished loading
    proccessPlaybackStart: function proccessPlaybackStart() {
      this.updateUi({
        loading: false,
        playing: true,
        pause: false,
        stop: false
      }); // update UI

      this.updateCurrentTrackDuration(this.audio.duration); // get track duration

      this.emitPlayerStatus('playing');
    },
    // when time indicated by the currentTime attribute has been updated
    proccessPlaybackTimeUpdate: function proccessPlaybackTimeUpdate() {
      // check if track duration is NaN or zero and rectify
      if (isNaN(this.currentTrackDuration) || !isFinite(this.currentTrackDuration)) {
        this.updateCurrentTrackDuration(260); // give reasonable track duration
        // console.log("'Fixed' CurrentTrackDuration")
      } else {
        this.updateCurrentTrackDuration(isNaN(this.audio.duration) || !isFinite(this.audio.duration) ? 260 : this.audio.duration); // get track duration
      } // debug loading


      if (this.playerIsLoading) {
        this.updateLoadingStatus(false);
      }

      this.updateCurrentTrackTime(this.audio.currentTime); // get current track time

      this.updateUi({
        loading: false,
        playing: true,
        pause: false,
        stop: false
      }); // update UI
    },
    // called when element is paused
    proccessPlaybackPause: function proccessPlaybackPause() {
      this.updateUi({
        loading: false,
        playing: false,
        pause: true,
        stop: false
      }); // update UI

      this.emitPlayerStatus('paused');
    },
    // called when loaded() is called
    proccessPlaybackEmptied: function proccessPlaybackEmptied() {
      // kill all event listeners
      this.audio.removeEventListener('loadeddata', this.proccessPlaybackStart, false);
      this.audio.removeEventListener('timeupdate', this.proccessPlaybackTimeUpdate, false);
      this.audio.removeEventListener('pause', this.proccessPlaybackEmptied, false); // update times

      this.updateCurrentTrackTime(0);
      this.updateCurrentTrackDuration(100);
      this.updateUi({
        loading: false,
        playing: false,
        pause: false,
        stop: true
      }); // update UI

      this.emitPlayerStatus('stopped');
    },
    // when playback stops at the end of the media
    proccessPlaybackStop: function proccessPlaybackStop() {
      this.emitPlayerStatus('stopped'); // kill all event listeners

      this.audio.removeEventListener('loadeddata', this.proccessPlaybackStart, false);
      this.audio.removeEventListener('timeupdate', this.proccessPlaybackTimeUpdate, false);
      this.audio.removeEventListener('pause', this.proccessPlaybackPause, false); // update times

      this.updateCurrentTrackTime(0);
      this.updateCurrentTrackDuration(100);
      this.updateUi({
        loading: false,
        playing: false,
        pause: false,
        stop: true
      }); // update UI
      // check if continuous playback is true

      if (this.continuousPlaybackStatus) {
        // console.log("currentTrackId ",this.currentTrackId)
        // check if there's a next track on the playlist
        if (this.currentTrackId + 1 <= this.lastSongId) {
          // play next song
          this.updatePlayingStatus(true); // show player loading animation on UI

          this.updateCurrentTrackId(this.currentTrackId + 1); // update current track id

          this.playTrack(); // play audio
        } else {
          // play first track
          this.updatePlayingStatus(true); // show player loading animation on UI

          this.updateCurrentTrackId(0); // update current track id

          this.playTrack(); // play audio
        }
      }
    },
    updateSongs: function updateSongs(songs) {
      this.songs = songs;
      this.songsCount = songs.length;
      this.lastSongId = songs.length - 1;
    },
    updateContinuousPlaybackStatus: function updateContinuousPlaybackStatus() {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.continuousPlaybackStatus;
      this.continuousPlaybackStatus = status;
    },
    updateCurrentTrackId: function updateCurrentTrackId(trackId) {
      this.currentTrackId = trackId;
    },
    updateCurrentTrackTime: function updateCurrentTrackTime(time) {
      this.currentTrackTime = time;
      this.$emit('playback-timer', {
        playingItemDuration: this.currentTrackDuration,
        playingItemTime: this.currentTrackTime
      });
    },
    updateCurrentTrackDuration: function updateCurrentTrackDuration(time) {
      this.currentTrackDuration = time;
    },
    updatePlayerVolume: function updatePlayerVolume(volume) {
      this.volume = volume;
      this.audio.volume = this.volume;
    },
    updateLoadingStatus: function updateLoadingStatus(status) {
      this.playerIsLoading = status;
    },
    updatePlayingStatus: function updatePlayingStatus(status) {
      this.playerIsPlaying = status;
    },
    updatePauseStatus: function updatePauseStatus(status) {
      this.playerIsPaused = status;
    },
    updateStopStatus: function updateStopStatus(status) {
      this.playerIsStopped = status;
    },
    playTrack: function playTrack()
    /* next / pevious skips */
    {
      var _this = this;

      var trackId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currentTrackId;
      var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.songsCount <= 0) {
        // play is only functional when there are songs on the playlist
        return false;
      }

      var xns = this; // if currentTrackTime is not 0, resume play

      if (this.playerIsPaused & !skip) {
        this.audio.currentTime = this.currentTrackTime;
        setTimeout(function () {
          _this.audio.play();

          xns.audioListening(); // resume listening to audio oject
        }, 10);
      } else {
        // abort current player progress
        this.audio.load();
        this.coverColor = this.pickRandomColor(); // assign random cover color

        this.playerIsLoading = true; // show player loading animation on UI

        this.currentTrackId = trackId; // update current track id

        this.audio.src = this.songs[trackId].audio;
        this.audio.play(); // play audio

        setTimeout(function () {
          xns.audioListening(); // listen to audio events
        }, 10);
      }

      this.audio.volume = this.volume;
    },
    pause: function pause() {
      var xns = this;
      this.audioListening(false); // stop listening to audio events

      setTimeout(function () {
        xns.audio.pause();
        xns.updateUi({
          loading: false,
          playing: false,
          pause: true,
          stop: false
        }); // update UI
      }, 10);
    },
    stop: function stop() {
      var _this2 = this;

      var xns = this;
      xns.audio.load();
      setTimeout(function () {
        _this2.currentTrackTime = 0;
        _this2.audio.currentTime = 0;
        xns.updateUi({
          loading: false,
          playing: false,
          pause: false,
          stop: true
        }); // update UI

        xns.audioListening(false); // stop listening to audio events
      }, 10);
    },
    next: function next() {
      var _this3 = this;

      var xns = this; // check if there's a next track on the playlist

      if (this.currentTrackId + 1 <= this.lastSongId) {
        // play next song
        this.currentTrackId += 1;
        this.audioListening(false); // stop listening to audio events

        setTimeout(function () {
          xns.playTrack(_this3.currentTrackId, true);
        }, 10);
      } else {
        // check if continuous playback is true
        // TODO convert this, to repeat all check instead
        if (this.continuousPlaybackStatus) {
          // play first track
          this.currentTrackId = 0;
          this.audioListening(false); // stop listening to audio events

          setTimeout(function () {
            xns.playTrack(_this3.currentTrackId, true);
          }, 10);
        }
      }
    },
    previous: function previous() {
      var _this4 = this;

      var xns = this; // check if there's a previous track on the playlist

      if (this.currentTrackId - 1 >= 0) {
        // play previous song
        this.currentTrackId -= 1;
        this.audioListening(false); // stop listening to audio events

        setTimeout(function () {
          xns.playTrack(_this4.currentTrackId, true);
        }, 10);
      } else {
        // check if continuous playback is true
        // TODO convert this, to repeat all check instead
        if (this.continuousPlaybackStatus) {
          // play last song
          this.currentTrackId = this.lastSongId;
          this.audioListening(false); // stop listening to audio events

          setTimeout(function () {
            xns.playTrack(_this4.currentTrackId, true);
          }, 10);
        } else {
          // eslint-disable-next-line
          console.log("Reached start of playlist"); // console.log("Reached start of playlist")
        }
      }
    },
    seekPlayer: function seekPlayer(time) {
      var xns = this;
      this.audioListening(false); // stop listening to audio events

      this.currentTrackTime = time; // seek to given time

      this.audio.currentTime = time; // seek to given time

      setTimeout(function () {
        xns.audioListening(); // resume listening to audio oject
      }, 10);
    }
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", [_c("div", {
    staticClass: "tw-flex tw-flex-col tw-flex-wrap tw-z-20 tw-min-h-10 tw-max-h-simplePlyrmaxheightsm tw-py-0 tw-px-0 tw-mt-0 tw-mr-0 tw-mb-0 tw-ml-0 tw-bg-no-repeat tw-bg-center tw-bg-cover pp",
    style: "max-width:" + _vm.localPlayerWidth + "px"
  }, [_c("div", {
    staticClass: "tw-flex tw-flex-row tw-w-full tw-items-center tw-justify-between px-4 py-1"
  }, [_c("xns-seek-bar", {
    attrs: {
      "bar-color": _vm.localProgressBarColor,
      "bar-height": 20,
      listen: _vm.playerIsPlaying || _vm.playerIsPaused,
      "current-value": _vm.currentTrackTime,
      "total-value": _vm.currentTrackDuration,
      intensity: _vm.volume
    },
    on: {
      seekedTo: _vm.seekPlayer
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "tw-flex tw-flex-row tw-w-full tw-p-r-3 tw-p-l-1 tw-m-0 tw-w-full pp-controls",
    attrs: {
      title: _vm.songsCount > 0 ? _vm.songs[_vm.currentTrackId].artist + " - " + _vm.songs[_vm.currentTrackId].title : "No Audio To Play"
    }
  }, [_c("div", {
    staticClass: "tw-inline-flex tw-flex-grow-0 tw-w-12 tw-m-1 tw-float-left",
    style: !(_vm.songsCount > 0 && _vm.songs[_vm.currentTrackId].cover !== "") ? "background-color: " + _vm.coverColor : ""
  }, [_vm.songsCount > 0 && _vm.songs[_vm.currentTrackId].cover !== "" ? _c("img", {
    staticClass: "tw-h-auto tw-w-full",
    attrs: {
      src: _vm.songs[_vm.currentTrackId].cover
    }
  }) : _c("MusicalNoteIcon", {
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": "pp-icons tw-h-full tw-w-auto",
      w: "40",
      h: "40"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "tw-inline-flex tw-flex-grow tw-flex-col tw-items-center tw-w-full"
  }, [_c("div", {
    staticClass: "tw-inline-flex tw-flex-row tw-w-full tw-items-center tw-align-middle tw-justify-between tw-p-l-3 tw-p-r-1 tw-py-1"
  }, [_c("div", {
    staticClass: "tw-inline-flex tw-flex-row tw-justify-start"
  }, [(_vm.currentTrackId > 0 || _vm.continuousPlaybackStatus) && _vm.songsCount > 0 ? _c("div", {
    staticClass: "tw-flex-1 tw-m-1 tw-justify-center tw-align-middle",
    on: {
      click: function click($event) {
        return _vm.previous();
      }
    }
  }, [_c("SkipBackwardIcon", {
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": "pp-icons",
      w: "30",
      h: "30"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "tw-flex-1 tw-m-1 tw-justify-center tw-align-middle"
  }, [_c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.playerIsPlaying && !_vm.playerIsLoading,
      expression: "!playerIsPlaying && !playerIsLoading"
    }],
    on: {
      click: function click($event) {
        return _vm.playTrack();
      }
    }
  }, [_c("PlayIcon", {
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": "pp-icons",
      w: "30",
      h: "30"
    }
  })], 1), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.playerIsPlaying && !_vm.playerIsLoading,
      expression: "playerIsPlaying && !playerIsLoading"
    }],
    attrs: {
      disabled: _vm.songsCount <= 0
    },
    on: {
      click: function click($event) {
        return _vm.pause();
      }
    }
  }, [_c("PauseIcon", {
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": "pp-icons",
      w: "30",
      h: "30"
    }
  })], 1), _vm._v(" "), _c("span", [_c("BufferingIcon", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.playerIsLoading,
      expression: "playerIsLoading"
    }],
    staticClass: "tw-text-white tw-cursor-pointer",
    attrs: {
      "root-class": "pp-icons",
      animate: "beat",
      w: "30",
      h: "30"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "tw-flex-1 tw-m-1 tw-justify-center tw-align-middle",
    attrs: {
      disabled: _vm.songsCount <= 0
    },
    on: {
      click: function click($event) {
        return _vm.stop();
      }
    }
  }, [_c("SquareIcon", {
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": "pp-icons",
      w: "30",
      h: "30"
    }
  })], 1), _vm._v(" "), (_vm.currentTrackId < _vm.lastSongId || _vm.continuousPlaybackStatus) && _vm.songsCount > 0 ? _c("div", {
    staticClass: "tw-flex-1 tw-m-1 tw-justify-center tw-align-middle",
    attrs: {
      disabled: _vm.songsCount <= 0
    },
    on: {
      click: function click($event) {
        return _vm.next();
      }
    }
  }, [_c("SkipForwardIcon", {
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": "pp-icons",
      w: "30",
      h: "30"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _vm.localPlayerWidth >= 600 && _vm.songs[_vm.currentTrackId].audio !== "" && _vm.showAudioData ? _c("div", {
    staticClass: "tw-inline-flex tw-flex-row tw-justify-start tw-text-white tw-truncate"
  }, [_vm._v("\n            " + _vm._s(_vm.songs[_vm.currentTrackId].artist || "Unknown") + " - " + _vm._s(_vm.songs[_vm.currentTrackId].title || "Unknown") + "\n          ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "tw-inline-flex tw-flex-row tw-justify-end"
  }, [_vm.localPlayerWidth >= 400 && _vm.showAudioDuration ? _c("div", {
    staticClass: "tw-inline-flex tw-flex-row tw-justify-end tw-text-white timer"
  }, [_vm._v("\n              " + _vm._s(_vm.localPlayerWidth >= 600 ? _vm.$options.filters.doubleDigits(_vm.currentTrackTime) : "") + " " + _vm._s(_vm.localPlayerWidth >= 600 ? "-" : "") + " " + _vm._s(_vm._f("doubleDigits")(_vm.currentTrackDuration)) + "\n            ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "tw-flex-1 tw-mx-1"
  }, [_c("div", {
    "class": _vm.localPlayerWidth >= 400 ? "tw-bg-transparent tw-float-right tw-text-white tw-p-t-2" : "tw-bg-transparent tw-float-right tw-text-white",
    attrs: {
      disabled: _vm.volume <= 0.1 || _vm.songsCount <= 0
    },
    on: {
      click: function click($event) {
        return _vm.decreaseVolume();
      }
    }
  }, [_vm.volume > 0 ? _c("VolumeReduceIcon", {
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": "pp-icons",
      w: _vm.localPlayerWidth >= 500 ? "35" : "25",
      h: _vm.localPlayerWidth >= 500 ? "35" : "25"
    }
  }) : _c("VolumeReduceIconInactive", {
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": "pp-icons",
      w: _vm.localPlayerWidth >= 500 ? "35" : "25",
      h: _vm.localPlayerWidth >= 500 ? "35" : "25"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    "class": _vm.localPlayerWidth >= 400 ? "tw-flex-1 tw-mx-2 tw-p-t-2" : "tw-flex-1 tw-mx-2"
  }, [_c("div", {
    staticClass: "tw-bg-transparent tw-float-right tw-text-white",
    attrs: {
      disabled: _vm.volume >= 1 || _vm.songsCount <= 0
    },
    on: {
      click: function click($event) {
        return _vm.increaseVolume();
      }
    }
  }, [_vm.volume < 1 ? _c("VolumeAddIcon", {
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": "pp-icons",
      w: _vm.localPlayerWidth >= 500 ? "35" : "25",
      h: _vm.localPlayerWidth >= 500 ? "35" : "25"
    }
  }) : _c("VolumeAddIconInactive", {
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": "pp-icons",
      w: _vm.localPlayerWidth >= 500 ? "35" : "25",
      h: _vm.localPlayerWidth >= 500 ? "35" : "25"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    "class": _vm.localPlayerWidth >= 400 ? "tw-flex-1 tw-mx-1 tw-p-t-2" : "tw-flex-1 tw-mx-1"
  }, [_c("span", {
    "class": _vm.continuousPlaybackStatus ? "tw-bg-transparent tw-float-right tw-text-white tw-text-primary-green" : "tw-bg-transparent tw-float-right tw-text-white",
    on: {
      click: function click($event) {
        return _vm.updateContinuousPlaybackStatus();
      }
    }
  }, [_c("RepeatIcon", {
    staticClass: "tw-cursor-pointer tw-text-white",
    attrs: {
      "root-class": _vm.continuousPlaybackStatus ? "pp-icons-green" : "pp-icons",
      w: _vm.localPlayerWidth >= 500 ? "35" : "25",
      h: _vm.localPlayerWidth >= 500 ? "35" : "25"
    }
  })], 1)])])])])])])]);
};

var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-719c313b_0", {
    source: "\n.pp[data-v-719c313b]{\n  background: #232526;\n  background: -webkit-linear-gradient(to right, rgba(35, 37, 38, .8), rgba(65, 67, 69, .8));\n  background: linear-gradient(to right, rgba(35, 37, 38, .8), rgba(65, 67, 69, .8));\n}\n.pp-controls[data-v-719c313b]{\n  background: #303942;\n  background: -webkit-linear-gradient(to right, rgba(43, 51, 59, 0.95), rgba(41, 50, 60, .95));\n  background: linear-gradient(to right, rgba(43, 51, 59, 0.95), rgba(41, 50, 60, .95));\n}\n.pp-icons[data-v-719c313b]{\n  fill: white !important;\n}\n.pp-icons[data-v-719c313b]:focus{\n  fill: grey !important;\n}\n.pp-icons-green[data-v-719c313b]{\n  fill: limegreen;\n}\n[data-v-719c313b]::selection{\n  background: none;\n}\n.timer[data-v-719c313b]{\n  margin: auto;\n  padding: 10px;\n}\n.tw-p-t-2[data-v-719c313b]{\n  padding-top: 7px;\n}\n",
    map: {
      "version": 3,
      "sources": ["C:\\Users\\xinnk\\Documents\\projects\\MyNpmModules\\xns-audio-player\\simple/C:\\Users\\xinnk\\Documents\\projects\\MyNpmModules\\xns-audio-player\\simple\\src\\XnsAudioPlayerSimple.vue"],
      "names": [],
      "mappings": ";AA2eA;EACA,mBAAA;EACA,yFAAA;EACA,iFAAA;AACA;AACA;EACA,mBAAA;EACA,4FAAA;EACA,oFAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;EACA,YAAA;EACA,aAAA;AACA;AACA;EACA,gBAAA;AACA",
      "file": "XnsAudioPlayerSimple.vue",
      "sourcesContent": ["<template>\r\n  <div>\r\n    <div class=\"tw-flex tw-flex-col tw-flex-wrap tw-z-20 tw-min-h-10 tw-max-h-simplePlyrmaxheightsm tw-py-0 tw-px-0 tw-mt-0 tw-mr-0 tw-mb-0 tw-ml-0 tw-bg-no-repeat tw-bg-center tw-bg-cover pp\" :style=\"'max-width:'+localPlayerWidth+'px'\">\r\n      <div class=\"tw-flex tw-flex-row tw-w-full tw-items-center tw-justify-between px-4 py-1\">\r\n        <xns-seek-bar :bar-color=\"localProgressBarColor\" :bar-height=\"20\" :listen=\"playerIsPlaying || playerIsPaused\" :current-value=\"currentTrackTime\" :total-value=\"currentTrackDuration\" @seekedTo=\"seekPlayer\" :intensity=\"volume\"></xns-seek-bar>\r\n      </div>\r\n      <div :title=\"songsCount > 0 ? songs[currentTrackId].artist +' - '+songs[currentTrackId].title : 'No Audio To Play'\" class=\"tw-flex tw-flex-row tw-w-full tw-p-r-3 tw-p-l-1 tw-m-0 tw-w-full pp-controls\">\r\n        <div class=\"tw-inline-flex tw-flex-grow-0 tw-w-12 tw-m-1 tw-float-left\" :style=\"!(songsCount > 0 && songs[currentTrackId].cover !== '') ? 'background-color: '+coverColor : ''\">\r\n          <img class=\"tw-h-auto tw-w-full\" v-if=\"songsCount > 0 && songs[currentTrackId].cover !== ''\" :src=\"songs[currentTrackId].cover\">\r\n          <MusicalNoteIcon v-else :root-class=\"'pp-icons tw-h-full tw-w-auto'\" class=\"tw-cursor-pointer tw-text-white\" w=\"40\" h=\"40\" />\r\n        </div>\r\n        <div class=\"tw-inline-flex tw-flex-grow tw-flex-col tw-items-center tw-w-full\">\r\n          <div class=\"tw-inline-flex tw-flex-row tw-w-full tw-items-center tw-align-middle tw-justify-between tw-p-l-3 tw-p-r-1 tw-py-1\">\r\n            <div class=\"tw-inline-flex tw-flex-row tw-justify-start\">\r\n              <div v-if=\"((currentTrackId > 0) || continuousPlaybackStatus) && (songsCount > 0)\" class=\"tw-flex-1 tw-m-1 tw-justify-center tw-align-middle\" @click=\"previous()\">\r\n                <SkipBackwardIcon :root-class=\"'pp-icons'\" class=\"tw-cursor-pointer tw-text-white\" w=\"30\" h=\"30\" />\r\n              </div>\r\n              <div class=\"tw-flex-1 tw-m-1 tw-justify-center tw-align-middle\">\r\n                \r\n                <span @click=\"playTrack()\" v-show=\"!playerIsPlaying && !playerIsLoading\">\r\n                  <PlayIcon :root-class=\"'pp-icons'\" class=\"tw-cursor-pointer tw-text-white\" w=\"30\" h=\"30\"/>\r\n                </span>\r\n                \r\n                <span @click=\"pause()\" v-show=\"playerIsPlaying && !playerIsLoading\" :disabled=\"songsCount <= 0\">\r\n                  <PauseIcon :root-class=\"'pp-icons'\" class=\"tw-cursor-pointer tw-text-white\" w=\"30\" h=\"30\" />\r\n                </span>\r\n                \r\n                <span>\r\n                  <BufferingIcon :root-class=\"'pp-icons'\" class=\"tw-text-white tw-cursor-pointer\" animate=\"beat\" v-show=\"playerIsLoading\" w=\"30\" h=\"30\" />\r\n                </span>\r\n              </div>\r\n              <div class=\"tw-flex-1 tw-m-1 tw-justify-center tw-align-middle\" @click=\"stop()\" :disabled=\"songsCount <= 0\">\r\n                <SquareIcon :root-class=\"'pp-icons'\" class=\"tw-cursor-pointer tw-text-white\" w=\"30\" h=\"30\" />\r\n              </div>\r\n              <div v-if=\"((currentTrackId < lastSongId) || continuousPlaybackStatus) && (songsCount > 0)\" class=\"tw-flex-1 tw-m-1 tw-justify-center tw-align-middle\" @click=\"next()\" :disabled=\"songsCount <= 0\">\r\n                <SkipForwardIcon :root-class=\"'pp-icons'\" class=\"tw-cursor-pointer tw-text-white\" w=\"30\" h=\"30\"/>\r\n              </div>\r\n            </div>\r\n\r\n            <div v-if=\"(localPlayerWidth >= 600) && (songs[currentTrackId].audio !== '') && showAudioData\" class=\"tw-inline-flex tw-flex-row tw-justify-start tw-text-white tw-truncate\">\r\n              {{songs[currentTrackId].artist || 'Unknown'}} - {{songs[currentTrackId].title || 'Unknown'}}\r\n            </div>\r\n\r\n            <div class=\"tw-inline-flex tw-flex-row tw-justify-end\">\r\n              <div v-if=\"(localPlayerWidth >= 400) && showAudioDuration \" class=\"tw-inline-flex tw-flex-row tw-justify-end tw-text-white timer\">\r\n                {{(localPlayerWidth >= 600) ? $options.filters.doubleDigits(currentTrackTime) : ''}} {{(localPlayerWidth >= 600) ? '-' : ''}} {{currentTrackDuration | doubleDigits}}\r\n              </div>\r\n              <div class=\"tw-flex-1 tw-mx-1\">\r\n                <div @click=\"decreaseVolume()\" :disabled=\"(volume <= 0.1) || (songsCount <= 0)\" :class=\"(localPlayerWidth >= 400) ? 'tw-bg-transparent tw-float-right tw-text-white tw-p-t-2' : 'tw-bg-transparent tw-float-right tw-text-white'\">\r\n                  <VolumeReduceIcon v-if=\"volume > 0\" class=\"tw-cursor-pointer tw-text-white\" :root-class=\"'pp-icons'\" :w=\"localPlayerWidth >= 500 ? '35' : '25'\" :h=\"localPlayerWidth >= 500 ? '35' : '25'\"/>\r\n                  <VolumeReduceIconInactive v-else class=\"tw-cursor-pointer tw-text-white\" :root-class=\"'pp-icons'\" :w=\"localPlayerWidth >= 500 ? '35' : '25'\" :h=\"localPlayerWidth >= 500 ? '35' : '25'\"/>\r\n                </div>\r\n              </div>\r\n              <div :class=\"(localPlayerWidth >= 400) ? 'tw-flex-1 tw-mx-2 tw-p-t-2' : 'tw-flex-1 tw-mx-2'\">\r\n                <div @click=\"increaseVolume()\" :disabled=\"(volume >= 1) || (songsCount <= 0)\" class=\"tw-bg-transparent tw-float-right tw-text-white\">\r\n                  <VolumeAddIcon v-if=\"volume < 1\" class=\"tw-cursor-pointer tw-text-white\" :root-class=\"'pp-icons'\" :w=\"localPlayerWidth >= 500 ? '35' : '25'\" :h=\"localPlayerWidth >= 500 ? '35' : '25'\"/>\r\n                  <VolumeAddIconInactive v-else class=\"tw-cursor-pointer tw-text-white\" :root-class=\"'pp-icons'\" :w=\"localPlayerWidth >= 500 ? '35' : '25'\" :h=\"localPlayerWidth >= 500 ? '35' : '25'\"/>\r\n                </div>\r\n              </div>\r\n              <div :class=\"(localPlayerWidth >= 400) ? 'tw-flex-1 tw-mx-1 tw-p-t-2' : 'tw-flex-1 tw-mx-1'\">\r\n                <span @click=\"updateContinuousPlaybackStatus()\" :class=\"continuousPlaybackStatus ? 'tw-bg-transparent tw-float-right tw-text-white tw-text-primary-green' : 'tw-bg-transparent tw-float-right tw-text-white'\"><RepeatIcon :root-class=\"continuousPlaybackStatus ? 'pp-icons-green' : 'pp-icons'\" class=\"tw-cursor-pointer tw-text-white\" :w=\"localPlayerWidth >= 500 ? '35' : '25'\" :h=\"localPlayerWidth >= 500 ? '35' : '25'\"/></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport './output.css'\r\nimport RepeatIcon from 'vue-ionicons/dist/ios-repeat'\r\nimport SkipBackwardIcon from 'vue-ionicons/dist/ios-skip-backward'\r\nimport PlayIcon from 'vue-ionicons/dist/ios-play'\r\nimport PauseIcon from 'vue-ionicons/dist/ios-pause'\r\nimport SquareIcon from 'vue-ionicons/dist/ios-square'\r\nimport SkipForwardIcon from 'vue-ionicons/dist/ios-skip-forward'\r\nimport BufferingIcon from 'vue-ionicons/dist/ios-more'\r\nimport VolumeAddIconInactive from 'vue-ionicons/dist/ios-add-circle-outline'\r\nimport VolumeAddIcon from 'vue-ionicons/dist/ios-add-circle'\r\nimport VolumeReduceIconInactive from 'vue-ionicons/dist/ios-remove-circle-outline'\r\nimport VolumeReduceIcon from 'vue-ionicons/dist/ios-remove-circle'\r\nimport MusicalNoteIcon from 'vue-ionicons/dist/ios-musical-note'\r\nimport XnsSeekBar from 'xns-seek-bar'\r\nexport default {\r\n  name: 'XnsAudioPlayerSimple',\r\n  components: {\r\n    RepeatIcon, SkipBackwardIcon, PlayIcon, PauseIcon, SquareIcon, SkipForwardIcon, BufferingIcon, VolumeAddIcon, VolumeReduceIcon, VolumeReduceIconInactive, VolumeAddIconInactive, MusicalNoteIcon, XnsSeekBar\r\n  },\r\n  props: {\r\n    playlist: {type: Array, default: () => []},\r\n    playerWidth: {\r\n      type: Number,\r\n      default: 320\r\n    },\r\n    repeatAll: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    playerVolume: {\r\n      type: Number,\r\n      default: 0.5\r\n    },\r\n    stopPlayback: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    pausePlayback: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    showAudioDuration: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    showAudioData: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    progressBarColor: {\r\n      type: String,\r\n      default: '#008080'\r\n    }\r\n  },\r\n  data(){\r\n    return {\r\n      // player details\r\n      localPlayerWidth: 320,\r\n      localProgressBarColor: '',\r\n\r\n      // audio tracks list\r\n      songs: [],\r\n      songsCount: 0,\r\n\r\n      //bools - playback helpers\r\n      playerIsPlaying: false,\r\n      playerIsPaused: false,\r\n      playerIsStopped: false,\r\n      isFirstTrack: true,\r\n      isMuted: false,\r\n      playerIsLoading: false,\r\n      continuousPlaybackStatus: false,\r\n\r\n      // player element\r\n      audio: new Audio(),\r\n\r\n      // player properties\r\n      volume: 0.5,\r\n      buffered: 0,\r\n\r\n      // custom helper properties\r\n      currentTrackId: 0,\r\n      currentTrackTime: 0,\r\n      currentTrackDuration: 0,\r\n      lastSongId: 0,\r\n\r\n      // cover art colors\r\n      coverColors: [ '#009688', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#4caf50', '#ff9800', '#607d8b', '#795548', '#008080' ],\r\n      coverColor: ''\r\n    }\r\n  },\r\n  watch: {\r\n    immediate: true,\r\n    playerVolume () {\r\n      this.updatePlayerVolume(this.playerVolume)\r\n    },\r\n    repeatAll(){\r\n      this.updateContinuousPlaybackStatus(this.repeatAll)\r\n    },\r\n    playlist(){\r\n      this.updateSongs(this.playlist)\r\n    },\r\n    // let user programatically stop playback\r\n    stopPlayback(){\r\n      if(this.stopPlayback){\r\n        this.stop()\r\n      }\r\n    },\r\n    // let user programatically pause playback\r\n    pausePlayback(){\r\n      if(this.pausePlayback){\r\n        this.pause()\r\n      }\r\n    },\r\n    // observe player width adjustment\r\n    playerWidth(){\r\n      this.adjustPlayerDimensions(this.playerWidth)\r\n    },\r\n    // observe changes on the progress-bar color\r\n    progressBarColor(){\r\n      this.validateProgressColor(this.progressBarColor)\r\n    }\r\n  },\r\n  filters:{\r\n    doubleDigits (val) {\r\n      if(isNaN(val)){\r\n        return '00'\r\n      }else{\r\n        if(val < 60){\r\n          return val.toFixed() < 10 ? '0 : 0' + val.toFixed() : '0 : ' + val.toFixed()\r\n        } else {\r\n          let seconds = (val.toFixed() % 60) == 60 ? '00' : (val % 60).toFixed()\r\n          let minutes = Math.floor(val.toFixed()/60).toFixed()\r\n          return minutes + ' : ' + (seconds < 10 ? '0' + seconds : seconds)\r\n        }\r\n      }\r\n    },\r\n  },\r\n  mounted () {\r\n    let xns = this;\r\n    this.songs = this.playlist\r\n    setTimeout(function () {\r\n      xns.coverColor = xns.pickRandomColor() // assign random color\r\n      xns.lastSongId = xns.songs.length - 1\r\n      xns.updatePlayerVolume(xns.playerVolume)\r\n      xns.updateContinuousPlaybackStatus(xns.repeatAll)\r\n      xns.adjustPlayerDimensions(xns.playerWidth)\r\n      xns.updateSongs(xns.playlist)\r\n      xns.validateProgressColor(xns.progressBarColor)\r\n    }, 300);\r\n    this.audio.volume = this.volume\r\n  },\r\n  methods: {\r\n    adjustPlayerDimensions(width){\r\n      this.localPlayerWidth = (width < 320 ) ? 320 : (width > 1366) ? 1366 : width\r\n    },\r\n    validateProgressColor(color){\r\n      this.localProgressBarColor = (this.coverColors.indexOf(color) !== -1) ? color : '#008080'\r\n    },\r\n    pickRandomColor(){\r\n      return this.coverColors[Math.floor(Math.random() * this.coverColors.length)];\r\n    },\r\n    emitPlayerStatus(status){\r\n      let  xns = this\r\n      setTimeout(()=>{\r\n        xns.$emit('player-status', status)\r\n      }, 200)\r\n    },\r\n    decreaseVolume(){\r\n      this.updatePlayerVolume((this.volume - 0.1) >= 0 ? (this.volume - 0.1) : 0)\r\n    },\r\n    increaseVolume(){\r\n      this.updatePlayerVolume((this.volume + 0.1) <= 1 ? (this.volume + 0.1) : 1)\r\n    },\r\n    audioListening(listen = true){\r\n\r\n      if(listen){\r\n        // start listening\r\n        this.audio.addEventListener('loadeddata', this.proccessPlaybackStart, false)\r\n        this.audio.addEventListener('timeupdate', this.proccessPlaybackTimeUpdate, false)\r\n        this.audio.addEventListener('pause', this.proccessPlaybackPause, false)\r\n        this.audio.addEventListener('emptied', this.proccessPlaybackEmptied, false)\r\n        this.audio.addEventListener('ended', this.proccessPlaybackStop, false)\r\n      } else {\r\n        // stop listening\r\n        this.audio.removeEventListener('loadeddata', this.proccessPlaybackStart, false)\r\n        this.audio.removeEventListener('timeupdate', this.proccessPlaybackTimeUpdate, false)\r\n        this.audio.removeEventListener('pause', this.proccessPlaybackPause, false)\r\n        this.audio.removeEventListener('emptied', this.proccessPlaybackEmptied, false)\r\n        this.audio.removeEventListener('ended', this.proccessPlaybackStop, false)\r\n      }\r\n    },\r\n    updateUi(status){\r\n      this.updateLoadingStatus(status.loading)\r\n      this.updatePlayingStatus(status.playing)\r\n      this.updatePauseStatus(status.pause)\r\n      this.updateStopStatus(status.stop)\r\n    },\r\n\r\n    // when first frame of media has finished loading\r\n    proccessPlaybackStart() {\r\n      this.updateUi({loading: false, playing: true, pause: false, stop: false}) // update UI\r\n      this.updateCurrentTrackDuration(this.audio.duration) // get track duration\r\n      this.emitPlayerStatus('playing')\r\n    },\r\n\r\n    // when time indicated by the currentTime attribute has been updated\r\n    proccessPlaybackTimeUpdate() {\r\n      // check if track duration is NaN or zero and rectify\r\n      if(isNaN(this.currentTrackDuration) || !isFinite(this.currentTrackDuration)){\r\n        this.updateCurrentTrackDuration(260) // give reasonable track duration\r\n        // console.log(\"'Fixed' CurrentTrackDuration\")\r\n      }  else {\r\n        this.updateCurrentTrackDuration((isNaN(this.audio.duration) || !isFinite(this.audio.duration)) ? 260 : this.audio.duration) // get track duration\r\n      }\r\n      // debug loading\r\n      if(this.playerIsLoading){\r\n        this.updateLoadingStatus(false)\r\n      }\r\n\r\n      this.updateCurrentTrackTime(this.audio.currentTime) // get current track time\r\n      this.updateUi({loading: false, playing: true, pause: false, stop: false}) // update UI\r\n    },\r\n\r\n    // called when element is paused\r\n    proccessPlaybackPause() {\r\n      this.updateUi({loading: false, playing: false, pause: true, stop: false}) // update UI\r\n      this.emitPlayerStatus('paused')\r\n    },\r\n\r\n    // called when loaded() is called\r\n    proccessPlaybackEmptied() {\r\n      // kill all event listeners\r\n      this.audio.removeEventListener('loadeddata', this.proccessPlaybackStart, false)\r\n      this.audio.removeEventListener('timeupdate', this.proccessPlaybackTimeUpdate, false)\r\n      this.audio.removeEventListener('pause', this.proccessPlaybackEmptied, false)\r\n      // update times\r\n      this.updateCurrentTrackTime(0)\r\n      this.updateCurrentTrackDuration(100)\r\n\r\n      this.updateUi({loading: false, playing: false, pause: false, stop: true}) // update UI\r\n      this.emitPlayerStatus('stopped')\r\n    },\r\n\r\n    // when playback stops at the end of the media\r\n    proccessPlaybackStop() {\r\n      this.emitPlayerStatus('stopped')\r\n      // kill all event listeners\r\n      this.audio.removeEventListener('loadeddata', this.proccessPlaybackStart, false)\r\n      this.audio.removeEventListener('timeupdate', this.proccessPlaybackTimeUpdate, false)\r\n      this.audio.removeEventListener('pause', this.proccessPlaybackPause, false)\r\n      // update times\r\n      this.updateCurrentTrackTime(0)\r\n      this.updateCurrentTrackDuration(100)\r\n\r\n      this.updateUi({loading: false, playing: false, pause: false, stop: true}) // update UI\r\n\r\n      // check if continuous playback is true\r\n      if(this.continuousPlaybackStatus){\r\n        // console.log(\"currentTrackId \",this.currentTrackId)\r\n        // check if there's a next track on the playlist\r\n        if((this.currentTrackId + 1) <= this.lastSongId){\r\n          // play next song\r\n          this.updatePlayingStatus(true)  // show player loading animation on UI\r\n          this.updateCurrentTrackId(this.currentTrackId + 1) // update current track id\r\n          this.playTrack() // play audio\r\n        } else {\r\n          // play first track\r\n          this.updatePlayingStatus(true)  // show player loading animation on UI\r\n          this.updateCurrentTrackId(0) // update current track id\r\n          this.playTrack() // play audio\r\n        }\r\n      }\r\n    },\r\n    updateSongs(songs){\r\n      this.songs = songs\r\n      this.songsCount = songs.length\r\n      this.lastSongId = songs.length - 1\r\n    },\r\n    updateContinuousPlaybackStatus(status = !this.continuousPlaybackStatus){\r\n      this.continuousPlaybackStatus = status\r\n    },\r\n    updateCurrentTrackId(trackId){\r\n      this.currentTrackId = trackId\r\n    },\r\n    updateCurrentTrackTime(time){\r\n      this.currentTrackTime = time\r\n      this.$emit('playback-timer', {playingItemDuration: this.currentTrackDuration, playingItemTime: this.currentTrackTime})\r\n    },\r\n    updateCurrentTrackDuration(time){\r\n      this.currentTrackDuration = time\r\n    },\r\n    updatePlayerVolume(volume){\r\n      this.volume = volume\r\n      this.audio.volume = this.volume\r\n    },\r\n    updateLoadingStatus(status) {\r\n      this.playerIsLoading = status\r\n    },\r\n    updatePlayingStatus(status) {\r\n        this.playerIsPlaying = status\r\n    },\r\n    updatePauseStatus(status) {\r\n      this.playerIsPaused = status\r\n    },\r\n    updateStopStatus(status) {\r\n      this.playerIsStopped = status\r\n    },\r\n    playTrack(trackId = this.currentTrackId, skip = false /* next / pevious skips */){\r\n      if(this.songsCount <= 0){ // play is only functional when there are songs on the playlist\r\n        return false\r\n      }\r\n      let xns = this\r\n      // if currentTrackTime is not 0, resume play\r\n      if(this.playerIsPaused & !skip){\r\n        this.audio.currentTime = this.currentTrackTime\r\n        setTimeout(() => {\r\n          this.audio.play()\r\n          xns.audioListening() // resume listening to audio oject\r\n        }, 10)\r\n      } else {\r\n        // abort current player progress\r\n        this.audio.load()\r\n        this.coverColor = this.pickRandomColor() // assign random cover color\r\n        \r\n        this.playerIsLoading = true // show player loading animation on UI\r\n\r\n        this.currentTrackId = trackId // update current track id\r\n        this.audio.src = this.songs[trackId].audio\r\n        this.audio.play() // play audio\r\n        setTimeout(() => {\r\n          xns.audioListening() // listen to audio events\r\n        }, 10)\r\n      }\r\n      this.audio.volume = this.volume\r\n    },\r\n    pause(){\r\n      let xns = this\r\n      this.audioListening(false) // stop listening to audio events\r\n      setTimeout(() => {\r\n        xns.audio.pause()\r\n        xns.updateUi({loading: false, playing: false, pause: true, stop: false}) // update UI\r\n      }, 10)\r\n    },\r\n    stop(){\r\n      let xns = this\r\n      xns.audio.load();\r\n      setTimeout(() => {\r\n        this.currentTrackTime = 0\r\n        this.audio.currentTime = 0\r\n        xns.updateUi({loading: false, playing: false, pause: false, stop: true}) // update UI\r\n        xns.audioListening(false) // stop listening to audio events\r\n      }, 10)\r\n    },\r\n    next(){\r\n      let xns = this\r\n      // check if there's a next track on the playlist\r\n      if((this.currentTrackId + 1) <= this.lastSongId){\r\n        // play next song\r\n        this.currentTrackId += 1\r\n        this.audioListening(false) // stop listening to audio events\r\n        setTimeout(() => {\r\n          xns.playTrack(this.currentTrackId, true);\r\n        }, 10)\r\n      } else {\r\n        // check if continuous playback is true\r\n        // TODO convert this, to repeat all check instead\r\n        if(this.continuousPlaybackStatus){\r\n          // play first track\r\n          this.currentTrackId = 0\r\n          this.audioListening(false) // stop listening to audio events\r\n          setTimeout(() => {\r\n            xns.playTrack(this.currentTrackId, true);\r\n          }, 10)\r\n        } else {\r\n            // console.log(\"Reached end of playlist\")\r\n        }\r\n      }\r\n    },\r\n    previous(){\r\n      let xns = this\r\n      // check if there's a previous track on the playlist\r\n      if((this.currentTrackId - 1) >= 0){\r\n        // play previous song\r\n        this.currentTrackId -= 1\r\n        this.audioListening(false) // stop listening to audio events\r\n        setTimeout(() => {\r\n          xns.playTrack(this.currentTrackId, true)\r\n        }, 10)\r\n      } else {\r\n        // check if continuous playback is true\r\n        // TODO convert this, to repeat all check instead\r\n        if(this.continuousPlaybackStatus){\r\n          // play last song\r\n          this.currentTrackId = this.lastSongId\r\n          this.audioListening(false) // stop listening to audio events\r\n          setTimeout(() => {\r\n            xns.playTrack(this.currentTrackId, true)\r\n          }, 10)\r\n        } else {\r\n            // eslint-disable-next-line\r\n            console.log(\"Reached start of playlist\")\r\n            // console.log(\"Reached start of playlist\")\r\n        }\r\n      }\r\n    },\r\n    seekPlayer(time){\r\n      let xns = this\r\n      this.audioListening(false) // stop listening to audio events\r\n      this.currentTrackTime = time // seek to given time\r\n      this.audio.currentTime = time // seek to given time\r\n      setTimeout(() =>{\r\n          xns.audioListening() // resume listening to audio oject\r\n      }, 10)\r\n    },\r\n  },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n  .pp{\r\n    background: #232526;\r\n    background: -webkit-linear-gradient(to right, rgba(35, 37, 38, .8), rgba(65, 67, 69, .8));\r\n    background: linear-gradient(to right, rgba(35, 37, 38, .8), rgba(65, 67, 69, .8));\r\n  }\r\n  .pp-controls{\r\n    background: #303942;\r\n    background: -webkit-linear-gradient(to right, rgba(43, 51, 59, 0.95), rgba(41, 50, 60, .95));\r\n    background: linear-gradient(to right, rgba(43, 51, 59, 0.95), rgba(41, 50, 60, .95));\r\n  }\r\n  .pp-icons{\r\n    fill: white !important;\r\n  }\r\n  .pp-icons:focus{\r\n    fill: grey !important;\r\n  }\r\n  .pp-icons-green{\r\n    fill: limegreen;\r\n  }\r\n  ::selection{\r\n    background: none;\r\n  }\r\n  .timer{\r\n    margin: auto;\r\n    padding: 10px;\r\n  }\r\n  .tw-p-t-2{\r\n    padding-top: 7px;\r\n  }\r\n</style>\r\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-719c313b";
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* component normalizer */

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "C:\\Users\\xinnk\\Documents\\projects\\MyNpmModules\\xns-audio-player\\simple\\src\\XnsAudioPlayerSimple.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook;

    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;

        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */


function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: [],
      parts: [],
      element: undefined
    });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;
      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';
        if (css.media) el.setAttribute('media', css.media);

        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */


var XnsAudioPlayerSimple = __vue_normalize__({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, __vue_create_injector__);

var index$1 = {
  install: function install(Vue) {
    // register component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("xns-audio-player-simple", XnsAudioPlayerSimple);
  }
};

module.exports = index$1;
