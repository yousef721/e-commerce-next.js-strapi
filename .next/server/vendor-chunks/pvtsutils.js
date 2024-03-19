"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/pvtsutils";
exports.ids = ["vendor-chunks/pvtsutils"];
exports.modules = {

/***/ "(ssr)/./node_modules/pvtsutils/build/index.es.js":
/*!**************************************************!*\
  !*** ./node_modules/pvtsutils/build/index.es.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BufferSourceConverter: () => (/* binding */ BufferSourceConverter),\n/* harmony export */   Convert: () => (/* binding */ Convert),\n/* harmony export */   assign: () => (/* binding */ assign),\n/* harmony export */   combine: () => (/* binding */ combine),\n/* harmony export */   isEqual: () => (/* binding */ isEqual)\n/* harmony export */ });\n/*!\n * MIT License\n * \n * Copyright (c) 2017-2022 Peculiar Ventures, LLC\n * \n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n * \n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n * \n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n * \n */\n\nconst ARRAY_BUFFER_NAME = \"[object ArrayBuffer]\";\nclass BufferSourceConverter {\n    static isArrayBuffer(data) {\n        return Object.prototype.toString.call(data) === ARRAY_BUFFER_NAME;\n    }\n    static toArrayBuffer(data) {\n        if (this.isArrayBuffer(data)) {\n            return data;\n        }\n        if (data.byteLength === data.buffer.byteLength) {\n            return data.buffer;\n        }\n        if (data.byteOffset === 0 && data.byteLength === data.buffer.byteLength) {\n            return data.buffer;\n        }\n        return this.toUint8Array(data.buffer)\n            .slice(data.byteOffset, data.byteOffset + data.byteLength)\n            .buffer;\n    }\n    static toUint8Array(data) {\n        return this.toView(data, Uint8Array);\n    }\n    static toView(data, type) {\n        if (data.constructor === type) {\n            return data;\n        }\n        if (this.isArrayBuffer(data)) {\n            return new type(data);\n        }\n        if (this.isArrayBufferView(data)) {\n            return new type(data.buffer, data.byteOffset, data.byteLength);\n        }\n        throw new TypeError(\"The provided value is not of type '(ArrayBuffer or ArrayBufferView)'\");\n    }\n    static isBufferSource(data) {\n        return this.isArrayBufferView(data)\n            || this.isArrayBuffer(data);\n    }\n    static isArrayBufferView(data) {\n        return ArrayBuffer.isView(data)\n            || (data && this.isArrayBuffer(data.buffer));\n    }\n    static isEqual(a, b) {\n        const aView = BufferSourceConverter.toUint8Array(a);\n        const bView = BufferSourceConverter.toUint8Array(b);\n        if (aView.length !== bView.byteLength) {\n            return false;\n        }\n        for (let i = 0; i < aView.length; i++) {\n            if (aView[i] !== bView[i]) {\n                return false;\n            }\n        }\n        return true;\n    }\n    static concat(...args) {\n        let buffers;\n        if (Array.isArray(args[0]) && !(args[1] instanceof Function)) {\n            buffers = args[0];\n        }\n        else if (Array.isArray(args[0]) && args[1] instanceof Function) {\n            buffers = args[0];\n        }\n        else {\n            if (args[args.length - 1] instanceof Function) {\n                buffers = args.slice(0, args.length - 1);\n            }\n            else {\n                buffers = args;\n            }\n        }\n        let size = 0;\n        for (const buffer of buffers) {\n            size += buffer.byteLength;\n        }\n        const res = new Uint8Array(size);\n        let offset = 0;\n        for (const buffer of buffers) {\n            const view = this.toUint8Array(buffer);\n            res.set(view, offset);\n            offset += view.length;\n        }\n        if (args[args.length - 1] instanceof Function) {\n            return this.toView(res, args[args.length - 1]);\n        }\n        return res.buffer;\n    }\n}\n\nconst STRING_TYPE = \"string\";\nconst HEX_REGEX = /^[0-9a-f]+$/i;\nconst BASE64_REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;\nconst BASE64URL_REGEX = /^[a-zA-Z0-9-_]+$/;\nclass Utf8Converter {\n    static fromString(text) {\n        const s = unescape(encodeURIComponent(text));\n        const uintArray = new Uint8Array(s.length);\n        for (let i = 0; i < s.length; i++) {\n            uintArray[i] = s.charCodeAt(i);\n        }\n        return uintArray.buffer;\n    }\n    static toString(buffer) {\n        const buf = BufferSourceConverter.toUint8Array(buffer);\n        let encodedString = \"\";\n        for (let i = 0; i < buf.length; i++) {\n            encodedString += String.fromCharCode(buf[i]);\n        }\n        const decodedString = decodeURIComponent(escape(encodedString));\n        return decodedString;\n    }\n}\nclass Utf16Converter {\n    static toString(buffer, littleEndian = false) {\n        const arrayBuffer = BufferSourceConverter.toArrayBuffer(buffer);\n        const dataView = new DataView(arrayBuffer);\n        let res = \"\";\n        for (let i = 0; i < arrayBuffer.byteLength; i += 2) {\n            const code = dataView.getUint16(i, littleEndian);\n            res += String.fromCharCode(code);\n        }\n        return res;\n    }\n    static fromString(text, littleEndian = false) {\n        const res = new ArrayBuffer(text.length * 2);\n        const dataView = new DataView(res);\n        for (let i = 0; i < text.length; i++) {\n            dataView.setUint16(i * 2, text.charCodeAt(i), littleEndian);\n        }\n        return res;\n    }\n}\nclass Convert {\n    static isHex(data) {\n        return typeof data === STRING_TYPE\n            && HEX_REGEX.test(data);\n    }\n    static isBase64(data) {\n        return typeof data === STRING_TYPE\n            && BASE64_REGEX.test(data);\n    }\n    static isBase64Url(data) {\n        return typeof data === STRING_TYPE\n            && BASE64URL_REGEX.test(data);\n    }\n    static ToString(buffer, enc = \"utf8\") {\n        const buf = BufferSourceConverter.toUint8Array(buffer);\n        switch (enc.toLowerCase()) {\n            case \"utf8\":\n                return this.ToUtf8String(buf);\n            case \"binary\":\n                return this.ToBinary(buf);\n            case \"hex\":\n                return this.ToHex(buf);\n            case \"base64\":\n                return this.ToBase64(buf);\n            case \"base64url\":\n                return this.ToBase64Url(buf);\n            case \"utf16le\":\n                return Utf16Converter.toString(buf, true);\n            case \"utf16\":\n            case \"utf16be\":\n                return Utf16Converter.toString(buf);\n            default:\n                throw new Error(`Unknown type of encoding '${enc}'`);\n        }\n    }\n    static FromString(str, enc = \"utf8\") {\n        if (!str) {\n            return new ArrayBuffer(0);\n        }\n        switch (enc.toLowerCase()) {\n            case \"utf8\":\n                return this.FromUtf8String(str);\n            case \"binary\":\n                return this.FromBinary(str);\n            case \"hex\":\n                return this.FromHex(str);\n            case \"base64\":\n                return this.FromBase64(str);\n            case \"base64url\":\n                return this.FromBase64Url(str);\n            case \"utf16le\":\n                return Utf16Converter.fromString(str, true);\n            case \"utf16\":\n            case \"utf16be\":\n                return Utf16Converter.fromString(str);\n            default:\n                throw new Error(`Unknown type of encoding '${enc}'`);\n        }\n    }\n    static ToBase64(buffer) {\n        const buf = BufferSourceConverter.toUint8Array(buffer);\n        if (typeof btoa !== \"undefined\") {\n            const binary = this.ToString(buf, \"binary\");\n            return btoa(binary);\n        }\n        else {\n            return Buffer.from(buf).toString(\"base64\");\n        }\n    }\n    static FromBase64(base64) {\n        const formatted = this.formatString(base64);\n        if (!formatted) {\n            return new ArrayBuffer(0);\n        }\n        if (!Convert.isBase64(formatted)) {\n            throw new TypeError(\"Argument 'base64Text' is not Base64 encoded\");\n        }\n        if (typeof atob !== \"undefined\") {\n            return this.FromBinary(atob(formatted));\n        }\n        else {\n            return new Uint8Array(Buffer.from(formatted, \"base64\")).buffer;\n        }\n    }\n    static FromBase64Url(base64url) {\n        const formatted = this.formatString(base64url);\n        if (!formatted) {\n            return new ArrayBuffer(0);\n        }\n        if (!Convert.isBase64Url(formatted)) {\n            throw new TypeError(\"Argument 'base64url' is not Base64Url encoded\");\n        }\n        return this.FromBase64(this.Base64Padding(formatted.replace(/\\-/g, \"+\").replace(/\\_/g, \"/\")));\n    }\n    static ToBase64Url(data) {\n        return this.ToBase64(data).replace(/\\+/g, \"-\").replace(/\\//g, \"_\").replace(/\\=/g, \"\");\n    }\n    static FromUtf8String(text, encoding = Convert.DEFAULT_UTF8_ENCODING) {\n        switch (encoding) {\n            case \"ascii\":\n                return this.FromBinary(text);\n            case \"utf8\":\n                return Utf8Converter.fromString(text);\n            case \"utf16\":\n            case \"utf16be\":\n                return Utf16Converter.fromString(text);\n            case \"utf16le\":\n            case \"usc2\":\n                return Utf16Converter.fromString(text, true);\n            default:\n                throw new Error(`Unknown type of encoding '${encoding}'`);\n        }\n    }\n    static ToUtf8String(buffer, encoding = Convert.DEFAULT_UTF8_ENCODING) {\n        switch (encoding) {\n            case \"ascii\":\n                return this.ToBinary(buffer);\n            case \"utf8\":\n                return Utf8Converter.toString(buffer);\n            case \"utf16\":\n            case \"utf16be\":\n                return Utf16Converter.toString(buffer);\n            case \"utf16le\":\n            case \"usc2\":\n                return Utf16Converter.toString(buffer, true);\n            default:\n                throw new Error(`Unknown type of encoding '${encoding}'`);\n        }\n    }\n    static FromBinary(text) {\n        const stringLength = text.length;\n        const resultView = new Uint8Array(stringLength);\n        for (let i = 0; i < stringLength; i++) {\n            resultView[i] = text.charCodeAt(i);\n        }\n        return resultView.buffer;\n    }\n    static ToBinary(buffer) {\n        const buf = BufferSourceConverter.toUint8Array(buffer);\n        let res = \"\";\n        for (let i = 0; i < buf.length; i++) {\n            res += String.fromCharCode(buf[i]);\n        }\n        return res;\n    }\n    static ToHex(buffer) {\n        const buf = BufferSourceConverter.toUint8Array(buffer);\n        let result = \"\";\n        const len = buf.length;\n        for (let i = 0; i < len; i++) {\n            const byte = buf[i];\n            if (byte < 16) {\n                result += \"0\";\n            }\n            result += byte.toString(16);\n        }\n        return result;\n    }\n    static FromHex(hexString) {\n        let formatted = this.formatString(hexString);\n        if (!formatted) {\n            return new ArrayBuffer(0);\n        }\n        if (!Convert.isHex(formatted)) {\n            throw new TypeError(\"Argument 'hexString' is not HEX encoded\");\n        }\n        if (formatted.length % 2) {\n            formatted = `0${formatted}`;\n        }\n        const res = new Uint8Array(formatted.length / 2);\n        for (let i = 0; i < formatted.length; i = i + 2) {\n            const c = formatted.slice(i, i + 2);\n            res[i / 2] = parseInt(c, 16);\n        }\n        return res.buffer;\n    }\n    static ToUtf16String(buffer, littleEndian = false) {\n        return Utf16Converter.toString(buffer, littleEndian);\n    }\n    static FromUtf16String(text, littleEndian = false) {\n        return Utf16Converter.fromString(text, littleEndian);\n    }\n    static Base64Padding(base64) {\n        const padCount = 4 - (base64.length % 4);\n        if (padCount < 4) {\n            for (let i = 0; i < padCount; i++) {\n                base64 += \"=\";\n            }\n        }\n        return base64;\n    }\n    static formatString(data) {\n        return (data === null || data === void 0 ? void 0 : data.replace(/[\\n\\r\\t ]/g, \"\")) || \"\";\n    }\n}\nConvert.DEFAULT_UTF8_ENCODING = \"utf8\";\n\nfunction assign(target, ...sources) {\n    const res = arguments[0];\n    for (let i = 1; i < arguments.length; i++) {\n        const obj = arguments[i];\n        for (const prop in obj) {\n            res[prop] = obj[prop];\n        }\n    }\n    return res;\n}\nfunction combine(...buf) {\n    const totalByteLength = buf.map((item) => item.byteLength).reduce((prev, cur) => prev + cur);\n    const res = new Uint8Array(totalByteLength);\n    let currentPos = 0;\n    buf.map((item) => new Uint8Array(item)).forEach((arr) => {\n        for (const item2 of arr) {\n            res[currentPos++] = item2;\n        }\n    });\n    return res.buffer;\n}\nfunction isEqual(bytes1, bytes2) {\n    if (!(bytes1 && bytes2)) {\n        return false;\n    }\n    if (bytes1.byteLength !== bytes2.byteLength) {\n        return false;\n    }\n    const b1 = new Uint8Array(bytes1);\n    const b2 = new Uint8Array(bytes2);\n    for (let i = 0; i < bytes1.byteLength; i++) {\n        if (b1[i] !== b2[i]) {\n            return false;\n        }\n    }\n    return true;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHZ0c3V0aWxzL2J1aWxkL2luZGV4LmVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELElBQUk7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxJQUFJO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsU0FBUztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsU0FBUztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTtBQUN0QztBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvcHZ0c3V0aWxzL2J1aWxkL2luZGV4LmVzLmpzPzA4N2UiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBNSVQgTGljZW5zZVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctMjAyMiBQZWN1bGlhciBWZW50dXJlcywgTExDXG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqIFxuICovXG5cbmNvbnN0IEFSUkFZX0JVRkZFUl9OQU1FID0gXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiO1xuY2xhc3MgQnVmZmVyU291cmNlQ29udmVydGVyIHtcbiAgICBzdGF0aWMgaXNBcnJheUJ1ZmZlcihkYXRhKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkgPT09IEFSUkFZX0JVRkZFUl9OQU1FO1xuICAgIH1cbiAgICBzdGF0aWMgdG9BcnJheUJ1ZmZlcihkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQXJyYXlCdWZmZXIoZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmJ5dGVMZW5ndGggPT09IGRhdGEuYnVmZmVyLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5ieXRlT2Zmc2V0ID09PSAwICYmIGRhdGEuYnl0ZUxlbmd0aCA9PT0gZGF0YS5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRvVWludDhBcnJheShkYXRhLmJ1ZmZlcilcbiAgICAgICAgICAgIC5zbGljZShkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZU9mZnNldCArIGRhdGEuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgIC5idWZmZXI7XG4gICAgfVxuICAgIHN0YXRpYyB0b1VpbnQ4QXJyYXkoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy50b1ZpZXcoZGF0YSwgVWludDhBcnJheSk7XG4gICAgfVxuICAgIHN0YXRpYyB0b1ZpZXcoZGF0YSwgdHlwZSkge1xuICAgICAgICBpZiAoZGF0YS5jb25zdHJ1Y3RvciA9PT0gdHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNBcnJheUJ1ZmZlcihkYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyB0eXBlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHR5cGUoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIHByb3ZpZGVkIHZhbHVlIGlzIG5vdCBvZiB0eXBlICcoQXJyYXlCdWZmZXIgb3IgQXJyYXlCdWZmZXJWaWV3KSdcIik7XG4gICAgfVxuICAgIHN0YXRpYyBpc0J1ZmZlclNvdXJjZShkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpXG4gICAgICAgICAgICB8fCB0aGlzLmlzQXJyYXlCdWZmZXIoZGF0YSk7XG4gICAgfVxuICAgIHN0YXRpYyBpc0FycmF5QnVmZmVyVmlldyhkYXRhKSB7XG4gICAgICAgIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSlcbiAgICAgICAgICAgIHx8IChkYXRhICYmIHRoaXMuaXNBcnJheUJ1ZmZlcihkYXRhLmJ1ZmZlcikpO1xuICAgIH1cbiAgICBzdGF0aWMgaXNFcXVhbChhLCBiKSB7XG4gICAgICAgIGNvbnN0IGFWaWV3ID0gQnVmZmVyU291cmNlQ29udmVydGVyLnRvVWludDhBcnJheShhKTtcbiAgICAgICAgY29uc3QgYlZpZXcgPSBCdWZmZXJTb3VyY2VDb252ZXJ0ZXIudG9VaW50OEFycmF5KGIpO1xuICAgICAgICBpZiAoYVZpZXcubGVuZ3RoICE9PSBiVmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhVmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFWaWV3W2ldICE9PSBiVmlld1tpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIGNvbmNhdCguLi5hcmdzKSB7XG4gICAgICAgIGxldCBidWZmZXJzO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmdzWzBdKSAmJiAhKGFyZ3NbMV0gaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcbiAgICAgICAgICAgIGJ1ZmZlcnMgPSBhcmdzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnc1swXSkgJiYgYXJnc1sxXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBidWZmZXJzID0gYXJnc1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIGJ1ZmZlcnMgPSBhcmdzLnNsaWNlKDAsIGFyZ3MubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBidWZmZXJzID0gYXJncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc2l6ZSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgYnVmZmVyIG9mIGJ1ZmZlcnMpIHtcbiAgICAgICAgICAgIHNpemUgKz0gYnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy50b1VpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgICAgIHJlcy5zZXQodmlldywgb2Zmc2V0KTtcbiAgICAgICAgICAgIG9mZnNldCArPSB2aWV3Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJnc1thcmdzLmxlbmd0aCAtIDFdIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvVmlldyhyZXMsIGFyZ3NbYXJncy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5idWZmZXI7XG4gICAgfVxufVxuXG5jb25zdCBTVFJJTkdfVFlQRSA9IFwic3RyaW5nXCI7XG5jb25zdCBIRVhfUkVHRVggPSAvXlswLTlhLWZdKyQvaTtcbmNvbnN0IEJBU0U2NF9SRUdFWCA9IC9eKD86W0EtWmEtejAtOSsvXXs0fSkqKD86W0EtWmEtejAtOSsvXXsyfT09fFtBLVphLXowLTkrL117M309KT8kLztcbmNvbnN0IEJBU0U2NFVSTF9SRUdFWCA9IC9eW2EtekEtWjAtOS1fXSskLztcbmNsYXNzIFV0ZjhDb252ZXJ0ZXIge1xuICAgIHN0YXRpYyBmcm9tU3RyaW5nKHRleHQpIHtcbiAgICAgICAgY29uc3QgcyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gICAgICAgIGNvbnN0IHVpbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KHMubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB1aW50QXJyYXlbaV0gPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVpbnRBcnJheS5idWZmZXI7XG4gICAgfVxuICAgIHN0YXRpYyB0b1N0cmluZyhidWZmZXIpIHtcbiAgICAgICAgY29uc3QgYnVmID0gQnVmZmVyU291cmNlQ29udmVydGVyLnRvVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICBsZXQgZW5jb2RlZFN0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlbmNvZGVkU3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGVkU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShlbmNvZGVkU3RyaW5nKSk7XG4gICAgICAgIHJldHVybiBkZWNvZGVkU3RyaW5nO1xuICAgIH1cbn1cbmNsYXNzIFV0ZjE2Q29udmVydGVyIHtcbiAgICBzdGF0aWMgdG9TdHJpbmcoYnVmZmVyLCBsaXR0bGVFbmRpYW4gPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IEJ1ZmZlclNvdXJjZUNvbnZlcnRlci50b0FycmF5QnVmZmVyKGJ1ZmZlcik7XG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGFycmF5QnVmZmVyKTtcbiAgICAgICAgbGV0IHJlcyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gZGF0YVZpZXcuZ2V0VWludDE2KGksIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbVN0cmluZyh0ZXh0LCBsaXR0bGVFbmRpYW4gPSBmYWxzZSkge1xuICAgICAgICBjb25zdCByZXMgPSBuZXcgQXJyYXlCdWZmZXIodGV4dC5sZW5ndGggKiAyKTtcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcocmVzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkYXRhVmlldy5zZXRVaW50MTYoaSAqIDIsIHRleHQuY2hhckNvZGVBdChpKSwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbn1cbmNsYXNzIENvbnZlcnQge1xuICAgIHN0YXRpYyBpc0hleChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZGF0YSA9PT0gU1RSSU5HX1RZUEVcbiAgICAgICAgICAgICYmIEhFWF9SRUdFWC50ZXN0KGRhdGEpO1xuICAgIH1cbiAgICBzdGF0aWMgaXNCYXNlNjQoZGF0YSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGRhdGEgPT09IFNUUklOR19UWVBFXG4gICAgICAgICAgICAmJiBCQVNFNjRfUkVHRVgudGVzdChkYXRhKTtcbiAgICB9XG4gICAgc3RhdGljIGlzQmFzZTY0VXJsKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBkYXRhID09PSBTVFJJTkdfVFlQRVxuICAgICAgICAgICAgJiYgQkFTRTY0VVJMX1JFR0VYLnRlc3QoZGF0YSk7XG4gICAgfVxuICAgIHN0YXRpYyBUb1N0cmluZyhidWZmZXIsIGVuYyA9IFwidXRmOFwiKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IEJ1ZmZlclNvdXJjZUNvbnZlcnRlci50b1VpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgc3dpdGNoIChlbmMudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSBcInV0ZjhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Ub1V0ZjhTdHJpbmcoYnVmKTtcbiAgICAgICAgICAgIGNhc2UgXCJiaW5hcnlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0JpbmFyeShidWYpO1xuICAgICAgICAgICAgY2FzZSBcImhleFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlRvSGV4KGJ1Zik7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZTY0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVG9CYXNlNjQoYnVmKTtcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlNjR1cmxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0Jhc2U2NFVybChidWYpO1xuICAgICAgICAgICAgY2FzZSBcInV0ZjE2bGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRmMTZDb252ZXJ0ZXIudG9TdHJpbmcoYnVmLCB0cnVlKTtcbiAgICAgICAgICAgIGNhc2UgXCJ1dGYxNlwiOlxuICAgICAgICAgICAgY2FzZSBcInV0ZjE2YmVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRmMTZDb252ZXJ0ZXIudG9TdHJpbmcoYnVmKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHR5cGUgb2YgZW5jb2RpbmcgJyR7ZW5jfSdgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgRnJvbVN0cmluZyhzdHIsIGVuYyA9IFwidXRmOFwiKSB7XG4gICAgICAgIGlmICghc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZW5jLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ1dGY4XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRnJvbVV0ZjhTdHJpbmcoc3RyKTtcbiAgICAgICAgICAgIGNhc2UgXCJiaW5hcnlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Gcm9tQmluYXJ5KHN0cik7XG4gICAgICAgICAgICBjYXNlIFwiaGV4XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRnJvbUhleChzdHIpO1xuICAgICAgICAgICAgY2FzZSBcImJhc2U2NFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkZyb21CYXNlNjQoc3RyKTtcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlNjR1cmxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Gcm9tQmFzZTY0VXJsKHN0cik7XG4gICAgICAgICAgICBjYXNlIFwidXRmMTZsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBVdGYxNkNvbnZlcnRlci5mcm9tU3RyaW5nKHN0ciwgdHJ1ZSk7XG4gICAgICAgICAgICBjYXNlIFwidXRmMTZcIjpcbiAgICAgICAgICAgIGNhc2UgXCJ1dGYxNmJlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0ZjE2Q29udmVydGVyLmZyb21TdHJpbmcoc3RyKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHR5cGUgb2YgZW5jb2RpbmcgJyR7ZW5jfSdgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgVG9CYXNlNjQoYnVmZmVyKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IEJ1ZmZlclNvdXJjZUNvbnZlcnRlci50b1VpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgaWYgKHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBjb25zdCBiaW5hcnkgPSB0aGlzLlRvU3RyaW5nKGJ1ZiwgXCJiaW5hcnlcIik7XG4gICAgICAgICAgICByZXR1cm4gYnRvYShiaW5hcnkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGJ1ZikudG9TdHJpbmcoXCJiYXNlNjRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEZyb21CYXNlNjQoYmFzZTY0KSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IHRoaXMuZm9ybWF0U3RyaW5nKGJhc2U2NCk7XG4gICAgICAgIGlmICghZm9ybWF0dGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQ29udmVydC5pc0Jhc2U2NChmb3JtYXR0ZWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgJ2Jhc2U2NFRleHQnIGlzIG5vdCBCYXNlNjQgZW5jb2RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGF0b2IgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkZyb21CaW5hcnkoYXRvYihmb3JtYXR0ZWQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShCdWZmZXIuZnJvbShmb3JtYXR0ZWQsIFwiYmFzZTY0XCIpKS5idWZmZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEZyb21CYXNlNjRVcmwoYmFzZTY0dXJsKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IHRoaXMuZm9ybWF0U3RyaW5nKGJhc2U2NHVybCk7XG4gICAgICAgIGlmICghZm9ybWF0dGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQ29udmVydC5pc0Jhc2U2NFVybChmb3JtYXR0ZWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgJ2Jhc2U2NHVybCcgaXMgbm90IEJhc2U2NFVybCBlbmNvZGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLkZyb21CYXNlNjQodGhpcy5CYXNlNjRQYWRkaW5nKGZvcm1hdHRlZC5yZXBsYWNlKC9cXC0vZywgXCIrXCIpLnJlcGxhY2UoL1xcXy9nLCBcIi9cIikpKTtcbiAgICB9XG4gICAgc3RhdGljIFRvQmFzZTY0VXJsKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuVG9CYXNlNjQoZGF0YSkucmVwbGFjZSgvXFwrL2csIFwiLVwiKS5yZXBsYWNlKC9cXC8vZywgXCJfXCIpLnJlcGxhY2UoL1xcPS9nLCBcIlwiKTtcbiAgICB9XG4gICAgc3RhdGljIEZyb21VdGY4U3RyaW5nKHRleHQsIGVuY29kaW5nID0gQ29udmVydC5ERUZBVUxUX1VURjhfRU5DT0RJTkcpIHtcbiAgICAgICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgICAgICAgY2FzZSBcImFzY2lpXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRnJvbUJpbmFyeSh0ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgXCJ1dGY4XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0ZjhDb252ZXJ0ZXIuZnJvbVN0cmluZyh0ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgXCJ1dGYxNlwiOlxuICAgICAgICAgICAgY2FzZSBcInV0ZjE2YmVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRmMTZDb252ZXJ0ZXIuZnJvbVN0cmluZyh0ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgXCJ1dGYxNmxlXCI6XG4gICAgICAgICAgICBjYXNlIFwidXNjMlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBVdGYxNkNvbnZlcnRlci5mcm9tU3RyaW5nKHRleHQsIHRydWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdHlwZSBvZiBlbmNvZGluZyAnJHtlbmNvZGluZ30nYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIFRvVXRmOFN0cmluZyhidWZmZXIsIGVuY29kaW5nID0gQ29udmVydC5ERUZBVUxUX1VURjhfRU5DT0RJTkcpIHtcbiAgICAgICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgICAgICAgY2FzZSBcImFzY2lpXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVG9CaW5hcnkoYnVmZmVyKTtcbiAgICAgICAgICAgIGNhc2UgXCJ1dGY4XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0ZjhDb252ZXJ0ZXIudG9TdHJpbmcoYnVmZmVyKTtcbiAgICAgICAgICAgIGNhc2UgXCJ1dGYxNlwiOlxuICAgICAgICAgICAgY2FzZSBcInV0ZjE2YmVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRmMTZDb252ZXJ0ZXIudG9TdHJpbmcoYnVmZmVyKTtcbiAgICAgICAgICAgIGNhc2UgXCJ1dGYxNmxlXCI6XG4gICAgICAgICAgICBjYXNlIFwidXNjMlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBVdGYxNkNvbnZlcnRlci50b1N0cmluZyhidWZmZXIsIHRydWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdHlwZSBvZiBlbmNvZGluZyAnJHtlbmNvZGluZ30nYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEZyb21CaW5hcnkodGV4dCkge1xuICAgICAgICBjb25zdCBzdHJpbmdMZW5ndGggPSB0ZXh0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgcmVzdWx0VmlldyA9IG5ldyBVaW50OEFycmF5KHN0cmluZ0xlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdFZpZXdbaV0gPSB0ZXh0LmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFZpZXcuYnVmZmVyO1xuICAgIH1cbiAgICBzdGF0aWMgVG9CaW5hcnkoYnVmZmVyKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IEJ1ZmZlclNvdXJjZUNvbnZlcnRlci50b1VpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgbGV0IHJlcyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHN0YXRpYyBUb0hleChidWZmZXIpIHtcbiAgICAgICAgY29uc3QgYnVmID0gQnVmZmVyU291cmNlQ29udmVydGVyLnRvVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgY29uc3QgbGVuID0gYnVmLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYnl0ZSA9IGJ1ZltpXTtcbiAgICAgICAgICAgIGlmIChieXRlIDwgMTYpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgKz0gYnl0ZS50b1N0cmluZygxNik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgc3RhdGljIEZyb21IZXgoaGV4U3RyaW5nKSB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWQgPSB0aGlzLmZvcm1hdFN0cmluZyhoZXhTdHJpbmcpO1xuICAgICAgICBpZiAoIWZvcm1hdHRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcigwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUNvbnZlcnQuaXNIZXgoZm9ybWF0dGVkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFyZ3VtZW50ICdoZXhTdHJpbmcnIGlzIG5vdCBIRVggZW5jb2RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0dGVkLmxlbmd0aCAlIDIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZCA9IGAwJHtmb3JtYXR0ZWR9YDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXMgPSBuZXcgVWludDhBcnJheShmb3JtYXR0ZWQubGVuZ3RoIC8gMik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybWF0dGVkLmxlbmd0aDsgaSA9IGkgKyAyKSB7XG4gICAgICAgICAgICBjb25zdCBjID0gZm9ybWF0dGVkLnNsaWNlKGksIGkgKyAyKTtcbiAgICAgICAgICAgIHJlc1tpIC8gMl0gPSBwYXJzZUludChjLCAxNik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5idWZmZXI7XG4gICAgfVxuICAgIHN0YXRpYyBUb1V0ZjE2U3RyaW5nKGJ1ZmZlciwgbGl0dGxlRW5kaWFuID0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIFV0ZjE2Q29udmVydGVyLnRvU3RyaW5nKGJ1ZmZlciwgbGl0dGxlRW5kaWFuKTtcbiAgICB9XG4gICAgc3RhdGljIEZyb21VdGYxNlN0cmluZyh0ZXh0LCBsaXR0bGVFbmRpYW4gPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gVXRmMTZDb252ZXJ0ZXIuZnJvbVN0cmluZyh0ZXh0LCBsaXR0bGVFbmRpYW4pO1xuICAgIH1cbiAgICBzdGF0aWMgQmFzZTY0UGFkZGluZyhiYXNlNjQpIHtcbiAgICAgICAgY29uc3QgcGFkQ291bnQgPSA0IC0gKGJhc2U2NC5sZW5ndGggJSA0KTtcbiAgICAgICAgaWYgKHBhZENvdW50IDwgNCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWRDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmFzZTY0ICs9IFwiPVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYXNlNjQ7XG4gICAgfVxuICAgIHN0YXRpYyBmb3JtYXRTdHJpbmcoZGF0YSkge1xuICAgICAgICByZXR1cm4gKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5yZXBsYWNlKC9bXFxuXFxyXFx0IF0vZywgXCJcIikpIHx8IFwiXCI7XG4gICAgfVxufVxuQ29udmVydC5ERUZBVUxUX1VURjhfRU5DT0RJTkcgPSBcInV0ZjhcIjtcblxuZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgLi4uc291cmNlcykge1xuICAgIGNvbnN0IHJlcyA9IGFyZ3VtZW50c1swXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBvYmogPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIHJlc1twcm9wXSA9IG9ialtwcm9wXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gY29tYmluZSguLi5idWYpIHtcbiAgICBjb25zdCB0b3RhbEJ5dGVMZW5ndGggPSBidWYubWFwKChpdGVtKSA9PiBpdGVtLmJ5dGVMZW5ndGgpLnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2ICsgY3VyKTtcbiAgICBjb25zdCByZXMgPSBuZXcgVWludDhBcnJheSh0b3RhbEJ5dGVMZW5ndGgpO1xuICAgIGxldCBjdXJyZW50UG9zID0gMDtcbiAgICBidWYubWFwKChpdGVtKSA9PiBuZXcgVWludDhBcnJheShpdGVtKSkuZm9yRWFjaCgoYXJyKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbTIgb2YgYXJyKSB7XG4gICAgICAgICAgICByZXNbY3VycmVudFBvcysrXSA9IGl0ZW0yO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcy5idWZmZXI7XG59XG5mdW5jdGlvbiBpc0VxdWFsKGJ5dGVzMSwgYnl0ZXMyKSB7XG4gICAgaWYgKCEoYnl0ZXMxICYmIGJ5dGVzMikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYnl0ZXMxLmJ5dGVMZW5ndGggIT09IGJ5dGVzMi5ieXRlTGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYjEgPSBuZXcgVWludDhBcnJheShieXRlczEpO1xuICAgIGNvbnN0IGIyID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZXMyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzMS5ieXRlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGIxW2ldICE9PSBiMltpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgeyBCdWZmZXJTb3VyY2VDb252ZXJ0ZXIsIENvbnZlcnQsIGFzc2lnbiwgY29tYmluZSwgaXNFcXVhbCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pvtsutils/build/index.es.js\n");

/***/ })

};
;