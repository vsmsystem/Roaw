//===========================================================	
//Inicializacao do ambiente
var seletorCodigo = document.URL;
var extVSMonitorId = chrome.runtime.id;

function getFromStorage() {
	chrome.storage.sync.get({
		instancia: ''
	}, function (items) {
		/*
		var $wrapperX3 = document.querySelector('body');
		var HTMLNovoX3='<input type="hidden" id="vsm_instancia" value="'+items.instancia+'" />'
		$wrapperX3.insertAdjacentHTML('afterbegin', HTMLNovoX3);
		*/
		localStorage.setItem('workingNow', items.instancia);
	});
}
getFromStorage();



//===========================================================	
var $wrapperX3 = document.querySelector('body');
HTMLNovoX3 = ''
	+ '<input type="hidden" id="vsmid" value="' + extVSMonitorId + '" />'
	+ '<div id="vsmonitorbar" style="display:none;position:fixed;left:50%;top:0px;margin-left:-150px;width:300px;height:25px;background-color:#999999;z-index:9999; background-image:url(\'https://www.packtpub.com/graphics/9781783283415/graphics/3415OS_01_11.jpg\');">&nbsp;</div>'
	+ '';
$wrapperX3.insertAdjacentHTML('afterbegin', HTMLNovoX3);
/*
var $wrapperX4 = document.querySelector('body');
HTMLNovoX4=chrome.extension.getURL('/Vweb/barra_atendimento.html');
$wrapperX4.insertAdjacentHTML('beforeend', HTMLNovoX4);
*/
function criarBarraAtendimento() {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", chrome.extension.getURL('Vweb/vsm-bar.html'), true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("dados=teste");
	xhr.responseType = "text";
	xhr.onload = function () {
		var $wrapperX4 = document.querySelector('body');
		HTMLNovoX4 = this.response;
		$wrapperX4.insertAdjacentHTML('beforeend', HTMLNovoX4);
		var s = document.createElement("script");
		s.src = "chrome-extension://" + extVSMonitorId + "/Vweb/vsm-bar.js";
		document.body.appendChild(s);

	}
}
/*
	Injects
*/

// Inject in match =======================================================================================

/* Ideia:
	um array de strings gravado no localStorage usando aquela udeia de stringfy e parse , exemplo:
	["sistemamultas.com.br", "localhost"]
	um for itera esse array comparando seletorCodigo.indexOf com o indice do array e injeta.
	Assim da pra pelo menos adicionar e remover quais sites recebem inject no arquivo de options
*/

if (seletorCodigo.indexOf("sistemamultas.com.br") > -1 || seletorCodigo.indexOf("localhost") > -1  || seletorCodigo.match(/usebootstrap\.com\/preview\-no\-frame\/sb\-admin\-2/g)) {
	// Injetar
	var s = document.createElement("script");
	s.src = "chrome-extension://" + extVSMonitorId + "/injectable-scripts/default.js";
	document.body.appendChild(s);


	//Message
	function eta_message() {
		setTimeout(function () {
			console.log("msgSend - " + localStorage['time']);
			chrome.runtime.sendMessage({
				etatime: localStorage['time']
			}, function (response) {
				console.log(response.msg);
			});
		}, 1000);
	}
	
	//exemplo de como mandar mensagem do arquivo injetado para o background.js da extensão
	window.addEventListener("load", eta_message, false);

}
if (seletorCodigo.indexOf("lwtecnologia.atlassian.net") > -1 ) {

	var s = document.createElement("script");
	s.src = "chrome-extension://" + extVSMonitorId + "/injectable-scripts/jira.js";
	document.body.appendChild(s);

}