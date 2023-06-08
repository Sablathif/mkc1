"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEaaSComponent = exports.FEAAS_MODULE_SRC = exports.FEAAS_COMPONENT_RENDERING_NAME = void 0;
/* eslint-disable react/prop-types */
const react_1 = __importStar(require("react"));
const layout_1 = require("@sitecore-jss/sitecore-jss/layout");
exports.FEAAS_COMPONENT_RENDERING_NAME = 'FEaaSComponent';
exports.FEAAS_MODULE_SRC = 'https://feaasstatic.blob.core.windows.net/packages/clientside/latest/browser/index.esm.js';
const getDataFromFields = (fields) => {
    let data = {};
    data = Object.entries(fields).reduce((acc, [key]) => {
        acc[key] = (0, layout_1.getFieldValue)(fields, key);
        return acc;
    }, data);
    return data;
};
const FEaaSComponent = ({ params, fields }) => {
    if (!params ||
        !params.LibraryId ||
        !params.ComponentId ||
        !params.ComponentVersion ||
        !params.ComponentRevision ||
        !params.ComponentHostName) {
        // Missing FEaaS component required props
        return null;
    }
    // Load script asynchronously on the page once, only if FEAAS component is used
    (0, react_1.useEffect)(() => {
        var _a;
        (_a = window.FEAASLoading) !== null && _a !== void 0 ? _a : (window.FEAASLoading = new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = exports.FEAAS_MODULE_SRC;
            script.type = 'module';
            script.onload = resolve;
            document.head.appendChild(script);
        }));
    }, []);
    let data = '';
    if (params === null || params === void 0 ? void 0 : params.ComponentDataOverride) {
        // Use override data if provided
        data = params.ComponentDataOverride;
    }
    else if (fields) {
        // Otherwise use datasource data (provided in fields)
        // FEaaS expects wrapping "_" as catch-all datasource template id
        data = JSON.stringify({ _: getDataFromFields(fields) });
    }
    const reqProps = {
        library: params.LibraryId,
        cdn: params.ComponentHostName,
        component: params.ComponentId,
        version: params.ComponentVersion,
        revision: params.ComponentRevision,
        data,
    };
    const optProps = {};
    if (params.ComponentInstanceId) {
        optProps.instance = params.ComponentInstanceId;
    }
    if (params.ComponentHTMLOverride) {
        optProps.dangerouslySetInnerHTML = { __html: params.ComponentHTMLOverride };
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("link", { rel: "preload", as: "style", href: `${reqProps.cdn}/styles/${reqProps.library}/published.css` }),
        react_1.default.createElement("link", { rel: "preload", as: "fetch", href: `${reqProps.cdn}/components/${reqProps.library}/${reqProps.component}/${reqProps.version}/${reqProps.revision}.html` }),
        react_1.default.createElement("link", { rel: "preload", as: "script", href: exports.FEAAS_MODULE_SRC }),
        react_1.default.createElement("feaas-stylesheet", { library: reqProps.library, cdn: reqProps.cdn }),
        react_1.default.createElement("feaas-component", Object.assign({}, reqProps, optProps))));
};
//exports.FEaaSComponent = FEaaSComponent;
export default FEaaSComponent;
