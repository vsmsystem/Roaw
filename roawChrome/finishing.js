//===========================================================	
//Inicializacao

var seletorCodigo = document.URL;
var extVSMonitorId = chrome.runtime.id;
const {host, hostname, href, origin, pathname, port} = document.location; //match padrão é host, ex: { host: "localhost:8006" }

getFromStorage();
setVsmId(extVSMonitorId);

if(!localStorage["roawConfigs"]){
	localStorage["roawConfigs"]='{"roawStatus":"disabled"}'
}

roawResource={
	roawStatus:()=>{
		const hardcodedResources = {
			"chat.openai.com":"chatgpt.js",
			"atlassian.net":"jira.js"
		}
		for(key in hardcodedResources){
			if (document.location.host.indexOf(key) > -1 ) {
					var s = document.createElement("script");
					s.src = `chrome-extension://${extVSMonitorId}/injectable-scripts/${hardcodedResources[key]}`;
					document.body.appendChild(s);
					console.log("injected", key, hardcodedResources[key])
			}
		}
	},
	vsmBar : ()=>{
		injectScript("vsm-bar.js");
	},
	default : ()=>{
		injectScript("default.js");
	},
	httpAutoStart:()=>{
		//
	}
};

let roawParsedConfigs = JSON.parse(localStorage["roawConfigs"]);
for(config in roawParsedConfigs){
	if(roawParsedConfigs[config]==true){
		roawResource[config]();
	}
}

				


chrome.runtime.onMessage.addListener(function(mensagem, sender, callback) {
	console.log("tabMessage",mensagem); 

	if (mensagem.pedido === 'localStorage') {
		var localStorageDaAba = localStorage;
		callback(localStorageDaAba);
	}

	if (mensagem.setLocalRoawConfig) {
		let roawParsedConfigs = JSON.parse(localStorage["roawConfigs"]);
		Object.assign(roawParsedConfigs,mensagem.setLocalRoawConfig)
		console.log("novaConfig",roawParsedConfigs)
		localStorage.setItem("roawConfigs",JSON.stringify(roawParsedConfigs));
		if(mensagem.setLocalRoawConfig?.vsmBar==true){
			roawResource.vsmBar()
		}
	}

	if (mensagem.updateLocalStorage) {
		for(key in mensagem.updateLocalStorage){
			localStorage.setItem(key,mensagem.updateLocalStorage[key]);
			console.log("updateStorage",key, mensagem.updateLocalStorage[key])
		}
	}

});

(async function(){
	try{
		stringfiedConfigs = await chrome.storage.sync.get("roawConfigs")
		//console.log("async", stringfiedConfigs.roawConfigs)
		runRoawConfigs(stringfiedJson.roawConfigs)
	}catch(ee){
		chrome.storage.sync.get("roawConfigs",function(data){
			//console.log("callback", data)
			runRoawConfigs(data.roawConfigs)
		});
	}
	

	function runRoawConfigs(stringfiedJson){
		configs = {};
		try{
			configs = JSON.parse(stringfiedJson)
		}catch(errorMsg){
			throw new Error("Erro: "+errorMsg)
		}
		
		if(configs[host]){
			var hostAlias = (typeof configs[host] == "string") ? configs[host] : host;
			if(configs[hostAlias]?.vsmbar){
				//injectScript("default.js");
				//injectScript("vsm-bar.js");
				//exemplo de como mandar mensagem do arquivo injetado para o background.js da extensão
				window.addEventListener("load", roaw_message_load, false);
				document.addEventListener("keyup", roaw_message_event, false);
				document.addEventListener("mouseup", roaw_message_event, false);
			}
		}
	
		console.log("roawConfig",{
			"raw":stringfiedJson,
			"parsed":configs,
			"selected":hostAlias,
			"params":configs[hostAlias]
		})
	}
}())



localStorage.setItem("document_end",Date.now())


//===========================================================	

function injectScript(scriptFile){
	var srcLink = `chrome-extension://${extVSMonitorId}/injectable-scripts/${scriptFile}`;
	var s = document.createElement("script");
	s.src = srcLink;
	document.body.appendChild(s);
}

//Message
async function roaw_message_load() {
	const response = await chrome.runtime.sendMessage({
		etatime: "load"
	});
}

function roaw_message_event() {
	
	const fullList = []
	const inputs = document.getElementsByTagName("input")
	const textareas = document.getElementsByTagName("textarea")
	
	for(i=0;i <= inputs.length;i++){
		if(inputs[i]?.id || inputs[i]?.name){
			fullList.push({"id": inputs[i]?.id, "name": inputs[i]?.name, "value": inputs[i]?.value})
		}
	}

	for(i=0;i <= textareas.length;i++){
		if(textareas[i]?.id || textareas[i]?.name){
			fullList.push({"id": textareas[i]?.id, "name": textareas[i]?.name, "value": textareas[i]?.value})
		}
	}

	try{
		chrome.runtime.sendMessage({
			etatime: JSON.stringify(fullList)
		}, function (response) {
			//nada
		});
	}catch(e){
		console.info("Error",e)
	}

}

function getFromStorage() {
	chrome.storage.sync.get({
		instancia: ''
	}, function (items) {
		localStorage.setItem('workingNow', items.instancia);
	});
}

function setVsmId(vsmid){
	var $wrapperX3 = document.querySelector('body');
	$wrapperX3.setAttribute("vsmid",vsmid);
	HTMLNovoX3 = ''
		+ '<roaw style="display:none" id="vsmid" >'+vsmid+'</roaw>'
		+ '<div id="vsmonitorbar" style="display:none;position:fixed;left:50%;top:0px;margin-left:-150px;width:300px;height:25px;background-color:#999999;z-index:9999; background-image:url(\'https://www.packtpub.com/graphics/9781783283415/graphics/3415OS_01_11.jpg\');">&nbsp;</div>'
		+ '';
	$wrapperX3.insertAdjacentHTML('afterbegin', HTMLNovoX3);
}

function exemploXhrModaAntiga(vsmid) {
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
		s.src = "chrome-extension://" + vsmid + "/Vweb/vsm-bar.js";
		document.body.appendChild(s);

	}
}