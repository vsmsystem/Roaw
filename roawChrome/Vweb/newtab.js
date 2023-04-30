const customNewTab = localStorage["customNewTab"]
const customNewTabUrl = localStorage["customNewTabUrl"]

if(!customNewTab || customNewTab == "chrome"){
  chrome.tabs.update({url:"chrome-search://local-ntp/local-ntp.html"})
}

if(customNewTab == "custom"){
  chrome.tabs.update({url:customNewTabUrl})
}
