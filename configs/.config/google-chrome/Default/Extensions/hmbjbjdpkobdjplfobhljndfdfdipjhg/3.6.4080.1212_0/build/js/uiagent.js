"use strict";var uiAgent=function(){function e(){(0<arguments.length&&void 0!==arguments[0]?arguments[0]:0)&&($("#login-pwd").val(""),joinmeeting.enableLoginSubmitBtn(!1)),$("#join-panel,#mask,#videobcg").removeClass("hideMe"),$(".tab3").removeClass("hideMe forceHide"),$("#login-form").removeClass("forceHide").find("#login-email").focus(),$(".index-up .loading-container").addClass("hideMe"),$("#login-submit .text-label").text("Sign In"),$(".login-loading,.login-loading-container").addClass("hideMe"),$(".container-login").removeClass("screen-left"),$("#container-sso").addClass("screen-right"),client.showSignedOutUI()}function t(e){$(".turnpage-button-group").stop(),e?$(".turnpage-button-group").show():$(".turnpage-button-group").hide()}return{refreshForHostChange:function(e){client.refreshToolbarButtonTextForHost(e)},showPromptForHostChange:function(e){var t=e?e+" is the host now.":"You are the host now.";inmeeting.showNotice(t)},refreshChatPriviledgeUI:function(){chat.refreshChatPriviledgeUI(chatObject.attendeeChatPriviledge)},removeWaitingRoomDiv:function(){$("#waiting_room").remove()},refreshParticipantAvatar:function(t){util.ajax(t.smallPicUrl,function(e){t.picBlobUrlSmall=window.URL.createObjectURL(e)},function(){})},removeChatUserFromUserList:function(e){chat.removeChatUserFromUserListIncludeWindow(e)},addChatUserToUserList:function(e){chat.addChatUserToUserListIncludeWindow(e)},refreshChatUser:function(e){chat.refreshChatUserIncludeWindow(e)},showEnterMeetingPassword:function(e,t){client.showPasswordForm(1,t)},logoutSuccess:function(){e(1)},showWebinarRegistration:function(){client.showRegister(1)},refreshAttendeeAudioStatus:function(e){},showWaitingForHost:function(e){client.showWaiting()},showJoinConfFail:function(e,t,n,i,o,a){client.createJoinConfFailWindow(e,t,n,i,o,a)},onMeetingLockChange:function(e){client.showLockStatusOnTitle(e)},showRemainMeetingTime:function(e){var t=common.formatSeconds(e);65535===e?client.showRemainingMeetingTime(0,t):client.showRemainingMeetingTime(1,t)},refreshAttendeeChatUI:function(e){chat.refreshAttendeeChatUI(e)},refreshAttendeeAudioType:function(e){},showSignedInUI:function(){joinmeeting.signInStateCheck()?(client.showSignedInUI(),joinmeeting.saveScreenName(userStatus.userName)):e()},showSignedOutUI:e,appUIInit:function(){client.bindJoinMeetingUIEvt()},startOrJoinMeetingTimeOut:function(){$("#content").removeClass("hideMe"),$(".connecting").addClass("hideMe"),uiAgent.showJoinConfFail("invalid","","START_MEETING_TIME_OUT","")},onLogouting:function(){$(".signed-container").addClass("forceHide")},showConnecting:function(e){client.showConnecting(e)},meetingUIInit:function(){var e;client.meetingUIinit(),e=g.getMeetingStatusObj().isWebinar?"webinar":"meeting",$('[data-bind="meeting-type"]').text(e)},initToolbar:function(){client.initToolbar()},showMeetingAlert:function(e){client.closeDivWindow("window-meetingalert"),$(".confirm-meetingalert .div-text").text(e),window.setTimeout(function(){client.showDivWindow("window-meetingalert")},100)},refreshSwitchView2:function(){switch(g.getMeetingStatusObj().videoMode){case g.getConstants().VIDEO_MODE_SPEAKER:$(".switch-view span").text("Gallery View").attr("title","Gallery View (Ctrl+Alt+3)"),$(".switch-view span").attr("data-name","galleryview"),$(".switch-view i").removeClass().addClass("img-galleryview img-sprite"),inmeeting.refreshCurrentActiveSpeaker(1),inmeeting.rectTextShow&&inmeeting.showTalkingUserText(1);break;case g.getConstants().VIDEO_MODE_GALLERY:$(".switch-view span").text("Speaker View").attr("title","Speaker View (Ctrl+Alt+1)"),$(".switch-view span").attr("data-name","speakerview"),$(".switch-view i").removeClass().addClass("img-speakerview img-sprite"),inmeeting.showTalkingUserBar(0),inmeeting.rectTextShow&&inmeeting.showTalkingUserText(0);break;case g.getConstants().VIDEO_MODE_THUMBNAIL:$(".switch-view span").text("Thumbnail View").attr("title","Thumbnail View"),$(".switch-view span").attr("data-name","thumbnailview"),$(".switch-view i").removeClass().addClass("img-thumbnailview img-sprite"),$(".attendee").css("outline","none")}},refreshMuteButton:function(e){client.refreshMuteButton(e)},updateVideoButton:function(e){client.updateVideoButton(e)},refreshViewModeForLayout:function(){},refreshRecordingStatusForLayout:function(){recordStatusObject.inRecording?$("body").addClass("inRecording"):$("body").removeClass("inRecording")},showWaitingRoomNotice:function(e,t,n,i){client.showWaitingRoomNotice(e,t,n)},showShareOption:function(e){e?(client.initHeaderBar(),$(".headbar").removeClass("hideMe")):($(".headbar").addClass("hideMe"),client.uninitHeaderBar())},showIsStartingShare:function(e){var t=$("#shareArea .share-starting-wrapper");e?t.removeClass("forceHide"):t.addClass("forceHide")},onInmeetingKeydown:function(e){},onInmeetingKeyUp:function(e){client.onInmeetingKeyup(e)},showSwitchViewAndTurnPage:function(e){e?(client.showSwitchView(1),t(1)):(client.showSwitchView(0),t(0))},showTurnPage:t}}();