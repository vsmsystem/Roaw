//executa ao terminar o carregamento da pagina, no escopo da pagina
if (window.location.host == 'git.lwtecnologia.com.br') {
	function assignSpringfield(myself) {
		if (!localStorage.getItem("springFieldMembers")) {
			alert("You have to create localStorage['springfieldMembers'] = '@fulano;@ciclano;@etc'")
			return false;
		}
		const springfieldMembers = localStorage.getItem("springfieldMembers").split(";")
		springfieldMembers.forEach(member => {
			console.log(member)
			try {
				getElementsByText("span", member)[0].click()
			} catch (e) {
				console.log(e)
			}
		})
	}

	if (gitLabAssignBox = document.querySelector(".js-assignee-search")) {
		gitLabAssignBox.click()
		document.querySelector(".issuable-form-select-holder").insertAdjacentHTML("afterend", ` &nbsp; <button id="autoAssign" type="button" onclick="assignSpringfield(this)" class="gl-button btn btn-confirm gl-mr-2"> Assign to Springfield</button> `)
		console.log("localizei uma assignbox e cliquei nela", gitLabAssignBox)
		setTimeout(() => {
			document.querySelector("#autoAssign").click()
		}, 2000)

	}
}



function etaGetSID() {
	tempo = 2591970

	if (!document.getElementsByClassName("botaoAlternaMenu")[0]) {
		return;
	}
	// localStorage['sessid']="teste";
	// localStorage['tree']="teste";
	localStorage['time'] = Date.now();

	if (!localStorage["nightTheme"]) {
		localStorage["nightTheme"] = "false";
		$("body").removeClass("night")
	}

	if (localStorage["nightTheme"] == "true") {
		$("body").addClass("night")
	} else {
		$("body").removeClass("night")
	}




	$(".navbar-right").append(`
			<li id="changeNight">
				<span class="fa fa-adjust" style="margin-right:20px;margin-left:10px;"></span>
			</li>
			<li id="loadtest_" class="dropdown"  >
				<span class="fa fa-ellipsis-h" style="margin-right:20px;margin-left:10px;display:none;"></span>
				<img 
					src="https://avatars.githubusercontent.com/u/19872706?v=4" 
					class="hidden-xs img-thumbnail dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="true" 
					style="
						position: relative;
						width: 42px;
						height: 42px;
						margin-right:8px;margin-left:10px;
						overflow-x: hidden;
					"
				>
				<ul class="dropdown-menu dropdown-user">
                
                <li><a href="#">Meu Usuário</a></li>
                <li class="divider"></li>
                <li><a href="#" onclick="logout()"><i class="fa fa-sign-out fa-fw"></i> Sair</a>
                </li>
            </ul>
			</li>
		`)
	$("#changeNight").on("click", function () {
		nightToggle();
	})

	$("#loadtest").on("click", function () {
		blockScreen()
		setTimeout(function () {
			unblockScreen()
		}, 2800)

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
			border-left:none;
			background-color: #222;
			background-image: url(https://cdn.wallpapersafari.com/31/90/apuLOm.jpeg);
			background-repeat: no-repeat;
			background-size: cover;
		    background-attachment: fixed;
			}

			.night table{
				opacity:0.9;
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
			opacity:0.9;
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
			opacity:0.9;
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
			opacity: 0.9;
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
				opacity:0.9;
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

			.night .panel-primary>.panel-heading {
				color: #fff;
				background-color: #1e262c;
				border-color: #000000;
			}

			.night .panel-primary {
				border-color: #4a4a4a;
			}

			.night .img-thumbnail {
				background-color: #000;
				border: 1px solid #646464;
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
								<li><a href="#" class="limparArquivosClick">Limpar Arquivos</a></li>

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

	$("#vsm-nav-form").submit(function (e) {
		e.preventDefault();
	});

	$("#vsm-nav-input").on("keyup", function (e) {
		if (e.keyCode == 13) {

			if (e.target.value.indexOf("cli ") == 0) alterarCliente()
			if (e.target.value.indexOf("ait ") == 0) buscarAuto()

		}
	})

	$(".alterarClienteClick").on("click", function (e) {
		e.preventDefault();
		alterarCliente(e.target.innerText);
	})

	$(".limparArquivosClick").on("click", function (e) {
		e.preventDefault();
		limparArquivos();
	})

	if ($("input[name=id_multa]").val() && $("#tab1")) {
		$(".page-header").append(` &nbsp;<span class="label label-primary">idMulta: ${$("input[name=id_multa]").val()}</span>`)
	}


	function alterarCliente(idParam) {
		var host = window.location.host;
		var id_cliente = $("#vsm-nav-input").val()
		id_cliente = id_cliente.replace("cli ", "")
		id_cliente = id_cliente.trim()

		id_cliente = idParam ? idParam : id_cliente

		$.ajax("Alterar_Cliente.php")

		$.ajax({
			url: "json/alterar_cliente.php",
			type: "post",
			data: {
				param: "AlterarCliente",
				id_cliente
			},
			success: function () {
				// alert("deu boa, vou dar reload pra você")
				window.location.reload()
			},
			error: function () {
				alert("deu algum erro")
			}
		});
	}

	function buscarAuto(auto) {
		var host = window.location.host;
		var auto = $("#vsm-nav-input").val()
		auto = auto.replace("ait ", "")
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
					"title": a.autoInfracao,
					"message": `
				<div>idMulta: ${a.id}</div>
				<div>Placa: ${a.placa}</div>
				<div>Auto Infração: <a href="MultaDetalhada.php?p=${a.link}"> ${a.autoInfracao} </a> </div>
				<div>ID Veiculo: ${a.idVeiculo}</div>
				<div></div>
				`
				})

			}, error: function (error) {
				msgErroPadrao(error.status);
			}, complete: function () { }
		});
	}

	async function limparArquivos() {
		$.ajax({
			type: "POST",
			url: "http://localhost:8006/vsmApi.php",
			data: {
				param: 'limparArquivos'
			},
			dataType: "json",
			success: function (r) {
				$.toaster(" ", r, "info")
				console.log(r)
			}
		})
	}




	function nomeFantasiaClienteAtual() {

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

				let menuNome = getElementsByText("a", "Olá,");
				if (!menuNome) {
					console.log("Nome do usuario não encontrado.")
					return false
				}
				let novoNome = menuNome[0].innerHTML.replace("\n", "").replace("Olá,", "").trim()
				let novoNomeA = novoNome.split("|")[0].split(" ")[0]
				let novoNomeB = novoNome.split("|")[1]
				let cliente = r.slice(0, 15)
				let clienteLabel = cliente == "LW TECNOLOGIA" ? `<label class="label label-info">${cliente}</label>` : `<label class="label label-warning" title="${r}">${cliente}</label>`

				let novoNomeFull = `<label class="label label-default"> ${novoNomeA} </label>&nbsp;${clienteLabel}&nbsp;<label class="label label-default"> ${novoNomeB} </label>`;
				menuNome[0].innerHTML = novoNomeFull



			}, error: function (error) {
				msgErroPadrao(error.status);
			}, complete: function () { }
		});
	}


	// console.log(localStorage['sessid']);
	// console.log(localStorage['tree']);
	// console.log(localStorage['time']);
}



if (login100more = document.querySelector(".login100-more")) {
	document.querySelector(".login100-more").innerHTML = `
		<video class="video-intro" autoplay="" loop="" muted="">
		<source src="https://mdbootstrap.com/img/video/animation-intro.mp4" type="video/mp4">
		</video>
		`;
}

function setLoginBackground(url) {
	if (login100more = document.querySelector(".login100-more")) {
		document.querySelector(".login100-more").innerHTML = `
			<video class="video-intro" autoplay="" loop="" muted="">
			<source src="${url}" type="video/mp4">
			</video>
			`;
	} else {
		console.log("erro")
	}
}

function loginBackgroundRotator() {
	var init = 1;
	var limit = 27;
	setInterval(function () {
		var ajuste = init.toString();
		setLoginBackground(`./videos/${ajuste}.mp4`)
		if (init == limit) { init = 0 }
		init++;
	}, 3000)
}

window.initVid = 0;
window.limitVid = 27;
window.addEventListener("keydown", e => {
	if (e.key == "Alt") {
		if (e.ctrlKey) {
			ajeita()
		}
		var ajuste = initVid.toString();
		console.log(ajuste)
		setLoginBackground(`./videos/${ajuste}.mp4`)
		if (initVid == limitVid) { initVid = 0 }
		initVid++;
	}
})
function loginBackgroundRotator() {
	var init = 1;
	var limit = 27;
	setInterval(function () {
		var ajuste = init.toString();
		setLoginBackground(`./videos/${ajuste}.mp4`)
		if (init == limit) { init = 0 }
		init++;
	}, 3000)
}


etaGetSID();

//window.addEventListener("load", etaGetSID);

function nightToggle() {
	if (localStorage["nightTheme"] == "false") {
		localStorage["nightTheme"] = "true";
		$("body").addClass("night")
	} else {
		localStorage["nightTheme"] = "false";
		$("body").removeClass("night")
	}
}

// if(!!desabilitarProcessando){
// 	desabilitarProcessando();
// }

// function habilitarProcessando(){
// 	$('.bootbox').modal('hide');
// 	$(".darkbg").show()
// }
// function desabilitarProcessando(){
// 	$('.bootbox').modal('hide');
// 	$(".darkbg").hide()
// }

function blockScreen() {
	console.log("Ativa blocking")
	$(".darkbg").show()
	$(".darkbg").addClass("darkbg-show")
}
function unblockScreen() {
	console.log("desativa blocking")
	$(".darkbg").removeClass("darkbg-show")
	setTimeout(function () {
		$(".darkbg").hide()
	}, 300)

}



function ajeita() {
	if (!document.querySelector("#browserAutoFill")) {
		$("head").append(`
		<style id="browserAutoFill">
			/* Change the white to any color */
			input:-webkit-autofill,
			input:-webkit-autofill:hover,
			input:-webkit-autofill:focus,
			input:-webkit-autofill:active,
			input:-webkit-autofill,
			input:-internal-autofill-selected,
			input:-internal-autofill-previewed {
				-webkit-box-shadow: 0 0 0 30px rgba(0,0,0,0) inset !important; 
				-webkit-text-fill-color: rgba(255, 255, 255, 0.7) !important; 
				color: black !important; 
				appearance: menulist-button; 
				background-image: none !important; 
				background-color: -internal-light-dark(rgba(232, 240, 254,0), rgba(70, 90, 126, 0)) !important; 
				-webkit-animation-delay: 1s; 
				/* Safari support - any positive time runs instantly */
				-webkit-animation-name: autofill; 
				-webkit-animation-fill-mode: both; 
				-webkit-background-clip: text; 
				-webkit-transition: "color 99999s ease-out, background-color 9999s ease-out"; 
				-webkit-transition-delay: 99999s;
				/* 
					Curioiso... o autocompletar do chrome cria um estilo de user agent em alguns inputs, fica uma cor que incomoda quando em contraste com certas estilizações, corrigir isso, essa foi a unica coisa que funcionou para o meu caso.
					Curious... chrome autofill creates a style sheet for some inputs with a color which bother when contrasts with certain other styles, thats the only way I was able to get it done
				*/
			}
		</style>
		`);
	}
	$("head").append(`
		<style>
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

		.login100-form-title, 
		.imgAjuste, 
		.login100-form, 
		.login100-form, 
		.wrap-login100, 
		.wrap-login100, 
		.limiter, 
		.container-login100 {
			background:none;
		}

		input{
			background-color: transparent;
		} 
		.validate-input, .has-val, .input100{
			/* background-color: black; */
			border:none;
			border-radius:15px;
		}
		.wrap-input100{
			background-color: rgba(0,0,0,0.5);
			border:solid 1px rgba(255, 210, 10, 0.5);
			border-radius:15px;
		} 


		.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
			color: #ffffff;
			background-color: #4c4c4c;
			border-color: #000;
		}
		.nav-tabs .nav-link {
			/* border: 1px solid transparent; */
			border-radius: 10px;
		}
		.nav-tabs {
			border-bottom: none;
		}

		.dbutton{
			border:solid 1px;
			width:64px;
			height:64px;
			border-radius:5px;
			cursor:pointer;
			display:inline-block;
		}

	
		.sliders label{
			font-weight:900;
			color:#fff;
		}
		#videoList{
			height:300px;
			border:solid 1px;
			overflow-y:scroll;
			padding-left:3px;
			padding-left:3px;
			border-radius:5px;
		}
		.videoThumb{
			display: inline-block;
			width:49px;
			height:49px;
			margin:3px;
			cursor:pointer;
			border-radius:5px;
		}

		</style>
	`);



	if ($("#myTab .dev").length == 0) {
		$("#myTab").append(`
		<li class="nav-item dev">
			<a class="nav-link" id="login_condutor-tab" data-toggle="tab" href="#login_desenvolvedor" role="tab" aria-controls="login_desenvolvedor" aria-selected="false" aria-expanded="true">Desenvolvedor</a>
		</li><br><br>
		`)
		$("#myTabContent").append(`
		<div class="tab-pane fade" id="login_desenvolvedor" role="tabpanel" aria-labelledby="login_desenvolvedor-tab" aria-expanded="false">
		

			<!-- https://css.glass/ -->
			<section class="sliders">
				<label>Presets</label>
				<div class="dbutton" 
					style="border:solid 1px rgba(255, 210, 10, 0.5);background-color:rgba(0,0,0,0.5);" 
					onclick="btnSetGlass(this)">
				</div>

				<div class="dbutton" 
					style="background:rgba(0, 0, 200, 0.2);border:1px solid rgba(255, 210, 210, 0.7)" 
					onclick="btnSetGlass(this)">
				</div>

				<div class="dbutton" 
					style="background:rgba(254, 191, 16, 0.25);border:1px solid rgba(16, 27, 254, 0.42)" 
					onclick="btnSetGlass(this)">
				</div>

				<div class="dbutton" 
					style="background:rgba(255, 255, 255, 0.1);border:1px solid rgba(255, 255, 255, 0.69)" 
					onclick="btnSetGlass(this)">
				</div>
			</section>

			<hr>
			


			<section class="sliders">
				
				<label>Background</label>
				<input type="color" class="form-control-color" id="bgColor" value="#000000" style="width:15%;" title="Choose your color">
				<input type="range" class="custom-range mouseMoveGlass "min="0" max="1" step="0.1" id="transparencySliderBg" style="width:40%;" >
				<input type="range" class="custom-range mouseMoveGlass" min="0" max="20" id="blurSlider" style="width:40%;">
				
				<label>Border</label>
				<input type="color" class="form-control-color" id="borderColor" value="#aaaaaa" style="width:15%;" title="Choose your color">
				<input type="range" class="custom-range mouseMoveGlass "min="0" max="1" step="0.1" id="transparencySliderBorder" style="width:80%;" >

			</section>

			<section class="sliders">
				
				<label>Video List</label>
				<div id="videoList"></div>
			</section>


			

		</div>
		`)
	}

	var videoList = [
		{
			"thumb": "http://localhost:8006/img/Logo_LW_Branco.png",
			"url": "https://mdbootstrap.com/img/video/animation-intro.mp4"
		},
		{
			"thumb": "https://media.istockphoto.com/id/1170985573/pt/v%C3%ADdeo/t-l-drone-point-view-of-city-street-crossing-at-night.jpg?s=640x640&k=20&c=dz_LVsj46ERfUHE_s_dcTf76wbaN8hcxsPbsYAPSZXY=",
			"url": "https://media.istockphoto.com/id/1170985573/pt/v%C3%ADdeo/t-l-drone-point-view-of-city-street-crossing-at-night.mp4?s=mp4-640x640-is&k=20&c=DkfhUoUynmplXEN6NfLq07ZFnR6wx_F31gd23MOvUWw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1226494618/pt/v%C3%ADdeo/aerial-view-of-paulista-avenue-sao-paulo-brazil.jpg?s=640x640&k=20&c=WxuwHnDk1Q4bh4TWwOqw-eujbYh_nql5MS-pyYfLZaw=",
			"url": "https://media.istockphoto.com/id/1226494618/pt/v%C3%ADdeo/aerial-view-of-paulista-avenue-sao-paulo-brazil.mp4?s=mp4-640x640-is&k=20&c=HjIv7ZuPBXIKl7EdQ3KIO617ymGt1y2abtAfVI3DZy4="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1298283535/pt/v%C3%ADdeo/time-lapse-low-angle-of-tall-corporate-buildings-skyscraper.jpg?s=640x640&k=20&c=jZURA39qgjXGiiP7NBKWQsqYWlaxmBjXVBFSPRts348=",
			"url": "https://media.istockphoto.com/id/1298283535/pt/v%C3%ADdeo/time-lapse-low-angle-of-tall-corporate-buildings-skyscraper.mp4?s=mp4-640x640-is&k=20&c=cSUA5LI9kIf3CslVExoCdFR5ridoM5Op4rcbCburEY4="
		},
		{
			"thumb": "https://media.istockphoto.com/id/956240436/pt/v%C3%ADdeo/aerial-view-of-bangkok-at-sunset.jpg?s=640x640&k=20&c=UFzXQck0SYFOREmcDIOPotl0LkjKtfmzsks1jAvzKO0=",
			"url": "https://media.istockphoto.com/id/956240436/pt/v%C3%ADdeo/aerial-view-of-bangkok-at-sunset.mp4?s=mp4-640x640-is&k=20&c=vuyI6WdQXOj78ZfKiFl3OijpBOUtxN9wx0F0kafo78A="
		},
		{
			"thumb": "https://media.istockphoto.com/id/864345462/pt/v%C3%ADdeo/aerial-view-of-sao-paulo-city-brazil.jpg?s=640x640&k=20&c=IG-NHRLNSUvePYi5g7MhfSNtEDrteQlrTnx9ycMmSis=",
			"url": "https://media.istockphoto.com/id/864345462/pt/v%C3%ADdeo/aerial-view-of-sao-paulo-city-brazil.mp4?s=mp4-640x640-is&k=20&c=zzBvizYmQxi0kD4sVGIUgtIgy20dlMJFDHe0tiqr-Xg="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1300325718/pt/v%C3%ADdeo/4k-uhd-aerial-moving-hyper-lapse-of-paulista-avenue.jpg?s=640x640&k=20&c=prjznXQpFtahpzkgkVwpPVe2C0bp-NsSE18RYPXjBhY=",
			"url": "https://media.istockphoto.com/id/1300325718/pt/v%C3%ADdeo/4k-uhd-aerial-moving-hyper-lapse-of-paulista-avenue.mp4?s=mp4-640x640-is&k=20&c=y0qkP0_WEJL14YFlvHwIopa4ZEKnik6xxGwHYvILrEY="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1157589593/pt/v%C3%ADdeo/top-view-hyperlapse-time-lapse-of-car-traffic-at-circle-roundabout-4k-uhd-drone-zoom-out.jpg?s=640x640&k=20&c=z1dTY_LjQAXdrku96zOpK9iyc_P4jgOj_uJrzXFXyVQ=",
			"url": "https://media.istockphoto.com/id/1157589593/pt/v%C3%ADdeo/top-view-hyperlapse-time-lapse-of-car-traffic-at-circle-roundabout-4k-uhd-drone-zoom-out.mp4?s=mp4-640x640-is&k=20&c=_mXzxFFGwa3-QbLwmfLMySs5f8mFd54Yt3V0GuaAdBc="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1151313310/pt/v%C3%ADdeo/aerial-view-of-cityscape-at-hong-kong-in-china.jpg?s=640x640&k=20&c=5jW34Q10DjOqnl3N1-sR3zkxLEs4Cr3HyXDMmgelqvo=",
			"url": "https://media.istockphoto.com/id/1151313310/pt/v%C3%ADdeo/aerial-view-of-cityscape-at-hong-kong-in-china.mp4?s=mp4-640x640-is&k=20&c=8xVp-UFQ-VFnWbs11mMhQegZVWHVDy4DCi9T7AMgMF0="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1267591834/pt/v%C3%ADdeo/time-lapse-sunset-in-capital-city-sao-paulo-brazil-hyper-lapse-downtown-scene-city-life-scene.jpg?s=640x640&k=20&c=uCvUxB0FYVrxR6GgSXDIWxYSc2r-ZRvMzJ67yx0BF8k=",
			"url": "https://media.istockphoto.com/id/1267591834/pt/v%C3%ADdeo/time-lapse-sunset-in-capital-city-sao-paulo-brazil-hyper-lapse-downtown-scene-city-life-scene.mp4?s=mp4-640x640-is&k=20&c=6m4Q32--yin_XlhEbaC77MhgFe_ToIITw-CMVZkxnhE="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1221931961/pt/v%C3%ADdeo/the-man-stands-on-the-top-of-building-on-the-starry-cityscape-background.jpg?s=640x640&k=20&c=obff-wsowcWXdwqKMXphnua9ISXEEsbcNz-VOjb5WTE=",
			"url": "https://media.istockphoto.com/id/1221931961/pt/v%C3%ADdeo/the-man-stands-on-the-top-of-building-on-the-starry-cityscape-background.mp4?s=mp4-640x640-is&k=20&c=_Tv7M2VofdJzqPEQNQA-gxaG12a_tuLYtzWpb6JYGA8="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1307802889/pt/v%C3%ADdeo/4k-drone-video-of-downtown-los-angeles-during-sunset-as-a-stablishing-shot.jpg?s=640x640&k=20&c=HuYIaZDeQw8SY4HnKys25DzzwrzjP9HG6u6xKWb616k=",
			"url": "https://media.istockphoto.com/id/1307802889/pt/v%C3%ADdeo/4k-drone-video-of-downtown-los-angeles-during-sunset-as-a-stablishing-shot.mp4?s=mp4-640x640-is&k=20&c=kiKTJYmOnE6hCc02QyO7-GqVJVAvWNe4EFusIeOKe9E="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1371801392/pt/v%C3%ADdeo/emerging-connection-lines-over-skyscrapers-5g-data-transfer-finance-and-economy-night-version.jpg?s=640x640&k=20&c=Rshq70oWTzOyfwCKZpfxmnDTA89iWnFFn4wF8N8VGzc=",
			"url": "https://media.istockphoto.com/id/1371801392/pt/v%C3%ADdeo/emerging-connection-lines-over-skyscrapers-5g-data-transfer-finance-and-economy-night-version.mp4?s=mp4-640x640-is&k=20&c=qeuhBwaXDVYvkWeqglNeu4hsQpbf8fyTTNSEJ9k7wh0="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1070580916/pt/v%C3%ADdeo/t-l-group-of-people-walking-on-stairs-at-night.jpg?s=640x640&k=20&c=2wuGp6nhEQDvxkL4zEI8uLoluK-JbB6VOGEtMqD7lcQ=",
			"url": "https://media.istockphoto.com/id/1070580916/pt/v%C3%ADdeo/t-l-group-of-people-walking-on-stairs-at-night.mp4?s=mp4-640x640-is&k=20&c=35vy0aJWaQmVuHCA5c9AwIflPR2XYIRP-OFOkmf4uZU="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1327333898/pt/v%C3%ADdeo/motion-graphic-of-hologram-modern-city-futuristic-technology-digital-urban-design-ai-and.jpg?s=640x640&k=20&c=FIxF4qU9PjLfSP8mAScTDA1uivTO-zVwj_B9bBy11Rs=",
			"url": "https://media.istockphoto.com/id/1327333898/pt/v%C3%ADdeo/motion-graphic-of-hologram-modern-city-futuristic-technology-digital-urban-design-ai-and.mp4?s=mp4-640x640-is&k=20&c=DkleSwEkJv8toKmRPjurNpHEvB2clGTAExgsjYTj9_Q="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1307704872/pt/v%C3%ADdeo/flying-through-the-digital-developed-city-with-numbers-and-grids.jpg?s=640x640&k=20&c=XmFlKNcLPagtXVqwiKTrQ7G3ogNIMbfgFa_PEFAIHIo=",
			"url": "https://media.istockphoto.com/id/1307704872/pt/v%C3%ADdeo/flying-through-the-digital-developed-city-with-numbers-and-grids.mp4?s=mp4-640x640-is&k=20&c=mJ5BPVxqb9dE1pP2R8g47eQqFYwsh5mum4EF-Anyd_I="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1246162297/pt/v%C3%ADdeo/aerial-sunrise-scenery-of-cityscape-of-tokyo-time-lapse-shot-night-to-morning.jpg?s=640x640&k=20&c=p_3XbIoz4T9LpZ9V5bWKOwPsTRR_zMuvog98PXZegyM=",
			"url": "https://media.istockphoto.com/id/1246162297/pt/v%C3%ADdeo/aerial-sunrise-scenery-of-cityscape-of-tokyo-time-lapse-shot-night-to-morning.mp4?s=mp4-640x640-is&k=20&c=EXChVidlnvibOWywIhcYenqxNKJKUzg9NBYI-9EacwE="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1277038508/pt/v%C3%ADdeo/the-man-stands-on-the-balcony-on-the-cityscape-background-hyperlapse.jpg?s=640x640&k=20&c=KmT0Yq5nnvW7fj0zDZFZO14xIqqGigJGV_32Zyi4LzY=",
			"url": "https://media.istockphoto.com/id/1277038508/pt/v%C3%ADdeo/the-man-stands-on-the-balcony-on-the-cityscape-background-hyperlapse.mp4?s=mp4-640x640-is&k=20&c=FJS-BaqR--Oo6RDpEuA_VIcqX_jo0lYYJ6qznLt8Zcc="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1308664151/pt/v%C3%ADdeo/aerial-view-of-sheikh-zayed-road-dubai-united-arab-emirates.jpg?s=640x640&k=20&c=pWkNBKx_8WkPyJ8zytYQmw9NTj3L2GYtIbIuJhDcaTw=",
			"url": "https://media.istockphoto.com/id/1308664151/pt/v%C3%ADdeo/aerial-view-of-sheikh-zayed-road-dubai-united-arab-emirates.mp4?s=mp4-640x640-is&k=20&c=BF9KXBjdmhiNNYrebr7pP-Oh163E84ZbaCx6aIEsnv4="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1343463232/pt/v%C3%ADdeo/smart-city-and-metaverses-concept-motion-futuristic-neon-light-with-modern-cityscape.jpg?s=640x640&k=20&c=QDuR_pOCGbahUFIBgRZkO6piWdZiSm4ZokopdQ32vIM=",
			"url": "https://media.istockphoto.com/id/1343463232/pt/v%C3%ADdeo/smart-city-and-metaverses-concept-motion-futuristic-neon-light-with-modern-cityscape.mp4?s=mp4-640x640-is&k=20&c=bjJCh69yevGOED6vwvhBeRpEOFIhynDLxnwrF6hW_P8="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1215054627/pt/v%C3%ADdeo/drone-view-of-hong-kong-kowloon-city-skyline-at-night.jpg?s=640x640&k=20&c=PZ6DXgeUvM4aJs-2esBir37QFLelk5Q0Y7GTj5TdObU=",
			"url": "https://media.istockphoto.com/id/1215054627/pt/v%C3%ADdeo/drone-view-of-hong-kong-kowloon-city-skyline-at-night.mp4?s=mp4-640x640-is&k=20&c=4Gm19vdXEzk2DmjsN2J2mqnxhgHr3uakjsO9GxtL_dQ="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1194534422/pt/v%C3%ADdeo/time-lapse-of-the-densely-packs-buildings-of-tokyo-japan-at-sunrise.jpg?s=640x640&k=20&c=twfhqLm8wcH6jWNNezLwBDhdIm9Iu1jDKFZR_OF3FI0=",
			"url": "https://media.istockphoto.com/id/1194534422/pt/v%C3%ADdeo/time-lapse-of-the-densely-packs-buildings-of-tokyo-japan-at-sunrise.mp4?s=mp4-640x640-is&k=20&c=_3x4PjL40EkE8OiCm3q47tUmWe_fJ5MBCMM7yPg5IfY="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1303766767/pt/v%C3%ADdeo/a-train-is-riding-across-the-residential-district-in-brooklyn-new-york-on-the-sunset-drone.jpg?s=640x640&k=20&c=bNNyU-0LHKUl61r62pw0ttL_A9uvo_m_34Z27pF8wYM=",
			"url": "https://media.istockphoto.com/id/1303766767/pt/v%C3%ADdeo/a-train-is-riding-across-the-residential-district-in-brooklyn-new-york-on-the-sunset-drone.mp4?s=mp4-640x640-is&k=20&c=DGa8662uAv0s4YTAFacxQhrncZ2aE-dB39bYPFRcW7A="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1208941206/pt/v%C3%ADdeo/4k-resolution-time-lapse-of-tokyo-city-skyline-with-network-connections-line-internet-of.jpg?s=640x640&k=20&c=W8TBACeNqiJkRdSNm6NXQbrWq81bVLBuXgPDwN9hBSI=",
			"url": "https://media.istockphoto.com/id/1208941206/pt/v%C3%ADdeo/4k-resolution-time-lapse-of-tokyo-city-skyline-with-network-connections-line-internet-of.mp4?s=mp4-640x640-is&k=20&c=eI8cL2PFPm_Fnul7YbYmkhiWtVZwNwf-F69WJhsew-o="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1271103857/pt/v%C3%ADdeo/time-lapse-of-bangkok-cityscape-and-lumpini-park-green-space-view-day-to-night.jpg?s=640x640&k=20&c=ZXISJakZccjZ4jXS_uoGpokLYv_asCNlWb-YActeARQ=",
			"url": "https://media.istockphoto.com/id/1271103857/pt/v%C3%ADdeo/time-lapse-of-bangkok-cityscape-and-lumpini-park-green-space-view-day-to-night.mp4?s=mp4-640x640-is&k=20&c=BhxfQr5MlcLmY71VztGy36ubhJ9GV9M5x_9IfCLXYPw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1364253812/pt/v%C3%ADdeo/aerial-birds-eye-overhead-top-down-view-of-streets-crossing-avenue-tall-residential-or-office.jpg?s=640x640&k=20&c=4n4OujSf7RrkluYgFJ49klN1uTzGIQefmrTU0m0tcqs=",
			"url": "https://media.istockphoto.com/id/1364253812/pt/v%C3%ADdeo/aerial-birds-eye-overhead-top-down-view-of-streets-crossing-avenue-tall-residential-or-office.mp4?s=mp4-640x640-is&k=20&c=1OQq00Gt3bW7RBTsErGzfnwrYZTIJz6VR3NlFr-Ao5o="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1161026670/pt/v%C3%ADdeo/t-l-grid-apartment-beijing-china.jpg?s=640x640&k=20&c=1ZRyfi4pTrmzJN0QkJuR0wPL0wONMY_Pc8GAGEx6MvA=",
			"url": "https://media.istockphoto.com/id/1161026670/pt/v%C3%ADdeo/t-l-grid-apartment-beijing-china.mp4?s=mp4-640x640-is&k=20&c=lB9w3wxUCHofnrLEFo9g9zlXnbBfN4EGqusPU_xGIYY="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1278511068/pt/v%C3%ADdeo/chicago-riverwalk-day-to-night-time-lapse.jpg?s=640x640&k=20&c=cC5_eQ4apLIJLIyC27iTXv06HaoodaVagmP6Ry2JRDU=",
			"url": "https://media.istockphoto.com/id/1278511068/pt/v%C3%ADdeo/chicago-riverwalk-day-to-night-time-lapse.mp4?s=mp4-640x640-is&k=20&c=NSLo8E5CbzQVkEq4aG1pA11Bn7S08khLv2ZfqiMmlbY="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1166919025/pt/v%C3%ADdeo/4k-resolution-hong-kong-aerial-view-with-data-network-connection-technology-concept-smart.jpg?s=640x640&k=20&c=UOKMHbZTk4CzWUh5sXApVz4rLUV5tZUsR3ECFUC7xz8=",
			"url": "https://media.istockphoto.com/id/1166919025/pt/v%C3%ADdeo/4k-resolution-hong-kong-aerial-view-with-data-network-connection-technology-concept-smart.mp4?s=mp4-640x640-is&k=20&c=DDXtCBo-rm2leosquUIMhR9O8xwCerXfiRnXXGOda1M="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1157998140/pt/v%C3%ADdeo/the-top-view-of-the-building-tower-in-green-hong-kong-city.jpg?s=640x640&k=20&c=gm8OjCKUiP8UgRJ5aFLDYs1UyQTfuvrpF3l3N2Oim7o=",
			"url": "https://media.istockphoto.com/id/1157998140/pt/v%C3%ADdeo/the-top-view-of-the-building-tower-in-green-hong-kong-city.mp4?s=mp4-640x640-is&k=20&c=yedf9alb9pfVT8t7yVrx8YT8ArGAAFQtd_SECKLtSW8="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1290682353/pt/v%C3%ADdeo/hyperlapse-motion-at-the-night-highway.jpg?s=640x640&k=20&c=U1jT_TbbKRSSyAnT2kSMH8iuo5jt46H-hZLX3OrrD7g=",
			"url": "https://media.istockphoto.com/id/1290682353/pt/v%C3%ADdeo/hyperlapse-motion-at-the-night-highway.mp4?s=mp4-640x640-is&k=20&c=R-8qEKmCXk07Od-RwU9IJ4yrFx_oJbcjGjgkiQg_BjI="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1169068224/pt/v%C3%ADdeo/smart-city-with-abstract-line.jpg?s=640x640&k=20&c=ot39BYIO1Ce_eKdUCale_HoqpL2MfgU0L83VGsHVU0U=",
			"url": "https://media.istockphoto.com/id/1169068224/pt/v%C3%ADdeo/smart-city-with-abstract-line.mp4?s=mp4-640x640-is&k=20&c=FzjgWeEzjYZBXzDEhiGixA0tSth69i7vqa2SF4rbzPM="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1292929351/pt/v%C3%ADdeo/4k-abstract-speed-motion-in-highway-road.jpg?s=640x640&k=20&c=2yDLUrknr6kVUD_zlwEzNuZ3k2p_5i7Y5bM_PUwIX7s=",
			"url": "https://media.istockphoto.com/id/1292929351/pt/v%C3%ADdeo/4k-abstract-speed-motion-in-highway-road.mp4?s=mp4-640x640-is&k=20&c=fr9TiivFLUt4WjNaVb_iK22p_KfHKQOuZMmnfflT01I="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1027608312/pt/v%C3%ADdeo/the-man-standing-near-windows-on-a-night-metropolis-background-time-lapse.jpg?s=640x640&k=20&c=ZuPXXZVnc98IWTzknUbzcHdSDxHRK3kptxaZo4-5AyU=",
			"url": "https://media.istockphoto.com/id/1027608312/pt/v%C3%ADdeo/the-man-standing-near-windows-on-a-night-metropolis-background-time-lapse.mp4?s=mp4-640x640-is&k=20&c=52nQ9gX2VUktkx-K4Rf591CGLng1Ilkxh_K2Lff0WFo="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1188946768/pt/v%C3%ADdeo/4k-resolution-time-lapse-of-train-moving-in-tunnel-transportation-technology.jpg?s=640x640&k=20&c=LmIv_ipSuRgAwRTs2BJmrPPIc6qbv-6jAFyFA5PS5f0=",
			"url": "https://media.istockphoto.com/id/1188946768/pt/v%C3%ADdeo/4k-resolution-time-lapse-of-train-moving-in-tunnel-transportation-technology.mp4?s=mp4-640x640-is&k=20&c=LPw3x3ynJtNhq4VtHaG7Hp9k6fqKKeUI-5Kllr0oyBs="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1241912895/pt/v%C3%ADdeo/overhead-city-from-above-view-of-frankfurt-am-main-center-streets-with-skyscraper-roof-in.jpg?s=640x640&k=20&c=WALXECO0mky8fWW4Va6rkmc31c-lw9flljVv4aFbOTo=",
			"url": "https://media.istockphoto.com/id/1241912895/pt/v%C3%ADdeo/overhead-city-from-above-view-of-frankfurt-am-main-center-streets-with-skyscraper-roof-in.mp4?s=mp4-640x640-is&k=20&c=YxFfBFADtlt7MFR88CXZpVYGiHOfaDWU4jeH5Yd9FNA="
		},
		{
			"thumb": "https://media.istockphoto.com/id/849372376/pt/v%C3%ADdeo/night-city-time-lapse-panning-left.jpg?s=640x640&k=20&c=xSVODLbtNq_BEo6UJ2PTPev4nNQTymlEh_rBGLCBuGA=",
			"url": "https://media.istockphoto.com/id/849372376/pt/v%C3%ADdeo/night-city-time-lapse-panning-left.mp4?s=mp4-640x640-is&k=20&c=iNhAG7zULSSEa0cN4DYbgoIpKg88MO50zp7O6-15pM0="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1338480652/pt/v%C3%ADdeo/aerial-birds-eye-overhead-top-down-rising-hyperlapse-footage-of-traffic-in-streets-elephant.jpg?s=640x640&k=20&c=8uQ5I9gydsRZRHG2xgspVggU7tjD4zKZOWY5hrajfyE=",
			"url": "https://media.istockphoto.com/id/1338480652/pt/v%C3%ADdeo/aerial-birds-eye-overhead-top-down-rising-hyperlapse-footage-of-traffic-in-streets-elephant.mp4?s=mp4-640x640-is&k=20&c=MYY76ZsUfQsnMezJLIRdTBiXnFYq1mYUGQ2FRFNKQyI="
		},
		{
			"thumb": "https://media.istockphoto.com/id/898934070/pt/v%C3%ADdeo/day-to-night-time-lapse-clouds-sky-scape.jpg?s=640x640&k=20&c=bti9oJAbh0bTUxZK3yb8URGP_AcA1FTDKqQcmiLoewk=",
			"url": "https://media.istockphoto.com/id/898934070/pt/v%C3%ADdeo/day-to-night-time-lapse-clouds-sky-scape.mp4?s=mp4-640x640-is&k=20&c=aYRusB1bAhVVWThAX6G7_GoPKADeaTCLec8pSmb4Tuk="
		},
		{
			"thumb": "https://media.istockphoto.com/id/663148966/pt/v%C3%ADdeo/hong-kong-from-air-at-sun-rise.jpg?s=640x640&k=20&c=c1DBSKoURXR2KhbjlU-dHUPRMIVSSSfzsunVrVfE0lE=",
			"url": "https://media.istockphoto.com/id/663148966/pt/v%C3%ADdeo/hong-kong-from-air-at-sun-rise.mp4?s=mp4-640x640-is&k=20&c=TDi3qGG9iVIiP4-adc4lJnYQ_oP6A-RIYhgxCv6dGS8="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1084185176/pt/v%C3%ADdeo/milan-city-sunny-day-famous-downtown-living-buildings-slow-motion-panorama-4k-italy.jpg?s=640x640&k=20&c=wRry1cQikOSHKOw8ScGmxWDSVmVHRv1Z0YycjKBcALc=",
			"url": "https://media.istockphoto.com/id/1084185176/pt/v%C3%ADdeo/milan-city-sunny-day-famous-downtown-living-buildings-slow-motion-panorama-4k-italy.mp4?s=mp4-640x640-is&k=20&c=faYJ0TBvmR1uuK25r_DETFsmMBUFYr_YQ2sZYl3VudY="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1299416041/pt/v%C3%ADdeo/smart-digital-city-and-globalization-abstract-graphic-showing-connection-network.jpg?s=640x640&k=20&c=lQpycoKjRUDf2KeZAmDdJhgi06UbhMTjLGIQNrmt5y0=",
			"url": "https://media.istockphoto.com/id/1299416041/pt/v%C3%ADdeo/smart-digital-city-and-globalization-abstract-graphic-showing-connection-network.mp4?s=mp4-640x640-is&k=20&c=K79HSlCecyXaTrHmolS4CDXUo6QwhNGnq0EMDUl7Xxc="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1282513158/pt/v%C3%ADdeo/paris-at-night-from-space-satellite-view-elements-of-this-video-furnished-by-nasa.jpg?s=640x640&k=20&c=ky2N5YKgoVtYc2L8lfpjSbTtMcNvueULTIUI-TcYp1c=",
			"url": "https://media.istockphoto.com/id/1282513158/pt/v%C3%ADdeo/paris-at-night-from-space-satellite-view-elements-of-this-video-furnished-by-nasa.mp4?s=mp4-640x640-is&k=20&c=s36PZTo4da3r3WwumDyaxV8OFIxQD4nIRQ8NF4q_Vbk="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1315383328/pt/v%C3%ADdeo/global-connection-lines-global-business-data-exchange-travel-routes-multi-colored.jpg?s=640x640&k=20&c=cjTAogSD33gn4FTHRyL23XeSxsO9Lcg37W7tcWTRc38=",
			"url": "https://media.istockphoto.com/id/1315383328/pt/v%C3%ADdeo/global-connection-lines-global-business-data-exchange-travel-routes-multi-colored.mp4?s=mp4-640x640-is&k=20&c=BuGXayxOi1yQkN7pOC0A4EJBO_V9GVOhmDa2Ei9NL3o="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1149310704/pt/v%C3%ADdeo/4k-resolution-data-sending-and-network-connection-concept-with-aerial-view-city.jpg?s=640x640&k=20&c=7Mls2Wgn1hmWGEklIoGQ-4tpv6JoySmJBgLI8IPpbFk=",
			"url": "https://media.istockphoto.com/id/1149310704/pt/v%C3%ADdeo/4k-resolution-data-sending-and-network-connection-concept-with-aerial-view-city.mp4?s=mp4-640x640-is&k=20&c=JnHT9n15hH23vUKK3EspQ5VO1o7mkPLUTv9VL22hcKc="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1188948447/pt/v%C3%ADdeo/4k-resolution-time-lapse-of-tokyo-city-aerial-view-with-network-connections-line-internet-of.jpg?s=640x640&k=20&c=8Yd_54zNaS308DozYMdl3qc2nUfeiFa0nUgcojz7qt8=",
			"url": "https://media.istockphoto.com/id/1188948447/pt/v%C3%ADdeo/4k-resolution-time-lapse-of-tokyo-city-aerial-view-with-network-connections-line-internet-of.mp4?s=mp4-640x640-is&k=20&c=e4OmqJbutxby9jvbTFJZy_eEsn7e8HHORB_4zC0JmL8="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1267591289/pt/v%C3%ADdeo/time-lapse-sunset-in-capital-city-sao-paulo-brazil-hyper-lapse-downtown-scene-city-life-scene.jpg?s=640x640&k=20&c=QVlYjUjbrMz7OgyTnH40dfWzQg9qZY2qhUyxorc9gwI=",
			"url": "https://media.istockphoto.com/id/1267591289/pt/v%C3%ADdeo/time-lapse-sunset-in-capital-city-sao-paulo-brazil-hyper-lapse-downtown-scene-city-life-scene.mp4?s=mp4-640x640-is&k=20&c=Nti2Ob41di-ZXTP_-x-9DYwH-6HgkopQUZahcMjqKj4="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1316272738/pt/v%C3%ADdeo/big-city-business-partners-use-tablet-computer-on-crowded-street-e-commerce-visualization-of.jpg?s=640x640&k=20&c=WNol7n8X3Z93EHNQT_YFrIpac_KsKGR2rYljtUHXQ0w=",
			"url": "https://media.istockphoto.com/id/1316272738/pt/v%C3%ADdeo/big-city-business-partners-use-tablet-computer-on-crowded-street-e-commerce-visualization-of.mp4?s=mp4-640x640-is&k=20&c=_yfgQ6_zLT6Xs4SDMdCdzjN8C14-hzh8aHjrk3jhKa4="
		},
		{
			"thumb": "https://media.istockphoto.com/id/914913336/pt/v%C3%ADdeo/4k-streak-light-on-the-bridge.jpg?s=640x640&k=20&c=0EfBPYpV7l4lE1XFnLzimCJ9VhkA1WtuPJHJIfMmpAo=",
			"url": "https://media.istockphoto.com/id/914913336/pt/v%C3%ADdeo/4k-streak-light-on-the-bridge.mp4?s=mp4-640x640-is&k=20&c=KukqJ3KyzWxmZgKffj-OF-R3C-CYm9yuU6uJ77Ygoyc="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1369604706/pt/v%C3%ADdeo/futuristic-smart-traffic.jpg?s=640x640&k=20&c=bIdv_R2kqvb0S6r4bvD5lV_Ng2xV55ojtZb-jopDoCo=",
			"url": "https://media.istockphoto.com/id/1369604706/pt/v%C3%ADdeo/futuristic-smart-traffic.mp4?s=mp4-640x640-is&k=20&c=w5h35Dok2o331n2LNh3TYrmU2XuMBniEcogomWWBm5w="
		},
		{
			"thumb": "https://media.istockphoto.com/id/637819200/pt/v%C3%ADdeo/defocused-view-of-traffic-in-beijing.jpg?s=640x640&k=20&c=RcV5y5nduHvQeYzJq02SkEL-ucsiqxi5AgIKNNow2XM=",
			"url": "https://media.istockphoto.com/id/637819200/pt/v%C3%ADdeo/defocused-view-of-traffic-in-beijing.mp4?s=mp4-640x640-is&k=20&c=BulQkfBBj1j5khW4GgEmiVbjRFeSn4U4s3A-feOYttw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1226449787/pt/v%C3%ADdeo/t-l-metro-riding-through-downtown-at-night-dubai-uae.jpg?s=640x640&k=20&c=zEylsXf50IcoAKEsHPSV2MzCDcNwbWsNf17dw6wePxo=",
			"url": "https://media.istockphoto.com/id/1226449787/pt/v%C3%ADdeo/t-l-metro-riding-through-downtown-at-night-dubai-uae.mp4?s=mp4-640x640-is&k=20&c=PApnvbHjlaFYhPmJQ7RICCunZvX0vGrS02cbgoXe1GE="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1303706850/pt/v%C3%ADdeo/rising-sun-shining-between-financial-district-skyscrapers-drone-shot.jpg?s=640x640&k=20&c=Ih6FYKM7yrdjMfnQbAHIgU99KzqR_AnVv9N65yd51tQ=",
			"url": "https://media.istockphoto.com/id/1303706850/pt/v%C3%ADdeo/rising-sun-shining-between-financial-district-skyscrapers-drone-shot.mp4?s=mp4-640x640-is&k=20&c=n6FcD3Zxh9vYOZs_CpxUf2MT8nCZoGEdG3p0Ng5UzQA="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1083788622/pt/v%C3%ADdeo/t-l-view-of-city-network-of-beijing-skyline-from-day-to-night.jpg?s=640x640&k=20&c=OvqS7Zw6gLTck7HvWXWhH1ltx2hPAdNB_1c3Ara7tKg=",
			"url": "https://media.istockphoto.com/id/1083788622/pt/v%C3%ADdeo/t-l-view-of-city-network-of-beijing-skyline-from-day-to-night.mp4?s=mp4-640x640-is&k=20&c=fBmcQXpEFkTgAp2ajAyB5r1bSVndaglozWZJ9GOzKRQ="
		},
		{
			"thumb": "https://media.istockphoto.com/id/149810954/pt/v%C3%ADdeo/cidade-digital.jpg?s=640x640&k=20&c=tk-UDSuFmCI7G3WuR_NSBvFs1CeiCLkxBW7N7kr_Q0o=",
			"url": "https://media.istockphoto.com/id/149810954/pt/v%C3%ADdeo/cidade-digital.mp4?s=mp4-640x640-is&k=20&c=9GUWuVorbVE4pWWaajvlSkHRrUJAvvFWS_9Xhve5oaA="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1225266607/pt/v%C3%ADdeo/singapore-city-aerial-view-with-data-network-connection-technology-concept-smart-city-concept.jpg?s=640x640&k=20&c=JoYJyDzfnstKtf6bZ67YYCf8YRmm082oHF3nTwrBaGc=",
			"url": "https://media.istockphoto.com/id/1225266607/pt/v%C3%ADdeo/singapore-city-aerial-view-with-data-network-connection-technology-concept-smart-city-concept.mp4?s=mp4-640x640-is&k=20&c=0iRqHD-W99x2bHIMtG-W0gC2DtJvYNZp1iA6QqvlA4Y="
		},
		{
			"thumb": "https://media.istockphoto.com/id/936322878/pt/v%C3%ADdeo/t-l-the-night-traffic-of-chicago.jpg?s=640x640&k=20&c=TjJYHrAsvwM7wG0SYrt9ZLlEKxAC04HZxp2sX1v8xGA=",
			"url": "https://media.istockphoto.com/id/936322878/pt/v%C3%ADdeo/t-l-the-night-traffic-of-chicago.mp4?s=mp4-640x640-is&k=20&c=WNBSbog2deDwm9DKUbrI-AJ76Ls_U1rlqFGjHw7dS-c="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1327334033/pt/v%C3%ADdeo/motion-graphic-of-hologram-modern-city-futuristic-technology-digital-urban-design-ai-and.jpg?s=640x640&k=20&c=VoIQZus-ChUEjce1HKAubaOWz6i2AEOA36ve4CqpcE8=",
			"url": "https://media.istockphoto.com/id/1327334033/pt/v%C3%ADdeo/motion-graphic-of-hologram-modern-city-futuristic-technology-digital-urban-design-ai-and.mp4?s=mp4-640x640-is&k=20&c=WKEJtbded7Y738osm427usYUT6Aa2yTGJpjFd4R8RQw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/858021276/pt/v%C3%ADdeo/aerial-shot-of-10-110-interchange-los-angeles-at-sunset.jpg?s=640x640&k=20&c=V6-IKYCHSnK_YH6KzEFwMkr_On1ayVsMiUcxUyOGFnU=",
			"url": "https://media.istockphoto.com/id/858021276/pt/v%C3%ADdeo/aerial-shot-of-10-110-interchange-los-angeles-at-sunset.mp4?s=mp4-640x640-is&k=20&c=iEiOflKRiSd7p27GR9vS94eacQqGuiDJvymIS8yWwhY="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1187590682/pt/v%C3%ADdeo/aerial-camera-moving-around-buildings-wireless-communication-network-concept-iot-internet-of.jpg?s=640x640&k=20&c=skyIWfJ49gJU-if8_4gRk13LTr7YkFcS1JFwM767xXQ=",
			"url": "https://media.istockphoto.com/id/1187590682/pt/v%C3%ADdeo/aerial-camera-moving-around-buildings-wireless-communication-network-concept-iot-internet-of.mp4?s=mp4-640x640-is&k=20&c=BCVUCSJc1EjbwaUtPXG6kfCn0mIDaOO7ieWp-aUGzxs="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1220492159/pt/v%C3%ADdeo/aerial-view-time-lapse-of-singapore-skyline-with-network-connections-line-internet-of-things.jpg?s=640x640&k=20&c=cwwsHV0thtrw51dMvWxuJkU8q-zMOkcEWD-UPEdq6ww=",
			"url": "https://media.istockphoto.com/id/1220492159/pt/v%C3%ADdeo/aerial-view-time-lapse-of-singapore-skyline-with-network-connections-line-internet-of-things.mp4?s=mp4-640x640-is&k=20&c=bOWkv1GOS-O8XtigKBxyrTuBGNO3ClI2nC3UPVSZCi4="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1048173206/pt/v%C3%ADdeo/night-city-lights-seamless-3d-animation-with-flares-looped-defocused-bright-blinking-lights.jpg?s=640x640&k=20&c=OdP76_QEeav0MkFcXhrvouTYQ9ZxbjASGPqZRPZbuiI=",
			"url": "https://media.istockphoto.com/id/1048173206/pt/v%C3%ADdeo/night-city-lights-seamless-3d-animation-with-flares-looped-defocused-bright-blinking-lights.mp4?s=mp4-640x640-is&k=20&c=S1ZjWRo2RwI-Z0g1CfWdplqUr2x_nLYdqlXWK1EQfOE="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1199611629/pt/v%C3%ADdeo/digital-city-digital-cyberspace-with-particles-data-network-connections-concept.jpg?s=640x640&k=20&c=msxrB8sCRMy2Gk3ONBnjjph1X97ORcn01vw7AW0WMDw=",
			"url": "https://media.istockphoto.com/id/1199611629/pt/v%C3%ADdeo/digital-city-digital-cyberspace-with-particles-data-network-connections-concept.mp4?s=mp4-640x640-is&k=20&c=Mx_C2vEP6EfJupIUxbi5w2znnzwp3V8QlvHDwzLR8c8="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1143084378/pt/v%C3%ADdeo/smart-city-and-wireless-communication-technology.jpg?s=640x640&k=20&c=Qvye7BGgrcqXuRfZcn07AV5OzWgWON138dsvHirseSM=",
			"url": "https://media.istockphoto.com/id/1143084378/pt/v%C3%ADdeo/smart-city-and-wireless-communication-technology.mp4?s=mp4-640x640-is&k=20&c=_KhphHzmlMj4tHaiNIgwJLo-tlfTtLItSWHWa3CvIys="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1178194600/pt/v%C3%ADdeo/aerial-modern-office-building-at-night.jpg?s=640x640&k=20&c=0YqKljB-4dbj58_tobqd6QrRYRHth_Td7riCkWJjfrw=",
			"url": "https://media.istockphoto.com/id/1178194600/pt/v%C3%ADdeo/aerial-modern-office-building-at-night.mp4?s=mp4-640x640-is&k=20&c=ly4_rg477NG3gKF1srEZUmzf42P_YsF5D8fO8OKuBO4="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1349013962/pt/v%C3%ADdeo/cityscape-with-glowing-connection-lines-big-data-internet-of-things-futuristic-architecture.jpg?s=640x640&k=20&c=nrI5y34ku8nIsEQgFa1jRgSzY6nRmQUnCp3CNfSZwBQ=",
			"url": "https://media.istockphoto.com/id/1349013962/pt/v%C3%ADdeo/cityscape-with-glowing-connection-lines-big-data-internet-of-things-futuristic-architecture.mp4?s=mp4-640x640-is&k=20&c=FQGs129iJ7Gj0S4uv6c6LW3B9gzMdylXsOccisCmhXM="
		},
		{
			"thumb": "https://media.istockphoto.com/id/838044634/pt/v%C3%ADdeo/hong-kong-central-district-straight-down-from-a-drone.jpg?s=640x640&k=20&c=q_duBI-vwJrQKdL9x2kFd9FjX4w7Ia3cUDJSOjLFGfY=",
			"url": "https://media.istockphoto.com/id/838044634/pt/v%C3%ADdeo/hong-kong-central-district-straight-down-from-a-drone.mp4?s=mp4-640x640-is&k=20&c=gXizyKgZHSRlvGKRP4InS0Yj_P-AteCZlf1sArJqfRE="
		},
		{
			"thumb": "https://media.istockphoto.com/id/899836914/pt/v%C3%ADdeo/hong-kong-city.jpg?s=640x640&k=20&c=OAMBp0BzaRmh00ylCbM_E4l9cDBa_1sjmAQCkBYGIMs=",
			"url": "https://media.istockphoto.com/id/899836914/pt/v%C3%ADdeo/hong-kong-city.mp4?s=mp4-640x640-is&k=20&c=Pw3BQTdOvIwNUVDe34KqhYVxLZVCq6TPvJLvIhXwIzE="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1250588858/pt/v%C3%ADdeo/time-lapse-of-chicago-cityscape-day-to-night-illinois-united-states.jpg?s=640x640&k=20&c=BPPjrajX3al0LbeTtFhl9TDXAyQMofxZP0prhN4I03A=",
			"url": "https://media.istockphoto.com/id/1250588858/pt/v%C3%ADdeo/time-lapse-of-chicago-cityscape-day-to-night-illinois-united-states.mp4?s=mp4-640x640-is&k=20&c=Z-d4eQzWoX3WUdXAlu0VHv9S8trvZfc86jyFoLRDtIw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/181454629/pt/v%C3%ADdeo/nascer-do-sol-cidade-de-espa%C3%A7o.jpg?s=640x640&k=20&c=OtmLgHyIa1F_JhnWGleHC6MinCV-UWUveYx7eC0_O2U=",
			"url": "https://media.istockphoto.com/id/181454629/pt/v%C3%ADdeo/nascer-do-sol-cidade-de-espa%C3%A7o.mp4?s=mp4-640x640-is&k=20&c=GI0jyRYg63Ai9nW9IBRrUAb4aWj3AOmo3JgtKKcgTlk="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1148792899/pt/v%C3%ADdeo/loop-of-hong-kong-apartments-at-night.jpg?s=640x640&k=20&c=pbLSHBJGcQJBRw0Wk3wxAG_j1SMuAfCvn91q08i6YYI=",
			"url": "https://media.istockphoto.com/id/1148792899/pt/v%C3%ADdeo/loop-of-hong-kong-apartments-at-night.mp4?s=mp4-640x640-is&k=20&c=bQ50gOlxR2GJhD4795eencL2NQJwD0Yl8vrgMQtmYLw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1371917992/pt/v%C3%ADdeo/city-construction-time-lapse-infrastructure-architecture-engineering.jpg?s=640x640&k=20&c=hGGwUUhdW29xCRz-BwcJELFonPtqEANL5MueKX1jnyc=",
			"url": "https://media.istockphoto.com/id/1371917992/pt/v%C3%ADdeo/city-construction-time-lapse-infrastructure-architecture-engineering.mp4?s=mp4-640x640-is&k=20&c=hJn0U2kUgXGBP80w2UD9wCFuUIj17TRXTT9zwJGFOzg="
		},
		{
			"thumb": "https://media.istockphoto.com/id/497018596/pt/v%C3%ADdeo/zoom-do-espa%C3%A7o-de-escrit%C3%B3rio-para.jpg?s=640x640&k=20&c=mJXh59L7WzWuoZ9iR2vsEGTPkKd34UhiJaqB01_guY8=",
			"url": "https://media.istockphoto.com/id/497018596/pt/v%C3%ADdeo/zoom-do-espa%C3%A7o-de-escrit%C3%B3rio-para.mp4?s=mp4-640x640-is&k=20&c=EO25bdXdy5HcE-BZa5X2DhCidCenLmrgC3hJkAaFvyk="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1049647444/pt/v%C3%ADdeo/modern-skyscrapers-in-business-district-against-blue-sky.jpg?s=640x640&k=20&c=zPCSsXBYfNDTkobkuokqqJXGbF8ENpece5e9cEHAe7c=",
			"url": "https://media.istockphoto.com/id/1049647444/pt/v%C3%ADdeo/modern-skyscrapers-in-business-district-against-blue-sky.mp4?s=mp4-640x640-is&k=20&c=IC-zmZispkIDSLUaRuBjVxp1Mpj22XAZJIbxNnoYuHY="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1368536999/pt/v%C3%ADdeo/time-lapse-low-angle-of-tall-corporate-buildings-skyscraper-in-hong-kong.jpg?s=640x640&k=20&c=VNBO2GJCviJHR2X0qr_GfJwvt8lATuFwiLCBCc0YN_A=",
			"url": "https://media.istockphoto.com/id/1368536999/pt/v%C3%ADdeo/time-lapse-low-angle-of-tall-corporate-buildings-skyscraper-in-hong-kong.mp4?s=mp4-640x640-is&k=20&c=OoJ6Tk_nJsSD_Acq67XvUyynGvPwwCeO1SmdeVWRpDE="
		},
		{
			"thumb": "https://media.istockphoto.com/id/521343308/pt/v%C3%ADdeo/carro-travess%C3%A3o-c%C3%A2mara-intervalo-de-tempo-%C3%A0-noite-em-um-t%C3%BAnel-da-estrada.jpg?s=640x640&k=20&c=rT28h98iun7Nbo_ld51WdbPu9PdKC2wShQTgmSY3EWc=",
			"url": "https://media.istockphoto.com/id/521343308/pt/v%C3%ADdeo/carro-travess%C3%A3o-c%C3%A2mara-intervalo-de-tempo-%C3%A0-noite-em-um-t%C3%BAnel-da-estrada.mp4?s=mp4-640x640-is&k=20&c=QeQVy9HkPA7kaaYrmuOzBNW0R5hvGcEPXMjLjjsqmVM="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1263336794/pt/v%C3%ADdeo/south-america-at-night-planet-earth-seen-from-space.jpg?s=640x640&k=20&c=A2BaUWzOJ2OMBYu_L_FUvWuWnJw8EiGGtd-0YG-K5HM=",
			"url": "https://media.istockphoto.com/id/1263336794/pt/v%C3%ADdeo/south-america-at-night-planet-earth-seen-from-space.mp4?s=mp4-640x640-is&k=20&c=1o0xJStXaYaQdcpJ0Vsb0FPylocwNzJ265hu--ugFtU="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1141798693/pt/v%C3%ADdeo/4k-uhd-motion-time-lapse-of-buildings-in-business-district-with-fast-moving-cloud-in-sunny.jpg?s=640x640&k=20&c=AXOP-34odjvnZVRAIL1IfShjanBT9yF0656_saSuFNU=",
			"url": "https://media.istockphoto.com/id/1141798693/pt/v%C3%ADdeo/4k-uhd-motion-time-lapse-of-buildings-in-business-district-with-fast-moving-cloud-in-sunny.mp4?s=mp4-640x640-is&k=20&c=QhSgMXZxtdVQ0wp6qf__I9bw35wLO5wSbzAtbaKHnRQ="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1348236857/pt/v%C3%ADdeo/smart-city-iot-internet-of-thing-ict-digital-technology-futuristic-automation-management.jpg?s=640x640&k=20&c=X4J0vMnsA46mz-Q_059DqcE-krqB4D3FuHWCnmq3xZQ=",
			"url": "https://media.istockphoto.com/id/1348236857/pt/v%C3%ADdeo/smart-city-iot-internet-of-thing-ict-digital-technology-futuristic-automation-management.mp4?s=mp4-640x640-is&k=20&c=k13cTbu8i2pL5k-2yC4DR9lXb6D2l0MFG0Te2mufZjA="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1345814782/pt/v%C3%ADdeo/flying-through-cityscape-with-pulsating-traffic-long-exposure-light-trails.jpg?s=640x640&k=20&c=tdEi0d5FRW4t6IWTj1pI1wAWxIU0gHtDyCfHxXlsj3Y=",
			"url": "https://media.istockphoto.com/id/1345814782/pt/v%C3%ADdeo/flying-through-cityscape-with-pulsating-traffic-long-exposure-light-trails.mp4?s=mp4-640x640-is&k=20&c=aRb8REtRngLeiGQTBUdAnHPuaW8Zno3VDfsIgKvYhbw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1349018039/pt/v%C3%ADdeo/flying-over-cityscape-with-glowing-data-lines-big-data-internet-of-things-futuristic.jpg?s=640x640&k=20&c=jKQjR523K0Q90eKbr9PhAE5B-cRKVBu9R7u5AA5rBxw=",
			"url": "https://media.istockphoto.com/id/1349018039/pt/v%C3%ADdeo/flying-over-cityscape-with-glowing-data-lines-big-data-internet-of-things-futuristic.mp4?s=mp4-640x640-is&k=20&c=OdeI3VA1gyLPhmX69LooVqgN5hSk1jlaZZmk9jHoH0A="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1218630827/pt/v%C3%ADdeo/3d-hud-sunset-city-of-the-future.jpg?s=640x640&k=20&c=o_jabCQzytsajYNiy7L_OMv2jCHd9iA7iFmvc9GX2nU=",
			"url": "https://media.istockphoto.com/id/1218630827/pt/v%C3%ADdeo/3d-hud-sunset-city-of-the-future.mp4?s=mp4-640x640-is&k=20&c=yy_n2WnXRxWGjSA7vOAELir6y3liFUvgMfpIgpdktBo="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1292270335/pt/v%C3%ADdeo/t-l-drone-point-view-of-overpass-and-city-traffic-at-night.jpg?s=640x640&k=20&c=b8t0HuB165T1b2TSJjXG5dExuH8e2f4HZxKo0Nv7NkA=",
			"url": "https://media.istockphoto.com/id/1292270335/pt/v%C3%ADdeo/t-l-drone-point-view-of-overpass-and-city-traffic-at-night.mp4?s=mp4-640x640-is&k=20&c=hqenVzI05RwvR31ti48todBFWMegf-IgPli0dnKZKl8="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1214259791/pt/v%C3%ADdeo/planet-earth-at-night-europe-seen-from-space.jpg?s=640x640&k=20&c=83-8xopi6tviBQQMRSskju3ERneUOrBOGGEpKFrrK7k=",
			"url": "https://media.istockphoto.com/id/1214259791/pt/v%C3%ADdeo/planet-earth-at-night-europe-seen-from-space.mp4?s=mp4-640x640-is&k=20&c=rlYDFb3cuL37r3Ht6pCIX2lof0ZlJwlznYGP46X5ye4="
		},
		{
			"thumb": "https://media.istockphoto.com/id/962983960/pt/v%C3%ADdeo/working-late-at-night.jpg?s=640x640&k=20&c=tvQ6_x8fsG-Yi9kAF3QvRmB41ksBJDHlpDPU1lhs7es=",
			"url": "https://media.istockphoto.com/id/962983960/pt/v%C3%ADdeo/working-late-at-night.mp4?s=mp4-640x640-is&k=20&c=fNqOxbP9FECbu9TNB-951_1YIDMFJg4XMOrfrGiNVsk="
		},
		{
			"thumb": "https://media.istockphoto.com/id/886693608/pt/v%C3%ADdeo/t-l-aerial-view-of-rush-hour-traffic-on-multiple-highways-at-night-beijing-china.jpg?s=640x640&k=20&c=7964WE-13TuF2p1Md2CEDZxP1nXgIHRQ42KFnxzssuE=",
			"url": "https://media.istockphoto.com/id/886693608/pt/v%C3%ADdeo/t-l-aerial-view-of-rush-hour-traffic-on-multiple-highways-at-night-beijing-china.mp4?s=mp4-640x640-is&k=20&c=qOHnXV25uaZdKdm5aTiw73MdBTZlQdDCSpLWRe-N_Do="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1172476283/pt/v%C3%ADdeo/matrix-over-smart-city.jpg?s=640x640&k=20&c=RV_yFN0XLoOSV9zzFvCV2nODu9eZKqSj5KTu-SoOkb8=",
			"url": "https://media.istockphoto.com/id/1172476283/pt/v%C3%ADdeo/matrix-over-smart-city.mp4?s=mp4-640x640-is&k=20&c=D0j9cnMPaOgtIREiu1Soeeym4ykOz7QVfJASO8gzUVw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/105941805/pt/v%C3%ADdeo/cidade-escuro.jpg?s=640x640&k=20&c=sNZJSBXTl4ickynME9Uu9USG8kDP0jxUbKI3vAZn764=",
			"url": "https://media.istockphoto.com/id/105941805/pt/v%C3%ADdeo/cidade-escuro.mp4?s=mp4-640x640-is&k=20&c=8NW5IG-ZPSZQgxODChJ0A1VQLwnANeu_dgIgsWzYWEU="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1149309554/pt/v%C3%ADdeo/city-scape-and-network-connection-at-chicago-illinois.jpg?s=640x640&k=20&c=DvD5UKc3VZaTpSNh98Ek1pzCh6z-tGFnUmrOtGgSbW8=",
			"url": "https://media.istockphoto.com/id/1149309554/pt/v%C3%ADdeo/city-scape-and-network-connection-at-chicago-illinois.mp4?s=mp4-640x640-is&k=20&c=K1MdChhvmTcZ9EBCLjaMl8C2b1d_ivKzm9oCmjvWfhw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1266766447/pt/v%C3%ADdeo/retro-futuristic-city-smart-city-concept-working-tracking-system-on-city-streets-seamless.jpg?s=640x640&k=20&c=pUT4CaiTY4TjqHdXF9UGwrEJl7lNVpOcvsa5ksiFjrI=",
			"url": "https://media.istockphoto.com/id/1266766447/pt/v%C3%ADdeo/retro-futuristic-city-smart-city-concept-working-tracking-system-on-city-streets-seamless.mp4?s=mp4-640x640-is&k=20&c=EKc-Vh5uy-_XvvtYctQzaUug4o8yA8LT4b6Niw30Los="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1155614662/pt/v%C3%ADdeo/4k-resolution-big-data-connection-communication-network-smart-city-internet-of-thing-bangkok.jpg?s=640x640&k=20&c=0ObOPFA9b8SCi50qXgIb6oJJk_rONemyGzsYeIAWdss=",
			"url": "https://media.istockphoto.com/id/1155614662/pt/v%C3%ADdeo/4k-resolution-big-data-connection-communication-network-smart-city-internet-of-thing-bangkok.mp4?s=mp4-640x640-is&k=20&c=lU1pIct_DMutdkZQOoveLnAH4BqSTYnlCLqNXr9gzag="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1298040699/pt/v%C3%ADdeo/smart-digital-city-and-globalization-abstract-graphic-showing-connection-network.jpg?s=640x640&k=20&c=Sfnq1G8rj6E2QarFPEV0Wv3qdQ5lyT1RQRO65MNribU=",
			"url": "https://media.istockphoto.com/id/1298040699/pt/v%C3%ADdeo/smart-digital-city-and-globalization-abstract-graphic-showing-connection-network.mp4?s=mp4-640x640-is&k=20&c=Icp5N1MrCUCPBBH85mQK1NjzNwumGi9enE-WpFKd_YI="
		},
		{
			"thumb": "https://media.istockphoto.com/id/821580666/pt/v%C3%ADdeo/traffic-timelapse-video.jpg?s=640x640&k=20&c=_N7OVdVBtpErs45ZWBR03AeIK5Mg77Y-x6xjoxDAmPQ=",
			"url": "https://media.istockphoto.com/id/821580666/pt/v%C3%ADdeo/traffic-timelapse-video.mp4?s=mp4-640x640-is&k=20&c=wk2NFX76gKUZ_h-KmyNPzV-BW6Jh0NtxZVPMbTaBKz0="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1347240583/pt/v%C3%ADdeo/smart-city-with-wireless-network.jpg?s=640x640&k=20&c=TtV9u7vtO5Ty33-UydjaWXaMhCSSAoyS8XYdKeS9LYs=",
			"url": "https://media.istockphoto.com/id/1347240583/pt/v%C3%ADdeo/smart-city-with-wireless-network.mp4?s=mp4-640x640-is&k=20&c=0qAcwzXNQXq52tVuQ4NuBe7jPk5CZsE7vHZg27SM8wE="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1009846704/pt/v%C3%ADdeo/aerial-view-of-singapore-modern-city-and-communication-network-smart-city-internet-of-things.jpg?s=640x640&k=20&c=zRyKDzQrGroR0ChbdtGRvLP3dJDBvRpru32acMlwyq4=",
			"url": "https://media.istockphoto.com/id/1009846704/pt/v%C3%ADdeo/aerial-view-of-singapore-modern-city-and-communication-network-smart-city-internet-of-things.mp4?s=mp4-640x640-is&k=20&c=0hrSZ52p4BIlxfYzcZZcM-EIS47pT_DMf1L08SeMpVk="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1140040722/pt/v%C3%ADdeo/4k-earth-with-connection-lines-international-network-flight-routes.jpg?s=640x640&k=20&c=QqYcfvlY0d8fer_TfpY39-TRyeqzQ7FdFzY_8epyo9k=",
			"url": "https://media.istockphoto.com/id/1140040722/pt/v%C3%ADdeo/4k-earth-with-connection-lines-international-network-flight-routes.mp4?s=mp4-640x640-is&k=20&c=8gmZqAO0jlyO7V0st3NA9Ph_syijKa5dhA9Yz3Lpi5E="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1140040722/pt/v%C3%ADdeo/4k-earth-with-connection-lines-international-network-flight-routes.jpg?s=640x640&k=20&c=QqYcfvlY0d8fer_TfpY39-TRyeqzQ7FdFzY_8epyo9k=",
			"url": "https://media.istockphoto.com/id/1140040722/pt/v%C3%ADdeo/4k-earth-with-connection-lines-international-network-flight-routes.mp4?s=mp4-640x640-is&k=20&c=8gmZqAO0jlyO7V0st3NA9Ph_syijKa5dhA9Yz3Lpi5E="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1069075656/pt/v%C3%ADdeo/high-speed-lights-tunnel-motion-trails.jpg?s=640x640&k=20&c=BWkCP8ba6yquL7CTyRCBVxNB_eWl_tigSEgff4GGj0w=",
			"url": "https://media.istockphoto.com/id/1069075656/pt/v%C3%ADdeo/high-speed-lights-tunnel-motion-trails.mp4?s=mp4-640x640-is&k=20&c=HTkfQjSefVMLfCmnpc6wYhxVkWldUwJFtiWONKmBxDM="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1288715868/pt/v%C3%ADdeo/planet-earth-at-night-europe-north-america-and-south-america.jpg?s=640x640&k=20&c=galAN-HAhSaMVHtE5r7gZA82tm8gWi83UNJWxejAwPw=",
			"url": "https://media.istockphoto.com/id/1288715868/pt/v%C3%ADdeo/planet-earth-at-night-europe-north-america-and-south-america.mp4?s=mp4-640x640-is&k=20&c=CM5VwIDnv-2bK-1I1KguhpvkH3cXt3vaBenk9Q2BQnk="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1089357106/pt/v%C3%ADdeo/big-city-businessman-uses-smartphone-stands-on-skyscraper-roof-visualization-of-information.jpg?s=640x640&k=20&c=mY90Urr2RiXLl09Jgd5TYpd5BorlT61fJm73bFIlqzY=",
			"url": "https://media.istockphoto.com/id/1089357106/pt/v%C3%ADdeo/big-city-businessman-uses-smartphone-stands-on-skyscraper-roof-visualization-of-information.mp4?s=mp4-640x640-is&k=20&c=9Ah9TtFo_URYtwurY14TkO5kKLD23KzLhfN6YRqeC7c="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1187590724/pt/v%C3%ADdeo/aerial-camera-moving-around-buildings-wireless-communication-network-concept-iot-internet-of.jpg?s=640x640&k=20&c=K93NWD8e2vcHjAjDCrmueD_HjqfdKv5QzJFq_KIsvdQ=",
			"url": "https://media.istockphoto.com/id/1187590724/pt/v%C3%ADdeo/aerial-camera-moving-around-buildings-wireless-communication-network-concept-iot-internet-of.mp4?s=mp4-640x640-is&k=20&c=eB_FzFrT52uRTnVJMoy2VulAZ7hZyNdx0TaJkE49Rs4="
		},
		{
			"thumb": "https://media.istockphoto.com/id/872512026/pt/v%C3%ADdeo/multipath-target-monitoring.jpg?s=640x640&k=20&c=nJ46MlM8fgclQFI_jxmvfwS2Utgainvg5NJ2Y3y7_XU=",
			"url": "https://media.istockphoto.com/id/872512026/pt/v%C3%ADdeo/multipath-target-monitoring.mp4?s=mp4-640x640-is&k=20&c=RiyAsHvWqxtihJ46qRKD-4FGffG6vXdcYWvvyRwn8nE="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1213216756/pt/v%C3%ADdeo/global-connection-lines-data-exchange-digital-communication-pandemic-computer-virus.jpg?s=640x640&k=20&c=vWcn6pWrGOnTrdY3nKH5JyP06TKnMbDA1GvO77ujOlE=",
			"url": "https://media.istockphoto.com/id/1213216756/pt/v%C3%ADdeo/global-connection-lines-data-exchange-digital-communication-pandemic-computer-virus.mp4?s=mp4-640x640-is&k=20&c=5GoEzBIeA6_8PkRZdtkLswdlhbiynB6y25WqZEwMhJk="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1070157520/pt/v%C3%ADdeo/brazil-map-connections-full-details-background-4k.jpg?s=640x640&k=20&c=S-1gt3cpLeV9H_TF8UaIktPSyMyI4Hj20k9xIqMAYJ0=",
			"url": "https://media.istockphoto.com/id/1070157520/pt/v%C3%ADdeo/brazil-map-connections-full-details-background-4k.mp4?s=mp4-640x640-is&k=20&c=NwBQkZAEW62Z6AILVRokJ5gLzQrepyNRu7KfurbY-jw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1317591299/pt/v%C3%ADdeo/handsome-stylish-japanese-businessman-in-glasses-reading-notebook-and-watching-news-on.jpg?s=640x640&k=20&c=Ina_sq7dba9I3CbJuj_5HXI5TWwvLcs-iYz2ZqWc-kc=",
			"url": "https://media.istockphoto.com/id/1317591299/pt/v%C3%ADdeo/handsome-stylish-japanese-businessman-in-glasses-reading-notebook-and-watching-news-on.mp4?s=mp4-640x640-is&k=20&c=K0xjuCPbDdGk79qOMNVhSPA_lWUy-sUK9dARKL3FwNc="
		},
		{
			"thumb": "https://media.istockphoto.com/id/873702452/pt/v%C3%ADdeo/3d-render-abstract-futuristic-urban-background-virtual-reality-cyber-safety-electronics.jpg?s=640x640&k=20&c=neoe2H4z3KV-XEZjCoZ-CNT8RjFZIrDAV0YWUd8Vb30=",
			"url": "https://media.istockphoto.com/id/873702452/pt/v%C3%ADdeo/3d-render-abstract-futuristic-urban-background-virtual-reality-cyber-safety-electronics.mp4?s=mp4-640x640-is&k=20&c=1dH1DIuYTpqCu5g3wpRxd_BBRz-MeUhUZOB3L59YwF4="
		},
		{
			"thumb": "https://media.istockphoto.com/id/473405423/pt/v%C3%ADdeo/engarrafamento-na-cidade-dusk.jpg?s=640x640&k=20&c=aBQIPq5MbYaa0twtnq0YqnojZzANN1vWOmrNwtizf38=",
			"url": "https://media.istockphoto.com/id/473405423/pt/v%C3%ADdeo/engarrafamento-na-cidade-dusk.mp4?s=mp4-640x640-is&k=20&c=t0zLRjGzOPBwghl4NEfApnwTtFCqwwCyr84rt-A2a0c="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1198411629/pt/v%C3%ADdeo/digital-network-spreading-through-city-cities-and-all-over-the-world.jpg?s=640x640&k=20&c=aggd-lWVt5duDoGekM5VpYStNaLjT9KpbWORHMpoZoc=",
			"url": "https://media.istockphoto.com/id/1198411629/pt/v%C3%ADdeo/digital-network-spreading-through-city-cities-and-all-over-the-world.mp4?s=mp4-640x640-is&k=20&c=CGJ40zacIVY_7wEXXlBmzxH7kl5FJ3eysZ21AfcT_Wg="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1386060486/pt/v%C3%ADdeo/aerial-drone-sunrise-scene-of-traffic-car-light-on-highway-and-metro-sky-train-across-chao.jpg?s=640x640&k=20&c=IuxpkuTgJMvrgArJhEmY3Jsc_HrTyP5a0we4135NzwY=",
			"url": "https://media.istockphoto.com/id/1386060486/pt/v%C3%ADdeo/aerial-drone-sunrise-scene-of-traffic-car-light-on-highway-and-metro-sky-train-across-chao.mp4?s=mp4-640x640-is&k=20&c=FUvcl-HF9Rx_mCMPfVZ5dNFsfgbYBYcEkmmPFYkBgv0="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1312367089/pt/v%C3%ADdeo/global-connection-lines-expanding-network-global-business-network-security-spreading-pandemic.jpg?s=640x640&k=20&c=F5IA_IoqvapZH7-9Zd8w6ir3IkuWsjmqxT6GFCHGiBM=",
			"url": "https://media.istockphoto.com/id/1312367089/pt/v%C3%ADdeo/global-connection-lines-expanding-network-global-business-network-security-spreading-pandemic.mp4?s=mp4-640x640-is&k=20&c=90HlqVxCOcpdi_bc0w7uHtxwb1a8HodtdicqtJ1jur4="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1206880370/pt/v%C3%ADdeo/cityscape-with-light-streaks-urban-skyline-data-stream-internet-of-things-architectural-model.jpg?s=640x640&k=20&c=dLy749sYM7ETo5aCS6aDnlN8Oj45wlFiiVlG13fzZ9Y=",
			"url": "https://media.istockphoto.com/id/1206880370/pt/v%C3%ADdeo/cityscape-with-light-streaks-urban-skyline-data-stream-internet-of-things-architectural-model.mp4?s=mp4-640x640-is&k=20&c=UvTq6tTdMOuVOyiV8JFzSF6ShaxYgMl5TVbDyI7AmcI="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1194498762/pt/v%C3%ADdeo/motorway-morning-traffic-in-the-rain.jpg?s=640x640&k=20&c=N2U5pJhKUoBQWbTvArH52b91GPPD9Ll3YDMAxQWoeHw=",
			"url": "https://media.istockphoto.com/id/1194498762/pt/v%C3%ADdeo/motorway-morning-traffic-in-the-rain.mp4?s=mp4-640x640-is&k=20&c=veqKyvbQ8PbtSLBxYPPe7YvBSQdzocDnX6n3coMmMXM="
		},
		{
			"thumb": "https://media.istockphoto.com/id/488302239/pt/v%C3%ADdeo/grande-movendo-sobre-esta%C3%A7%C3%A3o-do-centro-da-cidade-de-lua-cheia.jpg?s=640x640&k=20&c=uZebvq1MWnlujJ2eRzZ0CE6ad34skpS1tRuFNMUJcTo=",
			"url": "https://media.istockphoto.com/id/488302239/pt/v%C3%ADdeo/grande-movendo-sobre-esta%C3%A7%C3%A3o-do-centro-da-cidade-de-lua-cheia.mp4?s=mp4-640x640-is&k=20&c=2qyimnHJhhX9se5KhvIWTZut4EWNaVSCmdpiaUDXAgY="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1168963779/pt/v%C3%ADdeo/4k-time-lapse-uprisen-angle-of-downtown-chicago-skyscraper-with-reflection-of-clouds-among.jpg?s=640x640&k=20&c=fzl5yYyhqmNH6nRm9k2TAIFPgYOzQENEVgNU4KrbhmY=",
			"url": "https://media.istockphoto.com/id/1168963779/pt/v%C3%ADdeo/4k-time-lapse-uprisen-angle-of-downtown-chicago-skyscraper-with-reflection-of-clouds-among.mp4?s=mp4-640x640-is&k=20&c=AR-9Mo3jb4u8B1HG2-l_j_N6haDspWCqtuc1EGSXFbM="
		},
		{
			"thumb": "https://media.istockphoto.com/id/164652041/pt/v%C3%ADdeo/futurista-cidade-timelapse.jpg?s=640x640&k=20&c=MGWivJ9NuHEezaMmx5gkV9fn3c63W3z_4HS0VHeULDg=",
			"url": "https://media.istockphoto.com/id/164652041/pt/v%C3%ADdeo/futurista-cidade-timelapse.mp4?s=mp4-640x640-is&k=20&c=kAFPc0OTT-ZMrTyPpEY0FsM5g8tOPj4icGBuDEu7CAw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1039558964/pt/v%C3%ADdeo/4k-time-lapse-of-automatic-train-moving-to-tunnel-tokyo-japan.jpg?s=640x640&k=20&c=ix4jzu6ErbmAhbwqaPvq3dc3LbLyLTw4WtmFzD9O7VU=",
			"url": "https://media.istockphoto.com/id/1039558964/pt/v%C3%ADdeo/4k-time-lapse-of-automatic-train-moving-to-tunnel-tokyo-japan.mp4?s=mp4-640x640-is&k=20&c=loYcmCmeYnj-wPulU-tRg5bpjYo4IEKIUOE5MAwg3VI="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1292288310/pt/v%C3%ADdeo/futuristic-smart-traffic-automotive-sensing-system-concept.jpg?s=640x640&k=20&c=I4wKakRMf4jU3RDi8x_9eMdcGML_LnAmxNokQPbHfa4=",
			"url": "https://media.istockphoto.com/id/1292288310/pt/v%C3%ADdeo/futuristic-smart-traffic-automotive-sensing-system-concept.mp4?s=mp4-640x640-is&k=20&c=xUY_WgIuoe18qiBDRSa0A1Y5gulGntfZJpMDaCA7710="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1313403733/pt/v%C3%ADdeo/rush-hour-traffic-fast-moving-fast-moving-traffic-drives-time-lapse-moving-fast-light-road.jpg?s=640x640&k=20&c=e3_PCOAwNiUvkb4RMrlRKKKZR-JNmxJldAnsqMB-7gQ=",
			"url": "https://media.istockphoto.com/id/1313403733/pt/v%C3%ADdeo/rush-hour-traffic-fast-moving-fast-moving-traffic-drives-time-lapse-moving-fast-light-road.mp4?s=mp4-640x640-is&k=20&c=t0I4em64spamE0C76FEydPoIKYk4PyEIS02NioRpHKo="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1236325140/pt/v%C3%ADdeo/retro-futuristic-city-flythrough-seamless-loop-80s-sci-fi-landscape-in-space.jpg?s=640x640&k=20&c=A2rjbfBTA6xc3dOZg1VnKrxcm-7RKHB8XLXkhtx4JTE=",
			"url": "https://media.istockphoto.com/id/1236325140/pt/v%C3%ADdeo/retro-futuristic-city-flythrough-seamless-loop-80s-sci-fi-landscape-in-space.mp4?s=mp4-640x640-is&k=20&c=P_bVveGSWzFhrzuWgfqdSCzQMFvGQpBfROa8DuuN73c="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1210337927/pt/v%C3%ADdeo/animation-of-connections-between-people-with-city-in-background.jpg?s=640x640&k=20&c=X_jLXpUVIROjRUF_BVbvK8_UQtfyXBbsIJmzlBN65B0=",
			"url": "https://media.istockphoto.com/id/1210337927/pt/v%C3%ADdeo/animation-of-connections-between-people-with-city-in-background.mp4?s=mp4-640x640-is&k=20&c=v7YmBpNwS0_nb5rF3aZA9mpbDYPph_1Pzj1IYFzdhss="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1181538366/pt/v%C3%ADdeo/4k-resolution-data-network-connection-technology-drone-point-of-view-hyper-lapse-of-hong-kong.jpg?s=640x640&k=20&c=cqorzi9ti09UOxMh3cv-rmbN9hHqdXdUKiW960om4Ek=",
			"url": "https://media.istockphoto.com/id/1181538366/pt/v%C3%ADdeo/4k-resolution-data-network-connection-technology-drone-point-of-view-hyper-lapse-of-hong-kong.mp4?s=mp4-640x640-is&k=20&c=6-YMJw4KbrBJt7nmD5hGXQTHVDEyMOBPn45VrNBnNdw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1134369545/pt/v%C3%ADdeo/4k-resolution-network-connection-concept-with-aerial-view-city.jpg?s=640x640&k=20&c=JSC023oQwgxEI7JdmK0dsmxy4s-SpR5GihZGQ8tGQAk=",
			"url": "https://media.istockphoto.com/id/1134369545/pt/v%C3%ADdeo/4k-resolution-network-connection-concept-with-aerial-view-city.mp4?s=mp4-640x640-is&k=20&c=XIYwTbzzPsbHqDXEwKmn66-Z13XeXV9lFXNO_0w7cNA="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1070315948/pt/v%C3%ADdeo/technological-digital-background-consisting-of-a-futuristic-city-with-data-looped.jpg?s=640x640&k=20&c=rewGJVn4quvDLG5Qcxq_8RuhAYqFxTuDbjZb9VnHkgo=",
			"url": "https://media.istockphoto.com/id/1070315948/pt/v%C3%ADdeo/technological-digital-background-consisting-of-a-futuristic-city-with-data-looped.mp4?s=mp4-640x640-is&k=20&c=sjmvY_tZO4kHUDdGzq7UUNwV9FiVgS_Peos0OE4lfTU="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1124886116/pt/v%C3%ADdeo/time-lapse-expressway-top-view-circl-road-traffic-an-important-infrastructure-in-bangkok.jpg?s=640x640&k=20&c=0nP1j1aKXvCYZE0VYd6eHKjIyXp_bdzoqq9uAOTmh1g=",
			"url": "https://media.istockphoto.com/id/1124886116/pt/v%C3%ADdeo/time-lapse-expressway-top-view-circl-road-traffic-an-important-infrastructure-in-bangkok.mp4?s=mp4-640x640-is&k=20&c=p7ADoA4qEtfhrjx-iQMpLLexApmRzI50sMlP_o-6uQY="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1284511475/pt/v%C3%ADdeo/location-icons-of-gps-navigation-global-5g-high-speed-internet-connection-and-big-data.jpg?s=640x640&k=20&c=FaNiEQW16_4W1CPw3HtfwB83L6gtmKwDKPxKIf99dK0=",
			"url": "https://media.istockphoto.com/id/1284511475/pt/v%C3%ADdeo/location-icons-of-gps-navigation-global-5g-high-speed-internet-connection-and-big-data.mp4?s=mp4-640x640-is&k=20&c=GRa2UpGPEFkSXhscseUlCQR1tKhPHY1CWBofsmqxrNQ="
		},
		{
			"thumb": "https://media.istockphoto.com/id/958433446/pt/v%C3%ADdeo/t-l-illuminated-elevated-roads-and-busy-traffic-at-night-shanghai-china.jpg?s=640x640&k=20&c=GA2KcZJkBmsvtlzD797FA6qGN5i08Q8rwsf8Nip_R1U=",
			"url": "https://media.istockphoto.com/id/958433446/pt/v%C3%ADdeo/t-l-illuminated-elevated-roads-and-busy-traffic-at-night-shanghai-china.mp4?s=mp4-640x640-is&k=20&c=Bn9LIZ8aKXjiFuNTDBjfEdK6lNyRk6oYoyje9NmKx94="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1263938706/pt/v%C3%ADdeo/80s-retro-background-3d-loop-animation-futuristic-car-drive-through-neon-city.jpg?s=640x640&k=20&c=neC8CNMwG6lKuXHFa7GKC5TJo-L0uq-rwpp8Ebdw084=",
			"url": "https://media.istockphoto.com/id/1263938706/pt/v%C3%ADdeo/80s-retro-background-3d-loop-animation-futuristic-car-drive-through-neon-city.mp4?s=mp4-640x640-is&k=20&c=Yxlgetuw8W6hAA5QLqKjNihSLhSzScFKoqGtgljWoGo="
		},
		{
			"thumb": "https://media.istockphoto.com/id/899024586/pt/v%C3%ADdeo/time-lapse-of-traffic-on-highway-long-exposure-from-head-light-from-car-on-highway-in-the.jpg?s=640x640&k=20&c=a3deL61ve_QoJU2cry0PDIwBvd2pp7BSZ11h1sSYUos=",
			"url": "https://media.istockphoto.com/id/899024586/pt/v%C3%ADdeo/time-lapse-of-traffic-on-highway-long-exposure-from-head-light-from-car-on-highway-in-the.mp4?s=mp4-640x640-is&k=20&c=FvgUKAkNYTL27fGESXU9e8QQBXLVPPEfpZnjIL89vEg="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1269511011/pt/v%C3%ADdeo/t-l-chicago-urban-skyline-and-5g-network-concept-at-night.jpg?s=640x640&k=20&c=sQFBAn8nmPn0NPCsHf8I0aj23cnXMNvjiOdi6tnCcaY=",
			"url": "https://media.istockphoto.com/id/1269511011/pt/v%C3%ADdeo/t-l-chicago-urban-skyline-and-5g-network-concept-at-night.mp4?s=mp4-640x640-is&k=20&c=NzCykGPaQkKe0_DIFBJJChDmxgVJGXQDXnVb4ffte-o="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1365181132/pt/v%C3%ADdeo/futuristic-concept-sports-car-on-the-background-of-glowing-neon-lines-red-neon-laser-3d.jpg?s=640x640&k=20&c=L3FtoMlDIXATO55NUOLlHcfb1x0L2a6r8yzXH7axm5U=",
			"url": "https://media.istockphoto.com/id/1365181132/pt/v%C3%ADdeo/futuristic-concept-sports-car-on-the-background-of-glowing-neon-lines-red-neon-laser-3d.mp4?s=mp4-640x640-is&k=20&c=rbk-OQjWLjXD5t9ACWPkvIRPBfCgYydIEdro45uXagU="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1270766443/pt/v%C3%ADdeo/business-technology-city-investment-analysis-graph-chart-hud-motion-graphic-stock-exchange.jpg?s=640x640&k=20&c=V70x79Bq-XtBJ54Keki8O_NJ-9-DUczs_yV4_C1zmoQ=",
			"url": "https://media.istockphoto.com/id/1270766443/pt/v%C3%ADdeo/business-technology-city-investment-analysis-graph-chart-hud-motion-graphic-stock-exchange.mp4?s=mp4-640x640-is&k=20&c=GLvEFu8CML1bulXOL-S3QNedb92NaFdiTDHdW5VYKEg="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1170175566/pt/v%C3%ADdeo/high-speed-track-with-binary-code-connections-glowing-in-dark-space.jpg?s=640x640&k=20&c=_wvgScZr3MMOYHcuxTKsxnCiKLY2eUsjkIWIvCR-EZ4=",
			"url": "https://media.istockphoto.com/id/1170175566/pt/v%C3%ADdeo/high-speed-track-with-binary-code-connections-glowing-in-dark-space.mp4?s=mp4-640x640-is&k=20&c=DxAfYrasC8v-B7ap5znqzpsp3lVLQVayL4a6O80sEjE="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1210942046/pt/v%C3%ADdeo/smart-transportation.jpg?s=640x640&k=20&c=3gQmDUaR2mpiR4d8smSS3t52feF9JBJtGcbUcmHVCqU=",
			"url": "https://media.istockphoto.com/id/1210942046/pt/v%C3%ADdeo/smart-transportation.mp4?s=mp4-640x640-is&k=20&c=VvZP_RiHhE8S9MAtzWDwqV7pbV6TJM3x0KDNQE__bDU="
		},
		{
			"thumb": "https://media.istockphoto.com/id/912088506/pt/v%C3%ADdeo/4k-animation-aerial-view-of-night-map-with-3d-building-and-destination-moving-location-path.jpg?s=640x640&k=20&c=7Wj9ZbJYvfuFYLLuHdPgrsvsPL_f2F7tbOVUn3JWi2A=",
			"url": "https://media.istockphoto.com/id/912088506/pt/v%C3%ADdeo/4k-animation-aerial-view-of-night-map-with-3d-building-and-destination-moving-location-path.mp4?s=mp4-640x640-is&k=20&c=sLabeHGFAPMM1vy6MQyeMiEDdmsoQgee0Sn97qQJ2nY="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1038104474/pt/v%C3%ADdeo/flying-through-data-structures-loop.jpg?s=640x640&k=20&c=TmjdYTs9_KaWeaKeiJrsgHCmt4lUjEueZ86CTuxbzMU=",
			"url": "https://media.istockphoto.com/id/1038104474/pt/v%C3%ADdeo/flying-through-data-structures-loop.mp4?s=mp4-640x640-is&k=20&c=AoKb1Uy07f2DVA-tnuBcknqIFU1PXXG__z2amtM_Lhs="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1212776823/pt/v%C3%ADdeo/aerial-camera-moving-around-buildings-wireless-communication-network-concept-iot-internet-of.jpg?s=640x640&k=20&c=dz4-z9GEvNjTPWFNPXFX4Qfgv2663AIe7Qfq-CY90Yc=",
			"url": "https://media.istockphoto.com/id/1212776823/pt/v%C3%ADdeo/aerial-camera-moving-around-buildings-wireless-communication-network-concept-iot-internet-of.mp4?s=mp4-640x640-is&k=20&c=zwiEPIoRTBGkdZIEU10V2euRpvSt0AoDW0wKJ6oDE3A="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1216919837/pt/v%C3%ADdeo/4k-digital-cyberspace-and-data-network-connections-transfer-digital-data-hi-speed-internet.jpg?s=640x640&k=20&c=7EfAsCTYCfYCQGGA3KGc5eF8CDM7OR4UYaKaOiuTbIU=",
			"url": "https://media.istockphoto.com/id/1216919837/pt/v%C3%ADdeo/4k-digital-cyberspace-and-data-network-connections-transfer-digital-data-hi-speed-internet.mp4?s=mp4-640x640-is&k=20&c=Hh3nzJzqPLgo7iwQ5G7hQICimQGIz9Dqj3GiYaeN-i0="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1210788516/pt/v%C3%ADdeo/closeup-of-person-hands-on-steering-wheel-driving-car.jpg?s=640x640&k=20&c=WSu2aIF9aZH012Q9XKQGBdQUG4IxdgThyXIuCWLG4LE=",
			"url": "https://media.istockphoto.com/id/1210788516/pt/v%C3%ADdeo/closeup-of-person-hands-on-steering-wheel-driving-car.mp4?s=mp4-640x640-is&k=20&c=NoEkYaHKJ4mkCIteADFiUsfpVei_r0aCtysfyYlzH48="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1219864053/pt/v%C3%ADdeo/modern-city-with-wireless-network-connection-concept.jpg?s=640x640&k=20&c=Ly3G15hCfh_Y6lWaiEVk7Fl-J_Id740F0fQ07yPVz5Y=",
			"url": "https://media.istockphoto.com/id/1219864053/pt/v%C3%ADdeo/modern-city-with-wireless-network-connection-concept.mp4?s=mp4-640x640-is&k=20&c=M6AuJ7MStvcMrDY4v4n3AmW_-O7TQ4gOJzNntJk4DlQ="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1301275551/pt/v%C3%ADdeo/woman-use-phone-while-commuting.jpg?s=640x640&k=20&c=AlBgcvng1S0MFCssTh55EpJU_yfy-aTWqW6IkYpfwco=",
			"url": "https://media.istockphoto.com/id/1301275551/pt/v%C3%ADdeo/woman-use-phone-while-commuting.mp4?s=mp4-640x640-is&k=20&c=AObaLTl_SgudvpC3tJ6IB4T7G_H-VrL9HfzphgiI34c="
		},
		{
			"thumb": "https://media.istockphoto.com/id/472897555/pt/v%C3%ADdeo/metro.jpg?s=640x640&k=20&c=Vu3dQeH7BHj7am7sZOBYk8c6eTNIe3VVX2UkDH_75Fo=",
			"url": "https://media.istockphoto.com/id/472897555/pt/v%C3%ADdeo/metro.mp4?s=mp4-640x640-is&k=20&c=ItRTEYfdBAHwnO6E70SuUoQKc4lBEcXNMmg3R1Deazk="
		},
		{
			"thumb": "https://media.istockphoto.com/id/968952374/pt/v%C3%ADdeo/hud-multipath-target-monitoring-in-city.jpg?s=640x640&k=20&c=wNmYMzPK8CkzW0W4EJfImLUIZpnD8PsSWGRLHw__eFg=",
			"url": "https://media.istockphoto.com/id/968952374/pt/v%C3%ADdeo/hud-multipath-target-monitoring-in-city.mp4?s=mp4-640x640-is&k=20&c=h_ZBa_-iwhS5BeuZRMtoAiB0H70E39X_8OflX6Rvspw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1187971398/pt/v%C3%ADdeo/aerial-map-pin-flat-above-city-scape-and-network-connection-concept.jpg?s=640x640&k=20&c=j5v8KBEaEUrHBUUq8Zp09S9KzWLhSaJh1cCFWfjGLE8=",
			"url": "https://media.istockphoto.com/id/1187971398/pt/v%C3%ADdeo/aerial-map-pin-flat-above-city-scape-and-network-connection-concept.mp4?s=mp4-640x640-is&k=20&c=WIBdZELd_MP-p_8WtC0RKImiZhrXsYuBZPl4cEQaguI="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1263542281/pt/v%C3%ADdeo/futuristic-autonomous-self-driving-car-moving-through-city-head-up-display-hud-showing.jpg?s=640x640&k=20&c=Fy94D11UmMsKTN0dp6pT6V4iOGdtlvQdBFpyUNx-eFs=",
			"url": "https://media.istockphoto.com/id/1263542281/pt/v%C3%ADdeo/futuristic-autonomous-self-driving-car-moving-through-city-head-up-display-hud-showing.mp4?s=mp4-640x640-is&k=20&c=yE0vMS0Y15aF7kiXeFFq8RZiTvzRQljpMs5UXNDSDRE="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1249155345/pt/v%C3%ADdeo/beautiful-female-and-senior-man-are-having-a-conversation-in-a-driverless-autonomous-vehicle.jpg?s=640x640&k=20&c=hDLRTuanewmlqNoS23g3d_OQSq3Xc2BgySkO0nKieOk=",
			"url": "https://media.istockphoto.com/id/1249155345/pt/v%C3%ADdeo/beautiful-female-and-senior-man-are-having-a-conversation-in-a-driverless-autonomous-vehicle.mp4?s=mp4-640x640-is&k=20&c=53qaxKtSbMIoBZOAO9aKoXa2T4O52V7-TpCdot-zL8I="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1169499493/pt/v%C3%ADdeo/smart-city-motion-infographic-design-scene-animation-animation-smart-town-with-icon.jpg?s=640x640&k=20&c=HIV28ht4qxez9ELWlDkal68IFjm2HS4RFwPK4aCcPrQ=",
			"url": "https://media.istockphoto.com/id/1169499493/pt/v%C3%ADdeo/smart-city-motion-infographic-design-scene-animation-animation-smart-town-with-icon.mp4?s=mp4-640x640-is&k=20&c=S3oq36Jo9yEjg8bSYKpF9iV_f6jHm-uue_igK39XC0c="
		},
		{
			"thumb": "https://media.istockphoto.com/id/504270364/pt/v%C3%ADdeo/conduzir-um-carro-na-estrada-secund%C3%A1ria.jpg?s=640x640&k=20&c=yh766AX7zdEeodSLM74Rsnqsujn2sdk2dYxJdn7dkEY=",
			"url": "https://media.istockphoto.com/id/504270364/pt/v%C3%ADdeo/conduzir-um-carro-na-estrada-secund%C3%A1ria.mp4?s=mp4-640x640-is&k=20&c=C2dLMb3jGcfJdhIGvlIlMQvBaKLcqQI0Ocmx8VWYPUU="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1317591115/pt/v%C3%ADdeo/stylish-businessman-setting-location-on-an-interactive-3d-navigation-app-on-an-augmented.jpg?s=640x640&k=20&c=-4kXykXv-Am3XcccSaM4S3fwfqNh_qGft0LYhrD6krQ=",
			"url": "https://media.istockphoto.com/id/1317591115/pt/v%C3%ADdeo/stylish-businessman-setting-location-on-an-interactive-3d-navigation-app-on-an-augmented.mp4?s=mp4-640x640-is&k=20&c=1ZKsL5t8pHTUltPd01AjvQ4W7Bk3kJ7dsn_s3MWwiY4="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1299574212/pt/v%C3%ADdeo/smart-digital-city-and-globalization-abstract-graphic-showing-connection-network.jpg?s=640x640&k=20&c=I9e36a9CFB2xAyOIk8VWl4N9tTQ9s0-9vm-MdAdq8yE=",
			"url": "https://media.istockphoto.com/id/1299574212/pt/v%C3%ADdeo/smart-digital-city-and-globalization-abstract-graphic-showing-connection-network.mp4?s=mp4-640x640-is&k=20&c=GrI-jGRjNh4OMNnggGKRazSvkIOYB-j_hdRh5Tk0Yps="
		},
		{
			"thumb": "https://media.istockphoto.com/id/588179986/pt/v%C3%ADdeo/defocused-lights-evening-wintry-city-and-snowfall-loop.jpg?s=640x640&k=20&c=530N8HUj4HtrgcaEE8wHmZowL6oyZmmZHYHzZv2ya4o=",
			"url": "https://media.istockphoto.com/id/588179986/pt/v%C3%ADdeo/defocused-lights-evening-wintry-city-and-snowfall-loop.mp4?s=mp4-640x640-is&k=20&c=KqfLaLyM6m4GnwfSTdjuOzyRBeSWzxnhKO4zD4K5ZwQ="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1396310907/pt/v%C3%ADdeo/smart-city-and-metaverses-concept.jpg?s=640x640&k=20&c=dbepLU8XYAnXuKEyhQ3gRxcBScGfDoG2oPRZGR5fxoA=",
			"url": "https://media.istockphoto.com/id/1396310907/pt/v%C3%ADdeo/smart-city-and-metaverses-concept.mp4?s=mp4-640x640-is&k=20&c=QXXmQ5G3iDvMz2K_xxJvueQu4AtAds0weVpzz60gSyE="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1273529632/pt/v%C3%ADdeo/city-life-aerial-landscape-aerial-urban-district-cityscape-aerial-view-great-landscape-cable.jpg?s=640x640&k=20&c=45YZiW_DXbQRytqvv4-wxmKjJjFaJuKuuzaRroPimzI=",
			"url": "https://media.istockphoto.com/id/1273529632/pt/v%C3%ADdeo/city-life-aerial-landscape-aerial-urban-district-cityscape-aerial-view-great-landscape-cable.mp4?s=mp4-640x640-is&k=20&c=qg4hE2ZnZypppgR0_TzQwNS9NQh2s36jcia77ZChvYo="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1140761590/pt/v%C3%ADdeo/recharging-battery-in-electric-car.jpg?s=640x640&k=20&c=l2NLngkFw4CuX-K4ZS7mOCG0-HZFS7r4hAhZ8PJcDx0=",
			"url": "https://media.istockphoto.com/id/1140761590/pt/v%C3%ADdeo/recharging-battery-in-electric-car.mp4?s=mp4-640x640-is&k=20&c=lj-shEI0iMBzdihOLDoJxU9VxYMABBRcpgCZRBx4CDs="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1269977838/pt/v%C3%ADdeo/top-down-view-of-freighter-ship-in-santos-port-in-dark-river-porto-de-santos-sao-paulo-brazil.jpg?s=640x640&k=20&c=qPwvToZc8fgf0atcgNlpX2AKtvp5KACqJQkbhktegIU=",
			"url": "https://media.istockphoto.com/id/1269977838/pt/v%C3%ADdeo/top-down-view-of-freighter-ship-in-santos-port-in-dark-river-porto-de-santos-sao-paulo-brazil.mp4?s=mp4-640x640-is&k=20&c=j4Q4KzC1JWfzrkg570pmSAi5LBCW0EsP-AJmKb0PhJ0="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1165431348/pt/v%C3%ADdeo/planet-rising-above-city-skyline-in-a-futuristic-world.jpg?s=640x640&k=20&c=3gx9--2rrp9sQdEPFlz5hqQ8bkOoy7qD_NUoByZLrmw=",
			"url": "https://media.istockphoto.com/id/1165431348/pt/v%C3%ADdeo/planet-rising-above-city-skyline-in-a-futuristic-world.mp4?s=mp4-640x640-is&k=20&c=MA_PiyJ3aj7e0VyyImXvxOJnhadnV7eN6U7K0bwYACw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1148936632/pt/v%C3%ADdeo/the-man-silhouette-on-the-starry-sky-background-time-lapse.jpg?s=640x640&k=20&c=dMK1oCdRxkE3pZm01Afa94voTivQI6dGAOLbo4jbxaU=",
			"url": "https://media.istockphoto.com/id/1148936632/pt/v%C3%ADdeo/the-man-silhouette-on-the-starry-sky-background-time-lapse.mp4?s=mp4-640x640-is&k=20&c=yMmnjKlqAKdO5c7XkIImVujvf8gRaJO3okBPJW8owTw="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1089361290/pt/v%C3%ADdeo/autonomous-self-driving-cars-moving-through-city-concept-artificial-intelligence-scans-cars.jpg?s=640x640&k=20&c=CjAed4uqBdQud1ok15TmowcB52NUdBm4Lmb0lis_x3I=",
			"url": "https://media.istockphoto.com/id/1089361290/pt/v%C3%ADdeo/autonomous-self-driving-cars-moving-through-city-concept-artificial-intelligence-scans-cars.mp4?s=mp4-640x640-is&k=20&c=A7lVrHp8vDu1SCIwOH66SdRtdEuB-fIPHu7s3CazGxo="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1321110858/pt/v%C3%ADdeo/car-and-city-in-neon-style-80s-retro-wave-background-3d-animation-retro-futuristic-car-drive.jpg?s=640x640&k=20&c=-ciQp481mA_BVvZfBZrojxdJl5XTSblYV5pTRrd8Hek=",
			"url": "https://media.istockphoto.com/id/1321110858/pt/v%C3%ADdeo/car-and-city-in-neon-style-80s-retro-wave-background-3d-animation-retro-futuristic-car-drive.mp4?s=mp4-640x640-is&k=20&c=d189NZZw2FnsH4Y6CWtGSZ3Rw_4MKYWyhUNfTiyaKlk="
		},
		{
			"thumb": "https://media.istockphoto.com/id/1356112043/pt/v%C3%ADdeo/smart-city-and-metaverses-concept-motion-futuristic-neon-light-with-aerial-view-modern.jpg?s=640x640&k=20&c=GGdxC_ZkFz3CYcOWhR6iGoGn_KDLzAuNPOqmrCRSzAU=",
			"url": "https://media.istockphoto.com/id/1356112043/pt/v%C3%ADdeo/smart-city-and-metaverses-concept-motion-futuristic-neon-light-with-aerial-view-modern.mp4?s=mp4-640x640-is&k=20&c=MhzbndX5c3saTfydTTDc418IbUJYON4P_ypPSKg9VW8="
		}
	]

	document.querySelector("#videoList").innerHTML = videoList.map(function (video) {
		return `<img class="videoThumb" src="${video.thumb}" onclick="loadVideo('${video.url}')" />`;
	}).join("")


	$(".mouseMoveGlass").on("mousemove change mousedown touchstart blur focus", function (e) {
		if (e.originalEvent.buttons > 0 || e.type == "change") {
			glassModifier(e);
		}
	});
	document.querySelector("#bgColor").addEventListener("input", glassModifier, false);
	document.querySelector("#borderColor").addEventListener("input", glassModifier, false);


	document.querySelector(".imgAjuste").src = "./img/Logo_LW_Branco.png"
	document.querySelector(".login100-more").remove()//parte da direita e video
	document.querySelector(".login100-form-title").style = "width:64px;height:64px;margin-bottom:35px;"; //imagem da logo
	document.querySelector(".imgAjuste").style = "width:64px;height:64px;margin-bottom:100px;"; //imagem da logo
	document.querySelector(".login100-form").style = "padding:20px;background-color:none;"
	document.querySelector(".login100-form").style.background = "transparent"
	document.querySelector(".wrap-login100").style.background = "transparent"
	document.querySelector(".container-login100").style.background = "transparent"

	document.querySelector(".wrap-login100").style = "";
	// box-shadow:0 10px 16px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.19) !important;
	setGlass();
	document.body.click();
	// document.querySelector(".wrap-login100").style="width:500px;height:;200px;position:fixed;border:dolid 1px"
	appendBg();

}
function loadVideo(url) {
	document.querySelector(".video-intro source").src = url
	document.querySelector(".video-intro").load()
}
function glassModifier(e) {
	// console.log(e)
	let obj = {};
	var hexBg = document.querySelector("#bgColor").value
	var hexBorder = document.querySelector("#borderColor").value
	var bgOpacity = document.querySelector("#transparencySliderBg").value
	var borderOpacity = document.querySelector("#transparencySliderBorder").value
	var blur = document.querySelector("#blurSlider").value
	var rgbaBackground = 'rgba(' + parseInt(hexBg.slice(-6, -4), 16) + ',' + parseInt(hexBg.slice(-4, -2), 16) + ',' + parseInt(hexBg.slice(-2), 16) + ',' + bgOpacity + ')';
	var rgbaBorder = 'rgba(' + parseInt(hexBorder.slice(-6, -4), 16) + ',' + parseInt(hexBorder.slice(-4, -2), 16) + ',' + parseInt(hexBorder.slice(-2), 16) + ',' + borderOpacity + ')';


	obj.blur = blur
	obj.background = rgbaBackground
	obj.border = "solid 1px " + rgbaBorder

	// console.log("change",obj)
	setGlass(obj)

}
function btnSetGlass(el) {
	let obj = {};
	obj.background = el.style.background;
	obj.border = el.style.border;

	setGlass(obj)
}
function setGlass(obj = {}) {
	let glass = {};
	glass.background = obj.background || "rgba(0, 0, 0, 0.69)"
	glass.border = obj.border || "1px solid rgba(255, 210, 10, 0.7)"
	glass.blur = obj.blur || 5;

	document.querySelector(".limiter").style = `width: 500px;
	height: 90%;overflow: hidden;position:fixed;left:30px;top:30px;z-index:11;

	/* From https://css.glass */
	background: ${glass.background};
	border: ${glass.border};
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(${glass.blur}px);
	-webkit-backdrop-filter: blur(${glass.blur}px);
	
	`
}

function appendBg() {
	$(document.body).append(`
	<div class="login100-more" style="background-image: url('login/images/bg-01.jpg');position: fixed;top: 0;right: 0;width: 100%;height: 100%;z-index: 9;">
		<video id="videoIntro" class="video-intro" autoplay="" loop="" muted="">
		<source src="https://mdbootstrap.com/img/video/animation-intro.mp4" type="video/mp4">
		</video>
		</div>
	`);

}



// document.querySelector("h1").addEventListener("dblclick",function(){
// 	$("#nome").val("Valdecir 8 Merli")
// 	$("#rg").val("123")
// 	// $("#cpf").val("95412785077") 08693248022
// 	$("#cpf").val("08693248022")
// 	$("#dataNascimento").val("11/11/1988")
// 	$("#email_condutor").val("1@3.com")
// 	$("#numeroRegistro").val("456")
// 	$("#dataPrimeiraHabilitacao").val("11/11/2000")
// 	$("#dataValidade").val("11/11/2030")
// 	$("#cep").val("82620280")
// 	BuscarCep();
// 	$("#end_numero").val("369")
// 	document.querySelector("#imagem_cnh").click()
// })


//tmpoorariamente aqui, sobre api de login, a ideia é levar pro portal
function env(selected = null) {
	let allEnvs = JSON.parse(localStorage.getItem("@lw-all-enviroments"));
	if (selected) {
		if (!allEnvs[selected]) {
			console.table(allEnvs)
			console.error("Este ambiente não existe, veja a lista acima:")
			return;
		}
		const apis = allEnvs[selected];
		for (apiName in apis) {
			localStorage.setItem(apiName, apis[apiName]);
			console.log("[localStorage.setItem] ", apiName, apis[apiName])
		}
		console.warn(`${selected} [Selecionado]`)
		return

	}
	console.table(allEnvs)
}

function selectedEnv() {
	let selectedEnvString = localStorage.getItem("@lw-selected-enviroment");
	let selectedEnvJson = JSON.parse(selectedEnvString);
	console.log("@lw-selected-enviroment", selectedEnvString);
	console.table(selectedEnvJson)
}

function devMode(mode = "Production") {
	localStorage.setItem("devMode", mode)
	const envSelector = document.querySelector("#env")
	if (!envSelector) {
		createEnvSelector(mode);
	}
}
function createEnvSelector() {
	if (selectedDevMode = localStorage.getItem("devMode")) {
		console.log("DevMode: ", selectedDevMode);
		const botaoEntrarLogin = document.querySelector(".container-login100-form-btn > #entrar");
		if (botaoEntrarLogin) {
			botaoEntrarLogin.insertAdjacentHTML("beforebegin", `
            <select name="env" id="env" class="form-control" style="width:100%;height:50px;padding:5px;border:solid 0px #fff; background-color:#333;color:#ddd;border-radius:8px;">
                <option value="http://localhost:8006/vsmApiLogin.php">Production</option>
                <option value="http://localhost:8006/vsmApiLogin.php">Homolog</option>
                <option value="https://api.lwtecnologia.com.br/api/login">QA</option>
                <option value="http://localhost:8006/vsmApiLogin.php">Custom</option>
            </select>
            `);
			document.querySelectorAll("#env option").forEach(op => {
				if (op.innerText == selectedDevMode) {
					op.selected = true
				}
			})
		}
	}
}
// document.addEventListener("DOMContentLoaded",e => {
//     createEnvSelector();
// })

createEnvSelector();//gambi pra extensão, no portal eh dentro do DOMContentLoaded

function buscarTokenApi() {

	const email = $('input[name=email]').val()
	const senha = $('input[name=senha]').val()
	const envLink = document.querySelector("#env")?.value;
	const loginUrl = envLink || 'https://api.lwtecnologia.com.br/api/login';
	const data = {
		login: email,
		senha
	}

	if (loginUrl != 'https://api.lwtecnologia.com.br/api/login') {
		data.env = document.querySelector("#env").options[document.querySelector("#env").options.selectedIndex].innerText;
	}
	const requestOptions = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: new Headers({
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}),
	};

	fetch(loginUrl, requestOptions)
		.then(response => response.json())
		.then(function (response) {

			setarToken(response)

			/**
			 * quando for prod, tem que: 
			 * 
			 * ou devolver os links de prod, 
			 * ou limpar as possiveis variaveis de url do local storage que pode ter link remanescente de outros momentos
			 * 
			 * eu preferiria devolver os links de prod, pq até mesmo configurações furuas se mudasse link de prod seriam dinamicas
			 */

			const devModeEnabled = document.querySelector("#env")
			const apis = response?.enviroment?.apis;
			const allEnviromens = response?.enviroments
			if (apis) {
				for (apiName in apis) {
					localStorage.setItem(apiName, apis[apiName]);
					if (devModeEnabled) {
						console.log("[localStorage.setItem] ", apiName, apis[apiName])
						// inves de guardar cada link como uma entrada no localstorage... 
						// eu preferia usar 1 chave apenas, e guardar um objeto serializado com todas as urls
						// ex: JSON.stringify(response.enviroment.apis)
					}
				}
				localStorage.setItem("@lw-selected-enviroment", JSON.stringify(apis));
				localStorage.setItem("@lw-all-enviroments", JSON.stringify(allEnviromens));
			} else {
				//se não é um login de dev, deveria limpar as urls do localStorage
			}

		}).then(() => {
			$("#formLogin").submit();
			localStorage.setItem('buscarNotificacoes', 'true');
		}).catch(error => {
			console.error('ERRO LOGIN:', error)
			$("#formLogin").submit()
		});

}

function checkEnv(){
	try{
		return document.querySelector("#env").options[document.querySelector("#env").options.selectedIndex].innerText;
	}catch($e){
		console.warn("Nenhum env encontrado");
		return null;
	}
}