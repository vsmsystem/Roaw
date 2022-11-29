// Pegar a URL da aba ativa ao abrir o popup
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0]; // retorna um array com 1 indice, a aba ativa
    $("#url-aba").html(currentTab.url)// currentTab.url tem propriedades como currentTab.id, currentTab.url, etc
});
$(function(){
    if(!localStorage["roawConfigs"]){
        setDefaultConfig();
    }
    $("#roawConfigs").val(localStorage.getItem("roawConfigs"))
})

// document.getElementById("btn-adjust")
$("#ajustartema").on("click", function () {
    $("body").toggleClass("night")
    $("#navbar").toggleClass("navbar-inverse")
});

$("#roawConfigs").on("change", function () {
    localStorage.setItem("roawConfigs",$("#roawConfigs").val())
});

$("#menuPlanning").on("click", function () {
    $(".screens").hide();
    $("#planning").show();
});

function setDefaultConfig(){
localStorage.setItem("roawConfigs",`{
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
}`)}