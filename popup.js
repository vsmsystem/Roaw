// Pegar a URL da aba ativa ao abrir o popup
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0]; // retorna um array com 1 indice, a aba ativa
    $("#url-aba").html(currentTab.url)// currentTab.url tem propriedades como currentTab.id, currentTab.url, etc
});

document.querySelector("#inputTesting").addEventListener("keydown",(e)=>{
    console.log(e.key)
    if(e.key=="Enter"){
        msgTest({
            "title":"Teste",
            "message":document.querySelector("#inputTesting").value
        })
    }
})

//https://avatars.githubusercontent.com/vsmsystem
//https://raw.githubusercontent.com/vsmsystem/Roaw/main/manifest.json

function setDefaultConfig(){
    const defaultRoawConfigs = `{
        "github" : "vsmsystem",
        "all" : {},
        "default": {
            "vsmbar" : true,
            "inject" : ["default.js"]
        },
        "www.vsmsystem.com" : {
            "vsmbar" : true,
            "inject" : ["default.js"]
        },
        "localhost:8006" : "default",
        "localhost:9001" : "default",
        "www.etc.com.br" : "default"
    }`;
    chrome.storage.sync.set({"roawConfigs":defaultRoawConfigs});
    console.log("default", defaultRoawConfigs)
    return defaultRoawConfigs;
}

function notify(titulo, mensagem, imagem) {
	Notification.requestPermission(function () {
		var notification = new Notification(titulo, {
			icon: 'chrome-extension://' + chrome.runtime.id + '/Vweb/images/notify/coin-kk.png',
			body: mensagem,
			requireInteraction: true
		});
		notification.onclick = function () {
			//func
		}
	});
}

async function getRoawConfigs(){
    try{
        return await chrome.storage.sync.get("roawConfigs");
    }catch(e){}
}

async function refreshRoawConfigs(){
    try{
        let conf = await getRoawConfigs();
        $("#roawConfigs").val(conf.roawConfigs);
    }catch(e){
        chrome.storage.sync.get("roawConfigs", data =>{
            console.log("data",data)
            if(!data.roawConfigs){
                data.roawConfigs= setDefaultConfig()
            }
            $("#roawConfigs").val(data.roawConfigs);
        })
    }
}

refreshRoawConfigs();

// $(async function(){
//     let conf = await getRoawConfigs();
//     if(conf){
//         if(!conf.roawConfigs || conf.roawConfigs == ""){
//             setDefaultConfig(defaultRoawConfigs);
//             conf = await getRoawConfigs();
//         }
//         $("#roawConfigs").val(conf.roawConfigs);
//     }else{
//         refreshRoawConfigs()
//     }
// })

// document.getElementById("btn-adjust")
$("#ajustartema").on("click", function () {
    $("body").toggleClass("night")
    $("#navbar").toggleClass("navbar-inverse")
});

$("#roawConfigs").on("change", function () {
    chrome.storage.sync.set({"roawConfigs":$("#roawConfigs").val()});
});

let popupScreens={
    network: ()=> {
        //
    }
}
$(".sideMenu").on("click", function (e) {
    let view = e.target.getAttribute("view")
    $(".screens").hide();
    $(`#${view}`).show();

    if(popupScreens[view]){
        popupScreens[view]();
    }
});





async function msgTest(obj) {

	const response = await chrome.runtime.sendMessage({
		createNotification: obj
	});
	console.log("messageReturned",response);

}



//====================================================
chromeStorage = {
	getItem:async function(key){
		return await chrome.storage.sync.get(key);
	},
    setItem:async function(obj,callback){
		return await chrome.storage.sync.set(obj);
	},
    pushItem:async function(key,value){
        let items = await this.getItem(key);
        if(!Array.isArray(items[key])){
            items[key] = [];
        }
        items[key].unshift(value)
        res = await chrome.storage.sync.set(items);
	}
};
// let obj = await chrome.storage.sync.get("requestHistory")
//===================================================




