
var video = document.getElementById('myVideo');

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML = '100%';
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log('pause');

});

document.querySelector("#slower").addEventListener("click", function() {
	console.log('slow down');
	video.playbackRate = video.playbackRate * .9; 
	console.log('speed is ' + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log('speed up');
	video.playbackRate = video.playbackRate / .9; 
	console.log('speed is ' + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log(video.currentTime);
	video.currentTime += 5;
	//video duration = 32.99687
	if (video.currentTime > 32.99687){
		video.currentTime = 0;
	}
	console.log('skip ahead');
	

});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false){
		video.muted = true;
		mute.innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		mute.innerHTML = "Mute";
	}
	console.log('mute');

});
 //slider not on click
document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this.value);
	video.volume = this.value * .01;
	volume.innerHTML = this.value + '%';
	console.log('slider');


});

document.querySelector("#old").addEventListener("click", function() {
	//video.style.filter = "grayscale(100%)"; Makes video grayscale without oldTime class
	video.classList.add("oldTime");
	console.log('old');

});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
	
	console.log('original');

});