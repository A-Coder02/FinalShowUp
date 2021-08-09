





function openSearchBox(){
	document.getElementById("search-box").style.height = "57px";
	document.getElementById("search-box").style.paddings = "30px";
	console.log('ggg');
}
function closeSearchBox(){
	document.getElementById("search-box").style.height = "0px";
	document.getElementById("search-box").style.paddings = "0px";
}
function openSliderMenu(){
	document.getElementById('sliderMenu').style.width ='85vw';
	document.getElementById('openSliderMenuButton').style.left = "-50px";
	document.getElementById('closeSliderMenuButton').style.right = "0px";
	document.getElementById("sliderMenu").style.boxShadow = "1em 0em 0em 40em rgb(0 0 0 / 74%) ";
}
function closeSliderMenu(){
	document.getElementById('sliderMenu').style.width ='0vw';
	document.getElementById('openSliderMenuButton').style.left = "0px";
	document.getElementById('closeSliderMenuButton').style.right = "40px";
	document.getElementById("sliderMenu").style.boxShadow = "0em 0em 0em 0em rgb(0 0 0 / 74%) ";
}
function closeSubAlert(){
	document.getElementById("subAlert").style.display = "none";
	document.getElementById("subAlert").style.opacity = "0";
}
function bIcoSli(){
	document.getElementById("bellIcon").style.left = "0";
	document.getElementById("bellIcon").style.maxWidth = "100vw";
	document.getElementById("openBell").style.display = "none";
	document.getElementById("closeBell").style.display = "block";
}
function bIcoSli_Close(){
	document.getElementById("bellIcon").style.left = "-407px";
	document.getElementById("openBell").style.display = "block";
	document.getElementById("closeBell").style.display = "none";
}
function b2Nop(){
	document.getElementById("b2").style.left = "-382px";
	// document.getElementById("b2").style.bottom = "30vh";
	document.getElementById("b2").style.background = "transparent";
}




