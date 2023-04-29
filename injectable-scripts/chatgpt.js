document.querySelector("roaw").insertAdjacentHTML("afterend",`
<style>
.group > .text-base {
    max-width:98%;
}
</style>
`)
document.querySelector("#__next a").insertAdjacentHTML("afterend",`
<div class="flex flex-col w-full py-2 md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)]  dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]"> 
    <textarea id="gptmenufilter" tabindex="0" data-id="292f8446-3015-4bff-90ae-5c0a7fa8d190" style="max-height: 200px; height: 24px; overflow-y: hidden;" rows="1" placeholder="Filter Menu" class="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0"></textarea>
    <button disabled="" class="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40">
    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
    </button>
</div>
`)
document.querySelector("#gptmenufilter").addEventListener("keydown",(event)=>{
    document.querySelectorAll(".scrollbar-trigger ol li").forEach(e=>{
        if(e?.innerText?.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1){
            e.style.display=""
        }else{
            e.style.display="none"
        }
    })
})