(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/lib/core.js
  var require_core = __commonJS({
    "../../node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/lib/core.js"(exports, module) {
      function deepFreeze(obj) {
        if (obj instanceof Map) {
          obj.clear = obj.delete = obj.set = function() {
            throw new Error("map is read-only");
          };
        } else if (obj instanceof Set) {
          obj.add = obj.clear = obj.delete = function() {
            throw new Error("set is read-only");
          };
        }
        Object.freeze(obj);
        Object.getOwnPropertyNames(obj).forEach((name) => {
          const prop = obj[name];
          const type = typeof prop;
          if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
            deepFreeze(prop);
          }
        });
        return obj;
      }
      var Response = class {
        /**
         * @param {CompiledMode} mode
         */
        constructor(mode) {
          if (mode.data === void 0)
            mode.data = {};
          this.data = mode.data;
          this.isMatchIgnored = false;
        }
        ignoreMatch() {
          this.isMatchIgnored = true;
        }
      };
      function escapeHTML(value) {
        return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
      }
      function inherit$1(original, ...objects) {
        const result = /* @__PURE__ */ Object.create(null);
        for (const key in original) {
          result[key] = original[key];
        }
        objects.forEach(function(obj) {
          for (const key in obj) {
            result[key] = obj[key];
          }
        });
        return (
          /** @type {T} */
          result
        );
      }
      var SPAN_CLOSE = "</span>";
      var emitsWrappingTags = (node) => {
        return !!node.scope;
      };
      var scopeToCSSClass = (name, { prefix }) => {
        if (name.startsWith("language:")) {
          return name.replace("language:", "language-");
        }
        if (name.includes(".")) {
          const pieces = name.split(".");
          return [
            `${prefix}${pieces.shift()}`,
            ...pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`)
          ].join(" ");
        }
        return `${prefix}${name}`;
      };
      var HTMLRenderer = class {
        /**
         * Creates a new HTMLRenderer
         *
         * @param {Tree} parseTree - the parse tree (must support `walk` API)
         * @param {{classPrefix: string}} options
         */
        constructor(parseTree, options) {
          this.buffer = "";
          this.classPrefix = options.classPrefix;
          parseTree.walk(this);
        }
        /**
         * Adds texts to the output stream
         *
         * @param {string} text */
        addText(text) {
          this.buffer += escapeHTML(text);
        }
        /**
         * Adds a node open to the output stream (if needed)
         *
         * @param {Node} node */
        openNode(node) {
          if (!emitsWrappingTags(node))
            return;
          const className = scopeToCSSClass(
            node.scope,
            { prefix: this.classPrefix }
          );
          this.span(className);
        }
        /**
         * Adds a node close to the output stream (if needed)
         *
         * @param {Node} node */
        closeNode(node) {
          if (!emitsWrappingTags(node))
            return;
          this.buffer += SPAN_CLOSE;
        }
        /**
         * returns the accumulated buffer
        */
        value() {
          return this.buffer;
        }
        // helpers
        /**
         * Builds a span element
         *
         * @param {string} className */
        span(className) {
          this.buffer += `<span class="${className}">`;
        }
      };
      var newNode = (opts = {}) => {
        const result = { children: [] };
        Object.assign(result, opts);
        return result;
      };
      var TokenTree = class _TokenTree {
        constructor() {
          this.rootNode = newNode();
          this.stack = [this.rootNode];
        }
        get top() {
          return this.stack[this.stack.length - 1];
        }
        get root() {
          return this.rootNode;
        }
        /** @param {Node} node */
        add(node) {
          this.top.children.push(node);
        }
        /** @param {string} scope */
        openNode(scope) {
          const node = newNode({ scope });
          this.add(node);
          this.stack.push(node);
        }
        closeNode() {
          if (this.stack.length > 1) {
            return this.stack.pop();
          }
          return void 0;
        }
        closeAllNodes() {
          while (this.closeNode())
            ;
        }
        toJSON() {
          return JSON.stringify(this.rootNode, null, 4);
        }
        /**
         * @typedef { import("./html_renderer").Renderer } Renderer
         * @param {Renderer} builder
         */
        walk(builder) {
          return this.constructor._walk(builder, this.rootNode);
        }
        /**
         * @param {Renderer} builder
         * @param {Node} node
         */
        static _walk(builder, node) {
          if (typeof node === "string") {
            builder.addText(node);
          } else if (node.children) {
            builder.openNode(node);
            node.children.forEach((child) => this._walk(builder, child));
            builder.closeNode(node);
          }
          return builder;
        }
        /**
         * @param {Node} node
         */
        static _collapse(node) {
          if (typeof node === "string")
            return;
          if (!node.children)
            return;
          if (node.children.every((el) => typeof el === "string")) {
            node.children = [node.children.join("")];
          } else {
            node.children.forEach((child) => {
              _TokenTree._collapse(child);
            });
          }
        }
      };
      var TokenTreeEmitter = class extends TokenTree {
        /**
         * @param {*} options
         */
        constructor(options) {
          super();
          this.options = options;
        }
        /**
         * @param {string} text
         */
        addText(text) {
          if (text === "") {
            return;
          }
          this.add(text);
        }
        /** @param {string} scope */
        startScope(scope) {
          this.openNode(scope);
        }
        endScope() {
          this.closeNode();
        }
        /**
         * @param {Emitter & {root: DataNode}} emitter
         * @param {string} name
         */
        __addSublanguage(emitter, name) {
          const node = emitter.root;
          if (name)
            node.scope = `language:${name}`;
          this.add(node);
        }
        toHTML() {
          const renderer = new HTMLRenderer(this, this.options);
          return renderer.value();
        }
        finalize() {
          this.closeAllNodes();
          return true;
        }
      };
      function source(re) {
        if (!re)
          return null;
        if (typeof re === "string")
          return re;
        return re.source;
      }
      function lookahead(re) {
        return concat("(?=", re, ")");
      }
      function anyNumberOfTimes(re) {
        return concat("(?:", re, ")*");
      }
      function optional(re) {
        return concat("(?:", re, ")?");
      }
      function concat(...args) {
        const joined = args.map((x) => source(x)).join("");
        return joined;
      }
      function stripOptionsFromArgs(args) {
        const opts = args[args.length - 1];
        if (typeof opts === "object" && opts.constructor === Object) {
          args.splice(args.length - 1, 1);
          return opts;
        } else {
          return {};
        }
      }
      function either(...args) {
        const opts = stripOptionsFromArgs(args);
        const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
        return joined;
      }
      function countMatchGroups(re) {
        return new RegExp(re.toString() + "|").exec("").length - 1;
      }
      function startsWith(re, lexeme) {
        const match = re && re.exec(lexeme);
        return match && match.index === 0;
      }
      var BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
      function _rewriteBackreferences(regexps, { joinWith }) {
        let numCaptures = 0;
        return regexps.map((regex) => {
          numCaptures += 1;
          const offset = numCaptures;
          let re = source(regex);
          let out = "";
          while (re.length > 0) {
            const match = BACKREF_RE.exec(re);
            if (!match) {
              out += re;
              break;
            }
            out += re.substring(0, match.index);
            re = re.substring(match.index + match[0].length);
            if (match[0][0] === "\\" && match[1]) {
              out += "\\" + String(Number(match[1]) + offset);
            } else {
              out += match[0];
              if (match[0] === "(") {
                numCaptures++;
              }
            }
          }
          return out;
        }).map((re) => `(${re})`).join(joinWith);
      }
      var MATCH_NOTHING_RE = /\b\B/;
      var IDENT_RE2 = "[a-zA-Z]\\w*";
      var UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
      var NUMBER_RE = "\\b\\d+(\\.\\d+)?";
      var C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
      var BINARY_NUMBER_RE = "\\b(0b[01]+)";
      var RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
      var SHEBANG = (opts = {}) => {
        const beginShebang = /^#![ ]*\//;
        if (opts.binary) {
          opts.begin = concat(
            beginShebang,
            /.*\b/,
            opts.binary,
            /\b.*/
          );
        }
        return inherit$1({
          scope: "meta",
          begin: beginShebang,
          end: /$/,
          relevance: 0,
          /** @type {ModeCallback} */
          "on:begin": (m, resp) => {
            if (m.index !== 0)
              resp.ignoreMatch();
          }
        }, opts);
      };
      var BACKSLASH_ESCAPE = {
        begin: "\\\\[\\s\\S]",
        relevance: 0
      };
      var APOS_STRING_MODE = {
        scope: "string",
        begin: "'",
        end: "'",
        illegal: "\\n",
        contains: [BACKSLASH_ESCAPE]
      };
      var QUOTE_STRING_MODE = {
        scope: "string",
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [BACKSLASH_ESCAPE]
      };
      var PHRASAL_WORDS_MODE = {
        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      };
      var COMMENT = function(begin, end, modeOptions = {}) {
        const mode = inherit$1(
          {
            scope: "comment",
            begin,
            end,
            contains: []
          },
          modeOptions
        );
        mode.contains.push({
          scope: "doctag",
          // hack to avoid the space from being included. the space is necessary to
          // match here to prevent the plain text rule below from gobbling up doctags
          begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: true,
          relevance: 0
        });
        const ENGLISH_WORD = either(
          // list of common 1 and 2 letter words in English
          "I",
          "a",
          "is",
          "so",
          "us",
          "to",
          "at",
          "if",
          "in",
          "it",
          "on",
          // note: this is not an exhaustive list of contractions, just popular ones
          /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
          // contractions - can't we'd they're let's, etc
          /[A-Za-z]+[-][a-z]+/,
          // `no-way`, etc.
          /[A-Za-z][a-z]{2,}/
          // allow capitalized words at beginning of sentences
        );
        mode.contains.push(
          {
            // TODO: how to include ", (, ) without breaking grammars that use these for
            // comment delimiters?
            // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
            // ---
            // this tries to find sequences of 3 english words in a row (without any
            // "programming" type syntax) this gives us a strong signal that we've
            // TRULY found a comment - vs perhaps scanning with the wrong language.
            // It's possible to find something that LOOKS like the start of the
            // comment - but then if there is no readable text - good chance it is a
            // false match and not a comment.
            //
            // for a visual example please see:
            // https://github.com/highlightjs/highlight.js/issues/2827
            begin: concat(
              /[ ]+/,
              // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
              "(",
              ENGLISH_WORD,
              /[.]?[:]?([.][ ]|[ ])/,
              "){3}"
            )
            // look for 3 words in a row
          }
        );
        return mode;
      };
      var C_LINE_COMMENT_MODE = COMMENT("//", "$");
      var C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
      var HASH_COMMENT_MODE = COMMENT("#", "$");
      var NUMBER_MODE = {
        scope: "number",
        begin: NUMBER_RE,
        relevance: 0
      };
      var C_NUMBER_MODE = {
        scope: "number",
        begin: C_NUMBER_RE,
        relevance: 0
      };
      var BINARY_NUMBER_MODE = {
        scope: "number",
        begin: BINARY_NUMBER_RE,
        relevance: 0
      };
      var REGEXP_MODE = {
        scope: "regexp",
        begin: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [
          BACKSLASH_ESCAPE,
          {
            begin: /\[/,
            end: /\]/,
            relevance: 0,
            contains: [BACKSLASH_ESCAPE]
          }
        ]
      };
      var TITLE_MODE = {
        scope: "title",
        begin: IDENT_RE2,
        relevance: 0
      };
      var UNDERSCORE_TITLE_MODE = {
        scope: "title",
        begin: UNDERSCORE_IDENT_RE,
        relevance: 0
      };
      var METHOD_GUARD = {
        // excludes method names from keyword processing
        begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
        relevance: 0
      };
      var END_SAME_AS_BEGIN = function(mode) {
        return Object.assign(
          mode,
          {
            /** @type {ModeCallback} */
            "on:begin": (m, resp) => {
              resp.data._beginMatch = m[1];
            },
            /** @type {ModeCallback} */
            "on:end": (m, resp) => {
              if (resp.data._beginMatch !== m[1])
                resp.ignoreMatch();
            }
          }
        );
      };
      var MODES2 = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        APOS_STRING_MODE,
        BACKSLASH_ESCAPE,
        BINARY_NUMBER_MODE,
        BINARY_NUMBER_RE,
        COMMENT,
        C_BLOCK_COMMENT_MODE,
        C_LINE_COMMENT_MODE,
        C_NUMBER_MODE,
        C_NUMBER_RE,
        END_SAME_AS_BEGIN,
        HASH_COMMENT_MODE,
        IDENT_RE: IDENT_RE2,
        MATCH_NOTHING_RE,
        METHOD_GUARD,
        NUMBER_MODE,
        NUMBER_RE,
        PHRASAL_WORDS_MODE,
        QUOTE_STRING_MODE,
        REGEXP_MODE,
        RE_STARTERS_RE,
        SHEBANG,
        TITLE_MODE,
        UNDERSCORE_IDENT_RE,
        UNDERSCORE_TITLE_MODE
      });
      function skipIfHasPrecedingDot(match, response) {
        const before = match.input[match.index - 1];
        if (before === ".") {
          response.ignoreMatch();
        }
      }
      function scopeClassName(mode, _parent) {
        if (mode.className !== void 0) {
          mode.scope = mode.className;
          delete mode.className;
        }
      }
      function beginKeywords(mode, parent) {
        if (!parent)
          return;
        if (!mode.beginKeywords)
          return;
        mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
        mode.__beforeBegin = skipIfHasPrecedingDot;
        mode.keywords = mode.keywords || mode.beginKeywords;
        delete mode.beginKeywords;
        if (mode.relevance === void 0)
          mode.relevance = 0;
      }
      function compileIllegal(mode, _parent) {
        if (!Array.isArray(mode.illegal))
          return;
        mode.illegal = either(...mode.illegal);
      }
      function compileMatch(mode, _parent) {
        if (!mode.match)
          return;
        if (mode.begin || mode.end)
          throw new Error("begin & end are not supported with match");
        mode.begin = mode.match;
        delete mode.match;
      }
      function compileRelevance(mode, _parent) {
        if (mode.relevance === void 0)
          mode.relevance = 1;
      }
      var beforeMatchExt = (mode, parent) => {
        if (!mode.beforeMatch)
          return;
        if (mode.starts)
          throw new Error("beforeMatch cannot be used with starts");
        const originalMode = Object.assign({}, mode);
        Object.keys(mode).forEach((key) => {
          delete mode[key];
        });
        mode.keywords = originalMode.keywords;
        mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
        mode.starts = {
          relevance: 0,
          contains: [
            Object.assign(originalMode, { endsParent: true })
          ]
        };
        mode.relevance = 0;
        delete originalMode.beforeMatch;
      };
      var COMMON_KEYWORDS = [
        "of",
        "and",
        "for",
        "in",
        "not",
        "or",
        "if",
        "then",
        "parent",
        // common variable name
        "list",
        // common variable name
        "value"
        // common variable name
      ];
      var DEFAULT_KEYWORD_SCOPE = "keyword";
      function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
        const compiledKeywords = /* @__PURE__ */ Object.create(null);
        if (typeof rawKeywords === "string") {
          compileList(scopeName, rawKeywords.split(" "));
        } else if (Array.isArray(rawKeywords)) {
          compileList(scopeName, rawKeywords);
        } else {
          Object.keys(rawKeywords).forEach(function(scopeName2) {
            Object.assign(
              compiledKeywords,
              compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
            );
          });
        }
        return compiledKeywords;
        function compileList(scopeName2, keywordList) {
          if (caseInsensitive) {
            keywordList = keywordList.map((x) => x.toLowerCase());
          }
          keywordList.forEach(function(keyword) {
            const pair = keyword.split("|");
            compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
          });
        }
      }
      function scoreForKeyword(keyword, providedScore) {
        if (providedScore) {
          return Number(providedScore);
        }
        return commonKeyword(keyword) ? 0 : 1;
      }
      function commonKeyword(keyword) {
        return COMMON_KEYWORDS.includes(keyword.toLowerCase());
      }
      var seenDeprecations = {};
      var error = (message) => {
        console.error(message);
      };
      var warn = (message, ...args) => {
        console.log(`WARN: ${message}`, ...args);
      };
      var deprecated = (version2, message) => {
        if (seenDeprecations[`${version2}/${message}`])
          return;
        console.log(`Deprecated as of ${version2}. ${message}`);
        seenDeprecations[`${version2}/${message}`] = true;
      };
      var MultiClassError = new Error();
      function remapScopeNames(mode, regexes, { key }) {
        let offset = 0;
        const scopeNames = mode[key];
        const emit = {};
        const positions = {};
        for (let i = 1; i <= regexes.length; i++) {
          positions[i + offset] = scopeNames[i];
          emit[i + offset] = true;
          offset += countMatchGroups(regexes[i - 1]);
        }
        mode[key] = positions;
        mode[key]._emit = emit;
        mode[key]._multi = true;
      }
      function beginMultiClass(mode) {
        if (!Array.isArray(mode.begin))
          return;
        if (mode.skip || mode.excludeBegin || mode.returnBegin) {
          error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
          throw MultiClassError;
        }
        if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
          error("beginScope must be object");
          throw MultiClassError;
        }
        remapScopeNames(mode, mode.begin, { key: "beginScope" });
        mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
      }
      function endMultiClass(mode) {
        if (!Array.isArray(mode.end))
          return;
        if (mode.skip || mode.excludeEnd || mode.returnEnd) {
          error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
          throw MultiClassError;
        }
        if (typeof mode.endScope !== "object" || mode.endScope === null) {
          error("endScope must be object");
          throw MultiClassError;
        }
        remapScopeNames(mode, mode.end, { key: "endScope" });
        mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
      }
      function scopeSugar(mode) {
        if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
          mode.beginScope = mode.scope;
          delete mode.scope;
        }
      }
      function MultiClass(mode) {
        scopeSugar(mode);
        if (typeof mode.beginScope === "string") {
          mode.beginScope = { _wrap: mode.beginScope };
        }
        if (typeof mode.endScope === "string") {
          mode.endScope = { _wrap: mode.endScope };
        }
        beginMultiClass(mode);
        endMultiClass(mode);
      }
      function compileLanguage(language) {
        function langRe(value, global) {
          return new RegExp(
            source(value),
            "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : "")
          );
        }
        class MultiRegex {
          constructor() {
            this.matchIndexes = {};
            this.regexes = [];
            this.matchAt = 1;
            this.position = 0;
          }
          // @ts-ignore
          addRule(re, opts) {
            opts.position = this.position++;
            this.matchIndexes[this.matchAt] = opts;
            this.regexes.push([opts, re]);
            this.matchAt += countMatchGroups(re) + 1;
          }
          compile() {
            if (this.regexes.length === 0) {
              this.exec = () => null;
            }
            const terminators = this.regexes.map((el) => el[1]);
            this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
            this.lastIndex = 0;
          }
          /** @param {string} s */
          exec(s) {
            this.matcherRe.lastIndex = this.lastIndex;
            const match = this.matcherRe.exec(s);
            if (!match) {
              return null;
            }
            const i = match.findIndex((el, i2) => i2 > 0 && el !== void 0);
            const matchData = this.matchIndexes[i];
            match.splice(0, i);
            return Object.assign(match, matchData);
          }
        }
        class ResumableMultiRegex {
          constructor() {
            this.rules = [];
            this.multiRegexes = [];
            this.count = 0;
            this.lastIndex = 0;
            this.regexIndex = 0;
          }
          // @ts-ignore
          getMatcher(index) {
            if (this.multiRegexes[index])
              return this.multiRegexes[index];
            const matcher = new MultiRegex();
            this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
            matcher.compile();
            this.multiRegexes[index] = matcher;
            return matcher;
          }
          resumingScanAtSamePosition() {
            return this.regexIndex !== 0;
          }
          considerAll() {
            this.regexIndex = 0;
          }
          // @ts-ignore
          addRule(re, opts) {
            this.rules.push([re, opts]);
            if (opts.type === "begin")
              this.count++;
          }
          /** @param {string} s */
          exec(s) {
            const m = this.getMatcher(this.regexIndex);
            m.lastIndex = this.lastIndex;
            let result = m.exec(s);
            if (this.resumingScanAtSamePosition()) {
              if (result && result.index === this.lastIndex)
                ;
              else {
                const m2 = this.getMatcher(0);
                m2.lastIndex = this.lastIndex + 1;
                result = m2.exec(s);
              }
            }
            if (result) {
              this.regexIndex += result.position + 1;
              if (this.regexIndex === this.count) {
                this.considerAll();
              }
            }
            return result;
          }
        }
        function buildModeRegex(mode) {
          const mm = new ResumableMultiRegex();
          mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
          if (mode.terminatorEnd) {
            mm.addRule(mode.terminatorEnd, { type: "end" });
          }
          if (mode.illegal) {
            mm.addRule(mode.illegal, { type: "illegal" });
          }
          return mm;
        }
        function compileMode(mode, parent) {
          const cmode = (
            /** @type CompiledMode */
            mode
          );
          if (mode.isCompiled)
            return cmode;
          [
            scopeClassName,
            // do this early so compiler extensions generally don't have to worry about
            // the distinction between match/begin
            compileMatch,
            MultiClass,
            beforeMatchExt
          ].forEach((ext) => ext(mode, parent));
          language.compilerExtensions.forEach((ext) => ext(mode, parent));
          mode.__beforeBegin = null;
          [
            beginKeywords,
            // do this later so compiler extensions that come earlier have access to the
            // raw array if they wanted to perhaps manipulate it, etc.
            compileIllegal,
            // default to 1 relevance if not specified
            compileRelevance
          ].forEach((ext) => ext(mode, parent));
          mode.isCompiled = true;
          let keywordPattern = null;
          if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
            mode.keywords = Object.assign({}, mode.keywords);
            keywordPattern = mode.keywords.$pattern;
            delete mode.keywords.$pattern;
          }
          keywordPattern = keywordPattern || /\w+/;
          if (mode.keywords) {
            mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
          }
          cmode.keywordPatternRe = langRe(keywordPattern, true);
          if (parent) {
            if (!mode.begin)
              mode.begin = /\B|\b/;
            cmode.beginRe = langRe(cmode.begin);
            if (!mode.end && !mode.endsWithParent)
              mode.end = /\B|\b/;
            if (mode.end)
              cmode.endRe = langRe(cmode.end);
            cmode.terminatorEnd = source(cmode.end) || "";
            if (mode.endsWithParent && parent.terminatorEnd) {
              cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
            }
          }
          if (mode.illegal)
            cmode.illegalRe = langRe(
              /** @type {RegExp | string} */
              mode.illegal
            );
          if (!mode.contains)
            mode.contains = [];
          mode.contains = [].concat(...mode.contains.map(function(c) {
            return expandOrCloneMode(c === "self" ? mode : c);
          }));
          mode.contains.forEach(function(c) {
            compileMode(
              /** @type Mode */
              c,
              cmode
            );
          });
          if (mode.starts) {
            compileMode(mode.starts, parent);
          }
          cmode.matcher = buildModeRegex(cmode);
          return cmode;
        }
        if (!language.compilerExtensions)
          language.compilerExtensions = [];
        if (language.contains && language.contains.includes("self")) {
          throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
        }
        language.classNameAliases = inherit$1(language.classNameAliases || {});
        return compileMode(
          /** @type Mode */
          language
        );
      }
      function dependencyOnParent(mode) {
        if (!mode)
          return false;
        return mode.endsWithParent || dependencyOnParent(mode.starts);
      }
      function expandOrCloneMode(mode) {
        if (mode.variants && !mode.cachedVariants) {
          mode.cachedVariants = mode.variants.map(function(variant) {
            return inherit$1(mode, { variants: null }, variant);
          });
        }
        if (mode.cachedVariants) {
          return mode.cachedVariants;
        }
        if (dependencyOnParent(mode)) {
          return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
        }
        if (Object.isFrozen(mode)) {
          return inherit$1(mode);
        }
        return mode;
      }
      var version = "11.9.0";
      var HTMLInjectionError = class extends Error {
        constructor(reason, html) {
          super(reason);
          this.name = "HTMLInjectionError";
          this.html = html;
        }
      };
      var escape = escapeHTML;
      var inherit = inherit$1;
      var NO_MATCH = Symbol("nomatch");
      var MAX_KEYWORD_HITS = 7;
      var HLJS = function(hljs) {
        const languages = /* @__PURE__ */ Object.create(null);
        const aliases = /* @__PURE__ */ Object.create(null);
        const plugins = [];
        let SAFE_MODE = true;
        const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
        const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
        let options = {
          ignoreUnescapedHTML: false,
          throwUnescapedHTML: false,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          // beta configuration options, subject to change, welcome to discuss
          // https://github.com/highlightjs/highlight.js/issues/1086
          __emitter: TokenTreeEmitter
        };
        function shouldNotHighlight(languageName) {
          return options.noHighlightRe.test(languageName);
        }
        function blockLanguage(block) {
          let classes = block.className + " ";
          classes += block.parentNode ? block.parentNode.className : "";
          const match = options.languageDetectRe.exec(classes);
          if (match) {
            const language = getLanguage(match[1]);
            if (!language) {
              warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
              warn("Falling back to no-highlight mode for this block.", block);
            }
            return language ? match[1] : "no-highlight";
          }
          return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
        }
        function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
          let code = "";
          let languageName = "";
          if (typeof optionsOrCode === "object") {
            code = codeOrLanguageName;
            ignoreIllegals = optionsOrCode.ignoreIllegals;
            languageName = optionsOrCode.language;
          } else {
            deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
            deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
            languageName = codeOrLanguageName;
            code = optionsOrCode;
          }
          if (ignoreIllegals === void 0) {
            ignoreIllegals = true;
          }
          const context = {
            code,
            language: languageName
          };
          fire("before:highlight", context);
          const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
          result.code = context.code;
          fire("after:highlight", result);
          return result;
        }
        function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
          const keywordHits = /* @__PURE__ */ Object.create(null);
          function keywordData(mode, matchText) {
            return mode.keywords[matchText];
          }
          function processKeywords() {
            if (!top.keywords) {
              emitter.addText(modeBuffer);
              return;
            }
            let lastIndex = 0;
            top.keywordPatternRe.lastIndex = 0;
            let match = top.keywordPatternRe.exec(modeBuffer);
            let buf = "";
            while (match) {
              buf += modeBuffer.substring(lastIndex, match.index);
              const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
              const data = keywordData(top, word);
              if (data) {
                const [kind, keywordRelevance] = data;
                emitter.addText(buf);
                buf = "";
                keywordHits[word] = (keywordHits[word] || 0) + 1;
                if (keywordHits[word] <= MAX_KEYWORD_HITS)
                  relevance += keywordRelevance;
                if (kind.startsWith("_")) {
                  buf += match[0];
                } else {
                  const cssClass = language.classNameAliases[kind] || kind;
                  emitKeyword(match[0], cssClass);
                }
              } else {
                buf += match[0];
              }
              lastIndex = top.keywordPatternRe.lastIndex;
              match = top.keywordPatternRe.exec(modeBuffer);
            }
            buf += modeBuffer.substring(lastIndex);
            emitter.addText(buf);
          }
          function processSubLanguage() {
            if (modeBuffer === "")
              return;
            let result2 = null;
            if (typeof top.subLanguage === "string") {
              if (!languages[top.subLanguage]) {
                emitter.addText(modeBuffer);
                return;
              }
              result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
              continuations[top.subLanguage] = /** @type {CompiledMode} */
              result2._top;
            } else {
              result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
            }
            if (top.relevance > 0) {
              relevance += result2.relevance;
            }
            emitter.__addSublanguage(result2._emitter, result2.language);
          }
          function processBuffer() {
            if (top.subLanguage != null) {
              processSubLanguage();
            } else {
              processKeywords();
            }
            modeBuffer = "";
          }
          function emitKeyword(keyword, scope) {
            if (keyword === "")
              return;
            emitter.startScope(scope);
            emitter.addText(keyword);
            emitter.endScope();
          }
          function emitMultiClass(scope, match) {
            let i = 1;
            const max = match.length - 1;
            while (i <= max) {
              if (!scope._emit[i]) {
                i++;
                continue;
              }
              const klass = language.classNameAliases[scope[i]] || scope[i];
              const text = match[i];
              if (klass) {
                emitKeyword(text, klass);
              } else {
                modeBuffer = text;
                processKeywords();
                modeBuffer = "";
              }
              i++;
            }
          }
          function startNewMode(mode, match) {
            if (mode.scope && typeof mode.scope === "string") {
              emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
            }
            if (mode.beginScope) {
              if (mode.beginScope._wrap) {
                emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
                modeBuffer = "";
              } else if (mode.beginScope._multi) {
                emitMultiClass(mode.beginScope, match);
                modeBuffer = "";
              }
            }
            top = Object.create(mode, { parent: { value: top } });
            return top;
          }
          function endOfMode(mode, match, matchPlusRemainder) {
            let matched = startsWith(mode.endRe, matchPlusRemainder);
            if (matched) {
              if (mode["on:end"]) {
                const resp = new Response(mode);
                mode["on:end"](match, resp);
                if (resp.isMatchIgnored)
                  matched = false;
              }
              if (matched) {
                while (mode.endsParent && mode.parent) {
                  mode = mode.parent;
                }
                return mode;
              }
            }
            if (mode.endsWithParent) {
              return endOfMode(mode.parent, match, matchPlusRemainder);
            }
          }
          function doIgnore(lexeme) {
            if (top.matcher.regexIndex === 0) {
              modeBuffer += lexeme[0];
              return 1;
            } else {
              resumeScanAtSamePosition = true;
              return 0;
            }
          }
          function doBeginMatch(match) {
            const lexeme = match[0];
            const newMode = match.rule;
            const resp = new Response(newMode);
            const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
            for (const cb of beforeCallbacks) {
              if (!cb)
                continue;
              cb(match, resp);
              if (resp.isMatchIgnored)
                return doIgnore(lexeme);
            }
            if (newMode.skip) {
              modeBuffer += lexeme;
            } else {
              if (newMode.excludeBegin) {
                modeBuffer += lexeme;
              }
              processBuffer();
              if (!newMode.returnBegin && !newMode.excludeBegin) {
                modeBuffer = lexeme;
              }
            }
            startNewMode(newMode, match);
            return newMode.returnBegin ? 0 : lexeme.length;
          }
          function doEndMatch(match) {
            const lexeme = match[0];
            const matchPlusRemainder = codeToHighlight.substring(match.index);
            const endMode = endOfMode(top, match, matchPlusRemainder);
            if (!endMode) {
              return NO_MATCH;
            }
            const origin = top;
            if (top.endScope && top.endScope._wrap) {
              processBuffer();
              emitKeyword(lexeme, top.endScope._wrap);
            } else if (top.endScope && top.endScope._multi) {
              processBuffer();
              emitMultiClass(top.endScope, match);
            } else if (origin.skip) {
              modeBuffer += lexeme;
            } else {
              if (!(origin.returnEnd || origin.excludeEnd)) {
                modeBuffer += lexeme;
              }
              processBuffer();
              if (origin.excludeEnd) {
                modeBuffer = lexeme;
              }
            }
            do {
              if (top.scope) {
                emitter.closeNode();
              }
              if (!top.skip && !top.subLanguage) {
                relevance += top.relevance;
              }
              top = top.parent;
            } while (top !== endMode.parent);
            if (endMode.starts) {
              startNewMode(endMode.starts, match);
            }
            return origin.returnEnd ? 0 : lexeme.length;
          }
          function processContinuations() {
            const list = [];
            for (let current = top; current !== language; current = current.parent) {
              if (current.scope) {
                list.unshift(current.scope);
              }
            }
            list.forEach((item) => emitter.openNode(item));
          }
          let lastMatch = {};
          function processLexeme(textBeforeMatch, match) {
            const lexeme = match && match[0];
            modeBuffer += textBeforeMatch;
            if (lexeme == null) {
              processBuffer();
              return 0;
            }
            if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
              modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
              if (!SAFE_MODE) {
                const err = new Error(`0 width match regex (${languageName})`);
                err.languageName = languageName;
                err.badRule = lastMatch.rule;
                throw err;
              }
              return 1;
            }
            lastMatch = match;
            if (match.type === "begin") {
              return doBeginMatch(match);
            } else if (match.type === "illegal" && !ignoreIllegals) {
              const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
              err.mode = top;
              throw err;
            } else if (match.type === "end") {
              const processed = doEndMatch(match);
              if (processed !== NO_MATCH) {
                return processed;
              }
            }
            if (match.type === "illegal" && lexeme === "") {
              return 1;
            }
            if (iterations > 1e5 && iterations > match.index * 3) {
              const err = new Error("potential infinite loop, way more iterations than matches");
              throw err;
            }
            modeBuffer += lexeme;
            return lexeme.length;
          }
          const language = getLanguage(languageName);
          if (!language) {
            error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
            throw new Error('Unknown language: "' + languageName + '"');
          }
          const md = compileLanguage(language);
          let result = "";
          let top = continuation || md;
          const continuations = {};
          const emitter = new options.__emitter(options);
          processContinuations();
          let modeBuffer = "";
          let relevance = 0;
          let index = 0;
          let iterations = 0;
          let resumeScanAtSamePosition = false;
          try {
            if (!language.__emitTokens) {
              top.matcher.considerAll();
              for (; ; ) {
                iterations++;
                if (resumeScanAtSamePosition) {
                  resumeScanAtSamePosition = false;
                } else {
                  top.matcher.considerAll();
                }
                top.matcher.lastIndex = index;
                const match = top.matcher.exec(codeToHighlight);
                if (!match)
                  break;
                const beforeMatch = codeToHighlight.substring(index, match.index);
                const processedCount = processLexeme(beforeMatch, match);
                index = match.index + processedCount;
              }
              processLexeme(codeToHighlight.substring(index));
            } else {
              language.__emitTokens(codeToHighlight, emitter);
            }
            emitter.finalize();
            result = emitter.toHTML();
            return {
              language: languageName,
              value: result,
              relevance,
              illegal: false,
              _emitter: emitter,
              _top: top
            };
          } catch (err) {
            if (err.message && err.message.includes("Illegal")) {
              return {
                language: languageName,
                value: escape(codeToHighlight),
                illegal: true,
                relevance: 0,
                _illegalBy: {
                  message: err.message,
                  index,
                  context: codeToHighlight.slice(index - 100, index + 100),
                  mode: err.mode,
                  resultSoFar: result
                },
                _emitter: emitter
              };
            } else if (SAFE_MODE) {
              return {
                language: languageName,
                value: escape(codeToHighlight),
                illegal: false,
                relevance: 0,
                errorRaised: err,
                _emitter: emitter,
                _top: top
              };
            } else {
              throw err;
            }
          }
        }
        function justTextHighlightResult(code) {
          const result = {
            value: escape(code),
            illegal: false,
            relevance: 0,
            _top: PLAINTEXT_LANGUAGE,
            _emitter: new options.__emitter(options)
          };
          result._emitter.addText(code);
          return result;
        }
        function highlightAuto(code, languageSubset) {
          languageSubset = languageSubset || options.languages || Object.keys(languages);
          const plaintext = justTextHighlightResult(code);
          const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
            (name) => _highlight(name, code, false)
          );
          results.unshift(plaintext);
          const sorted = results.sort((a, b) => {
            if (a.relevance !== b.relevance)
              return b.relevance - a.relevance;
            if (a.language && b.language) {
              if (getLanguage(a.language).supersetOf === b.language) {
                return 1;
              } else if (getLanguage(b.language).supersetOf === a.language) {
                return -1;
              }
            }
            return 0;
          });
          const [best, secondBest] = sorted;
          const result = best;
          result.secondBest = secondBest;
          return result;
        }
        function updateClassName(element, currentLang, resultLang) {
          const language = currentLang && aliases[currentLang] || resultLang;
          element.classList.add("hljs");
          element.classList.add(`language-${language}`);
        }
        function highlightElement(element) {
          let node = null;
          const language = blockLanguage(element);
          if (shouldNotHighlight(language))
            return;
          fire(
            "before:highlightElement",
            { el: element, language }
          );
          if (element.dataset.highlighted) {
            console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
            return;
          }
          if (element.children.length > 0) {
            if (!options.ignoreUnescapedHTML) {
              console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
              console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
              console.warn("The element with unescaped HTML:");
              console.warn(element);
            }
            if (options.throwUnescapedHTML) {
              const err = new HTMLInjectionError(
                "One of your code blocks includes unescaped HTML.",
                element.innerHTML
              );
              throw err;
            }
          }
          node = element;
          const text = node.textContent;
          const result = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
          element.innerHTML = result.value;
          element.dataset.highlighted = "yes";
          updateClassName(element, language, result.language);
          element.result = {
            language: result.language,
            // TODO: remove with version 11.0
            re: result.relevance,
            relevance: result.relevance
          };
          if (result.secondBest) {
            element.secondBest = {
              language: result.secondBest.language,
              relevance: result.secondBest.relevance
            };
          }
          fire("after:highlightElement", { el: element, result, text });
        }
        function configure(userOptions) {
          options = inherit(options, userOptions);
        }
        const initHighlighting = () => {
          highlightAll();
          deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
        };
        function initHighlightingOnLoad() {
          highlightAll();
          deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
        }
        let wantsHighlight = false;
        function highlightAll() {
          if (document.readyState === "loading") {
            wantsHighlight = true;
            return;
          }
          const blocks = document.querySelectorAll(options.cssSelector);
          blocks.forEach(highlightElement);
        }
        function boot() {
          if (wantsHighlight)
            highlightAll();
        }
        if (typeof window !== "undefined" && window.addEventListener) {
          window.addEventListener("DOMContentLoaded", boot, false);
        }
        function registerLanguage(languageName, languageDefinition) {
          let lang2 = null;
          try {
            lang2 = languageDefinition(hljs);
          } catch (error$1) {
            error("Language definition for '{}' could not be registered.".replace("{}", languageName));
            if (!SAFE_MODE) {
              throw error$1;
            } else {
              error(error$1);
            }
            lang2 = PLAINTEXT_LANGUAGE;
          }
          if (!lang2.name)
            lang2.name = languageName;
          languages[languageName] = lang2;
          lang2.rawDefinition = languageDefinition.bind(null, hljs);
          if (lang2.aliases) {
            registerAliases(lang2.aliases, { languageName });
          }
        }
        function unregisterLanguage(languageName) {
          delete languages[languageName];
          for (const alias of Object.keys(aliases)) {
            if (aliases[alias] === languageName) {
              delete aliases[alias];
            }
          }
        }
        function listLanguages() {
          return Object.keys(languages);
        }
        function getLanguage(name) {
          name = (name || "").toLowerCase();
          return languages[name] || languages[aliases[name]];
        }
        function registerAliases(aliasList, { languageName }) {
          if (typeof aliasList === "string") {
            aliasList = [aliasList];
          }
          aliasList.forEach((alias) => {
            aliases[alias.toLowerCase()] = languageName;
          });
        }
        function autoDetection(name) {
          const lang2 = getLanguage(name);
          return lang2 && !lang2.disableAutodetect;
        }
        function upgradePluginAPI(plugin) {
          if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
            plugin["before:highlightElement"] = (data) => {
              plugin["before:highlightBlock"](
                Object.assign({ block: data.el }, data)
              );
            };
          }
          if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
            plugin["after:highlightElement"] = (data) => {
              plugin["after:highlightBlock"](
                Object.assign({ block: data.el }, data)
              );
            };
          }
        }
        function addPlugin(plugin) {
          upgradePluginAPI(plugin);
          plugins.push(plugin);
        }
        function removePlugin(plugin) {
          const index = plugins.indexOf(plugin);
          if (index !== -1) {
            plugins.splice(index, 1);
          }
        }
        function fire(event, args) {
          const cb = event;
          plugins.forEach(function(plugin) {
            if (plugin[cb]) {
              plugin[cb](args);
            }
          });
        }
        function deprecateHighlightBlock(el) {
          deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
          deprecated("10.7.0", "Please use highlightElement now.");
          return highlightElement(el);
        }
        Object.assign(hljs, {
          highlight: highlight2,
          highlightAuto,
          highlightAll,
          highlightElement,
          // TODO: Remove with v12 API
          highlightBlock: deprecateHighlightBlock,
          configure,
          initHighlighting,
          initHighlightingOnLoad,
          registerLanguage,
          unregisterLanguage,
          listLanguages,
          getLanguage,
          registerAliases,
          autoDetection,
          inherit,
          addPlugin,
          removePlugin
        });
        hljs.debugMode = function() {
          SAFE_MODE = false;
        };
        hljs.safeMode = function() {
          SAFE_MODE = true;
        };
        hljs.versionString = version;
        hljs.regex = {
          concat,
          lookahead,
          either,
          optional,
          anyNumberOfTimes
        };
        for (const key in MODES2) {
          if (typeof MODES2[key] === "object") {
            deepFreeze(MODES2[key]);
          }
        }
        Object.assign(hljs, MODES2);
        return hljs;
      };
      var highlight = HLJS({});
      highlight.newInstance = () => HLJS({});
      module.exports = highlight;
      highlight.HighlightJS = highlight;
      highlight.default = highlight;
    }
  });

  // ../../node_modules/.pnpm/highlightjs-copy@1.0.5/node_modules/highlightjs-copy/index.js
  var require_highlightjs_copy = __commonJS({
    "../../node_modules/.pnpm/highlightjs-copy@1.0.5/node_modules/highlightjs-copy/index.js"(exports, module) {
      var CopyButtonPlugin2 = class {
        /**
         * Create a new CopyButtonPlugin class instance
         * @param {Object} [options] - Functions that will be called when a copy event fires
         * @param {CopyCallback} [options.callback]
         * @param {Hook} [options.hook]
         * @param {String} [options.lang] Defaults to the document body's lang attribute and falls back to "en"
         */
        constructor(options = {}) {
          self.hook = options.hook;
          self.callback = options.callback;
          self.lang = options.lang || document.documentElement.lang || "en";
        }
        "after:highlightElement"({ el, text }) {
          let button = Object.assign(document.createElement("button"), {
            innerHTML: locales[lang]?.[0] || "Copy",
            className: "hljs-copy-button"
          });
          button.dataset.copied = false;
          el.parentElement.classList.add("hljs-copy-wrapper");
          el.parentElement.appendChild(button);
          el.parentElement.style.setProperty(
            "--hljs-theme-background",
            window.getComputedStyle(el).backgroundColor
          );
          button.onclick = function() {
            if (!navigator.clipboard)
              return;
            let newText = text;
            if (hook && typeof hook === "function") {
              newText = hook(text, el) || text;
            }
            navigator.clipboard.writeText(newText).then(function() {
              button.innerHTML = locales[lang]?.[1] || "Copied!";
              button.dataset.copied = true;
              let alert = Object.assign(document.createElement("div"), {
                role: "status",
                className: "hljs-copy-alert",
                innerHTML: locales[lang]?.[2] || "Copied to clipboard"
              });
              el.parentElement.appendChild(alert);
              setTimeout(() => {
                button.innerHTML = locales[lang]?.[0] || "Copy";
                button.dataset.copied = false;
                el.parentElement.removeChild(alert);
                alert = null;
              }, 2e3);
            }).then(function() {
              if (typeof callback === "function")
                return callback(newText, el);
            });
          };
        }
      };
      if (typeof module != "undefined") {
        module.exports = CopyButtonPlugin2;
      }
      var locales = {
        en: ["Copy", "Copied!", "Copied to clipboard"],
        es: ["Copiar", "\xA1Copiado!", "Copiado al portapapeles"],
        fr: ["Copier", "Copi\xE9 !", "Copi\xE9 dans le presse-papier"],
        de: ["Kopieren", "Kopiert!", "In die Zwischenablage kopiert"],
        ja: ["\u30B3\u30D4\u30FC", "\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\uFF01", "\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F"],
        ko: ["\uBCF5\uC0AC", "\uBCF5\uC0AC\uB428!", "\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB428"],
        ru: ["\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C", "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E!", "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430"],
        zh: ["\u590D\u5236", "\u5DF2\u590D\u5236!", "\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"],
        "zh-tw": ["\u8907\u88FD", "\u5DF2\u8907\u88FD!", "\u5DF2\u8907\u88FD\u5230\u526A\u8CBC\u7C3F"]
      };
    }
  });

  // ../../node_modules/.pnpm/@ungap+custom-elements@1.3.0/node_modules/@ungap/custom-elements/index.js
  (function() {
    "use strict";
    var attributesObserver = function(whenDefined2, MutationObserver2) {
      var attributeChanged = function attributeChanged2(records) {
        for (var i = 0, length = records.length; i < length; i++)
          dispatch(records[i]);
      };
      var dispatch = function dispatch2(_ref2) {
        var target = _ref2.target, attributeName = _ref2.attributeName, oldValue = _ref2.oldValue;
        target.attributeChangedCallback(attributeName, oldValue, target.getAttribute(attributeName));
      };
      return function(target, is2) {
        var attributeFilter = target.constructor.observedAttributes;
        if (attributeFilter) {
          whenDefined2(is2).then(function() {
            new MutationObserver2(attributeChanged).observe(target, {
              attributes: true,
              attributeOldValue: true,
              attributeFilter
            });
            for (var i = 0, length = attributeFilter.length; i < length; i++) {
              if (target.hasAttribute(attributeFilter[i]))
                dispatch({
                  target,
                  attributeName: attributeFilter[i],
                  oldValue: null
                });
            }
          });
        }
        return target;
      };
    };
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          var F = function() {
          };
          return {
            s: F,
            n: function() {
              if (i >= o.length)
                return {
                  done: true
                };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function(e) {
              throw e;
            },
            f: F
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return {
        s: function() {
          it = it.call(o);
        },
        n: function() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function(e) {
          didErr = true;
          err = e;
        },
        f: function() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err;
          }
        }
      };
    }
    var TRUE = true, FALSE = false, QSA$1 = "querySelectorAll";
    var notify = function notify2(callback2) {
      var root = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document;
      var MO = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : MutationObserver;
      var query2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ["*"];
      var loop = function loop2(nodes, selectors, added, removed, connected, pass) {
        var _iterator = _createForOfIteratorHelper(nodes), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var node = _step.value;
            if (pass || QSA$1 in node) {
              if (connected) {
                if (!added.has(node)) {
                  added.add(node);
                  removed["delete"](node);
                  callback2(node, connected);
                }
              } else if (!removed.has(node)) {
                removed.add(node);
                added["delete"](node);
                callback2(node, connected);
              }
              if (!pass)
                loop2(node[QSA$1](selectors), selectors, added, removed, connected, TRUE);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      };
      var mo = new MO(function(records) {
        if (query2.length) {
          var selectors = query2.join(",");
          var added = /* @__PURE__ */ new Set(), removed = /* @__PURE__ */ new Set();
          var _iterator2 = _createForOfIteratorHelper(records), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var _step2$value = _step2.value, addedNodes = _step2$value.addedNodes, removedNodes = _step2$value.removedNodes;
              loop(removedNodes, selectors, added, removed, FALSE, FALSE);
              loop(addedNodes, selectors, added, removed, TRUE, FALSE);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      });
      var observe = mo.observe;
      (mo.observe = function(node) {
        return observe.call(mo, node, {
          subtree: TRUE,
          childList: TRUE
        });
      })(root);
      return mo;
    };
    var QSA = "querySelectorAll";
    var _self$1 = self, document$2 = _self$1.document, Element$1 = _self$1.Element, MutationObserver$2 = _self$1.MutationObserver, Set$2 = _self$1.Set, WeakMap$1 = _self$1.WeakMap;
    var elements = function elements2(element) {
      return QSA in element;
    };
    var filter = [].filter;
    var qsaObserver = function(options) {
      var live = new WeakMap$1();
      var drop = function drop2(elements2) {
        for (var i = 0, length = elements2.length; i < length; i++)
          live["delete"](elements2[i]);
      };
      var flush = function flush2() {
        var records = observer.takeRecords();
        for (var i = 0, length = records.length; i < length; i++) {
          parse2(filter.call(records[i].removedNodes, elements), false);
          parse2(filter.call(records[i].addedNodes, elements), true);
        }
      };
      var matches = function matches2(element) {
        return element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
      };
      var notifier = function notifier2(element, connected) {
        var selectors;
        if (connected) {
          for (var q, m = matches(element), i = 0, length = query2.length; i < length; i++) {
            if (m.call(element, q = query2[i])) {
              if (!live.has(element))
                live.set(element, new Set$2());
              selectors = live.get(element);
              if (!selectors.has(q)) {
                selectors.add(q);
                options.handle(element, connected, q);
              }
            }
          }
        } else if (live.has(element)) {
          selectors = live.get(element);
          live["delete"](element);
          selectors.forEach(function(q2) {
            options.handle(element, connected, q2);
          });
        }
      };
      var parse2 = function parse3(elements2) {
        var connected = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        for (var i = 0, length = elements2.length; i < length; i++)
          notifier(elements2[i], connected);
      };
      var query2 = options.query;
      var root = options.root || document$2;
      var observer = notify(notifier, root, MutationObserver$2, query2);
      var attachShadow2 = Element$1.prototype.attachShadow;
      if (attachShadow2)
        Element$1.prototype.attachShadow = function(init) {
          var shadowRoot = attachShadow2.call(this, init);
          observer.observe(shadowRoot);
          return shadowRoot;
        };
      if (query2.length)
        parse2(root[QSA](query2));
      return {
        drop,
        flush,
        observer,
        parse: parse2
      };
    };
    var _self = self, document$1 = _self.document, Map2 = _self.Map, MutationObserver$1 = _self.MutationObserver, Object$1 = _self.Object, Set$1 = _self.Set, WeakMap = _self.WeakMap, Element = _self.Element, HTMLElement2 = _self.HTMLElement, Node = _self.Node, Error2 = _self.Error, TypeError$1 = _self.TypeError, Reflect2 = _self.Reflect;
    var defineProperty = Object$1.defineProperty, keys = Object$1.keys, getOwnPropertyNames = Object$1.getOwnPropertyNames, setPrototypeOf = Object$1.setPrototypeOf;
    var legacy = !self.customElements;
    var expando = function expando2(element) {
      var key = keys(element);
      var value = [];
      var ignore = new Set$1();
      var length = key.length;
      for (var i = 0; i < length; i++) {
        value[i] = element[key[i]];
        try {
          delete element[key[i]];
        } catch (SafariTP) {
          ignore.add(i);
        }
      }
      return function() {
        for (var _i = 0; _i < length; _i++)
          ignore.has(_i) || (element[key[_i]] = value[_i]);
      };
    };
    if (legacy) {
      var HTMLBuiltIn = function HTMLBuiltIn2() {
        var constructor = this.constructor;
        if (!classes.has(constructor))
          throw new TypeError$1("Illegal constructor");
        var is2 = classes.get(constructor);
        if (override)
          return augment(override, is2);
        var element = createElement.call(document$1, is2);
        return augment(setPrototypeOf(element, constructor.prototype), is2);
      };
      var createElement = document$1.createElement;
      var classes = new Map2();
      var defined = new Map2();
      var prototypes = new Map2();
      var registry = new Map2();
      var query = [];
      var handle = function handle2(element, connected, selector) {
        var proto = prototypes.get(selector);
        if (connected && !proto.isPrototypeOf(element)) {
          var redefine = expando(element);
          override = setPrototypeOf(element, proto);
          try {
            new proto.constructor();
          } finally {
            override = null;
            redefine();
          }
        }
        var method = "".concat(connected ? "" : "dis", "connectedCallback");
        if (method in proto)
          element[method]();
      };
      var _qsaObserver = qsaObserver({
        query,
        handle
      }), parse = _qsaObserver.parse;
      var override = null;
      var whenDefined = function whenDefined2(name) {
        if (!defined.has(name)) {
          var _, $ = new Promise(function($2) {
            _ = $2;
          });
          defined.set(name, {
            $,
            _
          });
        }
        return defined.get(name).$;
      };
      var augment = attributesObserver(whenDefined, MutationObserver$1);
      self.customElements = {
        define: function define2(is2, Class) {
          if (registry.has(is2))
            throw new Error2('the name "'.concat(is2, '" has already been used with this registry'));
          classes.set(Class, is2);
          prototypes.set(is2, Class.prototype);
          registry.set(is2, Class);
          query.push(is2);
          whenDefined(is2).then(function() {
            parse(document$1.querySelectorAll(is2));
          });
          defined.get(is2)._(Class);
        },
        get: function get2(is2) {
          return registry.get(is2);
        },
        whenDefined
      };
      defineProperty(HTMLBuiltIn.prototype = HTMLElement2.prototype, "constructor", {
        value: HTMLBuiltIn
      });
      self.HTMLElement = HTMLBuiltIn;
      document$1.createElement = function(name, options) {
        var is2 = options && options.is;
        var Class = is2 ? registry.get(is2) : registry.get(name);
        return Class ? new Class() : createElement.call(document$1, name);
      };
      if (!("isConnected" in Node.prototype))
        defineProperty(Node.prototype, "isConnected", {
          configurable: true,
          get: function get2() {
            return !(this.ownerDocument.compareDocumentPosition(this) & this.DOCUMENT_POSITION_DISCONNECTED);
          }
        });
    } else {
      legacy = !self.customElements.get("extends-br");
      if (legacy) {
        try {
          var BR = function BR2() {
            return self.Reflect.construct(HTMLBRElement, [], BR2);
          };
          BR.prototype = HTMLLIElement.prototype;
          var is = "extends-br";
          self.customElements.define("extends-br", BR, {
            "extends": "br"
          });
          legacy = document$1.createElement("br", {
            is
          }).outerHTML.indexOf(is) < 0;
          var _self$customElements = self.customElements, get = _self$customElements.get, _whenDefined = _self$customElements.whenDefined;
          self.customElements.whenDefined = function(is2) {
            var _this = this;
            return _whenDefined.call(this, is2).then(function(Class) {
              return Class || get.call(_this, is2);
            });
          };
        } catch (o_O) {
        }
      }
    }
    if (legacy) {
      var _parseShadow = function _parseShadow2(element) {
        var root = shadowRoots.get(element);
        _parse(root.querySelectorAll(this), element.isConnected);
      };
      var customElements2 = self.customElements;
      var _createElement = document$1.createElement;
      var define = customElements2.define, _get = customElements2.get, upgrade = customElements2.upgrade;
      var _ref = Reflect2 || {
        construct: function construct2(HTMLElement3) {
          return HTMLElement3.call(this);
        }
      }, construct = _ref.construct;
      var shadowRoots = new WeakMap();
      var shadows = new Set$1();
      var _classes = new Map2();
      var _defined = new Map2();
      var _prototypes = new Map2();
      var _registry = new Map2();
      var shadowed = [];
      var _query = [];
      var getCE = function getCE2(is2) {
        return _registry.get(is2) || _get.call(customElements2, is2);
      };
      var _handle = function _handle2(element, connected, selector) {
        var proto = _prototypes.get(selector);
        if (connected && !proto.isPrototypeOf(element)) {
          var redefine = expando(element);
          _override = setPrototypeOf(element, proto);
          try {
            new proto.constructor();
          } finally {
            _override = null;
            redefine();
          }
        }
        var method = "".concat(connected ? "" : "dis", "connectedCallback");
        if (method in proto)
          element[method]();
      };
      var _qsaObserver2 = qsaObserver({
        query: _query,
        handle: _handle
      }), _parse = _qsaObserver2.parse;
      var _qsaObserver3 = qsaObserver({
        query: shadowed,
        handle: function handle2(element, connected) {
          if (shadowRoots.has(element)) {
            if (connected)
              shadows.add(element);
            else
              shadows["delete"](element);
            if (_query.length)
              _parseShadow.call(_query, element);
          }
        }
      }), parseShadowed = _qsaObserver3.parse;
      var attachShadow = Element.prototype.attachShadow;
      if (attachShadow)
        Element.prototype.attachShadow = function(init) {
          var root = attachShadow.call(this, init);
          shadowRoots.set(this, root);
          return root;
        };
      var _whenDefined2 = function _whenDefined22(name) {
        if (!_defined.has(name)) {
          var _, $ = new Promise(function($2) {
            _ = $2;
          });
          _defined.set(name, {
            $,
            _
          });
        }
        return _defined.get(name).$;
      };
      var _augment = attributesObserver(_whenDefined2, MutationObserver$1);
      var _override = null;
      getOwnPropertyNames(self).filter(function(k) {
        return /^HTML.*Element$/.test(k);
      }).forEach(function(k) {
        var HTMLElement3 = self[k];
        function HTMLBuiltIn2() {
          var constructor = this.constructor;
          if (!_classes.has(constructor))
            throw new TypeError$1("Illegal constructor");
          var _classes$get = _classes.get(constructor), is2 = _classes$get.is, tag = _classes$get.tag;
          if (is2) {
            if (_override)
              return _augment(_override, is2);
            var element = _createElement.call(document$1, tag);
            element.setAttribute("is", is2);
            return _augment(setPrototypeOf(element, constructor.prototype), is2);
          } else
            return construct.call(this, HTMLElement3, [], constructor);
        }
        defineProperty(HTMLBuiltIn2.prototype = HTMLElement3.prototype, "constructor", {
          value: HTMLBuiltIn2
        });
        defineProperty(self, k, {
          value: HTMLBuiltIn2
        });
      });
      document$1.createElement = function(name, options) {
        var is2 = options && options.is;
        if (is2) {
          var Class = _registry.get(is2);
          if (Class && _classes.get(Class).tag === name)
            return new Class();
        }
        var element = _createElement.call(document$1, name);
        if (is2)
          element.setAttribute("is", is2);
        return element;
      };
      customElements2.get = getCE;
      customElements2.whenDefined = _whenDefined2;
      customElements2.upgrade = function(element) {
        var is2 = element.getAttribute("is");
        if (is2) {
          var _constructor = _registry.get(is2);
          if (_constructor) {
            _augment(setPrototypeOf(element, _constructor.prototype), is2);
            return;
          }
        }
        upgrade.call(customElements2, element);
      };
      customElements2.define = function(is2, Class, options) {
        if (getCE(is2))
          throw new Error2("'".concat(is2, "' has already been defined as a custom element"));
        var selector;
        var tag = options && options["extends"];
        _classes.set(Class, tag ? {
          is: is2,
          tag
        } : {
          is: "",
          tag: is2
        });
        if (tag) {
          selector = "".concat(tag, '[is="').concat(is2, '"]');
          _prototypes.set(selector, Class.prototype);
          _registry.set(is2, Class);
          _query.push(selector);
        } else {
          define.apply(customElements2, arguments);
          shadowed.push(selector = is2);
        }
        _whenDefined2(is2).then(function() {
          if (tag) {
            _parse(document$1.querySelectorAll(selector));
            shadows.forEach(_parseShadow, [selector]);
          } else
            parseShadowed(document$1.querySelectorAll(selector));
        });
        _defined.get(is2)._(Class);
      };
    }
  })();

  // ../../packages/utilities/src/js/toggle.js
  var toggle_default = (controller) => {
    const controls = document.getElementById(controller.getAttribute("aria-controls"));
    const isExpanded = controller.getAttribute("aria-expanded").toLowerCase() === "true";
    controller.setAttribute("aria-expanded", !isExpanded);
    isExpanded ? controls.setAttribute("hidden", "") : controls.removeAttribute("hidden");
    return controller;
  };

  // ../../packages/utilities/src/js/chunk-array.js
  var chunk_array_default = (array, chunkSize) => {
    const arr = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      arr.push(chunk);
    }
    return arr;
  };

  // ../../packages/utilities/src/js/is-alternating.js
  var is_alternating_default = (n) => n.every((el, i) => {
    return n[i & 1].nodeName === el.nodeName;
  });

  // ../../packages/utilities/src/js/wrap-element.js
  var wrap_element_default = (el, newTag) => {
    const parent = el.parentNode;
    const elIndex = [...parent.children].indexOf(el);
    const ce = document.createElement(newTag);
    ce.appendChild(el);
    parent.insertBefore(ce, parent.childNodes[elIndex + 1]);
  };

  // ../../packages/utilities/src/js/chunk.js
  var chunkr = (arr, cond) => {
    const res = [];
    let chunk = [];
    (function chunky(ns) {
      if (Array.isArray(ns) && !ns.length) {
        res.push(chunk);
        return;
      }
      if (cond(ns[0]) && chunk.length > 0) {
        res.push(chunk);
        chunk = [];
      }
      chunk.push(ns.shift());
      return chunky(ns);
    })(arr);
    return res;
  };

  // ../../packages/components/button/src/js/toggle-button.js
  var ToggleButton = class extends HTMLButtonElement {
    connectedCallback() {
      if (!this.hasAttribute("aria-controls")) {
        console.error(
          `ToggleButton: "aria-controls" must be set to the
                          ID of the element you are toggling`
        );
        return;
      }
      if (!this.hasAttribute("aria-expanded")) {
        console.error(
          `ToggleButton: "aria-expanded" must be set to the
               toggled elements initial visibility, either
               "true" or "false"`
        );
        return;
      }
      this.addEventListener("click", this);
    }
    handleEvent(e) {
      this["on" + e.type](e);
    }
    onclick(e) {
      toggle_default(this);
    }
  };

  // ../../packages/components/button/src/js/index.js
  if (!customElements.get("nyc-toggle-button")) {
    window.customElements.define("nyc-toggle-button", ToggleButton, { extends: "button" });
  }

  // ../../packages/components/accordion/src/accordion.js
  var Accordion = class {
    constructor(element) {
      this.headingTagName = null;
      this.element = element;
      this.init();
    }
    init() {
      if (!this.element.firstChild)
        return;
      this.groups = this.element.querySelectorAll(":scope > .accordion__group");
      if (this.groups.length > 0) {
        this.groups.forEach(this.formatGroup.bind(this));
      } else {
        const nodes = this.removeEmptyTextNodes(this.element.childNodes);
        if (this.isHeading(nodes[0])) {
          this.headingTagName = nodes[0].nodeName;
          const groupsArr = chunkr(nodes, (n) => n.nodeName === this.headingTagName);
          const groups = groupsArr.map((group) => {
            const frag = new DocumentFragment();
            group.forEach((el) => frag.appendChild(el));
            const groupEl = this.createGroup(frag);
            return groupEl;
          });
          groups.forEach(this.formatGroup.bind(this));
          this.element.append(...groups);
        } else if (is_alternating_default(nodes)) {
          const groups = chunk_array_default(nodes, 2);
          const frags = groups.map((group) => {
            const frag = new DocumentFragment();
            group.forEach((el) => frag.appendChild(el));
            const groupEl = this.createGroup(frag);
            return groupEl;
          });
          frags.forEach(this.formatGroup.bind(this));
          this.element.append(...frags);
        } else {
          const group = this.createGroup(this.element);
          this.element.appendChild(group);
          this.formatGroup(group);
        }
      }
    }
    createGroup(parent) {
      const groupEl = document.createElement("article");
      groupEl.classList.add("accordion__group");
      const fragment = new DocumentFragment();
      while (parent.hasChildNodes()) {
        fragment.appendChild(parent.firstChild);
      }
      groupEl.appendChild(fragment);
      return groupEl;
    }
    formatGroup(group) {
      const nodes = this.removeEmptyTextNodes(group.childNodes);
      const firstChild = nodes[0];
      const siblings = nodes.slice(1);
      const hasHeading = this.isHeading(firstChild);
      const hasPanel = siblings[0].hasAttribute("hidden") || siblings[0].classList.contains("accordion__body");
      group.setAttribute("data-panel-id", `panel-${this.generateId()}`);
      if (hasHeading) {
        this.formatHeading(firstChild);
      } else {
        const heading = this.createHeading(firstChild);
        group.prepend(heading);
        this.formatHeading(heading);
      }
      if (hasPanel) {
        this.formatPanel(siblings[0]);
      } else {
        const panel = this.createPanel(siblings);
        group.append(panel);
        this.formatPanel(panel);
      }
    }
    createHeading(child) {
      const closestHeading = this.findClosestHeading(this.element);
      if (closestHeading) {
        const headingLevel = parseInt(closestHeading.tagName.split("H")[1]);
        this.headingTagName = `h${headingLevel + 1}`;
      } else {
        this.headingTagName = "h4";
      }
      const headingEl = document.createElement(this.headingTagName);
      headingEl.appendChild(child);
      return headingEl;
    }
    formatHeading(heading) {
      const firstChild = this.removeEmptyTextNodes(heading.childNodes)[0];
      let headingLabel;
      if (firstChild.nodeName !== "BUTTON") {
        const button = this.createButton(
          firstChild,
          heading.parentNode.dataset.panelId
        );
        headingLabel = firstChild.nodeName !== "#text" ? firstChild.innerText : firstChild.data;
        heading.appendChild(button);
      } else {
        headingLabel = firstChild.innerText;
      }
      let headingId = `${headingLabel.trim().replace(/[^\w\s]/gi, "").replace(/\s+/g, "-").toLowerCase()}-heading`;
      if (document.getElementById(headingId)) {
        headingId = `${headingId}-${this.generateId()}`;
      }
      heading.setAttribute("id", headingId);
    }
    createPanel(children) {
      const panel = document.createElement("div");
      panel.append(...children);
      return panel;
    }
    formatPanel(panel) {
      panel.setAttribute("id", panel.parentNode.dataset.panelId);
      panel.setAttribute("aria-labelledby", panel.parentNode.children[0].id);
      panel.classList.add("flow");
      panel.setAttribute("hidden", "");
    }
    createButton(label, panelId) {
      const labelEl = document.createElement("span");
      labelEl.append(label);
      const button = document.createElement("button", { is: "nyc-toggle-button" });
      button.setAttribute("aria-controls", panelId);
      button.setAttribute("aria-expanded", false);
      button.innerHTML = "<i class='i-ri:arrow-down-s-line' aria-hidden='true'></i>";
      button.prepend(labelEl);
      return button;
    }
    removeEmptyTextNodes(nodelist) {
      return Array.from(nodelist).filter((node) => node.nodeName !== "#text" || node.data.trim().length > 0 || false);
    }
    generateId() {
      return Math.floor(Math.random() * Date.now()).toString(16);
    }
    isHeading(element) {
      return element.tagName && element.tagName.match(/^H\d$/i);
    }
    findClosestHeading(element) {
      if (!element.parentElement) {
        return false;
      }
      if (this.isHeading(element)) {
        return element;
      }
      let ancestor = element.parentElement;
      while (ancestor !== null) {
        const siblings = Array.from(ancestor.children);
        const headingTags = siblings.filter(
          (sibling) => this.isHeading(sibling)
        );
        if (headingTags.length > 0) {
          const index = siblings.indexOf(element);
          if (index !== -1) {
            const closestHeading = headingTags.reduce((closest, heading) => {
              const headingIndex = siblings.indexOf(heading);
              const distance = Math.abs(headingIndex - index);
              if (closest === null || distance < closest.distance) {
                return { heading, distance };
              }
              return closest;
            }, null);
            if (closestHeading !== null) {
              return closestHeading.heading;
            }
          }
        }
        ancestor = ancestor.parentElement;
      }
      return null;
    }
  };

  // ../../packages/components/accordion/src/nyc-accordion.js
  var NYCAccordion = class extends HTMLElement {
    connectedCallback() {
      if (!this.firstChild)
        return;
      this.accordion = new Accordion(this);
    }
  };
  customElements.define("nyc-accordion", NYCAccordion);

  // ../../packages/components/accordion/src/index.js
  try {
    Array.from(
      document.querySelectorAll("[data-is=nyc-accordion]")
    ).map((el) => new Accordion(el));
  } catch (e) {
    console.error(`Could not initialize Accordions: ${e}`);
  }

  // ../../packages/components/tab-group/src/tab-group.js
  var NYCTabGroup = class extends HTMLElement {
    connectedCallback() {
      try {
        this.tablist = this.querySelector("[data-tab-list]");
        this.tabs = this.tablist.querySelectorAll("a");
        this.panels = this.querySelectorAll("[data-tab-panels] > *");
      } catch (err) {
        console.error(`NYCTabGroup: ${err}`);
        return;
      }
      this.tablist.setAttribute("role", "tablist");
      this.setupTabs();
      this.setupPanels();
      this.tabs[0].removeAttribute("tabindex");
      this.tabs[0].setAttribute("aria-selected", "true");
      this.panels[0].hidden = false;
    }
    // The tab switching function
    switchTab(oldTab, newTab) {
      newTab.focus();
      newTab.removeAttribute("tabindex");
      newTab.setAttribute("aria-selected", "true");
      oldTab.removeAttribute("aria-selected");
      oldTab.setAttribute("tabindex", "-1");
      const index = Array.prototype.indexOf.call(this.tabs, newTab);
      const oldIndex = Array.prototype.indexOf.call(this.tabs, oldTab);
      this.panels[oldIndex].hidden = true;
      this.panels[index].hidden = false;
    }
    setupTabs() {
      Array.prototype.forEach.call(this.tabs, (tab, i) => {
        tab.setAttribute("role", "tab");
        tab.setAttribute("id", "tab" + (i + 1));
        tab.setAttribute("tabindex", "-1");
        tab.parentNode.setAttribute("role", "presentation");
        tab.addEventListener("click", (e) => {
          e.preventDefault();
          const currentTab = this.tablist.querySelector("[aria-selected]");
          if (e.currentTarget !== currentTab) {
            this.switchTab(currentTab, e.currentTarget);
          }
        });
        tab.addEventListener("keydown", (e) => {
          const index = Array.prototype.indexOf.call(this.tabs, e.currentTarget);
          const dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? "down" : null;
          if (dir !== null) {
            e.preventDefault();
            if (dir === "down") {
              this.panels[i].focus();
            } else if (this.tabs[dir]) {
              this.switchTab(e.currentTarget, this.tabs[dir]);
            } else {
              return void 0;
            }
          }
        });
      });
    }
    setupPanels() {
      Array.prototype.forEach.call(this.panels, (panel, i) => {
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("tabindex", "-1");
        panel.setAttribute("aria-labelledby", this.tabs[i].id);
        panel.hidden = true;
      });
    }
  };
  customElements.define("nyc-tab-group", NYCTabGroup);

  // ../../packages/components/tab-group/src/index.js
  try {
    Array.from(
      document.querySelectorAll("[data-is=nyc-tab-group]")
    ).map((el) => wrap_element_default(el, "nyc-tab-group"));
  } catch (e) {
    console.error(`Could not initialize TabGroup: ${e}`);
  }

  // ../../node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/core.js
  var import_core = __toESM(require_core(), 1);
  var core_default = import_core.default;

  // ../../node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/javascript.js
  var IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
  var KEYWORDS = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends"
  ];
  var LITERALS = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ];
  var TYPES = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ];
  var ERROR_TYPES = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ];
  var BUILT_IN_GLOBALS = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ];
  var BUILT_IN_VARIABLES = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global"
    // Node.js
  ];
  var BUILT_INS = [].concat(
    BUILT_IN_GLOBALS,
    TYPES,
    ERROR_TYPES
  );
  function javascript(hljs) {
    const regex = hljs.regex;
    const hasClosingTag = (match, { after }) => {
      const tag = "</" + match[0].slice(1);
      const pos = match.input.indexOf(tag, after);
      return pos !== -1;
    };
    const IDENT_RE$1 = IDENT_RE;
    const FRAGMENT = {
      begin: "<>",
      end: "</>"
    };
    const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
    const XML_TAG = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (match, response) => {
        const afterMatchIndex = match[0].length + match.index;
        const nextChar = match.input[afterMatchIndex];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          nextChar === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          nextChar === ","
        ) {
          response.ignoreMatch();
          return;
        }
        if (nextChar === ">") {
          if (!hasClosingTag(match, { after: afterMatchIndex })) {
            response.ignoreMatch();
          }
        }
        let m;
        const afterMatch = match.input.substring(afterMatchIndex);
        if (m = afterMatch.match(/^\s*=/)) {
          response.ignoreMatch();
          return;
        }
        if (m = afterMatch.match(/^\s+extends\s+/)) {
          if (m.index === 0) {
            response.ignoreMatch();
            return;
          }
        }
      }
    };
    const KEYWORDS$1 = {
      $pattern: IDENT_RE,
      keyword: KEYWORDS,
      literal: LITERALS,
      built_in: BUILT_INS,
      "variable.language": BUILT_IN_VARIABLES
    };
    const decimalDigits = "[0-9](_?[0-9])*";
    const frac = `\\.(${decimalDigits})`;
    const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
    const NUMBER = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
        { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
        // DecimalBigIntegerLiteral
        { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    };
    const SUBST = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: KEYWORDS$1,
      contains: []
      // defined later
    };
    const HTML_TEMPLATE = {
      begin: "html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ],
        subLanguage: "xml"
      }
    };
    const CSS_TEMPLATE = {
      begin: "css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ],
        subLanguage: "css"
      }
    };
    const GRAPHQL_TEMPLATE = {
      begin: "gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ],
        subLanguage: "graphql"
      }
    };
    const TEMPLATE_STRING = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ]
    };
    const JSDOC_COMMENT = hljs.COMMENT(
      /\/\*\*(?!\/)/,
      "\\*/",
      {
        relevance: 0,
        contains: [
          {
            begin: "(?=@[A-Za-z]+)",
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              },
              {
                className: "type",
                begin: "\\{",
                end: "\\}",
                excludeEnd: true,
                excludeBegin: true,
                relevance: 0
              },
              {
                className: "variable",
                begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
                endsParent: true,
                relevance: 0
              },
              // eat spaces (not newlines) so we can find
              // types or variables
              {
                begin: /(?=[^\n])\s/,
                relevance: 0
              }
            ]
          }
        ]
      }
    );
    const COMMENT = {
      className: "comment",
      variants: [
        JSDOC_COMMENT,
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.C_LINE_COMMENT_MODE
      ]
    };
    const SUBST_INTERNALS = [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    SUBST.contains = SUBST_INTERNALS.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: KEYWORDS$1,
      contains: [
        "self"
      ].concat(SUBST_INTERNALS)
    });
    const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
    const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
      // eat recursive parens in sub expressions
      {
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS$1,
        contains: ["self"].concat(SUBST_AND_COMMENTS)
      }
    ]);
    const PARAMS = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      excludeBegin: true,
      excludeEnd: true,
      keywords: KEYWORDS$1,
      contains: PARAMS_CONTAINS
    };
    const CLASS_OR_EXTENDS = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            IDENT_RE$1,
            /\s+/,
            /extends/,
            /\s+/,
            regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            IDENT_RE$1
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    };
    const CLASS_REFERENCE = {
      relevance: 0,
      match: regex.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...TYPES,
          ...ERROR_TYPES
        ]
      }
    };
    const USE_STRICT = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    };
    const FUNCTION_DEFINITION = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            IDENT_RE$1,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [PARAMS],
      illegal: /%/
    };
    const UPPER_CASE_CONSTANT = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function noneOf(list) {
      return regex.concat("(?!", list.join("|"), ")");
    }
    const FUNCTION_CALL = {
      match: regex.concat(
        /\b/,
        noneOf([
          ...BUILT_IN_GLOBALS,
          "super",
          "import"
        ]),
        IDENT_RE$1,
        regex.lookahead(/\(/)
      ),
      className: "title.function",
      relevance: 0
    };
    const PROPERTY_ACCESS = {
      begin: regex.concat(/\./, regex.lookahead(
        regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/)
      )),
      end: IDENT_RE$1,
      excludeBegin: true,
      keywords: "prototype",
      className: "property",
      relevance: 0
    };
    const GETTER_OR_SETTER = {
      match: [
        /get|set/,
        /\s+/,
        IDENT_RE$1,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        PARAMS
      ]
    };
    const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
    const FUNCTION_VARIABLE = {
      match: [
        /const|var|let/,
        /\s+/,
        IDENT_RE$1,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        regex.lookahead(FUNC_LEAD_IN_RE)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        PARAMS
      ]
    };
    return {
      name: "JavaScript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: KEYWORDS$1,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
      illegal: /#(?![$_A-z])/,
      contains: [
        hljs.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        USE_STRICT,
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        HTML_TEMPLATE,
        CSS_TEMPLATE,
        GRAPHQL_TEMPLATE,
        TEMPLATE_STRING,
        COMMENT,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        NUMBER,
        CLASS_REFERENCE,
        {
          className: "attr",
          begin: IDENT_RE$1 + regex.lookahead(":"),
          relevance: 0
        },
        FUNCTION_VARIABLE,
        {
          // "value" container
          begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            COMMENT,
            hljs.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: FUNC_LEAD_IN_RE,
              returnBegin: true,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: hljs.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: true
                    },
                    {
                      begin: /\(/,
                      end: /\)/,
                      excludeBegin: true,
                      excludeEnd: true,
                      keywords: KEYWORDS$1,
                      contains: PARAMS_CONTAINS
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: FRAGMENT.begin, end: FRAGMENT.end },
                { match: XML_SELF_CLOSING },
                {
                  begin: XML_TAG.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": XML_TAG.isTrulyOpeningTag,
                  end: XML_TAG.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: XML_TAG.begin,
                  end: XML_TAG.end,
                  skip: true,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        FUNCTION_DEFINITION,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: true,
          label: "func.def",
          contains: [
            PARAMS,
            hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        PROPERTY_ACCESS,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + IDENT_RE$1,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [PARAMS]
        },
        FUNCTION_CALL,
        UPPER_CASE_CONSTANT,
        CLASS_OR_EXTENDS,
        GETTER_OR_SETTER,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }

  // ../../node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/css.js
  var MODES = (hljs) => {
    return {
      IMPORTANT: {
        scope: "meta",
        begin: "!important"
      },
      BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
      HEXCOLOR: {
        scope: "number",
        begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
      },
      FUNCTION_DISPATCH: {
        className: "built_in",
        begin: /[\w-]+(?=\()/
      },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: "selector-attr",
        begin: /\[/,
        end: /\]/,
        illegal: "$",
        contains: [
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE
        ]
      },
      CSS_NUMBER_MODE: {
        scope: "number",
        begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0
      },
      CSS_VARIABLE: {
        className: "attr",
        begin: /--[A-Za-z_][A-Za-z0-9_-]*/
      }
    };
  };
  var TAGS = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "p",
    "q",
    "quote",
    "samp",
    "section",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ];
  var MEDIA_FEATURES = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ];
  var PSEUDO_CLASSES = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ];
  var PSEUDO_ELEMENTS = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ];
  var ATTRIBUTES = [
    "align-content",
    "align-items",
    "align-self",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "empty-cells",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "isolation",
    "justify-content",
    "left",
    "letter-spacing",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "row-gap",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-style",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "unicode-bidi",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "z-index"
    // reverse makes sure longer attributes `font-weight` are matched fully
    // instead of getting false positives on say `font`
  ].reverse();
  function css(hljs) {
    const regex = hljs.regex;
    const modes = MODES(hljs);
    const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
    const AT_MODIFIERS = "and or not only";
    const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/;
    const IDENT_RE2 = "[a-zA-Z-][a-zA-Z0-9_-]*";
    const STRINGS = [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ];
    return {
      name: "CSS",
      case_insensitive: true,
      illegal: /[=|'\$]/,
      keywords: { keyframePosition: "from to" },
      classNameAliases: {
        // for visual continuity with `tag {}` and because we
        // don't have a great class for this?
        keyframePosition: "selector-tag"
      },
      contains: [
        modes.BLOCK_COMMENT,
        VENDOR_PREFIX,
        // to recognize keyframe 40% etc which are outside the scope of our
        // attribute value mode
        modes.CSS_NUMBER_MODE,
        {
          className: "selector-id",
          begin: /#[A-Za-z0-9_-]+/,
          relevance: 0
        },
        {
          className: "selector-class",
          begin: "\\." + IDENT_RE2,
          relevance: 0
        },
        modes.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          variants: [
            { begin: ":(" + PSEUDO_CLASSES.join("|") + ")" },
            { begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")" }
          ]
        },
        // we may actually need this (12/2020)
        // { // pseudo-selector params
        //   begin: /\(/,
        //   end: /\)/,
        //   contains: [ hljs.CSS_NUMBER_MODE ]
        // },
        modes.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
        },
        // attribute values
        {
          begin: /:/,
          end: /[;}{]/,
          contains: [
            modes.BLOCK_COMMENT,
            modes.HEXCOLOR,
            modes.IMPORTANT,
            modes.CSS_NUMBER_MODE,
            ...STRINGS,
            // needed to highlight these as strings and to avoid issues with
            // illegal characters that might be inside urls that would tigger the
            // languages illegal stack
            {
              begin: /(url|data-uri)\(/,
              end: /\)/,
              relevance: 0,
              // from keywords
              keywords: { built_in: "url data-uri" },
              contains: [
                ...STRINGS,
                {
                  className: "string",
                  // any character other than `)` as in `url()` will be the start
                  // of a string, which ends with `)` (from the parent mode)
                  begin: /[^)]/,
                  endsWithParent: true,
                  excludeEnd: true
                }
              ]
            },
            modes.FUNCTION_DISPATCH
          ]
        },
        {
          begin: regex.lookahead(/@/),
          end: "[{;]",
          relevance: 0,
          illegal: /:/,
          // break on Less variables @var: ...
          contains: [
            {
              className: "keyword",
              begin: AT_PROPERTY_RE
            },
            {
              begin: /\s/,
              endsWithParent: true,
              excludeEnd: true,
              relevance: 0,
              keywords: {
                $pattern: /[a-z-]+/,
                keyword: AT_MODIFIERS,
                attribute: MEDIA_FEATURES.join(" ")
              },
              contains: [
                {
                  begin: /[a-z-]+(?=:)/,
                  className: "attribute"
                },
                ...STRINGS,
                modes.CSS_NUMBER_MODE
              ]
            }
          ]
        },
        {
          className: "selector-tag",
          begin: "\\b(" + TAGS.join("|") + ")\\b"
        }
      ]
    };
  }

  // ../../node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/xml.js
  function xml(hljs) {
    const regex = hljs.regex;
    const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
    const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
    const XML_ENTITIES = {
      className: "symbol",
      begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
    };
    const XML_META_KEYWORDS = {
      begin: /\s/,
      contains: [
        {
          className: "keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }
      ]
    };
    const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
      begin: /\(/,
      end: /\)/
    });
    const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: "string" });
    const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" });
    const TAG_INTERNALS = {
      endsWithParent: true,
      illegal: /</,
      relevance: 0,
      contains: [
        {
          className: "attr",
          begin: XML_IDENT_RE,
          relevance: 0
        },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: "string",
              endsParent: true,
              variants: [
                {
                  begin: /"/,
                  end: /"/,
                  contains: [XML_ENTITIES]
                },
                {
                  begin: /'/,
                  end: /'/,
                  contains: [XML_ENTITIES]
                },
                { begin: /[^\s"'=<>`]+/ }
              ]
            }
          ]
        }
      ]
    };
    return {
      name: "HTML, XML",
      aliases: [
        "html",
        "xhtml",
        "rss",
        "atom",
        "xjb",
        "xsd",
        "xsl",
        "plist",
        "wsf",
        "svg"
      ],
      case_insensitive: true,
      unicodeRegex: true,
      contains: [
        {
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [
            XML_META_KEYWORDS,
            QUOTE_META_STRING_MODE,
            APOS_META_STRING_MODE,
            XML_META_PAR_KEYWORDS,
            {
              begin: /\[/,
              end: /\]/,
              contains: [
                {
                  className: "meta",
                  begin: /<![a-z]/,
                  end: />/,
                  contains: [
                    XML_META_KEYWORDS,
                    XML_META_PAR_KEYWORDS,
                    QUOTE_META_STRING_MODE,
                    APOS_META_STRING_MODE
                  ]
                }
              ]
            }
          ]
        },
        hljs.COMMENT(
          /<!--/,
          /-->/,
          { relevance: 10 }
        ),
        {
          begin: /<!\[CDATA\[/,
          end: /\]\]>/,
          relevance: 10
        },
        XML_ENTITIES,
        // xml processing instructions
        {
          className: "meta",
          end: /\?>/,
          variants: [
            {
              begin: /<\?xml/,
              relevance: 10,
              contains: [
                QUOTE_META_STRING_MODE
              ]
            },
            {
              begin: /<\?[a-z][a-z0-9]+/
            }
          ]
        },
        {
          className: "tag",
          /*
          The lookahead pattern (?=...) ensures that 'begin' only matches
          '<style' as a single word, followed by a whitespace or an
          ending bracket.
          */
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: { name: "style" },
          contains: [TAG_INTERNALS],
          starts: {
            end: /<\/style>/,
            returnEnd: true,
            subLanguage: [
              "css",
              "xml"
            ]
          }
        },
        {
          className: "tag",
          // See the comment in the <style tag about the lookahead pattern
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: { name: "script" },
          contains: [TAG_INTERNALS],
          starts: {
            end: /<\/script>/,
            returnEnd: true,
            subLanguage: [
              "javascript",
              "handlebars",
              "xml"
            ]
          }
        },
        // we need this for now for jSX
        {
          className: "tag",
          begin: /<>|<\/>/
        },
        // open tag
        {
          className: "tag",
          begin: regex.concat(
            /</,
            regex.lookahead(regex.concat(
              TAG_NAME_RE,
              // <tag/>
              // <tag>
              // <tag ...
              regex.either(/\/>/, />/, /\s/)
            ))
          ),
          end: /\/?>/,
          contains: [
            {
              className: "name",
              begin: TAG_NAME_RE,
              relevance: 0,
              starts: TAG_INTERNALS
            }
          ]
        },
        // close tag
        {
          className: "tag",
          begin: regex.concat(
            /<\//,
            regex.lookahead(regex.concat(
              TAG_NAME_RE,
              />/
            ))
          ),
          contains: [
            {
              className: "name",
              begin: TAG_NAME_RE,
              relevance: 0
            },
            {
              begin: />/,
              relevance: 0,
              endsParent: true
            }
          ]
        }
      ]
    };
  }

  // src/index.js
  var import_highlightjs_copy = __toESM(require_highlightjs_copy(), 1);
  core_default.registerLanguage("javascript", javascript);
  core_default.registerLanguage("css", css);
  core_default.registerLanguage("xml", xml);
  try {
    core_default.highlightAll();
    core_default.addPlugin(new import_highlightjs_copy.default());
  } catch (e) {
    console.log(e);
  }
})();
/*! Bundled license information:

@ungap/custom-elements/index.js:
  (*! (c) Andrea Giammarchi @webreflection ISC *)
  (*! (c) Andrea Giammarchi - ISC *)
*/
