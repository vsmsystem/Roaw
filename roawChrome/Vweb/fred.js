document.addEventListener('DOMContentLoaded', async  ()=>{
	//document.querySelector("#vsmlmenu").innerHTML= await sfetch("./painel_menu.html")
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
        chromeStorage: async (self)=>{
            const {roawHttp} =   await chrome.storage.local.get('roawHttp')
            self.modal.element.querySelector(".column2").innerHTML=`
            <button type="button">Salvar</button>
            <textarea style="background-color:#000;width:100%;height:100%;border:none;">${roawHttp}</textarea>
            `
        },
        getLocalStorage:function(self) {
            console.log("getStorage")
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
            self.modal.element.querySelector(".column2").innerHTML=joined;

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
            <button type="button"><i action="chromeStorage" param="storage" class="fa fa-2x fa-hdd-o"></i></button>
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


$("#endpoint1").on("change",(e)=>{
    document.querySelector("#route1").value=e.target.value
})
