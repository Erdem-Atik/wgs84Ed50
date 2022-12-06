// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hmjPX":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "cdf5e83d3255f336";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"igcvL":[function(require,module,exports) {
var _geolib = require("geolib");
const convertarea = document.querySelector(".convert-area");
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};
console.log(Math.radians(-0.4738 / 3600));
const matrix1 = [
    [
        1,
        Math.radians(-0.4738 / 3600),
        Math.radians(-0.0003 / 3600)
    ],
    [
        Math.radians(0.4738 / 3600),
        1,
        Math.radians(-0.0183 / 3600)
    ],
    [
        Math.radians(0.0003 / 3600),
        Math.radians(0.0183 / 3600),
        1
    ]
];
console.log(typeof Math.radians(-0.4738 / 3600));
const matrix2 = [
    3869416.913,
    2830423.6819,
    4192997.6984
];
console.log(3869416.913 + Math.radians(-0.4738 / 3600) * 2830423.6819 + Math.radians(-0.0003 / 3600) * 4192997.6984);
console.log(matrix1);
console.log(matrix2);
const conParamtr = math.matrix(matrix1);
const convPara2 = math.matrix(matrix2);
let result = math.multiply(conParamtr, convPara2);
console.log(result._data);

},{"geolib":"frreN"}],"frreN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _exportNames = {
    computeDestinationPoint: true,
    convertArea: true,
    convertDistance: true,
    convertSpeed: true,
    decimalToSexagesimal: true,
    findNearest: true,
    getAreaOfPolygon: true,
    getBounds: true,
    getBoundsOfDistance: true,
    getCenter: true,
    getCenterOfBounds: true,
    getCompassDirection: true,
    getCoordinateKey: true,
    getCoordinateKeys: true,
    getDistance: true,
    getDistanceFromLine: true,
    getGreatCircleBearing: true,
    getLatitude: true,
    getLongitude: true,
    getPathLength: true,
    getPreciseDistance: true,
    getRhumbLineBearing: true,
    getRoughCompassDirection: true,
    getSpeed: true,
    isDecimal: true,
    isPointInLine: true,
    isPointInPolygon: true,
    isPointNearLine: true,
    isPointWithinRadius: true,
    isSexagesimal: true,
    isValidCoordinate: true,
    isValidLatitude: true,
    isValidLongitude: true,
    orderByDistance: true,
    sexagesimalToDecimal: true,
    toDecimal: true,
    toRad: true,
    toDeg: true,
    wktToPolygon: true
};
Object.defineProperty(exports, "computeDestinationPoint", {
    enumerable: true,
    get: function get() {
        return _computeDestinationPoint.default;
    }
});
Object.defineProperty(exports, "convertArea", {
    enumerable: true,
    get: function get() {
        return _convertArea.default;
    }
});
Object.defineProperty(exports, "convertDistance", {
    enumerable: true,
    get: function get() {
        return _convertDistance.default;
    }
});
Object.defineProperty(exports, "convertSpeed", {
    enumerable: true,
    get: function get() {
        return _convertSpeed.default;
    }
});
Object.defineProperty(exports, "decimalToSexagesimal", {
    enumerable: true,
    get: function get() {
        return _decimalToSexagesimal.default;
    }
});
Object.defineProperty(exports, "findNearest", {
    enumerable: true,
    get: function get() {
        return _findNearest.default;
    }
});
Object.defineProperty(exports, "getAreaOfPolygon", {
    enumerable: true,
    get: function get() {
        return _getAreaOfPolygon.default;
    }
});
Object.defineProperty(exports, "getBounds", {
    enumerable: true,
    get: function get() {
        return _getBounds.default;
    }
});
Object.defineProperty(exports, "getBoundsOfDistance", {
    enumerable: true,
    get: function get() {
        return _getBoundsOfDistance.default;
    }
});
Object.defineProperty(exports, "getCenter", {
    enumerable: true,
    get: function get() {
        return _getCenter.default;
    }
});
Object.defineProperty(exports, "getCenterOfBounds", {
    enumerable: true,
    get: function get() {
        return _getCenterOfBounds.default;
    }
});
Object.defineProperty(exports, "getCompassDirection", {
    enumerable: true,
    get: function get() {
        return _getCompassDirection.default;
    }
});
Object.defineProperty(exports, "getCoordinateKey", {
    enumerable: true,
    get: function get() {
        return _getCoordinateKey.default;
    }
});
Object.defineProperty(exports, "getCoordinateKeys", {
    enumerable: true,
    get: function get() {
        return _getCoordinateKeys.default;
    }
});
Object.defineProperty(exports, "getDistance", {
    enumerable: true,
    get: function get() {
        return _getDistance.default;
    }
});
Object.defineProperty(exports, "getDistanceFromLine", {
    enumerable: true,
    get: function get() {
        return _getDistanceFromLine.default;
    }
});
Object.defineProperty(exports, "getGreatCircleBearing", {
    enumerable: true,
    get: function get() {
        return _getGreatCircleBearing.default;
    }
});
Object.defineProperty(exports, "getLatitude", {
    enumerable: true,
    get: function get() {
        return _getLatitude.default;
    }
});
Object.defineProperty(exports, "getLongitude", {
    enumerable: true,
    get: function get() {
        return _getLongitude.default;
    }
});
Object.defineProperty(exports, "getPathLength", {
    enumerable: true,
    get: function get() {
        return _getPathLength.default;
    }
});
Object.defineProperty(exports, "getPreciseDistance", {
    enumerable: true,
    get: function get() {
        return _getPreciseDistance.default;
    }
});
Object.defineProperty(exports, "getRhumbLineBearing", {
    enumerable: true,
    get: function get() {
        return _getRhumbLineBearing.default;
    }
});
Object.defineProperty(exports, "getRoughCompassDirection", {
    enumerable: true,
    get: function get() {
        return _getRoughCompassDirection.default;
    }
});
Object.defineProperty(exports, "getSpeed", {
    enumerable: true,
    get: function get() {
        return _getSpeed.default;
    }
});
Object.defineProperty(exports, "isDecimal", {
    enumerable: true,
    get: function get() {
        return _isDecimal.default;
    }
});
Object.defineProperty(exports, "isPointInLine", {
    enumerable: true,
    get: function get() {
        return _isPointInLine.default;
    }
});
Object.defineProperty(exports, "isPointInPolygon", {
    enumerable: true,
    get: function get() {
        return _isPointInPolygon.default;
    }
});
Object.defineProperty(exports, "isPointNearLine", {
    enumerable: true,
    get: function get() {
        return _isPointNearLine.default;
    }
});
Object.defineProperty(exports, "isPointWithinRadius", {
    enumerable: true,
    get: function get() {
        return _isPointWithinRadius.default;
    }
});
Object.defineProperty(exports, "isSexagesimal", {
    enumerable: true,
    get: function get() {
        return _isSexagesimal.default;
    }
});
Object.defineProperty(exports, "isValidCoordinate", {
    enumerable: true,
    get: function get() {
        return _isValidCoordinate.default;
    }
});
Object.defineProperty(exports, "isValidLatitude", {
    enumerable: true,
    get: function get() {
        return _isValidLatitude.default;
    }
});
Object.defineProperty(exports, "isValidLongitude", {
    enumerable: true,
    get: function get() {
        return _isValidLongitude.default;
    }
});
Object.defineProperty(exports, "orderByDistance", {
    enumerable: true,
    get: function get() {
        return _orderByDistance.default;
    }
});
Object.defineProperty(exports, "sexagesimalToDecimal", {
    enumerable: true,
    get: function get() {
        return _sexagesimalToDecimal.default;
    }
});
Object.defineProperty(exports, "toDecimal", {
    enumerable: true,
    get: function get() {
        return _toDecimal.default;
    }
});
Object.defineProperty(exports, "toRad", {
    enumerable: true,
    get: function get() {
        return _toRad.default;
    }
});
Object.defineProperty(exports, "toDeg", {
    enumerable: true,
    get: function get() {
        return _toDeg.default;
    }
});
Object.defineProperty(exports, "wktToPolygon", {
    enumerable: true,
    get: function get() {
        return _wktToPolygon.default;
    }
});
var _computeDestinationPoint = _interopRequireDefault(require("./computeDestinationPoint"));
var _convertArea = _interopRequireDefault(require("./convertArea"));
var _convertDistance = _interopRequireDefault(require("./convertDistance"));
var _convertSpeed = _interopRequireDefault(require("./convertSpeed"));
var _decimalToSexagesimal = _interopRequireDefault(require("./decimalToSexagesimal"));
var _findNearest = _interopRequireDefault(require("./findNearest"));
var _getAreaOfPolygon = _interopRequireDefault(require("./getAreaOfPolygon"));
var _getBounds = _interopRequireDefault(require("./getBounds"));
var _getBoundsOfDistance = _interopRequireDefault(require("./getBoundsOfDistance"));
var _getCenter = _interopRequireDefault(require("./getCenter"));
var _getCenterOfBounds = _interopRequireDefault(require("./getCenterOfBounds"));
var _getCompassDirection = _interopRequireDefault(require("./getCompassDirection"));
var _getCoordinateKey = _interopRequireDefault(require("./getCoordinateKey"));
var _getCoordinateKeys = _interopRequireDefault(require("./getCoordinateKeys"));
var _getDistance = _interopRequireDefault(require("./getDistance"));
var _getDistanceFromLine = _interopRequireDefault(require("./getDistanceFromLine"));
var _getGreatCircleBearing = _interopRequireDefault(require("./getGreatCircleBearing"));
var _getLatitude = _interopRequireDefault(require("./getLatitude"));
var _getLongitude = _interopRequireDefault(require("./getLongitude"));
var _getPathLength = _interopRequireDefault(require("./getPathLength"));
var _getPreciseDistance = _interopRequireDefault(require("./getPreciseDistance"));
var _getRhumbLineBearing = _interopRequireDefault(require("./getRhumbLineBearing"));
var _getRoughCompassDirection = _interopRequireDefault(require("./getRoughCompassDirection"));
var _getSpeed = _interopRequireDefault(require("./getSpeed"));
var _isDecimal = _interopRequireDefault(require("./isDecimal"));
var _isPointInLine = _interopRequireDefault(require("./isPointInLine"));
var _isPointInPolygon = _interopRequireDefault(require("./isPointInPolygon"));
var _isPointNearLine = _interopRequireDefault(require("./isPointNearLine"));
var _isPointWithinRadius = _interopRequireDefault(require("./isPointWithinRadius"));
var _isSexagesimal = _interopRequireDefault(require("./isSexagesimal"));
var _isValidCoordinate = _interopRequireDefault(require("./isValidCoordinate"));
var _isValidLatitude = _interopRequireDefault(require("./isValidLatitude"));
var _isValidLongitude = _interopRequireDefault(require("./isValidLongitude"));
var _orderByDistance = _interopRequireDefault(require("./orderByDistance"));
var _sexagesimalToDecimal = _interopRequireDefault(require("./sexagesimalToDecimal"));
var _toDecimal = _interopRequireDefault(require("./toDecimal"));
var _toRad = _interopRequireDefault(require("./toRad"));
var _toDeg = _interopRequireDefault(require("./toDeg"));
var _wktToPolygon = _interopRequireDefault(require("./wktToPolygon"));
var _constants = require("./constants");
Object.keys(_constants).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _constants[key];
        }
    });
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

},{"./computeDestinationPoint":"87shV","./convertArea":"kI7wh","./convertDistance":"9FCSD","./convertSpeed":"l4itb","./decimalToSexagesimal":"6R4BV","./findNearest":"366Ob","./getAreaOfPolygon":"emMrL","./getBounds":"gOj8n","./getBoundsOfDistance":"lpZ4O","./getCenter":"7VmT0","./getCenterOfBounds":"kWzGo","./getCompassDirection":"1GfEX","./getCoordinateKey":"6mcSK","./getCoordinateKeys":"kiZpv","./getDistance":"ca9y0","./getDistanceFromLine":"lMzTh","./getGreatCircleBearing":"aeddz","./getLatitude":"hVRIT","./getLongitude":"bk2u3","./getPathLength":"1YGH5","./getPreciseDistance":"buSWz","./getRhumbLineBearing":"cAv3N","./getRoughCompassDirection":"5Sdbk","./getSpeed":"4qco8","./isDecimal":"7L1aD","./isPointInLine":"8Q9nL","./isPointInPolygon":"h2jb3","./isPointNearLine":"gG8bB","./isPointWithinRadius":"btyWI","./isSexagesimal":"3QaAZ","./isValidCoordinate":"9KZPq","./isValidLatitude":"6cWg0","./isValidLongitude":"aSXvw","./orderByDistance":"etEuk","./sexagesimalToDecimal":"3oahw","./toDecimal":"ccaYo","./toRad":"8ACzx","./toDeg":"bKZ7R","./wktToPolygon":"9moBo","./constants":"7V0dJ"}],"87shV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getLatitude = _interopRequireDefault(require("./getLatitude"));
var _getLongitude = _interopRequireDefault(require("./getLongitude"));
var _toRad = _interopRequireDefault(require("./toRad"));
var _toDeg = _interopRequireDefault(require("./toDeg"));
var _constants = require("./constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var computeDestinationPoint = function computeDestinationPoint(start, distance, bearing) {
    var radius = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 6371000;
    var lat = (0, _getLatitude.default)(start);
    var lng = (0, _getLongitude.default)(start);
    var delta = distance / radius;
    var theta = (0, _toRad.default)(bearing);
    var phi1 = (0, _toRad.default)(lat);
    var lambda1 = (0, _toRad.default)(lng);
    var phi2 = Math.asin(Math.sin(phi1) * Math.cos(delta) + Math.cos(phi1) * Math.sin(delta) * Math.cos(theta));
    var lambda2 = lambda1 + Math.atan2(Math.sin(theta) * Math.sin(delta) * Math.cos(phi1), Math.cos(delta) - Math.sin(phi1) * Math.sin(phi2));
    var longitude = (0, _toDeg.default)(lambda2);
    if (longitude < _constants.MINLON || longitude > _constants.MAXLON) {
        lambda2 = (lambda2 + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
        longitude = (0, _toDeg.default)(lambda2);
    }
    return {
        latitude: (0, _toDeg.default)(phi2),
        longitude: longitude
    };
};
var _default = computeDestinationPoint;
exports.default = _default;

},{"./getLatitude":"hVRIT","./getLongitude":"bk2u3","./toRad":"8ACzx","./toDeg":"bKZ7R","./constants":"7V0dJ"}],"hVRIT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
var _getCoordinateKey = _interopRequireDefault(require("./getCoordinateKey"));
var _toDecimal = _interopRequireDefault(require("./toDecimal"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getLatitude = function getLatitude(point, raw) {
    var latKey = (0, _getCoordinateKey.default)(point, _constants.latitudeKeys);
    if (typeof latKey === "undefined" || latKey === null) return;
    var value = point[latKey];
    return raw === true ? value : (0, _toDecimal.default)(value);
};
var _default = getLatitude;
exports.default = _default;

},{"./constants":"7V0dJ","./getCoordinateKey":"6mcSK","./toDecimal":"ccaYo"}],"7V0dJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.areaConversion = exports.timeConversion = exports.distanceConversion = exports.altitudeKeys = exports.latitudeKeys = exports.longitudeKeys = exports.MAXLON = exports.MINLON = exports.MAXLAT = exports.MINLAT = exports.earthRadius = exports.sexagesimalPattern = void 0;
var sexagesimalPattern = /^([0-9]{1,3})°\s*([0-9]{1,3}(?:\.(?:[0-9]{1,}))?)['′]\s*(([0-9]{1,3}(\.([0-9]{1,}))?)["″]\s*)?([NEOSW]?)$/;
exports.sexagesimalPattern = sexagesimalPattern;
var earthRadius = 6378137;
exports.earthRadius = earthRadius;
var MINLAT = -90;
exports.MINLAT = MINLAT;
var MAXLAT = 90;
exports.MAXLAT = MAXLAT;
var MINLON = -180;
exports.MINLON = MINLON;
var MAXLON = 180;
exports.MAXLON = MAXLON;
var longitudeKeys = [
    "lng",
    "lon",
    "longitude",
    0
];
exports.longitudeKeys = longitudeKeys;
var latitudeKeys = [
    "lat",
    "latitude",
    1
];
exports.latitudeKeys = latitudeKeys;
var altitudeKeys = [
    "alt",
    "altitude",
    "elevation",
    "elev",
    2
];
exports.altitudeKeys = altitudeKeys;
var distanceConversion = {
    m: 1,
    km: 0.001,
    cm: 100,
    mm: 1000,
    mi: 1 / 1609.344,
    sm: 1 / 1852.216,
    ft: 100 / 30.48,
    in: 100 / 2.54,
    yd: 1 / 0.9144
};
exports.distanceConversion = distanceConversion;
var timeConversion = {
    m: 60,
    h: 3600,
    d: 86400
};
exports.timeConversion = timeConversion;
var areaConversion = {
    m2: 1,
    km2: 0.000001,
    ha: 0.0001,
    a: 0.01,
    ft2: 10.763911,
    yd2: 1.19599,
    in2: 1550.0031
};
exports.areaConversion = areaConversion;
areaConversion.sqm = areaConversion.m2;
areaConversion.sqkm = areaConversion.km2;
areaConversion.sqft = areaConversion.ft2;
areaConversion.sqyd = areaConversion.yd2;
areaConversion.sqin = areaConversion.in2;

},{}],"6mcSK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var getCoordinateKey = function getCoordinateKey(point, keysToLookup) {
    return keysToLookup.reduce(function(foundKey, key) {
        if (typeof point === "undefined" || point === null) throw new Error("'".concat(point, "' is no valid coordinate."));
        if (Object.prototype.hasOwnProperty.call(point, key) && typeof key !== "undefined" && typeof foundKey === "undefined") {
            foundKey = key;
            return key;
        }
        return foundKey;
    }, undefined);
};
var _default = getCoordinateKey;
exports.default = _default;

},{}],"ccaYo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _isDecimal = _interopRequireDefault(require("./isDecimal"));
var _isSexagesimal = _interopRequireDefault(require("./isSexagesimal"));
var _sexagesimalToDecimal = _interopRequireDefault(require("./sexagesimalToDecimal"));
var _isValidCoordinate = _interopRequireDefault(require("./isValidCoordinate"));
var _getCoordinateKeys = _interopRequireDefault(require("./getCoordinateKeys"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var toDecimal = function toDecimal(value) {
    if ((0, _isDecimal.default)(value)) return Number(value);
    if ((0, _isSexagesimal.default)(value)) return (0, _sexagesimalToDecimal.default)(value);
    if ((0, _isValidCoordinate.default)(value)) {
        var keys = (0, _getCoordinateKeys.default)(value);
        if (Array.isArray(value)) return value.map(function(v, index) {
            return [
                0,
                1
            ].includes(index) ? toDecimal(v) : v;
        });
        return _objectSpread(_objectSpread(_objectSpread({}, value), keys.latitude && _defineProperty({}, keys.latitude, toDecimal(value[keys.latitude]))), keys.longitude && _defineProperty({}, keys.longitude, toDecimal(value[keys.longitude])));
    }
    if (Array.isArray(value)) return value.map(function(point) {
        return (0, _isValidCoordinate.default)(point) ? toDecimal(point) : point;
    });
    return value;
};
var _default = toDecimal;
exports.default = _default;

},{"./isDecimal":"7L1aD","./isSexagesimal":"3QaAZ","./sexagesimalToDecimal":"3oahw","./isValidCoordinate":"9KZPq","./getCoordinateKeys":"kiZpv"}],"7L1aD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var isDecimal = function isDecimal(value) {
    var checkedValue = value.toString().trim();
    if (isNaN(parseFloat(checkedValue))) return false;
    return parseFloat(checkedValue) === Number(checkedValue);
};
var _default = isDecimal;
exports.default = _default;

},{}],"3QaAZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
var isSexagesimal = function isSexagesimal(value) {
    return _constants.sexagesimalPattern.test(value.toString().trim());
};
var _default = isSexagesimal;
exports.default = _default;

},{"./constants":"7V0dJ"}],"3oahw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
var sexagesimalToDecimal = function sexagesimalToDecimal(sexagesimal) {
    var data = new RegExp(_constants.sexagesimalPattern).exec(sexagesimal.toString().trim());
    if (typeof data === "undefined" || data === null) throw new Error("Given value is not in sexagesimal format");
    var min = Number(data[2]) / 60 || 0;
    var sec = Number(data[4]) / 3600 || 0;
    var decimal = parseFloat(data[1]) + min + sec;
    return [
        "S",
        "W"
    ].includes(data[7]) ? -decimal : decimal;
};
var _default = sexagesimalToDecimal;
exports.default = _default;

},{"./constants":"7V0dJ"}],"9KZPq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getCoordinateKeys2 = _interopRequireDefault(require("./getCoordinateKeys"));
var _isValidLatitude = _interopRequireDefault(require("./isValidLatitude"));
var _isValidLongitude = _interopRequireDefault(require("./isValidLongitude"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isValidCoordinate = function isValidCoordinate(point) {
    var _getCoordinateKeys = (0, _getCoordinateKeys2.default)(point), latitude = _getCoordinateKeys.latitude, longitude = _getCoordinateKeys.longitude;
    if (Array.isArray(point) && point.length >= 2) return (0, _isValidLongitude.default)(point[0]) && (0, _isValidLatitude.default)(point[1]);
    if (typeof latitude === "undefined" || typeof longitude === "undefined") return false;
    var lon = point[longitude];
    var lat = point[latitude];
    if (typeof lat === "undefined" || typeof lon === "undefined") return false;
    if ((0, _isValidLatitude.default)(lat) === false || (0, _isValidLongitude.default)(lon) === false) return false;
    return true;
};
var _default = isValidCoordinate;
exports.default = _default;

},{"./getCoordinateKeys":"kiZpv","./isValidLatitude":"6cWg0","./isValidLongitude":"aSXvw"}],"kiZpv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
var _getCoordinateKey = _interopRequireDefault(require("./getCoordinateKey"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var getCoordinateKeys = function getCoordinateKeys(point) {
    var keysToLookup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        longitude: _constants.longitudeKeys,
        latitude: _constants.latitudeKeys,
        altitude: _constants.altitudeKeys
    };
    var longitude = (0, _getCoordinateKey.default)(point, keysToLookup.longitude);
    var latitude = (0, _getCoordinateKey.default)(point, keysToLookup.latitude);
    var altitude = (0, _getCoordinateKey.default)(point, keysToLookup.altitude);
    return _objectSpread({
        latitude: latitude,
        longitude: longitude
    }, altitude ? {
        altitude: altitude
    } : {});
};
var _default = getCoordinateKeys;
exports.default = _default;

},{"./constants":"7V0dJ","./getCoordinateKey":"6mcSK"}],"6cWg0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _isDecimal = _interopRequireDefault(require("./isDecimal"));
var _isSexagesimal = _interopRequireDefault(require("./isSexagesimal"));
var _sexagesimalToDecimal = _interopRequireDefault(require("./sexagesimalToDecimal"));
var _constants = require("./constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isValidLatitude = function isValidLatitude(value) {
    if ((0, _isDecimal.default)(value)) {
        if (parseFloat(value) > _constants.MAXLAT || value < _constants.MINLAT) return false;
        return true;
    }
    if ((0, _isSexagesimal.default)(value)) return isValidLatitude((0, _sexagesimalToDecimal.default)(value));
    return false;
};
var _default = isValidLatitude;
exports.default = _default;

},{"./isDecimal":"7L1aD","./isSexagesimal":"3QaAZ","./sexagesimalToDecimal":"3oahw","./constants":"7V0dJ"}],"aSXvw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _isDecimal = _interopRequireDefault(require("./isDecimal"));
var _isSexagesimal = _interopRequireDefault(require("./isSexagesimal"));
var _sexagesimalToDecimal = _interopRequireDefault(require("./sexagesimalToDecimal"));
var _constants = require("./constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isValidLongitude = function isValidLongitude(value) {
    if ((0, _isDecimal.default)(value)) {
        if (parseFloat(value) > _constants.MAXLON || value < _constants.MINLON) return false;
        return true;
    }
    if ((0, _isSexagesimal.default)(value)) return isValidLongitude((0, _sexagesimalToDecimal.default)(value));
    return false;
};
var _default = isValidLongitude;
exports.default = _default;

},{"./isDecimal":"7L1aD","./isSexagesimal":"3QaAZ","./sexagesimalToDecimal":"3oahw","./constants":"7V0dJ"}],"bk2u3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
var _getCoordinateKey = _interopRequireDefault(require("./getCoordinateKey"));
var _toDecimal = _interopRequireDefault(require("./toDecimal"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getLongitude = function getLongitude(point, raw) {
    var latKey = (0, _getCoordinateKey.default)(point, _constants.longitudeKeys);
    if (typeof latKey === "undefined" || latKey === null) return;
    var value = point[latKey];
    return raw === true ? value : (0, _toDecimal.default)(value);
};
var _default = getLongitude;
exports.default = _default;

},{"./constants":"7V0dJ","./getCoordinateKey":"6mcSK","./toDecimal":"ccaYo"}],"8ACzx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var toRad = function toRad(value) {
    return value * Math.PI / 180;
};
var _default = toRad;
exports.default = _default;

},{}],"bKZ7R":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var toDeg = function toDeg(value) {
    return value * 180 / Math.PI;
};
var _default = toDeg;
exports.default = _default;

},{}],"kI7wh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
var convertArea = function convertArea(squareMeters) {
    var targetUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "m";
    var factor = _constants.areaConversion[targetUnit];
    if (factor) return squareMeters * factor;
    throw new Error("Invalid unit used for area conversion.");
};
var _default = convertArea;
exports.default = _default;

},{"./constants":"7V0dJ"}],"9FCSD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
var convertDistance = function convertDistance(meters) {
    var targetUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "m";
    var factor = _constants.distanceConversion[targetUnit];
    if (factor) return meters * factor;
    throw new Error("Invalid unit used for distance conversion.");
};
var _default = convertDistance;
exports.default = _default;

},{"./constants":"7V0dJ"}],"l4itb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
var convertSpeed = function convertSpeed(metersPerSecond) {
    var targetUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "kmh";
    switch(targetUnit){
        case "kmh":
            return metersPerSecond * _constants.timeConversion.h * _constants.distanceConversion.km;
        case "mph":
            return metersPerSecond * _constants.timeConversion.h * _constants.distanceConversion.mi;
        default:
            return metersPerSecond;
    }
};
var _default = convertSpeed;
exports.default = _default;

},{"./constants":"7V0dJ"}],"6R4BV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
var imprecise = function imprecise(number) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var factor = Math.pow(10, decimals);
    return Math.round(number * factor) / factor;
};
var decimal2sexagesimalNext = function decimal2sexagesimalNext(decimal) {
    var _decimal$toString$spl = decimal.toString().split("."), _decimal$toString$spl2 = _slicedToArray(_decimal$toString$spl, 2), pre = _decimal$toString$spl2[0], post = _decimal$toString$spl2[1];
    var deg = Math.abs(Number(pre));
    var min0 = Number("0." + (post || 0)) * 60;
    var sec0 = min0.toString().split(".");
    var min = Math.floor(min0);
    var sec = imprecise(Number("0." + (sec0[1] || 0)) * 60).toString();
    var _sec$split = sec.split("."), _sec$split2 = _slicedToArray(_sec$split, 2), secPreDec = _sec$split2[0], _sec$split2$ = _sec$split2[1], secDec = _sec$split2$ === void 0 ? "0" : _sec$split2$;
    return deg + "\xb0 " + min.toString().padStart(2, "0") + "' " + secPreDec.padStart(2, "0") + "." + secDec.padEnd(1, "0") + '"';
};
var _default = decimal2sexagesimalNext;
exports.default = _default;

},{}],"366Ob":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _orderByDistance = _interopRequireDefault(require("./orderByDistance"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var findNearest = function findNearest(point, coords) {
    return (0, _orderByDistance.default)(point, coords)[0];
};
var _default = findNearest;
exports.default = _default;

},{"./orderByDistance":"etEuk"}],"etEuk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getDistance = _interopRequireDefault(require("./getDistance"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var orderByDistance = function orderByDistance(point, coords) {
    var distanceFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _getDistance.default;
    distanceFn = typeof distanceFn === "function" ? distanceFn : _getDistance.default;
    return coords.slice().sort(function(a, b) {
        return distanceFn(point, a) - distanceFn(point, b);
    });
};
var _default = orderByDistance;
exports.default = _default;

},{"./getDistance":"ca9y0"}],"ca9y0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getLatitude = _interopRequireDefault(require("./getLatitude"));
var _getLongitude = _interopRequireDefault(require("./getLongitude"));
var _toRad = _interopRequireDefault(require("./toRad"));
var _robustAcos = _interopRequireDefault(require("./robustAcos"));
var _constants = require("./constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getDistance = function getDistance(from, to) {
    var accuracy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    accuracy = typeof accuracy !== "undefined" && !isNaN(accuracy) ? accuracy : 1;
    var fromLat = (0, _getLatitude.default)(from);
    var fromLon = (0, _getLongitude.default)(from);
    var toLat = (0, _getLatitude.default)(to);
    var toLon = (0, _getLongitude.default)(to);
    var distance = Math.acos((0, _robustAcos.default)(Math.sin((0, _toRad.default)(toLat)) * Math.sin((0, _toRad.default)(fromLat)) + Math.cos((0, _toRad.default)(toLat)) * Math.cos((0, _toRad.default)(fromLat)) * Math.cos((0, _toRad.default)(fromLon) - (0, _toRad.default)(toLon)))) * _constants.earthRadius;
    return Math.round(distance / accuracy) * accuracy;
};
var _default = getDistance;
exports.default = _default;

},{"./getLatitude":"hVRIT","./getLongitude":"bk2u3","./toRad":"8ACzx","./robustAcos":"cJtdB","./constants":"7V0dJ"}],"cJtdB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var robustAcos = function robustAcos(value) {
    if (value > 1) return 1;
    if (value < -1) return -1;
    return value;
};
var _default = robustAcos;
exports.default = _default;

},{}],"emMrL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _toRad = _interopRequireDefault(require("./toRad"));
var _getLatitude = _interopRequireDefault(require("./getLatitude"));
var _getLongitude = _interopRequireDefault(require("./getLongitude"));
var _constants = require("./constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getAreaOfPolygon = function getAreaOfPolygon(points) {
    var area = 0;
    if (points.length > 2) {
        var lowerIndex;
        var middleIndex;
        var upperIndex;
        for(var i = 0; i < points.length; i++){
            if (i === points.length - 2) {
                lowerIndex = points.length - 2;
                middleIndex = points.length - 1;
                upperIndex = 0;
            } else if (i === points.length - 1) {
                lowerIndex = points.length - 1;
                middleIndex = 0;
                upperIndex = 1;
            } else {
                lowerIndex = i;
                middleIndex = i + 1;
                upperIndex = i + 2;
            }
            var p1lon = (0, _getLongitude.default)(points[lowerIndex]);
            var p2lat = (0, _getLatitude.default)(points[middleIndex]);
            var p3lon = (0, _getLongitude.default)(points[upperIndex]);
            area += ((0, _toRad.default)(p3lon) - (0, _toRad.default)(p1lon)) * Math.sin((0, _toRad.default)(p2lat));
        }
        area = area * _constants.earthRadius * _constants.earthRadius / 2;
    }
    return Math.abs(area);
};
var _default = getAreaOfPolygon;
exports.default = _default;

},{"./toRad":"8ACzx","./getLatitude":"hVRIT","./getLongitude":"bk2u3","./constants":"7V0dJ"}],"gOj8n":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getLatitude = _interopRequireDefault(require("./getLatitude"));
var _getLongitude = _interopRequireDefault(require("./getLongitude"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getBounds = function getBounds(points) {
    if (Array.isArray(points) === false || points.length === 0) throw new Error("No points were given.");
    return points.reduce(function(stats, point) {
        var latitude = (0, _getLatitude.default)(point);
        var longitude = (0, _getLongitude.default)(point);
        return {
            maxLat: Math.max(latitude, stats.maxLat),
            minLat: Math.min(latitude, stats.minLat),
            maxLng: Math.max(longitude, stats.maxLng),
            minLng: Math.min(longitude, stats.minLng)
        };
    }, {
        maxLat: -Infinity,
        minLat: Infinity,
        maxLng: -Infinity,
        minLng: Infinity
    });
};
var _default = getBounds;
exports.default = _default;

},{"./getLatitude":"hVRIT","./getLongitude":"bk2u3"}],"lpZ4O":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getLatitude = _interopRequireDefault(require("./getLatitude"));
var _getLongitude = _interopRequireDefault(require("./getLongitude"));
var _toRad = _interopRequireDefault(require("./toRad"));
var _toDeg = _interopRequireDefault(require("./toDeg"));
var _constants = require("./constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getBoundsOfDistance = function getBoundsOfDistance(point, distance) {
    var latitude = (0, _getLatitude.default)(point);
    var longitude = (0, _getLongitude.default)(point);
    var radLat = (0, _toRad.default)(latitude);
    var radLon = (0, _toRad.default)(longitude);
    var radDist = distance / _constants.earthRadius;
    var minLat = radLat - radDist;
    var maxLat = radLat + radDist;
    var MAX_LAT_RAD = (0, _toRad.default)(_constants.MAXLAT);
    var MIN_LAT_RAD = (0, _toRad.default)(_constants.MINLAT);
    var MAX_LON_RAD = (0, _toRad.default)(_constants.MAXLON);
    var MIN_LON_RAD = (0, _toRad.default)(_constants.MINLON);
    var minLon;
    var maxLon;
    if (minLat > MIN_LAT_RAD && maxLat < MAX_LAT_RAD) {
        var deltaLon = Math.asin(Math.sin(radDist) / Math.cos(radLat));
        minLon = radLon - deltaLon;
        if (minLon < MIN_LON_RAD) minLon += Math.PI * 2;
        maxLon = radLon + deltaLon;
        if (maxLon > MAX_LON_RAD) maxLon -= Math.PI * 2;
    } else {
        minLat = Math.max(minLat, MIN_LAT_RAD);
        maxLat = Math.min(maxLat, MAX_LAT_RAD);
        minLon = MIN_LON_RAD;
        maxLon = MAX_LON_RAD;
    }
    return [
        {
            latitude: (0, _toDeg.default)(minLat),
            longitude: (0, _toDeg.default)(minLon)
        },
        {
            latitude: (0, _toDeg.default)(maxLat),
            longitude: (0, _toDeg.default)(maxLon)
        }
    ];
};
var _default = getBoundsOfDistance;
exports.default = _default;

},{"./getLatitude":"hVRIT","./getLongitude":"bk2u3","./toRad":"8ACzx","./toDeg":"bKZ7R","./constants":"7V0dJ"}],"7VmT0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getLatitude = _interopRequireDefault(require("./getLatitude"));
var _getLongitude = _interopRequireDefault(require("./getLongitude"));
var _toRad = _interopRequireDefault(require("./toRad"));
var _toDeg = _interopRequireDefault(require("./toDeg"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getCenter = function getCenter(points) {
    if (Array.isArray(points) === false || points.length === 0) return false;
    var numberOfPoints = points.length;
    var sum = points.reduce(function(acc, point) {
        var pointLat = (0, _toRad.default)((0, _getLatitude.default)(point));
        var pointLon = (0, _toRad.default)((0, _getLongitude.default)(point));
        return {
            X: acc.X + Math.cos(pointLat) * Math.cos(pointLon),
            Y: acc.Y + Math.cos(pointLat) * Math.sin(pointLon),
            Z: acc.Z + Math.sin(pointLat)
        };
    }, {
        X: 0,
        Y: 0,
        Z: 0
    });
    var X = sum.X / numberOfPoints;
    var Y = sum.Y / numberOfPoints;
    var Z = sum.Z / numberOfPoints;
    return {
        longitude: (0, _toDeg.default)(Math.atan2(Y, X)),
        latitude: (0, _toDeg.default)(Math.atan2(Z, Math.sqrt(X * X + Y * Y)))
    };
};
var _default = getCenter;
exports.default = _default;

},{"./getLatitude":"hVRIT","./getLongitude":"bk2u3","./toRad":"8ACzx","./toDeg":"bKZ7R"}],"kWzGo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getBounds = _interopRequireDefault(require("./getBounds"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getCenterOfBounds = function getCenterOfBounds(coords) {
    var bounds = (0, _getBounds.default)(coords);
    var latitude = bounds.minLat + (bounds.maxLat - bounds.minLat) / 2;
    var longitude = bounds.minLng + (bounds.maxLng - bounds.minLng) / 2;
    return {
        latitude: parseFloat(latitude.toFixed(6)),
        longitude: parseFloat(longitude.toFixed(6))
    };
};
var _default = getCenterOfBounds;
exports.default = _default;

},{"./getBounds":"gOj8n"}],"1GfEX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getRhumbLineBearing = _interopRequireDefault(require("./getRhumbLineBearing"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getCompassDirection = function getCompassDirection(origin, dest) {
    var bearingFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _getRhumbLineBearing.default;
    var bearing = typeof bearingFn === "function" ? bearingFn(origin, dest) : (0, _getRhumbLineBearing.default)(origin, dest);
    if (isNaN(bearing)) throw new Error("Could not calculate bearing for given points. Check your bearing function");
    switch(Math.round(bearing / 22.5)){
        case 1:
            return "NNE";
        case 2:
            return "NE";
        case 3:
            return "ENE";
        case 4:
            return "E";
        case 5:
            return "ESE";
        case 6:
            return "SE";
        case 7:
            return "SSE";
        case 8:
            return "S";
        case 9:
            return "SSW";
        case 10:
            return "SW";
        case 11:
            return "WSW";
        case 12:
            return "W";
        case 13:
            return "WNW";
        case 14:
            return "NW";
        case 15:
            return "NNW";
        default:
            return "N";
    }
};
var _default = getCompassDirection;
exports.default = _default;

},{"./getRhumbLineBearing":"cAv3N"}],"cAv3N":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getLatitude = _interopRequireDefault(require("./getLatitude"));
var _getLongitude = _interopRequireDefault(require("./getLongitude"));
var _toRad = _interopRequireDefault(require("./toRad"));
var _toDeg = _interopRequireDefault(require("./toDeg"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getRhumbLineBearing = function getRhumbLineBearing(origin, dest) {
    var diffLon = (0, _toRad.default)((0, _getLongitude.default)(dest)) - (0, _toRad.default)((0, _getLongitude.default)(origin));
    var diffPhi = Math.log(Math.tan((0, _toRad.default)((0, _getLatitude.default)(dest)) / 2 + Math.PI / 4) / Math.tan((0, _toRad.default)((0, _getLatitude.default)(origin)) / 2 + Math.PI / 4));
    if (Math.abs(diffLon) > Math.PI) {
        if (diffLon > 0) diffLon = (Math.PI * 2 - diffLon) * -1;
        else diffLon = Math.PI * 2 + diffLon;
    }
    return ((0, _toDeg.default)(Math.atan2(diffLon, diffPhi)) + 360) % 360;
};
var _default = getRhumbLineBearing;
exports.default = _default;

},{"./getLatitude":"hVRIT","./getLongitude":"bk2u3","./toRad":"8ACzx","./toDeg":"bKZ7R"}],"lMzTh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getDistance = _interopRequireDefault(require("./getDistance"));
var _robustAcos = _interopRequireDefault(require("./robustAcos"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getDistanceFromLine = function getDistanceFromLine(point, lineStart, lineEnd) {
    var accuracy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var d1 = (0, _getDistance.default)(lineStart, point, accuracy);
    var d2 = (0, _getDistance.default)(point, lineEnd, accuracy);
    var d3 = (0, _getDistance.default)(lineStart, lineEnd, accuracy);
    var alpha = Math.acos((0, _robustAcos.default)((d1 * d1 + d3 * d3 - d2 * d2) / (2 * d1 * d3)));
    var beta = Math.acos((0, _robustAcos.default)((d2 * d2 + d3 * d3 - d1 * d1) / (2 * d2 * d3)));
    if (alpha > Math.PI / 2) return d1;
    if (beta > Math.PI / 2) return d2;
    return Math.sin(alpha) * d1;
};
var _default = getDistanceFromLine;
exports.default = _default;

},{"./getDistance":"ca9y0","./robustAcos":"cJtdB"}],"aeddz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getLatitude = _interopRequireDefault(require("./getLatitude"));
var _getLongitude = _interopRequireDefault(require("./getLongitude"));
var _toRad = _interopRequireDefault(require("./toRad"));
var _toDeg = _interopRequireDefault(require("./toDeg"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getGreatCircleBearing = function getGreatCircleBearing(origin, dest) {
    var destLat = (0, _getLatitude.default)(dest);
    var detLon = (0, _getLongitude.default)(dest);
    var originLat = (0, _getLatitude.default)(origin);
    var originLon = (0, _getLongitude.default)(origin);
    var bearing = ((0, _toDeg.default)(Math.atan2(Math.sin((0, _toRad.default)(detLon) - (0, _toRad.default)(originLon)) * Math.cos((0, _toRad.default)(destLat)), Math.cos((0, _toRad.default)(originLat)) * Math.sin((0, _toRad.default)(destLat)) - Math.sin((0, _toRad.default)(originLat)) * Math.cos((0, _toRad.default)(destLat)) * Math.cos((0, _toRad.default)(detLon) - (0, _toRad.default)(originLon)))) + 360) % 360;
    return bearing;
};
var _default = getGreatCircleBearing;
exports.default = _default;

},{"./getLatitude":"hVRIT","./getLongitude":"bk2u3","./toRad":"8ACzx","./toDeg":"bKZ7R"}],"1YGH5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getDistance = _interopRequireDefault(require("./getDistance"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
var getPathLength = function getPathLength(points) {
    var distanceFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _getDistance.default;
    return points.reduce(function(acc, point) {
        if (_typeof(acc) === "object" && acc.last !== null) acc.distance += distanceFn(point, acc.last);
        acc.last = point;
        return acc;
    }, {
        last: null,
        distance: 0
    }).distance;
};
var _default = getPathLength;
exports.default = _default;

},{"./getDistance":"ca9y0"}],"buSWz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getLatitude = _interopRequireDefault(require("./getLatitude"));
var _getLongitude = _interopRequireDefault(require("./getLongitude"));
var _toRad = _interopRequireDefault(require("./toRad"));
var _constants = require("./constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getDistance = function getDistance(start, end) {
    var accuracy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    accuracy = typeof accuracy !== "undefined" && !isNaN(accuracy) ? accuracy : 1;
    var startLat = (0, _getLatitude.default)(start);
    var startLon = (0, _getLongitude.default)(start);
    var endLat = (0, _getLatitude.default)(end);
    var endLon = (0, _getLongitude.default)(end);
    var b = 6356752.314245;
    var ellipsoidParams = 1 / 298.257223563;
    var L = (0, _toRad.default)(endLon - startLon);
    var cosSigma;
    var sigma;
    var sinAlpha;
    var cosSqAlpha;
    var cos2SigmaM;
    var sinSigma;
    var U1 = Math.atan((1 - ellipsoidParams) * Math.tan((0, _toRad.default)(parseFloat(startLat))));
    var U2 = Math.atan((1 - ellipsoidParams) * Math.tan((0, _toRad.default)(parseFloat(endLat))));
    var sinU1 = Math.sin(U1);
    var cosU1 = Math.cos(U1);
    var sinU2 = Math.sin(U2);
    var cosU2 = Math.cos(U2);
    var lambda = L;
    var lambdaP;
    var iterLimit = 100;
    do {
        var sinLambda = Math.sin(lambda);
        var cosLambda = Math.cos(lambda);
        sinSigma = Math.sqrt(cosU2 * sinLambda * (cosU2 * sinLambda) + (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) * (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda));
        if (sinSigma === 0) return 0;
        cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
        sigma = Math.atan2(sinSigma, cosSigma);
        sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma;
        cosSqAlpha = 1 - sinAlpha * sinAlpha;
        cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cosSqAlpha;
        if (isNaN(cos2SigmaM)) cos2SigmaM = 0;
        var C = ellipsoidParams / 16 * cosSqAlpha * (4 + ellipsoidParams * (4 - 3 * cosSqAlpha));
        lambdaP = lambda;
        lambda = L + (1 - C) * ellipsoidParams * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
    }while (Math.abs(lambda - lambdaP) > 1e-12 && --iterLimit > 0);
    if (iterLimit === 0) return NaN;
    var uSq = cosSqAlpha * (_constants.earthRadius * _constants.earthRadius - b * b) / (b * b);
    var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
    var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
    var deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
    var distance = b * A * (sigma - deltaSigma);
    return Math.round(distance / accuracy) * accuracy;
};
var _default = getDistance;
exports.default = _default;

},{"./getLatitude":"hVRIT","./getLongitude":"bk2u3","./toRad":"8ACzx","./constants":"7V0dJ"}],"5Sdbk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var getRoughCompassDirection = function getRoughCompassDirection(exact) {
    if (/^NNE|NE|NNW|N$/.test(exact)) return "N";
    if (/^ENE|E|ESE|SE$/.test(exact)) return "E";
    if (/^SSE|S|SSW|SW$/.test(exact)) return "S";
    if (/^WSW|W|WNW|NW$/.test(exact)) return "W";
};
var _default = getRoughCompassDirection;
exports.default = _default;

},{}],"4qco8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getDistance = _interopRequireDefault(require("./getDistance"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getSpeed = function getSpeed(start, end) {
    var distanceFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _getDistance.default;
    var distance = distanceFn(start, end);
    var time = Number(end.time) - Number(start.time);
    var metersPerSecond = distance / time * 1000;
    return metersPerSecond;
};
var _default = getSpeed;
exports.default = _default;

},{"./getDistance":"ca9y0"}],"8Q9nL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getDistance = _interopRequireDefault(require("./getDistance"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isPointInLine = function isPointInLine(point, lineStart, lineEnd) {
    return (0, _getDistance.default)(lineStart, point) + (0, _getDistance.default)(point, lineEnd) === (0, _getDistance.default)(lineStart, lineEnd);
};
var _default = isPointInLine;
exports.default = _default;

},{"./getDistance":"ca9y0"}],"h2jb3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getLatitude = _interopRequireDefault(require("./getLatitude"));
var _getLongitude = _interopRequireDefault(require("./getLongitude"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isPointInPolygon = function isPointInPolygon(point, polygon) {
    var isInside = false;
    var totalPolys = polygon.length;
    for(var i = -1, j = totalPolys - 1; ++i < totalPolys; j = i)if (((0, _getLongitude.default)(polygon[i]) <= (0, _getLongitude.default)(point) && (0, _getLongitude.default)(point) < (0, _getLongitude.default)(polygon[j]) || (0, _getLongitude.default)(polygon[j]) <= (0, _getLongitude.default)(point) && (0, _getLongitude.default)(point) < (0, _getLongitude.default)(polygon[i])) && (0, _getLatitude.default)(point) < ((0, _getLatitude.default)(polygon[j]) - (0, _getLatitude.default)(polygon[i])) * ((0, _getLongitude.default)(point) - (0, _getLongitude.default)(polygon[i])) / ((0, _getLongitude.default)(polygon[j]) - (0, _getLongitude.default)(polygon[i])) + (0, _getLatitude.default)(polygon[i])) isInside = !isInside;
    return isInside;
};
var _default = isPointInPolygon;
exports.default = _default;

},{"./getLatitude":"hVRIT","./getLongitude":"bk2u3"}],"gG8bB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getDistanceFromLine = _interopRequireDefault(require("./getDistanceFromLine"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isPointNearLine = function isPointNearLine(point, start, end, distance) {
    return (0, _getDistanceFromLine.default)(point, start, end) < distance;
};
var _default = isPointNearLine;
exports.default = _default;

},{"./getDistanceFromLine":"lMzTh"}],"btyWI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _getDistance = _interopRequireDefault(require("./getDistance"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isPointWithinRadius = function isPointWithinRadius(point, center, radius) {
    return (0, _getDistance.default)(point, center) < radius;
};
var _default = isPointWithinRadius;
exports.default = _default;

},{"./getDistance":"ca9y0"}],"9moBo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
var wktToPolygon = function wktToPolygon(wkt) {
    if (!wkt.startsWith("POLYGON")) throw new Error("Invalid wkt.");
    var coordsText = wkt.slice(wkt.indexOf("(") + 2, wkt.indexOf(")")).split(", ");
    var polygon = coordsText.map(function(coordText) {
        var _coordText$split = coordText.split(" "), _coordText$split2 = _slicedToArray(_coordText$split, 2), longitude = _coordText$split2[0], latitude = _coordText$split2[1];
        return {
            longitude: parseFloat(longitude),
            latitude: parseFloat(latitude)
        };
    });
    return polygon;
};
var _default = wktToPolygon;
exports.default = _default;

},{}]},["hmjPX","igcvL"], "igcvL", "parcelRequire94c2")

//# sourceMappingURL=index.3255f336.js.map
