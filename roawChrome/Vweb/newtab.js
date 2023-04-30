const customNewTab = localStorage["customNewTab"]
const customNewTabUrl = localStorage["customNewTabUrl"]

if(!customNewTab || customNewTab == "chrome"){
  chrome.tabs.update({url:"chrome-search://local-ntp/local-ntp.html"})
}

if(customNewTab == "custom"){
  chrome.tabs.update({url:customNewTabUrl})
}

function getAllBookmarks(){
  chrome.bookmarks.getTree(function (results) {
    window.bookmarks = [];
    function traverseBookmarks(node) {
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          traverseBookmarks(node.children[i]);
        }
      } else {
        bookmarks.push({ title: node.title, url: node.url });
      }
    }
    for (var i = 0; i < results.length; i++) {
      traverseBookmarks(results[i]);
    }
  });

}