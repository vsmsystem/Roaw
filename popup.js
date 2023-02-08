// Pegar a URL da aba ativa ao abrir o popup
function getCurrentTab(callback = null){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currentTab = tabs[0]; // retorna um array com 1 indice, a aba ativa
        callback(currentTab);
        return currentTab;
    });
}
window.tab= null;
getCurrentTab((tab)=>{
    window.tab = tab
    $("#url-aba").html(tab.url)// currentTab.url tem propriedades como currentTab.id, currentTab.url, etc
    
})

window.addEventListener("DOMContentLoaded",function(loaded){
    getTabSource(tab.id)
})

chrome.runtime.onMessage.addListener(function(request, sender) {
	/**
	 * listener que recebe a mensagem enviada pelo script injetado na aba/pagina onde o popup abriu
	 */
  if (request.action == "getSource") {
	var resposta = request.source;
	var resposta = resposta.replace(/src=/gi, "alt=");
	var tempDiv = jQuery('<div>').html(resposta);
	jQuery(tempDiv).find("script").remove();
	jQuery(tempDiv).find("link").remove();
	jQuery(tempDiv).find("style").remove();
	// exemploAntigaSeiyasForce(tempDiv);
    domAnalyzer(tempDiv);
  }
  if (request.action == "ajustaGrafico") {}
});

function domAnalyzer(parsedSource){
    inputs = parsedSource.find("input")

    document.querySelectorAll("button").forEach((b)=>{
        if(b.getAttribute("view") == "inputs"){
            b.querySelector("span").innerText=inputs.length
            $("#inputs").append(inputs)
            //in this mode, only de dom is captured, the values is missing, create getInputs.js for this
        }
    })

    console.log(inputs)
}

function exemploAntigaSeiyasForce(tempDiv){

	if(tempDiv.find('div#00N3600000SnR3m_ileinner').text()){
		var p_aluno 	 = tempDiv.find('div#acc2_ileinner').text().replace(/Sr. |Sra. /gi,'')
		var p_opmatricula  = tempDiv.find('a:contains(cula do aluno : '+p_aluno.split(' ')[0]+')') //se o nome da oportunidade de matricula estiver errado, nao vai dar combinação
		var p_bandeira 	 = tempDiv.find('div#00N3600000SnR3m_ileinner').text()
		var pcod_aluno	 = tempDiv.find('.personaccountBlock').attr('data-hovid')
		var pcod_unidade = tempDiv.find('#CF00N3600000RNhxO_ileinner').find('a').attr('href')
		var p_turma		 = tempDiv.find('div#CF00N3600000Qrwl7_ileinner').text()
		var p_valorparcela='00.00';
		var p_bolsista = ''
		var p_nivel = tempDiv.find('#CF00N3600000Qrwl5_ileinner').text()
		//algumas validações
		//bolsista
		if(tempDiv.find('#00N3600000SKMpf_chkbox')[0].title=="Selecionado"){
			p_bolsista = '<span class="label label-primary">Bolsista</span>'
			
		}
		//oportunidade de matricula (ID) e valor de mensalidade
		if(p_opmatricula.length>0){
			console.log(p_opmatricula.parentNode)
			//p_valorparcela = p_opmatricula[0].parentNode.parentNode.getElementsByClassName('CurrencyElement')[1].innerText
			//p_valorparcela = p_valorparcela.split(' ')[1].replace(',','.')
			p_opmatricula = p_opmatricula.attr('href').replace('/','');
		}else {
			p_opmatricula = " <strong> ? </strong> "
		}
		
		//ID da unidade do aluno
		if(pcod_unidade){
			pcod_unidade=pcod_unidade.replace('/','');
		}
		if(p_turma.length<3){
			p_turma="<strong style='color:orange;'>Sem turma</strong>"
		}else{
			p_turma="<strong style='color:green;'>"+p_turma+"</strong>"
		}
		//mostrar os dados em tela
		//console.log(tempDiv.find('td:contains(Matriculado)')[1].parentNode)
		$("#gp_controls").show();
		$('#titulo1').html(tempDiv.find('.zen-active').text().replace('(Selecionado atualmente)','')+" Alunos")
		$('#foco').html(""
			+"<table style='width:100%;'>"
			+"<tr><th style='width:50%;'>Cadastral</th><th>Academico</th></th>"
			+"<tr><td> Status: "+statusLabel(p_status)+"  "+p_bolsista+"</td> <td>...</td></tr>"
			+"<tr><td> Aluno: <strong style='color:green;'>"+p_aluno+"</strong> <span class='glyphicon glyphicon-resize-vertical'></span> <span id='gpaluno' class='label label-default pull-right'>"+pcod_aluno+"</span> </td> <td>...</td></tr>"
			+"<tr><td> Bandeira: <strong style='color:green;'>"+p_bandeira+"</strong> </td> <td>...</td></tr> "
			+"<tr><td> Unidade: <strong style='color:green;'>"+p_unidade+"</strong>  <span id='gpunidade' class='label label-default pull-right'>"+pcod_unidade+"</span></td> <td>...</td></tr>"
			+"<tr><td> Turma:  "+p_turma+"</td> <td>...</td></tr>"
			+"<tr><td> Oportunidade de matricula:  <span id='gpoportunidade' class='label label-default pull-right'>"+p_opmatricula+"</span></td> <td>...</td></tr>"
			+"<tr><td> Inicio: <strong style='color:green;'>"+p_datainicio+"</strong> </td> <td>...</td></tr> "
			+"<tr><td> ciclo:<span class='glyphicon glyphicon-chevron-right'></span> <strong style='color:blue;'>"+p_dataciclo+"</strong> </td> <td>...</td></tr> "
			+"<tr><td> report 1a mens.: <strong style='color:green;'>"+p_report1men+"</strong> </td> <td>...</td></tr> "
			+"<tr><td> report mes: <strong style='color:green;'>"+p_reportmes+"</strong> </td> <td>...</td></tr> "
			+"<tr><td> APIlastSend: <strong style='color:green;'>"+p_apilastsend+"</strong> </td> <td>...</td></tr> "
			+"</table>"

		+"")
		
		//define valor dos inputs de onde serão utilizados os valores para gerar o script de mensalidades
		$("#gpbandeira").val(p_bandeira)
		$("#gpvalor").val(p_valorparcela)

		var dpdate = new Date().toJSON().split('T')[0].split('-')
		$("#gpano").val(dpdate[0])
		$("#gpmes").val(dpdate[1])
		
		localStorage['aluno']=p_aluno
		
		
	}
	
	
	//Pagina de Casos =========================================================================================================
	else if(tempDiv.find('#cas15_ileinner').text()){
		document.getElementById('gsearchtext').value=apenasNumeros(tempDiv.find('#cas2_ileinner').text())
		
	//else if(tempDiv.find('div#5001R00000r10Hg_RelatedCommentsList_body').text()){
		//5001R00000r10fs_RelatedCommentsList_body
		$('#titulo1').html(tempDiv.find('.zen-active').text().replace('(Selecionado atualmente)',''))
		$('#foco').html(""
		+""+tempDiv.find('.efhpTitle').text()+"</strong><br>"
		+"<pre>"
		+tempDiv.find('#cas15_ileinner').text()
		

		
		+tempDiv.find('div#5001R00000r10Hg_RelatedCommentsList_body').text()+"<br>"
		+""
		
		+"</pre>")
	}
	else{
		$('#foco').html("<strong style='color:green;'><h3>"+tempDiv.find('.zen-active').text().replace('(Selecionado atualmente)','')+"</h3></strong>"
		+"Nenhum recurso especial encontrado para esta página"
		+"<hr><textarea id='anotacao' style='width:100%;height:200px;'>"+localStorage['anotacao']+"</textarea><hr>"
		+"");
		$('#anotacao').change(function(){
			localStorage['anotacao'] = $(this).val()
		})
	}
	
}

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



let popupModules =[
    {
        id : "mergeRequests",
        name : "Merge Requests",
        loaded: async () =>{
            let mergeRequests = await getMergeRequests();
            mergeRequests = mergeRequests.map(function(mr){
                return `
                <li class="item" style="border:solid 1px;padding:5px;margin:5px;border-radius:5px;">
                    <div class="product-img pull-left">
                        <img width="32px" height="32px" src="${mr.author.avatar_url}" alt="Product Image" style="margin-right:5px;">
                    </div>
                    <div class="product-info">
                        <a href="${mr.web_url}" target="_blank" class="product-title"> ${mr.author.name} @${mr.author.username} <br>
                            <span class="label label-info pull-right">MR</span>
                        </a>
                        <span class="product-description">
                            <span class="label label-default">Branch: ${mr.source_branch}</span>
                            <span class="label label-default">MR: ${mr.title}</span>
                        </span>
                    </div>
                </li>
                `
            }).join("")
            $('#mergeRequests').html(`
            <ul>
            ${mergeRequests}
            </ul>
            `)
        },
        onclick: () =>{
            // alert("click")
        }

    }
]
let moduleEvents={};
popupModules.forEach(module=>{
    console.log(module)
    $("#sideMenu").append(`<button type="button" class="sideMenu list-group-item" view="${module.id}">
        <span class="badge">1</span> ${module.name}
    </button>`);

    $("#popupContent").append(`<div id="${module.id}" class="screens" style="display: none;">${module.id} - ${module.name}</div>`)


    moduleEvents[module.id]=module.onclick;
    module.loaded()
    //depois cria o content
    //entao executa module.onload()
})

$(".sideMenu").on("click", function (e) {
    let view = e.target.getAttribute("view")
    $(".screens").hide();
    $(`#${view}`).show();

    if(moduleEvents[view]){
        moduleEvents[view]();
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

function getTabSource(id){
    console.log("getTabSource", id)
    //new MV3 mode
    chrome.scripting.executeScript({
        target: {tabId: id, allFrames: true},
        files: ['getPagesSource.js'],
    });

    return;

    //Old MV2 method
    chrome.tabs.executeScript(null, {
        file: "getPagesSource.js"
      }, function() {
        // If you try and inject into an extensions page or the webstore/NTP you'll get an error
        if (chrome.runtime.lastError) {
          message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        }
      });
}



function requestPermission(permission = null, origin = ["*://*/*"]){

        // Permissions must be requested from inside a user gesture, like a button's
        // click handler.
        //["tabs","activeTab","scripting"],
        //["<all_urls>"], ["*://*/*"]

        chrome.permissions.request({
            permissions: [permission],
            origins: ["<all_urls>"]
          }, (granted) => {
            // The callback argument will be true if the user granted the permissions.
            if (granted) {
              console.log("granted", permission);
            } else {
              console.log("rejected",permission);
            }
          });
}

    
async function getMergeRequests(){
    const token = await chrome.storage.sync.get("PRIVATE-TOKEN")
    let response = await fetch("http://git.lwtecnologia.com.br/api/v4/merge_requests?scope=assigned_to_me&state=opened", {
        "headers": {
          "Accept": "application/json",
          "PRIVATE-TOKEN":token["PRIVATE-TOKEN"]
        },
        "body": null,
        "method": "GET"
      });

    let mergeList = await response.json()
    return mergeList;
}
