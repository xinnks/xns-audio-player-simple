/*!
 * xns-audio-player-simple v0.1.6
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

/**
 * vuex v3.1.1
 * (c) 2019 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (process.env.NODE_ENV !== 'production') {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (process.env.NODE_ENV !== 'production') {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if (process.env.NODE_ENV !== 'production') {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    process.env.NODE_ENV !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return result.then(function (res) {
    try {
      this$1._actionSubscribers
        .filter(function (sub) { return sub.after; })
        .forEach(function (sub) { return sub.after(action, this$1.state); });
    } catch (e) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn("[vuex] error in after action subscribers: ");
        console.error(e);
      }
    }
    return res
  })
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (process.env.NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (process.env.NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure enviroment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (process.env.NODE_ENV !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (process.env.NODE_ENV !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (process.env.NODE_ENV !== 'production') {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (process.env.NODE_ENV !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (process.env.NODE_ENV !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

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

var css = "@-webkit-keyframes ionShake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n\n@keyframes ionShake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n\n@-webkit-keyframes ionRotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes ionRotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ionBeat {\n  0% {\n    transform: scale(0.75);\n  }\n\n  20% {\n    transform: scale(1);\n  }\n\n  40% {\n    transform: scale(0.75);\n  }\n\n  60% {\n    transform: scale(1);\n  }\n\n  80% {\n    transform: scale(0.75);\n  }\n\n  100% {\n    transform: scale(0.75);\n  }\n}\n\n@keyframes ionBeat {\n  0% {\n    transform: scale(0.75);\n  }\n\n  20% {\n    transform: scale(1);\n  }\n\n  40% {\n    transform: scale(0.75);\n  }\n\n  60% {\n    transform: scale(1);\n  }\n\n  80% {\n    transform: scale(0.75);\n  }\n\n  100% {\n    transform: scale(0.75);\n  }\n}\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\n\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\n/**\n * Add the correct font size in all browsers.\n */\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\n/*\n * Add the correct display in all browsers.\n */\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * 1. Prevent padding and border from affecting element width\n * https://goo.gl/pYtbK7\n * 2. Change the default font family in all browsers (opinionated)\n */\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nbutton {\n  background: transparent;\n  padding: 0;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the system font stack as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n * to override it to ensure consistency even when using the default theme.\n */\n\n/**\n * Allow adding a border to an element by just adding a border-width.\n *\n * By default, the way the browser specifies that an element should have no\n * border is by setting it's border-style to `none` in the user-agent\n * stylesheet.\n *\n * In order to easily add borders to elements by just setting the `border-width`\n * property, we change the default border-style for all elements to `solid`, and\n * use border-width to hide them instead. This way our `border` utilities only\n * need to set the `border-width` property instead of the entire `border`\n * shorthand, making our border utilities much more straightforward to compose.\n *\n * https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n*::before,\n*::after {\n  border-width: 0;\n  border-style: solid;\n  border-color: #e2e8f0;\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ninput::-webkit-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::-moz-placeholder {\n  color: #a0aec0;\n}\n\ninput:-ms-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::-ms-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::placeholder {\n  color: #a0aec0;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\ncanvas,\naudio {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n.tw-bg-transparent {\n  background-color: transparent;\n}\n\n.tw-bg-center {\n  background-position: center;\n}\n\n.tw-bg-no-repeat {\n  background-repeat: no-repeat;\n}\n\n.tw-bg-cover {\n  background-size: cover;\n}\n\n.tw-cursor-pointer {\n  cursor: pointer;\n}\n\n.tw-flex {\n  display: flex;\n}\n\n.tw-inline-flex {\n  display: inline-flex;\n}\n\n.tw-flex-row {\n  flex-direction: row;\n}\n\n.tw-flex-col {\n  flex-direction: column;\n}\n\n.tw-flex-wrap {\n  flex-wrap: wrap;\n}\n\n.tw-items-center {\n  align-items: center;\n}\n\n.tw-justify-center {\n  justify-content: center;\n}\n\n.tw-justify-between {\n  justify-content: space-between;\n}\n\n.tw-justify-around {\n  justify-content: space-around;\n}\n\n.tw-flex-1 {\n  flex: 1 1 0%;\n}\n\n.tw-flex-grow-0 {\n  flex-grow: 0;\n}\n\n.tw-flex-grow {\n  flex-grow: 1;\n}\n\n.tw-float-right {\n  float: right;\n}\n\n.tw-float-left {\n  float: left;\n}\n\n.tw-m-0 {\n  margin: 0;\n}\n\n.tw-m-1 {\n  margin: 0.25rem;\n}\n\n.tw-mt-0 {\n  margin-top: 0;\n}\n\n.tw-mr-0 {\n  margin-right: 0;\n}\n\n.tw-mb-0 {\n  margin-bottom: 0;\n}\n\n.tw-ml-0 {\n  margin-left: 0;\n}\n\n.tw-max-h-simplePlyrmaxheightsm {\n  max-height: 60px;\n}\n\n.tw-py-0 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.tw-px-0 {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.tw-py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.tw-px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.tw-text-white {\n  color: #fff;\n}\n\n.tw-text-primary-green {\n  color: #21FB92;\n}\n\n.tw-align-middle {\n  vertical-align: middle;\n}\n\n.tw-w-1 {\n  width: 0.25rem;\n}\n\n.tw-w-12 {\n  width: 3rem;\n}\n\n.tw-w-auto {\n  width: auto;\n}\n\n.tw-w-full {\n  width: 100%;\n}\n\n.tw-z-20 {\n  z-index: 20;\n}\n";
styleInject(css);

var PlayerMixin = {
  watch: {
    playerVolume: function playerVolume() {
      this.changeVolume({
        volume: this.playerVolume
      });
    },
    progressPercent: function progressPercent() {
      this.playerProgressPercent = this.progressPercent;
    },
    timeLapse: function timeLapse() {
      if (this.timeLapse) {
        this.updateTimeLapse(false);
      }

      if (this.currentTrackDuration === 'NaN : NaN' || this.progressPercent === 'NaN' || this.progressPercent === 0 || !this.progressPercent) {
        // fix to displaying track time 'NaN : NaN' & timeBufferMins being stuck at 0
        this.updateCountCheck({
          countCheck: 0
        });
        this.viewShit();
      }
    },
    volume: function volume() {
      this.playerVolume = this.volume;
    },
    audio: function audio() {
      // changed Track
      this.currentTrackTime = parseInt(this.audio.currentTime);
      this.lastRecordedTrackTime = -1;
    }
  },
  mounted: function mounted() {
    var xns = this;
    this.$store.commit({
      type: 'addSongs',
      songs: xns.songs
    });
    this.$store.commit({
      type: 'updateContinuousPlay',
      status: xns.continuousPlay
    });
    setTimeout(function () {
      xns.updateLastSongId({
        lastSongId: xns.Songs.length - 1
      });
      xns.playerVolume = xns.getVolume;
      xns.playerProgressPercent = xns.getProgressPercent;
    }, 1000);
  },
  methods: Object.assign({
    scrubChange: function scrubChange() {
      this.scrubToTime(this.playerProgressPercent);
    },
    changeContinuousPlay: function changeContinuousPlay() {
      this.updateContinuousPlay({
        status: !this.continuousPlay
      });
    }
  }, mapActions(['viewShit', 'playSong', 'play', 'nextSong', 'prevSong', 'stop', 'scrubToTime', 'updateTimeLapse']), {}, mapMutations(['changeVolume', 'updateCountCheck', 'updateAudioCurrentTime', 'updateLastSongId', 'changeAudioVolume', 'updateContinuousPlay']))
};

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
  mixins: [PlayerMixin],
  props: {
    songs: {
      type: Array,
      "default": [{
        audio: 'https://www.zapsplat.com/wp-content/uploads/2015/music-one/music_zapsplat_chiller.mp3',
        artist: 'Chiller',
        tittle: 'funky disco house',
        album: '',
        cover: 'https://i.pinimg.com/originals/a3/81/72/a3817233df6f98ecd03f399bbdc114f4.jpg'
      }]
    },
    playrWidth: {
      type: Number,
      "default": 300
    },
    continuousPlay: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      playerVolume: 1,
      playerProgressPercent: 0
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
  computed: Object.assign({}, mapState(['Songs', 'presentSongId', 'lastSongId', 'isPlaying', 'audio', 'isPaused', 'timeBufferSecs', 'timeBufferMins', 'currentTrackTime', 'lastRecordedTrackTime', 'countCheck', 'currentTrackDuration', 'color', 'progressPercent', 'continuousPlay', 'timeLapse', 'volume', 'playerIsBuffering']), {}, mapGetters({
    getVolume: 'getVolume'
  }))
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
      "src": _vm.Songs[_vm.presentSongId].cover
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
      "w": "25",
      "h": "25"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tw-inline-flex tw-flex-row tw-w-full tw-items-center tw-justify-between px-4 py-1"
  }, [_c('div', {
    staticClass: "tw-flex-1 tw-w-full"
  }, [_c('vue-slider', {
    attrs: {
      "width": 150,
      "duration": 0.1,
      "min": 0,
      "max": 1,
      "process": true,
      "interval": 0.01
    },
    model: {
      value: _vm.playerVolume,
      callback: function callback($$v) {
        _vm.playerVolume = $$v;
      },
      expression: "playerVolume"
    }
  })], 1)])])])])]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-44017dae_0", {
    source: ".pp[data-v-44017dae]{background:#232526;background:-webkit-linear-gradient(to right,rgba(35,37,38,.8),rgba(65,67,69,.8));background:linear-gradient(to right,rgba(35,37,38,.8),rgba(65,67,69,.8))}.pp-controls[data-v-44017dae]{background:#303942;background:-webkit-linear-gradient(to right,rgba(43,51,59,.95),rgba(41,50,60,.95));background:linear-gradient(to right,rgba(43,51,59,.95),rgba(41,50,60,.95))}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-44017dae";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

var XnsAudioPlayerSimple = normalizeComponent_1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

var state = {
  Songs: [{
    audio: 'https://www.zapsplat.com/wp-content/uploads/2015/music-one/music_zapsplat_chiller.mp3',
    artist: 'Chiller',
    tittle: 'funky disco house',
    album: '',
    cover: 'https://i.pinimg.com/originals/a3/81/72/a3817233df6f98ecd03f399bbdc114f4.jpg'
  }],
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
  currentTrackTime: 0,
  lastRecordedTrackTime: -1,
  countCheck: 0,
  currentTrackDuration: 0,
  playerIsBuffering: false,
  //
  color: '#8dff97',
  progressPercent: 0,
  continuousPlay: false
};
var getters = {
  getSongs: function getSongs(state) {
    return state.Songs;
  },
  getVolume: function getVolume(state) {
    return state.volume;
  },
  getProgressPercent: function getProgressPercent(state) {
    return state.progressPercent;
  },
  getTimeLapse: function getTimeLapse(state) {
    return state.timeLapse;
  }
};
var mutations = {
  addSongs: function addSongs(state, payload) {
    state.Songs = payload.songs;
  },
  updateLastSongId: function updateLastSongId(state, payload) {
    state.lastSongId = payload.lastSongId;
  },
  changeVolume: function changeVolume(state, payload) {
    state.volume = payload.volume;
    state.audio.volume = state.volume;
  },
  updateTimeLapse: function updateTimeLapse(state, payload) {
    state.timeLapse = payload.timeLapse;
  },
  updateCountCheck: function updateCountCheck(state, payload) {
    state.countCheck = payload.countCheck;
  },
  updateAudioCurrentTime: function updateAudioCurrentTime(state, payload) {
    state.audio.currentTime = payload.currentTime;
  },
  updateProgressPercent: function updateProgressPercent(state, payload) {
    state.audio.currentTime = payload.percent;
  },
  updateContinuousPlay: function updateContinuousPlay(state, payload) {
    state.continuousPlay = payload.status;
  },
  play: function play(state, payload
  /*songId = this.presentSongId, type = ''*/
  ) {
    state.progressPercent = 0; // reset playback progress

    if (state.isPlaying && !state.isPaused) {
      if (payload.type !== '') {
        // next/previous
        state.audio.src = state.Songs[payload.songId].audio;
        state.audio.play(); // initial track timer

        state.timeBufferMins = 0;
        state.currentTrackDuration = 0; // change player controls icons

        state.isPlaying = true;
        state.isPaused = false; // begin buffering of track

        state.playerIsBuffering = true;
        state.audio.addEventListener('loadeddata', function () {
          state.playerIsBuffering = false; // enough media to begin playback
        });
        state.audio.addEventListener('playing', function () {
          // Audio has started playing
          state.countCheck = 0;
          state.lastRecordedTrackTime = -1;
          state.timeBufferMins = 0;
        });
      } else {
        // pause
        state.audio.pause();
        state.isPlaying = false;
        state.isPaused = true;
      }
    } else if (!state.isPlaying && state.isPaused) {
      if (payload.type !== '') {
        // next/previous
        state.audio.src = state.Songs[payload.songId].audio;
        state.audio.play(); // initial track timer

        state.timeBufferMins = 0;
        state.currentTrackDuration = 0; // change player controls icons

        state.isPlaying = true;
        state.isPaused = false; // begin buffering of track

        state.playerIsBuffering = true;
        state.audio.addEventListener('loadeddata', function () {
          state.playerIsBuffering = false; // enough media to begin playback
        });
        state.audio.addEventListener('playing', function () {
          // player has moved to +payload.type+ song
          state.countCheck = 0;
          state.lastRecordedTrackTime = -1;
          state.timeBufferMins = 0;
        });
      } else {
        // resume playing
        state.audio.play(); // initial track timer

        state.timeBufferMins = 0;
        state.currentTrackDuration = 0; // change player controls icons

        state.isPlaying = true;
        state.isPaused = false; // begin buffering of track

        state.playerIsBuffering = true;
        state.audio.addEventListener('loadeddata', function () {
          state.playerIsBuffering = false; // enough media to begin playback
        });
        state.audio.addEventListener('playing', function () {
          // Audio has resumed playing
          state.countCheck = 0;
          state.lastRecordedTrackTime = -1;
          state.timeBufferMins = 0;
        });
      }
    } else if (!state.isPlaying && !state.isPaused) {
      state.audio.src = state.Songs[payload.songId].audio;
      state.audio.play(); // initial track timer

      state.timeBufferMins = 0;
      state.currentTrackDuration = 0; // change player controls icons

      state.isPlaying = true;
      state.isPaused = false; // begin buffering of track

      state.playerIsBuffering = true;
      state.audio.addEventListener('loadeddata', function () {
        state.playerIsBuffering = false; // enough media to begin playback
      });
      state.audio.addEventListener('playing', function () {
        // Audio has started playing for the first time
        state.countCheck = 0;
        state.lastRecordedTrackTime = -1;
        state.timeBufferMins = 0;
      });
    }
  },
  prevSong: function prevSong() {
    if (this.presentSongId - 1 >= 0) {
      this.presentSongId -= 1;
      this.play(this.presentSongId, 'prev');
    }

    this.countCheck = 0;
    this.lastRecordedTrackTime = -1;
    this.timeBufferMins = 0;
  },
  stop: function stop(state) {
    if (state.audio) {
      state.audio.load();
      state.isPlaying = false;
      state.isPaused = false;
      state.continuousPlay = false; // halt continuous play
    }

    state.countCheck = 1;
    state.lastRecordedTrackTime = -1;
    state.timeBufferMins = 0;
  },
  scrubToTime: function scrubToTime(state, payload) {
    state.audio.currentTime = payload.percent * state.audio.duration / 100;
  }
};
var actions = {
  viewShit: function viewShit(_ref) {
    var dispatch = _ref.dispatch,
        commit = _ref.commit,
        state = _ref.state;
    setTimeout(function () {
      state.currentTrackTime = parseInt(state.audio.currentTime);
      state.progressPercent = state.currentTrackTime / state.audio.duration * 100;

      if (state.countCheck === 0) {
        // initializer start check
        var ctdSecs = parseInt(state.audio.duration) % 60 < 10 ? '0' + parseInt(state.audio.duration) % 60 : parseInt(state.audio.duration) % 60;
        state.currentTrackDuration = isNaN(state.audio.duration) ? '0 : 00' : parseInt(parseInt(state.audio.duration) / 60) + ' : ' + ctdSecs; // '0 : 00' displayed to disable showing NaN NaN
      }

      if (state.currentTrackTime !== state.lastRecordedTrackTime) {
        if (parseInt(state.audio.currentTime) >= 60) {
          state.timeBufferMins = Math.floor(state.audio.currentTime / 60);
          state.timeBufferSecs = parseInt(Math.floor(state.audio.currentTime)) % 60;
        } else {
          state.timeBufferSecs = parseInt(Math.floor(state.audio.currentTime));
        }

        state.duration -= 1; // state.timeLapse = !state.timeLapse;

        commit('updateTimeLapse', {
          timeLapse: true
        }); // continue time lapse

        state.countCheck += 1; //

        state.lastRecordedTrackTime = parseInt(Math.floor(state.audio.currentTime));
      } else {
        if (!state.audio.paused) {
          state.isPlaying = true;
          state.isPaused = false;
        } else {
          state.timeBufferMins = 0;
          state.timeBufferSecs = 0;
          state.timeLapse = false; // stop time lapse

          state.countCheck = 0; // initializer end

          state.isPlaying = false;
          state.isPaused = false;

          if (state.continuousPlay) {
            // if continuous play === true
            dispatch('nextSong');
          }
        }
      }
    }, 1000);
  },
  playSong: function playSong(_ref2, songId) {
    var dispatch = _ref2.dispatch,
        state = _ref2.state;
    state.progressPercent = 0; // reset playback progress

    state.presentSongId = songId;
    state.audio.src = state.Songs[songId].audio;
    state.audio.play(); // initial track timer

    state.timeBufferMins = 0;
    state.currentTrackDuration = 0; // change player controls icons

    state.isPlaying = true;
    state.isPaused = false; // begin buffering of track

    state.playerIsBuffering = true;
    state.audio.addEventListener('loadeddata', function () {
      state.playerIsBuffering = false; // enough media to begin playback
    });
    state.audio.addEventListener('playing', function () {
      // Selected song has started playing
      state.countCheck = 0;
      state.lastRecordedTrackTime = -1;
      state.timeBufferMins = 0;
      dispatch('viewShit');
    });
  },
  play: function play(_ref3) {
    var dispatch = _ref3.dispatch,
        commit = _ref3.commit,
        state = _ref3.state;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    commit('play', {
      songId: state.presentSongId,
      type: type
    });
    dispatch('viewShit');
  },
  igniteNextSong: function igniteNextSong(_ref4) {
    var dispatch = _ref4.dispatch,
        state = _ref4.state;
    return new Promise(function (resolve) {
      setTimeout(function () {
        if (state.presentSongId + 1 <= state.lastSongId) {
          state.presentSongId += 1;
          dispatch('play', 'next');
        } else {
          if (state.continuousPlay) {
            // if continuous play === true
            state.presentSongId = 0;
            dispatch('play'); // restart the playlist
          } // We\'ve arrived at the end of the playlist!

        }

        state.countCheck = 0;
        state.lastRecordedTrackTime = -1;
        state.timeBufferMins = 0;
        resolve();
      }, 10);
    });
  },
  nextSong: function nextSong(_ref5) {
    var dispatch = _ref5.dispatch;
    return dispatch('igniteNextSong').then(function () {
      dispatch('viewShit');
    });
  },
  ignitePrevSong: function ignitePrevSong(_ref6) {
    var dispatch = _ref6.dispatch,
        state = _ref6.state;
    return new Promise(function (resolve) {
      setTimeout(function () {
        if (state.presentSongId - 1 >= 0) {
          state.presentSongId -= 1;
          dispatch('play', 'prev');
        }

        state.countCheck = 0;
        state.lastRecordedTrackTime = -1;
        state.timeBufferMins = 0;
        resolve();
      }, 10);
    });
  },
  prevSong: function prevSong(_ref7) {
    var dispatch = _ref7.dispatch;
    return dispatch('ignitePrevSong').then(function () {
      dispatch('viewShit');
    });
  },
  igniteScrubToTime: function igniteScrubToTime(_ref8) {
    var commit = _ref8.commit;
    var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return new Promise(function (resolve) {
      setTimeout(function () {
        commit('scrubToTime', {
          percent: percent
        });
        resolve();
      }, 10);
    });
  },
  scrubToTime: function scrubToTime(_ref9) {
    var dispatch = _ref9.dispatch;
    var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return dispatch('igniteScrubToTime', percent).then(function () {
      dispatch('viewShit');
    });
  },
  updateTimeLapse: function updateTimeLapse(_ref10, timeLapse) {
    var dispatch = _ref10.dispatch,
        commit = _ref10.commit;

    if (!timeLapse) {
      commit('updateTimeLapse', {
        timeLapse: timeLapse
      });
      dispatch('viewShit');
    }
  },
  stop: function stop(_ref11) {
    var commit = _ref11.commit;
    commit('stop');
  }
};
var xnsPlayerStore = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};

var index = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // register component globally
    // https://vuejs.org/v2/guide/components-registration.html
    if (!options.store) console.log('Please provide a store!!');
    Vue.component("xns-audio-player-simple", XnsAudioPlayerSimple);
    options.store.registerModule('XnsPlayerStore', xnsPlayerStore);
  }
};

module.exports = index;
