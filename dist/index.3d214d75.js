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
})({"hNwJw":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
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
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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
    bundle.hotData = {
    };
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

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _luxonJs = require("./node_modules/luxon/src/luxon.js");
var _displayJs = require("./modules/display.js");
var _displayJsDefault = parcelHelpers.interopDefault(_displayJs);
var _moduleBookJs = require("./modules/moduleBook.js");
var _moduleBookJsDefault = parcelHelpers.interopDefault(_moduleBookJs);
var _flashMessageJs = require("./modules/flashMessage.js");
var _flashMessageJsDefault = parcelHelpers.interopDefault(_flashMessageJs);
var _navbarJs = require("./modules/navbar.js");
var _navbarJsDefault = parcelHelpers.interopDefault(_navbarJs);
// display date and time
const dateBox = document.getElementById('date');
setInterval(()=>{
    dateBox.innerHTML = _luxonJs.DateTime.now().toLocaleString(_luxonJs.DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);
//  display all the books;
if (localStorage.getItem('books') !== null) {
    const books = JSON.parse(localStorage.getItem('books'));
    books.forEach((element)=>{
        _displayJsDefault.default(element);
    });
}
// add book function
const title = document.getElementById('title');
const author = document.getElementById('author');
document.querySelector('#book-form').addEventListener('submit', (e)=>{
    if (title.value === '' || author.value === '') {
        _flashMessageJsDefault.default('error', '<b>Error:</b> Title and Author fields must be filled out');
        e.preventDefault();
    } else {
        const addBk = new _moduleBookJsDefault.default(title.value, author.value);
        addBk.addBook();
        _flashMessageJsDefault.default('success', '<b> Success: </b> Book Saved successfully!');
    }
});
// Remove book function
function removeBk() {
    const Book = new _moduleBookJsDefault.default();
    Book.removeBook(this.id);
    this.parentNode.parentNode.remove();
    _flashMessageJsDefault.default('remove', '<b> Remove:</b> Book Removed successfully ');
}
const btn = document.querySelectorAll('.btn');
btn.forEach((element)=>{
    element.addEventListener('click', removeBk);
});
// navbar section
const links = document.querySelectorAll('.links');
links.forEach((element)=>{
    element.addEventListener('click', function() {
        _navbarJsDefault.default(element.id);
        const [current] = document.getElementsByClassName('active');
        current.className = current.className.replace(' active', '');
        this.className += ' active';
    });
});

},{"./modules/display.js":"b4EWt","./modules/moduleBook.js":"hDNHM","./modules/flashMessage.js":"eTuHv","./modules/navbar.js":"lnuAL","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj","./node_modules/luxon/src/luxon.js":"loOqm"}],"b4EWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function displayBook(book) {
    const list = document.querySelector('.books_table');
    const row = document.createElement('tr');
    const { Id , Btitle , Bauthor  } = book;
    row.innerHTML = ` <td>${Btitle}</td> 
 <td>${Bauthor}</td> <td>
 <button type="submit" id="${Id}" class="btn">Remove</button></td> `;
    list.appendChild(row);
}
exports.default = displayBook;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"4F0hj":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hDNHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Books {
    constructor(title = '', author = ''){
        this.title = title;
        this.author = author;
        this.books = localStorage.getItem('books') !== null ? JSON.parse(localStorage.getItem('books')) : '';
    }
    saveBook(BTSave = this.books) {
        const storeBook = JSON.stringify(BTSave);
        localStorage.setItem('books', storeBook);
    }
    addBook() {
        if (this.books === '' || this.books.length <= 0) {
            this.books = [
                {
                    Id: 1,
                    Btitle: this.title,
                    Bauthor: this.author
                }, 
            ];
            this.saveBook();
        } else {
            const lastId = this.books[this.books.length - 1].Id + 1;
            const book = {
                Id: lastId,
                Btitle: this.title,
                Bauthor: this.author
            };
            this.books.push(book);
            this.saveBook();
        }
    }
    removeBook(bookId) {
        const remove = this.books.filter((book)=>book.Id !== Number(bookId)
        );
        this.saveBook(remove);
    }
}
exports.default = Books;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"eTuHv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const snakbar = document.getElementById('message-container');
function snaker(type, mes, time = 4000) {
    const para = document.createElement('p');
    para.classList.add('snakbar');
    para.innerHTML = `${mes} `;
    switch(type){
        case 'error':
            para.classList.add('error');
            break;
        case 'success':
            para.classList.add('success');
            break;
        case 'remove':
            para.classList.add('remove');
            break;
        default:
            para.classList.add('error');
    }
    snakbar.appendChild(para);
    para.classList.add('fadeout');
    setTimeout(()=>{
        snakbar.removeChild(para);
    }, time);
}
exports.default = snaker;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"lnuAL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function showBlock(e) {
    const sectionList = document.getElementById('list');
    const sectionAdd = document.getElementById('add_book');
    const sectionContact = document.getElementById('contact');
    switch(e){
        case 'list-link':
            sectionList.style.display = 'block';
            sectionAdd.style.display = 'none';
            sectionContact.style.display = 'none';
            break;
        case 'add-link':
            sectionAdd.style.display = 'block';
            sectionList.style.display = 'none';
            sectionContact.style.display = 'none';
            break;
        case 'contact-link':
            sectionContact.style.display = 'flex';
            sectionAdd.style.display = 'none';
            sectionList.style.display = 'none';
            break;
        default:
            sectionAdd.style.display = 'block';
            sectionList.style.display = 'none';
            sectionContact.style.display = 'none';
            break;
    }
}
exports.default = showBlock;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"loOqm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION
);
parcelHelpers.export(exports, "DateTime", ()=>_datetimeJsDefault.default
);
parcelHelpers.export(exports, "Duration", ()=>_durationJsDefault.default
);
parcelHelpers.export(exports, "Interval", ()=>_intervalJsDefault.default
);
parcelHelpers.export(exports, "Info", ()=>_infoJsDefault.default
);
parcelHelpers.export(exports, "Zone", ()=>_zoneJsDefault.default
);
parcelHelpers.export(exports, "FixedOffsetZone", ()=>_fixedOffsetZoneJsDefault.default
);
parcelHelpers.export(exports, "IANAZone", ()=>_ianazoneJsDefault.default
);
parcelHelpers.export(exports, "InvalidZone", ()=>_invalidZoneJsDefault.default
);
parcelHelpers.export(exports, "SystemZone", ()=>_systemZoneJsDefault.default
);
parcelHelpers.export(exports, "Settings", ()=>_settingsJsDefault.default
);
var _datetimeJs = require("./datetime.js");
var _datetimeJsDefault = parcelHelpers.interopDefault(_datetimeJs);
var _durationJs = require("./duration.js");
var _durationJsDefault = parcelHelpers.interopDefault(_durationJs);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _infoJs = require("./info.js");
var _infoJsDefault = parcelHelpers.interopDefault(_infoJs);
var _zoneJs = require("./zone.js");
var _zoneJsDefault = parcelHelpers.interopDefault(_zoneJs);
var _fixedOffsetZoneJs = require("./zones/fixedOffsetZone.js");
var _fixedOffsetZoneJsDefault = parcelHelpers.interopDefault(_fixedOffsetZoneJs);
var _ianazoneJs = require("./zones/IANAZone.js");
var _ianazoneJsDefault = parcelHelpers.interopDefault(_ianazoneJs);
var _invalidZoneJs = require("./zones/invalidZone.js");
var _invalidZoneJsDefault = parcelHelpers.interopDefault(_invalidZoneJs);
var _systemZoneJs = require("./zones/systemZone.js");
var _systemZoneJsDefault = parcelHelpers.interopDefault(_systemZoneJs);
var _settingsJs = require("./settings.js");
var _settingsJsDefault = parcelHelpers.interopDefault(_settingsJs);
const VERSION = "2.3.0";

},{"./datetime.js":"jQCsj","./duration.js":"k7LeK","./interval.js":"2O8UZ","./info.js":"cl9ub","./zone.js":"20P8J","./zones/fixedOffsetZone.js":"2n2o7","./zones/IANAZone.js":"2AfbS","./zones/invalidZone.js":"gmp8W","./zones/systemZone.js":"7txBc","./settings.js":"inSoS","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"jQCsj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @private
 */ parcelHelpers.export(exports, "friendlyDateTime", ()=>friendlyDateTime
);
var _durationJs = require("./duration.js");
var _durationJsDefault = parcelHelpers.interopDefault(_durationJs);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _settingsJs = require("./settings.js");
var _settingsJsDefault = parcelHelpers.interopDefault(_settingsJs);
var _infoJs = require("./info.js");
var _infoJsDefault = parcelHelpers.interopDefault(_infoJs);
var _formatterJs = require("./impl/formatter.js");
var _formatterJsDefault = parcelHelpers.interopDefault(_formatterJs);
var _fixedOffsetZoneJs = require("./zones/fixedOffsetZone.js");
var _fixedOffsetZoneJsDefault = parcelHelpers.interopDefault(_fixedOffsetZoneJs);
var _localeJs = require("./impl/locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var _utilJs = require("./impl/util.js");
var _zoneUtilJs = require("./impl/zoneUtil.js");
var _diffJs = require("./impl/diff.js");
var _diffJsDefault = parcelHelpers.interopDefault(_diffJs);
var _regexParserJs = require("./impl/regexParser.js");
var _tokenParserJs = require("./impl/tokenParser.js");
var _conversionsJs = require("./impl/conversions.js");
var _formatsJs = require("./impl/formats.js");
var _errorsJs = require("./errors.js");
var _invalidJs = require("./impl/invalid.js");
var _invalidJsDefault = parcelHelpers.interopDefault(_invalidJs);
const INVALID = "Invalid DateTime";
const MAX_DATE = 8640000000000000;
function unsupportedZone(zone) {
    return new _invalidJsDefault.default("unsupported zone", `the zone "${zone.name}" is not supported`);
}
// we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
    if (dt.weekData === null) dt.weekData = _conversionsJs.gregorianToWeek(dt.c);
    return dt.weekData;
}
// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone(inst, alts) {
    const current = {
        ts: inst.ts,
        zone: inst.zone,
        c: inst.c,
        o: inst.o,
        loc: inst.loc,
        invalid: inst.invalid
    };
    return new DateTime({
        ...current,
        ...alts,
        old: current
    });
}
// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
    // Our UTC time is just a guess because our offset is just a guess
    let utcGuess = localTS - o * 60000;
    // Test whether the zone matches the offset for this ts
    const o2 = tz.offset(utcGuess);
    // If so, offset didn't change and we're done
    if (o === o2) return [
        utcGuess,
        o
    ];
    // If not, change the ts by the difference in the offset
    utcGuess -= (o2 - o) * 60000;
    // If that gives us the local time we want, we're done
    const o3 = tz.offset(utcGuess);
    if (o2 === o3) return [
        utcGuess,
        o2
    ];
    // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
    return [
        localTS - Math.min(o2, o3) * 60000,
        Math.max(o2, o3)
    ];
}
// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
    ts += offset * 60000;
    const d = new Date(ts);
    return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
        hour: d.getUTCHours(),
        minute: d.getUTCMinutes(),
        second: d.getUTCSeconds(),
        millisecond: d.getUTCMilliseconds()
    };
}
// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
    return fixOffset(_utilJs.objToLocalTS(obj), offset, zone);
}
// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
    const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = {
        ...inst.c,
        year,
        month,
        day: Math.min(inst.c.day, _utilJs.daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
    }, millisToAdd = _durationJsDefault.default.fromObject({
        years: dur.years - Math.trunc(dur.years),
        quarters: dur.quarters - Math.trunc(dur.quarters),
        months: dur.months - Math.trunc(dur.months),
        weeks: dur.weeks - Math.trunc(dur.weeks),
        days: dur.days - Math.trunc(dur.days),
        hours: dur.hours,
        minutes: dur.minutes,
        seconds: dur.seconds,
        milliseconds: dur.milliseconds
    }).as("milliseconds"), localTS = _utilJs.objToLocalTS(c);
    let [ts, o] = fixOffset(localTS, oPre, inst.zone);
    if (millisToAdd !== 0) {
        ts += millisToAdd;
        // that could have changed the offset by going over a DST, but we want to keep the ts the same
        o = inst.zone.offset(ts);
    }
    return {
        ts,
        o
    };
}
// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
    const { setZone , zone  } = opts;
    if (parsed && Object.keys(parsed).length !== 0) {
        const interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, {
            ...opts,
            zone: interpretationZone,
            specificOffset
        });
        return setZone ? inst : inst.setZone(zone);
    } else return DateTime.invalid(new _invalidJsDefault.default("unparsable", `the input "${text}" can't be parsed as ${format}`));
}
// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ = true) {
    return dt.isValid ? _formatterJsDefault.default.create(_localeJsDefault.default.create("en-US"), {
        allowZ,
        forceSimple: true
    }).formatDateTimeFromString(dt, format) : null;
}
function toISODate(o, extended) {
    const longFormat = o.c.year > 9999 || o.c.year < 0;
    let c = "";
    if (longFormat && o.c.year >= 0) c += "+";
    c += _utilJs.padStart(o.c.year, longFormat ? 6 : 4);
    if (extended) {
        c += "-";
        c += _utilJs.padStart(o.c.month);
        c += "-";
        c += _utilJs.padStart(o.c.day);
    } else {
        c += _utilJs.padStart(o.c.month);
        c += _utilJs.padStart(o.c.day);
    }
    return c;
}
function toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset) {
    let c = _utilJs.padStart(o.c.hour);
    if (extended) {
        c += ":";
        c += _utilJs.padStart(o.c.minute);
        if (o.c.second !== 0 || !suppressSeconds) c += ":";
    } else c += _utilJs.padStart(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
        c += _utilJs.padStart(o.c.second);
        if (o.c.millisecond !== 0 || !suppressMilliseconds) {
            c += ".";
            c += _utilJs.padStart(o.c.millisecond, 3);
        }
    }
    if (includeOffset) {
        if (o.isOffsetFixed && o.offset === 0) c += "Z";
        else if (o.o < 0) {
            c += "-";
            c += _utilJs.padStart(Math.trunc(-o.o / 60));
            c += ":";
            c += _utilJs.padStart(Math.trunc(-o.o % 60));
        } else {
            c += "+";
            c += _utilJs.padStart(Math.trunc(o.o / 60));
            c += ":";
            c += _utilJs.padStart(Math.trunc(o.o % 60));
        }
    }
    return c;
}
// defaults for unspecified units in the supported calendars
const defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}, defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}, defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
};
// Units in the supported calendars, sorted by bigness
const orderedUnits = [
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
], orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond", 
], orderedOrdinalUnits = [
    "year",
    "ordinal",
    "hour",
    "minute",
    "second",
    "millisecond"
];
// standardize case and plurality in units
function normalizeUnit(unit) {
    const normalized = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        quarter: "quarter",
        quarters: "quarter",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal"
    }[unit.toLowerCase()];
    if (!normalized) throw new _errorsJs.InvalidUnitError(unit);
    return normalized;
}
// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, opts) {
    const zone = _zoneUtilJs.normalizeZone(opts.zone, _settingsJsDefault.default.defaultZone), loc = _localeJsDefault.default.fromObject(opts), tsNow = _settingsJsDefault.default.now();
    let ts, o;
    // assume we have the higher-order units
    if (!_utilJs.isUndefined(obj.year)) {
        for (const u of orderedUnits)if (_utilJs.isUndefined(obj[u])) obj[u] = defaultUnitValues[u];
        const invalid = _conversionsJs.hasInvalidGregorianData(obj) || _conversionsJs.hasInvalidTimeData(obj);
        if (invalid) return DateTime.invalid(invalid);
        const offsetProvis = zone.offset(tsNow);
        [ts, o] = objToTS(obj, offsetProvis, zone);
    } else ts = tsNow;
    return new DateTime({
        ts,
        zone,
        loc,
        o
    });
}
function diffRelative(start, end, opts) {
    const round = _utilJs.isUndefined(opts.round) ? true : opts.round, format = (c, unit)=>{
        c = _utilJs.roundTo(c, round || opts.calendary ? 0 : 2, true);
        const formatter = end.loc.clone(opts).relFormatter(opts);
        return formatter.format(c, unit);
    }, differ = (unit)=>{
        if (opts.calendary) {
            if (!end.hasSame(start, unit)) return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
            else return 0;
        } else return end.diff(start, unit).get(unit);
    };
    if (opts.unit) return format(differ(opts.unit), opts.unit);
    for (const unit1 of opts.units){
        const count = differ(unit1);
        if (Math.abs(count) >= 1) return format(count, unit1);
    }
    return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
function lastOpts(argList) {
    let opts = {
    }, args;
    if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
        opts = argList[argList.length - 1];
        args = Array.from(argList).slice(0, argList.length - 1);
    } else args = Array.from(argList);
    return [
        opts,
        args
    ];
}
class DateTime {
    /**
   * @access private
   */ constructor(config){
        const zone = config.zone || _settingsJsDefault.default.defaultZone;
        let invalid = config.invalid || (Number.isNaN(config.ts) ? new _invalidJsDefault.default("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
        /**
     * @access private
     */ this.ts = _utilJs.isUndefined(config.ts) ? _settingsJsDefault.default.now() : config.ts;
        let c = null, o = null;
        if (!invalid) {
            const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
            if (unchanged) [c, o] = [
                config.old.c,
                config.old.o
            ];
            else {
                const ot = zone.offset(this.ts);
                c = tsToObj(this.ts, ot);
                invalid = Number.isNaN(c.year) ? new _invalidJsDefault.default("invalid input") : null;
                c = invalid ? null : c;
                o = invalid ? null : ot;
            }
        }
        /**
     * @access private
     */ this._zone = zone;
        /**
     * @access private
     */ this.loc = config.loc || _localeJsDefault.default.create();
        /**
     * @access private
     */ this.invalid = invalid;
        /**
     * @access private
     */ this.weekData = null;
        /**
     * @access private
     */ this.c = c;
        /**
     * @access private
     */ this.o = o;
        /**
     * @access private
     */ this.isLuxonDateTime = true;
    }
    // CONSTRUCT
    /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */ static now() {
        return new DateTime({
        });
    }
    /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */ static local() {
        const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
        return quickDT({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond
        }, opts);
    }
    /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */ static utc() {
        const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
        opts.zone = _fixedOffsetZoneJsDefault.default.utcInstance;
        return quickDT({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond
        }, opts);
    }
    /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */ static fromJSDate(date, options = {
    }) {
        const ts = _utilJs.isDate(date) ? date.valueOf() : NaN;
        if (Number.isNaN(ts)) return DateTime.invalid("invalid input");
        const zoneToUse = _zoneUtilJs.normalizeZone(options.zone, _settingsJsDefault.default.defaultZone);
        if (!zoneToUse.isValid) return DateTime.invalid(unsupportedZone(zoneToUse));
        return new DateTime({
            ts: ts,
            zone: zoneToUse,
            loc: _localeJsDefault.default.fromObject(options)
        });
    }
    /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */ static fromMillis(milliseconds, options = {
    }) {
        if (!_utilJs.isNumber(milliseconds)) throw new _errorsJs.InvalidArgumentError(`fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`);
        else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
        return DateTime.invalid("Timestamp out of range");
        else return new DateTime({
            ts: milliseconds,
            zone: _zoneUtilJs.normalizeZone(options.zone, _settingsJsDefault.default.defaultZone),
            loc: _localeJsDefault.default.fromObject(options)
        });
    }
    /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */ static fromSeconds(seconds, options = {
    }) {
        if (!_utilJs.isNumber(seconds)) throw new _errorsJs.InvalidArgumentError("fromSeconds requires a numerical input");
        else return new DateTime({
            ts: seconds * 1000,
            zone: _zoneUtilJs.normalizeZone(options.zone, _settingsJsDefault.default.defaultZone),
            loc: _localeJsDefault.default.fromObject(options)
        });
    }
    /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */ static fromObject(obj, opts = {
    }) {
        obj = obj || {
        };
        const zoneToUse = _zoneUtilJs.normalizeZone(opts.zone, _settingsJsDefault.default.defaultZone);
        if (!zoneToUse.isValid) return DateTime.invalid(unsupportedZone(zoneToUse));
        const tsNow = _settingsJsDefault.default.now(), offsetProvis = !_utilJs.isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), normalized = _utilJs.normalizeObject(obj, normalizeUnit), containsOrdinal = !_utilJs.isUndefined(normalized.ordinal), containsGregorYear = !_utilJs.isUndefined(normalized.year), containsGregorMD = !_utilJs.isUndefined(normalized.month) || !_utilJs.isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = _localeJsDefault.default.fromObject(opts);
        // cases:
        // just a weekday -> this week's instance of that weekday, no worries
        // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
        // (gregorian month or day) + ordinal -> error
        // otherwise just use weeks or ordinals or gregorian, depending on what's specified
        if ((containsGregor || containsOrdinal) && definiteWeekDef) throw new _errorsJs.ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (containsGregorMD && containsOrdinal) throw new _errorsJs.ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
        // configure ourselves to deal with gregorian dates or week stuff
        let units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
        if (useWeekData) {
            units = orderedWeekUnits;
            defaultValues = defaultWeekUnitValues;
            objNow = _conversionsJs.gregorianToWeek(objNow);
        } else if (containsOrdinal) {
            units = orderedOrdinalUnits;
            defaultValues = defaultOrdinalUnitValues;
            objNow = _conversionsJs.gregorianToOrdinal(objNow);
        } else {
            units = orderedUnits;
            defaultValues = defaultUnitValues;
        }
        // set default values for missing stuff
        let foundFirst = false;
        for (const u of units){
            const v = normalized[u];
            if (!_utilJs.isUndefined(v)) foundFirst = true;
            else if (foundFirst) normalized[u] = defaultValues[u];
            else normalized[u] = objNow[u];
        }
        // make sure the values we have are in range
        const higherOrderInvalid = useWeekData ? _conversionsJs.hasInvalidWeekData(normalized) : containsOrdinal ? _conversionsJs.hasInvalidOrdinalData(normalized) : _conversionsJs.hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || _conversionsJs.hasInvalidTimeData(normalized);
        if (invalid) return DateTime.invalid(invalid);
        // compute the actual time
        const gregorian = useWeekData ? _conversionsJs.weekToGregorian(normalized) : containsOrdinal ? _conversionsJs.ordinalToGregorian(normalized) : normalized, [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse), inst = new DateTime({
            ts: tsFinal,
            zone: zoneToUse,
            o: offsetFinal,
            loc
        });
        // gregorian data + weekday serves only to validate
        if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) return DateTime.invalid("mismatched weekday", `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`);
        return inst;
    }
    /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */ static fromISO(text, opts = {
    }) {
        const [vals, parsedZone] = _regexParserJs.parseISODate(text);
        return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
    }
    /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */ static fromRFC2822(text, opts = {
    }) {
        const [vals, parsedZone] = _regexParserJs.parseRFC2822Date(text);
        return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
    }
    /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */ static fromHTTP(text, opts = {
    }) {
        const [vals, parsedZone] = _regexParserJs.parseHTTPDate(text);
        return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
    }
    /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */ static fromFormat(text, fmt, opts = {
    }) {
        if (_utilJs.isUndefined(text) || _utilJs.isUndefined(fmt)) throw new _errorsJs.InvalidArgumentError("fromFormat requires an input string and a format");
        const { locale =null , numberingSystem =null  } = opts, localeToUse = _localeJsDefault.default.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
        }), [vals, parsedZone, specificOffset, invalid] = _tokenParserJs.parseFromTokens(localeToUse, text, fmt);
        if (invalid) return DateTime.invalid(invalid);
        else return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
    }
    /**
   * @deprecated use fromFormat instead
   */ static fromString(text, fmt, opts = {
    }) {
        return DateTime.fromFormat(text, fmt, opts);
    }
    /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */ static fromSQL(text, opts = {
    }) {
        const [vals, parsedZone] = _regexParserJs.parseSQL(text);
        return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
    }
    /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */ static invalid(reason, explanation = null) {
        if (!reason) throw new _errorsJs.InvalidArgumentError("need to specify a reason the DateTime is invalid");
        const invalid = reason instanceof _invalidJsDefault.default ? reason : new _invalidJsDefault.default(reason, explanation);
        if (_settingsJsDefault.default.throwOnInvalid) throw new _errorsJs.InvalidDateTimeError(invalid);
        else return new DateTime({
            invalid
        });
    }
    /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ static isDateTime(o) {
        return o && o.isLuxonDateTime || false;
    }
    // INFO
    /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */ get(unit) {
        return this[unit];
    }
    /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */ get isValid() {
        return this.invalid === null;
    }
    /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */ get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
    }
    /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */ get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
    }
    /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */ get locale() {
        return this.isValid ? this.loc.locale : null;
    }
    /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */ get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */ get outputCalendar() {
        return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */ get zone() {
        return this._zone;
    }
    /**
   * Get the name of the time zone.
   * @type {string}
   */ get zoneName() {
        return this.isValid ? this.zone.name : null;
    }
    /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */ get year() {
        return this.isValid ? this.c.year : NaN;
    }
    /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */ get quarter() {
        return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */ get month() {
        return this.isValid ? this.c.month : NaN;
    }
    /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */ get day() {
        return this.isValid ? this.c.day : NaN;
    }
    /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */ get hour() {
        return this.isValid ? this.c.hour : NaN;
    }
    /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */ get minute() {
        return this.isValid ? this.c.minute : NaN;
    }
    /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */ get second() {
        return this.isValid ? this.c.second : NaN;
    }
    /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */ get millisecond() {
        return this.isValid ? this.c.millisecond : NaN;
    }
    /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */ get weekYear() {
        return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */ get weekNumber() {
        return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */ get weekday() {
        return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */ get ordinal() {
        return this.isValid ? _conversionsJs.gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */ get monthShort() {
        return this.isValid ? _infoJsDefault.default.months("short", {
            locObj: this.loc
        })[this.month - 1] : null;
    }
    /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */ get monthLong() {
        return this.isValid ? _infoJsDefault.default.months("long", {
            locObj: this.loc
        })[this.month - 1] : null;
    }
    /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */ get weekdayShort() {
        return this.isValid ? _infoJsDefault.default.weekdays("short", {
            locObj: this.loc
        })[this.weekday - 1] : null;
    }
    /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */ get weekdayLong() {
        return this.isValid ? _infoJsDefault.default.weekdays("long", {
            locObj: this.loc
        })[this.weekday - 1] : null;
    }
    /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */ get offset() {
        return this.isValid ? +this.o : NaN;
    }
    /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */ get offsetNameShort() {
        if (this.isValid) return this.zone.offsetName(this.ts, {
            format: "short",
            locale: this.locale
        });
        else return null;
    }
    /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */ get offsetNameLong() {
        if (this.isValid) return this.zone.offsetName(this.ts, {
            format: "long",
            locale: this.locale
        });
        else return null;
    }
    /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */ get isOffsetFixed() {
        return this.isValid ? this.zone.isUniversal : null;
    }
    /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */ get isInDST() {
        if (this.isOffsetFixed) return false;
        else return this.offset > this.set({
            month: 1
        }).offset || this.offset > this.set({
            month: 5
        }).offset;
    }
    /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */ get isInLeapYear() {
        return _utilJs.isLeapYear(this.year);
    }
    /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */ get daysInMonth() {
        return _utilJs.daysInMonth(this.year, this.month);
    }
    /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */ get daysInYear() {
        return this.isValid ? _utilJs.daysInYear(this.year) : NaN;
    }
    /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */ get weeksInWeekYear() {
        return this.isValid ? _utilJs.weeksInWeekYear(this.weekYear) : NaN;
    }
    /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */ resolvedLocaleOptions(opts = {
    }) {
        const { locale , numberingSystem , calendar  } = _formatterJsDefault.default.create(this.loc.clone(opts), opts).resolvedOptions(this);
        return {
            locale,
            numberingSystem,
            outputCalendar: calendar
        };
    }
    // TRANSFORM
    /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */ toUTC(offset = 0, opts = {
    }) {
        return this.setZone(_fixedOffsetZoneJsDefault.default.instance(offset), opts);
    }
    /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */ toLocal() {
        return this.setZone(_settingsJsDefault.default.defaultZone);
    }
    /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */ setZone(zone, { keepLocalTime =false , keepCalendarTime =false  } = {
    }) {
        zone = _zoneUtilJs.normalizeZone(zone, _settingsJsDefault.default.defaultZone);
        if (zone.equals(this.zone)) return this;
        else if (!zone.isValid) return DateTime.invalid(unsupportedZone(zone));
        else {
            let newTS = this.ts;
            if (keepLocalTime || keepCalendarTime) {
                const offsetGuess = zone.offset(this.ts);
                const asObj = this.toObject();
                [newTS] = objToTS(asObj, offsetGuess, zone);
            }
            return clone(this, {
                ts: newTS,
                zone
            });
        }
    }
    /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */ reconfigure({ locale , numberingSystem , outputCalendar  } = {
    }) {
        const loc = this.loc.clone({
            locale,
            numberingSystem,
            outputCalendar
        });
        return clone(this, {
            loc
        });
    }
    /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */ setLocale(locale) {
        return this.reconfigure({
            locale
        });
    }
    /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */ set(values) {
        if (!this.isValid) return this;
        const normalized = _utilJs.normalizeObject(values, normalizeUnit), settingWeekStuff = !_utilJs.isUndefined(normalized.weekYear) || !_utilJs.isUndefined(normalized.weekNumber) || !_utilJs.isUndefined(normalized.weekday), containsOrdinal = !_utilJs.isUndefined(normalized.ordinal), containsGregorYear = !_utilJs.isUndefined(normalized.year), containsGregorMD = !_utilJs.isUndefined(normalized.month) || !_utilJs.isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
        if ((containsGregor || containsOrdinal) && definiteWeekDef) throw new _errorsJs.ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (containsGregorMD && containsOrdinal) throw new _errorsJs.ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        let mixed;
        if (settingWeekStuff) mixed = _conversionsJs.weekToGregorian({
            ..._conversionsJs.gregorianToWeek(this.c),
            ...normalized
        });
        else if (!_utilJs.isUndefined(normalized.ordinal)) mixed = _conversionsJs.ordinalToGregorian({
            ..._conversionsJs.gregorianToOrdinal(this.c),
            ...normalized
        });
        else {
            mixed = {
                ...this.toObject(),
                ...normalized
            };
            // if we didn't set the day but we ended up on an overflow date,
            // use the last day of the right month
            if (_utilJs.isUndefined(normalized.day)) mixed.day = Math.min(_utilJs.daysInMonth(mixed.year, mixed.month), mixed.day);
        }
        const [ts, o] = objToTS(mixed, this.o, this.zone);
        return clone(this, {
            ts,
            o
        });
    }
    /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */ plus(duration) {
        if (!this.isValid) return this;
        const dur = _durationJsDefault.default.fromDurationLike(duration);
        return clone(this, adjustTime(this, dur));
    }
    /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */ minus(duration) {
        if (!this.isValid) return this;
        const dur = _durationJsDefault.default.fromDurationLike(duration).negate();
        return clone(this, adjustTime(this, dur));
    }
    /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */ startOf(unit) {
        if (!this.isValid) return this;
        const o = {
        }, normalizedUnit = _durationJsDefault.default.normalizeUnit(unit);
        switch(normalizedUnit){
            case "years":
                o.month = 1;
            // falls through
            case "quarters":
            case "months":
                o.day = 1;
            // falls through
            case "weeks":
            case "days":
                o.hour = 0;
            // falls through
            case "hours":
                o.minute = 0;
            // falls through
            case "minutes":
                o.second = 0;
            // falls through
            case "seconds":
                o.millisecond = 0;
                break;
            case "milliseconds":
                break;
        }
        if (normalizedUnit === "weeks") o.weekday = 1;
        if (normalizedUnit === "quarters") {
            const q = Math.ceil(this.month / 3);
            o.month = (q - 1) * 3 + 1;
        }
        return this.set(o);
    }
    /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */ endOf(unit) {
        return this.isValid ? this.plus({
            [unit]: 1
        }).startOf(unit).minus(1) : this;
    }
    // OUTPUT
    /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */ toFormat(fmt, opts = {
    }) {
        return this.isValid ? _formatterJsDefault.default.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
    }
    /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */ toLocaleString(formatOpts = _formatsJs.DATE_SHORT, opts = {
    }) {
        return this.isValid ? _formatterJsDefault.default.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
    }
    /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */ toLocaleParts(opts = {
    }) {
        return this.isValid ? _formatterJsDefault.default.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
    }
    /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */ toISO({ format ="extended" , suppressSeconds =false , suppressMilliseconds =false , includeOffset =true ,  } = {
    }) {
        if (!this.isValid) return null;
        const ext = format === "extended";
        let c = toISODate(this, ext);
        c += "T";
        c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset);
        return c;
    }
    /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */ toISODate({ format ="extended"  } = {
    }) {
        if (!this.isValid) return null;
        return toISODate(this, format === "extended");
    }
    /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */ toISOWeekDate() {
        return toTechFormat(this, "kkkk-'W'WW-c");
    }
    /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */ toISOTime({ suppressMilliseconds =false , suppressSeconds =false , includeOffset =true , includePrefix =false , format ="extended" ,  } = {
    }) {
        if (!this.isValid) return null;
        let c = includePrefix ? "T" : "";
        return c + toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset);
    }
    /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */ toRFC2822() {
        return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
    }
    /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */ toHTTP() {
        return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    }
    /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */ toSQLDate() {
        if (!this.isValid) return null;
        return toISODate(this, true);
    }
    /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */ toSQLTime({ includeOffset =true , includeZone =false  } = {
    }) {
        let fmt = "HH:mm:ss.SSS";
        if (includeZone || includeOffset) {
            fmt += " ";
            if (includeZone) fmt += "z";
            else if (includeOffset) fmt += "ZZ";
        }
        return toTechFormat(this, fmt, true);
    }
    /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */ toSQL(opts = {
    }) {
        if (!this.isValid) return null;
        return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
    }
    /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */ toString() {
        return this.isValid ? this.toISO() : INVALID;
    }
    /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */ valueOf() {
        return this.toMillis();
    }
    /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */ toMillis() {
        return this.isValid ? this.ts : NaN;
    }
    /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */ toSeconds() {
        return this.isValid ? this.ts / 1000 : NaN;
    }
    /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */ toJSON() {
        return this.toISO();
    }
    /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */ toBSON() {
        return this.toJSDate();
    }
    /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */ toObject(opts = {
    }) {
        if (!this.isValid) return {
        };
        const base = {
            ...this.c
        };
        if (opts.includeConfig) {
            base.outputCalendar = this.outputCalendar;
            base.numberingSystem = this.loc.numberingSystem;
            base.locale = this.loc.locale;
        }
        return base;
    }
    /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */ toJSDate() {
        return new Date(this.isValid ? this.ts : NaN);
    }
    // COMPARE
    /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */ diff(otherDateTime, unit = "milliseconds", opts = {
    }) {
        if (!this.isValid || !otherDateTime.isValid) return _durationJsDefault.default.invalid("created by diffing an invalid DateTime");
        const durOpts = {
            locale: this.locale,
            numberingSystem: this.numberingSystem,
            ...opts
        };
        const units = _utilJs.maybeArray(unit).map(_durationJsDefault.default.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = _diffJsDefault.default(earlier, later, units, durOpts);
        return otherIsLater ? diffed.negate() : diffed;
    }
    /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */ diffNow(unit = "milliseconds", opts = {
    }) {
        return this.diff(DateTime.now(), unit, opts);
    }
    /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */ until(otherDateTime) {
        return this.isValid ? _intervalJsDefault.default.fromDateTimes(this, otherDateTime) : this;
    }
    /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */ hasSame(otherDateTime, unit) {
        if (!this.isValid) return false;
        const inputMs = otherDateTime.valueOf();
        const adjustedToZone = this.setZone(otherDateTime.zone, {
            keepLocalTime: true
        });
        return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
    }
    /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */ equals(other) {
        return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
    }
    /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */ toRelative(options = {
    }) {
        if (!this.isValid) return null;
        const base = options.base || DateTime.fromObject({
        }, {
            zone: this.zone
        }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
        let units = [
            "years",
            "months",
            "days",
            "hours",
            "minutes",
            "seconds"
        ];
        let unit = options.unit;
        if (Array.isArray(options.unit)) {
            units = options.unit;
            unit = undefined;
        }
        return diffRelative(base, this.plus(padding), {
            ...options,
            numeric: "always",
            units,
            unit
        });
    }
    /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */ toRelativeCalendar(options = {
    }) {
        if (!this.isValid) return null;
        return diffRelative(options.base || DateTime.fromObject({
        }, {
            zone: this.zone
        }), this, {
            ...options,
            numeric: "auto",
            units: [
                "years",
                "months",
                "days"
            ],
            calendary: true
        });
    }
    /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */ static min(...dateTimes) {
        if (!dateTimes.every(DateTime.isDateTime)) throw new _errorsJs.InvalidArgumentError("min requires all arguments be DateTimes");
        return _utilJs.bestBy(dateTimes, (i)=>i.valueOf()
        , Math.min);
    }
    /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */ static max(...dateTimes) {
        if (!dateTimes.every(DateTime.isDateTime)) throw new _errorsJs.InvalidArgumentError("max requires all arguments be DateTimes");
        return _utilJs.bestBy(dateTimes, (i)=>i.valueOf()
        , Math.max);
    }
    // MISC
    /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */ static fromFormatExplain(text, fmt, options = {
    }) {
        const { locale =null , numberingSystem =null  } = options, localeToUse = _localeJsDefault.default.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
        });
        return _tokenParserJs.explainFromTokens(localeToUse, text, fmt);
    }
    /**
   * @deprecated use fromFormatExplain instead
   */ static fromStringExplain(text, fmt, options = {
    }) {
        return DateTime.fromFormatExplain(text, fmt, options);
    }
    // FORMAT PRESETS
    /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */ static get DATE_SHORT() {
        return _formatsJs.DATE_SHORT;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */ static get DATE_MED() {
        return _formatsJs.DATE_MED;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */ static get DATE_MED_WITH_WEEKDAY() {
        return _formatsJs.DATE_MED_WITH_WEEKDAY;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */ static get DATE_FULL() {
        return _formatsJs.DATE_FULL;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */ static get DATE_HUGE() {
        return _formatsJs.DATE_HUGE;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get TIME_SIMPLE() {
        return _formatsJs.TIME_SIMPLE;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get TIME_WITH_SECONDS() {
        return _formatsJs.TIME_WITH_SECONDS;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get TIME_WITH_SHORT_OFFSET() {
        return _formatsJs.TIME_WITH_SHORT_OFFSET;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get TIME_WITH_LONG_OFFSET() {
        return _formatsJs.TIME_WITH_LONG_OFFSET;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */ static get TIME_24_SIMPLE() {
        return _formatsJs.TIME_24_SIMPLE;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */ static get TIME_24_WITH_SECONDS() {
        return _formatsJs.TIME_24_WITH_SECONDS;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */ static get TIME_24_WITH_SHORT_OFFSET() {
        return _formatsJs.TIME_24_WITH_SHORT_OFFSET;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */ static get TIME_24_WITH_LONG_OFFSET() {
        return _formatsJs.TIME_24_WITH_LONG_OFFSET;
    }
    /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_SHORT() {
        return _formatsJs.DATETIME_SHORT;
    }
    /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_SHORT_WITH_SECONDS() {
        return _formatsJs.DATETIME_SHORT_WITH_SECONDS;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_MED() {
        return _formatsJs.DATETIME_MED;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_MED_WITH_SECONDS() {
        return _formatsJs.DATETIME_MED_WITH_SECONDS;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_MED_WITH_WEEKDAY() {
        return _formatsJs.DATETIME_MED_WITH_WEEKDAY;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_FULL() {
        return _formatsJs.DATETIME_FULL;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_FULL_WITH_SECONDS() {
        return _formatsJs.DATETIME_FULL_WITH_SECONDS;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_HUGE() {
        return _formatsJs.DATETIME_HUGE;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_HUGE_WITH_SECONDS() {
        return _formatsJs.DATETIME_HUGE_WITH_SECONDS;
    }
}
exports.default = DateTime;
function friendlyDateTime(dateTimeish) {
    if (DateTime.isDateTime(dateTimeish)) return dateTimeish;
    else if (dateTimeish && dateTimeish.valueOf && _utilJs.isNumber(dateTimeish.valueOf())) return DateTime.fromJSDate(dateTimeish);
    else if (dateTimeish && typeof dateTimeish === "object") return DateTime.fromObject(dateTimeish);
    else throw new _errorsJs.InvalidArgumentError(`Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`);
}

},{"./duration.js":"k7LeK","./interval.js":"2O8UZ","./settings.js":"inSoS","./info.js":"cl9ub","./impl/formatter.js":"3Q471","./zones/fixedOffsetZone.js":"2n2o7","./impl/locale.js":"4gg6Z","./impl/util.js":"ey0ja","./impl/zoneUtil.js":"k79uo","./impl/diff.js":"qX054","./impl/regexParser.js":"i5DuV","./impl/tokenParser.js":"53P5I","./impl/conversions.js":"2Nj9P","./impl/formats.js":"dYcZG","./errors.js":"lBgoZ","./impl/invalid.js":"44NKv","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"k7LeK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lowOrderMatrix", ()=>lowOrderMatrix
);
parcelHelpers.export(exports, "casualMatrix", ()=>casualMatrix
);
parcelHelpers.export(exports, "daysInYearAccurate", ()=>daysInYearAccurate
);
parcelHelpers.export(exports, "daysInMonthAccurate", ()=>daysInMonthAccurate
);
parcelHelpers.export(exports, "accurateMatrix", ()=>accurateMatrix
);
var _errorsJs = require("./errors.js");
var _formatterJs = require("./impl/formatter.js");
var _formatterJsDefault = parcelHelpers.interopDefault(_formatterJs);
var _invalidJs = require("./impl/invalid.js");
var _invalidJsDefault = parcelHelpers.interopDefault(_invalidJs);
var _localeJs = require("./impl/locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var _regexParserJs = require("./impl/regexParser.js");
var _utilJs = require("./impl/util.js");
var _settingsJs = require("./settings.js");
var _settingsJsDefault = parcelHelpers.interopDefault(_settingsJs);
const INVALID = "Invalid Duration";
const lowOrderMatrix = {
    weeks: {
        days: 7,
        hours: 168,
        minutes: 10080,
        seconds: 604800,
        milliseconds: 604800000
    },
    days: {
        hours: 24,
        minutes: 1440,
        seconds: 86400,
        milliseconds: 86400000
    },
    hours: {
        minutes: 60,
        seconds: 3600,
        milliseconds: 3600000
    },
    minutes: {
        seconds: 60,
        milliseconds: 60000
    },
    seconds: {
        milliseconds: 1000
    }
}, casualMatrix = {
    years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 8760,
        minutes: 525600,
        seconds: 31536000,
        milliseconds: 31536000000
    },
    quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 2184,
        minutes: 131040,
        seconds: 7862400,
        milliseconds: 7862400000
    },
    months: {
        weeks: 4,
        days: 30,
        hours: 720,
        minutes: 43200,
        seconds: 2592000,
        milliseconds: 2592000000
    },
    ...lowOrderMatrix
}, daysInYearAccurate = 365.2425, daysInMonthAccurate = 30.436875, accurateMatrix = {
    years: {
        quarters: 4,
        months: 12,
        weeks: daysInYearAccurate / 7,
        days: daysInYearAccurate,
        hours: daysInYearAccurate * 24,
        minutes: daysInYearAccurate * 1440,
        seconds: daysInYearAccurate * 86400,
        milliseconds: daysInYearAccurate * 86400000
    },
    quarters: {
        months: 3,
        weeks: daysInYearAccurate / 28,
        days: daysInYearAccurate / 4,
        hours: daysInYearAccurate * 24 / 4,
        minutes: daysInYearAccurate * 1440 / 4,
        seconds: daysInYearAccurate * 86400 / 4,
        milliseconds: daysInYearAccurate * 86400000 / 4
    },
    months: {
        weeks: daysInMonthAccurate / 7,
        days: daysInMonthAccurate,
        hours: daysInMonthAccurate * 24,
        minutes: daysInMonthAccurate * 1440,
        seconds: daysInMonthAccurate * 86400,
        milliseconds: daysInMonthAccurate * 86400000
    },
    ...lowOrderMatrix
};
// units ordered by size
const orderedUnits = [
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds", 
];
const reverseUnits = orderedUnits.slice(0).reverse();
// clone really means "create another instance just like this one, but with these changes"
function clone(dur, alts, clear = false) {
    // deep merge for vals
    const conf = {
        values: clear ? alts.values : {
            ...dur.values,
            ...alts.values || {
            }
        },
        loc: dur.loc.clone(alts.loc),
        conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
    };
    return new Duration(conf);
}
function antiTrunc(n) {
    return n < 0 ? Math.floor(n) : Math.ceil(n);
}
// NB: mutates parameters
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
    const conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), // ok, so this is wild, but see the matrix in the tests
    added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
    toMap[toUnit] += added;
    fromMap[fromUnit] -= added * conv;
}
// NB: mutates parameters
function normalizeValues(matrix, vals) {
    reverseUnits.reduce((previous, current)=>{
        if (!_utilJs.isUndefined(vals[current])) {
            if (previous) convert(matrix, vals, previous, vals, current);
            return current;
        } else return previous;
    }, null);
}
class Duration {
    /**
   * @private
   */ constructor(config){
        const accurate = config.conversionAccuracy === "longterm" || false;
        /**
     * @access private
     */ this.values = config.values;
        /**
     * @access private
     */ this.loc = config.loc || _localeJsDefault.default.create();
        /**
     * @access private
     */ this.conversionAccuracy = accurate ? "longterm" : "casual";
        /**
     * @access private
     */ this.invalid = config.invalid || null;
        /**
     * @access private
     */ this.matrix = accurate ? accurateMatrix : casualMatrix;
        /**
     * @access private
     */ this.isLuxonDuration = true;
    }
    /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */ static fromMillis(count, opts) {
        return Duration.fromObject({
            milliseconds: count
        }, opts);
    }
    /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */ static fromObject(obj, opts = {
    }) {
        if (obj == null || typeof obj !== "object") throw new _errorsJs.InvalidArgumentError(`Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`);
        return new Duration({
            values: _utilJs.normalizeObject(obj, Duration.normalizeUnit),
            loc: _localeJsDefault.default.fromObject(opts),
            conversionAccuracy: opts.conversionAccuracy
        });
    }
    /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */ static fromDurationLike(durationLike) {
        if (_utilJs.isNumber(durationLike)) return Duration.fromMillis(durationLike);
        else if (Duration.isDuration(durationLike)) return durationLike;
        else if (typeof durationLike === "object") return Duration.fromObject(durationLike);
        else throw new _errorsJs.InvalidArgumentError(`Unknown duration argument ${durationLike} of type ${typeof durationLike}`);
    }
    /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */ static fromISO(text, opts) {
        const [parsed] = _regexParserJs.parseISODuration(text);
        if (parsed) return Duration.fromObject(parsed, opts);
        else return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
    /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */ static fromISOTime(text, opts) {
        const [parsed] = _regexParserJs.parseISOTimeOnly(text);
        if (parsed) return Duration.fromObject(parsed, opts);
        else return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
    /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */ static invalid(reason, explanation = null) {
        if (!reason) throw new _errorsJs.InvalidArgumentError("need to specify a reason the Duration is invalid");
        const invalid = reason instanceof _invalidJsDefault.default ? reason : new _invalidJsDefault.default(reason, explanation);
        if (_settingsJsDefault.default.throwOnInvalid) throw new _errorsJs.InvalidDurationError(invalid);
        else return new Duration({
            invalid
        });
    }
    /**
   * @private
   */ static normalizeUnit(unit) {
        const normalized = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
        }[unit ? unit.toLowerCase() : unit];
        if (!normalized) throw new _errorsJs.InvalidUnitError(unit);
        return normalized;
    }
    /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ static isDuration(o) {
        return o && o.isLuxonDuration || false;
    }
    /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */ get locale() {
        return this.isValid ? this.loc.locale : null;
    }
    /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */ get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */ toFormat(fmt, opts = {
    }) {
        // reverse-compat since 1.2; we always round down now, never up, and we do it by default
        const fmtOpts = {
            ...opts,
            floor: opts.round !== false && opts.floor !== false
        };
        return this.isValid ? _formatterJsDefault.default.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
    }
    /**
   * Returns a string representation of a Duration with all units included
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant. See {@link Intl.NumberFormat}.
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */ toHuman(opts = {
    }) {
        const l = orderedUnits.map((unit)=>{
            const val = this.values[unit];
            if (_utilJs.isUndefined(val)) return null;
            return this.loc.numberFormatter({
                style: "unit",
                unitDisplay: "long",
                ...opts,
                unit: unit.slice(0, -1)
            }).format(val);
        }).filter((n)=>n
        );
        return this.loc.listFormatter({
            type: "conjunction",
            style: opts.listStyle || "narrow",
            ...opts
        }).format(l);
    }
    /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */ toObject() {
        if (!this.isValid) return {
        };
        return {
            ...this.values
        };
    }
    /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */ toISO() {
        // we could use the formatter, but this is an easier way to get the minimum string
        if (!this.isValid) return null;
        let s = "P";
        if (this.years !== 0) s += this.years + "Y";
        if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
        if (this.weeks !== 0) s += this.weeks + "W";
        if (this.days !== 0) s += this.days + "D";
        if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
        if (this.hours !== 0) s += this.hours + "H";
        if (this.minutes !== 0) s += this.minutes + "M";
        if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
        // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
        s += _utilJs.roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
        if (s === "P") s += "T0S";
        return s;
    }
    /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */ toISOTime(opts = {
    }) {
        if (!this.isValid) return null;
        const millis = this.toMillis();
        if (millis < 0 || millis >= 86400000) return null;
        opts = {
            suppressMilliseconds: false,
            suppressSeconds: false,
            includePrefix: false,
            format: "extended",
            ...opts
        };
        const value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
        let fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
        if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
            fmt += opts.format === "basic" ? "ss" : ":ss";
            if (!opts.suppressMilliseconds || value.milliseconds !== 0) fmt += ".SSS";
        }
        let str = value.toFormat(fmt);
        if (opts.includePrefix) str = "T" + str;
        return str;
    }
    /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */ toJSON() {
        return this.toISO();
    }
    /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */ toString() {
        return this.toISO();
    }
    /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */ toMillis() {
        return this.as("milliseconds");
    }
    /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */ valueOf() {
        return this.toMillis();
    }
    /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */ plus(duration) {
        if (!this.isValid) return this;
        const dur = Duration.fromDurationLike(duration), result = {
        };
        for (const k of orderedUnits)if (_utilJs.hasOwnProperty(dur.values, k) || _utilJs.hasOwnProperty(this.values, k)) result[k] = dur.get(k) + this.get(k);
        return clone(this, {
            values: result
        }, true);
    }
    /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */ minus(duration) {
        if (!this.isValid) return this;
        const dur = Duration.fromDurationLike(duration);
        return this.plus(dur.negate());
    }
    /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */ mapUnits(fn) {
        if (!this.isValid) return this;
        const result = {
        };
        for (const k of Object.keys(this.values))result[k] = _utilJs.asNumber(fn(this.values[k], k));
        return clone(this, {
            values: result
        }, true);
    }
    /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */ get(unit) {
        return this[Duration.normalizeUnit(unit)];
    }
    /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */ set(values) {
        if (!this.isValid) return this;
        const mixed = {
            ...this.values,
            ..._utilJs.normalizeObject(values, Duration.normalizeUnit)
        };
        return clone(this, {
            values: mixed
        });
    }
    /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */ reconfigure({ locale , numberingSystem , conversionAccuracy  } = {
    }) {
        const loc = this.loc.clone({
            locale,
            numberingSystem
        }), opts = {
            loc
        };
        if (conversionAccuracy) opts.conversionAccuracy = conversionAccuracy;
        return clone(this, opts);
    }
    /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */ as(unit) {
        return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
    }
    /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */ normalize() {
        if (!this.isValid) return this;
        const vals = this.toObject();
        normalizeValues(this.matrix, vals);
        return clone(this, {
            values: vals
        }, true);
    }
    /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */ shiftTo(...units) {
        if (!this.isValid) return this;
        if (units.length === 0) return this;
        units = units.map((u)=>Duration.normalizeUnit(u)
        );
        const built = {
        }, accumulated = {
        }, vals = this.toObject();
        let lastUnit;
        for (const k of orderedUnits){
            if (units.indexOf(k) >= 0) {
                lastUnit = k;
                let own = 0;
                // anything we haven't boiled down yet should get boiled to this unit
                for(const ak in accumulated){
                    own += this.matrix[ak][k] * accumulated[ak];
                    accumulated[ak] = 0;
                }
                // plus anything that's already in this unit
                if (_utilJs.isNumber(vals[k])) own += vals[k];
                const i = Math.trunc(own);
                built[k] = i;
                accumulated[k] = (own * 1000 - i * 1000) / 1000;
                // plus anything further down the chain that should be rolled up in to this
                for(const down in vals)if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) convert(this.matrix, vals, down, built, k);
            // otherwise, keep it in the wings to boil it later
            } else if (_utilJs.isNumber(vals[k])) accumulated[k] = vals[k];
        }
        // anything leftover becomes the decimal for the last unit
        // lastUnit must be defined since units is not empty
        for(const key in accumulated)if (accumulated[key] !== 0) built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
        return clone(this, {
            values: built
        }, true).normalize();
    }
    /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */ negate() {
        if (!this.isValid) return this;
        const negated = {
        };
        for (const k of Object.keys(this.values))negated[k] = -this.values[k];
        return clone(this, {
            values: negated
        }, true);
    }
    /**
   * Get the years.
   * @type {number}
   */ get years() {
        return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
   * Get the quarters.
   * @type {number}
   */ get quarters() {
        return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
   * Get the months.
   * @type {number}
   */ get months() {
        return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
   * Get the weeks
   * @type {number}
   */ get weeks() {
        return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
   * Get the days.
   * @type {number}
   */ get days() {
        return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
   * Get the hours.
   * @type {number}
   */ get hours() {
        return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
   * Get the minutes.
   * @type {number}
   */ get minutes() {
        return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
   * Get the seconds.
   * @return {number}
   */ get seconds() {
        return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
   * Get the milliseconds.
   * @return {number}
   */ get milliseconds() {
        return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */ get isValid() {
        return this.invalid === null;
    }
    /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */ get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
    }
    /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */ get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
    }
    /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */ equals(other) {
        if (!this.isValid || !other.isValid) return false;
        if (!this.loc.equals(other.loc)) return false;
        function eq(v1, v2) {
            // Consider 0 and undefined as equal
            if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
            return v1 === v2;
        }
        for (const u of orderedUnits){
            if (!eq(this.values[u], other.values[u])) return false;
        }
        return true;
    }
}
exports.default = Duration;

},{"./errors.js":"lBgoZ","./impl/formatter.js":"3Q471","./impl/invalid.js":"44NKv","./impl/locale.js":"4gg6Z","./impl/regexParser.js":"i5DuV","./impl/util.js":"ey0ja","./settings.js":"inSoS","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"lBgoZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @private
 */ parcelHelpers.export(exports, "InvalidDateTimeError", ()=>InvalidDateTimeError
);
/**
 * @private
 */ parcelHelpers.export(exports, "InvalidIntervalError", ()=>InvalidIntervalError
);
/**
 * @private
 */ parcelHelpers.export(exports, "InvalidDurationError", ()=>InvalidDurationError
);
/**
 * @private
 */ parcelHelpers.export(exports, "ConflictingSpecificationError", ()=>ConflictingSpecificationError
);
/**
 * @private
 */ parcelHelpers.export(exports, "InvalidUnitError", ()=>InvalidUnitError
);
/**
 * @private
 */ parcelHelpers.export(exports, "InvalidArgumentError", ()=>InvalidArgumentError
);
/**
 * @private
 */ parcelHelpers.export(exports, "ZoneIsAbstractError", ()=>ZoneIsAbstractError
);
// these aren't really private, but nor are they really useful to document
/**
 * @private
 */ class LuxonError extends Error {
}
class InvalidDateTimeError extends LuxonError {
    constructor(reason){
        super(`Invalid DateTime: ${reason.toMessage()}`);
    }
}
class InvalidIntervalError extends LuxonError {
    constructor(reason){
        super(`Invalid Interval: ${reason.toMessage()}`);
    }
}
class InvalidDurationError extends LuxonError {
    constructor(reason){
        super(`Invalid Duration: ${reason.toMessage()}`);
    }
}
class ConflictingSpecificationError extends LuxonError {
}
class InvalidUnitError extends LuxonError {
    constructor(unit){
        super(`Invalid unit ${unit}`);
    }
}
class InvalidArgumentError extends LuxonError {
}
class ZoneIsAbstractError extends LuxonError {
    constructor(){
        super("Zone is an abstract class");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"3Q471":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _englishJs = require("./english.js");
var _formatsJs = require("./formats.js");
var _utilJs = require("./util.js");
function stringifyTokens(splits, tokenToString) {
    let s = "";
    for (const token of splits)if (token.literal) s += token.val;
    else s += tokenToString(token.val);
    return s;
}
const macroTokenToFormatOpts = {
    D: _formatsJs.DATE_SHORT,
    DD: _formatsJs.DATE_MED,
    DDD: _formatsJs.DATE_FULL,
    DDDD: _formatsJs.DATE_HUGE,
    t: _formatsJs.TIME_SIMPLE,
    tt: _formatsJs.TIME_WITH_SECONDS,
    ttt: _formatsJs.TIME_WITH_SHORT_OFFSET,
    tttt: _formatsJs.TIME_WITH_LONG_OFFSET,
    T: _formatsJs.TIME_24_SIMPLE,
    TT: _formatsJs.TIME_24_WITH_SECONDS,
    TTT: _formatsJs.TIME_24_WITH_SHORT_OFFSET,
    TTTT: _formatsJs.TIME_24_WITH_LONG_OFFSET,
    f: _formatsJs.DATETIME_SHORT,
    ff: _formatsJs.DATETIME_MED,
    fff: _formatsJs.DATETIME_FULL,
    ffff: _formatsJs.DATETIME_HUGE,
    F: _formatsJs.DATETIME_SHORT_WITH_SECONDS,
    FF: _formatsJs.DATETIME_MED_WITH_SECONDS,
    FFF: _formatsJs.DATETIME_FULL_WITH_SECONDS,
    FFFF: _formatsJs.DATETIME_HUGE_WITH_SECONDS
};
class Formatter {
    static create(locale, opts = {
    }) {
        return new Formatter(locale, opts);
    }
    static parseFormat(fmt) {
        let current = null, currentFull = "", bracketed = false;
        const splits = [];
        for(let i = 0; i < fmt.length; i++){
            const c = fmt.charAt(i);
            if (c === "'") {
                if (currentFull.length > 0) splits.push({
                    literal: bracketed,
                    val: currentFull
                });
                current = null;
                currentFull = "";
                bracketed = !bracketed;
            } else if (bracketed) currentFull += c;
            else if (c === current) currentFull += c;
            else {
                if (currentFull.length > 0) splits.push({
                    literal: false,
                    val: currentFull
                });
                currentFull = c;
                current = c;
            }
        }
        if (currentFull.length > 0) splits.push({
            literal: bracketed,
            val: currentFull
        });
        return splits;
    }
    static macroTokenToFormatOpts(token) {
        return macroTokenToFormatOpts[token];
    }
    constructor(locale, formatOpts){
        this.opts = formatOpts;
        this.loc = locale;
        this.systemLoc = null;
    }
    formatWithSystemDefault(dt, opts) {
        if (this.systemLoc === null) this.systemLoc = this.loc.redefaultToSystem();
        const df = this.systemLoc.dtFormatter(dt, {
            ...this.opts,
            ...opts
        });
        return df.format();
    }
    formatDateTime(dt, opts = {
    }) {
        const df = this.loc.dtFormatter(dt, {
            ...this.opts,
            ...opts
        });
        return df.format();
    }
    formatDateTimeParts(dt, opts = {
    }) {
        const df = this.loc.dtFormatter(dt, {
            ...this.opts,
            ...opts
        });
        return df.formatToParts();
    }
    resolvedOptions(dt, opts = {
    }) {
        const df = this.loc.dtFormatter(dt, {
            ...this.opts,
            ...opts
        });
        return df.resolvedOptions();
    }
    num(n, p = 0) {
        // we get some perf out of doing this here, annoyingly
        if (this.opts.forceSimple) return _utilJs.padStart(n, p);
        const opts = {
            ...this.opts
        };
        if (p > 0) opts.padTo = p;
        return this.loc.numberFormatter(opts).format(n);
    }
    formatDateTimeFromString(dt, fmt) {
        const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract)=>this.loc.extract(dt, opts, extract)
        , formatOffset = (opts)=>{
            if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) return "Z";
            return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
        }, meridiem = ()=>knownEnglish ? _englishJs.meridiemForDateTime(dt) : string({
                hour: "numeric",
                hourCycle: "h12"
            }, "dayperiod")
        , month = (length, standalone)=>knownEnglish ? _englishJs.monthForDateTime(dt, length) : string(standalone ? {
                month: length
            } : {
                month: length,
                day: "numeric"
            }, "month")
        , weekday = (length, standalone)=>knownEnglish ? _englishJs.weekdayForDateTime(dt, length) : string(standalone ? {
                weekday: length
            } : {
                weekday: length,
                month: "long",
                day: "numeric"
            }, "weekday")
        , maybeMacro = (token)=>{
            const formatOpts = Formatter.macroTokenToFormatOpts(token);
            if (formatOpts) return this.formatWithSystemDefault(dt, formatOpts);
            else return token;
        }, era = (length)=>knownEnglish ? _englishJs.eraForDateTime(dt, length) : string({
                era: length
            }, "era")
        , tokenToString = (token)=>{
            // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
            switch(token){
                // ms
                case "S":
                    return this.num(dt.millisecond);
                case "u":
                // falls through
                case "SSS":
                    return this.num(dt.millisecond, 3);
                // seconds
                case "s":
                    return this.num(dt.second);
                case "ss":
                    return this.num(dt.second, 2);
                // fractional seconds
                case "uu":
                    return this.num(Math.floor(dt.millisecond / 10), 2);
                case "uuu":
                    return this.num(Math.floor(dt.millisecond / 100));
                // minutes
                case "m":
                    return this.num(dt.minute);
                case "mm":
                    return this.num(dt.minute, 2);
                // hours
                case "h":
                    return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
                case "hh":
                    return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
                case "H":
                    return this.num(dt.hour);
                case "HH":
                    return this.num(dt.hour, 2);
                // offset
                case "Z":
                    // like +6
                    return formatOffset({
                        format: "narrow",
                        allowZ: this.opts.allowZ
                    });
                case "ZZ":
                    // like +06:00
                    return formatOffset({
                        format: "short",
                        allowZ: this.opts.allowZ
                    });
                case "ZZZ":
                    // like +0600
                    return formatOffset({
                        format: "techie",
                        allowZ: this.opts.allowZ
                    });
                case "ZZZZ":
                    // like EST
                    return dt.zone.offsetName(dt.ts, {
                        format: "short",
                        locale: this.loc.locale
                    });
                case "ZZZZZ":
                    // like Eastern Standard Time
                    return dt.zone.offsetName(dt.ts, {
                        format: "long",
                        locale: this.loc.locale
                    });
                // zone
                case "z":
                    // like America/New_York
                    return dt.zoneName;
                // meridiems
                case "a":
                    return meridiem();
                // dates
                case "d":
                    return useDateTimeFormatter ? string({
                        day: "numeric"
                    }, "day") : this.num(dt.day);
                case "dd":
                    return useDateTimeFormatter ? string({
                        day: "2-digit"
                    }, "day") : this.num(dt.day, 2);
                // weekdays - standalone
                case "c":
                    // like 1
                    return this.num(dt.weekday);
                case "ccc":
                    // like 'Tues'
                    return weekday("short", true);
                case "cccc":
                    // like 'Tuesday'
                    return weekday("long", true);
                case "ccccc":
                    // like 'T'
                    return weekday("narrow", true);
                // weekdays - format
                case "E":
                    // like 1
                    return this.num(dt.weekday);
                case "EEE":
                    // like 'Tues'
                    return weekday("short", false);
                case "EEEE":
                    // like 'Tuesday'
                    return weekday("long", false);
                case "EEEEE":
                    // like 'T'
                    return weekday("narrow", false);
                // months - standalone
                case "L":
                    // like 1
                    return useDateTimeFormatter ? string({
                        month: "numeric",
                        day: "numeric"
                    }, "month") : this.num(dt.month);
                case "LL":
                    // like 01, doesn't seem to work
                    return useDateTimeFormatter ? string({
                        month: "2-digit",
                        day: "numeric"
                    }, "month") : this.num(dt.month, 2);
                case "LLL":
                    // like Jan
                    return month("short", true);
                case "LLLL":
                    // like January
                    return month("long", true);
                case "LLLLL":
                    // like J
                    return month("narrow", true);
                // months - format
                case "M":
                    // like 1
                    return useDateTimeFormatter ? string({
                        month: "numeric"
                    }, "month") : this.num(dt.month);
                case "MM":
                    // like 01
                    return useDateTimeFormatter ? string({
                        month: "2-digit"
                    }, "month") : this.num(dt.month, 2);
                case "MMM":
                    // like Jan
                    return month("short", false);
                case "MMMM":
                    // like January
                    return month("long", false);
                case "MMMMM":
                    // like J
                    return month("narrow", false);
                // years
                case "y":
                    // like 2014
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : this.num(dt.year);
                case "yy":
                    // like 14
                    return useDateTimeFormatter ? string({
                        year: "2-digit"
                    }, "year") : this.num(dt.year.toString().slice(-2), 2);
                case "yyyy":
                    // like 0012
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : this.num(dt.year, 4);
                case "yyyyyy":
                    // like 000012
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : this.num(dt.year, 6);
                // eras
                case "G":
                    // like AD
                    return era("short");
                case "GG":
                    // like Anno Domini
                    return era("long");
                case "GGGGG":
                    return era("narrow");
                case "kk":
                    return this.num(dt.weekYear.toString().slice(-2), 2);
                case "kkkk":
                    return this.num(dt.weekYear, 4);
                case "W":
                    return this.num(dt.weekNumber);
                case "WW":
                    return this.num(dt.weekNumber, 2);
                case "o":
                    return this.num(dt.ordinal);
                case "ooo":
                    return this.num(dt.ordinal, 3);
                case "q":
                    // like 1
                    return this.num(dt.quarter);
                case "qq":
                    // like 01
                    return this.num(dt.quarter, 2);
                case "X":
                    return this.num(Math.floor(dt.ts / 1000));
                case "x":
                    return this.num(dt.ts);
                default:
                    return maybeMacro(token);
            }
        };
        return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
    }
    formatDurationFromString(dur, fmt) {
        const tokenToField = (token)=>{
            switch(token[0]){
                case "S":
                    return "millisecond";
                case "s":
                    return "second";
                case "m":
                    return "minute";
                case "h":
                    return "hour";
                case "d":
                    return "day";
                case "M":
                    return "month";
                case "y":
                    return "year";
                default:
                    return null;
            }
        }, tokenToString = (lildur)=>(token)=>{
                const mapped = tokenToField(token);
                if (mapped) return this.num(lildur.get(mapped), token.length);
                else return token;
            }
        , tokens = Formatter.parseFormat(fmt), realTokens = tokens.reduce((found, { literal , val  })=>literal ? found : found.concat(val)
        , []), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t)=>t
        ));
        return stringifyTokens(tokens, tokenToString(collapsed));
    }
}
exports.default = Formatter;

},{"./english.js":"d1H1r","./formats.js":"dYcZG","./util.js":"ey0ja","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"d1H1r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "monthsLong", ()=>monthsLong
);
parcelHelpers.export(exports, "monthsShort", ()=>monthsShort
);
parcelHelpers.export(exports, "monthsNarrow", ()=>monthsNarrow
);
parcelHelpers.export(exports, "months", ()=>months
);
parcelHelpers.export(exports, "weekdaysLong", ()=>weekdaysLong
);
parcelHelpers.export(exports, "weekdaysShort", ()=>weekdaysShort
);
parcelHelpers.export(exports, "weekdaysNarrow", ()=>weekdaysNarrow
);
parcelHelpers.export(exports, "weekdays", ()=>weekdays
);
parcelHelpers.export(exports, "meridiems", ()=>meridiems
);
parcelHelpers.export(exports, "erasLong", ()=>erasLong
);
parcelHelpers.export(exports, "erasShort", ()=>erasShort
);
parcelHelpers.export(exports, "erasNarrow", ()=>erasNarrow
);
parcelHelpers.export(exports, "eras", ()=>eras
);
parcelHelpers.export(exports, "meridiemForDateTime", ()=>meridiemForDateTime
);
parcelHelpers.export(exports, "weekdayForDateTime", ()=>weekdayForDateTime
);
parcelHelpers.export(exports, "monthForDateTime", ()=>monthForDateTime
);
parcelHelpers.export(exports, "eraForDateTime", ()=>eraForDateTime
);
parcelHelpers.export(exports, "formatRelativeTime", ()=>formatRelativeTime
);
parcelHelpers.export(exports, "formatString", ()=>formatString
);
var _formatsJs = require("./formats.js");
var _utilJs = require("./util.js");
function stringify(obj) {
    return JSON.stringify(obj, Object.keys(obj).sort());
}
const monthsLong = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December", 
];
const monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec", 
];
const monthsNarrow = [
    "J",
    "F",
    "M",
    "A",
    "M",
    "J",
    "J",
    "A",
    "S",
    "O",
    "N",
    "D"
];
function months(length) {
    switch(length){
        case "narrow":
            return [
                ...monthsNarrow
            ];
        case "short":
            return [
                ...monthsShort
            ];
        case "long":
            return [
                ...monthsLong
            ];
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
            ];
        case "2-digit":
            return [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12"
            ];
        default:
            return null;
    }
}
const weekdaysLong = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday", 
];
const weekdaysShort = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
];
const weekdaysNarrow = [
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
    "S"
];
function weekdays(length) {
    switch(length){
        case "narrow":
            return [
                ...weekdaysNarrow
            ];
        case "short":
            return [
                ...weekdaysShort
            ];
        case "long":
            return [
                ...weekdaysLong
            ];
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ];
        default:
            return null;
    }
}
const meridiems = [
    "AM",
    "PM"
];
const erasLong = [
    "Before Christ",
    "Anno Domini"
];
const erasShort = [
    "BC",
    "AD"
];
const erasNarrow = [
    "B",
    "A"
];
function eras(length) {
    switch(length){
        case "narrow":
            return [
                ...erasNarrow
            ];
        case "short":
            return [
                ...erasShort
            ];
        case "long":
            return [
                ...erasLong
            ];
        default:
            return null;
    }
}
function meridiemForDateTime(dt) {
    return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
    return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
    return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
    return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
    const units = {
        years: [
            "year",
            "yr."
        ],
        quarters: [
            "quarter",
            "qtr."
        ],
        months: [
            "month",
            "mo."
        ],
        weeks: [
            "week",
            "wk."
        ],
        days: [
            "day",
            "day",
            "days"
        ],
        hours: [
            "hour",
            "hr."
        ],
        minutes: [
            "minute",
            "min."
        ],
        seconds: [
            "second",
            "sec."
        ]
    };
    const lastable = [
        "hours",
        "minutes",
        "seconds"
    ].indexOf(unit) === -1;
    if (numeric === "auto" && lastable) {
        const isDay = unit === "days";
        switch(count){
            case 1:
                return isDay ? "tomorrow" : `next ${units[unit][0]}`;
            case -1:
                return isDay ? "yesterday" : `last ${units[unit][0]}`;
            case 0:
                return isDay ? "today" : `this ${units[unit][0]}`;
            default:
        }
    }
    const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
    return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}
function formatString(knownFormat) {
    // these all have the offsets removed because we don't have access to them
    // without all the intl stuff this is backfilling
    const filtered = _utilJs.pick(knownFormat, [
        "weekday",
        "era",
        "year",
        "month",
        "day",
        "hour",
        "minute",
        "second",
        "timeZoneName",
        "hourCycle", 
    ]), key = stringify(filtered), dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";
    switch(key){
        case stringify(_formatsJs.DATE_SHORT):
            return "M/d/yyyy";
        case stringify(_formatsJs.DATE_MED):
            return "LLL d, yyyy";
        case stringify(_formatsJs.DATE_MED_WITH_WEEKDAY):
            return "EEE, LLL d, yyyy";
        case stringify(_formatsJs.DATE_FULL):
            return "LLLL d, yyyy";
        case stringify(_formatsJs.DATE_HUGE):
            return "EEEE, LLLL d, yyyy";
        case stringify(_formatsJs.TIME_SIMPLE):
            return "h:mm a";
        case stringify(_formatsJs.TIME_WITH_SECONDS):
            return "h:mm:ss a";
        case stringify(_formatsJs.TIME_WITH_SHORT_OFFSET):
            return "h:mm a";
        case stringify(_formatsJs.TIME_WITH_LONG_OFFSET):
            return "h:mm a";
        case stringify(_formatsJs.TIME_24_SIMPLE):
            return "HH:mm";
        case stringify(_formatsJs.TIME_24_WITH_SECONDS):
            return "HH:mm:ss";
        case stringify(_formatsJs.TIME_24_WITH_SHORT_OFFSET):
            return "HH:mm";
        case stringify(_formatsJs.TIME_24_WITH_LONG_OFFSET):
            return "HH:mm";
        case stringify(_formatsJs.DATETIME_SHORT):
            return "M/d/yyyy, h:mm a";
        case stringify(_formatsJs.DATETIME_MED):
            return "LLL d, yyyy, h:mm a";
        case stringify(_formatsJs.DATETIME_FULL):
            return "LLLL d, yyyy, h:mm a";
        case stringify(_formatsJs.DATETIME_HUGE):
            return dateTimeHuge;
        case stringify(_formatsJs.DATETIME_SHORT_WITH_SECONDS):
            return "M/d/yyyy, h:mm:ss a";
        case stringify(_formatsJs.DATETIME_MED_WITH_SECONDS):
            return "LLL d, yyyy, h:mm:ss a";
        case stringify(_formatsJs.DATETIME_MED_WITH_WEEKDAY):
            return "EEE, d LLL yyyy, h:mm a";
        case stringify(_formatsJs.DATETIME_FULL_WITH_SECONDS):
            return "LLLL d, yyyy, h:mm:ss a";
        case stringify(_formatsJs.DATETIME_HUGE_WITH_SECONDS):
            return "EEEE, LLLL d, yyyy, h:mm:ss a";
        default:
            return dateTimeHuge;
    }
}

},{"./formats.js":"dYcZG","./util.js":"ey0ja","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"dYcZG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DATE_SHORT", ()=>DATE_SHORT
);
parcelHelpers.export(exports, "DATE_MED", ()=>DATE_MED
);
parcelHelpers.export(exports, "DATE_MED_WITH_WEEKDAY", ()=>DATE_MED_WITH_WEEKDAY
);
parcelHelpers.export(exports, "DATE_FULL", ()=>DATE_FULL
);
parcelHelpers.export(exports, "DATE_HUGE", ()=>DATE_HUGE
);
parcelHelpers.export(exports, "TIME_SIMPLE", ()=>TIME_SIMPLE
);
parcelHelpers.export(exports, "TIME_WITH_SECONDS", ()=>TIME_WITH_SECONDS
);
parcelHelpers.export(exports, "TIME_WITH_SHORT_OFFSET", ()=>TIME_WITH_SHORT_OFFSET
);
parcelHelpers.export(exports, "TIME_WITH_LONG_OFFSET", ()=>TIME_WITH_LONG_OFFSET
);
parcelHelpers.export(exports, "TIME_24_SIMPLE", ()=>TIME_24_SIMPLE
);
parcelHelpers.export(exports, "TIME_24_WITH_SECONDS", ()=>TIME_24_WITH_SECONDS
);
parcelHelpers.export(exports, "TIME_24_WITH_SHORT_OFFSET", ()=>TIME_24_WITH_SHORT_OFFSET
);
parcelHelpers.export(exports, "TIME_24_WITH_LONG_OFFSET", ()=>TIME_24_WITH_LONG_OFFSET
);
parcelHelpers.export(exports, "DATETIME_SHORT", ()=>DATETIME_SHORT
);
parcelHelpers.export(exports, "DATETIME_SHORT_WITH_SECONDS", ()=>DATETIME_SHORT_WITH_SECONDS
);
parcelHelpers.export(exports, "DATETIME_MED", ()=>DATETIME_MED
);
parcelHelpers.export(exports, "DATETIME_MED_WITH_SECONDS", ()=>DATETIME_MED_WITH_SECONDS
);
parcelHelpers.export(exports, "DATETIME_MED_WITH_WEEKDAY", ()=>DATETIME_MED_WITH_WEEKDAY
);
parcelHelpers.export(exports, "DATETIME_FULL", ()=>DATETIME_FULL
);
parcelHelpers.export(exports, "DATETIME_FULL_WITH_SECONDS", ()=>DATETIME_FULL_WITH_SECONDS
);
parcelHelpers.export(exports, "DATETIME_HUGE", ()=>DATETIME_HUGE
);
parcelHelpers.export(exports, "DATETIME_HUGE_WITH_SECONDS", ()=>DATETIME_HUGE_WITH_SECONDS
);
/**
 * @private
 */ const n = "numeric", s = "short", l = "long";
const DATE_SHORT = {
    year: n,
    month: n,
    day: n
};
const DATE_MED = {
    year: n,
    month: s,
    day: n
};
const DATE_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s
};
const DATE_FULL = {
    year: n,
    month: l,
    day: n
};
const DATE_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l
};
const TIME_SIMPLE = {
    hour: n,
    minute: n
};
const TIME_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n
};
const TIME_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
};
const TIME_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
};
const TIME_24_SIMPLE = {
    hour: n,
    minute: n,
    hourCycle: "h23"
};
const TIME_24_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23"
};
const TIME_24_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23",
    timeZoneName: s
};
const TIME_24_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23",
    timeZoneName: l
};
const DATETIME_SHORT = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n
};
const DATETIME_SHORT_WITH_SECONDS = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n,
    second: n
};
const DATETIME_MED = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n
};
const DATETIME_MED_WITH_SECONDS = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n,
    second: n
};
const DATETIME_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s,
    hour: n,
    minute: n
};
const DATETIME_FULL = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    timeZoneName: s
};
const DATETIME_FULL_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
};
const DATETIME_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    timeZoneName: l
};
const DATETIME_HUGE_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"ey0ja":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @private
 */ // TYPES
parcelHelpers.export(exports, "isUndefined", ()=>isUndefined
);
parcelHelpers.export(exports, "isNumber", ()=>isNumber
);
parcelHelpers.export(exports, "isInteger", ()=>isInteger
);
parcelHelpers.export(exports, "isString", ()=>isString
);
parcelHelpers.export(exports, "isDate", ()=>isDate
);
// CAPABILITIES
parcelHelpers.export(exports, "hasRelative", ()=>hasRelative
);
// OBJECTS AND ARRAYS
parcelHelpers.export(exports, "maybeArray", ()=>maybeArray
);
parcelHelpers.export(exports, "bestBy", ()=>bestBy
);
parcelHelpers.export(exports, "pick", ()=>pick
);
parcelHelpers.export(exports, "hasOwnProperty", ()=>hasOwnProperty
);
// NUMBERS AND STRINGS
parcelHelpers.export(exports, "integerBetween", ()=>integerBetween
);
// x % n but takes the sign of n instead of x
parcelHelpers.export(exports, "floorMod", ()=>floorMod
);
parcelHelpers.export(exports, "padStart", ()=>padStart
);
parcelHelpers.export(exports, "parseInteger", ()=>parseInteger
);
parcelHelpers.export(exports, "parseFloating", ()=>parseFloating
);
parcelHelpers.export(exports, "parseMillis", ()=>parseMillis
);
parcelHelpers.export(exports, "roundTo", ()=>roundTo
);
// DATE BASICS
parcelHelpers.export(exports, "isLeapYear", ()=>isLeapYear
);
parcelHelpers.export(exports, "daysInYear", ()=>daysInYear
);
parcelHelpers.export(exports, "daysInMonth", ()=>daysInMonth
);
// covert a calendar object to a local timestamp (epoch, but with the offset baked in)
parcelHelpers.export(exports, "objToLocalTS", ()=>objToLocalTS
);
parcelHelpers.export(exports, "weeksInWeekYear", ()=>weeksInWeekYear
);
parcelHelpers.export(exports, "untruncateYear", ()=>untruncateYear
);
// PARSING
parcelHelpers.export(exports, "parseZoneInfo", ()=>parseZoneInfo
);
// signedOffset('-5', '30') -> -330
parcelHelpers.export(exports, "signedOffset", ()=>signedOffset
);
// COERCION
parcelHelpers.export(exports, "asNumber", ()=>asNumber
);
parcelHelpers.export(exports, "normalizeObject", ()=>normalizeObject
);
parcelHelpers.export(exports, "formatOffset", ()=>formatOffset
);
parcelHelpers.export(exports, "timeObject", ()=>timeObject
);
parcelHelpers.export(exports, "ianaRegex", ()=>ianaRegex
);
/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/ var _errorsJs = require("../errors.js");
function isUndefined(o) {
    return typeof o === "undefined";
}
function isNumber(o) {
    return typeof o === "number";
}
function isInteger(o) {
    return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
    return typeof o === "string";
}
function isDate(o) {
    return Object.prototype.toString.call(o) === "[object Date]";
}
function hasRelative() {
    try {
        return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
    } catch (e) {
        return false;
    }
}
function maybeArray(thing) {
    return Array.isArray(thing) ? thing : [
        thing
    ];
}
function bestBy(arr, by, compare) {
    if (arr.length === 0) return undefined;
    return arr.reduce((best, next)=>{
        const pair = [
            by(next),
            next
        ];
        if (!best) return pair;
        else if (compare(best[0], pair[0]) === best[0]) return best;
        else return pair;
    }, null)[1];
}
function pick(obj, keys) {
    return keys.reduce((a, k)=>{
        a[k] = obj[k];
        return a;
    }, {
    });
}
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
function integerBetween(thing, bottom, top) {
    return isInteger(thing) && thing >= bottom && thing <= top;
}
function floorMod(x, n) {
    return x - n * Math.floor(x / n);
}
function padStart(input, n = 2) {
    const isNeg = input < 0;
    let padded;
    if (isNeg) padded = "-" + ("" + -input).padStart(n, "0");
    else padded = ("" + input).padStart(n, "0");
    return padded;
}
function parseInteger(string) {
    if (isUndefined(string) || string === null || string === "") return undefined;
    else return parseInt(string, 10);
}
function parseFloating(string) {
    if (isUndefined(string) || string === null || string === "") return undefined;
    else return parseFloat(string);
}
function parseMillis(fraction) {
    // Return undefined (instead of 0) in these cases, where fraction is not set
    if (isUndefined(fraction) || fraction === null || fraction === "") return undefined;
    else {
        const f = parseFloat("0." + fraction) * 1000;
        return Math.floor(f);
    }
}
function roundTo(number, digits, towardZero = false) {
    const factor = 10 ** digits, rounder = towardZero ? Math.trunc : Math.round;
    return rounder(number * factor) / factor;
}
function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
    const modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
    if (modMonth === 2) return isLeapYear(modYear) ? 29 : 28;
    else return [
        31,
        null,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ][modMonth - 1];
}
function objToLocalTS(obj) {
    let d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
    // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
    if (obj.year < 100 && obj.year >= 0) {
        d = new Date(d);
        d.setUTCFullYear(d.getUTCFullYear() - 1900);
    }
    return +d;
}
function weeksInWeekYear(weekYear) {
    const p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
    return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
    if (year > 99) return year;
    else return year > 60 ? 1900 + year : 2000 + year;
}
function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
    const date = new Date(ts), intlOpts = {
        hourCycle: "h23",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    };
    if (timeZone) intlOpts.timeZone = timeZone;
    const modified = {
        timeZoneName: offsetFormat,
        ...intlOpts
    };
    const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((m)=>m.type.toLowerCase() === "timezonename"
    );
    return parsed ? parsed.value : null;
}
function signedOffset(offHourStr, offMinuteStr) {
    let offHour = parseInt(offHourStr, 10);
    // don't || this because we want to preserve -0
    if (Number.isNaN(offHour)) offHour = 0;
    const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
    return offHour * 60 + offMinSigned;
}
function asNumber(value) {
    const numericValue = Number(value);
    if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new _errorsJs.InvalidArgumentError(`Invalid unit value ${value}`);
    return numericValue;
}
function normalizeObject(obj, normalizer) {
    const normalized = {
    };
    for(const u in obj)if (hasOwnProperty(obj, u)) {
        const v = obj[u];
        if (v === undefined || v === null) continue;
        normalized[normalizer(u)] = asNumber(v);
    }
    return normalized;
}
function formatOffset(offset, format) {
    const hours = Math.trunc(Math.abs(offset / 60)), minutes = Math.trunc(Math.abs(offset % 60)), sign = offset >= 0 ? "+" : "-";
    switch(format){
        case "short":
            return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
        case "narrow":
            return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
        case "techie":
            return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
        default:
            throw new RangeError(`Value format ${format} is out of range for property format`);
    }
}
function timeObject(obj) {
    return pick(obj, [
        "hour",
        "minute",
        "second",
        "millisecond"
    ]);
}
const ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/;

},{"../errors.js":"lBgoZ","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"44NKv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Invalid {
    constructor(reason, explanation){
        this.reason = reason;
        this.explanation = explanation;
    }
    toMessage() {
        if (this.explanation) return `${this.reason}: ${this.explanation}`;
        else return this.reason;
    }
}
exports.default = Invalid;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"4gg6Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilJs = require("./util.js");
var _englishJs = require("./english.js");
var _settingsJs = require("../settings.js");
var _settingsJsDefault = parcelHelpers.interopDefault(_settingsJs);
var _datetimeJs = require("../datetime.js");
var _datetimeJsDefault = parcelHelpers.interopDefault(_datetimeJs);
var _ianazoneJs = require("../zones/IANAZone.js");
var _ianazoneJsDefault = parcelHelpers.interopDefault(_ianazoneJs);
// todo - remap caching
let intlLFCache = {
};
function getCachedLF(locString, opts = {
}) {
    const key = JSON.stringify([
        locString,
        opts
    ]);
    let dtf = intlLFCache[key];
    if (!dtf) {
        dtf = new Intl.ListFormat(locString, opts);
        intlLFCache[key] = dtf;
    }
    return dtf;
}
let intlDTCache = {
};
function getCachedDTF(locString, opts = {
}) {
    const key = JSON.stringify([
        locString,
        opts
    ]);
    let dtf = intlDTCache[key];
    if (!dtf) {
        dtf = new Intl.DateTimeFormat(locString, opts);
        intlDTCache[key] = dtf;
    }
    return dtf;
}
let intlNumCache = {
};
function getCachedINF(locString, opts = {
}) {
    const key = JSON.stringify([
        locString,
        opts
    ]);
    let inf = intlNumCache[key];
    if (!inf) {
        inf = new Intl.NumberFormat(locString, opts);
        intlNumCache[key] = inf;
    }
    return inf;
}
let intlRelCache = {
};
function getCachedRTF(locString, opts = {
}) {
    const { base , ...cacheKeyOpts } = opts; // exclude `base` from the options
    const key = JSON.stringify([
        locString,
        cacheKeyOpts
    ]);
    let inf = intlRelCache[key];
    if (!inf) {
        inf = new Intl.RelativeTimeFormat(locString, opts);
        intlRelCache[key] = inf;
    }
    return inf;
}
let sysLocaleCache = null;
function systemLocale() {
    if (sysLocaleCache) return sysLocaleCache;
    else {
        sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
        return sysLocaleCache;
    }
}
function parseLocaleString(localeStr) {
    // I really want to avoid writing a BCP 47 parser
    // see, e.g. https://github.com/wooorm/bcp-47
    // Instead, we'll do this:
    // a) if the string has no -u extensions, just leave it alone
    // b) if it does, use Intl to resolve everything
    // c) if Intl fails, try again without the -u
    const uIndex = localeStr.indexOf("-u-");
    if (uIndex === -1) return [
        localeStr
    ];
    else {
        let options;
        const smaller = localeStr.substring(0, uIndex);
        try {
            options = getCachedDTF(localeStr).resolvedOptions();
        } catch (e) {
            options = getCachedDTF(smaller).resolvedOptions();
        }
        const { numberingSystem , calendar  } = options;
        // return the smaller one so that we can append the calendar and numbering overrides to it
        return [
            smaller,
            numberingSystem,
            calendar
        ];
    }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
    if (outputCalendar || numberingSystem) {
        localeStr += "-u";
        if (outputCalendar) localeStr += `-ca-${outputCalendar}`;
        if (numberingSystem) localeStr += `-nu-${numberingSystem}`;
        return localeStr;
    } else return localeStr;
}
function mapMonths(f) {
    const ms = [];
    for(let i = 1; i <= 12; i++){
        const dt = _datetimeJsDefault.default.utc(2016, i, 1);
        ms.push(f(dt));
    }
    return ms;
}
function mapWeekdays(f) {
    const ms = [];
    for(let i = 1; i <= 7; i++){
        const dt = _datetimeJsDefault.default.utc(2016, 11, 13 + i);
        ms.push(f(dt));
    }
    return ms;
}
function listStuff(loc, length, defaultOK, englishFn, intlFn) {
    const mode = loc.listingMode(defaultOK);
    if (mode === "error") return null;
    else if (mode === "en") return englishFn(length);
    else return intlFn(length);
}
function supportsFastNumbers(loc) {
    if (loc.numberingSystem && loc.numberingSystem !== "latn") return false;
    else return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
}
/**
 * @private
 */ class PolyNumberFormatter {
    constructor(intl, forceSimple, opts){
        this.padTo = opts.padTo || 0;
        this.floor = opts.floor || false;
        const { padTo , floor , ...otherOpts } = opts;
        if (!forceSimple || Object.keys(otherOpts).length > 0) {
            const intlOpts = {
                useGrouping: false,
                ...opts
            };
            if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
            this.inf = getCachedINF(intl, intlOpts);
        }
    }
    format(i) {
        if (this.inf) {
            const fixed = this.floor ? Math.floor(i) : i;
            return this.inf.format(fixed);
        } else {
            // to match the browser's numberformatter defaults
            const fixed = this.floor ? Math.floor(i) : _utilJs.roundTo(i, 3);
            return _utilJs.padStart(fixed, this.padTo);
        }
    }
}
/**
 * @private
 */ class PolyDateFormatter {
    constructor(dt, intl, opts){
        this.opts = opts;
        let z;
        if (dt.zone.isUniversal) {
            // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
            // That is why fixed-offset TZ is set to that unless it is:
            // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
            // 2. Unsupported by the browser:
            //    - some do not support Etc/
            //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
            const gmtOffset = -1 * (dt.offset / 60);
            const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
            if (dt.offset !== 0 && _ianazoneJsDefault.default.create(offsetZ).valid) {
                z = offsetZ;
                this.dt = dt;
            } else {
                // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
                // So we have to make do. Two cases:
                // 1. The format options tell us to show the zone. We can't do that, so the best
                // we can do is format the date in UTC.
                // 2. The format options don't tell us to show the zone. Then we can adjust them
                // the time and tell the formatter to show it to us in UTC, so that the time is right
                // and the bad zone doesn't show up.
                z = "UTC";
                if (opts.timeZoneName) this.dt = dt;
                else this.dt = dt.offset === 0 ? dt : _datetimeJsDefault.default.fromMillis(dt.ts + dt.offset * 60000);
            }
        } else if (dt.zone.type === "system") this.dt = dt;
        else {
            this.dt = dt;
            z = dt.zone.name;
        }
        const intlOpts = {
            ...this.opts
        };
        if (z) intlOpts.timeZone = z;
        this.dtf = getCachedDTF(intl, intlOpts);
    }
    format() {
        return this.dtf.format(this.dt.toJSDate());
    }
    formatToParts() {
        return this.dtf.formatToParts(this.dt.toJSDate());
    }
    resolvedOptions() {
        return this.dtf.resolvedOptions();
    }
}
/**
 * @private
 */ class PolyRelFormatter {
    constructor(intl, isEnglish, opts){
        this.opts = {
            style: "long",
            ...opts
        };
        if (!isEnglish && _utilJs.hasRelative()) this.rtf = getCachedRTF(intl, opts);
    }
    format(count, unit) {
        if (this.rtf) return this.rtf.format(count, unit);
        else return _englishJs.formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
    formatToParts(count, unit) {
        if (this.rtf) return this.rtf.formatToParts(count, unit);
        else return [];
    }
}
class Locale {
    static fromOpts(opts) {
        return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
    }
    static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
        const specifiedLocale = locale || _settingsJsDefault.default.defaultLocale;
        // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
        const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
        const numberingSystemR = numberingSystem || _settingsJsDefault.default.defaultNumberingSystem;
        const outputCalendarR = outputCalendar || _settingsJsDefault.default.defaultOutputCalendar;
        return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
    }
    static resetCache() {
        sysLocaleCache = null;
        intlDTCache = {
        };
        intlNumCache = {
        };
        intlRelCache = {
        };
    }
    static fromObject({ locale , numberingSystem , outputCalendar  } = {
    }) {
        return Locale.create(locale, numberingSystem, outputCalendar);
    }
    constructor(locale, numbering, outputCalendar, specifiedLocale){
        const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);
        this.locale = parsedLocale;
        this.numberingSystem = numbering || parsedNumberingSystem || null;
        this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
        this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
        this.weekdaysCache = {
            format: {
            },
            standalone: {
            }
        };
        this.monthsCache = {
            format: {
            },
            standalone: {
            }
        };
        this.meridiemCache = null;
        this.eraCache = {
        };
        this.specifiedLocale = specifiedLocale;
        this.fastNumbersCached = null;
    }
    get fastNumbers() {
        if (this.fastNumbersCached == null) this.fastNumbersCached = supportsFastNumbers(this);
        return this.fastNumbersCached;
    }
    listingMode() {
        const isActuallyEn = this.isEnglish();
        const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
        return isActuallyEn && hasNoWeirdness ? "en" : "intl";
    }
    clone(alts) {
        if (!alts || Object.getOwnPropertyNames(alts).length === 0) return this;
        else return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
    redefaultToEN(alts = {
    }) {
        return this.clone({
            ...alts,
            defaultToEN: true
        });
    }
    redefaultToSystem(alts = {
    }) {
        return this.clone({
            ...alts,
            defaultToEN: false
        });
    }
    months(length, format = false, defaultOK = true) {
        return listStuff(this, length, defaultOK, _englishJs.months, ()=>{
            const intl = format ? {
                month: length,
                day: "numeric"
            } : {
                month: length
            }, formatStr = format ? "format" : "standalone";
            if (!this.monthsCache[formatStr][length]) this.monthsCache[formatStr][length] = mapMonths((dt)=>this.extract(dt, intl, "month")
            );
            return this.monthsCache[formatStr][length];
        });
    }
    weekdays(length, format = false, defaultOK = true) {
        return listStuff(this, length, defaultOK, _englishJs.weekdays, ()=>{
            const intl = format ? {
                weekday: length,
                year: "numeric",
                month: "long",
                day: "numeric"
            } : {
                weekday: length
            }, formatStr = format ? "format" : "standalone";
            if (!this.weekdaysCache[formatStr][length]) this.weekdaysCache[formatStr][length] = mapWeekdays((dt)=>this.extract(dt, intl, "weekday")
            );
            return this.weekdaysCache[formatStr][length];
        });
    }
    meridiems(defaultOK = true) {
        return listStuff(this, undefined, defaultOK, ()=>_englishJs.meridiems
        , ()=>{
            // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
            // for AM and PM. This is probably wrong, but it's makes parsing way easier.
            if (!this.meridiemCache) {
                const intl = {
                    hour: "numeric",
                    hourCycle: "h12"
                };
                this.meridiemCache = [
                    _datetimeJsDefault.default.utc(2016, 11, 13, 9),
                    _datetimeJsDefault.default.utc(2016, 11, 13, 19)
                ].map((dt)=>this.extract(dt, intl, "dayperiod")
                );
            }
            return this.meridiemCache;
        });
    }
    eras(length, defaultOK = true) {
        return listStuff(this, length, defaultOK, _englishJs.eras, ()=>{
            const intl = {
                era: length
            };
            // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
            // to definitely enumerate them.
            if (!this.eraCache[length]) this.eraCache[length] = [
                _datetimeJsDefault.default.utc(-40, 1, 1),
                _datetimeJsDefault.default.utc(2017, 1, 1)
            ].map((dt)=>this.extract(dt, intl, "era")
            );
            return this.eraCache[length];
        });
    }
    extract(dt, intlOpts, field) {
        const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m)=>m.type.toLowerCase() === field
        );
        return matching ? matching.value : null;
    }
    numberFormatter(opts = {
    }) {
        // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
        // (in contrast, the rest of the condition is used heavily)
        return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
    }
    dtFormatter(dt, intlOpts = {
    }) {
        return new PolyDateFormatter(dt, this.intl, intlOpts);
    }
    relFormatter(opts = {
    }) {
        return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
    }
    listFormatter(opts = {
    }) {
        return getCachedLF(this.intl, opts);
    }
    isEnglish() {
        return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
    }
    equals(other) {
        return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
    }
}
exports.default = Locale;

},{"./util.js":"ey0ja","./english.js":"d1H1r","../settings.js":"inSoS","../datetime.js":"jQCsj","../zones/IANAZone.js":"2AfbS","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"inSoS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _systemZoneJs = require("./zones/systemZone.js");
var _systemZoneJsDefault = parcelHelpers.interopDefault(_systemZoneJs);
var _ianazoneJs = require("./zones/IANAZone.js");
var _ianazoneJsDefault = parcelHelpers.interopDefault(_ianazoneJs);
var _localeJs = require("./impl/locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var _zoneUtilJs = require("./impl/zoneUtil.js");
let now = ()=>Date.now()
, defaultZone = "system", defaultLocale = null, defaultNumberingSystem = null, defaultOutputCalendar = null, throwOnInvalid;
class Settings {
    /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */ static get now() {
        return now;
    }
    /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */ static set now(n) {
        now = n;
    }
    /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */ static set defaultZone(zone) {
        defaultZone = zone;
    }
    /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */ static get defaultZone() {
        return _zoneUtilJs.normalizeZone(defaultZone, _systemZoneJsDefault.default.instance);
    }
    /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */ static get defaultLocale() {
        return defaultLocale;
    }
    /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */ static set defaultLocale(locale) {
        defaultLocale = locale;
    }
    /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */ static get defaultNumberingSystem() {
        return defaultNumberingSystem;
    }
    /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */ static set defaultNumberingSystem(numberingSystem) {
        defaultNumberingSystem = numberingSystem;
    }
    /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */ static get defaultOutputCalendar() {
        return defaultOutputCalendar;
    }
    /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */ static set defaultOutputCalendar(outputCalendar) {
        defaultOutputCalendar = outputCalendar;
    }
    /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */ static get throwOnInvalid() {
        return throwOnInvalid;
    }
    /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */ static set throwOnInvalid(t) {
        throwOnInvalid = t;
    }
    /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */ static resetCaches() {
        _localeJsDefault.default.resetCache();
        _ianazoneJsDefault.default.resetCache();
    }
}
exports.default = Settings;

},{"./zones/systemZone.js":"7txBc","./zones/IANAZone.js":"2AfbS","./impl/locale.js":"4gg6Z","./impl/zoneUtil.js":"k79uo","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"7txBc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilJs = require("../impl/util.js");
var _zoneJs = require("../zone.js");
var _zoneJsDefault = parcelHelpers.interopDefault(_zoneJs);
let singleton = null;
class SystemZone extends _zoneJsDefault.default {
    /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */ static get instance() {
        if (singleton === null) singleton = new SystemZone();
        return singleton;
    }
    /** @override **/ get type() {
        return "system";
    }
    /** @override **/ get name() {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    /** @override **/ get isUniversal() {
        return false;
    }
    /** @override **/ offsetName(ts, { format , locale  }) {
        return _utilJs.parseZoneInfo(ts, format, locale);
    }
    /** @override **/ formatOffset(ts, format) {
        return _utilJs.formatOffset(this.offset(ts), format);
    }
    /** @override **/ offset(ts) {
        return -new Date(ts).getTimezoneOffset();
    }
    /** @override **/ equals(otherZone) {
        return otherZone.type === "system";
    }
    /** @override **/ get isValid() {
        return true;
    }
}
exports.default = SystemZone;

},{"../impl/util.js":"ey0ja","../zone.js":"20P8J","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"20P8J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _errorsJs = require("./errors.js");
class Zone {
    /**
   * The type of zone
   * @abstract
   * @type {string}
   */ get type() {
        throw new _errorsJs.ZoneIsAbstractError();
    }
    /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */ get name() {
        throw new _errorsJs.ZoneIsAbstractError();
    }
    /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */ get isUniversal() {
        throw new _errorsJs.ZoneIsAbstractError();
    }
    /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */ offsetName(ts, opts) {
        throw new _errorsJs.ZoneIsAbstractError();
    }
    /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */ formatOffset(ts, format) {
        throw new _errorsJs.ZoneIsAbstractError();
    }
    /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */ offset(ts) {
        throw new _errorsJs.ZoneIsAbstractError();
    }
    /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */ equals(otherZone) {
        throw new _errorsJs.ZoneIsAbstractError();
    }
    /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */ get isValid() {
        throw new _errorsJs.ZoneIsAbstractError();
    }
}
exports.default = Zone;

},{"./errors.js":"lBgoZ","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"2AfbS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilJs = require("../impl/util.js");
var _zoneJs = require("../zone.js");
var _zoneJsDefault = parcelHelpers.interopDefault(_zoneJs);
const matchingRegex = RegExp(`^${_utilJs.ianaRegex.source}$`);
let dtfCache = {
};
function makeDTF(zone) {
    if (!dtfCache[zone]) dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
        hour12: false,
        timeZone: zone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    return dtfCache[zone];
}
const typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
};
function hackyOffset(dtf, date) {
    const formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed;
    return [
        fYear,
        fMonth,
        fDay,
        fHour,
        fMinute,
        fSecond
    ];
}
function partsOffset(dtf, date) {
    const formatted = dtf.formatToParts(date), filled = [];
    for(let i = 0; i < formatted.length; i++){
        const { type , value  } = formatted[i], pos = typeToPos[type];
        if (!_utilJs.isUndefined(pos)) filled[pos] = parseInt(value, 10);
    }
    return filled;
}
let ianaZoneCache = {
};
class IANAZone extends _zoneJsDefault.default {
    /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */ static create(name) {
        if (!ianaZoneCache[name]) ianaZoneCache[name] = new IANAZone(name);
        return ianaZoneCache[name];
    }
    /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */ static resetCache() {
        ianaZoneCache = {
        };
        dtfCache = {
        };
    }
    /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */ static isValidSpecifier(s) {
        return !!(s && s.match(matchingRegex));
    }
    /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */ static isValidZone(zone) {
        if (!zone) return false;
        try {
            new Intl.DateTimeFormat("en-US", {
                timeZone: zone
            }).format();
            return true;
        } catch (e) {
            return false;
        }
    }
    constructor(name){
        super();
        /** @private **/ this.zoneName = name;
        /** @private **/ this.valid = IANAZone.isValidZone(name);
    }
    /** @override **/ get type() {
        return "iana";
    }
    /** @override **/ get name() {
        return this.zoneName;
    }
    /** @override **/ get isUniversal() {
        return false;
    }
    /** @override **/ offsetName(ts, { format , locale  }) {
        return _utilJs.parseZoneInfo(ts, format, locale, this.name);
    }
    /** @override **/ formatOffset(ts, format) {
        return _utilJs.formatOffset(this.offset(ts), format);
    }
    /** @override **/ offset(ts) {
        const date = new Date(ts);
        if (isNaN(date)) return NaN;
        const dtf = makeDTF(this.name), [year, month, day, hour, minute, second] = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
        // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
        const adjustedHour = hour === 24 ? 0 : hour;
        const asUTC = _utilJs.objToLocalTS({
            year,
            month,
            day,
            hour: adjustedHour,
            minute,
            second,
            millisecond: 0
        });
        let asTS = +date;
        const over = asTS % 1000;
        asTS -= over >= 0 ? over : 1000 + over;
        return (asUTC - asTS) / 60000;
    }
    /** @override **/ equals(otherZone) {
        return otherZone.type === "iana" && otherZone.name === this.name;
    }
    /** @override **/ get isValid() {
        return this.valid;
    }
}
exports.default = IANAZone;

},{"../impl/util.js":"ey0ja","../zone.js":"20P8J","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"k79uo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeZone", ()=>normalizeZone
);
/**
 * @private
 */ var _zoneJs = require("../zone.js");
var _zoneJsDefault = parcelHelpers.interopDefault(_zoneJs);
var _ianazoneJs = require("../zones/IANAZone.js");
var _ianazoneJsDefault = parcelHelpers.interopDefault(_ianazoneJs);
var _fixedOffsetZoneJs = require("../zones/fixedOffsetZone.js");
var _fixedOffsetZoneJsDefault = parcelHelpers.interopDefault(_fixedOffsetZoneJs);
var _invalidZoneJs = require("../zones/invalidZone.js");
var _invalidZoneJsDefault = parcelHelpers.interopDefault(_invalidZoneJs);
var _utilJs = require("./util.js");
function normalizeZone(input, defaultZone) {
    let offset;
    if (_utilJs.isUndefined(input) || input === null) return defaultZone;
    else if (input instanceof _zoneJsDefault.default) return input;
    else if (_utilJs.isString(input)) {
        const lowered = input.toLowerCase();
        if (lowered === "local" || lowered === "system") return defaultZone;
        else if (lowered === "utc" || lowered === "gmt") return _fixedOffsetZoneJsDefault.default.utcInstance;
        else if (_ianazoneJsDefault.default.isValidSpecifier(lowered)) return _ianazoneJsDefault.default.create(input);
        else return _fixedOffsetZoneJsDefault.default.parseSpecifier(lowered) || new _invalidZoneJsDefault.default(input);
    } else if (_utilJs.isNumber(input)) return _fixedOffsetZoneJsDefault.default.instance(input);
    else if (typeof input === "object" && input.offset && typeof input.offset === "number") // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
    else return new _invalidZoneJsDefault.default(input);
}

},{"../zone.js":"20P8J","../zones/IANAZone.js":"2AfbS","../zones/fixedOffsetZone.js":"2n2o7","../zones/invalidZone.js":"gmp8W","./util.js":"ey0ja","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"2n2o7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilJs = require("../impl/util.js");
var _zoneJs = require("../zone.js");
var _zoneJsDefault = parcelHelpers.interopDefault(_zoneJs);
let singleton = null;
class FixedOffsetZone extends _zoneJsDefault.default {
    /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */ static get utcInstance() {
        if (singleton === null) singleton = new FixedOffsetZone(0);
        return singleton;
    }
    /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */ static instance(offset) {
        return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
    }
    /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */ static parseSpecifier(s) {
        if (s) {
            const r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (r) return new FixedOffsetZone(_utilJs.signedOffset(r[1], r[2]));
        }
        return null;
    }
    constructor(offset){
        super();
        /** @private **/ this.fixed = offset;
    }
    /** @override **/ get type() {
        return "fixed";
    }
    /** @override **/ get name() {
        return this.fixed === 0 ? "UTC" : `UTC${_utilJs.formatOffset(this.fixed, "narrow")}`;
    }
    /** @override **/ offsetName() {
        return this.name;
    }
    /** @override **/ formatOffset(ts, format) {
        return _utilJs.formatOffset(this.fixed, format);
    }
    /** @override **/ get isUniversal() {
        return true;
    }
    /** @override **/ offset() {
        return this.fixed;
    }
    /** @override **/ equals(otherZone) {
        return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
    }
    /** @override **/ get isValid() {
        return true;
    }
}
exports.default = FixedOffsetZone;

},{"../impl/util.js":"ey0ja","../zone.js":"20P8J","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"gmp8W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _zoneJs = require("../zone.js");
var _zoneJsDefault = parcelHelpers.interopDefault(_zoneJs);
class InvalidZone extends _zoneJsDefault.default {
    constructor(zoneName){
        super();
        /**  @private */ this.zoneName = zoneName;
    }
    /** @override **/ get type() {
        return "invalid";
    }
    /** @override **/ get name() {
        return this.zoneName;
    }
    /** @override **/ get isUniversal() {
        return false;
    }
    /** @override **/ offsetName() {
        return null;
    }
    /** @override **/ formatOffset() {
        return "";
    }
    /** @override **/ offset() {
        return NaN;
    }
    /** @override **/ equals() {
        return false;
    }
    /** @override **/ get isValid() {
        return false;
    }
}
exports.default = InvalidZone;

},{"../zone.js":"20P8J","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"i5DuV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @private
 */ parcelHelpers.export(exports, "parseISODate", ()=>parseISODate
);
parcelHelpers.export(exports, "parseRFC2822Date", ()=>parseRFC2822Date
);
parcelHelpers.export(exports, "parseHTTPDate", ()=>parseHTTPDate
);
parcelHelpers.export(exports, "parseISODuration", ()=>parseISODuration
);
parcelHelpers.export(exports, "parseISOTimeOnly", ()=>parseISOTimeOnly
);
parcelHelpers.export(exports, "parseSQL", ()=>parseSQL
);
var _utilJs = require("./util.js");
var _englishJs = require("./english.js");
var _fixedOffsetZoneJs = require("../zones/fixedOffsetZone.js");
var _fixedOffsetZoneJsDefault = parcelHelpers.interopDefault(_fixedOffsetZoneJs);
var _ianazoneJs = require("../zones/IANAZone.js");
var _ianazoneJsDefault = parcelHelpers.interopDefault(_ianazoneJs);
/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */ function combineRegexes(...regexes) {
    const full = regexes.reduce((f, r)=>f + r.source
    , "");
    return RegExp(`^${full}$`);
}
function combineExtractors(...extractors) {
    return (m)=>extractors.reduce(([mergedVals, mergedZone, cursor], ex)=>{
            const [val, zone, next] = ex(m, cursor);
            return [
                {
                    ...mergedVals,
                    ...val
                },
                mergedZone || zone,
                next
            ];
        }, [
            {
            },
            null,
            1
        ]).slice(0, 2)
    ;
}
function parse(s, ...patterns) {
    if (s == null) return [
        null,
        null
    ];
    for (const [regex, extractor] of patterns){
        const m = regex.exec(s);
        if (m) return extractor(m);
    }
    return [
        null,
        null
    ];
}
function simpleParse(...keys) {
    return (match, cursor)=>{
        const ret = {
        };
        let i;
        for(i = 0; i < keys.length; i++)ret[keys[i]] = _utilJs.parseInteger(match[cursor + i]);
        return [
            ret,
            null,
            cursor + i
        ];
    };
}
// ISO and SQL parsing
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${offsetRegex.source}?`), isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`), isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/, isoOrdinalRegex = /(\d{4})-?(\d{3})/, extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"), extractISOOrdinalData = simpleParse("year", "ordinal"), sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/, sqlTimeRegex = RegExp(`${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${_utilJs.ianaRegex.source}))?`), sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
function int(match, pos, fallback) {
    const m = match[pos];
    return _utilJs.isUndefined(m) ? fallback : _utilJs.parseInteger(m);
}
function extractISOYmd(match, cursor) {
    const item = {
        year: int(match, cursor),
        month: int(match, cursor + 1, 1),
        day: int(match, cursor + 2, 1)
    };
    return [
        item,
        null,
        cursor + 3
    ];
}
function extractISOTime(match, cursor) {
    const item = {
        hours: int(match, cursor, 0),
        minutes: int(match, cursor + 1, 0),
        seconds: int(match, cursor + 2, 0),
        milliseconds: _utilJs.parseMillis(match[cursor + 3])
    };
    return [
        item,
        null,
        cursor + 4
    ];
}
function extractISOOffset(match, cursor) {
    const local = !match[cursor] && !match[cursor + 1], fullOffset = _utilJs.signedOffset(match[cursor + 1], match[cursor + 2]), zone = local ? null : _fixedOffsetZoneJsDefault.default.instance(fullOffset);
    return [
        {
        },
        zone,
        cursor + 3
    ];
}
function extractIANAZone(match, cursor) {
    const zone = match[cursor] ? _ianazoneJsDefault.default.create(match[cursor]) : null;
    return [
        {
        },
        zone,
        cursor + 1
    ];
}
// ISO time parsing
const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);
// ISO duration parsing
const isoDuration = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function extractISODuration(match) {
    const [s, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match;
    const hasNegativePrefix = s[0] === "-";
    const negativeSeconds = secondStr && secondStr[0] === "-";
    const maybeNegate = (num, force = false)=>num !== undefined && (force || num && hasNegativePrefix) ? -num : num
    ;
    return [
        {
            years: maybeNegate(_utilJs.parseFloating(yearStr)),
            months: maybeNegate(_utilJs.parseFloating(monthStr)),
            weeks: maybeNegate(_utilJs.parseFloating(weekStr)),
            days: maybeNegate(_utilJs.parseFloating(dayStr)),
            hours: maybeNegate(_utilJs.parseFloating(hourStr)),
            minutes: maybeNegate(_utilJs.parseFloating(minuteStr)),
            seconds: maybeNegate(_utilJs.parseFloating(secondStr), secondStr === "-0"),
            milliseconds: maybeNegate(_utilJs.parseMillis(millisecondsStr), negativeSeconds)
        }, 
    ];
}
// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
const obsOffsets = {
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    const result = {
        year: yearStr.length === 2 ? _utilJs.untruncateYear(_utilJs.parseInteger(yearStr)) : _utilJs.parseInteger(yearStr),
        month: _englishJs.monthsShort.indexOf(monthStr) + 1,
        day: _utilJs.parseInteger(dayStr),
        hour: _utilJs.parseInteger(hourStr),
        minute: _utilJs.parseInteger(minuteStr)
    };
    if (secondStr) result.second = _utilJs.parseInteger(secondStr);
    if (weekdayStr) result.weekday = weekdayStr.length > 3 ? _englishJs.weekdaysLong.indexOf(weekdayStr) + 1 : _englishJs.weekdaysShort.indexOf(weekdayStr) + 1;
    return result;
}
// RFC 2822/5322
const rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match) {
    const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr, obsOffset, milOffset, offHourStr, offMinuteStr, ] = match, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    let offset;
    if (obsOffset) offset = obsOffsets[obsOffset];
    else if (milOffset) offset = 0;
    else offset = _utilJs.signedOffset(offHourStr, offMinuteStr);
    return [
        result,
        new _fixedOffsetZoneJsDefault.default(offset)
    ];
}
function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
// http date
const rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match) {
    const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [
        result,
        _fixedOffsetZoneJsDefault.default.utcInstance
    ];
}
function extractASCII(match) {
    const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [
        result,
        _fixedOffsetZoneJsDefault.default.utcInstance
    ];
}
const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
const extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
const extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
const extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset);
const extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
function parseISODate(s) {
    return parse(s, [
        isoYmdWithTimeExtensionRegex,
        extractISOYmdTimeAndOffset
    ], [
        isoWeekWithTimeExtensionRegex,
        extractISOWeekTimeAndOffset
    ], [
        isoOrdinalWithTimeExtensionRegex,
        extractISOOrdinalDateAndTime
    ], [
        isoTimeCombinedRegex,
        extractISOTimeAndOffset
    ]);
}
function parseRFC2822Date(s) {
    return parse(preprocessRFC2822(s), [
        rfc2822,
        extractRFC2822
    ]);
}
function parseHTTPDate(s) {
    return parse(s, [
        rfc1123,
        extractRFC1123Or850
    ], [
        rfc850,
        extractRFC1123Or850
    ], [
        ascii,
        extractASCII
    ]);
}
function parseISODuration(s) {
    return parse(s, [
        isoDuration,
        extractISODuration
    ]);
}
const extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s) {
    return parse(s, [
        isoTimeOnly,
        extractISOTimeOnly
    ]);
}
const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
const extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
const extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
    return parse(s, [
        sqlYmdWithTimeExtensionRegex,
        extractISOYmdTimeOffsetAndIANAZone
    ], [
        sqlTimeCombinedRegex,
        extractISOTimeOffsetAndIANAZone
    ]);
}

},{"./util.js":"ey0ja","./english.js":"d1H1r","../zones/fixedOffsetZone.js":"2n2o7","../zones/IANAZone.js":"2AfbS","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"2O8UZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _datetimeJs = require("./datetime.js");
var _datetimeJsDefault = parcelHelpers.interopDefault(_datetimeJs);
var _durationJs = require("./duration.js");
var _durationJsDefault = parcelHelpers.interopDefault(_durationJs);
var _settingsJs = require("./settings.js");
var _settingsJsDefault = parcelHelpers.interopDefault(_settingsJs);
var _errorsJs = require("./errors.js");
var _invalidJs = require("./impl/invalid.js");
var _invalidJsDefault = parcelHelpers.interopDefault(_invalidJs);
const INVALID = "Invalid Interval";
// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
    if (!start || !start.isValid) return Interval.invalid("missing or invalid start");
    else if (!end || !end.isValid) return Interval.invalid("missing or invalid end");
    else if (end < start) return Interval.invalid("end before start", `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`);
    else return null;
}
class Interval {
    /**
   * @private
   */ constructor(config){
        /**
     * @access private
     */ this.s = config.start;
        /**
     * @access private
     */ this.e = config.end;
        /**
     * @access private
     */ this.invalid = config.invalid || null;
        /**
     * @access private
     */ this.isLuxonInterval = true;
    }
    /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */ static invalid(reason, explanation = null) {
        if (!reason) throw new _errorsJs.InvalidArgumentError("need to specify a reason the Interval is invalid");
        const invalid = reason instanceof _invalidJsDefault.default ? reason : new _invalidJsDefault.default(reason, explanation);
        if (_settingsJsDefault.default.throwOnInvalid) throw new _errorsJs.InvalidIntervalError(invalid);
        else return new Interval({
            invalid
        });
    }
    /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */ static fromDateTimes(start, end) {
        const builtStart = _datetimeJs.friendlyDateTime(start), builtEnd = _datetimeJs.friendlyDateTime(end);
        const validateError = validateStartEnd(builtStart, builtEnd);
        if (validateError == null) return new Interval({
            start: builtStart,
            end: builtEnd
        });
        else return validateError;
    }
    /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */ static after(start, duration) {
        const dur = _durationJsDefault.default.fromDurationLike(duration), dt = _datetimeJs.friendlyDateTime(start);
        return Interval.fromDateTimes(dt, dt.plus(dur));
    }
    /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */ static before(end, duration) {
        const dur = _durationJsDefault.default.fromDurationLike(duration), dt = _datetimeJs.friendlyDateTime(end);
        return Interval.fromDateTimes(dt.minus(dur), dt);
    }
    /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */ static fromISO(text, opts) {
        const [s, e] = (text || "").split("/", 2);
        if (s && e) {
            let start, startIsValid;
            try {
                start = _datetimeJsDefault.default.fromISO(s, opts);
                startIsValid = start.isValid;
            } catch (e1) {
                startIsValid = false;
            }
            let end, endIsValid;
            try {
                end = _datetimeJsDefault.default.fromISO(e, opts);
                endIsValid = end.isValid;
            } catch (e2) {
                endIsValid = false;
            }
            if (startIsValid && endIsValid) return Interval.fromDateTimes(start, end);
            if (startIsValid) {
                const dur = _durationJsDefault.default.fromISO(e, opts);
                if (dur.isValid) return Interval.after(start, dur);
            } else if (endIsValid) {
                const dur = _durationJsDefault.default.fromISO(s, opts);
                if (dur.isValid) return Interval.before(end, dur);
            }
        }
        return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
    /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ static isInterval(o) {
        return o && o.isLuxonInterval || false;
    }
    /**
   * Returns the start of the Interval
   * @type {DateTime}
   */ get start() {
        return this.isValid ? this.s : null;
    }
    /**
   * Returns the end of the Interval
   * @type {DateTime}
   */ get end() {
        return this.isValid ? this.e : null;
    }
    /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */ get isValid() {
        return this.invalidReason === null;
    }
    /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */ get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
    }
    /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */ get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
    }
    /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */ length(unit = "milliseconds") {
        return this.isValid ? this.toDuration(...[
            unit
        ]).get(unit) : NaN;
    }
    /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */ count(unit = "milliseconds") {
        if (!this.isValid) return NaN;
        const start = this.start.startOf(unit), end = this.end.startOf(unit);
        return Math.floor(end.diff(start, unit).get(unit)) + 1;
    }
    /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */ hasSame(unit) {
        return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
    }
    /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */ isEmpty() {
        return this.s.valueOf() === this.e.valueOf();
    }
    /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ isAfter(dateTime) {
        if (!this.isValid) return false;
        return this.s > dateTime;
    }
    /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ isBefore(dateTime) {
        if (!this.isValid) return false;
        return this.e <= dateTime;
    }
    /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ contains(dateTime) {
        if (!this.isValid) return false;
        return this.s <= dateTime && this.e > dateTime;
    }
    /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */ set({ start , end  } = {
    }) {
        if (!this.isValid) return this;
        return Interval.fromDateTimes(start || this.s, end || this.e);
    }
    /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */ splitAt(...dateTimes) {
        if (!this.isValid) return [];
        const sorted = dateTimes.map(_datetimeJs.friendlyDateTime).filter((d)=>this.contains(d)
        ).sort(), results = [];
        let { s  } = this, i = 0;
        while(s < this.e){
            const added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
            results.push(Interval.fromDateTimes(s, next));
            s = next;
            i += 1;
        }
        return results;
    }
    /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */ splitBy(duration) {
        const dur = _durationJsDefault.default.fromDurationLike(duration);
        if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) return [];
        let { s  } = this, idx = 1, next;
        const results = [];
        while(s < this.e){
            const added = this.start.plus(dur.mapUnits((x)=>x * idx
            ));
            next = +added > +this.e ? this.e : added;
            results.push(Interval.fromDateTimes(s, next));
            s = next;
            idx += 1;
        }
        return results;
    }
    /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */ divideEqually(numberOfParts) {
        if (!this.isValid) return [];
        return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
    }
    /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */ overlaps(other) {
        return this.e > other.s && this.s < other.e;
    }
    /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */ abutsStart(other) {
        if (!this.isValid) return false;
        return +this.e === +other.s;
    }
    /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */ abutsEnd(other) {
        if (!this.isValid) return false;
        return +other.e === +this.s;
    }
    /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */ engulfs(other) {
        if (!this.isValid) return false;
        return this.s <= other.s && this.e >= other.e;
    }
    /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */ equals(other) {
        if (!this.isValid || !other.isValid) return false;
        return this.s.equals(other.s) && this.e.equals(other.e);
    }
    /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */ intersection(other) {
        if (!this.isValid) return this;
        const s = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
        if (s >= e) return null;
        else return Interval.fromDateTimes(s, e);
    }
    /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */ union(other) {
        if (!this.isValid) return this;
        const s = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
        return Interval.fromDateTimes(s, e);
    }
    /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */ static merge(intervals) {
        const [found, final] = intervals.sort((a, b)=>a.s - b.s
        ).reduce(([sofar, current], item)=>{
            if (!current) return [
                sofar,
                item
            ];
            else if (current.overlaps(item) || current.abutsStart(item)) return [
                sofar,
                current.union(item)
            ];
            else return [
                sofar.concat([
                    current
                ]),
                item
            ];
        }, [
            [],
            null
        ]);
        if (final) found.push(final);
        return found;
    }
    /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */ static xor(intervals) {
        let start = null, currentCount = 0;
        const results = [], ends = intervals.map((i)=>[
                {
                    time: i.s,
                    type: "s"
                },
                {
                    time: i.e,
                    type: "e"
                }, 
            ]
        ), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a, b)=>a.time - b.time
        );
        for (const i1 of arr){
            currentCount += i1.type === "s" ? 1 : -1;
            if (currentCount === 1) start = i1.time;
            else {
                if (start && +start !== +i1.time) results.push(Interval.fromDateTimes(start, i1.time));
                start = null;
            }
        }
        return Interval.merge(results);
    }
    /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */ difference(...intervals) {
        return Interval.xor([
            this
        ].concat(intervals)).map((i)=>this.intersection(i)
        ).filter((i)=>i && !i.isEmpty()
        );
    }
    /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */ toString() {
        if (!this.isValid) return INVALID;
        return `[${this.s.toISO()} – ${this.e.toISO()})`;
    }
    /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */ toISO(opts) {
        if (!this.isValid) return INVALID;
        return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
    }
    /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */ toISODate() {
        if (!this.isValid) return INVALID;
        return `${this.s.toISODate()}/${this.e.toISODate()}`;
    }
    /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */ toISOTime(opts) {
        if (!this.isValid) return INVALID;
        return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
    }
    /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime#toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */ toFormat(dateFormat, { separator =" – "  } = {
    }) {
        if (!this.isValid) return INVALID;
        return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
    }
    /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */ toDuration(unit, opts) {
        if (!this.isValid) return _durationJsDefault.default.invalid(this.invalidReason);
        return this.e.diff(this.s, unit, opts);
    }
    /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */ mapEndpoints(mapFn) {
        return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
    }
}
exports.default = Interval;

},{"./datetime.js":"jQCsj","./duration.js":"k7LeK","./settings.js":"inSoS","./errors.js":"lBgoZ","./impl/invalid.js":"44NKv","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"cl9ub":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _datetimeJs = require("./datetime.js");
var _datetimeJsDefault = parcelHelpers.interopDefault(_datetimeJs);
var _settingsJs = require("./settings.js");
var _settingsJsDefault = parcelHelpers.interopDefault(_settingsJs);
var _localeJs = require("./impl/locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var _ianazoneJs = require("./zones/IANAZone.js");
var _ianazoneJsDefault = parcelHelpers.interopDefault(_ianazoneJs);
var _zoneUtilJs = require("./impl/zoneUtil.js");
var _utilJs = require("./impl/util.js");
class Info {
    /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */ static hasDST(zone = _settingsJsDefault.default.defaultZone) {
        const proto = _datetimeJsDefault.default.now().setZone(zone).set({
            month: 12
        });
        return !zone.isUniversal && proto.offset !== proto.set({
            month: 6
        }).offset;
    }
    /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */ static isValidIANAZone(zone) {
        return _ianazoneJsDefault.default.isValidSpecifier(zone) && _ianazoneJsDefault.default.isValidZone(zone);
    }
    /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */ static normalizeZone(input) {
        return _zoneUtilJs.normalizeZone(input, _settingsJsDefault.default.defaultZone);
    }
    /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */ static months(length = "long", { locale =null , numberingSystem =null , locObj =null , outputCalendar ="gregory"  } = {
    }) {
        return (locObj || _localeJsDefault.default.create(locale, numberingSystem, outputCalendar)).months(length);
    }
    /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */ static monthsFormat(length = "long", { locale =null , numberingSystem =null , locObj =null , outputCalendar ="gregory"  } = {
    }) {
        return (locObj || _localeJsDefault.default.create(locale, numberingSystem, outputCalendar)).months(length, true);
    }
    /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */ static weekdays(length = "long", { locale =null , numberingSystem =null , locObj =null  } = {
    }) {
        return (locObj || _localeJsDefault.default.create(locale, numberingSystem, null)).weekdays(length);
    }
    /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */ static weekdaysFormat(length = "long", { locale =null , numberingSystem =null , locObj =null  } = {
    }) {
        return (locObj || _localeJsDefault.default.create(locale, numberingSystem, null)).weekdays(length, true);
    }
    /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */ static meridiems({ locale =null  } = {
    }) {
        return _localeJsDefault.default.create(locale).meridiems();
    }
    /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */ static eras(length = "short", { locale =null  } = {
    }) {
        return _localeJsDefault.default.create(locale, null, "gregory").eras(length);
    }
    /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */ static features() {
        return {
            relative: _utilJs.hasRelative()
        };
    }
}
exports.default = Info;

},{"./datetime.js":"jQCsj","./settings.js":"inSoS","./impl/locale.js":"4gg6Z","./zones/IANAZone.js":"2AfbS","./impl/zoneUtil.js":"k79uo","./impl/util.js":"ey0ja","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"qX054":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _durationJs = require("../duration.js");
var _durationJsDefault = parcelHelpers.interopDefault(_durationJs);
function dayDiff(earlier, later) {
    const utcDayStart = (dt)=>dt.toUTC(0, {
            keepLocalTime: true
        }).startOf("day").valueOf()
    , ms = utcDayStart(later) - utcDayStart(earlier);
    return Math.floor(_durationJsDefault.default.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
    const differs = [
        [
            "years",
            (a, b)=>b.year - a.year
        ],
        [
            "quarters",
            (a, b)=>b.quarter - a.quarter
        ],
        [
            "months",
            (a, b)=>b.month - a.month + (b.year - a.year) * 12
        ],
        [
            "weeks",
            (a, b)=>{
                const days = dayDiff(a, b);
                return (days - days % 7) / 7;
            }, 
        ],
        [
            "days",
            dayDiff
        ], 
    ];
    const results = {
    };
    let lowestOrder, highWater;
    for (const [unit, differ] of differs)if (units.indexOf(unit) >= 0) {
        lowestOrder = unit;
        let delta = differ(cursor, later);
        highWater = cursor.plus({
            [unit]: delta
        });
        if (highWater > later) {
            cursor = cursor.plus({
                [unit]: delta - 1
            });
            delta -= 1;
        } else cursor = highWater;
        results[unit] = delta;
    }
    return [
        cursor,
        results,
        highWater,
        lowestOrder
    ];
}
exports.default = function(earlier, later, units, opts) {
    let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);
    const remainingMillis = later - cursor;
    const lowerOrderUnits = units.filter((u)=>[
            "hours",
            "minutes",
            "seconds",
            "milliseconds"
        ].indexOf(u) >= 0
    );
    if (lowerOrderUnits.length === 0) {
        if (highWater < later) highWater = cursor.plus({
            [lowestOrder]: 1
        });
        if (highWater !== cursor) results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
    const duration = _durationJsDefault.default.fromObject(results, opts);
    if (lowerOrderUnits.length > 0) return _durationJsDefault.default.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration);
    else return duration;
};

},{"../duration.js":"k7LeK","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"53P5I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @private
 */ parcelHelpers.export(exports, "explainFromTokens", ()=>explainFromTokens
);
parcelHelpers.export(exports, "parseFromTokens", ()=>parseFromTokens
);
var _utilJs = require("./util.js");
var _formatterJs = require("./formatter.js");
var _formatterJsDefault = parcelHelpers.interopDefault(_formatterJs);
var _fixedOffsetZoneJs = require("../zones/fixedOffsetZone.js");
var _fixedOffsetZoneJsDefault = parcelHelpers.interopDefault(_fixedOffsetZoneJs);
var _ianazoneJs = require("../zones/IANAZone.js");
var _ianazoneJsDefault = parcelHelpers.interopDefault(_ianazoneJs);
var _datetimeJs = require("../datetime.js");
var _datetimeJsDefault = parcelHelpers.interopDefault(_datetimeJs);
var _digitsJs = require("./digits.js");
var _errorsJs = require("../errors.js");
const MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex, post = (i)=>i
) {
    return {
        regex,
        deser: ([s])=>post(_digitsJs.parseDigits(s))
    };
}
const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `( |${NBSP})`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s) {
    // make dots optional and also make them literal
    // make space and non breakable space characters interchangeable
    return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s) {
    return s.replace(/\./g, "") // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
    .toLowerCase();
}
function oneOf(strings, startIndex) {
    if (strings === null) return null;
    else return {
        regex: RegExp(strings.map(fixListRegex).join("|")),
        deser: ([s])=>strings.findIndex((i)=>stripInsensitivities(s) === stripInsensitivities(i)
            ) + startIndex
    };
}
function offset(regex, groups) {
    return {
        regex,
        deser: ([, h, m])=>_utilJs.signedOffset(h, m)
        ,
        groups
    };
}
function simple(regex) {
    return {
        regex,
        deser: ([s])=>s
    };
}
function escapeToken(value) {
    return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token, loc) {
    const one = _digitsJs.digitRegex(loc), two = _digitsJs.digitRegex(loc, "{2}"), three = _digitsJs.digitRegex(loc, "{3}"), four = _digitsJs.digitRegex(loc, "{4}"), six = _digitsJs.digitRegex(loc, "{6}"), oneOrTwo = _digitsJs.digitRegex(loc, "{1,2}"), oneToThree = _digitsJs.digitRegex(loc, "{1,3}"), oneToSix = _digitsJs.digitRegex(loc, "{1,6}"), oneToNine = _digitsJs.digitRegex(loc, "{1,9}"), twoToFour = _digitsJs.digitRegex(loc, "{2,4}"), fourToSix = _digitsJs.digitRegex(loc, "{4,6}"), literal = (t)=>({
            regex: RegExp(escapeToken(t.val)),
            deser: ([s])=>s
            ,
            literal: true
        })
    , unitate = (t)=>{
        if (token.literal) return literal(t);
        switch(t.val){
            // era
            case "G":
                return oneOf(loc.eras("short", false), 0);
            case "GG":
                return oneOf(loc.eras("long", false), 0);
            // years
            case "y":
                return intUnit(oneToSix);
            case "yy":
                return intUnit(twoToFour, _utilJs.untruncateYear);
            case "yyyy":
                return intUnit(four);
            case "yyyyy":
                return intUnit(fourToSix);
            case "yyyyyy":
                return intUnit(six);
            // months
            case "M":
                return intUnit(oneOrTwo);
            case "MM":
                return intUnit(two);
            case "MMM":
                return oneOf(loc.months("short", true, false), 1);
            case "MMMM":
                return oneOf(loc.months("long", true, false), 1);
            case "L":
                return intUnit(oneOrTwo);
            case "LL":
                return intUnit(two);
            case "LLL":
                return oneOf(loc.months("short", false, false), 1);
            case "LLLL":
                return oneOf(loc.months("long", false, false), 1);
            // dates
            case "d":
                return intUnit(oneOrTwo);
            case "dd":
                return intUnit(two);
            // ordinals
            case "o":
                return intUnit(oneToThree);
            case "ooo":
                return intUnit(three);
            // time
            case "HH":
                return intUnit(two);
            case "H":
                return intUnit(oneOrTwo);
            case "hh":
                return intUnit(two);
            case "h":
                return intUnit(oneOrTwo);
            case "mm":
                return intUnit(two);
            case "m":
                return intUnit(oneOrTwo);
            case "q":
                return intUnit(oneOrTwo);
            case "qq":
                return intUnit(two);
            case "s":
                return intUnit(oneOrTwo);
            case "ss":
                return intUnit(two);
            case "S":
                return intUnit(oneToThree);
            case "SSS":
                return intUnit(three);
            case "u":
                return simple(oneToNine);
            case "uu":
                return simple(oneOrTwo);
            case "uuu":
                return intUnit(one);
            // meridiem
            case "a":
                return oneOf(loc.meridiems(), 0);
            // weekYear (k)
            case "kkkk":
                return intUnit(four);
            case "kk":
                return intUnit(twoToFour, _utilJs.untruncateYear);
            // weekNumber (W)
            case "W":
                return intUnit(oneOrTwo);
            case "WW":
                return intUnit(two);
            // weekdays
            case "E":
            case "c":
                return intUnit(one);
            case "EEE":
                return oneOf(loc.weekdays("short", false, false), 1);
            case "EEEE":
                return oneOf(loc.weekdays("long", false, false), 1);
            case "ccc":
                return oneOf(loc.weekdays("short", true, false), 1);
            case "cccc":
                return oneOf(loc.weekdays("long", true, false), 1);
            // offset/zone
            case "Z":
            case "ZZ":
                return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
            case "ZZZ":
                return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
            // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
            // because we don't have any way to figure out what they are
            case "z":
                return simple(/[a-z_+-/]{1,256}?/i);
            default:
                return literal(t);
        }
    };
    const unit = unitate(token) || {
        invalidReason: MISSING_FTP
    };
    unit.token = token;
    return unit;
}
const partTypeStyleToTokenVal = {
    year: {
        "2-digit": "yy",
        numeric: "yyyyy"
    },
    month: {
        numeric: "M",
        "2-digit": "MM",
        short: "MMM",
        long: "MMMM"
    },
    day: {
        numeric: "d",
        "2-digit": "dd"
    },
    weekday: {
        short: "EEE",
        long: "EEEE"
    },
    dayperiod: "a",
    dayPeriod: "a",
    hour: {
        numeric: "h",
        "2-digit": "hh"
    },
    minute: {
        numeric: "m",
        "2-digit": "mm"
    },
    second: {
        numeric: "s",
        "2-digit": "ss"
    }
};
function tokenForPart(part, locale, formatOpts) {
    const { type , value  } = part;
    if (type === "literal") return {
        literal: true,
        val: value
    };
    const style = formatOpts[type];
    let val = partTypeStyleToTokenVal[type];
    if (typeof val === "object") val = val[style];
    if (val) return {
        literal: false,
        val
    };
    return undefined;
}
function buildRegex(units) {
    const re = units.map((u)=>u.regex
    ).reduce((f, r)=>`${f}(${r.source})`
    , "");
    return [
        `^${re}$`,
        units
    ];
}
function match(input, regex, handlers) {
    const matches = input.match(regex);
    if (matches) {
        const all = {
        };
        let matchIndex = 1;
        for(const i in handlers)if (_utilJs.hasOwnProperty(handlers, i)) {
            const h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
            if (!h.literal && h.token) all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
            matchIndex += groups;
        }
        return [
            matches,
            all
        ];
    } else return [
        matches,
        {
        }
    ];
}
function dateTimeFromMatches(matches) {
    const toField = (token)=>{
        switch(token){
            case "S":
                return "millisecond";
            case "s":
                return "second";
            case "m":
                return "minute";
            case "h":
            case "H":
                return "hour";
            case "d":
                return "day";
            case "o":
                return "ordinal";
            case "L":
            case "M":
                return "month";
            case "y":
                return "year";
            case "E":
            case "c":
                return "weekday";
            case "W":
                return "weekNumber";
            case "k":
                return "weekYear";
            case "q":
                return "quarter";
            default:
                return null;
        }
    };
    let zone = null;
    let specificOffset;
    if (!_utilJs.isUndefined(matches.z)) zone = _ianazoneJsDefault.default.create(matches.z);
    if (!_utilJs.isUndefined(matches.Z)) {
        if (!zone) zone = new _fixedOffsetZoneJsDefault.default(matches.Z);
        specificOffset = matches.Z;
    }
    if (!_utilJs.isUndefined(matches.q)) matches.M = (matches.q - 1) * 3 + 1;
    if (!_utilJs.isUndefined(matches.h)) {
        if (matches.h < 12 && matches.a === 1) matches.h += 12;
        else if (matches.h === 12 && matches.a === 0) matches.h = 0;
    }
    if (matches.G === 0 && matches.y) matches.y = -matches.y;
    if (!_utilJs.isUndefined(matches.u)) matches.S = _utilJs.parseMillis(matches.u);
    const vals = Object.keys(matches).reduce((r, k)=>{
        const f = toField(k);
        if (f) r[f] = matches[k];
        return r;
    }, {
    });
    return [
        vals,
        zone,
        specificOffset
    ];
}
let dummyDateTimeCache = null;
function getDummyDateTime() {
    if (!dummyDateTimeCache) dummyDateTimeCache = _datetimeJsDefault.default.fromMillis(1555555555555);
    return dummyDateTimeCache;
}
function maybeExpandMacroToken(token, locale) {
    if (token.literal) return token;
    const formatOpts = _formatterJsDefault.default.macroTokenToFormatOpts(token.val);
    if (!formatOpts) return token;
    const formatter = _formatterJsDefault.default.create(locale, formatOpts);
    const parts = formatter.formatDateTimeParts(getDummyDateTime());
    const tokens = parts.map((p)=>tokenForPart(p, locale, formatOpts)
    );
    if (tokens.includes(undefined)) return token;
    return tokens;
}
function expandMacroTokens(tokens, locale) {
    return Array.prototype.concat(...tokens.map((t)=>maybeExpandMacroToken(t, locale)
    ));
}
function explainFromTokens(locale, input, format) {
    const tokens = expandMacroTokens(_formatterJsDefault.default.parseFormat(format), locale), units = tokens.map((t)=>unitForToken(t, locale)
    ), disqualifyingUnit = units.find((t)=>t.invalidReason
    );
    if (disqualifyingUnit) return {
        input,
        tokens,
        invalidReason: disqualifyingUnit.invalidReason
    };
    else {
        const [regexString, handlers] = buildRegex(units), regex = RegExp(regexString, "i"), [rawMatches, matches] = match(input, regex, handlers), [result, zone, specificOffset] = matches ? dateTimeFromMatches(matches) : [
            null,
            null,
            undefined
        ];
        if (_utilJs.hasOwnProperty(matches, "a") && _utilJs.hasOwnProperty(matches, "H")) throw new _errorsJs.ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
        return {
            input,
            tokens,
            regex,
            rawMatches,
            matches,
            result,
            zone,
            specificOffset
        };
    }
}
function parseFromTokens(locale, input, format) {
    const { result , zone , specificOffset , invalidReason  } = explainFromTokens(locale, input, format);
    return [
        result,
        zone,
        specificOffset,
        invalidReason
    ];
}

},{"./util.js":"ey0ja","./formatter.js":"3Q471","../zones/fixedOffsetZone.js":"2n2o7","../zones/IANAZone.js":"2AfbS","../datetime.js":"jQCsj","./digits.js":"cNKu0","../errors.js":"lBgoZ","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"cNKu0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseDigits", ()=>parseDigits
);
parcelHelpers.export(exports, "digitRegex", ()=>digitRegex
);
const numberingSystems = {
    arab: "[\u0660-\u0669]",
    arabext: "[\u06F0-\u06F9]",
    bali: "[\u1B50-\u1B59]",
    beng: "[\u09E6-\u09EF]",
    deva: "[\u0966-\u096F]",
    fullwide: "[\uFF10-\uFF19]",
    gujr: "[\u0AE6-\u0AEF]",
    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
    khmr: "[\u17E0-\u17E9]",
    knda: "[\u0CE6-\u0CEF]",
    laoo: "[\u0ED0-\u0ED9]",
    limb: "[\u1946-\u194F]",
    mlym: "[\u0D66-\u0D6F]",
    mong: "[\u1810-\u1819]",
    mymr: "[\u1040-\u1049]",
    orya: "[\u0B66-\u0B6F]",
    tamldec: "[\u0BE6-\u0BEF]",
    telu: "[\u0C66-\u0C6F]",
    thai: "[\u0E50-\u0E59]",
    tibt: "[\u0F20-\u0F29]",
    latn: "\\d"
};
const numberingSystemsUTF16 = {
    arab: [
        1632,
        1641
    ],
    arabext: [
        1776,
        1785
    ],
    bali: [
        6992,
        7001
    ],
    beng: [
        2534,
        2543
    ],
    deva: [
        2406,
        2415
    ],
    fullwide: [
        65296,
        65303
    ],
    gujr: [
        2790,
        2799
    ],
    khmr: [
        6112,
        6121
    ],
    knda: [
        3302,
        3311
    ],
    laoo: [
        3792,
        3801
    ],
    limb: [
        6470,
        6479
    ],
    mlym: [
        3430,
        3439
    ],
    mong: [
        6160,
        6169
    ],
    mymr: [
        4160,
        4169
    ],
    orya: [
        2918,
        2927
    ],
    tamldec: [
        3046,
        3055
    ],
    telu: [
        3174,
        3183
    ],
    thai: [
        3664,
        3673
    ],
    tibt: [
        3872,
        3881
    ]
};
const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
    let value = parseInt(str, 10);
    if (isNaN(value)) {
        value = "";
        for(let i = 0; i < str.length; i++){
            const code = str.charCodeAt(i);
            if (str[i].search(numberingSystems.hanidec) !== -1) value += hanidecChars.indexOf(str[i]);
            else for(const key in numberingSystemsUTF16){
                const [min, max] = numberingSystemsUTF16[key];
                if (code >= min && code <= max) value += code - min;
            }
        }
        return parseInt(value, 10);
    } else return value;
}
function digitRegex({ numberingSystem  }, append = "") {
    return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}],"2Nj9P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @private
 */ parcelHelpers.export(exports, "gregorianToWeek", ()=>gregorianToWeek
);
parcelHelpers.export(exports, "weekToGregorian", ()=>weekToGregorian
);
parcelHelpers.export(exports, "gregorianToOrdinal", ()=>gregorianToOrdinal
);
parcelHelpers.export(exports, "ordinalToGregorian", ()=>ordinalToGregorian
);
parcelHelpers.export(exports, "hasInvalidWeekData", ()=>hasInvalidWeekData
);
parcelHelpers.export(exports, "hasInvalidOrdinalData", ()=>hasInvalidOrdinalData
);
parcelHelpers.export(exports, "hasInvalidGregorianData", ()=>hasInvalidGregorianData
);
parcelHelpers.export(exports, "hasInvalidTimeData", ()=>hasInvalidTimeData
);
var _utilJs = require("./util.js");
var _invalidJs = require("./invalid.js");
var _invalidJsDefault = parcelHelpers.interopDefault(_invalidJs);
const nonLeapLadder = [
    0,
    31,
    59,
    90,
    120,
    151,
    181,
    212,
    243,
    273,
    304,
    334
], leapLadder = [
    0,
    31,
    60,
    91,
    121,
    152,
    182,
    213,
    244,
    274,
    305,
    335
];
function unitOutOfRange(unit, value) {
    return new _invalidJsDefault.default("unit out of range", `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`);
}
function dayOfWeek(year, month, day) {
    const js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
    return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
    return day + (_utilJs.isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
    const table = _utilJs.isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i)=>i < ordinal
    ), day = ordinal - table[month0];
    return {
        month: month0 + 1,
        day
    };
}
function gregorianToWeek(gregObj) {
    const { year , month , day  } = gregObj, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
    let weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
    if (weekNumber < 1) {
        weekYear = year - 1;
        weekNumber = _utilJs.weeksInWeekYear(weekYear);
    } else if (weekNumber > _utilJs.weeksInWeekYear(year)) {
        weekYear = year + 1;
        weekNumber = 1;
    } else weekYear = year;
    return {
        weekYear,
        weekNumber,
        weekday,
        ..._utilJs.timeObject(gregObj)
    };
}
function weekToGregorian(weekData) {
    const { weekYear , weekNumber , weekday  } = weekData, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = _utilJs.daysInYear(weekYear);
    let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
    if (ordinal < 1) {
        year = weekYear - 1;
        ordinal += _utilJs.daysInYear(year);
    } else if (ordinal > yearInDays) {
        year = weekYear + 1;
        ordinal -= _utilJs.daysInYear(weekYear);
    } else year = weekYear;
    const { month , day  } = uncomputeOrdinal(year, ordinal);
    return {
        year,
        month,
        day,
        ..._utilJs.timeObject(weekData)
    };
}
function gregorianToOrdinal(gregData) {
    const { year , month , day  } = gregData;
    const ordinal = computeOrdinal(year, month, day);
    return {
        year,
        ordinal,
        ..._utilJs.timeObject(gregData)
    };
}
function ordinalToGregorian(ordinalData) {
    const { year , ordinal  } = ordinalData;
    const { month , day  } = uncomputeOrdinal(year, ordinal);
    return {
        year,
        month,
        day,
        ..._utilJs.timeObject(ordinalData)
    };
}
function hasInvalidWeekData(obj) {
    const validYear = _utilJs.isInteger(obj.weekYear), validWeek = _utilJs.integerBetween(obj.weekNumber, 1, _utilJs.weeksInWeekYear(obj.weekYear)), validWeekday = _utilJs.integerBetween(obj.weekday, 1, 7);
    if (!validYear) return unitOutOfRange("weekYear", obj.weekYear);
    else if (!validWeek) return unitOutOfRange("week", obj.week);
    else if (!validWeekday) return unitOutOfRange("weekday", obj.weekday);
    else return false;
}
function hasInvalidOrdinalData(obj) {
    const validYear = _utilJs.isInteger(obj.year), validOrdinal = _utilJs.integerBetween(obj.ordinal, 1, _utilJs.daysInYear(obj.year));
    if (!validYear) return unitOutOfRange("year", obj.year);
    else if (!validOrdinal) return unitOutOfRange("ordinal", obj.ordinal);
    else return false;
}
function hasInvalidGregorianData(obj) {
    const validYear = _utilJs.isInteger(obj.year), validMonth = _utilJs.integerBetween(obj.month, 1, 12), validDay = _utilJs.integerBetween(obj.day, 1, _utilJs.daysInMonth(obj.year, obj.month));
    if (!validYear) return unitOutOfRange("year", obj.year);
    else if (!validMonth) return unitOutOfRange("month", obj.month);
    else if (!validDay) return unitOutOfRange("day", obj.day);
    else return false;
}
function hasInvalidTimeData(obj) {
    const { hour , minute , second , millisecond  } = obj;
    const validHour = _utilJs.integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = _utilJs.integerBetween(minute, 0, 59), validSecond = _utilJs.integerBetween(second, 0, 59), validMillisecond = _utilJs.integerBetween(millisecond, 0, 999);
    if (!validHour) return unitOutOfRange("hour", hour);
    else if (!validMinute) return unitOutOfRange("minute", minute);
    else if (!validSecond) return unitOutOfRange("second", second);
    else if (!validMillisecond) return unitOutOfRange("millisecond", millisecond);
    else return false;
}

},{"./util.js":"ey0ja","./invalid.js":"44NKv","@parcel/transformer-js/src/esmodule-helpers.js":"4F0hj"}]},["hNwJw","bB7Pu"], "bB7Pu", "parcelRequire4cfb")

//# sourceMappingURL=index.3d214d75.js.map
