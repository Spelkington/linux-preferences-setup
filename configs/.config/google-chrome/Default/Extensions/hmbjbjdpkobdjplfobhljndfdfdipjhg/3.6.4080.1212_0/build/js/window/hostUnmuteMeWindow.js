"use strict";var hostUnmuteMeWindow=function(){function n(){isInsideMainAppWindow()?(mainAppHtmlWindow.client.uninitMove("window-hostunmuteme","winbar-hostunmuteme",!0),$("#window-hostunmuteme").addClass("forceHide")):window.close()}return{initHostUnmuteMeWindow:function(e){!function(e){switch($(".window-hostunmuteme .body-hostunmuteme .text").addClass("forceHide"),$(".window-hostunmuteme .unmuteMe, .window-hostunmuteme .joinAudio").addClass("forceHide"),mainAppHtmlWindow.client.initMove("window-hostunmuteme","winbar-hostunmuteme",0),e){case"unmuteMe":$(".window-hostunmuteme .unmute, .window-hostunmuteme .unmuteMe").removeClass("forceHide");break;case"showUnmute":$(".window-hostunmuteme .unmute_spotlight, .window-hostunmuteme .unmuteMe").removeClass("forceHide");break;case"showJoinAudio":$(".window-hostunmuteme .unmute_joinAudio, .window-hostunmuteme .joinAudio").removeClass("forceHide")}}(e),$(".footer").off("click").on("click","span",function(e){"unmuteMe"===e.target.dataset.action?mainAppHtmlWindow.client.hostUnmuteMeOK():"joinAudio"===e.target.dataset.action&&mainAppHtmlWindow.client.showJoinAudioWindow(),n()}),$(".close-hostunmuteme").off("click").on("click",function(e){n()})}}}();