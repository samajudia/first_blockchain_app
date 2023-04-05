/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/providers/index.ts":
/*!***************************************!*\
  !*** ./components/providers/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppWeb3Provider\": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ \"./components/providers/web3/index.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvRCIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmtldHBsYWNlLXRlc3RpbmcvLi9jb21wb25lbnRzL3Byb3ZpZGVycy9pbmRleC50cz8yZjBkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgQXBwV2ViM1Byb3ZpZGVyIH0gZnJvbSBcIi4vd2ViM1wiO1xyXG4iXSwibmFtZXMiOlsiZGVmYXVsdCIsIkFwcFdlYjNQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/providers/index.ts\n");

/***/ }),

/***/ "./components/providers/web3/index.tsx":
/*!*********************************************!*\
  !*** ./components/providers/web3/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Web3Context\": () => (/* binding */ Web3Context),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useWeb3\": () => (/* binding */ useWeb3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @walletconnect/web3-provider */ \"@walletconnect/web3-provider\");\n/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"web3modal\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst providerOptions = {\n    walletconnect: {\n        package: (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2___default()),\n        options: {\n            networkUrl: \"https://mainnet.infura.io/v3/3158ce9d3c5d4a669a5764ebc561af4a\",\n            rpc: {\n                5: \"https://goerli.infura.io/v3/3158ce9d3c5d4a669a5764ebc561af4a\",\n                1: \"https://mainnet.infura.io/v3/3158ce9d3c5d4a669a5764ebc561af4a\"\n            },\n            chainId: 1\n        }\n    }\n};\nlet initialState = {\n    provider:  false || undefined,\n    _web3Provider: null,\n    account: null,\n    chainId: null,\n    signer: null,\n    currentBlock: null,\n    isLoading: true,\n    contract: null,\n    isInstalled: null\n};\nlet web3Modal;\nlet isInstalled;\nif (false) {}\nconst Web3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst AppWeb3Provider = ({ children  })=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState);\n    const connect = async ()=>{\n        const provider = await web3Modal?.connect();\n        const _web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.providers.Web3Provider(provider);\n        const signer = _web3Provider.getSigner();\n        const account = await signer.getAddress();\n        const network = await _web3Provider.getNetwork();\n        const currentBlock = await _web3Provider.getBlockNumber();\n        // const contract = await loadContract(\"NftMarket\", provider, signer);\n        setState({\n            ...state,\n            provider: provider,\n            _web3Provider: _web3Provider,\n            account: account,\n            chainId: network.chainId,\n            signer: signer,\n            // contract: contract,\n            isInstalled: isInstalled\n        });\n    };\n    const disconnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async function() {\n        await web3Modal.clearCachedProvider();\n        setState({\n            ...state,\n            provider: null,\n            _web3Provider: null,\n            account: null,\n            chainId: null,\n            signer: null\n        });\n        window.location.reload();\n    }, [\n        state.provider\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (state.provider?.on) {\n            const handleAccountsChanged = (accounts)=>{\n                setState({\n                    ...state,\n                    account: accounts[0]\n                });\n            };\n            const handleChainChanged = (_hexChainId)=>{\n                window.location.reload();\n            };\n            const handleDisconnect = (error)=>{\n                disconnect();\n            };\n            state.provider.on(\"accountsChanged\", handleAccountsChanged);\n            state.provider.on(\"chainChanged\", handleChainChanged);\n            state.provider.on(\"disconnect\", handleDisconnect);\n            return ()=>{\n                // @ts-ignore\n                if (state?.provider.removeListener) {\n                    state.provider.removeListener(\"accountsChanged\", handleAccountsChanged);\n                    state.provider.removeListener(\"chainChanged\", handleChainChanged);\n                    state.provider.removeListener(\"disconnect\", handleDisconnect);\n                }\n            };\n        }\n    }, [\n        disconnect,\n        state\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Web3Context.Provider, {\n        value: {\n            account: state.account,\n            signer: state.signer,\n            connect,\n            disconnect,\n            contract: state.contract,\n            isInstalled: isInstalled,\n            chainId: state.chainId\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\yousf\\\\tokenUiandGetBlances\\\\components\\\\providers\\\\web3\\\\index.tsx\",\n        lineNumber: 133,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppWeb3Provider);\nfunction useWeb3() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Web3Context);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPZTtBQUVrRDtBQUMvQjtBQUNXO0FBSzdDLE1BQU1RLGVBQWUsR0FBRztJQUN0QkMsYUFBYSxFQUFFO1FBQ2JDLE9BQU8sRUFBRUwscUVBQXFCO1FBQzlCTSxPQUFPLEVBQUU7WUFDUEMsVUFBVSxFQUNSLCtEQUErRDtZQUVqRUMsR0FBRyxFQUFFO0FBQ0gsaUJBQUMsRUFBRSw4REFBOEQ7QUFDakUsaUJBQUMsRUFBRSwrREFBK0Q7YUFDbkU7WUFDREMsT0FBTyxFQUFFLENBQUM7U0FDWDtLQUNGO0NBQ0Y7QUFFRCxJQUFJQyxZQUFZLEdBQUc7SUFDakJDLFFBQVEsRUFBRSxNQUFJLElBQUlDLFNBQVM7SUFDM0JDLGFBQWEsRUFBRSxJQUFJO0lBQ25CQyxPQUFPLEVBQUUsSUFBSTtJQUNiTCxPQUFPLEVBQUUsSUFBSTtJQUNiTSxNQUFNLEVBQUUsSUFBSTtJQUNaQyxZQUFZLEVBQUUsSUFBSTtJQUNsQkMsU0FBUyxFQUFFLElBQUk7SUFDZkMsUUFBUSxFQUFFLElBQUk7SUFDZEMsV0FBVyxFQUFFLElBQUk7Q0FDbEI7QUFDRCxJQUFJQyxTQUFTO0FBQ2IsSUFBSUQsV0FBVztBQUNmLElBQUksS0FBNkIsRUFBRSxFQWdCbEM7QUFFTSxNQUFNWSxXQUFXLGlCQUFHbkMsb0RBQWEsQ0FBTSxJQUFJLENBQUMsQ0FBQztBQUNwRCxNQUFNb0MsZUFBZSxHQUFzQixDQUFDLEVBQUVDLFFBQVEsR0FBTyxHQUFLO0lBQ2hFLE1BQU0sS0FBQ0MsS0FBSyxNQUFFQyxRQUFRLE1BQUlwQywrQ0FBUSxDQUFlVyxZQUFZLENBQUM7SUFDOUQsTUFBTTBCLE9BQU8sR0FBRyxVQUFZO1FBQzFCLE1BQU16QixRQUFRLEdBQUcsTUFBTVMsU0FBUyxFQUFFZ0IsT0FBTyxFQUFFO1FBQzNDLE1BQU12QixhQUFhLEdBQUcsSUFBSVgsMERBQXNCLENBQUNTLFFBQVEsQ0FBQztRQUMxRCxNQUFNSSxNQUFNLEdBQUdGLGFBQWEsQ0FBQ3lCLFNBQVMsRUFBRTtRQUN4QyxNQUFNeEIsT0FBTyxHQUFHLE1BQU1DLE1BQU0sQ0FBQ3dCLFVBQVUsRUFBRTtRQUN6QyxNQUFNZixPQUFPLEdBQUcsTUFBTVgsYUFBYSxDQUFDMkIsVUFBVSxFQUFFO1FBQ2hELE1BQU14QixZQUFZLEdBQUcsTUFBTUgsYUFBYSxDQUFDNEIsY0FBYyxFQUFFO1FBQ3pELHNFQUFzRTtRQUV0RU4sUUFBUSxDQUFDO1lBQ1AsR0FBR0QsS0FBSztZQUNSdkIsUUFBUSxFQUFFQSxRQUFRO1lBQ2xCRSxhQUFhLEVBQUVBLGFBQWE7WUFDNUJDLE9BQU8sRUFBRUEsT0FBTztZQUNoQkwsT0FBTyxFQUFFZSxPQUFPLENBQUNmLE9BQU87WUFDeEJNLE1BQU0sRUFBRUEsTUFBTTtZQUNkLHNCQUFzQjtZQUN0QkksV0FBVyxFQUFFQSxXQUFXO1NBQ3pCLENBQUMsQ0FBQztLQUNKO0lBQ0QsTUFBTXVCLFVBQVUsR0FBRzdDLGtEQUFXLENBQzVCLGlCQUFrQjtRQUNoQixNQUFNdUIsU0FBUyxDQUFDdUIsbUJBQW1CLEVBQUUsQ0FBQztRQUN0Q1IsUUFBUSxDQUFDO1lBQ1AsR0FBR0QsS0FBSztZQUNSdkIsUUFBUSxFQUFFLElBQUk7WUFDZEUsYUFBYSxFQUFFLElBQUk7WUFDbkJDLE9BQU8sRUFBRSxJQUFJO1lBQ2JMLE9BQU8sRUFBRSxJQUFJO1lBQ2JNLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDO1FBQ0hNLE1BQU0sQ0FBQ3VCLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7S0FDMUIsRUFDRDtRQUFDWCxLQUFLLENBQUN2QixRQUFRO0tBQUMsQ0FDakI7SUFDRGhCLHNEQUFlLENBQUMsSUFBTTtRQUNwQixJQUFJdUMsS0FBSyxDQUFDdkIsUUFBUSxFQUFFb0MsRUFBRSxFQUFFO1lBQ3RCLE1BQU1DLHFCQUFxQixHQUFHLENBQUNDLFFBQWEsR0FBSztnQkFDL0NkLFFBQVEsQ0FBQztvQkFDUCxHQUFHRCxLQUFLO29CQUNScEIsT0FBTyxFQUFFbUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDckIsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxNQUFNQyxrQkFBa0IsR0FBRyxDQUFDQyxXQUFnQixHQUFLO2dCQUMvQzlCLE1BQU0sQ0FBQ3VCLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7YUFDMUI7WUFDRCxNQUFNTyxnQkFBZ0IsR0FBRyxDQUFDQyxLQUFVLEdBQUs7Z0JBQ3ZDWCxVQUFVLEVBQUUsQ0FBQzthQUNkO1lBQ0RSLEtBQUssQ0FBQ3ZCLFFBQVEsQ0FBQ29DLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRUMscUJBQXFCLENBQUMsQ0FBQztZQUM1RGQsS0FBSyxDQUFDdkIsUUFBUSxDQUFDb0MsRUFBRSxDQUFDLGNBQWMsRUFBRUcsa0JBQWtCLENBQUMsQ0FBQztZQUN0RGhCLEtBQUssQ0FBQ3ZCLFFBQVEsQ0FBQ29DLEVBQUUsQ0FBQyxZQUFZLEVBQUVLLGdCQUFnQixDQUFDLENBQUM7WUFDbEQsT0FBTyxJQUFNO2dCQUNYLGFBQWE7Z0JBQ2IsSUFBSWxCLEtBQUssRUFBRXZCLFFBQVEsQ0FBQzJDLGNBQWMsRUFBRTtvQkFDbENwQixLQUFLLENBQUN2QixRQUFRLENBQUMyQyxjQUFjLENBQzNCLGlCQUFpQixFQUNqQk4scUJBQXFCLENBQ3RCLENBQUM7b0JBQ0ZkLEtBQUssQ0FBQ3ZCLFFBQVEsQ0FBQzJDLGNBQWMsQ0FBQyxjQUFjLEVBQUVKLGtCQUFrQixDQUFDLENBQUM7b0JBQ2xFaEIsS0FBSyxDQUFDdkIsUUFBUSxDQUFDMkMsY0FBYyxDQUFDLFlBQVksRUFBRUYsZ0JBQWdCLENBQUMsQ0FBQztpQkFDL0Q7YUFDRixDQUFDO1NBQ0g7S0FDRixFQUFFO1FBQUNWLFVBQVU7UUFBRVIsS0FBSztLQUFDLENBQUMsQ0FBQztJQUN4QixxQkFDRSw4REFBQ0gsV0FBVyxDQUFDd0IsUUFBUTtRQUNuQkMsS0FBSyxFQUFFO1lBQ0wxQyxPQUFPLEVBQUVvQixLQUFLLENBQUNwQixPQUFPO1lBQ3RCQyxNQUFNLEVBQUVtQixLQUFLLENBQUNuQixNQUFNO1lBQ3BCcUIsT0FBTztZQUNQTSxVQUFVO1lBQ1Z4QixRQUFRLEVBQUVnQixLQUFLLENBQUNoQixRQUFRO1lBQ3hCQyxXQUFXLEVBQUVBLFdBQVc7WUFDeEJWLE9BQU8sRUFBRXlCLEtBQUssQ0FBQ3pCLE9BQU87U0FDdkI7a0JBRUF3QixRQUFROzs7OztpQkFDWSxDQUN2QjtDQUNIO0FBRUQsaUVBQWVELGVBQWUsRUFBQztBQUV4QixTQUFTeUIsT0FBTyxHQUFHO0lBQ3hCLE9BQU8zRCxpREFBVSxDQUFDaUMsV0FBVyxDQUFDLENBQUM7Q0FDaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXRwbGFjZS10ZXN0aW5nLy4vY29tcG9uZW50cy9wcm92aWRlcnMvd2ViMy9pbmRleC50c3g/NzcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcclxuICBjcmVhdGVDb250ZXh0LFxyXG4gIEZDLFxyXG4gIEZ1bmN0aW9uQ29tcG9uZW50LFxyXG4gIHVzZUNhbGxiYWNrLFxyXG4gIHVzZUNvbnRleHQsXHJcbiAgdXNlU3RhdGUsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgV2FsbGV0Q29ubmVjdFByb3ZpZGVyIGZyb20gXCJAd2FsbGV0Y29ubmVjdC93ZWIzLXByb3ZpZGVyXCI7XHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xyXG5pbXBvcnQgeyBDb250cmFjdCwgcHJvdmlkZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQge1xyXG4gIEluaXRpYWxTdGF0ZSxcclxuICAvLyAgbG9hZENvbnRyYWN0XHJcbn0gZnJvbSBcIi4vdXRpbHNcIjtcclxuY29uc3QgcHJvdmlkZXJPcHRpb25zID0ge1xyXG4gIHdhbGxldGNvbm5lY3Q6IHtcclxuICAgIHBhY2thZ2U6IFdhbGxldENvbm5lY3RQcm92aWRlciwgLy8gcmVxdWlyZWRcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgbmV0d29ya1VybDpcclxuICAgICAgICBcImh0dHBzOi8vbWFpbm5ldC5pbmZ1cmEuaW8vdjMvMzE1OGNlOWQzYzVkNGE2NjlhNTc2NGViYzU2MWFmNGFcIixcclxuXHJcbiAgICAgIHJwYzoge1xyXG4gICAgICAgIDU6IFwiaHR0cHM6Ly9nb2VybGkuaW5mdXJhLmlvL3YzLzMxNThjZTlkM2M1ZDRhNjY5YTU3NjRlYmM1NjFhZjRhXCIsXHJcbiAgICAgICAgMTogXCJodHRwczovL21haW5uZXQuaW5mdXJhLmlvL3YzLzMxNThjZTlkM2M1ZDRhNjY5YTU3NjRlYmM1NjFhZjRhXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYWluSWQ6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5sZXQgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHByb3ZpZGVyOiBudWxsIHx8IHVuZGVmaW5lZCxcclxuICBfd2ViM1Byb3ZpZGVyOiBudWxsLFxyXG4gIGFjY291bnQ6IG51bGwsXHJcbiAgY2hhaW5JZDogbnVsbCxcclxuICBzaWduZXI6IG51bGwsXHJcbiAgY3VycmVudEJsb2NrOiBudWxsLFxyXG4gIGlzTG9hZGluZzogdHJ1ZSxcclxuICBjb250cmFjdDogbnVsbCxcclxuICBpc0luc3RhbGxlZDogbnVsbCxcclxufTtcclxubGV0IHdlYjNNb2RhbDogYW55O1xyXG5sZXQgaXNJbnN0YWxsZWQ6IGFueTtcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgaXNJbnN0YWxsZWQgPSB3aW5kb3cuZXRoZXJldW0/LmlzTWV0YU1hc2sgfHwgZmFsc2U7XHJcbiAgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCh7XHJcbiAgICBuZXR3b3JrOiBcIm1haW5uZXRcIiwgLy8gb3B0aW9uYWxcclxuICAgIGNhY2hlUHJvdmlkZXI6IHRydWUsXHJcbiAgICAvLyBkaXNhYmxlSW5qZWN0ZWRQcm92aWRlcjogZmFsc2UsXHJcbiAgICBwcm92aWRlck9wdGlvbnMsIC8vIHJlcXVpcmVkXHJcbiAgICB0aGVtZToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYigwLCAwLCAwKVwiLFxyXG4gICAgICBtYWluOiBcInJnYigxOTksIDE5OSwgMTk5KVwiLFxyXG4gICAgICBzZWNvbmRhcnk6IFwicmdiKDEzNiwgMTM2LCAxMzYpXCIsXHJcbiAgICAgIC8vIGJvcmRlcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDAuMTQpXCIsXHJcbiAgICAgIGhvdmVyOiBcInJnYigxNiwgMjYsIDMyKVwiLFxyXG4gICAgfSBhcyBhbnksIC8vIG9wdGlvbmFsRGVwZW5kZW5jaWVzXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXZWIzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55PihudWxsKTtcclxuY29uc3QgQXBwV2ViM1Byb3ZpZGVyOiBGdW5jdGlvbkNvbXBvbmVudCA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8SW5pdGlhbFN0YXRlPihpbml0aWFsU3RhdGUpO1xyXG4gIGNvbnN0IGNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHdlYjNNb2RhbD8uY29ubmVjdCgpO1xyXG4gICAgY29uc3QgX3dlYjNQcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKTtcclxuICAgIGNvbnN0IHNpZ25lciA9IF93ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKTtcclxuICAgIGNvbnN0IG5ldHdvcmsgPSBhd2FpdCBfd2ViM1Byb3ZpZGVyLmdldE5ldHdvcmsoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRCbG9jayA9IGF3YWl0IF93ZWIzUHJvdmlkZXIuZ2V0QmxvY2tOdW1iZXIoKTtcclxuICAgIC8vIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgbG9hZENvbnRyYWN0KFwiTmZ0TWFya2V0XCIsIHByb3ZpZGVyLCBzaWduZXIpO1xyXG5cclxuICAgIHNldFN0YXRlKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIHByb3ZpZGVyOiBwcm92aWRlcixcclxuICAgICAgX3dlYjNQcm92aWRlcjogX3dlYjNQcm92aWRlcixcclxuICAgICAgYWNjb3VudDogYWNjb3VudCxcclxuICAgICAgY2hhaW5JZDogbmV0d29yay5jaGFpbklkLFxyXG4gICAgICBzaWduZXI6IHNpZ25lcixcclxuICAgICAgLy8gY29udHJhY3Q6IGNvbnRyYWN0LFxyXG4gICAgICBpc0luc3RhbGxlZDogaXNJbnN0YWxsZWQsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGRpc2Nvbm5lY3QgPSB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgYXdhaXQgd2ViM01vZGFsLmNsZWFyQ2FjaGVkUHJvdmlkZXIoKTtcclxuICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb3ZpZGVyOiBudWxsLFxyXG4gICAgICAgIF93ZWIzUHJvdmlkZXI6IG51bGwsXHJcbiAgICAgICAgYWNjb3VudDogbnVsbCxcclxuICAgICAgICBjaGFpbklkOiBudWxsLFxyXG4gICAgICAgIHNpZ25lcjogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0sXHJcbiAgICBbc3RhdGUucHJvdmlkZXJdXHJcbiAgKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0YXRlLnByb3ZpZGVyPy5vbikge1xyXG4gICAgICBjb25zdCBoYW5kbGVBY2NvdW50c0NoYW5nZWQgPSAoYWNjb3VudHM6IGFueSkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgYWNjb3VudDogYWNjb3VudHNbMF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGhhbmRsZUNoYWluQ2hhbmdlZCA9IChfaGV4Q2hhaW5JZDogYW55KSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICBkaXNjb25uZWN0KCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHN0YXRlLnByb3ZpZGVyLm9uKFwiYWNjb3VudHNDaGFuZ2VkXCIsIGhhbmRsZUFjY291bnRzQ2hhbmdlZCk7XHJcbiAgICAgIHN0YXRlLnByb3ZpZGVyLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIGhhbmRsZUNoYWluQ2hhbmdlZCk7XHJcbiAgICAgIHN0YXRlLnByb3ZpZGVyLm9uKFwiZGlzY29ubmVjdFwiLCBoYW5kbGVEaXNjb25uZWN0KTtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKHN0YXRlPy5wcm92aWRlci5yZW1vdmVMaXN0ZW5lcikge1xyXG4gICAgICAgICAgc3RhdGUucHJvdmlkZXIucmVtb3ZlTGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiYWNjb3VudHNDaGFuZ2VkXCIsXHJcbiAgICAgICAgICAgIGhhbmRsZUFjY291bnRzQ2hhbmdlZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHN0YXRlLnByb3ZpZGVyLnJlbW92ZUxpc3RlbmVyKFwiY2hhaW5DaGFuZ2VkXCIsIGhhbmRsZUNoYWluQ2hhbmdlZCk7XHJcbiAgICAgICAgICBzdGF0ZS5wcm92aWRlci5yZW1vdmVMaXN0ZW5lcihcImRpc2Nvbm5lY3RcIiwgaGFuZGxlRGlzY29ubmVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sIFtkaXNjb25uZWN0LCBzdGF0ZV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2ViM0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBhY2NvdW50OiBzdGF0ZS5hY2NvdW50LFxyXG4gICAgICAgIHNpZ25lcjogc3RhdGUuc2lnbmVyLFxyXG4gICAgICAgIGNvbm5lY3QsXHJcbiAgICAgICAgZGlzY29ubmVjdCxcclxuICAgICAgICBjb250cmFjdDogc3RhdGUuY29udHJhY3QsXHJcbiAgICAgICAgaXNJbnN0YWxsZWQ6IGlzSW5zdGFsbGVkLFxyXG4gICAgICAgIGNoYWluSWQ6IHN0YXRlLmNoYWluSWQsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvV2ViM0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFdlYjNQcm92aWRlcjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VXZWIzKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KFdlYjNDb250ZXh0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJXYWxsZXRDb25uZWN0UHJvdmlkZXIiLCJXZWIzTW9kYWwiLCJwcm92aWRlcnMiLCJwcm92aWRlck9wdGlvbnMiLCJ3YWxsZXRjb25uZWN0IiwicGFja2FnZSIsIm9wdGlvbnMiLCJuZXR3b3JrVXJsIiwicnBjIiwiY2hhaW5JZCIsImluaXRpYWxTdGF0ZSIsInByb3ZpZGVyIiwidW5kZWZpbmVkIiwiX3dlYjNQcm92aWRlciIsImFjY291bnQiLCJzaWduZXIiLCJjdXJyZW50QmxvY2siLCJpc0xvYWRpbmciLCJjb250cmFjdCIsImlzSW5zdGFsbGVkIiwid2ViM01vZGFsIiwid2luZG93IiwiZXRoZXJldW0iLCJpc01ldGFNYXNrIiwibmV0d29yayIsImNhY2hlUHJvdmlkZXIiLCJ0aGVtZSIsImJhY2tncm91bmQiLCJtYWluIiwic2Vjb25kYXJ5IiwiaG92ZXIiLCJXZWIzQ29udGV4dCIsIkFwcFdlYjNQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNvbm5lY3QiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJnZXRBZGRyZXNzIiwiZ2V0TmV0d29yayIsImdldEJsb2NrTnVtYmVyIiwiZGlzY29ubmVjdCIsImNsZWFyQ2FjaGVkUHJvdmlkZXIiLCJsb2NhdGlvbiIsInJlbG9hZCIsInVzZUVmZmVjdCIsIm9uIiwiaGFuZGxlQWNjb3VudHNDaGFuZ2VkIiwiYWNjb3VudHMiLCJoYW5kbGVDaGFpbkNoYW5nZWQiLCJfaGV4Q2hhaW5JZCIsImhhbmRsZURpc2Nvbm5lY3QiLCJlcnJvciIsInJlbW92ZUxpc3RlbmVyIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVdlYjMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/providers/web3/index.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @providers */ \"./components/providers/index.ts\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers__WEBPACK_IMPORTED_MODULE_2__.AppWeb3Provider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\yousf\\\\tokenUiandGetBlances\\\\pages\\\\_app.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                    fileName: \"D:\\\\yousf\\\\tokenUiandGetBlances\\\\pages\\\\_app.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\yousf\\\\tokenUiandGetBlances\\\\pages\\\\_app.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUdjO0FBQ0U7QUFDQztBQUNoRCxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRTtrQkFFRSw0RUFBQ0osdURBQWU7OzhCQUNkLDhEQUFDRyxTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7O3dCQUFJOzhCQUM1Qiw4REFBQ0gsMERBQWM7Ozs7d0JBQUc7Ozs7OztnQkFDRjtxQkFDakIsQ0FDSDtDQUNIO0FBRUQsaUVBQWVDLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmtldHBsYWNlLXRlc3RpbmcvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuXG5pbXBvcnQgeyBBcHBXZWIzUHJvdmlkZXIgfSBmcm9tIFwiQHByb3ZpZGVyc1wiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIEB0cy1pZ25vcmU6IFVucmVhY2hhYmxlIGNvZGUgZXJyb3IgKi99XG4gICAgICA8QXBwV2ViM1Byb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgPC9BcHBXZWIzUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkFwcFdlYjNQcm92aWRlciIsIlRvYXN0Q29udGFpbmVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@walletconnect/web3-provider":
/*!***********************************************!*\
  !*** external "@walletconnect/web3-provider" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@walletconnect/web3-provider");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3modal":
/*!****************************!*\
  !*** external "web3modal" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("web3modal");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();