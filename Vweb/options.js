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
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
	
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