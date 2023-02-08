/**
 * Este arquivo é achamado apenas quando o popup da extensão é aberto, o popup.js usa o chrome.tabs.executeScript pra injetar
 * Como ele executa injetado no contexto da pagina, ele acessa o HTML dela
 */


function DOMtoString(document_root) {
     // Obter a arvore dom da pagina na aba ativa (a que o usuario está)
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }
        node = node.nextSibling;
    }
    return html;
}


//enviar para o pop up da extensao via message o html capturado
chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});



if(document.getElementById('secondSearchText')){
    //busca e reescreve nome do aluno na pagina de busca
	//alert(document.getElementById('secondSearchText').value)
	var data = document.getElementById('secondSearchText').value
	if(document.getElementById('secondSearchText').value.length>3){
		var linksList = document.querySelectorAll('a');
		[].forEach.call(linksList, function(header) {
			//header.innerHTML = request.data;
			var replaceThis = new RegExp(data,"gi");
			header.innerHTML = header.innerHTML.replace(replaceThis,'<span style="background-color:#47bde2">'+data+'</span>');
		});
	}
}


//usei isso pra automatizar preenchimentos de campo de uma tela quando precisei gerar expenses pra 400 alunos
if(document.getElementById('00N3600000S2f9x')){
	document.getElementById('00N3600000S2f9x').getElementsByTagName('option')[8].selected=true
	document.getElementById('00N3600000S2fA6').value="30/11/2019"
	document.getElementById('00N3600000S2f9z').value="chamado 02049395"
}




if(document.getElementById('name_firstName')){
    /**
     * Criação de login, Ativação de usuário parceiro
     * O if acima detecta que está na pagina de criação/atiovação 
     */

    //ajustar apelido
    var first = document.getElementById('name_firstName').value;
    var last = document.getElementById('name_lastName').value;
    
    if (first.indexOf(" ")>-1){
        first = first.split(" ")
        first=first[0]
    }

    if (last.indexOf(" ")>-1){
        last = last.split(" ")
        last = last[last.length-1]
    }

    first=first.toLowerCase()
    last=last.toLowerCase()

    //numberone.com.br Username
    document.getElementById('Username').value=first+'.'+last+'@numberone.com.br';

    //definir apelido
    document.getElementById('CommunityNickname').value=first+'.'+last;

    //definir titulo
    document.getElementById('Title').value="Professor";
    
    //empresa/CompanyName, Wise Up ou Number One
    document.getElementById('CompanyName').value="Number One";

    //Departamento/Department
    document.getElementById('Department').value="Ensino";
    
    //papel
    document.getElementById('UserRole').options[3].selected=true

    //Perfil
    document.getElementById('Profile').options[26].selected=true

    //Ativar CRM content (professores e coordenadores)
    document.getElementById('UserPermissions_7').checked=true
}

if(window.location.href.indexOf("flightradar24")>-1){
    //pro véio remover os ADS do flightradar e poder ficar vendo os aviõezinhos mais de boa
    document.getElementById('responsiveBottomPanel').remove();
}
