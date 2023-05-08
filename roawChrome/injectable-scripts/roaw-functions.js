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
    constructor(nome = null, tokenConfig = null){
        this.fetchOptions={
            "cache":"no-store"
        };
        if(nome === null || nome === undefined){
            this.nome=document.location.host
            this.url = document.location.origin;
            this.token = tokenConfig;
            this.fetchOptions={"credentials": "include"}
            return true
        }
        if(nome.indexOf("http://") > -1 || nome.indexOf("https://") > -1){
            this.nome="custom"+Date.now();
            this.url = nome;
            this.token = tokenConfig;
            return true
        }


        try{
            var allServices = JSON.parse(localStorage["roawHttp"]);
        }catch(ee){
            console.error("Error reading local services")
        }
        this.service = allServices.services[nome]

        this.nome=nome;
        try{
            this.url = this.getUrl(nome)
        }catch($e){
            //criar uma tratativa de erro melhor  pra quando o ms nao existe
            console.error("Error creating url")
            return;
        }
        
        //token string, o proprio token, puro
        if(typeof tokenConfig == "string"){
            this.token = {"Authorization":tokenConfig};
            return;
        }

        this.token =  this.service?.token || null;

    }
    getUrl(){
        if(this.url = localStorage.getItem(`url_api_${this.nome}`) || this.service['url']){
            return this.url;
        }
        throw new Error(`Http service [${this.nome}] not found`);
    }
    setUrl(url){
        //existe o local storage de serviço, e existe o localstorage de url
        //esse metodo se trata só de url sem serviço
        //isos cria ou remove uma url, chamar esse metodo vazio  remove ela do localstorage
        if(!url){
            localStorage.removeItem(`url_api_${this.nome}`);
        }
        localStorage.setItem(`url_api_${this.nome}`,url);
        this.getUrl(this.nome)
    }
    static localSync(ambiente = "producao"){
        //faz um fetch pra uma api, busca a lista de microsserviços registrados e gera todas as urls em localStorage
    }
    static getConfigs(){
        var allServices = JSON.parse(localStorage["roawHttp"]);
        console.log(allServices)
    }
    setOptions(object) {
        this.fetchOptions = object
    }

    static exampleOptions(){
        console.warn("Example of Fetch API Options Object")
        /*

         "referrer": "https://vsmsystem.com/", //de onde partiu essa request
         "mode": "cors",// no-cors, *cors, same-origin
         "cache": "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
         "credentials": "include", // include, *same-origin, omit
         "redirect": "follow", // manual, *follow, error

        Headers
        "accept": "*\/*", // * por opadrão, se especificar algo só esse algo vai ser aceito como resposta, ex 'application/json'
        "content-type": "application/json" // informa o tipo pro servidor, rpa que ele processe de forma adequada caso necessário

        */
        const example = `
        {
            "headers": {
              "accept": "*/*",
              "content-type": "application/json"
            },
            "referrer": "https://vsmsystem.com/", 
            "referrerPolicy": "no-referrer",
            "mode": "cors",
            "cache": "no-cache", 
            "credentials": "include",
            "redirect": "follow",
          }`;
          console.log(example)
          return JSON.parse(example);
    }
    static exampleConfig(){
        console.warn("Use this as example to configure Http service at Roaw's popup")
        console.warn("Also, at autoStart you can use 'all' or the service's names you want to start")
        const example =  `
        {
            "autoStart":["all"],
            "services":{
                "gitlab": {
                    "url":"http://git.etc.com.br/api/v4",
                    "token":{
                        "name":"@gitlab-Token",
                        "value":{"PRIVATE-TOKEN":"?example?"}
                    }
                },
                "vsm": {
                    "url":"https://api.vsmsystem.com",
                    "token":{
                        "name":"@vsm-Token",
                        "value":{"Authorization":"?example?"}
                    }
                },
                "yplus": {
                    "url":"https://yplus.vsmsystem.com/api",
                    "token":{
                        "name":"@yplus-Token",
                        "value":{"Authorization":"?example?"}
                    }
                }
            }
        }`;
        console.log(example)
        return JSON.parse(example);
    }
    static autoStart(){
        var startedServices = [];
        try{
            var roawHttpConfigs = JSON.parse(localStorage["roawHttp"]);
        }catch(ee){
            console.error("Auto Start Error")
        }

        if(roawHttpConfigs.autoStart=="all"){
            for(const service in roawHttpConfigs.services){
                window[service] = new Http(service)
                startedServices[service] = window[service];
            }
            return startedServices;
        }
        if(roawHttpConfigs.autoStart.length > 0){
            roawHttpConfigs.autoStart.forEach((h)=>{
                window[h] = new Http(h)
                startedServices[h] = window[h];
            })
            return startedServices;
        }

    }

    getToken(){

        try{
            var token = localStorage.getItem(this.service?.token?.name);
            if(token){
                console.log("Token override from localStorage", this.service?.token?.name)
                return {"Authorization":token}
            }
        }catch(ee){
            //
        }

        try{
            var token = this.service?.token?.value
            if(token){
                return token;
            }
        }catch(err){
            //
        }

        try{
            var token = this?.token
            if(token){
                return token;
            }
            
        }catch(err){
            return null;
        }
    }
    
    async response(response){

        if(!response.ok){
            throw new Error(`Http Status ${response.status}, response type:  ${response.type}`);
        }
        
        const responseType = response.headers.get("Content-Type").split(";")[0]

        const responseProcessor = {
            "text/plain":async (rData)=>{
                return await rData.text();
            },
            "text/html":async (rData)=>{
                const htmlString = await rData.text();
                const parser = new DOMParser();
                const dom = parser.parseFromString(htmlString, 'text/html');
                return dom;
            },
            "application/json":async (rData)=>{
                return await rData.json();
            },
            "application/xml": async (rData)=>{
                const xmlString = await rData.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(xmlString, 'application/xml');
                return xml;
            },
            "application/pdf":async (rData)=>{
                console.warn("pdf not implemented yet")
                //const pdfUrl = URL.createObjectURL(pdfBlob);
                return await rData.blob()
            },
            "image/png":async (rData)=>{
                console.warn("png not implemented yet")
                return await rData.blob()
            },
            "image/jpeg":async (rData)=>{
                console.warn("jpg not implemented yet")
                return await rData.blob()
            },
            "multipart/form-data":async (rData)=>{
                console.warn("formData not implemented yet")
                return await rData.FormData()
            },
            "application/octet-stream":async (rData)=>{
                console.warn("pdf not implemented yet")
                return await rData.arrayBuffer()
            }
        }


        try{
            var result = await responseProcessor[responseType](response)
        }catch(ee){
            var result = await response.blob();
        }

        if(this?.render){
            try{
                this.render(result)
            }catch(ee){
                console.warn("Error using render callback")
            }
        }

        return result;
    }

    async request(requestObj){
        //GET, POST, PUT, PATCH, DELETE
        //body: formData/multipart, queryString, urlEncoded,  json, string, null

        var fetchOptions = this.fetchOptions;
        if (!fetchOptions.headers){
            fetchOptions.headers={}
        }
        Object.assign(fetchOptions.headers, this.getToken())

        const path = requestObj?.path;
        //this is to make a request with a full url, without using baseUrl
        if(path.indexOf("http://") > -1 || path.indexOf("https://") > -1){
            var fullUrl = path;
        }else{
            var fullUrl = `${this.url}/${path}`;
        }

        fetchOptions.method = requestObj?.method;
        fetchOptions.body = requestObj?.data || null;

        //to send files, just use FormData with Headers 'Content-Type': 'multipart/form-data'
        if(fetchOptions.body instanceof FormData){
            //ok, the body is already configured 
        }else if(fetchOptions.body instanceof Object){
            //its not a FormData, but is an object, so needs to be stringfied
            fetchOptions.body = JSON.stringify(fetchOptions.body);
        }

        console.log("debug",fetchOptions)

        const request = await fetch(fullUrl, fetchOptions);
        return await this.response(request);
    }

    async get(path = ""){
        return await this.request({
            path,
            data:null,
            method: "GET"
        });
    }

    async post(path = "", data = null){
        return await this.request({
            path,
            data,
            method: "POST"
        });
    }

    async put(path = "", data = null){
        return await this.request({
            path,
            data,
            method: "PUT"
        });
    }

    async patch(path = "", data = null){
        return await this.request({
            path,
            data,
            method: "PATCH"
        });
    }

    async delete(path = "", data = null){
        return await this.request({
            path,
            data,
            method: "DELETE"
        });
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



class Roaw{
    constructor(){
        //
    }
    static renderJson(selector,object){
        document.querySelector(selector).innerHTML=generateHTMLFromJSON(object)
    }
}

  function generateHTMLFromJSON(obj) {
    let html = '<ul>';
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        html += '<li>' + key + generateHTMLFromJSON(obj[key]) + '</li>';
      } else {
        html += '<li>' + key + ': <b>' + obj[key] + '</b> <small style="cursor:pointer;color:orange;" onclick="exampleAction(this)">[ExecutarAlgo]</small> </li>';
      }
    }
    html += '</ul>';
    return html;
  }
  function exampleAction(target){
    var item = target.parentElement.querySelector("b").innerText
    console.log(item)
    //fetchCancelBill(item)
    target.parentElement.querySelector("b").innerHTML=`<small style="color:red">[Cancelado]</small> ${target.parentElement.querySelector("b").innerText}`

  }







  class ModalRoaw {
    constructor(configs) {
        
        this.configs=configs;
        const selector = this.configs?.selector
        const someCallback = this.configs?.someCallback || null;
        if(configs?.debug === true ){
            this.configs.debug = this.internalDebugger
        }
        if(this.configs?.alert){
            this.configs.show=true;
            this.configs.destroyOnClose=true;
            this.configs.content = this.alertContent()
        }
        this.configs.id = configs?.id || `modal_${Date.now()}`
        this.configs.size = configs?.size || `md`
        this.configs.title = configs?.title || `<img style="width:24px;background-color:#333;padding:2px;border-radius:5px;" src="img/Logo_LW_Branco.png">`;
        this.configs.loadingTemplate = configs?.loadingTemplate || `<div style='text-align:center;'><span class='gradient-text fa fa-circle-o-notch fa-3x fa-spin'></span></div>`;
  
        this.createStyle();
        this.createModal();
        this.createSideButtons();

        if(this.configs?.show==true){
            this.show()
        }        
        if(configs?.preventCloseDropdown === true){
            // not implemented yet
        }

        return this
    }

    createFooter(footerCallback = null, footerParams = null){
        if(footerCallback === false ){
            return "";
        }
        if(typeof footerCallback == 'function'){
            return footerCallback(this,footerParams);
        }

        if(footerCallback === null ){
            return `
            <footermodal>
                <button type="button"  data-dismiss="modal">Fechar</button>
            </footermodal>
            `;
        }

        return footerCallback;

    }

    createHeader(headerCallback = null, headerParams = null){
        if(headerCallback === false ){
            return "";
        }
        if(typeof headerCallback == 'function'){
            return headerCallback(this,headerParams);
        }

        if(headerCallback === null ){
            
            return `
            <headermodal>
                <span class="headerbuttons" style="float:right">
                <button class="right-button"><span action="toggle" class="fa fa-times"></span></button>
                </span>
                <titlemodal style="float:left">${this.configs.title}</titlemodal>
            </headermodal>
            `;
        }

        return headerCallback;

    }

    createModal(){
        let footer = this.createFooter(this.configs?.footer); 
        let header = this.createHeader(this.configs?.header); 
        document.body.insertAdjacentHTML("beforeend",`
            <roawmodal class="displaynone" id="${this.configs.id}">
                <containermodal class="size-${this.configs.size}">
                    <contentmodal>
                        ${header}
                        <bodymodal>
                            ${this.configs?.content}
                        </bodymodal>
                        ${footer}
                    </contentmodal>
                </containermodal>
            </roawmodal>
        `);
        this.element = document.querySelector(`#${this.configs.id}`);
        this.header = document.querySelector(`#${this.configs.id} headermodal`);
        this.body = document.querySelector(`#${this.configs.id} bodymodal`);
        this.footer = document.querySelector(`#${this.configs.id} footermodal`);
        this.title = document.querySelector(`#${this.configs.id} titlemodal`);
        
        //acionamento de metodos via atributos html
        /* 
        this.element.addEventListener("click",(e)=>{})
        this.element.addEventListener("keyup",(e)=>{})
        this.element.addEventListener("keydown",(e)=>{})
        this.element.addEventListener("focus",(e)=>{})
        this.element.addEventListener("blur",(e)=>{})
        this.element.addEventListener("change",(e)=>{})
        */
        this.element.addEventListener("keyup",(e)=>{

            //for now this event is working only with key Enter, still a draft

            var eventConfig = null;

            try{
                eventConfig = JSON.parse(e.target.getAttribute("event"));
            }catch(err){
                console.warn("Error parsing dinamic event json")
                return false
            }

            if(e.key == eventConfig.key){
                let fullParams = {
                    "modal":this,
                    "target": e?.target,
                    "action":eventConfig?.action || "nothing",
                    "param":e?.target?.getAttribute("param") || e?.target?.value || e?.target?.innerText
    
                }
                let execute = this[fullParams.action] || this['configs'][fullParams.action];
                if(execute){
                    if(this.configs?.debug){this.configs.debug("Dinamic Event Action",this,e,fullParams)}
                    execute(fullParams);
                }else{
                    console.log("action do not exist")
                }
            }
        })

        this.element.addEventListener("click",(e)=>{
            let fullParams = {
                "modal":this,
                "target": e?.target,
                "action":e?.target?.getAttribute("action") || "nothing",
                "param":e?.target?.getAttribute("param") || e?.target?.value || e?.target?.innerText

            }
            let execute = this[fullParams.action] || this['configs'][fullParams.action];
            if(execute){
                if(this.configs?.debug){this.configs.debug("Dinamic Event Action",this,e,fullParams)}
                execute(fullParams);
            }
        })
        
        if(this.configs?.headerButtons == "default"){
            //<li><a href="#" action="setSize">100</a></li>
            //<li><a href="#" action="setSize">90</a></li>
            this.configs.headerButtons=[
                {
                    className:"right-button",
                    text:`<span class="fa fa-ellipsis-h"></span>`,
                    onclick:(modal,event)=>{
                        console.log("er",modal)
                        modal.toggleButtonVisibility()
                    }
                },{
                    className:"hiddenOpacity displaynone modalHeaderButtons right-button",
                    text:`<span class="fa fa-car"></span>`,
                    onclick:()=>{}
                },{
                    className:"hiddenOpacity displaynone modalHeaderButtons right-button",
                    text:`<span class="fa fa-database"></span>`,
                    onclick:()=>{}
                }
                ,{
                    className:"hiddenOpacity displaynone modalHeaderButtons right-button",
                    text:`<span class="fa fa-table"></span>`,
                    onclick:()=>{}
                }
                ,{
                    className:"hiddenOpacity displaynone modalHeaderButtons right-button",
                    text:`<span class="fa fa-columns"></span>`,
                    onclick:(modal,event)=>{
                        modal.loading();
                        setTimeout(()=>{
                            modal.setContent(mockzao);
                            modal.setSize("70");
                            modal.loading(false);
                        },2000)
                    }
                }
                ,{
                    className:"hiddenOpacity displaynone modalHeaderButtons right-button",
                    text:`<span class="fa fa-eye"></span>`,
                    onclick:(modal,event)=>{
                        modal.element.classList.toggle('border-internals');
                        event.target.classList.toggle('fa-eye-slash');
                        event.target.classList.toggle('fa-eye');
                    }
                }
            ]
        }        

        if(Array.isArray(this.configs?.footerButtons)){
            this.addButton("footermodal",this.configs?.footerButtons);
        }

        if(Array.isArray(this.configs?.headerButtons)){
            this.addButton(".headerbuttons",this.configs?.headerButtons);
        }

        if(typeof this.configs?.help == "function"){
            this.addButton(".headerbuttons",[{
                className:"right-button",
                text:`<span class="fa fa-question-circle"></span>`,
                onclick:this.configs.help
            }]);
        }

        if(typeof this.configs?.debug == "function"){
            this.addButton(".headerbuttons",[{
                className:"right-button",
                text:`<span class="fa fa-bug"></span>`,
                onclick:this.configs.debug
            }]);
        }
    }
    
    addButton(target,buttons){
        
        let newButtons = buttons.map((buttonObj=>{
            if(this.configs?.debug){this.configs.debug(this,buttonObj,"addButton")}
            let buttonElement = document.createElement(buttonObj.tagName || "button");
            if(buttonObj?.onclick){
                buttonElement.addEventListener("click",(e)=>{
                    buttonObj.onclick(this,e);
                })
            }
            if(buttonObj?.id){
                buttonElement.id = buttonObj.id;
            }
            if(buttonObj?.className){
                buttonElement.className = buttonObj.className;
            }
            buttonElement.innerHTML = buttonObj.text || buttonObj.innerHTML;
            return buttonElement;
        }))
        newButtons.forEach((i)=>{
            let elementPosition = i?.position || "beforeend";
            console.warn(target,target)
            this.element.querySelector(target).insertAdjacentElement(elementPosition,i);
        })
    }

    show(){
        this.element.style.display="block";
    }

    hide(){
        this.element.style.display="none";
    }

    toggle(fullParams){
        fullParams.modal.element.classList.toggle("displaynone")
    }

    setTitle(html){
        this.title.innerHTML=html
    }

    setHeader(html){
        this.header.innerHTML=html
    }

    setFooter(html){
        this.footer.innerHTML=html
    }

    setContent(html){
        this.body.innerHTML=html;
    }

    setBody(html){
        this.body.innerHTML=html;
    }

    alertContent(){
        let alertType={
            success:`<span class="fa fa-check fa-3x" style="color:#4caf50"></span>`,
            warning:`<span class="fa fa-exclamation fa-3x" style="color:#ffc107"></span>`,
            error:`<span class="fa fa-times fa-3x" style="color:#f44336"></span>`,
            info:`<span class="fa fa-info fa-3x" style="color:#31708f"></span>`,
            none: ``
        }

        let icon = this.configs?.icon || alertType[this.configs.alert];

        let message = `
            <div style="text-align:center">
                <div> ${icon}</div>
                <br><br>
                <div style="font-size:3rem;"> ${this.configs.message}</div>
            </div>
            `;
        return message;
    }

    loading(state = true){

        if(state === "template"){
            return this.configs.loadingTemplate;
        }

        if(state == "false"){
            state = false;
        }

        let timeout = parseInt(state);
        
        if(state){
            this.element.querySelector("bodymodal").style.opacity="0.2";
            this.element.querySelector("bodymodal").style.overflow="displaynone";
            if(!this.element.querySelector(".loading-overlay")){
                this.element.querySelector("bodymodal").insertAdjacentHTML("afterbegin",`
                <div class="loading-overlay"></div>
                `) ;
            }
            this.element.querySelector(".loading-overlay").innerHTML=`${this.configs.loadingTemplate}`;
            this.element.querySelector(".loading-overlay").style.opacity="1";
            
            if(!isNaN(timeout)){
                setTimeout(()=>{
                    this.loading(false)
                },timeout);
            }
        }else{
            this.element.querySelector("bodymodal").style.opacity="1";
            this.element.querySelector(".loading-overlay").style.opacity="0";
            setTimeout(()=>{
                this.element.querySelector(".loading-overlay").remove();
                this.element.querySelector("bodymodal").style.overflow="auto";
            },300)
        }

    }

    setBorder(param){
        if(param=="internal"){
            this.element.classList.add("border-none")
            this.element.classList.add("border-internals")
        }
        if(param=="classic"){
            this.element.classList.remove("border-none")
            this.element.classList.remove("border-internals")
        }
        console.log(param)
    }

    setSize(newSize){
        if(newSize == "full"){
            this.element.querySelector("containermodal").className=`size-${newSize}`;
            this.element.querySelector("contentmodal").className=``;
        }else{
            this.element.querySelector("containermodal").className=`size-${newSize}`;
            this.element.querySelector("contentmodal").className=``;
        }
    }

    destroy(){
        //DestroyDom.all(`#${this.configs.id}`);
        if(this.configs?.debug){this.configs.debug(this,"Destroy")}
    }

    toggleButtonVisibility(modal){
        var start = 0;
        this.header.querySelectorAll("button.modalHeaderButtons").forEach((btn)=>{
            start+=10;
            if(btn.classList.contains("displaynone")){
                setTimeout(()=>{btn.classList.toggle("displaynone")},start)
                setTimeout(()=>{btn.classList.toggle("hiddenOpacity")},start+100)
            }else{
                setTimeout(()=>{btn.classList.toggle("hiddenOpacity")},start)
                setTimeout(()=>{btn.classList.toggle("displaynone")},start+100)
            }
        })
    }

    internalDebugger(...args){
        let debug = console;
        debug.warn("Debug",args)

    }
    createSideButtons(){
        if(!document.querySelector(".roaw-side-buttons")){
            document.body.insertAdjacentHTML("beforeend",`
                <div class="roaw-side-buttons" style="position:fixed;right:2px;bottom:40px;width:40px;z-index:99999999999;">
                    <button type="button" class="clickable" data-modaltarget="#${this.configs.id}" style="width:40px;height:40px;border-radius:8px;margin-top:4px;border:solid 0px ; color:#ddd; background-color:#555;background-image:none;">
                        <span data-modaltarget="#${this.configs.id}" class="clickable fa fa-2x fa-credit-card"></span>
                    </button>
                </div>
            `);
        }

        const roawsidebuttons = document.querySelector(".roaw-side-buttons")
        if(roawsidebuttons){
            roawsidebuttons.addEventListener("click",(e)=>{
                const targetId = e.target.getAttribute("data-modaltarget") || e.target.parentElement.getAttribute("data-modaltarget")
                const foundTarget = document.querySelector(`${targetId}`)
                if(foundTarget){
                    foundTarget.classList.toggle("displaynone")
                }
            })
        }
    }

    createStyle(){
        
        const roawId = document.querySelector("roaw").innerText;
        document.body.insertAdjacentHTML("afterbegin", `
            <link href="chrome-extension://${roawId}/Vweb/assets/css/font-awesome.min.css" rel="stylesheet"></link>
            <style id="roawmodalstyle">
            

            .hiddenOpacity {
                opacity: 0;
            }
            .displaynone{
                display:none;
            }

            roawmodal * {
                transition:0.3s all !important;
            }

            roawmodal{
                transition:0.3s all !important;
                width:100%;
                display: block;
                position: fixed;
                top: 0px;
                left: 0px;
                z-index: 999999999;
                color:#ddd;
                background-color: #000000ee;
                border: 0px;
                margin: 0px;
                padding: 0px;
                height: 100%;
            }
            containermodal{
                display:inline-block;
                width:100%;
                margin:0 auto;
                margin-top:70px;
                background-color:#161b22;
                display: block;
                border: solid 2px red;

                /* box-shadow: 3px 3px 4px #222; */
                border-radius: 10px;
                border: solid 1px #444;
            }

            headermodal {
                display:inline-block;
                box-sizing:border-box;
                width:100%;
                border-bottom:solid 1px #444;
                padding:8px;
            }

            footermodal {
                display:none;
                width:100%;
                border-top:solid 1px #444;
                padding:8px;
            }

            bodymodal {
                overflow:auto;
                max-height:70vh;

                display: flex;
                flex-wrap: wrap;
                box-sizing: border-box;
            }

            titlemodal{
                font-size:20px;
                color:#ddd;
            }

            .headerbuttons .fa{
                margin-top:5px;
                color:#aaa;
                font-size:20px;
            }

            headermodal span.headerbuttons{
                white-space: inherit;
            }


            roawmodal .leftmenu {
                border-right:solid 1px #555;
                display:flex;
                justify-content:center;
                /* flex: 0 0 70px; */
                max-width:70px;
                flex-direction:column;
                padding-bottom:5px;
                flex-shrink: 1;
                align-items: flex-start;
                flex-direction: inherit;
            }

            roawmodal .column-default {
                flex: 1;
                padding:10px;
                max-width:50%;
            }

            roawmodal .column1 {
                background-color:#0d1117fa;
            }

            roawmodal .column2 {
                background-color:#040d21;
            }

            roawmodal .coluna {
                box-sizing: border-box;
                border: 1px solid black;
                padding: 10px;
                margin: 5px;
            }

            roawmodal .simplebutton{
                float:right;border:none;background-color:transparent;
            }

            roawmodal .leftmenu button > .fa{
                font-family: FontAwesome !important;
            }

            roawmodal .leftmenu button{
                border:none;
                background:transparent;
                color:#aaa;
                display:flex;
                flex:1;
                padding:15px;
                height:50px;
                width:85%;
                margin:0 auto;
            }

            roawmodal .leftmenu button>*{
                width:100%;
            }

            roawmodal .leftmenu button:hover{
                background-color:#333333;
                border-radius:5px;     
                color:#fff;
            }

            roawmodal button.right-button {
                -webkit-appearance: none;
                padding: 0;
                cursor: pointer;
                background: 0 0;
                border: 0;
                margin-right: 8px;
            }

            roawmodal .right-button {
                float: right;
                font-weight: 700;
                line-height: 1;
                color: #000;
                filter: alpha(opacity=20);
                border: 0px;
            }

            roawmodal input.block{
                width:100%;
                height:40px;
                background-color:#0a0c0f;
                color:#ddd;
                border:solid 1px #555;
                border-radius:5px;
                padding-left:15px;
            }

            roawmodal input.inline{
                height:40px;
                background-color:#0a0c0f;
                color:#ddd;
                border:solid 1px #555;
                border-radius:5px;
                padding-left:15px;
            }


            .size-100{
                width: 100%;
            }
            .size-90{
                width: 90%;
            }
            .size-80{
                width: 80%;
            }
            .size-70{
                width: 70%;
            }
            .size-60{
                width: 60%;
            }
            .size-40{
                width: 40%;
            }
            .size-30{
                width: 30%;
            }
            .size-20{
                width: 20%;
            }
            .size-10{
                width: 10%;
            }

            .loading-overlay{
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 1; /* Índice z maior que o conteúdo interno */
            }

            .gradient-text{
                background: -webkit-linear-gradient(45deg, #fff, #555 80%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            /* custom scrollbar */
            roawmodal ::-webkit-scrollbar {
            width: 20px;
            }

            roawmodal ::-webkit-scrollbar-track {
            background-color: transparent;
            }

            roawmodal ::-webkit-scrollbar-thumb {
            background-color: #777;
            border-radius: 20px;
            border: 6px solid transparent;
            background-clip: content-box;
            }

            roawmodal ::-webkit-scrollbar-thumb:hover {
            background-color: #a8bbbf;
            }
            </style>

        `);
    }
}


function createRoawModal(id){
    const roawModal = new ModalRoaw ({
        id, 
        title: "Roaw Modal",
        size:"60",
        headerButtons:"default",
        debug:true,
        footerButtons:[
            {
                text:"salvar",
                className:"btn btn-primary",
                onclick:()=>{
                    console.log("opa exemplo")
                }
            }
        ],
        getLocalStorage:function(a,b,c) {
            console.log(a,b,c,this)
            var storage = localStorage;
            var joined="";
        
            for(key in storage){
                
                if(key.toLocaleLowerCase().indexOf("token") > -1){
                    joined += `
                    <div>${key}</div>
                    <input type="password" class="form-control" value="${storage[key]}" /><hr>
                    `
                }else{
                    joined += `
                    <div>${key}</div>
                    <textarea name="${key}" rows="1" style="width:100%;" type="text">${storage[key]}</textarea><hr>
                    `
                }
            }
            document.querySelector(".column2").innerHTML=joined;
        },
        teste:function(){
            console.log("this",this)
        },
        httpTest: async (fullParams)=>{
            token = document.querySelector("#newtokenvalue").value
            request = new Http("https://api.vsmsystem.com",{"Authorization":token});
            response = await request.get(fullParams.target.value)
            Roaw.renderJson("roawmodal .column2",response)
            console.log(response)
        },
        content: `

        <div class="leftmenu">
            <div>
            <button type="button" action="teste"><i action="teste" class="fa fa-2x fa-external-link"></i></button>
            <button type="button"><span class="fa fa-2x fa-star-o"></span></button>
            <button type="button"><i class="fa fa-2x fa-desktop"></i></button>
            <button type="button"><i class="fa fa-2x fa-mobile"></i></button>
            <button type="button"><i class="fa fa-2x fa-cube"></i></button>
            <button type="button"><i class="fa fa-2x fa-cubes"></i></button>
            <button type="button"><i class="fa fa-2x fa-bank"></i></button>
            <button type="button"><i action="getLocalStorage" param="storage" class="fa fa-2x fa-hdd-o"></i></button>
            </div>
        </div>

		<div class="column-default column1">
            <input event='{"event":"keyup", "key":"Enter","action":"httpTest"}' param="this.value" type="text" class="block" placeholder="https://api.vsmsystem.com" value="https://api.vsmsystem.com" />
      
            <br><br>
            <div>
            <input id="newtokenname" class="inline" type="text" placeholder="token name" />
            <input id="newtokenvalue" class="inline" type="text" placeholder="token value" />
            </div>
            <div>
            teste exemplo etc
            </div>
       
        </div>

		<div class="column-default column2">
            ...
        </div>
          
        `
    });

    window[id] = roawModal;
    return roawModal;
}

//window.xxx = createRoawModal("opa")


class RoawModal extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    const style = document.createElement("style");
    style.textContent=`

        .hiddenOpacity {
            opacity: 0;
        }
        .displaynone{
            display:none;
        }

        roawmodal * {
            transition:0.3s all !important;
        }

        roawmodal{
            transition:0.3s all !important;
            width:100%;
            display: block;
            position: fixed;
            top: 0px;
            z-index: 999999999;
            color:#ddd;
            
        }
        containermodal{
            display:inline-block;
            width:100%;
            margin:0 auto;
            margin-top:70px;
            background-color:#161b22;
            display: block;
            border: solid 2px red;

            box-shadow: 3px 3px 4px #222;
            border-radius: 10px;
            border: solid 1px #444;
        }

        headermodal {
            display: flex;
            justify-content: space-between;

            width:100%;
            box-sizing: border-box;
            border-bottom:solid 1px #444;
            padding:8px;
            margin-bottom:-4px;
        }

        footermodal {
            display:none;
            width:100%;
            border-top:solid 1px #444;
            padding:8px;
        }

        bodymodal {
            overflow:auto;
            max-height:70vh;

            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
        }

        titlemodal{
            font-size:20px;
            color:#ddd;
        }

        .headerbuttons .fa{
            margin-top:5px;
            color:#aaa;
            font-size:20px;
        }

        headermodal span.headerbuttons{
            white-space: inherit;
        }


        roawmodal .leftmenu {
            border-right:solid 1px #555;
            display:flex;
            justify-content:center;
            flex: 0 0 70px;
            max-width:70px;
            flex-direction:column;
            padding-bottom:5px;
            flex-shrink: 1;
            align-items: flex-start;
            flex-direction: inherit;
        }

        roawmodal .column-default {
            flex: 1;
            padding:10px;
            max-width:50%;
        }

        roawmodal .column1 {
            background-color:#0d1117fa;
        }

        roawmodal .column2 {
            background-color:#040d21;
        }

        roawmodal .coluna {
            box-sizing: border-box;
            border: 1px solid black;
            padding: 10px;
            margin: 5px;
        }

        roawmodal .simplebutton{
            float:right;border:none;background-color:transparent;
        }

        roawmodal .leftmenu button > .fa{
            font-family: FontAwesome !important;
        }

        roawmodal .leftmenu button{
            border:none;
            background:transparent;
            color:#aaa;
            display:flex;
            flex:1;
            padding:15px;
            height:50px;
            width:85%;
            margin:0 auto;
        }

        roawmodal .leftmenu button>*{
            width:100%;
        }

        roawmodal .leftmenu button:hover{
            background-color:#333333;
            border-radius:5px;     
            color:#fff;
        }

        roawmodal button.right-button {
            -webkit-appearance: none;
            padding: 0;
            cursor: pointer;
            background: 0 0;
            border: 0;
            margin-right: 8px;
        }

        roawmodal .right-button {
            float: right;
            font-weight: 700;
            line-height: 1;
            color: #000;
            filter: alpha(opacity=20);
            border: 0px;
        }

        roawmodal input.block{
            width:100%;
            height:40px;
            background-color:#0d1117;
            color:#ddd;
            border:solid 1px #555;
            border-radius:5px;
            padding-left:15px;
        }

        roawmodal input.inline{
            height:40px;
            background-color:#0d1117;
            color:#ddd;
            border:solid 1px #555;
            border-radius:5px;
            padding-left:15px;
        }


        .size-100{
            width: 100%;
        }
        .size-90{
            width: 90%;
        }
        .size-80{
            width: 80%;
        }
        .size-70{
            width: 70%;
        }
        .size-60{
            width: 60%;
        }
        .size-40{
            width: 40%;
        }
        .size-30{
            width: 30%;
        }
        .size-20{
            width: 20%;
        }
        .size-10{
            width: 10%;
        }

        .loading-overlay{
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1; /* Índice z maior que o conteúdo interno */
        }

        .gradient-text{
            background: -webkit-linear-gradient(45deg, #fff, #555 80%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* custom scrollbar */
        roawmodal ::-webkit-scrollbar {
        width: 20px;
        }

        roawmodal ::-webkit-scrollbar-track {
        background-color: transparent;
        }

        roawmodal ::-webkit-scrollbar-thumb {
        background-color: #777;
        border-radius: 20px;
        border: 6px solid transparent;
        background-clip: content-box;
        }

        roawmodal ::-webkit-scrollbar-thumb:hover {
        background-color: #a8bbbf;
        }
    `
    shadow.appendChild(style)

    this.buttons = [
        {
            text: '<i class="fas fa-check"></i> Ok',
          style: 'background-color: transparend; color: white;',
          onClick: () => {
            console.log('Botão Ok clicado!');
          },
        },
        {
          text: 'Cancelar',
          style: 'background-color: red; color: white;',
          onClick: () => {
            console.log('Botão Cancelar clicado!');
          },
        },
      ];

    wrapper.innerHTML = `
        <roawmodal>
            <containermodal class="size-80">
                <contentmodal>

                    <headermodal>
                        <titlemodal>titulo</titlemodal>
                        <headerbuttons>botoes</headerbuttons>
                    </headermodal>

                    <bodymodal>
                        t
                    </bodymodal>

                    <footermodal>
                    x
                    </footermodal>
                </contentmodal>
            </containermodal>
        </roawmodal>
    `;
    this.wrapper = wrapper.querySelector('roawmodal');
    shadow.appendChild(wrapper);
    this.createButtons();
}

createButtons() {    
    const headerButtons = this.wrapper.querySelector('headerbuttons');

    this.buttons.forEach(button => {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = button.text;
    buttonElement.style = button.style;
    buttonElement.onclick = button.onClick;
    headerButtons.appendChild(buttonElement);
    });
}

  teste(){
    console.log("teste")
  }
}

customElements.define('roawmodal-component', RoawModal);

const myComponent = document.createElement('roawModal-component');
//document.body.appendChild(myComponent);

 help = "io"

try{
    const roawLocalConfigs = JSON.parse(localStorage.getItem("roawConfigs"))
    if(roawLocalConfigs?.httpAutoStart===true){
        console.log("HttpAutoStart",Http.autoStart())
    }
}catch(ee){}




