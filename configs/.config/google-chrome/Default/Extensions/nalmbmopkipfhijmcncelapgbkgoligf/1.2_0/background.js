// Called when the user clicks on the browser action icon.
//chrome.browserAction.onClicked.addListener(function(tab) {
chrome.browserAction.onClicked.addListener(function(tab) {
  // We can only inject scripts to find the title on pages loaded with http
  // and https so for all other pages, we don't ask for the title.
  if ((tab.url.indexOf('http:') == 0 ||
      tab.url.indexOf('https:') == 0) &&
      tab.url.indexOf('pdf.fivefilters.org'.toLowerCase()) == -1) {
    //browser.tabs.update(tab.id, { url: 'https://pdf.fivefilters.org/simple-print/?src=extension#'+encodeURIComponent(tab.url) });
    chrome.tabs.update(tab.id, { 
      url: 'https://pdf.fivefilters.org/simple-print/?ext=chrome&url='+encodeURIComponent(tab.url) 
    });
  } else {
    console.log('not HTTP');
    // TODO: tell user
  }
});