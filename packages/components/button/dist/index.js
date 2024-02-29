(() => {
  // ../../../node_modules/.pnpm/@ungap+custom-elements@1.3.0/node_modules/@ungap/custom-elements/index.js
  (function () {
    'use strict'
    const attributesObserver = function (whenDefined2, MutationObserver2) {
      const attributeChanged = function attributeChanged2 (records) {
        for (let i = 0, length = records.length; i < length; i++) { dispatch(records[i]) }
      }
      var dispatch = function dispatch2 (_ref2) {
        const target = _ref2.target; const attributeName = _ref2.attributeName; const oldValue = _ref2.oldValue
        target.attributeChangedCallback(attributeName, oldValue, target.getAttribute(attributeName))
      }
      return function (target, is2) {
        const attributeFilter = target.constructor.observedAttributes
        if (attributeFilter) {
          whenDefined2(is2).then(function () {
            new MutationObserver2(attributeChanged).observe(target, {
              attributes: true,
              attributeOldValue: true,
              attributeFilter
            })
            for (let i = 0, length = attributeFilter.length; i < length; i++) {
              if (target.hasAttribute(attributeFilter[i])) {
                dispatch({
                  target,
                  attributeName: attributeFilter[i],
                  oldValue: null
                })
              }
            }
          })
        }
        return target
      }
    }
    function _unsupportedIterableToArray (o, minLen) {
      if (!o) { return }
      if (typeof o === 'string') { return _arrayLikeToArray(o, minLen) }
      let n = Object.prototype.toString.call(o).slice(8, -1)
      if (n === 'Object' && o.constructor) { n = o.constructor.name }
      if (n === 'Map' || n === 'Set') { return Array.from(o) }
      if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) { return _arrayLikeToArray(o, minLen) }
    }
    function _arrayLikeToArray (arr, len) {
      if (len == null || len > arr.length) { len = arr.length }
      for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i] }
      return arr2
    }
    function _createForOfIteratorHelper (o, allowArrayLike) {
      let it = typeof Symbol !== 'undefined' && o[Symbol.iterator] || o['@@iterator']
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === 'number') {
          if (it) { o = it }
          let i = 0
          const F = function () {
          }
          return {
            s: F,
            n: function () {
              if (i >= o.length) {
                return {
                  done: true
                }
              }
              return {
                done: false,
                value: o[i++]
              }
            },
            e: function (e) {
              throw e
            },
            f: F
          }
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }
      let normalCompletion = true; let didErr = false; let err
      return {
        s: function () {
          it = it.call(o)
        },
        n: function () {
          const step = it.next()
          normalCompletion = step.done
          return step
        },
        e: function (e) {
          didErr = true
          err = e
        },
        f: function () {
          try {
            if (!normalCompletion && it.return != null) { it.return() }
          } finally {
            if (didErr) { throw err }
          }
        }
      }
    }
    const TRUE = true; const FALSE = false; const QSA$1 = 'querySelectorAll'
    const notify = function notify2 (callback) {
      const root = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document
      const MO = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : MutationObserver
      const query2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ['*']
      const loop = function loop2 (nodes, selectors, added, removed, connected, pass) {
        const _iterator = _createForOfIteratorHelper(nodes); let _step
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            const node = _step.value
            if (pass || QSA$1 in node) {
              if (connected) {
                if (!added.has(node)) {
                  added.add(node)
                  removed.delete(node)
                  callback(node, connected)
                }
              } else if (!removed.has(node)) {
                removed.add(node)
                added.delete(node)
                callback(node, connected)
              }
              if (!pass) { loop2(node[QSA$1](selectors), selectors, added, removed, connected, TRUE) }
            }
          }
        } catch (err) {
          _iterator.e(err)
        } finally {
          _iterator.f()
        }
      }
      const mo = new MO(function (records) {
        if (query2.length) {
          const selectors = query2.join(',')
          const added = /* @__PURE__ */ new Set(); const removed = /* @__PURE__ */ new Set()
          const _iterator2 = _createForOfIteratorHelper(records); let _step2
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              const _step2$value = _step2.value; const addedNodes = _step2$value.addedNodes; const removedNodes = _step2$value.removedNodes
              loop(removedNodes, selectors, added, removed, FALSE, FALSE)
              loop(addedNodes, selectors, added, removed, TRUE, FALSE)
            }
          } catch (err) {
            _iterator2.e(err)
          } finally {
            _iterator2.f()
          }
        }
      })
      const observe = mo.observe;
      (mo.observe = function (node) {
        return observe.call(mo, node, {
          subtree: TRUE,
          childList: TRUE
        })
      })(root)
      return mo
    }
    const QSA = 'querySelectorAll'
    const _self$1 = self; const document$2 = _self$1.document; const Element$1 = _self$1.Element; const MutationObserver$2 = _self$1.MutationObserver; const Set$2 = _self$1.Set; const WeakMap$1 = _self$1.WeakMap
    const elements = function elements2 (element) {
      return QSA in element
    }
    const filter = [].filter
    const qsaObserver = function (options) {
      const live = new WeakMap$1()
      const drop = function drop2 (elements2) {
        for (let i = 0, length = elements2.length; i < length; i++) { live.delete(elements2[i]) }
      }
      const flush = function flush2 () {
        const records = observer.takeRecords()
        for (let i = 0, length = records.length; i < length; i++) {
          parse2(filter.call(records[i].removedNodes, elements), false)
          parse2(filter.call(records[i].addedNodes, elements), true)
        }
      }
      const matches = function matches2 (element) {
        return element.matches || element.webkitMatchesSelector || element.msMatchesSelector
      }
      const notifier = function notifier2 (element, connected) {
        let selectors
        if (connected) {
          for (var q, m = matches(element), i = 0, length = query2.length; i < length; i++) {
            if (m.call(element, q = query2[i])) {
              if (!live.has(element)) { live.set(element, new Set$2()) }
              selectors = live.get(element)
              if (!selectors.has(q)) {
                selectors.add(q)
                options.handle(element, connected, q)
              }
            }
          }
        } else if (live.has(element)) {
          selectors = live.get(element)
          live.delete(element)
          selectors.forEach(function (q2) {
            options.handle(element, connected, q2)
          })
        }
      }
      var parse2 = function parse3 (elements2) {
        const connected = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true
        for (let i = 0, length = elements2.length; i < length; i++) { notifier(elements2[i], connected) }
      }
      var query2 = options.query
      const root = options.root || document$2
      var observer = notify(notifier, root, MutationObserver$2, query2)
      const attachShadow2 = Element$1.prototype.attachShadow
      if (attachShadow2) {
        Element$1.prototype.attachShadow = function (init) {
          const shadowRoot = attachShadow2.call(this, init)
          observer.observe(shadowRoot)
          return shadowRoot
        }
      }
      if (query2.length) { parse2(root[QSA](query2)) }
      return {
        drop,
        flush,
        observer,
        parse: parse2
      }
    }
    const _self = self; const document$1 = _self.document; const Map = _self.Map; const MutationObserver$1 = _self.MutationObserver; const Object$1 = _self.Object; const Set$1 = _self.Set; const WeakMap = _self.WeakMap; const Element = _self.Element; const HTMLElement = _self.HTMLElement; const Node = _self.Node; const Error = _self.Error; const TypeError$1 = _self.TypeError; const Reflect = _self.Reflect
    const defineProperty = Object$1.defineProperty; const keys = Object$1.keys; const getOwnPropertyNames = Object$1.getOwnPropertyNames; const setPrototypeOf = Object$1.setPrototypeOf
    let legacy = !self.customElements
    const expando = function expando2 (element) {
      const key = keys(element)
      const value = []
      const ignore = new Set$1()
      const length = key.length
      for (let i = 0; i < length; i++) {
        value[i] = element[key[i]]
        try {
          delete element[key[i]]
        } catch (SafariTP) {
          ignore.add(i)
        }
      }
      return function () {
        for (let _i = 0; _i < length; _i++) { ignore.has(_i) || (element[key[_i]] = value[_i]) }
      }
    }
    if (legacy) {
      const HTMLBuiltIn = function HTMLBuiltIn2 () {
        const constructor = this.constructor
        if (!classes.has(constructor)) { throw new TypeError$1('Illegal constructor') }
        const is2 = classes.get(constructor)
        if (override) { return augment(override, is2) }
        const element = createElement.call(document$1, is2)
        return augment(setPrototypeOf(element, constructor.prototype), is2)
      }
      var createElement = document$1.createElement
      var classes = new Map()
      const defined = new Map()
      const prototypes = new Map()
      const registry = new Map()
      const query = []
      const handle = function handle2 (element, connected, selector) {
        const proto = prototypes.get(selector)
        if (connected && !proto.isPrototypeOf(element)) {
          const redefine = expando(element)
          override = setPrototypeOf(element, proto)
          try {
            new proto.constructor()
          } finally {
            override = null
            redefine()
          }
        }
        const method = ''.concat(connected ? '' : 'dis', 'connectedCallback')
        if (method in proto) { element[method]() }
      }
      const _qsaObserver = qsaObserver({
        query,
        handle
      }); const parse = _qsaObserver.parse
      var override = null
      const whenDefined = function whenDefined2 (name) {
        if (!defined.has(name)) {
          let _; const $ = new Promise(function ($2) {
            _ = $2
          })
          defined.set(name, {
            $,
            _
          })
        }
        return defined.get(name).$
      }
      var augment = attributesObserver(whenDefined, MutationObserver$1)
      self.customElements = {
        define: function define2 (is2, Class) {
          if (registry.has(is2)) { throw new Error('the name "'.concat(is2, '" has already been used with this registry')) }
          classes.set(Class, is2)
          prototypes.set(is2, Class.prototype)
          registry.set(is2, Class)
          query.push(is2)
          whenDefined(is2).then(function () {
            parse(document$1.querySelectorAll(is2))
          })
          defined.get(is2)._(Class)
        },
        get: function get2 (is2) {
          return registry.get(is2)
        },
        whenDefined
      }
      defineProperty(HTMLBuiltIn.prototype = HTMLElement.prototype, 'constructor', {
        value: HTMLBuiltIn
      })
      self.HTMLElement = HTMLBuiltIn
      document$1.createElement = function (name, options) {
        const is2 = options && options.is
        const Class = is2 ? registry.get(is2) : registry.get(name)
        return Class ? new Class() : createElement.call(document$1, name)
      }
      if (!('isConnected' in Node.prototype)) {
        defineProperty(Node.prototype, 'isConnected', {
          configurable: true,
          get: function get2 () {
            return !(this.ownerDocument.compareDocumentPosition(this) & this.DOCUMENT_POSITION_DISCONNECTED)
          }
        })
      }
    } else {
      legacy = !self.customElements.get('extends-br')
      if (legacy) {
        try {
          const BR = function BR2 () {
            return self.Reflect.construct(HTMLBRElement, [], BR2)
          }
          BR.prototype = HTMLLIElement.prototype
          const is = 'extends-br'
          self.customElements.define('extends-br', BR, {
            extends: 'br'
          })
          legacy = document$1.createElement('br', {
            is
          }).outerHTML.indexOf(is) < 0
          const _self$customElements = self.customElements; const get = _self$customElements.get; const _whenDefined = _self$customElements.whenDefined
          self.customElements.whenDefined = function (is2) {
            const _this = this
            return _whenDefined.call(this, is2).then(function (Class) {
              return Class || get.call(_this, is2)
            })
          }
        } catch (o_O) {
        }
      }
    }
    if (legacy) {
      const _parseShadow = function _parseShadow2 (element) {
        const root = shadowRoots.get(element)
        _parse(root.querySelectorAll(this), element.isConnected)
      }
      const customElements2 = self.customElements
      const _createElement = document$1.createElement
      const define = customElements2.define; const _get = customElements2.get; const upgrade = customElements2.upgrade
      const _ref = Reflect || {
        construct: function construct2 (HTMLElement2) {
          return HTMLElement2.call(this)
        }
      }; const construct = _ref.construct
      var shadowRoots = new WeakMap()
      const shadows = new Set$1()
      const _classes = new Map()
      const _defined = new Map()
      const _prototypes = new Map()
      const _registry = new Map()
      const shadowed = []
      const _query = []
      const getCE = function getCE2 (is2) {
        return _registry.get(is2) || _get.call(customElements2, is2)
      }
      const _handle = function _handle2 (element, connected, selector) {
        const proto = _prototypes.get(selector)
        if (connected && !proto.isPrototypeOf(element)) {
          const redefine = expando(element)
          _override = setPrototypeOf(element, proto)
          try {
            new proto.constructor()
          } finally {
            _override = null
            redefine()
          }
        }
        const method = ''.concat(connected ? '' : 'dis', 'connectedCallback')
        if (method in proto) { element[method]() }
      }
      const _qsaObserver2 = qsaObserver({
        query: _query,
        handle: _handle
      }); var _parse = _qsaObserver2.parse
      const _qsaObserver3 = qsaObserver({
        query: shadowed,
        handle: function handle2 (element, connected) {
          if (shadowRoots.has(element)) {
            if (connected) { shadows.add(element) } else { shadows.delete(element) }
            if (_query.length) { _parseShadow.call(_query, element) }
          }
        }
      }); const parseShadowed = _qsaObserver3.parse
      const attachShadow = Element.prototype.attachShadow
      if (attachShadow) {
        Element.prototype.attachShadow = function (init) {
          const root = attachShadow.call(this, init)
          shadowRoots.set(this, root)
          return root
        }
      }
      const _whenDefined2 = function _whenDefined22 (name) {
        if (!_defined.has(name)) {
          let _; const $ = new Promise(function ($2) {
            _ = $2
          })
          _defined.set(name, {
            $,
            _
          })
        }
        return _defined.get(name).$
      }
      const _augment = attributesObserver(_whenDefined2, MutationObserver$1)
      var _override = null
      getOwnPropertyNames(self).filter(function (k) {
        return /^HTML.*Element$/.test(k)
      }).forEach(function (k) {
        const HTMLElement2 = self[k]
        function HTMLBuiltIn2 () {
          const constructor = this.constructor
          if (!_classes.has(constructor)) { throw new TypeError$1('Illegal constructor') }
          const _classes$get = _classes.get(constructor); const is2 = _classes$get.is; const tag = _classes$get.tag
          if (is2) {
            if (_override) { return _augment(_override, is2) }
            const element = _createElement.call(document$1, tag)
            element.setAttribute('is', is2)
            return _augment(setPrototypeOf(element, constructor.prototype), is2)
          } else { return construct.call(this, HTMLElement2, [], constructor) }
        }
        defineProperty(HTMLBuiltIn2.prototype = HTMLElement2.prototype, 'constructor', {
          value: HTMLBuiltIn2
        })
        defineProperty(self, k, {
          value: HTMLBuiltIn2
        })
      })
      document$1.createElement = function (name, options) {
        const is2 = options && options.is
        if (is2) {
          const Class = _registry.get(is2)
          if (Class && _classes.get(Class).tag === name) { return new Class() }
        }
        const element = _createElement.call(document$1, name)
        if (is2) { element.setAttribute('is', is2) }
        return element
      }
      customElements2.get = getCE
      customElements2.whenDefined = _whenDefined2
      customElements2.upgrade = function (element) {
        const is2 = element.getAttribute('is')
        if (is2) {
          const _constructor = _registry.get(is2)
          if (_constructor) {
            _augment(setPrototypeOf(element, _constructor.prototype), is2)
            return
          }
        }
        upgrade.call(customElements2, element)
      }
      customElements2.define = function (is2, Class, options) {
        if (getCE(is2)) { throw new Error("'".concat(is2, "' has already been defined as a custom element")) }
        let selector
        const tag = options && options.extends
        _classes.set(Class, tag
          ? {
              is: is2,
              tag
            }
          : {
              is: '',
              tag: is2
            })
        if (tag) {
          selector = ''.concat(tag, '[is="').concat(is2, '"]')
          _prototypes.set(selector, Class.prototype)
          _registry.set(is2, Class)
          _query.push(selector)
        } else {
          define.apply(customElements2, arguments)
          shadowed.push(selector = is2)
        }
        _whenDefined2(is2).then(function () {
          if (tag) {
            _parse(document$1.querySelectorAll(selector))
            shadows.forEach(_parseShadow, [selector])
          } else { parseShadowed(document$1.querySelectorAll(selector)) }
        })
        _defined.get(is2)._(Class)
      }
    }
  })()

  // ../../utilities/src/js/toggle.js
  const toggle_default = (controller) => {
    const controls = document.getElementById(controller.getAttribute('aria-controls'))
    const isExpanded = controller.getAttribute('aria-expanded').toLowerCase() === 'true'
    controller.setAttribute('aria-expanded', !isExpanded)
    isExpanded ? controls.setAttribute('hidden', '') : controls.removeAttribute('hidden')
    return controller
  }

  // src/js/index.js
  customElements.define(
    'toggle-button',
    class ToggleButton extends HTMLButtonElement {
      connectedCallback () {
        if (!this.hasAttribute('aria-controls')) {
          console.error(
            `ToggleButton: "aria-controls" must be set to the
                        ID of the element you are toggling`
          )
          return
        }
        if (!this.hasAttribute('aria-expanded')) {
          console.error(
            `ToggleButton: "aria-expanded" must be set to the
             toggled elements initial visibility, either
             "true" or "false"`
          )
          return
        }
        this.addEventListener('click', this)
      }

      handleEvent (e) {
        this['on' + e.type](e)
      }

      onclick (e) {
        toggle_default(this)
      }
    },
    { extends: 'button' }
  )
})()
/*! Bundled license information:

@ungap/custom-elements/index.js:
  (*! (c) Andrea Giammarchi @webreflection ISC *)
  (*! (c) Andrea Giammarchi - ISC *)
*/
