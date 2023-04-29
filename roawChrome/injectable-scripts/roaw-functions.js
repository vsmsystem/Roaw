window.roawInfo={};
function pageLoaded() {

}
window.addEventListener("load", pageLoaded);

function selectOptions(select, primeiro, ultimo) {
    console.log("Exemplo: ", `selectOptions("#multiselect2",3,10)`);
    [...document.querySelector(select).options].forEach((o, i) => {
        if (i >= primeiro && i <= ultimo) {
            o.selected = true
        } else { o.selected = false }
    })
}

function getElementsByText(tagname, text) {
    var elementos = document.getElementsByTagName(tagname)
    var encontrados = [];
    for (i = 0; i < elementos.length; i++) {
        if (elementos[i].innerText.indexOf(text) > -1) {
            encontrados.push(elementos[i])
        }
    }
    if (encontrados.length < 1) return false
    return encontrados
}

document.getElementsByText = function (text, fullMatch = null) {

    var encontrados = [];
    document.querySelectorAll('*').forEach(function (node) {
        if (!node.innerText) {
            return
        }

        if (node.innerText === text) {
            encontrados.push(node)
            return
        }
        if (fullMatch === true) {
            return
        }

        if (node.innerText.indexOf(text) > -1) {
            encontrados.push(node)
            return
        }
    });
    if (encontrados.length < 1) return false
    return encontrados
}





function criarItem(listaArray) {

    var lista = listaArray.map(item => {
        return `
        <div class="sf-toolbar-info-piece">
            <span class="sf-toolbar-status">${item.preco}</span>
            <b>${item.nome}</b>
        </div>
    `
    }).join("")

    var benchmarkModule = `
    <div class="sf-toolbar-block sf-toolbar-block-twig sf-toolbar-status-normal ">
              
       <div class="sf-toolbar-icon">      
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
    <path fill="#aaaaaa" d="M54.621,8.908c-1.974,0-3.575,1.602-3.575,3.578c0,1.976,1.602,3.578,3.575,3.578c18.493,0,33.54,15.047,33.54,33.543  c0,18.495-15.047,33.542-33.54,33.542c-16.971,0-31.03-12.676-33.23-29.056l2.504,2.505c0.699,0.699,1.614,1.047,2.53,1.047  c0.916,0,1.831-0.348,2.53-1.047c1.397-1.398,1.397-3.663,0-5.061l-8.922-8.922c-1.397-1.397-3.663-1.397-5.06,0l-8.922,8.922  c-1.397,1.397-1.397,3.662,0,5.061c1.397,1.396,3.663,1.396,5.061,0l3.012-3.012c2.007,20.579,19.403,36.719,40.498,36.719  c22.439,0,40.697-18.258,40.697-40.698C95.318,27.166,77.061,8.908,54.621,8.908z"></path>
    <path fill="#aaaaaa" d="M41.141,69.414c-0.971,0-1.941-0.369-2.682-1.11c-1.481-1.481-1.482-3.883-0.001-5.364l11.856-11.86V27.108  c0-2.095,1.698-3.793,3.791-3.793c2.094,0,3.79,1.698,3.79,3.793v25.541c0,1.006-0.398,1.97-1.109,2.682L43.823,68.303  C43.083,69.043,42.112,69.414,41.141,69.414z"></path>
    <path fill="#aaaaaa" d="M81.644,51.94h-3.926c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5h3.926c1.381,0,2.5,1.119,2.5,2.5  S83.024,51.94,81.644,51.94z"></path>
    <path fill="#aaaaaa" d="M72.316,71.539c-0.64,0-1.279-0.244-1.768-0.732l-2.776-2.776c-0.977-0.977-0.977-2.559,0-3.535s2.559-0.977,3.535,0  l2.776,2.776c0.977,0.977,0.977,2.559,0,3.535C73.596,71.295,72.956,71.539,72.316,71.539z"></path>
    <path fill="#aaaaaa" d="M52.719,79.657c-1.381,0-2.5-1.119-2.5-2.5V73.23c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5v3.927  C55.219,78.538,54.1,79.657,52.719,79.657z"></path>
    <path fill="#aaaaaa" d="M69.541,35.117c-0.64,0-1.279-0.244-1.768-0.732c-0.977-0.977-0.977-2.559,0-3.536l2.775-2.776  c0.975-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.559,0,3.536l-2.775,2.776C70.821,34.873,70.181,35.117,69.541,35.117z"></path></svg>	
    
    
           <span id="tmaclock" class="sf-toolbar-value">PC</span>
    
           <span class="sf-toolbar-label"> </span>
       </div>

       <div class="sf-toolbar-info" style="left: 0px;">        
           ${lista}
       </div>
    </div>
    `
    document.querySelector("#sfToolbarMainContent-80d3dd").insertAdjacentHTML("beforeend", benchmarkModule)
}

async function doFetch() {
    var fetched = await fetch("https://www.terabyteshop.com.br/ProdutoCustom.obj", {
        "headers": {
            "accept": "*/*",
            "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Linux\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://www.terabyteshop.com.br/produto/18613/monte-seu-pc-gamer-plataforma-amd-ryzen-5000-full-custom",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "app=true&metodo=grupo&idprodutopai=18613&spec=",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });


    if (!fetched.ok) {
        console.log("erro")
        throw new Error(`Erro ${fetched.status}`);
        return
    }
    const data = await fetched.json()
    console.log(data)

    var teste = data.grupo.filter(item => {
        if (!item.produto || item.nome == "Montagem") {
            return false
        }
        return true
    }).map(item => {
        if (item.produto?.nome && item.produto?.avista) {
            const nome = item.produto.nome
            const preco = item.produto?.avista.replace("Montar em Casa: ", "").replace(" à vista com 15% de desconto", "")
            console.log(preco, item.nome, nome)
            return {
                "nome": nome,
                "item": item.nome,
                "preco": preco
            }
        }


    })

    teste.push({
        "nome": "Total",
        "item": "Total",
        "preco": data.pagamento.avista
    })

    //    criarItem(teste)

    console.log(teste)

}


function setCss(elemento, css) {

    var teste = document.querySelector(elemento)
    if (!teste) {
        console.log("not found")
    }
    console.log(teste)
    console.log("css: ", teste.style)
}

function embbedOpen() {
    const src = document.getElementsByTagName("embed")[0].src
    console.log(src)
    window.open(src)
}

function jsonStringfier(obj) {
    return JSON.stringify(JSON.stringify(obj));
}


function listAllEventListeners(table) {
    const allElements = Array.prototype.slice.call(document.querySelectorAll('*'));
    allElements.push(document);
    allElements.push(window);

    const types = [];

    for (let ev in window) {
        if (/^on/.test(ev)) types[types.length] = ev;
    }

    let elements = [];
    for (let i = 0; i < allElements.length; i++) {
        const currentElement = allElements[i];

        // Events attributes
        for (let j = 0; j < types.length; j++) {

            if (typeof currentElement[types[j]] === 'function') {
                elements.push({
                    "node": currentElement,
                    "type": types[j],
                    "func": currentElement[types[j]].toString(),
                });
            }
        }

        // Events defined with addEventListener
        if (typeof currentElement._getEventListeners === 'function') {
            evts = currentElement._getEventListeners();
            if (Object.keys(evts).length > 0) {
                for (let evt of Object.keys(evts)) {
                    for (k = 0; k < evts[evt].length; k++) {
                        elements.push({
                            "node": currentElement,
                            "type": evt,
                            "func": evts[evt][k].listener.toString()
                        });
                    }
                }
            }
        }

    }

    let result = elements.sort();
    if (table) {
        console.table(result)
    }
    return result;
};




function listEventListeners(target,table) {
    const allElements = Array.prototype.slice.call(document.querySelectorAll(target));
    allElements.push(document);
    allElements.push(window);

    const types = [];

    for (let ev in window) {
        if (/^on/.test(ev)) types[types.length] = ev;
    }

    let elements = [];
    for (let i = 0; i < allElements.length; i++) {
        const currentElement = allElements[i];

        // Events attributes
        for (let j = 0; j < types.length; j++) {

            if (typeof currentElement[types[j]] === 'function') {
                elements.push({
                    "node": currentElement,
                    "type": types[j],
                    "func": currentElement[types[j]].toString(),
                });
            }
        }

        // Events defined with addEventListener
        if (typeof currentElement._getEventListeners === 'function') {
            evts = currentElement._getEventListeners();
            if (Object.keys(evts).length > 0) {
                for (let evt of Object.keys(evts)) {
                    for (k = 0; k < evts[evt].length; k++) {
                        elements.push({
                            "node": currentElement,
                            "type": evt,
                            "func": evts[evt][k].listener.toString()
                        });
                    }
                }
            }
        }

    }

    let result = elements.sort();
    if (table) {
        console.table(result)
    }
    return result;
};



function selectOptions(select, primeiro, ultimo) {
    console.log("Exemplo: ", `selectOptions("#multiselect2",3,10)`);
    [...document.querySelector(select).options].forEach((o, i) => {
        if (i >= primeiro && i <= ultimo) {
            o.selected = true
        } else { o.selected = false }
    })
}

function getElementsByText(tagname, text){
	var elementos = document.getElementsByTagName(tagname)
	var encontrados = [];
	for(i=0;i<elementos.length;i++){
		if(elementos[i].innerText.indexOf(text)>-1){
			 encontrados.push(elementos[i])
		}
	}
	if(encontrados.length<1) return false
	return encontrados
 }

 function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }

 function menuFind(trechoNome = "", renderDestination = null){
    let allItems = [];
    let foundItems = [];
    let html = null;
    
    allItems =  [...document.querySelectorAll("#side-menu a")];
    
    html = allItems.map(function(e){
        if(trechoNome.length>0){
            if(e.innerText.toLowerCase().indexOf(trechoNome.toLowerCase()) > -1){
                console.log(e.innerText.trim(), e.href)
                return `<div>${e.innerText.trim()} > <a class="boxmenulink" href="${e.href}" >${e.href}</a></div>`;
            }
        }else{
            console.log("N", e.innerText.trim(), e.href)
        }
    }).filter(i =>  i !== undefined).join("")
    if(renderDestination){
        document.querySelector(renderDestination).innerHTML = html
    }
    return html;
 }

 function nfeData(){
    //
    const nfeHtml =  document.querySelectorAll("#tabResult tr");
    if(nfeHtml.length <= 0){
        return false
    }
    const estabelecimento = document.querySelector("#u20").innerText
    const cnpj = document.querySelector("#conteudo > div.txtCenter > div:nth-child(2)").innerText.replace("CNPJ: ","")
    const endereco = document.querySelector("#conteudo > div.txtCenter > div:nth-child(3)").innerText;
    const totalSomado = document.querySelector(".txtMax").innerText
    const dataEmissao = document.querySelector(".ui-listview").innerText.split("Emissão: ")[1].split(" - ")[0];

    const itens = []
    const nfe = {
        estabelecimento,
        cnpj,
        endereco,
        dataEmissao,
        totalSomado
    }
    
    nfeHtml.forEach(function(linha){
        itens.push({
            "nome":linha.getElementsByClassName("txtTit2")[0].innerText,
            "codigo":parseInt(linha.getElementsByClassName("RCod")[0].innerText.replace(/\D/g, "")),
            "quantidade":parseFloat(linha.getElementsByClassName("Rqtd")[0].innerText.replace(/\D/g, "")),
            "tipoQuantidade":linha.getElementsByClassName("RUN")[0].innerText.replace("UN: ",""),
            "valorUnitario":linha.getElementsByClassName("RvlUnit")[0].innerText.replaceAll("Vl. Unit.:", "").trim(),
            "valor":linha.getElementsByClassName("valor")[0].innerText.trim()
        })
    })

    console.table(nfe)
    console.table(itens)

    nfe.itens = itens;
    console.log(nfe)
 }

nfeData();

window.speechSynthesis.onvoiceschanged = function() {
    text = new SpeechSynthesisUtterance();
    voices = window.speechSynthesis.getVoices();
  
      [...window.speechSynthesis.getVoices()].forEach(function(e,i){
          if(e.voiceURI.toLowerCase().indexOf("brasil")>-1){
          roawInfo.voice={"index":i,"persona":e}
          text.voiceURI = e.voiceURI
          text.lang = e.lang
          text.localService = true;
          text.default= false;
          text.voice = e
          }
      })
  }
  falar = function(line){
    text.text = line;
    speechSynthesis.speak(text);
  }

  //get all eventlisteners, using map, promises and flat
  async function getEvents(selector = null, callback = null) {
	let select = selector ? `${selector} *` : '*';
	const elements = Array.from(document.querySelectorAll(select));
	const promises = elements.map(async (element) => {
		const listeners = await getEventListeners(element);
		return Object.keys(listeners).map((type) => {
			return listeners[type].map((listener) => {
				return {
					element,
					type,
					listener: listener.listener,
				};
			});
		}).flat();
	});
	const results = await Promise.all(promises);

    if(callback){
        return await callback(await results.flat())
    }
	return await results.flat()
}

//read mimeType from blob (actually buffer) directly from html input
// const file = new RoawFileMimeType();
//file.check(theFile)
class RoawFileMimeType {

    constructor(options) {
        this.allowedTypes = options?.allowList || {
            "ffd8ffe0": "image/jpg",
            "89504e47": "image/png",
            "47494638": "image/gif",
            "25504446": "application/pdf",
        }
        this.knownTypes = {
            "ffd8ffe0": "image/jpg",
            "89504e47": "image/png",
            "47494638": "image/gif",
            "49492a0": "image/tiff",
            "52494646": "image/webp",
            "504b34": "application/zip",
            "534d502d": "text/plain",
            "0010": "image/vnd.microsoft.icon",
            "424d2a4f": "image/bmp",
            "38425053": "image/vnd.adobe.photoshop",
            "25504446": "application/pdf"
        }
    }

    async check(paramFile = null) {
        if (!paramFile.name) {
            return false;
        }
        const self = this;
        return await new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.onloadend = async function () {
                var arr = (new Uint8Array(reader.result)).subarray(0, 4);
                var header = "";
                for (var i = 0; i < arr.length; i++) {
                    header += arr[i].toString(16);
                }
                resolve({
                    fileName: paramFile.name,
                    type: paramFile.type,
                    mimeType: self.knownTypes[header] || "desconhecido",
                    header,
                    ok: !!self.allowedTypes[header] || false
                });
            };
            reader.onerror = (error) => {
                reject(error)
            }
            reader.readAsArrayBuffer(paramFile || file);
        });
    }

}

function checkFiles(){
    ft = new RoawFileMimeType();
    document.querySelectorAll("input[type=file]").forEach(async (i)=>{
        if(i?.files[0]?.name){
            console.log(await ft.check(i.files[0]))
        }else{
            console.log("input vazio:",i)
        }
    })
}

document.querySelectorAll("input[type=file]").forEach(el=>{
    el.addEventListener("change",ev=>{
        checkFiles()
    })
})


//from https://gist.github.com/jherax/968ad4ff8eaa9ceb9159
//this will help a lot with legacy jquery app documentation
/**
 * Gets all event-handlers from a DOM element.
 * Events with namespace are allowed.
 *
 * @param  {Element} node: DOM element
 * @param  {String} eventns: (optional) name of the event/namespace
 * @return {Object}
 */
function getEventHandlers(element, eventns) {
    const $ = window.jQuery;
    const i = (eventns || '').indexOf('.'),
      event = i > -1 ? eventns.substr(0, i) : eventns,
      namespace = i > -1 ? eventns.substr(i + 1) : void(0),
      handlers = Object.create(null);
    element = $(element);
    if (!element.length) return handlers;
    // gets the events associated to a DOM element
    const listeners = $._data(element.get(0), "events") || handlers;
    const events = event ? [event] : Object.keys(listeners);
    if (!eventns) return listeners; // Object with all event types
    events.forEach((type) => {
      // gets event-handlers by event-type or namespace
      (listeners[type] || []).forEach(getHandlers, type);
    });
    // eslint-disable-next-line
    function getHandlers(e) {
      const type = this.toString();
      const eNamespace = e.namespace || (e.data && e.data.handler);
      // gets event-handlers by event-type or namespace
      if ((event === type && !namespace) ||
          (eNamespace === namespace && !event) ||
          (eNamespace === namespace && event === type)) {
        handlers[type] = handlers[type] || [];
        handlers[type].push(e);
      }
    }
    return handlers;
  }

  function getAllEventListenersPage() {
    const elements = document.querySelectorAll('*');
    const listeners = [];
    
    for (let i = 0; i < elements.length; i++) {
      const eventListeners = window.getEventListeners(elements[i]);
      
      for (let eventType in eventListeners) {
        const eventHandlerObjects = eventListeners[eventType];
        
        for (let j = 0; j < eventHandlerObjects.length; j++) {
          const eventHandler = eventHandlerObjects[j];
          const listener = {
            element: elements[i],
            eventType: eventType,
            eventHandler: eventHandler.listener
          };
          listeners.push(listener);
        }
      }
    }
    
    return listeners;
  }

  function getEventListenersTeste(elemento) {
    const eventos = {};
    const listaEventos = getEventListenersList(elemento);
  
    for (const tipoEvento in listaEventos) {
      eventos[tipoEvento] = [];
  
      listaEventos[tipoEvento].forEach((evento) => {
        eventos[tipoEvento].push({
          elemento: elemento.nodeName,
          funcao: evento.listener.toString(),
        });
      });
    }
  
    return eventos;
  }

  function getEventListenersProto(element) {
    const events = {};
    const listeners = element.__proto__.__proto__.constructor("return this").call(element);
    
    for (const eventName in listeners) {
      events[eventName] = [];
      listeners[eventName].forEach((listener) => {
        events[eventName].push(listener);
      });
    }
    
    return events;
  }





  function watchEventsMutationObserverMode(){
    const eventTypes = new Set(['click', 'mouseover']);
    
    // Adicione um Listener de eventos ao DOM da página
    document.addEventListener('DOMContentLoaded', () => {
      // Use o MutationObserver para detectar alterações no DOM e adicionar um Listener de eventos a novos elementos
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          for (const addedNode of mutation.addedNodes) {
            // Verifique se o nó adicionado é um elemento e, se for, adicione um Listener de eventos a ele
            if (addedNode.nodeType === Node.ELEMENT_NODE) {
              for (const eventType of eventTypes) {
                addedNode.addEventListener(eventType, (event) => {
                  console.log(eventType, event.target);
                });
              }
            }
          }
        }
      });
      
      // Comece a observar o DOM da página para detectar alterações
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    });
}

function watchEventsPrototypeMode() {
    window.xallEvents = [];
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (type, listener, options) {
        xallEvents.push({ target: this, type, listener, options });
        console.log("add", { target: this, type, listener, options })
        originalAddEventListener.call(this, type, listener, options);
    };
    document.addEventListener("click", () => {
        console.log(xallEvents);
    });
    console.log("allEvents: ", xallEvents);
    chrome.runtime.getBackgroundPage((backgroundPage) => {
        backgroundPage.events = xallEvents;
    });

}


function listarLocalStorage() {
    $("#localstoragelist").html("")
    for (let i = 0; i < localStorage.length; i++) {
      const chave = localStorage.key(i);
      const valor = localStorage.getItem(chave);
      if(chave.toLocaleLowerCase().indexOf("token") < 0) continue;
      $("#localstoragelist").append(`
      <tr>
      <td>${chave}</td>
      <td>
      <div class="input-group"> 
            <input id="" type="password" class="form-control" value="${valor}">
            <div class="input-group-btn"> 
                <button type="button" class="btn btn-default" aria-label="Help"><span class="glyphicon glyphicon-eye-open"></span></button>
                <button type="button" class="btn btn-default" aria-label="Help"><span class="glyphicon glyphicon-trash"></span></button>
            </div>
        </div>
      </tr>
      `)
    }
  }


class Http {
    constructor(nome, tokenConfig = null){
        this.registrados = {
            "gitlab": "http://git.lwtecnologia.com.br/api/v4",
            "vsm": "https://api.vsmsystem.com",
            "yplus": "https://yplus.vsmsystem.com/api",
        }

        //esse ms usa por padrão esse token caso ele exista no localStorage
        this.bindToken = {
            "gitlab":{"PRIVATE-TOKEN":"@gitlab-Token"},
            "vsm":{"Authorization":"@vsm-Token"},
            "yplus":{"Authorization":"@yplus-Token"}
        }

        //token padrão para quando nenhum é informado, prefiro não usar esse recurso
        this.defaultToken = {"Authorization":"@vsm-Token"};

        this.nome=nome;
        try{
            this.url = this.getUrl(nome)
        }catch($e){
            //criar uma tratativa de erro melhor  pra quando o ms nao existe
            return;
        }

        //token string, o proprio token, puro
        if(typeof tokenConfig == "string"){
            this.token = {"Authorization":tokenConfig};
            return;
        }

        this.token = this.bindToken[nome] || tokenConfig || this.defaultToken

    }
    getUrl(){
        if(this.url = localStorage.getItem(`url_api_${this.nome}`) || this.registrados[this.nome]){
            return this.url;
        }
        throw new Error(`Microsservico [${this.nome}] não encontrado`);
    }
    setUrl(url){
        if(!url){
            localStorage.removeItem(`url_api_${this.nome}`);
        }
        localStorage.setItem(`url_api_${this.nome}`,url);
        this.getUrl(this.nome)
    }
    localSync(ambiente = "producao"){
        //faz um fetch pra uma api, busca a lista de microsserviços registrados e gera todas as urls em localStorage
    }
    ativos(){
        return this.registrados;
    }

    getToken(){
        var token = {};
        try{
            const tokenKey = Object.keys(this.token)[0]
            const tokenVal = Object.values(this.token)[0]
            token[tokenKey] = localStorage.getItem(tokenVal) || tokenVal;
            return token;
        }catch(err){
            return this.token;
        }
    }

    async get(path){
        let headers = {};
        Object.assign(headers, this.getToken())
        const request = await fetch(`${this.url}/${path}`, {
            headers,
            "body": null,
            "method": "GET",
          });
          return await request.json();
    }

    async post(path = "", data = null){
        //body: formData, queryString, json, string
        //url encoded
        //accept json
        //"mode": "cors",
        //"credentials": "include"
        // data instanceof FormData
        let headers = {};
        Object.assign(headers, this.getToken())
        const request = await fetch(`${this.url}/${path}`, {
            headers,
            "body": JSON.stringify(data),
            "method": "POST",
        });
        return await request.json();
    }

    async put(){
        console.warn("Metodo PUT não implementado")
    }

    async delete(){
        console.warn("Metodo DELETE não implementado")
    }
} 


async function sfetch(url, data = null){
	let options = {}
	
	options.method = (data) ? "post" : "get";
	if (data) options.body = JSON.stringify(data)
	console.log(options)

	let response = await fetch(url,options);
	return await response.text()
}



 help = "io"
window.vsm = new Http("vsm");



