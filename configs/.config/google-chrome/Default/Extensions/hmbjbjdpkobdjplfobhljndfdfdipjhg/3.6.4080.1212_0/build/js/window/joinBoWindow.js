"use strict";var joinBoContext,joinBo={iniJoinBoWindow:function(i,o){joinBoContext={bid:i,meetingName:o},$(".bo-name").text(joinBoContext.meetingName),$(".toolbar .join-meeting").attr("data-bid",joinBoContext.bid),$("span.later").off("click").click(function(){window.close()}),$(".toolbar .join-meeting").off("click").click(function(){var i=$(this).data("bid");mainAppHtmlWindow.inmeeting.joinBO(i)}),a11y(),accessibility.focusWithoutOutline(".info")}};