System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "ba-git:*": "jspm_packages/ba-git/*"
  },

  map: {
    "ba-common-interface-js": "ba-git:ba-common-interface-js@1.0.5",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "es6-promise": "npm:es6-promise@3.1.2",
    "immutable": "npm:immutable@3.7.6",
    "normalizr": "npm:normalizr@2.0.0",
    "object-assign": "npm:object-assign@4.0.1",
    "react": "npm:react@0.14.7",
    "react-bootstrap": "npm:react-bootstrap@0.28.3",
    "react-dom": "npm:react-dom@0.14.7",
    "react-redux": "npm:react-redux@4.4.1",
    "react-router": "npm:react-router@2.0.1",
    "react-router-redux": "npm:react-router-redux@4.0.0",
    "redux": "npm:redux@3.3.1",
    "redux-form": "npm:redux-form@4.2.2",
    "redux-thunk": "npm:redux-thunk@2.0.1",
    "reselect": "npm:reselect@2.2.1",
    "url": "npm:url@0.11.0",
    "whatwg-fetch": "npm:whatwg-fetch@0.11.0",
    "ba-git:ba-common-interface-js@1.0.5": {
      "fetch": "npm:whatwg-fetch@0.11.0",
      "lodash": "npm:lodash@4.6.1",
      "object-assign": "npm:object-assign@4.0.1"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:es6-promise@3.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:history@2.0.1": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash-compat@3.10.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@4.6.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:normalizr@2.0.0": {
      "lodash": "npm:lodash@4.6.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@3.0.2": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:react-bootstrap@0.28.3": {
      "babel-runtime": "npm:babel-runtime@5.8.35",
      "classnames": "npm:classnames@2.2.3",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "invariant": "npm:invariant@2.2.1",
      "keycode": "npm:keycode@2.1.1",
      "lodash-compat": "npm:lodash-compat@3.10.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.7",
      "react-dom": "npm:react-dom@0.14.7",
      "react-overlays": "npm:react-overlays@0.6.0",
      "react-prop-types": "npm:react-prop-types@0.3.0",
      "uncontrollable": "npm:uncontrollable@3.2.1",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-dom@0.14.7": {
      "react": "npm:react@0.14.7"
    },
    "npm:react-lazy-cache@3.0.1": {
      "deep-equal": "npm:deep-equal@1.0.1"
    },
    "npm:react-overlays@0.6.0": {
      "classnames": "npm:classnames@2.2.3",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "react": "npm:react@0.14.7",
      "react-dom": "npm:react-dom@0.14.7",
      "react-prop-types": "npm:react-prop-types@0.2.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-prop-types@0.2.2": {
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-prop-types@0.3.0": {
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-redux@4.4.1": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.5",
      "invariant": "npm:invariant@2.2.1",
      "lodash": "npm:lodash@4.6.1",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.7",
      "redux": "npm:redux@3.3.1"
    },
    "npm:react-router@2.0.1": {
      "history": "npm:history@2.0.1",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react@0.14.7": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:redux-form@4.2.2": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.5",
      "is-promise": "npm:is-promise@2.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react-lazy-cache": "npm:react-lazy-cache@3.0.1",
      "react-redux": "npm:react-redux@4.4.1",
      "redux": "npm:redux@3.3.1"
    },
    "npm:redux@3.3.1": {
      "lodash": "npm:lodash@4.6.1",
      "lodash-es": "npm:lodash-es@4.6.1",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:uncontrollable@3.2.1": {
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.7"
    },
    "npm:url@0.11.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
