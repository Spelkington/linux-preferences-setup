chrome.runtime.onInstalled.addListener(function(d){"install"==d.reason&&chrome.runtime.openOptionsPage()});