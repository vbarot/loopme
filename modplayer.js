var elementz = document.getElementById("movie_player");
if(elementz){
	elementz.addEventListener("onStateChange", "onPlayerStateChange");
}

function onPlayerStateChange(newState){
	var enableelem = document.getElementById("loopervariable");
	if(newState == 0 && enableelem.value == 'true'){
		elementz.playVideo();
	}
}