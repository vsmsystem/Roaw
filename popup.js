// Pegar a URL da aba ativa ao abrir o popup
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0]; // retorna um array com 1 indice, a aba ativa
    $("#url-aba").html(currentTab.url)// currentTab.url tem propriedades como currentTab.id, currentTab.url, etc
});

//https://avatars.githubusercontent.com/vsmsystem
//https://raw.githubusercontent.com/vsmsystem/Roaw/main/manifest.json

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

async function getRoawConfigs(){
    return await chrome.storage.sync.get("roawConfigs");
}

async function refreshRoawConfigs(){
    let conf = await getRoawConfigs();
    $("#roawConfigs").val(conf.roawConfigs);
}


$(async function(){
    let conf = await getRoawConfigs();
    if(!conf.roawConfigs || conf.roawConfigs == ""){
        setDefaultConfig(defaultRoawConfigs);
        conf = await getRoawConfigs();
    }

    // console.log("stored roawConfigs", conf);
    // console.log("parsed roawConfigs", JSON.parse(conf.roawConfigs))
    $("#roawConfigs").val(conf.roawConfigs);

})

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


function setDefaultConfig(){
    chrome.storage.sync.set({"roawConfigs":defaultRoawConfigs});
    console.log("default", defaultRoawConfigs)
}


async function msgTest(text) {

	const response = await chrome.runtime.sendMessage({
		responseBodyTest: text
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




