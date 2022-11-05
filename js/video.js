var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("autoplay is set to " + video.autoplay)
	console.log("loop is set to " + video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	var video = document.querySelector("#player1")
	video.play();

	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	var video = document.querySelector("#player1")
	video.pause();
});

// Slow Down- Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down");
	var video = document.querySelector("#player1")
	video.playbackRate *= .9;
	console.log("video speed is " + video.playbackRate)

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up");
	var video = document.querySelector("#player1")
	video.playbackRate /= .9;
	console.log("video speed is " + video.playbackRate)

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip ahead");
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log("video current time is " + video.currentTime)

});

// Mute: Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute");
if (video.muted == false) {    
	video.muted = true;
	document.querySelector("#mute").innerHTML = "Unmute";
}
else {
	video.muted = false;
	console.log("unmute")
	document.querySelector("#mute").innerHTML = "Mute"
}
});


// Volume Slider: Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("click", function() {
	console.log("the current value is " + video.volume);
	video.volume = this.value / 100
	console.log("the current value is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

// Styled: utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("old school");
	document.querySelector(".video").classList.add('oldSchool');

	
});

// Original: Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	console.log("original");
	document.querySelector(".video").classList.remove('oldSchool')
	
});

