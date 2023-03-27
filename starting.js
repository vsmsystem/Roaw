//Inicializacao do ambiente
var seletorCodigo = document.URL;
var extVSMonitorId = chrome.runtime.id;

//test importing with getURL, its working
(async () => {
    const src = chrome.runtime.getURL("injectable-scripts/events.js");
    const contentMain = await import(src);
    contentMain.main();
})();
localStorage.setItem("document_start","")
localStorage.setItem("document_end","")
localStorage.setItem("document_full_loaded","")
localStorage.setItem("document_dom_loaded","")

localStorage.setItem("document_start",Date.now())

window.addEventListener("load",function(){
	let dfldate = Date.now();
	localStorage.setItem("document_full_loaded",dfldate);


    let a = localStorage.getItem("document_start")
    let b = localStorage.getItem("document_dom_loaded")
    let c = localStorage.getItem("document_end")
    let d = localStorage.getItem("document_full_loaded")
    

    // console.log("a", a)
    // console.log("b", b)
    // console.log("c", c)
    // console.log("d", d)

    // console.log("dom", (b-a))
    // console.log("end", (c-b))
    // console.log("full", (d-c))
    // console.log("total", (d-a))
    



},false)
window.addEventListener("DOMContentLoaded",function(){
	let dcldate = Date.now();
	localStorage.setItem("document_dom_loaded",dcldate);
    // console.log("DOMContentLoaded")

    var s = document.createElement("script");
    s.type="text/javascript";
	s.src = "chrome-extension://" + extVSMonitorId + "/injectable-scripts/roaw-functions.js";
	document.body.appendChild(s);	

},false)

