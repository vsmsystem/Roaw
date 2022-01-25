// Pegar a URL da aba ativa ao abrir o popup
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0]; // retorna um array com 1 indice, a aba ativa
    $("#url-aba").html(currentTab.url)// currentTab.url tem propriedades como currentTab.id, currentTab.url, etc
});

// document.getElementById("btn-adjust")
$("#ajustartema").on("click", function () {
    $("body").toggleClass("night")
    $("#navbar").toggleClass("navbar-inverse")
});

