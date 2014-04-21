var state = {};
var listener = {};

function updatePage(tabId) {
  chrome.tabs.sendRequest(tabId, {}, function(player) {
    if (!player) {
      chrome.pageAction.hide(tabId);
    } else {
      if(listener[tabId]!=true){
	      chrome.pageAction.onClicked.addListener( function() {
	    	  if(state[tabId] == true){
	    		  state[tabId] = false;
	    		  chrome.tabs.executeScript(tabId,{code:"var enableelem = document.getElementById('loopervariable'); if(enableelem){enableelem.value = 'false';}" } );
	    		  chrome.pageAction.setIcon({tabId:tabId,path:"loopoff.png"});
	    	  }else{
	        	  state[tabId] = true;
	        	  chrome.tabs.executeScript(tabId,{code:"var enableelem = document.getElementById('loopervariable'); if(enableelem){enableelem.value = 'true';}" } );
	        	  chrome.pageAction.setIcon({tabId:tabId,path:"loopon.png"});
	    	  }
	    	});
	      listener[tabId]=true;
      }
      chrome.pageAction.show(tabId);
    }
  });
}

chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
  chrome.pageAction.hide(tabId);
  if (change.status == "complete") {
	  updatePage(tabId);
  }
});
