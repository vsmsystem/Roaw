//executa ao terminar o carregamento da pagina, no escopo da pagina
	function etaGetSID(){

		if(!document.getElementsByClassName("botaoAlternaMenu")[0]){
			return;
		}
		// localStorage['sessid']="teste";
		// localStorage['tree']="teste";
		localStorage['time']=Date.now();

		if(!localStorage["nightTheme"]){
			localStorage["nightTheme"]="false";
			$("body").removeClass("night")
		}
		
		if(localStorage["nightTheme"]=="true"){
			$("body").addClass("night")
		}else{
			$("body").removeClass("night")
		}


		$(".navbar-right").append(`
			<li id="changeNight"><span class="fa fa-adjust" style="margin-right:20px;margin-left:10px;"></span></li>
			<li id="loadtest"><span class="fa fa-ellipsis-h" style="margin-right:20px;margin-left:10px;"></span></li>
		`)
		$("#changeNight").on("click",function(){
			nightToggle();
		})

		$("#loadtest").on("click",function(){
			blockScreen()
			setTimeout(function(){
				unblockScreen()
			},2800)
		
		})

		$("body").append(`
			<div class="darkbg" style="display:none;">
			<div class="loading-contents loader" style="margin-top:25%;">
			<div class="flipper">
				<div class="front"></div>
				<div class="back"></div>
			</div>
			<div class="shadow"></div>
			</div>
			</div>
		`);

		//<link href="dist/css/etc.css" rel="stylesheet">
		$("head").append(`
		<style>
			.night {
				background-color: #111;
				color:#ccc;
			}

			/*
			body{
			background-color: #111;
			color:#ccc;
			transition: all 0.3s ease-in-out;
			}
			*/

			.night .navbar{
			background-color: #0a0a0a;
			}
			.night .navbar-default {
			/* background-color: #f8f8f8; */
			border-color: #111;
			}
			
			/* menu dropdown, deixar comentado pra esse tema */
			.night .navbar-top-links .dropdown-menu li a{
			/* color:#f00; */
			/* background-color: #0f0; */
			}
			
			.night .btn-block{
			background-color: #404040;
			color:#ddd;
			}
			.night .page-header {
			border-bottom: 1px solid #111;
			}
			
			/* sidebar menu selecionado */
			.night .sidebar ul li a.active{
			background-color:#333;
			}
			
			/* elementos do canto superior esquerdo hover */
			.night .nav>li>a:focus, .night .nav>li>a:hover{
			background-color:#222;
			}
			/* elementos do canto superior esquerdo quando clicados */
			.night .nav .open>a, .night .nav .open>a:focus, .night .nav .open>a:hover{
			background-color: #222;
			}
			
			/* o dropdown do relogio */
			.night .dropdown-menu
			{
			border:solid 1px #555;
			background-color: #222;
			}
			
			.night .dropdown-menu>li>a:focus, .night .dropdown-menu>li>a:hover{
			color:#fff;
			/* border:solid 1px #f00; */
			background-color: transparent;
			}
			.night .dropdown-menu .divider {
			
			background-color: #555;
			}
			.night .botaoAlternaMenu{
			background-color: #222;
			border-color:#333 ;
			color:#ccc;
			}
			.night .botaoAlternaMenu:hover{
			background-color: #111;
			border: none;
			color:#aaa;
			}
			.night .botaoAlternaMenu:active{
			background-color: #111;
			border: none;
			color:#aaa;
			}
			.night .botaoAlternaMenu:focus{
			background-color: #111;
			border: solid 1px #444;
			color:#aaa;
			}
			
			.night .sidebar ul li {
			border-bottom: none;
			background-color:#111;
			}
			
			.night .nav li a {
			color: #ddd;
			}
			
			.night #page-wrapper{
			background-color: #222;
			border-left:none;
			}
			.night textarea:focus,
			.night select:focus,
			.night input[type="text"]:focus,
			.night input[type="password"]:focus,
			.night input[type="datetime"]:focus,
			.night input[type="datetime-local"]:focus,
			.night input[type="date"]:focus,
			.night input[type="month"]:focus,
			.night input[type="time"]:focus,
			.night input[type="week"]:focus,
			.night input[type="number"]:focus,
			.night input[type="email"]:focus,
			.night input[type="url"]:focus,
			.night input[type="search"]:focus,
			.night input[type="tel"]:focus,
			.night input[type="color"]:focus,
			.night .uneditable-input:focus {  
			border-color: #0f0;
			box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px #0f0;
			outline: 0 none;
			}
			
			.night textarea,
			.night input[type="text"],
			.night input[type="password"],
			.night input[type="datetime"],
			.night input[type="datetime-local"],
			.night input[type="date"],
			.night input[type="month"],
			.night input[type="time"],
			.night input[type="week"],
			.night input[type="number"],
			.night input[type="email"],
			.night input[type="url"],
			.night input[type="search"],
			.night input[type="tel"],
			.night input[type="color"],
			.night .uneditable-input {  
			background-color: #111;
			border: solid 1px #333;
			}
			.night .form-control{
			background-color: #111;
			border: solid 1px #333;
			color:#ccc;
			}
			
			.night .table-bordered {
			border: 1px solid #000;
			}
			.night .table-hover tbody tr:hover td, .night  .table-hover tbody tr:hover th {
			background-color: #333;
			}
			/* 
			.night .table-striped > tbody > tr:nth-child(2n+1) > td, .night  .table-striped > tbody > tr:nth-child(2n+1) > th {
			background-color: #1f1f1f;
			} */
			.night .table-striped>tbody>tr:nth-of-type(odd) {
			background-color: #191919;
			}
			.night table.dataTable thead .sorting:after {
			color: #999;
			}
			.night .table-bordered > tbody > tr > td, 
			.night .table-bordered > tbody > tr > th, 
			.night  .table-bordered > tfoot > tr > td, 
			.night  .table-bordered > tfoot > tr > th, 
			.night .table-bordered > thead > tr > td, 
			.night .table-bordered > thead > tr > th {
			border:solid 1px #000;
			}
			
			.night .pagination > li > a, .night .pagination > li > span {
			color: #337ab7;
			background-color: #333;
			border: 1px solid #444;
			}
			.night .pagination > .disabled > a, 
			.night .pagination > .disabled > a:focus, 
			.night .pagination > .disabled > a:hover, 
			.night .pagination > .disabled > span, 
			.night .pagination > .disabled > span:focus, 
			.night .pagination > .disabled > span:hover {
			color: #777;
			background-color: #555;
			border-color: #666;
			}
			.night .pagination > .active > a, 
			.night .pagination > .active > a:focus, 
			.night .pagination > .active > a:hover, 
			.night .pagination > .active > span, 
			.night .pagination > .active > span:focus, 
			.night .pagination > .active > span:hover {
			color: #fff;
			background-color: #337ab7;
			border-color: #337ab7;
			}
			
			
			.night .well {
			background-color: #333;
			border: 1px solid #000;
			}
			
			.night .notificacoes {
			padding: 0.2rem 0.5rem;
			color: #FFFFFF;
			font-size: 0.8rem;
			border-radius: 10rem;
			background-color: #f06960;
			font-weight: bold;
			position: absolute;
			top: 1em;
			right: 1em;
			}
			
			/* Scrollbar */
			::-webkit-scrollbar {
			width: 10px;
			}
			::-webkit-scrollbar-track {
			background: #000;
			}
			::-webkit-scrollbar-thumb {
			background: #333;
			}
			::-webkit-scrollbar-thumb:hover {
			background: #555;
			}
			
			
			/* Loading */
			
			.loader {
			display:flex;
			justify-content: center;
			align-items: center;
			width:100%;
			padding:0px;
			margin:20px;
			}
			.loading-contents {
			perspective: 200px;
			}
			.flipper {
			transition: all 0.6s;
			animation: flip 4s infinite;
			transform-style: preserve-3d;
			}
			.flipper, .front, .back {
			width: 70px;
			height: 70px;
			}
			.front, .back {
			position: absolute;
			top: 0;
			left: 0;
			backface-visibility: hidden;
			}
			.front {
			transform: rotateY(0);
			background-image:url("https://www.sistemamultas.com.br/img/Logo_LW_Azul.png");
			background-repeat: no-repeat;
			background-size: 80px 80px;
			background-position: center;
			}
			.back {
			transform: rotateY(180deg);
			background-image:url("https://www.sistemamultas.com.br/img/Logo_LW_Azul.png");
			background-repeat: no-repeat;
			background-size: 80px 80px;
			background-position: center;
			}
			@keyframes flip {
			25% {
			transform: rotateY(180deg);
			}
			50% {
			transform: rotateZ(180deg);
			}
			74.999% {
			transform: rotateX(179deg);
			}
			75% {
			transform: rotateX(180deg);
			}
			}
			
			.darkbg {
			background: none repeat scroll 0 0 black;
			display: block;
			height: 100%;
			left: 0;
			opacity: 0;
			position: fixed;
			top: 0;
			z-index: 9999;
			margin: auto;
			width: 100%;
			padding: 10px;
			transition: all 0.3s ease-in-out;
			}

			.darkbg-show{
				opacity: 0.8;
				
			}
			
			.night .panel-lwt1 {
			background-image: linear-gradient(to bottom right, #0e0e0f, #4D4D4D);
			border-radius: 25px;
			color: #FFFFFF;
			}
			.night .panel-lwt2 {
			background-image: linear-gradient(to bottom right, #020202, #4D4D4D);
			border-radius: 25px;
			color: #FFFFFF;
			}
			.night .panel-lwt3 {
			background-image: linear-gradient(to bottom right, #000000, #4D4D4D);
			border-radius: 25px;
			color: #FFFFFF;
			}
			.night .panel-lwt4 {
			background-image: linear-gradient(to bottom right, #333435, #000000);
			border-radius: 25px;
			color: #FFFFFF;
			}
			.night .panel-lwt-m {
			background-image: linear-gradient(to bottom right, #000000, #3a3939);
			color: #FFFFFF !important;
			padding: 2%;
			}
			.night .panel-footer-lwt {
				background-image: linear-gradient(to bottom right, #000000, #2b2b2b);
				color:#1fadd6;
			}

			.night .list-group-item {
				color:#ccc;
				background-color: #191919;
				border: 1px solid #4c4c4c;
			}


			a.list-group-item:focus, a.list-group-item:hover, button.list-group-item:focus, button.list-group-item:hover {
				color: #333;
				text-decoration: none;
				background-color: #c5c5c5;
			}


			.night .panel-default{
				border-color: #000;
			}
			.night .panel{
				background-color: #000;
			} 

			.night .nav-tabs {
				border-bottom: 1px solid #7d7d7d;
			}
			.night .nav-tabs>li.active>a, .night .nav-tabs>li.active>a:focus, .night .nav-tabs>li.active>a:hover {
				background-color: #4c4c4c;
				border: 1px solid #7d7d7d;
			}
			.night .btn-default {
				color: #f5f5f5;
				background-color: #3a3a3a;
				border-color: #555;
			}

			.night .modal-content {
				background-color: #292929;
			}
			.night .modal-footer {
				border-top: 1px solid #484848;
			}
			.night hr {
				border-top: 1px solid #3a3a3a;
			}
			.night .aits>label {
				border: solid 1px #ccc;
				background-color: #3c3c3c;
				color: #cacaca;
			}
			.night .aits>label:hover {
				background-color: #6f6f6f;
				color: #333;
				border-color: #777;
			}
			.night .panel-default>.panel-heading {
				color: #fff;
				background-color: #191919;
				border-color: #333;
			}
			.night .status {
				background-color: transparent;
			}
			.night .sessao{
				background-color: #1b1919;
			}
			.select2-container--bootstrap .select2-selection {
				background-color: #222;
				border: 1px solid #000;
				color: #fff;
			}


			.night tr.odd td {
				background-color: #222;
				border:none;
			}
			.night tr.even td {
				background-color:#2a2a2a ;
				border:none;
			}
			.night .table>thead>tr>th {
				border-bottom: 2px solid #000;
			}

			.night .border{
				border:solid 1px #777;
			}
			.night .select2-container--default .select2-selection--single {
				background-color: #111;
				border: 1px solid #555;
				border-radius: 4px;
			}
			.night .select2-dropdown {
				background-color: #111;
				border: 1px solid #555;
			}

			.night .btn-primary {
				color: #fff;
				background-color: #00325d;
				border-color: #2e6da4;
			}
			.night 
			element.style {
			}
			
			.toggle-on.btn {
				padding-right: 24px;
			}
			.toggle-on {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 50%;
				margin: 0;
				border: 0;
				border-radius: 0;
			}
			.night .btn-success {
				color: #fff;
				background-color: #043e04;
				border-color: #4cae4c;
			}
			.night .btn-danger.active, .night .btn-danger:active, .night .open>.dropdown-toggle.btn-danger {
				color: #fff;
				background-color: #730805;
				border-color: #ac2925;
			}
			.night .btn-warning {
				color: #fff;
				background-color: #9a5f0b;
				border-color: #eea236;
			}
			.night .btn-info {
				color: #fff;
				background-color: #006c8c;
				border-color: #46b8da;
			}
			.night .table .table {
				background-color: #101010;
			}
			.night thead th {
				background-color: #0a0a0a;
			}
			.night .table>thead>tr>th {
				border-bottom: 2px solid #000;
				background-color: #0a0a0a;
			}
			.night .panel-footer {
				padding: 10px 15px;
				background-color: #060606;
				border-top: 1px solid #000;
				border-bottom-right-radius: 3px;
				border-bottom-left-radius: 3px;
			}
			.night .div-form {
				background-color: #0c0c0c;
			}
			

		</style>
		`)


		$(".navbar-right").append(`
	<form id="vsm-nav-form" class="navbar-form navbar-left" autocomplete="off"> 
		<div class="form-group"> 
			<div class="input-group"> 
			     <input id="vsm-nav-input" type="text" class="form-control" placeholder="Coisas de Dev">
				 <div class="input-group-btn"> 
					 <button id="fanta" type="button" class="btn btn-default"><i class="fa fa-code"></i></button> 
					 <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> 
						 <span class="caret"></span> 
						 <span class="sr-only">Toggle Dropdown</span> 
					</button> 
					<ul class="dropdown-menu dropdown-menu-right"> 

						<li><a href="./pages/icons.html" target="_blank">Template e Icones</a></li> 
						<li role="separator" class="divider"></li> 

						<li><a href="#" class="alterarClienteClick">91</a></li>
						<li><a href="#" class="alterarClienteClick">4</a></li>
						<li><a href="#" class="alterarClienteClick">31</a></li>

						<li role="separator" class="divider"></li> 
						<li><a href="#"><label><input checked="checked" type="radio" /> Modal<label></a></li> 
						<li><a href="#"><label><input disabled type="radio" /> Debug Page</a></label></li> 

					</ul> 
				</div> 
			</div>
		</div> 
	</form>
`);
nomeFantasiaClienteAtual();

$("#vsm-nav-form").submit(function(e){
	e.preventDefault();
});

$("#vsm-nav-input").on("keyup",function(e){
	if(e.keyCode==13){

		if(e.target.value.indexOf("cli ")==0) alterarCliente()
		if(e.target.value.indexOf("ait ")==0) buscarAuto()
		
	}
})

$(".alterarClienteClick").on("click",function(e){
	e.preventDefault();
	alterarCliente(e.target.innerText);
})

if($("input[name=id_multa]").val() && $("#tab1")){
	$(".page-header").append(` &nbsp;<span class="label label-primary">idMulta: ${$("input[name=id_multa]").val()}</span>`)
}


function alterarCliente(idParam){
	var host = window.location.host;
	var id_cliente = $("#vsm-nav-input").val()
	id_cliente = id_cliente.replace("cli ","")
	id_cliente = id_cliente.trim()

	id_cliente = idParam ? idParam : id_cliente

	$.ajax("Alterar_Cliente.php")
	
	$.ajax({
		url:"json/alterar_cliente.php",
		type:"post",
		data:{
			param: "AlterarCliente",
			id_cliente
		},
		success:function(){
			// alert("deu boa, vou dar reload pra voc??")
			window.location.reload()
		},
		error:function(){
			alert("deu algum erro")
		}
	});
}

function buscarAuto(auto) {
	var host = window.location.host;
	var auto = $("#vsm-nav-input").val()
	auto = auto.replace("ait ","")
	auto = auto.trim()


	$(`#populaDados`).html('');

	$.ajax({
		type: "POST",
		url: "json/manutencao_alterar_auto_infracao.php",
		data: {
			post: 'buscarMultaPorAuto',
			auto
		},
		dataType: "json",
		success: function (r) {

			if (r.erro === 1) {
				swal(`${r.descricao}`, `Tente novamente`, "warning");
				return
			}

			/*
				apCondutorDataVencimento: "2021-08-17"
				autoInfracao: "VSM1111"
				autoInfracao2: null
				autoInfracaoFisica: "VSM0000450"
				cadastroDataHora: "07/05/2021 16:05"
				cadastroManual: "S"
				cidade: "CURITIBA"
				clienteMulta: "ETC"
				clienteVeiculo: "ETC"
				dataInfracao: "2021-04-25"
				dataVencimento: "0000-00-00"
				descricao: "PARAR NA PISTA DE ROLAMENTO DAS ESTRADAS"
				endereco: "RUA LIONIDETTI SOVINSKI PACHECO"
				estado: "PR"
				horaInfracao: "12:00"
				id: "8757512"
				idVeiculo: "8639273"
				link: "ejlWbjZ5dWRIeDdsVVV4ZC9ZTEhuRnZId1JUb0RUQUE3NmxXa2FUaDU1UU9INDBpYzZISVVrUnkyYk9KQ0N6S3lWYmQ3ejc0NHpaRnVvS0RDa3FpK2c9PQ=="
				placa: "VSM0000"
			*/

			//teste de remocao

			a = r.dados[0];
			bootbox.alert({
				"title":a.autoInfracao,
				"message":`
				<div>idMulta: ${a.id}</div>
				<div>Placa: ${a.placa}</div>
				<div>Auto Infra????o: <a href="MultaDetalhada.php?p=${a.link}"> ${a.autoInfracao} </a> </div>
				<div>ID Veiculo: ${a.idVeiculo}</div>
				<div></div>
				`
				})

		}, error: function (error) {
			msgErroPadrao(error.status);
		}, complete: function () {}
	});
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

 
function nomeFantasiaClienteAtual(){

	$.ajax({
		type: "POST",
		url: "json/alterar_cliente.php",
		data: {
            param: "InformarCliente"
		},
		dataType: "json",
		success: function (r) {

			if (r.erro === 1) {
				return
			}

			// $("#fanta").html(r)

			let menuNome = getElementsByText("a","Ol??,");
			if(!menuNome){
				console.log("Nome do usuario n??o encontrado.")
				return false
			}
			let novoNome = menuNome[0].innerHTML.replace("\n","").replace("Ol??,","").trim()
			let novoNomeA = novoNome.split("|")[0].split(" ")[0]
			let novoNomeB = novoNome.split("|")[1]
			let cliente = r.slice(0,15)
			let clienteLabel = cliente == "LW TECNOLOGIA"? `<label class="label label-info">${cliente}</label>` : `<label class="label label-warning" title="${r}">${cliente}</label>`

			let novoNomeFull = `<label class="label label-default"> ${novoNomeA} </label>&nbsp;${clienteLabel}&nbsp;<label class="label label-default"> ${novoNomeB} </label>`;
			menuNome[0].innerHTML = novoNomeFull



		}, error: function (error) {
			msgErroPadrao(error.status);
		}, complete: function () {}
	});
}


		// console.log(localStorage['sessid']);
		// console.log(localStorage['tree']);
		// console.log(localStorage['time']);
	}

	window.addEventListener("load", etaGetSID);

	function nightToggle(){
		if (localStorage["nightTheme"]=="false"){
			localStorage["nightTheme"]="true";
			$("body").addClass("night")
		}else{
			localStorage["nightTheme"]="false";
			$("body").removeClass("night")
		}
	}

	if(!!desabilitarProcessando){
		desabilitarProcessando();
	}

	function habilitarProcessando(){
		$('.bootbox').modal('hide');
		$(".darkbg").show()
	}
	function desabilitarProcessando(){
		$('.bootbox').modal('hide');
		$(".darkbg").hide()
	}

	function blockScreen(){
		console.log("Ativa blocking")
		$(".darkbg").show()
		$(".darkbg").addClass("darkbg-show")
	}
	function unblockScreen(){
		console.log("desativa blocking")
		$(".darkbg").removeClass("darkbg-show")
		setTimeout(function(){
			$(".darkbg").hide()
		},300)
		
	}
