
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
			<div class="panel panel-default" style="position: static; zoom: 1;">
				<div class="panel-heading">
					<div class="panel-title">Painel1</div>

					<div class="panel-options">
						<a href="#" class="bg clearRight"><i class="entypo-arrows-ccw clearRight"></i></a> 
						<a href="#sample-modal" data-toggle="modal" data-target="#configmodal" class="bg showAsser"><i class="entypo-play showAsser"></i></a>
						<a href="#" data-rel="collapse"><i class="entypo-down-open"></i></a>
						<a href="#" data-rel="reload"><i class="entypo-arrows-ccw"></i></a>
						<a href="#" data-rel="close"><i class="entypo-cancel"></i></a>
					</div>
				</div>
				<div class="panel-body with-table">
					<table class="table table-bordered table-responsive">
						<thead>
							<tr>
								<th>A</th>
								<th>B</th>
								<th>C</th>
							</tr>
						</thead>

						<tbody id="painel1"></tbody>
					</table>

					
				</div>
			</div>

			<div>${htmlTabs}</div>

			<div class="panel panel-default" style="position: static; zoom: 1;">
				<div class="panel-heading">
					<div class="panel-title">Local Storage</div>

					<div class="panel-options">
						<a href="#sample-modal" data-toggle="modal" data-target="#configmodal" class="bg"><i class="entypo-plus"></i></a>
						<a href="#" data-rel="collapse"><i class="entypo-down-open"></i></a>
						<a href="#" data-rel="reload"><i class="entypo-arrows-ccw"></i></a>
						<a href="#" data-rel="close"><i class="entypo-cancel"></i></a>
					</div>
				</div>
				<div class="panel-body with-table">
					<table class="table table-bordered table-responsive">
						<thead>
							<tr>
								<th width="50%">Sistema</th>
								<th> </th>
							</tr>
						</thead>

						<tbody id="localstoragelist"></tbody>
					</table>

					
				</div>
			</div>
		</div>
		<div id="direita" class="col-md-6">
		</div>
	</div>
	`)
	$(".habilitaDebugger").on("click",e=>{
		let tabId = parseInt(e.target.getAttribute("tabId"));
		// console.log(tabId)
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
				// console.log(t)
			}else{
				if(t.url.indexOf(string) > -1){
					// console.log(t.id, t)
					window.currentTab={}
					window.currentTab.id=t.id
					if(debug){
						// console.log("Debug", t.id, t)
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
					if(localStorage['debug']=='true'){
						console.log("RESPONSE",parsed)
					}
                    // requestHistory.unshift(parsed);
					showQuestionInfo(parsed)
                }catch(err){
					if(localStorage['debug']=='true'){
						console.error("OPS---->", response.body)
					}
                    
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
        // console.log(item)
    })
}

function listQuestions(){
    requestHistory.forEach(item => {
		showQuestionInfo(item)
        
    })
}

function showQuestionInfo(item){
	// console.warn(item)
	if(item?.identifier=="GetAssertions"){
		console.log("GetAssertions", item.data)

		document.querySelector("#painel1").innerHTML=item.data.map(e =>{
			return `
			<tr>
				<td>${e.id}</td>
				<td>${atob(e.id).split("").reverse().join("")}</td>
				<td class="i${e.id} i${atob(e.id).split("").reverse().join("")} i${String(e.correct)}">${String(e.correct)}</td>
			</tr>
			`
		}).join("")
	}
	if(res = item?.data?.questionById){
		console.log("fullQinfo",item)
		var elq = document.createElement('html')
		var ela = document.createElement('html')
		//atob(e.id).split("").reverse().join("")
		//btoa(String(12344).split("").reverse())
		elq.innerHTML=res.contentsByQuestionIdList[0].textByTextId.body;

		console.warn(elq.innerText,  res)
		qPosition = res?.contentsByQuestionIdList[0]?.position;
		qTypename = res?.__typename;
		/* 
			assertionsByQuestionIdList
			commentsByQuestionIdList
			contentsByQuestionIdList
			repliesByQuestionIdList
			solutionsByQuestionIdList
		*/
		convertList={
			"0":"A",
			"1":"B",
			"2":"C",
			"3":"D",
			"4":"E",
		}


		let question = {
			"question":elq.innerText,
			//"answer":res.assertionsByQuestionIdList.filter(r=>{
			//	return r.correct
			//})
		}

		var answers = item?.data?.questionById?.assertionsByQuestionIdList.map(i =>{
			i.position =  i?.position
			i.textByTextId = i?.contentsByAssertionIdList[0]?.textByTextId?.body
			i.originalId = i.id
			i.id = btoa(String(i.id).split("").reverse().join(""));
			return i;
		})

	
		//${question.answer[0].contentsByAssertionIdList[0].textByTextId.body}
		console.log("question",question)
		console.log("asnwers",answers)
		asnwerList = answers.map(al =>{
			return `
			<div id="_${al.originalId}" class="asnwerOption a${al.id} a${al.originalId}">
			${al.id}
			${al.originalId}
			${al.position}
			${al.textByTextId}
			</div>
			`
		}).join("");

		$("#direita").append(`
		<div class="panel panel-gray" data-collapsed="0">  
			<div class="panel-heading" style=""> 
				<div class="panel-title">${qTypename} ${qPosition}</div> 
				<div class="panel-options"> 
					<a href="#sample-modal" data-toggle="modal" data-target="#sample-modal-dialog-1" class="bg showAsser">
					<i class="entypo-play showAsser"></i></a> <a href="#" data-rel="collapse"><i class="entypo-down-open"></i>
					</a> <a href="#" data-rel="reload"><i class="entypo-arrows-ccw"></i></a> 
					<a href="#" data-rel="close"><i class="entypo-cancel"></i></a> 
				</div> 
			</div>  
			<div class="panel-body"> 
				${elq?.innerText}<hr>
				${asnwerList}<br> 
			</div> 
		</div>
		`);
	}
}

document.body.addEventListener("click", t =>{
	if(t.target.classList.contains("clearRight")){
		document.querySelector("#direita").innerHTML="";
	}
	if(t.target.classList.contains("showAsser")){
		allOptions = document.querySelectorAll(".asnwerOption")
		allOptions.forEach(q =>{
			ra_class = q.id
			ra_class = ra_class.replaceAll("_","")
			ra_class = ra_class.replaceAll("=","")
			ra_staus = document.querySelector(".i"+ra_class)?.innerText
			if(ra_staus=="true"){
				document.querySelector(".a"+ra_class).style.backgroundColor="#ccc"
			}
			console.log("option", ra_class, ra_staus)
		})
		console.log("allOptions",allOptions)
	}
})



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


















document.addEventListener("DOMContentLoaded",()=>{
    listarLocalStorage()
})


