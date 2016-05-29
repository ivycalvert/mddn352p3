var allCookies;

$(document).ready(function(){
	allCookies = document.cookie;
	document.cookie = "testkey=testvalue";
	console.log(document.cookie);
});