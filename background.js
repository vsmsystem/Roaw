// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// =================================================================
async function getRoawConfigs(){
	return await chrome.storage.sync.get("roawConfigs");
}

function hoje(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {dd = '0'+dd} 
	if(mm<10) {mm = '0'+mm} 

	//today = mm + '/' + dd + '/' + yyyy;
	today = yyyy+mm+dd;
	return today;
}

//timer =========================================================

chrome.alarms.create("roawTimer", {delayInMinutes: 1.0, periodInMinutes: 1.0});
chrome.alarms.onAlarm.addListener(function(e){
	console.log(e);
	if(e.name=="timer"){
		// if(localStorage['installcheck']!=hoje()){
		// 	getCurrentVersion();
		// 	localStorage['installcheck']=hoje();
		// }
	}
	
});

// =================================================================

function showNotifier(titulo,mensagem,link){
	//Notification.requestPermission(function() {
		var notification = new Notification(titulo, {
			icon: 'chrome-extension://'+chrome.runtime.id+'/128.png',
			body: mensagem,
			requireInteraction: false
		});
		notification.onclick = function() {
			//fun
			if(link){
				chrome.tabs.create({url: link});
			}
		}
		//notification.onclose = function() {if(link){alert('close')}}
	//});
}
// =================================================================

function getCurrentVersion(modo){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", 'http://efika/vsm/VSMonitor-Ext-version.php', true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xhr.onreadystatechange = function() {//Call a function when the state changes.
		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
			// Request finished. Do processing here.
			//console.log(JSON.parse(xhr.responseText))
			var resposta = JSON.parse(xhr.responseText)
			if(resposta.nome=="VSMonitor-Ext"){
				//console.log('versao instalada: '+chrome.runtime.getManifest().version)
				//console.log('versao disponivel: '+resposta.versao)
				if(chrome.runtime.getManifest().version!=resposta.versao){
					showNotifier('Versão '+resposta.versao+' Disponível!','Atualize para obter os novos recursos.','http://efika/vsm/VSMonitor-Ext-Atualizacao.php')
				}
			}
		}
	}
	xhr.send(); 
}

// =================================================================


function logInstall(modo){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://efika/vsm/legado/vsm-base/api/userlog/', true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xhr.onreadystatechange = function() {//Call a function when the state changes.
		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
			// Request finished. Do processing here.
		}
	}
	xhr.send('usuario=Chrome&nome=Extension&setor=&acao='+modo+'&msg='+encodeURIComponent(chrome.runtime.getManifest().version)); 
}

// =================================================================

chrome.runtime.onInstalled.addListener(function(a){
	
	var installLogs =  a.reason+" | "+a.previousVersion+' > '+chrome.runtime.getManifest().version+' | '+new Date();
	//showNotifier(a.reason,a.previousVersion+' > '+chrome.runtime.getManifest().version)
	if(a.previousVersion!=chrome.runtime.getManifest().version){
		if(a.reason=='install'){
			logInstall('install');
			showNotifier('Olá','instalado com sucesso')
		}else if(a.reason=='update'){
			logInstall('updated');
			showNotifier('Atualização Efetuada','Sua extensão atualizou para a versão '+chrome.runtime.getManifest().version)
		}else{
			
		}
		console.log('Install Detected');
		// localStorage['installVers']=installLogs;

		
	}else{
		console.log('nenhum update detectado')
		//showNotifier('teste','apenas testando')
	}
	
	
})

function richNotification(obj = {}) {

    var icon = `chrome-extension://${chrome.runtime.id}/128din2.png` 
	var title = obj.title || "..."
	var message = obj.message || "..."
    /* I have to create:

    {
        icon
        title
        message
        contextMessage
        imageUrl | items | progress
        buttons
        callbackFirstButton
        callbackSecondButton
        callbackMsgOnClicked
        callbaclMsgOnClosed
    }

    */

    const opt = {
        type: "image",
        title,
        message,
        contextMessage: "...",
        requireInteraction: true,
        iconUrl: icon,
        imageUrl: 'https://i.pinimg.com/736x/8c/4b/a9/8c4ba995d485d2bb5ae3aa639e5978cf.jpg',
        priority: 2,
        buttons: [
            {
                title: 'Yes'
            },
            {
                title: 'No'
            }
        ]
    }

    var typeProgress = {
        type: "progress",
        progress: 42
    }

    var typeList = {
        type: "list",
        items: [
            { title: "Item1", message: "This is item 1." },
            { title: "Item2", message: "This is item 2." },
            { title: "Item3", message: "This is item 3." }
        ]
    }
    var typeImg = {
        type: "image",
        imageUrl: 'https://i.pinimg.com/736x/8c/4b/a9/8c4ba995d485d2bb5ae3aa639e5978cf.jpg'
    }

    chrome.notifications.create("teste", opt, function(id) {
        myNotificationID = id;
    });

    chrome.notifications.onButtonClicked.addListener(function(notificationId, buttonIndex) {
        if (notificationId === myNotificationID) {
            if (buttonIndex === 0) {
                //callback first button
            } else if (btnIdx === 1) {
                //callback second button
            }
        }
    });

    chrome.notifications.onClicked.addListener(function(e){
        //
    })

    chrome.notifications.onClosed.addListener(function(e){
        //
    })
}

//tratativa de messages EXTERNAS!!!!
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
	alert(sender.status)
	if(sender.status ===  "complete") {
		sendResponse({"ee":"ee"});
	}
	
	return;
	
    if (request.teste){
		
		/*
		//Como usar?
		chrome.runtime.sendMessage('idExtensao', {
			ajax:{
				url:        'http://...',
				type:       "post",
				async: false,
				cache:false,
				data:{inputs}
			}
		}, 
		function(response) {
			//objeto XHR de resposta
		}
		);*/
		
		
		sendResponse({'erro':'1'});
		return "a";
	
		

		
	}else{
		sendResponse({'erro':'2'});
		return "b";
	}
  });
//tratativa de messages
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	//I should refator these ifs to a strategy pattern soon

	if(request.createNotification){
		console.log("createNotification", request.createNotification)
		richNotification(request.createNotification)
		// sendResponse({notified:"maybe"})
	}
	else if(request.greeting){
		chrome.storage.sync.set({
			tecnico:request.tecnico,
			instancia: request.greeting,
			tmatricula:request.tmatricula,
			cliente:request.cliente
		}, function() {
			// Update status to let user know options were saved.
		});
		sendResponse({farewell: "recebido:"+request.tecnico+","+request.tmatricula});
	}
	else if(request.networkLog){
		console.log(request.networkLog)
		sendResponse({
			logOk:{
				"msgReceived":"ok"
			}
		});
	}
	else if(request.getConfig){
		if(request.getConfig == "salvarConfigs"){
			// localStorage['roawConfigs']=request.configs;
		}
		
		(async function(sendResponse){
			const storedData = await chrome.storage.sync.get("roawConfigs");
			// console.log("e",storedData.roawConfigs)
			sendResponse({
				config:{
					// localStorage is not acessible here using manifest v3
					// "msgReceived":new Object(localStorage['roawConfigs'])
					//still not working even use chrome storage here, async reasons
					//i've used chrome storage directly into the content scripts and it's working there
					"msgReceived":storedData.roawConfigs
				}
			});
		}(sendResponse))
		
	}
	//eta message
	else if(request.etatime){
		// if(request.etatime != "load"){localStorage['eta_time']=request.etatime;}
		
		sendResponse({
			msg:new Object("{}")
		});
		
	}
	/*
	else if(request.exemplo){
		sendResponse({farewell: "Resposta do exemplo"});
	}
	*/
	else if(request.teste){
		localStorage['m2testando']=request.teste;
		sendResponse({farewell: "Modo teste responde: testando"});
	}
	else {
		sendResponse({farewell: "else"});
	}
	
});
 /*
 */

//Menu  ims 248/v5 ==================================================
chrome.contextMenus.create({
	title: "Texto selecionado: '%s'",
	contexts:["selection"],
	id:'imsid'
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
	//console.log(info);
	if(info.menuItemId = 'imsid') {
		var selection = info.selectionText;
		var uri = `chrome-extension://${chrome.runtime.id}/Vweb/options.html?param=${selection}`
		//console.log(encodeURI(uri));
		
		chrome.tabs.create({'url': encodeURI(uri)}, function(tab) {
			//console.log(tab);
			//chrome.tabs.executeScript(integer tabId, object details, function callback)
			//window.location.href = encodeURI(uri);
		});
	}
	
});
//==================================================================

if('menus'=='ativado'){
	// The onClicked callback function.
	function onClickHandler(info, tab) {
	  if (info.menuItemId == "radio1" || info.menuItemId == "radio2") {
		console.log("radio item " + info.menuItemId +
					" was clicked (previous checked state was "  +
					info.wasChecked + ")");
	  } else if (info.menuItemId == "checkbox1" || info.menuItemId == "checkbox2") {
		console.log(JSON.stringify(info));
		console.log("checkbox item " + info.menuItemId +
					" was clicked, state is now: " + info.checked +
					" (previous state was " + info.wasChecked + ")");

	  } else {
		console.log("item " + info.menuItemId + " was clicked");
		console.log("info: " + JSON.stringify(info));
		console.log("tab: " + JSON.stringify(tab));
	  }
	};
	chrome.contextMenus.onClicked.addListener(onClickHandler);

	// Set up context menu tree at install time.
	chrome.runtime.onInstalled.addListener(function() {
	  // Create one test item for each context type.
	  var contexts = ["page","selection","link","editable","image","video",
					  "audio"];
	  for (var i = 0; i < contexts.length; i++) {
		var context = contexts[i];
		var title = "Test '" + context + "' menu item x";
		var id = chrome.contextMenus.create({"title": title, "contexts":[context],
											 "id": "context" + context});
		//console.("'" + context + "' item:" + id);
	  }

	  // Create a parent item and two children.
	  chrome.contextMenus.create({"title": "Test parent item", "id": "parent"});
	  chrome.contextMenus.create({"title": "Child 1", "parentId": "parent", "id": "child1"});
	  chrome.contextMenus.create({"title": "Child 2", "parentId": "parent", "id": "child2"});
	  //console.log("parent child1 child2");

	  // Create some radio items.
	  chrome.contextMenus.create({"title": "Radio 1", "type": "radio","id": "radio1"});
	  chrome.contextMenus.create({"title": "Radio 2", "type": "radio","id": "radio2"});
	  //console.log("radio1 radio2");

	  // Create some checkbox items.
	  chrome.contextMenus.create(
		  {"title": "Checkbox1", "type": "checkbox", "id": "checkbox1"});
	  chrome.contextMenus.create({"title": "Checkbox2", "type": "checkbox", "id": "checkbox2"});
	  //console.log("checkbox1 checkbox2");

	  // Intentionally create an invalid item, to show off error checking in the
	  // create callback.
	  //console.log("About to try creating an invalid item - an error about " +
	  //    "duplicate item child1 should show up");
	  chrome.contextMenus.create({"title": "Oops", "id": "child3"}, function() {
		if (chrome.extension.lastError) {
	  //    console.log("Got expected error: " + chrome.extension.lastError.message);
		}
	  });
	});
}

// =================================================================






// =================================================================
//Mensagens
/*
chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

function onWindowLoad() {
  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}
window.onload = onWindowLoad;



chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
	if(request.pergunta){
		sendResponse({farewell: "resposta"});
	}
});
*/

// =================================================================
/*
var httpRequest;
function logInstall() {
	httpRequest = new XMLHttpRequest();

	if (!httpRequest) {
	  //alert('Giving up :( Cannot create an XMLHTTP instance');
	  return false;
	}
	httpRequest.onreadystatechange = alertContents;
	httpRequest.open('POST', 'test.html');
	httpRequest.send('usuario=Chrome&nome=Extension&setor=&acao=install&'+encodeURIComponent(chrome.runtime.getManifest().version));
}

function alertContents() {
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
	  if (httpRequest.status === 200) {
		alert(httpRequest.responseText);
	  } else {
		//alert('There was a problem with the request.');
	  }
	}
}
*/

// =================================================================

// chrome.storage.sync.set({"roawConfigs":$("#roawConfigs").val()});
 
//capture/intercept requests
chrome.webRequest.onBeforeRequest.addListener(
    function(details)
    {
		if(details.requestBody){
			// console.log(details.requestBody);
		}
    },
    {urls: ["<all_urls>"]},
    ['requestBody']
);




