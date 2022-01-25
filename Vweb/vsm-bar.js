function tmaactivate(){
	var myVar = setInterval(function(){ tmaclock() }, 1000);
	function tmaclock() {
		var d = new Date();
		var t = d.toLocaleTimeString();
		document.getElementById("tmaclock").innerHTML = t;
	}
}
tmaactivate();