document.addEventListener('DOMContentLoaded', async  ()=>{
	document.querySelector("#vsmlmenu").innerHTML= await sfetch("./painel_menu.html")
	roawElement = document.querySelector('roaw');
	roawElement.id=chrome.runtime.id;
	roawElement.innerHTML=chrome.runtime.id;
	neonCustomLoad()
	//createLocalModal()

	let modules = {
		debugger : ()=>{
			getTabs()
			
		}
	}

	$(s=>{
		$(".title").on("click", e =>{
			let module = e.target.getAttribute("screen") 
			if(module){
				modules[module]()
			}
		})
	})
});


window.ms = Http.autoStart();
endpoints = {
	"servico1":{
		"buscarEtc":(id)=>{return `etc/buscar/${id}`},
		"buscarDetalhesEtc":(id)=>{return `etc/${id}/detalhes`},
		"cancelarEtc":(id)=>{return `etc/${id}/cancelar`}
	},
	"servico2":"",
	"servico3":"",
	"servico4":""
};
services=[];

for(service in ms){

    createLocalModal(ms[service].nome,ms[service].nome,ms[service])


    $(".dropdownservices1").append(`<li><a href="#" class="chooseservice">${ms[service].nome}</a></li>`)
	
	services.push(`
	<tr> 
		<td>
			<button id="${ms[service].nome}" type="button" class="btn btn-default btn-icon btn-block modaltoggle">
			${ms[service].nome}
			<i class="fa fa-play"></i> </button>
		</td> 
		<td>${ms[service].url}</td>  
		<td>${ms[service].token?.name}</td> 
	</tr>`)
}

$(".chooseservice").on("click",e=>{

    e.target.parentElement.parentElement.parentElement.querySelector("button").innerHTML=e.target.innerHTML
})

document.querySelector(".msboxes").innerHTML=services.join("")
$(".modaltoggle").on("click",(b)=>{
	window[`${b.target.id}modal`].toggle()
})


function createLocalModal(id,title,http){
    window[id+"modal"] = roawModal = new ModalRoaw ({
        id, 
        title,
        size:"80",
		http,
		endpoints,
        headerButtons:"default",
        getLocalStorage:function() {
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
        },
        httpTest: async (fullParams)=>{
            
            token = document.querySelector("#newtokenvalue").value
            request = new Http("https://api.vsmsystem.com",{"Authorization":token});
            response = await request.get(fullParams.target.value)
            Roaw.renderJson("roawmodal .column2",response)
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





$("#doRequest1").on("click", async e=>{
    service = document.querySelector("#service1").innerText
    route = document.querySelector("#route1").value
    method = document.querySelector("#method1").value.toLocaleLowerCase()
    payload = document.querySelector("#payload1").value
    try{
        httpService = new Http(service)
        document.querySelector("#response1").innerHTML="<div style='margin:20px;'><i class='fa fa-3x fa-spin fa-circle-o-notch'></i></div>"
        result = await httpService[method](route,JSON.parse(payload))
        Roaw.renderJson("#response1",result)
    }catch(err){
        document.querySelector("#response1").innerHTML="Error: "+err

    }
})





































function compare(){
    testcount = 0;
    document.querySelectorAll(".testable").forEach(e=>{
        testcount++;
        console.table({
            "a":document.querySelector("#tra"+testcount).innerText,
            "b":document.querySelector("#trb"+testcount).innerText  
        })
        

        return
        console.table( {"a":JSON.parse(document.querySelector(".ra"+testcount).value),"b":JSON.parse(document.querySelector(".rb"+testcount).value)} )
      
    })
}
$("#runtest2").on("click",(e)=>{
    jwt.check()
})
$("#runtest1").on("click",(e)=>{
    legado.check()
})
$("#updatetokens").on("click",async (e)=>{
    updatetokens()
})


function showTokens(){
    var obj = {
        "token-l1":localStorage.getItem('@l1-Token'),
        "token-l2":localStorage.getItem('@l2-Token'),
        "token-vsm":localStorage.getItem('@jwtvsm-Token')
    }
    console.table(obj)
    console.log(JSON.stringify(obj))
}
async function updatetokens(){

    var token1 = await new Http("keycloak");
    var token2 = await new Http("keycloak");
    var token3 = await new Http("keycloak");

    console.warn("Busca token1")
    try{
        res = await token1.post("login",{
            "login":"sys",
            "senha":""
        })
        localStorage['@l-Token'] = "L "+res.token
        console.log("@l-Token",res)
    }catch(err){}
    setTimeout(async ()=>{
        try{
            console.warn("Valida token1")
            token1.setHeader({"Authorization":localStorage['@l-Token']})
            console.log("validar",{"Authorization":localStorage['@localiza-Token']})
            console.table(await token1.get("validar"))
        }catch(err){
            localStorage['@l-Token']=""
        }
    },500)

    // =======================================================================

    setTimeout(async () =>{
    
        console.warn("Busca token2")
        try{
            res2 = await token2.post("login",{
                "login":"sys.l@l.com",
                "senha":""
            })
            localStorage['@l-Token'] = "LGF "+res2.token
            console.log("@l-Token",res2)
        }catch(err){
            localStorage['@l-Token']=""
        }
        setTimeout(async ()=>{
            try{
                console.warn("Valida token2")
                token2.setHeader({"Authorization":localStorage['@l-Token']})
                console.log("validar",{"Authorization":localStorage['@l-Token']})
                console.table(await token2.get("validar"))
            }catch(err){}
        },700)
    },900)


    // =======================================================================

    setTimeout(async () =>{
    
        console.warn("Busca token3")
        try{
            res3 = await token3.post("login",{
                "login":"valdecir.merli@vsmsystem.com",
                "senha":atobs()
            })
            localStorage['@jwtvsm-Token'] = "vsm "+res3.token
            console.log("@jwtvsm-Token",res3)
        }catch(err){
            localStorage['@jwtvsm-Token']=""
        }
        setTimeout(async ()=>{
            try{
                console.warn("Valida token3")
                token3.setHeader({"Authorization":localStorage['@jwtvsm-Token']})
                console.log("validar",{"Authorization":localStorage['@jwtvsm-Token']})
                console.table(await token3.get("validar"))
            }catch(err){}
        },1000)
    },1200)

}

rotaslegado = {
    //"GET http://localhost:9001/rest/?func=consultaImagensPDF&id_multa=15307511&login=turbi&senha=@turbi765":"",
    //"POST http://localhost:9001/api/multas/search/":`{"headers":{"Authorization":"@tokentoken"},"body":{"order":"desc","pagina":"1","por_pagina":"100","filtros":{"placa":"coty001","ait":"TESTE2023","id_multa":"15043429","fine_id":15043429,"data_multa":{"inicio":"2022-04-30","fim":"2023-04-30"},"data_vencimento":{"inicio":"2022-04-30","fim":"2023-04-30"},"data_cadastro":{"inicio":"2022-04-30","fim":"2023-04-30"}}}}`
    //"GET http://localhost:9001/rest/?login=localiza_gf&senha=@localiza789&func=consultaImagensNotificacaoPDF&id_multa=14386692":"",
    //"GET http://localhost:9001/rest/?login=localiza_gf&senha=@localiza789&func=consultaOrgaosCodigo&cod_orgao=000200":"",
    // "GET http://localhost:9001/test_json/?func=consultaMultasImposicao&login=localiza&senha=@localiza789&id=8457822":"",
    // "GET http://localhost:9001/rest/?func=consultaMultas&login=localiza_gf&senha=@localiza789":"",
    "GET http://localhost:9001/api/m/img/9999999-999.download":'{"headers":{"Authorization":"@tokentoken"}}',
    "GET http://localhost:9001/api/m/img/99999":'{"headers":{"Authorization":"@m"}}',
    "GET http://localhost:9001/rest/?func=m&login=9999999&senha=9999999":"",
    "GET http://localhost:9001/rest/?func=m&login=m&senha=@m&m=m":"",
    "POST http://localhost:9001/rest/?func=m&login=m&senha=@m&placa=m":"",
    "GET http://localhost:9001/rest/?func=m&login=m&senha=@m&id=m":"",
    "GET http://localhost:9001/rest/?login=m&senha=@m&func=m&m=func=m&m=m":"",
    "GET http://localhost:9001/rest/?login=m&senha=@m&func=m&m=m":"",
    "GET http://localhost:9001/rest/?login=m&senha=@m&func=m":"",
    "GET http://localhost:9001/rest/?login=m&senha=@m&m=m&m=m":"",
    "GET http://localhost:9001/rest/?login=m&senha=@m&func=m":"",
    "POST http://localhost:9001/api/m/search/?teste1":`{"headers":{"Authorization":"@m"},"body":{"order":"desc","pagina":"1","por_pagina":"100","filtros":{"placa":"m","ait":"TESTE2023","id_m":"999","fine_id":999,"data_m":{"inicio":"2022-04-30","fim":"2023-04-30"},"data_vencimento":{"inicio":"2022-04-30","fim":"2023-04-30"},"data_cadastro":{"inicio":"2022-04-30","fim":"2023-04-30"}}}}}}}`,
    "POST http://localhost:9001/api/m/search/?teste2":`{"headers":{"Authorization":"@m"},"body":{"order":"desc","pagina":1,"por_pagina":100,"filtros":{"placa":"m"}}}}}}}}`,
    "GET http://localhost:9001/test_json/?func=m&login=m&senha=@m&id=999":"",
    "GET http://localhost:9001/test_json_g/?func=m&login=m&senha=@m&id=m":"",
    "GET http://localhost:9001/rest/?func=m&login=m&senha=@m&placa=m":""
    
    

    
}
rotasjwt = {
    //"GET http://localhost:9001/restv2/?func=m&id_multa=999&login=m&senha=@m":'{"headers":{"Authorization":"@m-Token"}}',
    //"POST http://localhost:9001/apiv2/m/search/":`{"headers":{"Authorization":"@m-Token"},"body":{"order":"desc","pagina":"1","por_pagina":"100","filtros":{"placa":"99","ait":"TESTE2023","id_m":"1","fine_id":1,"data_m":{"inicio":"2022-04-30","fim":"2023-04-30"},"data_vencimento":{"inicio":"2022-04-30","fim":"2023-04-30"},"data_cadastro":{"inicio":"2022-04-30","fim":"2023-04-30"}}}}`
    //"GET http://localhost:9001/test_jsonv2/?login=m&senha=@m&func=m
    //"GET http://localhost:9001/restv2/?func=m&login=m&senha=@m":'{"headers":{"Authorization":"@m-Token"}}',
    //"GET http://localhost:9001/restv2/?login=m&senha=@m&func=m&cod_orgao=m":'{"headers":{"Authorization":"@m-Token"}}',
    "GET http://localhost:9001/apiv2/m/img/99999-99999.download":'{"headers":{"Authorization":"@jwtvsm-Token"}}',
    "GET http://localhost:9001/apiv2/m/img/9999":'{"headers":{"Authorization":"@jwtvsm-Token"}}',
    "GET http://localhost:9001/restv2/?func=m&login=m&senha=m":'{"headers":{"Authorization":"@jwtvsm-Token"}}',
    "GET http://localhost:9001/test_jsonv2/?func=m&login=m&senha=@m&id=9999":"",
    "GET http://localhost:9001/restv2/?func=m&login=m&senha=@m&placa=m":'{"headers":{"Authorization":"@m-Token"}}',
    "POST http://localhost:9001/restv2/?func=m&login=m&senha=@m&placa=m":'{"headers":{"Authorization":"@m-Token"}}',
    "GET http://localhost:9001/restv2/?func=m&login=m&senha=@m&id=9999":'{"headers":{"Authorization":"@m-Token"}}',
    "GET http://localhost:9001/restv2/?login=m&senha=@m&func=m&id_m=func=m&id_multa=99999":'{"headers":{"Authorization":"@m-Token"}}',
    "GET http://localhost:9001/restv2/?login=m&senha=@m&func=m&id_m=9999":'{"headers":{"Authorization":"@m-Token"}}',
    "GET http://localhost:9001/restv2/?login=m&senha=@m&func=m&id_m=9999":'{"headers":{"Authorization":"@m-Token"}}',
    "GET http://localhost:9001/restv2/?login=m&senha=@m&func=m":'{"headers":{"Authorization":"@m-Token"}}',
    "GET http://localhost:9001/restv2/?login=m&senha=@m&func=m&cod_i=5":'{"headers":{"Authorization":"@m-Token"}}',
    "GET http://localhost:9001/restv2/?login=m&senha=@m&func=m":'{"headers":{"Authorization":"@m-Token"}}',
    "POST http://localhost:9001/apiv2/m/search/?teste1":`{"headers":{"Authorization":"@jwtvsm-Token"},"body":{"order":"desc","pagina":"1","por_pagina":"100","filtros":{"placa":"c","ait":"TESTE2023","id":"99","fine_id":99,"data_multa":{"inicio":"2022-04-30","fim":"2023-04-30"},"data_vencimento":{"inicio":"2022-04-30","fim":"2023-04-30"},"data_cadastro":{"inicio":"2022-04-30","fim":"2023-04-30"}}}}}}}`,
    "POST http://localhost:9001/apiv2/m/search/?teste2":`{"headers":{"Authorization":"@jwtvsm-Token"},"body":{"order":"desc","pagina":1,"por_pagina":100,"filtros":{"placa":"c"}}}}}}}}`,
    "GET http://localhost:9001/test_jsonv2/?func=m&login=m&senha=@m&id=9999":'{"headers":{"Authorization":"@m-Token"}}',
    "GET http://localhost:9001/test_json_gfv2/?func=m&login=m&senha=@m&id=9999":'{"headers":{"Authorization":"@m-Token"}}',
    "GET http://localhost:9001/restv2/?func=m&login=m&senha=@m&placa=m":'{"headers":{"Authorization":"@m-Token"}}'


    
}


var legado = new Http("http://localhost:9001");
legado.render={
    jpg : function(blob){
        return Roaw.returnImg(blob,{style:{width:"100px"}})
    },
    json : Roaw.renderJsonDropdown
}
legado.rotas = rotaslegado;
legado.table = $("#resultadoteste1");
legado.trid= 'tra';

legado.check = async function(){
    this.table.html("");
    this.counter = 0;
    for(rota in this.rotas){
        this.counter++;
        options = "";
        
        this.table.append(`<tr id="${this.trid}${this.counter}" class="testable"><td><i class="fa fa-circle-o-notch fa-spin"></td> <td>${rota}</td> </tr>`);

        const obs = {
            "method":rota.split(" ")[0].toLocaleLowerCase(),
            "url":rota.split(" ")[1]
        }

        if (this.rotas[rota]){
            options = JSON.parse(this.rotas[rota])
            Object.assign(obs,options);
            obs.headers.Authorization = localStorage.getItem(options.headers.Authorization);
        }

        try{
            const inicio = Date.now()
            const response = await this.get(obs)
            const fim = Date.now()
            const tempo = fim-inicio
            $(`#${this.trid}${this.counter}`).html(`
            <td>${tempo}ms</td> <td style="max-width:400px;overflow:auto;">${rota} <br><br> ${response}</td> 
            `)
            console.warn(rota)
            // console.log(response)
            //console.table(response)
        }catch(ee){
            $(`#${this.trid}${this.counter}`).html(`
            <td>Error</td> <td>${rota}</td> 
            `)

        }

    }
}




var jwt = new Http("http://localhost:9001");
jwt.render={
    jpg : function(blob){
        return Roaw.returnImg(blob,{style:{width:"100px"}})
    },
    json : Roaw.renderJsonDropdown
}
jwt.rotas = rotasjwt;
jwt.table = $("#resultadoteste2");
jwt.trid= 'trb';

jwt.check = async function(){
    this.table.html("");
    this.counter = 0;
    for(rota in this.rotas){
        this.counter++;
        options = "";
        
        this.table.append(`<tr id="${this.trid}${this.counter}"><td><i class="fa fa-circle-o-notch fa-spin"></td> <td>${rota}</td> </tr>`);

        const obs = {
            "method":rota.split(" ")[0].toLocaleLowerCase(),
            "url":rota.split(" ")[1]
        }

        if (this.rotas[rota]){
            options = JSON.parse(this.rotas[rota])
            Object.assign(obs,options);
            obs.headers.Authorization = localStorage.getItem(options.headers.Authorization);
        }

        try{
            const inicio = Date.now()
            const response = await this.get(obs)
            const fim = Date.now()
            const tempo = fim-inicio
            $(`#${this.trid}${this.counter}`).html(`
            <td>${tempo}ms</td> <td style="max-width:400px;overflow:auto;">${rota} <br><br> ${response}</td> 
            `)
            console.warn(rota)
            console.log(response)
            //console.table(response)
        }catch(ee){
            $(`#${this.trid}${this.counter}`).html(`
            <td>Error</td> <td>${rota}</td> 
            `)

        }

    }
}


const loLegado={}
const loLegadoGF={}
const loJWT={}
const loJWTGF={}

//default headers entra se nao tiver options na rota
//ja se tiver options na rota, as option é que serão usadas
//
window.httpOld = {
    "url":"http://localhost:9001/",
    "dfaultHeaders":{
        "Authorization":""
    },
    "rotas":{
      "GET /test_json/?func=m&login=m&senha=@m&id=9999":"",
      "GET /test_json/m":"",
      "GET /test_json_gf/m":{options:{headers:{},url:"", }},
      "GET /test_json_gf/m":"",
      "GET /rest/?func=m&login=m&senha=@m&placa=m":"",
      "GET /rest/consultaM1":"",
      "GET /rest/consultaM2":"",
      "GET /rest/consultaM3":"",
      "GET /rest/consultaImagens":"",
      "GET /rest/consultaImagensPDF":"",
      "GET /rest/consultaImagensNotPDF":"",
      "GET /rest/consultaImagensExPDF":"",
      "GET /rest/consultaImagensBoPDF":"",
      "GET /rest/consultaImagensFotoPDF":"",
      "GET /rest/consultaImagensCompPDF":"",
      "GET /rest/consultaInfracoes":"",
      "GET /rest/consultaCodigo":"",
      "GET /rest/consultaOrgaos":"",
      "GET /rest/consultaOrgaosCodigo":"",
      "POST /rest/consultaDetalhada":"",
      "POST /rest/consultaM1":"",
      "POST /rest/consultaImagens":"",
      "POST /rest/consultaImagensPDF":"",
      "POST /rest/consultaImagensNotificacaoPDF":"",
      "POST /rest/consultaImagensExtPDF":"",
      "POST /rest/consultaImagensBolPDF":"",
      "POST /rest/consultaImagensFotoPDF":"",
      "POST /rest/consultaImagensCompPDF":"",
      "POST /rest/consultaIn":"",
      "POST /rest/consultaInCodigo":"",
      "POST /rest/consultaOrg":"",
      "POST /rest/consultaOrgCod":"",
      "GET /api/v2/cadastra":"",
      "GET /api/v2/remove":"",
      "NONE /api/multas/img/":"",
      "GET /api/cadastra":"",
      "GET /api/remove":"",
      "POST /api/cadastra":"",
      "POST /api/remove":"",
      "GET /api/auth/requestT":"",
      "GET /api/auth/revokeT":"",
      "GET /api/auth/ ":"",
      "GET revokeAllT":"",
      "POST /api/auth/revokeT":"",
      "POST /api/auth/ ":"",
      "POST revokeAllT":"",
      "POST /api/multas/search/": {
        por_pagina:"10", 
        pagina:"1", 
        order:{
            attribute:""
        }, 
        filtros:{
            placa:"",
            ait:"",
            id_multa:"",
            fine_id:"",
            data_multa:{
                inicio:"",
                fim:""
            },
            data_vencimento:{
                inicio:"",
                fim:""
            },
            data_cadastro:{
                inicio:"",
                fim:""
            }  
        } 
    }
  }
}

const httpJWT = {}


function atobs(){
    return atob(atob(atob('......')))
    /*

    */
}