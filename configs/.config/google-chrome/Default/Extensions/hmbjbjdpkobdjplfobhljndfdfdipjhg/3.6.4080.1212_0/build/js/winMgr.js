"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_createClass=function(){function i(n,o){for(var e=0;e<o.length;e++){var i=o[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,o,e){return o&&i(n.prototype,o),e&&i(n,e),n}}();function _classCallCheck(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}var Window=function(){function i(n,o,e){_classCallCheck(this,i),this.winId=n,this.window=o,this.isFullscreen=e}return _createClass(i,[{key:"getWindow",value:function(){return this.window}},{key:"isFullscreen",value:function(){return this.isFullscreen}},{key:"setIsFullscreen",value:function(n){this.isFullscreen=n}}]),i}(),winMgr=function(){var s={inviteWin:null,joinAudioWindow:null,chatWin:null,plistWin:null,endedWin:null,leaveMeetingWindow:null,askForHelpWin:null,fileWin:null,tooltipWin:null,ccAssignToWin:null,ccAssignTypeWin:null,ccMsgWin:null,ccChoiceWin:null,ccTooltipWin:null,typerWin:null,shareMainWindow:null,shareMoreWindow:null,pollWindow:null,settingWindow:null,hostAskForHelpWin:null,invalidRoomWindow:null,qaWin:null,hostUnmuteMeWin:null,boWin:null,joinBoWin:null,leaveBoWindow:null,leaveBoChoiceWin:null,countDownWin:null,assignBoWin:null,delBoWin:null,createBoWin:null,moveToBoWin:null,exchangeBoWin:null,boTooltipWin1:null,boTooltipWin2:null,joinleaveBoPromptWin:null,broadcastBoWin:null,boTooltipWin:null,meetingInvitationWin:null};function c(n){return"string"==typeof n&&s[n]?s[n].getWindow():null}function d(n,o,e){!s[n]||isNaN(o)||isNaN(e)||(s[n].getWindow().outerBounds.left=o,s[n].getWindow().outerBounds.top=e)}function a(n,o,e){!s[n]||isNaN(o)||isNaN(e)||(s[n].getWindow().outerBounds.width=o,s[n].getWindow().outerBounds.height=e)}var t=!1;function W(n){"boolean"==typeof n&&(t=n)}function f(){return new Promise(function(i,n){!function n(){var o=chrome.app;if(o&&!t){var e=o.window;W(!0),i(e)}else registerTimer(100,n)}()})}return{getWinByWinId:c,getWinMap:function(){return s},setWin:function(n,o){n&&o&&(s[n]=o)},createWindow:function e(i,t,l,r){if("string"==typeof i&&"string"==typeof t&&"object"===(void 0===l?"undefined":_typeof(l))){var n=c(i);if(n)n.focus();else if(void 0!==l.width&&void 0!==l.height){var u=function(n){var o=Math.round(mainWindow.innerBounds.left+(mainWindow.innerBounds.width-n.width)/2),e=Math.round(mainWindow.innerBounds.top+(mainWindow.innerBounds.height-n.height)/2);o<0&&(o=0),e<0&&(e=0);var i={width:n.width,height:n.height,left:void 0===n.left?o:n.left,top:void 0===n.top?e:n.top};return n.minWidth&&n.minHeight&&Object.assign(i,{minWidth:n.minWidth,minHeight:n.minHeight}),i}(l);l.resizable=l.resizable||!1,l.alwaysOnTop=l.alwaysOnTop||!1;var o={id:i,outerBounds:u,frame:"none",resizable:l.resizable||!1,alwaysOnTop:!l.resizable,hidden:!0,state:"normal"};common.hasApi_AlwaysOnTopWindow()||delete o.alwaysOnTop,f().then(function(n){n.create(t,o,function(n){if(n){var o=new Window(i,n,!1);n.onClosed.addListener(function(){var n;(n=i)&&s[n]&&(s[n]=null)}),n.contentWindow.document.addEventListener("DOMContentLoaded",function(){n.contentWindow.console.log("Dom load end."),n.contentWindow.setMainAppWindowObject(mainWindow),n.contentWindow.commonWin.initCommonWin()}),n.contentWindow.addEventListener("load",function(){if(d(i,u.left,u.top),a(i,u.width,u.height),"function"==typeof r)try{r.call(null,n)}catch(n){console.error("error in cb: ",n)}n.show()}),winMgr.setWin(i,o),n.onRestored.addListener(function(){o.setIsFullscreen(!1)}),n.onFullscreened.addListener(function(){o.setIsFullscreen(!0)}),W(!1)}else util.deferTodo(function(){W(!1),e(i,t,l,r)},2e3)})})}else console.error("Create window failed, width or height undefined")}else console.error("Create window failed, check params.")},setWinPosition:d,setWinSize:a,setChromeWindowLock:W,closeWindowByWindowId:function(n){"string"==typeof n&&s[n]&&(s[n].getWindow().close(),s[n]=null)},closeAllWindows:function(){for(var n in commonModule.rendererMgr.getInstance().closeAllWindows(),s)s[n]&&(s[n].getWindow().close(),s[n]=null);window.close()},closeAllWindowExceptWinByID:function(n){for(var o in"string"==typeof n&&(n=[n]),s)s[o]&&n.indexOf(o)<0&&(s[o].getWindow().close(),s[o]=null);n.indexOf("")<0&&window.close()},getChromeAppWindow_promise:f,setCreateWindowLock:W,callWindowFunction:function(n,o,e){if("string"==typeof n){var i=c(n);if(i&&i.contentWindow&&i.contentWindow[o]&&"function"==typeof i.contentWindow[o])try{i.contentWindow[o](e)}catch(n){}}}}}();