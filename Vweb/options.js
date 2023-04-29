
// Saves options to chrome.storage.sync.
function save_options() {
  var color = document.getElementById('color').value;
  var instancia = document.getElementById('instancia').value;
  var likesColor = document.getElementById('like').checked;
  chrome.storage.sync.set({
    favoriteColor: color,
    likesColor: likesColor,
	instancia: instancia
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status').innerHTML = 'Options saved.';
    
    setTimeout(function() {
      document.getElementById('status').innerHTML = '';
    }, 750);
  });
}




// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    favoriteColor: 'red',
    likesColor: true,
	instancia: ''
  }, function(items) {
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
	document.getElementById('instancia').value = items.instancia;
  });
}
document.addEventListener('DOMContentLoaded', async  ()=>{
	document.querySelector("#vsmlmenu").innerHTML= await sfetch("./painel_menu.html")
	neonCustomLoad()

	let modules = {
		debugger : ()=>{
			getTabs()
			
		}
	}

	$(s=>{
		$(".title").on("click", e =>{
			let module = e.target.getAttribute("screen") 
			if(module){
				console.log(module)
				modules[module]()
			}
		})
	})
	restore_options()
	document.getElementById('save').addEventListener('click',save_options);
});
	
//############################################################################
function getSisnum(){
	var qtd = document.getElementsByClassName('field_table').length;
	var arr=document.getElementsByClassName('field_table');

	for(i=0;i<qtd;i++){
		if(arr[i].innerText.indexOf('Registro no Sisnum')>-1){
			var saida = arr[i].innerText;
			console.log('['+i+'] - '+arr[i].innerText);
		}
		
	}
	document.getElementById("testeadicionais").innerHTML=saida;
}
//--------------------------------------
function getFacilidade(){
	var saida = document.getElementsByName('emuladorTelNet')[0].value;
	document.getElementById("testeadicionais").innerHTML='<pre>'+saida+'</pre>';
}
//--------------------------------------
function buscapn(g){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://vsmsystem.com', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("pTexto="+g+"&pTelefone=&pNome=&pSobreNome=&pMatricula=&pDepartamento=&pCidade=&buscaAvancada=&pArea=&pResultadosPorPagina=20&pagNum=1&servico=buscarColaboradores");
	xhr.responseType = "text";
	xhr.onload = function(){
	  document.getElementById("tela").innerHTML=this.response;
  	  sisnum();

	}
}

function buscaSas(g){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://vsmsystem.com', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("pTexto="+g+"&pTelefone=&pNome=&pSobreNome=&pMatricula=&pDepartamento=&pCidade=&buscaAvancada=&pArea=&pResultadosPorPagina=20&pagNum=1&servico=buscarColaboradores");
	xhr.responseType = "text";
	xhr.onload = function(){
	  document.getElementById("tela").innerHTML=this.response;
  	  getFacilidade();

	}
}

function buscaManobra(g){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://vsmsystem.com', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("ba=&acao=TEL&telefone=6238777944&x=24&y=13&opcaotelefone=&opcaoBa=");
	xhr.responseType = "text";
	xhr.onload = function(){
	  console.log(this.response);
  	  
	}
}

function buscaWise(g){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://vsmsystem.com', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("?teste=off");
	xhr.responseType = "text";
	xhr.onload = function(){
	  console.log(this.response).replace(/src/gi, "alt");;
  	  document.getElementById('toolnow').innerHTML=this.response;
	}
}
//-------------------------------------------
function msTime(ms){
	  function duas_casas(numero){
		if (numero <= 9){
		  numero = "0"+numero;
		}
		return numero;
	  }
	segundos = duas_casas(parseInt(( ms / 1000 ) % 60));      // se não precisar de segundos, basta remover esta linha.
	minutos  = duas_casas(parseInt(( ms / 60000 ) % 60));     // 60000   = 60 * 1000
	horas    = duas_casas(parseInt(ms / 3600000));            // 3600000 = 60 * 60 * 1000
	resultado = horas+":"+minutos+":"+segundos;
	return resultado;
}

function msTime2(ms){
  function duas_casas(numero){
    if (numero <= 9){
      numero = "0"+numero;
    }
    return numero;
  }
  s=parseInt(ms/1000);
  hora = duas_casas(parseInt(s/3600));
  minuto = duas_casas(parseInt((s%3600)/60));
  segundo = duas_casas((s%3600)%60);
  formatado = hora+":"+minuto+":"+segundo;
  console.log(formatado);
  return formatado;
}


//msTime(new Date().getTime() - start_date);



function buildTabs(tabArray){
	let htmlTabs = tabArray.map(tab=>{
		return `<button style='width:100%;margin-bottom:2px;' type='button' class="btn btn-default habilitaDebugger" tabId="${tab.id}"> ${tab.title} </button>`
	}).join("")
	$(".main-content").html(`
	<div class="row">
		<div id="esquerda" class="col-md-6">
			<div>${htmlTabs}</div>
		</div>
		<div id="direita" class="col-md-6">
		</div>
	</div>
	`)
	$(".habilitaDebugger").on("click",e=>{
		let tabId = parseInt(e.target.getAttribute("tabId"));
		console.log(tabId)
		activateDebug(tabId)
	})
}


/*
I need to create a function to list tabs, and choose a tab to attach debugger
*/
requestHistory=[];
var currentTab;
var version = "1.0";

// chrome.tabs.query( //get current Tab
// {
//     currentWindow: true,
//     active: true
// },
// function(tabArray) {
//     currentTab = tabArray[0];
//         chrome.debugger.attach({ //debug at current tab
//             tabId: currentTab.id
//         }, version, onAttach.bind(null, currentTab.id));
//     }
// )
function getTabs(string, debug = false){
	var currentTab;
	var version = "1.0";

	chrome.tabs.query({},
	function(tabArray) {
		currentTab = tabArray[0];
		
		tabArray.forEach(t =>{
			if(!string){
				console.log(t)
			}else{
				if(t.url.indexOf(string) > -1){
					console.log(t.id, t)
					window.currentTab={}
					window.currentTab.id=t.id
					if(debug){
						console.log("Debug", t.id, t)
						activateDebug(t.id)
					}
				}

			}
		})
		buildTabs(tabArray)
		}
	)
}

currentTab = {};
function activateDebug(id){
	currentTab.id = id
	chrome.debugger.attach({ //debug at current tab
			tabId: currentTab.id
		}, version, onAttach.bind(null, currentTab.id)
	);
}
function onAttach(tabId) {

    chrome.debugger.sendCommand({ //first enable the Network
        tabId: tabId
    }, "Network.enable");

    chrome.debugger.onEvent.addListener(allEventHandler);

}


function allEventHandler(debuggeeId, message, params) {


    if (currentTab.id != debuggeeId.tabId) {
        return;
    }

    if (message == "Network.responseReceived") { //response return 
        chrome.debugger.sendCommand({
            tabId: debuggeeId.tabId
        }, "Network.getResponseBody", {
            "requestId": params.requestId
        }, function(response) {
            if(response){
                // chrome storage has a limitation of 200 request per minute
                // chromeStorage.pushItem("requestHistory", response)
                try{
                    var parsed = JSON.parse(response.body)
                    requestHistory.unshift(parsed);
					showQuestionInfo(parsed)
                }catch(error){
                    //
                }
            }
            // jsonDesc = JSON.parse(response.body)
            // console.log("Questions", jsonDesc.data.questionById.contentsByQuestionIdList[0].textByTextId.body,  jsonDesc.data.questionById.assertionsByQuestionIdList)
            // you get the response body here!
            // you can close the debugger tips by:
            // chrome.debugger.detach(debuggeeId);
        });
    }

}


function listRequestHistory(){
    requestHistory.forEach(item => {
        console.log(item)
    })
}

function listQuestions(){
    requestHistory.forEach(item => {
		showQuestionInfo(item)
        
    })
}

function showQuestionInfo(item){
	if(res = item?.data?.questionById){
		// console.log(res)
		var el = document.createElement('html')
		el.innerHTML=res.contentsByQuestionIdList[0].textByTextId.body;

		// console.log(el.innerText)
		// console.table(res.assertionsByQuestionIdList)
		convertList={
			"0":"A",
			"1":"B",
			"2":"C",
			"3":"D",
			"4":"E",
		}


		let question = {
			"question":el.innerText,
			"answer":res.assertionsByQuestionIdList.filter(r=>{
				return r.correct
			})
		}
		//${question.answer[0].contentsByAssertionIdList[0].textByTextId.body}
		console.log("question",question)

		$("#direita").append(`
		<div class="panel panel-gray" data-collapsed="0">  
			<div class="panel-heading" style="display:none"> 
				<div class="panel-title">Gray Panel</div> 
				<div class="panel-options"> 
					<a href="#sample-modal" data-toggle="modal" data-target="#sample-modal-dialog-1" class="bg">
					<i class="entypo-cog"></i></a> <a href="#" data-rel="collapse"><i class="entypo-down-open"></i>
					</a> <a href="#" data-rel="reload"><i class="entypo-arrows-ccw"></i></a> 
					<a href="#" data-rel="close"><i class="entypo-cancel"></i></a> 
				</div> 
			</div>  
			<div class="panel-body"> 
				${el.innerText}<br> 
				(${convertList[question.answer[0].position]})
			</div> 
		</div>
		`);
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


async function nfeData2(){
    //
    const nfeHtml =  document.querySelectorAll("#tabResult tr");
    if(nfeHtml.length <= 0){
        return false
    }
    const estabelecimento = document.querySelector("#u20").innerText
    const cnpj = document.querySelector("#conteudo > div.txtCenter > div:nth-child(2)").innerText.replace("CNPJ: ","")
    const endereco = document.querySelector("#conteudo > div.txtCenter > div:nth-child(3)").innerText;
    const totalSomado = document.querySelector(".txtMax").innerText
    // const dataEmissao = document.querySelector(".ui-listview").innerText.split("Emissão: ")[1].split(" - ")[0];
    const dataEmissao = "";

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

	await sfetch("http://www.vsmsystem.com",nfe)
	await sfetch("http://www.vsmsystem.com",itens)

    nfe.itens = itens;
    console.log(JSON.stringify(nfe))
 }

$(function(){
	$(".nfe").on("click",async (e)=>{
		console.log(e.target.getAttribute("src"))
		let html = await sfetch(e.target.getAttribute("src"));
		document.querySelector("#b2").innerHTML = html;
	})
	$("#btnParse").on("click",()=>{
		// console.log(document.querySelector("#b2").innerHTML)
		let lista = {}
		// lista.nomeLoja=document.querySelector("#u20").innerText;
		// lista.cnpj=document.querySelector("#conteudo > div.txtCenter > div:nth-child(2)").innerText
		nfeData2()

	})
})




class ModalPortal {
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
  
        this.createModal();

        if(this.configs?.show==true){
            this.show()
        }        
        if(configs?.preventCloseDropdown === true){
            $(document).on('click', selector, (e) => {
                e.stopPropagation();
            });
        }

        //dentro do on do jquery o this é o elemento do dom, usar o self se necessário
        var self = this;
        this.$element.on('show.bs.modal', function (e) {
            if(self.configs?.debug){self.configs.debug(self,e,"beforeShow")}
            if(self.configs?.beforeShow){
                self.configs.beforeShow(self,e)
            }
        })
        this.$element.on('shown.bs.modal', function (e) {
            if(self.configs?.debug){self.configs.debug(self,e,"afterShow")}
            if(self.configs?.afterShow){
                self.configs?.afterShow(self,e)
            }
        })
        this.$element.on('hide.bs.modal', function (e) {
            if(self.configs?.debug){self.configs.debug(self,e,"beforeHide")}
            if(self.configs?.preventClose){
                if(typeof self.configs?.preventClose == "function"){
                    self.configs?.preventClose(self,e);
                }
                e.preventDefault();
                return;
            }
            if(self.configs?.beforeHide){
                self.configs?.beforeHide(self,e)
            }
            if(self.configs?.destroyOnClose){
                self.destroy()
            }
        })

        this.$element.on('hidden.bs.modal', function (e) {
            if(self.configs?.debug){self.configs.debug(self,e,"afterHide")}
            if(self.configs?.afterHide){
                self.configs?.afterHide(self,e)
            }
        })
        this.$element.on('loaded.bs.modal', function (e) {
            if(self.configs?.debug){self.configs.debug(self,e,"loaded")}
            if(self.configs?.loaded){
                self.configs?.loaded(self,e)
            }
        })

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
            <div class="modal-footer">
                <div class="border-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
                </div>
            </div>
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

            <div class="modal-header">
                <div class="header-buttons pull-right">
                    <button type="button" class="right-button" data-dismiss="modal" aria-label="Close">
                    <span class="fa fa-times"></span>
                        <!-- <span aria-hidden="true">&times;</span> -->
                    </button>
                </div>

                <h4 class="modal-title">${this.configs.title}</h4>
                
            </div>
            `;
        }

        return headerCallback;

    }

    createModal(){
        let footer = this.createFooter(this.configs?.footer); 
        let header = this.createHeader(this.configs?.header); 
        document.body.insertAdjacentHTML("beforeend",`
            <div class="modal fade modal-portal border-none border-internals" tabindex="-1" role="dialog" id="${this.configs.id}">
                <div class="modal-dialog modal-${this.configs.size}" role="document">
                    <div class="modal-content">
                        
                        ${header}
                        <div class="modal-body">
                            ${this.configs?.content}
                        </div>

                        ${footer}

                    </div>
                </div>
            </div>
        `);
        this.$element = $(`#${this.configs.id}`)
        this.element = document.querySelector(`#${this.configs.id}`);
        this.header = document.querySelector(`#${this.configs.id} .modal-header`);
        this.body = document.querySelector(`#${this.configs.id} .modal-body`);
        this.footer = document.querySelector(`#${this.configs.id} .modal-footer`);
        this.title = document.querySelector(`#${this.configs.id} .modal-title`);
        
        //acionamento de metodos via atributos html
        this.element.addEventListener("click",(e)=>{
            let target = e.target
            let action = target.getAttribute("action");
            let param = target.getAttribute("param") || target.value || target.innerText;
            if(this[action]){
                if(this.configs?.debug){this.configs.debug(this,e,{action,param})}
                this[action](param);
            }
        })
        
        if(this.configs?.headerButtons == "default"){
            this.configs.headerButtons=[
                {
                    tagName:"div",
                    className:"btn-group pull-right",
                    text:`
                    <button type="button" class="right-button dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <span class="fa fa-cog"></span>
                        </button>
                        <ul class="dropdown-menu pull-right" role="menu">
                            <li><a href="#" action="setSize">100</a></li>
                            <li><a href="#" action="setSize">90</a></li>
                            <li><a href="#" action="setSize">80</a></li>
                            <li><a href="#" action="setSize">70</a></li>
                            <li><a href="#" action="setSize">60</a></li>
                            <li><a href="#" action="setSize">50</a></li>
                            <li><a href="#" action="setSize">40</a></li>
                            <li><a href="#" action="setSize">30</a></li>
                            <li><a href="#" action="setSize">20</a></li>
                            <li><a href="#" action="setSize">10</a></li>
                            <li><a href="#" action="setSize">sm</a></li>
                            <li><a href="#" action="setSize">md</a></li>
                            <li><a href="#" action="setSize">lg</a></li>
                            <li class="divider"></li>
                            <li><a href="#" action="setBorder" param="internal">Borda Interna</a></li>
                            <li><a href="#" action="setBorder" param="classic">Borda Classica</a></li>
                            <li class="divider"></li>
                            <li><a href="#" action="loading" param="true">loading ON</a></li>
                            <li><a href="#" action="loading" param="false">loading OFF</a></li>
                        </ul>
                    `,
                    onclick:()=>{}
                },
                {
                    className:"right-button",
                    text:`<span class="fa fa-ellipsis-h"></span>`,
                    onclick:(modal,event)=>{
                        console.log("er",modal)
                        modal.toggleButtonVisibility()
                    }
                },{
                    className:"hiddenOpacity hidden modalHeaderButtons right-button",
                    text:`<span class="fa fa-car"></span>`,
                    onclick:()=>{}
                },{
                    className:"hiddenOpacity hidden modalHeaderButtons right-button",
                    text:`<span class="fa fa-database"></span>`,
                    onclick:()=>{}
                }
                ,{
                    className:"hiddenOpacity hidden modalHeaderButtons right-button",
                    text:`<span class="fa fa-table"></span>`,
                    onclick:()=>{}
                }
                ,{
                    className:"hiddenOpacity hidden modalHeaderButtons right-button",
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
                    className:"hiddenOpacity hidden modalHeaderButtons right-button",
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
            this.addButton(".border-footer",this.configs?.footerButtons);
        }

        if(Array.isArray(this.configs?.headerButtons)){
            this.addButton(".header-buttons",this.configs?.headerButtons);
        }

        if(typeof this.configs?.help == "function"){
            this.addButton(".header-buttons",[{
                className:"right-button",
                text:`<span class="fa fa-question-circle"></span>`,
                onclick:this.configs.help
            }]);
        }

        if(typeof this.configs?.debug == "function"){
            this.addButton(".header-buttons",[{
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
            this.element.querySelector(target).insertAdjacentElement(elementPosition,i);
        })
    }

    show(){
        this.$element.modal("show")
    }

    hide(){
        this.$element.modal("hide")
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
        if(state == "false"){
            state = false;
        }

        let timeout = parseInt(state);
        
        if(state){
            this.element.querySelector(".modal-body").style.opacity="0.2";
            this.element.querySelector(".modal-body").style.overflow="hidden";
            if(!this.element.querySelector(".loading-overlay")){
                this.element.querySelector(".modal-body").insertAdjacentHTML("afterbegin",`
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
            this.element.querySelector(".modal-body").style.opacity="1";
            this.element.querySelector(".loading-overlay").style.opacity="0";
            setTimeout(()=>{
                this.element.querySelector(".loading-overlay").remove();
                this.element.querySelector(".modal-body").style.overflow="auto";
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
            this.element.querySelector(".modal-dialog").className=`modal-dialog modal-${newSize}`;
            this.element.querySelector(".modal-content").className=`modal-content`;
        }else{
            this.element.querySelector(".modal-dialog").className=`modal-dialog modal-${newSize}`;
            this.element.querySelector(".modal-content").className=`modal-content`;
        }
    }

    destroy(){
        DestroyDom.all(`#${this.configs.id}`);
        if(this.configs?.debug){this.configs.debug(this,"Destroy")}
    }

    toggleButtonVisibility(modal){
        var start = 0;
        this.header.querySelectorAll("button.modalHeaderButtons").forEach((btn)=>{
            start+=10;
            if(btn.classList.contains("hidden")){
                setTimeout(()=>{btn.classList.toggle("hidden")},start)
                setTimeout(()=>{btn.classList.toggle("hiddenOpacity")},start+100)
            }else{
                setTimeout(()=>{btn.classList.toggle("hiddenOpacity")},start)
                setTimeout(()=>{btn.classList.toggle("hidden")},start+100)
            }
        })
    }

    internalDebugger(...args){
        let debug = console;
        debug.warn("Debug",args)

    }



}

class DestroyDom{

    //precisava criar alguns loops de removeListeners de click,change,load,keys,etc, pois o dom é removido mas events ficam na memoria
    //existe uma certa complexidade em remover eventListeners nativamente, alguns loops aninhados, o jquery ajuda um pouco
    //na verdade é impossivel deletar objetos no js, apenas a referencia é deletada, 
    //se nao houver mais referencia o garbage collector termina o serviço
    //porem tem casos em que outras referencias nao obvias mantem o objeto vivo, outras referencias ao objeto que o dev não sabe que existe
    //a principio é inefetvivo deletar, uma tentativa seria guardar a referencia do new MinhaClasse em uma variavel e depois setar ela como null, mas precisaria criar um "gerenciador externo de instancias"
    //isso aqui é uma tentativa de limpar memoria, ela limpa pelo menos algumas coisas, por mais que fiquem rastros ocupando memoria de forma invisivel

    static all(selector){
        $(selector).off()
        let childrens = document.querySelector(selector)
        while (childrens.lastElementChild) {
            childrens.removeChild(childrens.lastElementChild);
        }
        $(selector).remove()
    }
}


window.m1 = new ModalPortal({
	id: "configmodal", //id do elemento principal da modal
	title: "Adicionar token",
	size:"md",
	headerButtons:"default",
	footerButtons:[{text:"salvar",className:"btn btn-primary",onclick:()=>{
        localStorage[document.querySelector("#newtokenname").value] = document.querySelector("#newtokenvalue").value
        listarLocalStorage()
    }}],
	content: `
	  <div>
      <input id="newtokenname" class="form-control" type="text" placeholder="token name" />
      <input id="newtokenvalue" class="form-control" type="text" placeholder="token value" />
	  </div>
  `})















document.addEventListener("DOMContentLoaded",()=>{
    listarLocalStorage()
})


