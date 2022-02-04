window.addEventListener("load", function(event) {
    console.log("Todos os recursos terminaram o carregamento!");
    

    $(".subnav-container").append(`<button id="toggleHighest" style="color:white;background-color:orange;border:solid 1px orange;border-radius:5px" type="button"> Highest filter ^ </button>`)
		$("#toggleHighest").on("click",function(){
		$(".ghx-issue").each((i,e)=>{
		var img = $(e).find("img")[1]
		var pri = img.getAttribute("alt")
		if(pri.indexOf("Highest")>-1){
			$(e).show()
		}else{
			$(e).hide()
		}
		})
		$(".ghx-backlog-card").each((i,e)=>{
			$(e).hide()
			var img = $(e).find("img").each((ii,ee)=>{
				if(ee.getAttribute("alt").indexOf("Highest")>-1){
					$(e).show()
				}else{
					//$(e).hide()
				}
			})
		})
	})



  });

