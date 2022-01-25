var seletorCodigo = document.URL;
var extVSMonitorId = chrome.runtime.id;



//ManobraUnica =======================================================================================

if(seletorCodigo.match(/Manobraunica/g)){
setTimeout(function(){ 
	var $wrapper = document.getElementsByTagName('body');
    HTMLNovo='<div id="rinloading" style="border:solid 2px #000000;position:absolute;display:fixed;background:#ffffff;width:300px;height:100px;;top:300px;"><img style="float:left;" id="muloadingimg" src="http://gpsco.gvt.com.br/gps/co/atendimento/resources/images/load.gif?pfdrid_c=true" alt=""> <h2>Carregando RIN </h2></div>';
	$wrapper.insertAdjacentHTML('afterbegin', HTMLNovo);
 }, 3000);
}

console.log('teste123');