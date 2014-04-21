if (window == top) {
  chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
    sendResponse(findPlayers());
  });
}

var findPlayers = function() {
	
	var element = document.getElementById("movie_player");
	if(element!=null && (element.__proto__ == HTMLDivElement.prototype || element.__proto__ == HTMLEmbedElement.prototype)){	
		var invisible = document.createElement('input');
		invisible.type = 'hidden';
		invisible.id = 'loopervariable';
		invisible.value = 'false';
		(document.head||document.documentElement).appendChild(invisible);
		//script
		var s = document.createElement('script');
		s.src = chrome.extension.getURL('modplayer.js');
		s.onload = function() {
		    this.parentNode.removeChild(this);
		};
		(document.head||document.documentElement).appendChild(s);
		
		return "looper";
		
	}
	return null;
}
