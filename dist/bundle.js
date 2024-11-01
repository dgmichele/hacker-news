/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./asset/js/app.js":
/*!*************************!*\
  !*** ./asset/js/app.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./asset/css/style.css\");\n/* harmony import */ var _img_Logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/Logo.png */ \"./asset/img/Logo.png\");\n\r\n\r\n\r\n// Otteniamo il logo (configurazione Webpack)\r\nconst logoImage = document.querySelector('.img-logo');\r\nlogoImage.src = _img_Logo_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\n// Variabile d'ambiente per gestire l'API\r\nconst urlAPI = \"https://hacker-news.firebaseio.com/v0\";\r\n\r\n// Otteniamo elementi UI principali\r\nconst newsContainer = document.getElementById(\"news-container\");\r\nconst loadMoreButton = document.getElementById(\"load-more\");\r\n\r\n// Inizializziamo la creazione delle news\r\nlet newsID = [];\r\nlet startNewsBlock = 0;\r\nconst updatedNewsBlock = 10;\r\n\r\n// Qui otteniamo la lista di ID delle ultime news\r\nasync function fetchNewsID() {\r\n    try {\r\n        const response = await fetch(`${urlAPI}/newstories.json`);\r\n        if (!response.ok) throw new Error(\"Error in retrieving news list\");\r\n        \r\n        newsID = await response.json();\r\n        loadMoreNews();  // Carica il primo blocco di news allo start\r\n    } catch (error) {\r\n        console.error(\"Error:\", error);\r\n    }\r\n}\r\n\r\n// Qui otteniamo i dettagli (titolo, link, data) di una singola news tramite ID\r\nasync function fetchNewsDetails(news) {\r\n    try {\r\n        const response = await fetch(`${urlAPI}/item/${news}.json`);\r\n        if (!response.ok) throw new Error(`Error in retrieving details for news with ID ${news}`);\r\n        \r\n        const newsData = await response.json();\r\n        displayNews(newsData);  // Visualizziamo la news recuperata\r\n    } catch (error) {\r\n        console.error(\"Error:\", error);\r\n    }\r\n}\r\n\r\n// Qui carichiamo e visualizziamo il nuovo blocco di 10 notizie\r\nasync function loadMoreNews() {\r\n    const newsToLoad = newsID.slice(startNewsBlock, startNewsBlock + updatedNewsBlock);\r\n    for (const id of newsToLoad) {\r\n        await fetchNewsDetails(id);\r\n    }\r\n    startNewsBlock += updatedNewsBlock;  // Aggiorna il conteggio delle news caricate\r\n}\r\n\r\n// Qui creiamo il contenitore della news, con titolo, data e bottone del link\r\n// title, url e date sono le proprietà dell'oggetto JSON che otteniamo nella funzione fetchNewDetails()\r\nfunction displayNews(news) {\r\n    const newsGrid = document.createElement(\"div\");\r\n    newsGrid.classList.add(\"news-grid\");\r\n\r\n    const title = document.createElement(\"h3\");\r\n    title.textContent = news.title;\r\n    const link = document.createElement(\"a\");\r\n    link.classList.add(\"news-button\");\r\n    link.href = news.url;\r\n    link.target = \"_blank\";\r\n    link.rel = \"noopener\";\r\n    link.textContent = `Read more↗️`;\r\n\r\n    const date = document.createElement(\"p\");\r\n    date.classList.add(\"date\");\r\n    const formattedDate = new Date(news.time * 1000).toLocaleDateString(\"en-EN\");\r\n    date.textContent = `${formattedDate}`;\r\n\r\n    newsGrid.append(title);\r\n    newsGrid.append(date);\r\n    newsGrid.append(link);\r\n    newsContainer.append(newsGrid);\r\n}\r\n\r\n// Qui gestiamo il click sul bottone \"load more\"\r\nloadMoreButton.addEventListener(\"click\", loadMoreNews);\r\n\r\nfetchNewsID();\n\n//# sourceURL=webpack://hacker-news/./asset/js/app.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./asset/css/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./asset/css/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ✏️ GENERALE */\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody{\r\n    font-family: \"Space Mono\", serif;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    background-color: #dbe7eb;\r\n}\r\n\r\nh1, h2, h3{\r\n    color: #1e1e1e;\r\n    font-weight: 800;\r\n}\r\n\r\nh1{\r\n    font-size: 45px;\r\n    line-height: 1.2;\r\n    letter-spacing: -2px;\r\n    margin-bottom: 10px;\r\n }\r\n\r\n h2{\r\n    text-align: center;\r\n    font-size: 32px;\r\n    line-height: 1.2;\r\n    letter-spacing: -1.4px;\r\n }\r\n\r\n h3{\r\n    font-size: 20px;\r\n    line-height: 1.3;\r\n    letter-spacing: -0.8px;\r\n    margin-bottom: 10px;\r\n }\r\n\r\n p{\r\n    font-size: 17px;\r\n    font-weight: 400;\r\n    color: #5f5f5f;\r\n }\r\n\r\n@media screen and (max-width: 1025px) and (min-width:601px){\r\n\r\n    .h1-inner{\r\n        max-width: 650px;\r\n        min-width: 650px;\r\n    }\r\n\r\n    h1{\r\n        font-size: 52px;\r\n    }\r\n\r\n    h2{\r\n        font-size: 38px;\r\n     }\r\n\r\n    h3{\r\n        font-size:23px;\r\n    }\r\n\r\n    p{\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1026px){\r\n\r\n    .h1-inner{\r\n        max-width: 750px;\r\n        min-width: 750px;\r\n    }\r\n\r\n    h1{\r\n        font-size: 60px;\r\n    }\r\n\r\n    h2{\r\n        font-size: 42px;\r\n     }\r\n\r\n    h3{\r\n        font-size:25px;\r\n    }\r\n\r\n    p{\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n/* ✏️ HEADER */\r\n\r\nheader{\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: #CBE6EF;\r\n    border-bottom: 2px solid black;\r\n    padding: 10px 0 10px 0;\r\n}\r\n\r\n.header-container{\r\n    width: 90%;\r\n    display: flex;\r\n}\r\n\r\n.header-inner{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.logo{\r\n    margin-bottom: -5px;\r\n}\r\n\r\n.img-logo{\r\n    width: 150px;\r\n}\r\n\r\n.header-button{\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    background-color:#003366;\r\n    padding: 8px 15px;\r\n    font-size: 14px;\r\n    color:#F0F2F3;\r\n    border: none;\r\n    border-radius: 7px;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\r\n\r\n.header-button:hover{\r\n    background-color: #0d4a86;\r\n}\r\n\r\n.header-button:active{\r\n    background-color: #215f9e;\r\n}\r\n\r\n@media screen and (max-width: 1025px) and (min-width:601px){\r\n    .header-container{\r\n        max-width: 85%;\r\n    }\r\n\r\n    .header-button{\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1026px){\r\n    .header-container{\r\n        max-width: 1200px;\r\n    }\r\n\r\n    .header-button{\r\n        font-size: 18px;\r\n    }\r\n\r\n    .img-logo{\r\n        width: 200px;\r\n    }\r\n}\r\n\r\n/* ✏️ TITOLO H1 */\r\n\r\n.h1-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n }\r\n\r\n .h1-inner{\r\n    width: 90%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction:column;\r\n    align-items: center;\r\n    text-align: center;\r\n }\r\n\r\n @media screen and (max-width: 1025px) and (min-width:601px){\r\n    .h1-container{\r\n        margin-top: 60px;\r\n        margin-bottom: 60px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1026px){\r\n    .h1-container{\r\n        margin-top: 75px;\r\n        margin-bottom: 75px;\r\n    }\r\n}\r\n\r\n/* ✏️ NEWS */\r\n\r\n.news{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n    margin-bottom: 35px;\r\n}\r\n\r\n.news-container{\r\n    width: 90%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction:column; \r\n    gap:20px;\r\n}\r\n\r\n.news-grid{\r\n    border: 2px solid #1e1e1e;\r\n    background-color:#edf3f5;\r\n    padding: 15px;\r\n}\r\n\r\n.date{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.news-button{\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    padding: 8px 15px;\r\n    font-size: 14px;\r\n    color: #003366;\r\n    border: 2px solid #003366;\r\n    border-radius: 7px;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\r\n\r\n.news-button:hover{\r\n    color: #0d4a86;\r\n    border-color: #0d4a86;\r\n}\r\n\r\n.news-button:active{\r\n   color: #215f9e;\r\n   border-color: #215f9e;\r\n}\r\n\r\n@media screen and (max-width: 1025px) and (min-width:601px) {\r\n    \r\n    .news{\r\n        margin-top: 30px;\r\n        margin-bottom: 40px;\r\n    }\r\n    \r\n    .news-container{\r\n        flex-direction:row;\r\n        max-width: 85%;\r\n        gap: 20px;\r\n        align-items: stretch;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .news-grid{\r\n        width: 48.4%;\r\n        padding: 20px;\r\n    }\r\n\r\n    .news-button{\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1026px) {\r\n\r\n    .news{\r\n        margin-top: 35px;\r\n        margin-bottom: 45px;\r\n    }\r\n    \r\n    .news-container{\r\n        flex-direction:row;\r\n        max-width: 1200px;\r\n        gap: 20px;\r\n        align-items: stretch;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .news-grid{\r\n        width: 49.1%;\r\n        padding:25px;\r\n    }\r\n\r\n    .news-button{\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n/* ✏️ LOAD MORE BUTTON */\r\n\r\n.button-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 100px;\r\n}\r\n\r\n#load-more{\r\n    font-family: \"Space Mono\", serif;\r\n    font-weight: 800;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    background-color:#003366;\r\n    padding: 15px 35px;\r\n    font-size: 14px;\r\n    color:#F0F2F3;\r\n    border: none;\r\n    border-radius: 7px;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    outline: none;\r\n }\r\n\r\n#load-more:hover{\r\n    background-color: #0d4a86;\r\n}\r\n\r\n#load-more:active{\r\n    background-color: #215f9e;\r\n}\r\n\r\n@media screen and (max-width: 1025px) and (min-width:601px) {\r\n    \r\n    #load-more{\r\n        font-size: 16px;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width: 1026px) {\r\n\r\n    #load-more{\r\n        font-size: 18px;\r\n    }\r\n\r\n}\r\n\r\n/* ✏️ FOOTER */\r\n\r\n.footer-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    background-color: #CBE6EF;\r\n    border-top: 2px solid #1e1e1e ;\r\n    padding: 50px;\r\n}\r\n\r\n.footer-inner{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    gap:20px;\r\n}\r\n\r\n.icon{\r\n    color: #003366;\r\n    margin-left: 0;\r\n    font-size: 30px;\r\n    transition: 0.3s;\r\n}\r\n\r\n.icon:hover{\r\n    color: #0d4a86;\r\n}\r\n\r\n.icon:active{\r\n    color: #215f9e;\r\n}\r\n\r\n.footer-text{\r\n    text-align: center;\r\n    font-size: 15px ;\r\n    margin-top: 20px;\r\n    margin-bottom: 0;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hacker-news/./asset/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://hacker-news/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://hacker-news/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./asset/css/style.css":
/*!*****************************!*\
  !*** ./asset/css/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./asset/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://hacker-news/./asset/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://hacker-news/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://hacker-news/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://hacker-news/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://hacker-news/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://hacker-news/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://hacker-news/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./asset/img/Logo.png":
/*!****************************!*\
  !*** ./asset/img/Logo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1316b264be34b57e203d.png\";\n\n//# sourceURL=webpack://hacker-news/./asset/img/Logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./asset/js/app.js");
/******/ 	
/******/ })()
;