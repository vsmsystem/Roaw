
function css(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}

function fontAwesomeCheck() {
    var span = document.createElement('span');
    var injectThis = "";

    span.className = 'fa';
    span.style.display = 'none';
    document.body.insertBefore(span, document.body.firstChild);

    if ((css(span, 'font-family')) !== 'FontAwesome') {
        injectThis = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />`;
    }
    document.body.removeChild(span);
    return injectThis;
};

const roawId = document.querySelector("roaw").innerText
try {
    const jqueryInstance = jQuery.fn.jquery;
} catch (err) {
    var jqueryTag = document.createElement('script');
    jqueryTag.src = `chrome-extension://${roawId}/injectable-scripts/jquery-3.6.0.min.js`;
    document.body.insertAdjacentElement("beforebegin", jqueryTag)
}

const faCdnInject = fontAwesomeCheck();
const displayState = localStorage["sf2/profiler/toolbar/displayState"];
const roawBox = `
${faCdnInject}
<style>

.wrapperborders{
    border:solid 2px #ff1;
}

.wrapperborders * {
    border:dashed 1px #f00;
}

.wrapperborders > * {
    border:dashed 1px #0f0;
}
.wrapperborders > * > * {
    border:dashed 1px #0a0;
}
.wrapperborders > * > * > * {
    border:dashed 1px #060;
}
.wrapperborders > * > * > * > * {
    border:dashed 1px #00f;
}
.wrapperborders > * > * > * > * > * {
    border:dashed 1px #00f;
}
.wrapperborders > * > * > * > * > * > * {
    border:dashed 1px #00f !important;
}

.roawboxhidden{
    bottom: -9000px !important;
}
#roawbox {
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 99999;
    width: calc(100% - 0px);
    height: calc(100% - 20%);
    margin: 0px;
    border-top:solid 2px #555;
    
    
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease;
}

#roawbox > .tabs button {
    color:#fff;
}

.roawblur{
    /* From https://css.glass */
    color: #fff;
    background: rgba(0, 0, 0, 0.64);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    //border: 1px solid rgba(0, 0, 0, 0.7);
    
}


#roawbox>.content{
    overflow:scroll;
    height:100%;
    margin:5px;
    padding-bottom:90px;
}

#roawbox>.header>.title {
    display: inline;
    margin-left: 10px;
}

#roawbox>.header>.icons {
    float: right;
    margin-right: 10px;
}

#roawbox>.header {
    background: rgba(0, 0, 0, 0.44);
    padding: 3px;
}

#roawbox>.header>.icons>.headericon {
    background: #000;
    border: solid 1px #000;
    border-radius: 5px;
    padding: 2px;
    cursor: pointer;

}

#roawbox>.tabs {
    background: rgba(0, 0, 0, 0.25);
}

#roawbox .tabgroup {
    margin:4px;
    display:inline-block;
}

#roawbox .right {
    float:right;
    margin:4px;
}
#roawbox .tabgroup > button {
    background: rgba(0, 0, 0, 0.85);
    border: solid 0px #000;
    border-radius:5px;
    padding:3px !important;
}

#roawbox .dark {
    background: rgba(0, 0, 0, 0.85);
    border: solid 0px #000;
    padding:3px !important;
}

#roawbox .tabgroupleft > button {
    background: rgba(0, 0, 0, 0.85);
    border: solid 0px #000;
    border-radius:5px;
    padding:3px !important;
}

#roawbox .tabs > button {
    background: rgba(0, 0, 0, 0.85);
    border: solid 0px #000;
    padding:3px !important;
    border-radius:5px;
}
#roawbox .tabgroup > input {
    background: rgba(0, 0, 0, 0.25);
    border: solid 1px #000;
    border-radius:5px;
    color:#fff;
    padding:3px !important;
}
#roawbox .tabgroup input:focus{
    outline: none;
}

#roawbox .boxmenulink{
    border: solid 1px #000;
    background-color: #000;
    border-radius:5px;
}


</style>
<div id="roawbox" class="roawboxhidden roawblur">
<div class="header">
    <div class="title headericon">Roaw Toolbox</div>
    <div class="icons">
        <span class="headericon fa fa-database" onclick="dbView()"></span>
        <span class="headericon fa fa-table"></span>
        <span class="headericon fa fa-columns"></span>

        <span class="headericon fa fa-cog"></span>
        <span onclick="toggleRoawBox()"
            class="headericon fa fa-close"></span>
    </div>
</div>
<div class="tabs">
    <div class="tabgroup right">
        <button type="button" onclick="boxDocumentacoes()">Documentações</button>
    </div>
    <div class="tabgroup">
        <input id="roawselector" type="text" placeholder="selector" />
        <button type="button" onclick="boxMenuFind()">Menu</button>
        <button type="button" onclick="boxDadosTeste()">DadosTeste</button>
        <button type="button" onclick="boxEventListeners()" style="">EventListeners</button>
    </div>
</div>
<div class="content">teste</div>
</div>
`;


const fullHTML = `
	<div id="sfwdt80d3dd" class="sf-toolbar" style="display: block;" data-sfurl="/app_dev.php/_wdt/80d3dd"><!-- START of Symfony Web Debug Toolbar -->
    <div id="sfMiniToolbar-80d3dd" class="sf-minitoolbar" data-no-turbolink="" style="display: none;">
        <a href="javascript:void(0);" title="Show Symfony toolbar" tabindex="-1" accesskey="D" onclick="
            var elem = this.parentNode;
            if (elem.style.display == 'none') {
                document.getElementById('sfToolbarMainContent-80d3dd').style.display = 'none';
                document.getElementById('sfToolbarClearer-80d3dd').style.display = 'none';
                elem.style.display = 'block';
            } else {
                document.getElementById('sfToolbarMainContent-80d3dd').style.display = 'block';
                document.getElementById('sfToolbarClearer-80d3dd').style.display = 'block';
                elem.style.display = 'none'
            }

            Sfjs.setPreference('toolbar/displayState', 'block');
        ">
            <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 -256 1800 1800" id="svg3986" version="1.1" inkscape:version="0.48.3.1 r9886" width="100%" height="100%" sodipodi:docname="th_list_font_awesome.svg">
  <metadata id="metadata3996">
    <rdf:rdf>
      <cc:work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
      </cc:work>
    </rdf:rdf>
  </metadata>
  <defs id="defs3994"></defs>
  <sodipodi:namedview pagecolor="#ffffff" bordercolor="#ffffff" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="640" inkscape:window-height="480" id="namedview3992" showgrid="false" inkscape:zoom="45.254834" inkscape:cx="1797.5054" inkscape:cy="1411.9548" inkscape:window-x="0" inkscape:window-y="25" inkscape:window-maximized="0" inkscape:current-layer="svg3986"></sodipodi:namedview>
  <g transform="matrix(1,0,0,-1,7.5932203,1369.3559)" id="g3988">
    <path d="M 512,288 V 96 Q 512,56 484,28 456,0 416,0 H 96 Q 56,0 28,28 0,56 0,96 v 192 q 0,40 28,68 28,28 68,28 h 320 q 40,0 68,-28 28,-28 28,-68 z m 0,512 V 608 q 0,-40 -28,-68 -28,-28 -68,-28 H 96 Q 56,512 28,540 0,568 0,608 v 192 q 0,40 28,68 28,28 68,28 h 320 q 40,0 68,-28 28,-28 28,-68 z M 1792,288 V 96 Q 1792,56 1764,28 1736,0 1696,0 H 736 q -40,0 -68,28 -28,28 -28,68 v 192 q 0,40 28,68 28,28 68,28 h 960 q 40,0 68,-28 28,-28 28,-68 z M 512,1312 v -192 q 0,-40 -28,-68 -28,-28 -68,-28 H 96 q -40,0 -68,28 -28,28 -28,68 v 192 q 0,40 28,68 28,28 68,28 h 320 q 40,0 68,-28 28,-28 28,-68 z M 1792,800 V 608 q 0,-40 -28,-68 -28,-28 -68,-28 H 736 q -40,0 -68,28 -28,28 -28,68 v 192 q 0,40 28,68 28,28 68,28 h 960 q 40,0 68,-28 28,-28 28,-68 z m 0,512 v -192 q 0,-40 -28,-68 -28,-28 -68,-28 H 736 q -40,0 -68,28 -28,28 -28,68 v 192 q 0,40 28,68 28,28 68,28 h 960 q 40,0 68,-28 28,-28 28,-68 z" id="path3990" inkscape:connector-curvature="0" style="fill:#ddd;"></path>
  </g>
</svg>

        </a>
    </div>
    <style>
        
.sf-minitoolbar {
    background-color: #222;
    border-top-left-radius: 4px;
    bottom: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: none;
    height: 36px;
    padding: 6px;
    position: fixed;
    right: 0;
    z-index: 99999;
}

.sf-minitoolbar a {
    display: block;
}
.sf-minitoolbar svg,
.sf-minitoolbar img {
    max-height: 24px;
    max-width: 24px;
    display: inline;
}

.sf-toolbarreset * {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    vertical-align: baseline;
}

.sf-toolbarreset {
    background-color: #222;
    bottom: 0;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
    color: #EEE;
    font: 11px Arial, sans-serif;
    left: 0;
    margin: 0;
    padding: 0 36px 0 0;
    position: fixed;
    right: 0;
    text-align: left;
    text-transform: none;
    z-index: 99999;

    /* neutralize the aliasing defined by external CSS styles */
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
}
.sf-toolbarreset abbr {
    border: dashed #777;
    border-width: 0 0 1px;
}
.sf-toolbarreset svg,
.sf-toolbarreset img {
    height: 20px;
    display: inline-block;
}

.sf-toolbarreset .hide-button {
    background: #444;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 36px;
    height: 36px;
    cursor: pointer;
    text-align: center;
}
.sf-toolbarreset .hide-button svg {
    max-height: 18px;
    margin-top: 10px;
}

.sf-toolbar-block {
    cursor: default;
    display: block;
    float: left;
    height: 36px;
    margin-right: 0;
    white-space: nowrap;
}
.sf-toolbar-block > a,
.sf-toolbar-block > a:hover {
    display: block;
    text-decoration: none;
}

.sf-toolbar-block span {
    display: inline-block;
}
.sf-toolbar-block .sf-toolbar-value {
    color: #F5F5F5;
    font-size: 13px;
    line-height: 36px;
    padding: 0;
}
.sf-toolbar-block .sf-toolbar-label,
.sf-toolbar-block .sf-toolbar-class-separator {
    color: #AAA;
    font-size: 12px;
}

.sf-toolbar-block .sf-toolbar-info {
    border-collapse: collapse;
    display: table;
    z-index: 100000;
}
.sf-toolbar-block hr {
    border-top: 1px solid #777;
    margin: 4px 0;
    padding-top: 4px;
}
.sf-toolbar-block .sf-toolbar-info-piece {
    /* this 'border-bottom' trick is needed because 'margin-bottom' doesn't work for table rows */
    border-bottom: solid transparent 3px;
    display: table-row;
}
.sf-toolbar-block .sf-toolbar-info-piece-additional,
.sf-toolbar-block .sf-toolbar-info-piece-additional-detail {
    display: none;
}
.sf-toolbar-block .sf-toolbar-info-group {
    margin-bottom: 4px;
    padding-bottom: 2px;
    border-bottom: 1px solid #333333;
}
.sf-toolbar-block .sf-toolbar-info-group:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
}

.sf-toolbar-block .sf-toolbar-info-piece .sf-toolbar-status {
    padding: 2px 5px;
    margin-bottom: 0;
}
.sf-toolbar-block .sf-toolbar-info-piece .sf-toolbar-status + .sf-toolbar-status {
    margin-left: 4px;
}

.sf-toolbar-block .sf-toolbar-info-piece:last-child {
    margin-bottom: 0;
}

.sf-toolbar-block .sf-toolbar-info-piece a {
    color: #99CDD8;
    text-decoration: underline;
}
.sf-toolbar-block .sf-toolbar-info-piece a:hover {
    text-decoration: none;
}

.sf-toolbar-block .sf-toolbar-info-piece b {
    color: #AAA;
    display: table-cell;
    font-size: 11px;
    padding: 4px 8px 4px 0;
}
.sf-toolbar-block .sf-toolbar-info-piece span {

}
.sf-toolbar-block .sf-toolbar-info-piece span {
    color: #F5F5F5;
    font-size: 12px;
}

.sf-toolbar-block .sf-toolbar-info {
    background-color: #444;
    bottom: 36px;
    color: #F5F5F5;
    display: none;
    padding: 9px 0;
    position: absolute;
}

.sf-toolbar-block .sf-toolbar-info:empty {
    visibility: hidden;
}

.sf-toolbar-block .sf-toolbar-status {
    display: inline-block;
    color: #FFF;
    background-color: #666;
    padding: 3px 6px;
    margin-bottom: 2px;
    vertical-align: middle;
    min-width: 15px;
    min-height: 13px;
    text-align: center;
}

.sf-toolbar-block .sf-toolbar-status-green {
    background-color: #4F805D;
}
.sf-toolbar-block .sf-toolbar-status-red {
    background-color: #B0413E;
}
.sf-toolbar-block .sf-toolbar-status-yellow {
    background-color: #A46A1F;
}
.sf-toolbar-block .sf-toolbar-status-grey {
    background-color: #555;
}

.sf-toolbar-block.sf-toolbar-status-green {
    background-color: #4F805D;
    color: #FFF;
}
.sf-toolbar-block.sf-toolbar-status-red {
    background-color: #B0413E;
    color: #FFF;
}
.sf-toolbar-block.sf-toolbar-status-yellow {
    background-color: #A46A1F;
    color: #FFF;
}

.sf-toolbar-block-request .sf-toolbar-status {
    color: #FFF;
    display: inline-block;
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
}
.sf-toolbar-block-request .sf-toolbar-info-piece a {
    text-decoration: none;
}
.sf-toolbar-block-request .sf-toolbar-info-piece a:hover {
    text-decoration: underline;
}
.sf-toolbar-block-request .sf-toolbar-redirection-status {
    font-weight: normal;
    padding: 2px 4px;
    line-height: 18px;
}
.sf-toolbar-block-request .sf-toolbar-info-piece span.sf-toolbar-redirection-method {
    font-size: 12px;
    height: 17px;
    line-height: 17px;
}

.sf-toolbar-status-green .sf-toolbar-label,
.sf-toolbar-status-yellow .sf-toolbar-label,
.sf-toolbar-status-red .sf-toolbar-label {
    color: #FFF;
}
.sf-toolbar-status-green svg path,
.sf-toolbar-status-red svg path,
.sf-toolbar-status-yellow svg path {
    fill: #FFF;
}
.sf-toolbar-block-config svg path {
    fill: #FFF;
}

.sf-toolbar-block .sf-toolbar-icon {
    display: block;
    height: 36px;
    padding: 0 7px;
}
.sf-toolbar-block-request .sf-toolbar-icon {
    padding-left: 0;
    padding-right: 0;
}

.sf-toolbar-block .sf-toolbar-icon img,
.sf-toolbar-block .sf-toolbar-icon svg {
    border-width: 0;
    position: relative;
    top: 8px;
}

.sf-toolbar-block .sf-toolbar-icon img + span,
.sf-toolbar-block .sf-toolbar-icon svg + span {
    margin-left: 4px;
}
.sf-toolbar-block-config .sf-toolbar-icon .sf-toolbar-value {
    margin-left: 4px;
}

.sf-toolbar-block:hover {
    position: relative;
}
.sf-toolbar-block:hover .sf-toolbar-icon {
    background-color: #444;
    position: relative;
    z-index: 10002;
}
.sf-toolbar-block:hover .sf-toolbar-info {
    display: block;
    padding: 10px;
    max-width: 480px;
    max-height: 480px;
    word-wrap: break-word;
    overflow: hidden;
    overflow-y: auto;
}
.sf-toolbar-info-piece b.sf-toolbar-ajax-info {
    color: #F5F5F5;
}
.sf-toolbar-ajax-requests {
    table-layout: auto;
    width: 100%;
}
.sf-toolbar-ajax-requests td {
    background-color: #444;
    border-bottom: 1px solid #777;
    color: #F5F5F5;
    font-size: 12px;
    padding: 4px;
}
.sf-toolbar-ajax-requests tr:last-child td {
    border-bottom: 0;
}
.sf-toolbar-ajax-requests th {
    background-color: #222;
    border-bottom: 0;
    color: #AAA;
    font-size: 11px;
    padding: 4px;
}
.sf-ajax-request-url {
    max-width: 300px;
    line-height: 9px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.sf-toolbar-ajax-requests .sf-ajax-request-url a {
    text-decoration: none;
}
.sf-toolbar-ajax-requests .sf-ajax-request-url a:hover {
    text-decoration: underline;
}
.sf-ajax-request-duration {
    text-align: right;
}
.sf-ajax-request-loading {
    -webkit-animation: sf-blink .5s ease-in-out infinite;
    -o-animation: sf-blink .5s ease-in-out infinite;
    -moz-animation: sf-blink .5s ease-in-out infinite;
    animation: sf-blink .5s ease-in-out infinite;
}
@-webkit-keyframes sf-blink {
    0% { background: #222; }
    50% { background: #444; }
    100% { background: #222; }
}
@-moz-keyframes sf-blink {
    0% { background: #222; }
    50% { background: #444; }
    100% { background: #222; }
}
@keyframes sf-blink {
    0% { background: #222; }
    50% { background: #444; }
    100% { background: #222; }
}

.sf-toolbar-block-dump pre.sf-dump {
    background-color: #222;
    border-color: #777;
    border-radius: 0;
    margin: 6px 0 12px 0;
    width: 200px;
}
.sf-toolbar-block-dump pre.sf-dump:last-child {
    margin-bottom: 0;
}
.sf-toolbar-block-dump .sf-toolbar-info-piece .sf-toolbar-file-line {
    color: #AAA;
    margin-left: 4px;
}
.sf-toolbar-block-dump .sf-toolbar-info img {
    display: none;
}

/* Override the setting when the toolbar is on the top */


/* Responsive Design */
.sf-toolbar-icon .sf-toolbar-label,
.sf-toolbar-icon .sf-toolbar-value {
    display: none;
}
.sf-toolbar-block-config .sf-toolbar-icon .sf-toolbar-label {
    display: inline-block;
}

/* Legacy Design - these styles are maintained to make old panels look
   a bit better on the new toolbar */
.sf-toolbar-block .sf-toolbar-info-piece-additional-detail {
    color: #AAA;
    font-size: 12px;
}
.sf-toolbar-status-green .sf-toolbar-info-piece-additional-detail,
.sf-toolbar-status-yellow .sf-toolbar-info-piece-additional-detail,
.sf-toolbar-status-red .sf-toolbar-info-piece-additional-detail {
    color: #FFF;
}

@media (min-width: 768px) {

    .sf-toolbar-icon .sf-toolbar-label,
    .sf-toolbar-icon .sf-toolbar-value {
        display: inline;
    }

    .sf-toolbar-block .sf-toolbar-icon img,
    .sf-toolbar-block .sf-toolbar-icon svg {
        top: 6px;
    }
    .sf-toolbar-block-time .sf-toolbar-icon svg,
    .sf-toolbar-block-memory .sf-toolbar-icon svg {
        display: none;
    }
    .sf-toolbar-block-time .sf-toolbar-icon svg + span,
    .sf-toolbar-block-memory .sf-toolbar-icon svg + span {
        margin-left: 0;
    }

    .sf-toolbar-block .sf-toolbar-icon {
        padding: 0 10px;
    }
    .sf-toolbar-block-time .sf-toolbar-icon {
        padding-right: 5px;
    }
    .sf-toolbar-block-memory .sf-toolbar-icon {
        padding-left: 5px;
    }
    .sf-toolbar-block-request .sf-toolbar-icon {
        padding-left: 0;
        padding-right: 0;
    }
    .sf-toolbar-block-request .sf-toolbar-status {
        margin-right: 5px;
    }
    .sf-toolbar-block-request .sf-toolbar-icon svg + .sf-toolbar-label {
        margin-left: 0;
     }
    .sf-toolbar-block-request .sf-toolbar-label + .sf-toolbar-value {
        margin-right: 10px;
    }

    .sf-toolbar-block-request:hover .sf-toolbar-info {
        max-width: none;
    }

    .sf-toolbar-block .sf-toolbar-info-piece b {
        font-size: 12px;
    }
    .sf-toolbar-block .sf-toolbar-info-piece span {
        font-size: 13px;
    }

    .sf-toolbar-block-right {
        float: right;
        margin-left: 0;
        margin-right: 0;
    }
}

@media (min-width: 1024px) {
    .sf-toolbar-block .sf-toolbar-info-piece-additional,
    .sf-toolbar-block .sf-toolbar-info-piece-additional-detail {
        display: inline-block;
    }

    .sf-toolbar-block .sf-toolbar-info-piece-additional:empty,
    .sf-toolbar-block .sf-toolbar-info-piece-additional-detail:empty {
        display: none;
    }
}

    </style>
    <div id="sfToolbarClearer-80d3dd" style="clear: both; height: 36px; display: block;"></div>

<div id="sfToolbarMainContent-80d3dd" class="sf-toolbarreset clear-fix" data-no-turbolink="" style="display: block;">
    <div class="sf-toolbar-block sf-toolbar-block-request sf-toolbar-status-normal ">
    <!-- <a target="_blank" href="/vsmonitor.php?panel=request"> -->
		<div class="sf-toolbar-icon">        
			<span class="sf-toolbar-status sf-toolbar-status-green" id="roaw_a1">0</span>
			<span class="sf-toolbar-label" id="roaw_a2"> ... </span>
			<span class="sf-toolbar-value sf-toolbar-info-piece-additional" id="roaw_a3">...</span>
		</div>
    <!-- </a> -->       
		<div class="sf-toolbar-info" style="left: 0px;">        
			<div class="sf-toolbar-info-group">
				<div class="sf-toolbar-info-piece">
					<b>idUsuario</b>
					<span id="roaw_idUsuario"></span>
				</div>
				<div class="sf-toolbar-info-piece">
					<b>Tecnico</b>
					<span>Jose Silva De Oliveira Dos Santos</span> <span>Jose Silva</span>
				</div>
				<div class="sf-toolbar-info-piece">
					<b>Cliente</b>
					<span><span>Maria Do Carmo Siqueira</span></span>
				</div>
				<div class="sf-toolbar-info-piece">
					<b>Portas testadas</b>
					<span>212 213 214 - 0</span>
					</div>
				<div class="sf-toolbar-info-piece">
					<b>PON</b>
					<span>...</span>
				</div>
				<div class="sf-toolbar-info-piece">
					<b>RPON</b>
					<span>...</span>
				</div>
			</div>
		</div>
	</div>
	<div class="sf-toolbar-block sf-toolbar-block-twig sf-toolbar-status-normal " style="display:none;">
           
	<div class="sf-toolbar-icon">      
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<path fill="#aaaaaa" d="M54.621,8.908c-1.974,0-3.575,1.602-3.575,3.578c0,1.976,1.602,3.578,3.575,3.578c18.493,0,33.54,15.047,33.54,33.543  c0,18.495-15.047,33.542-33.54,33.542c-16.971,0-31.03-12.676-33.23-29.056l2.504,2.505c0.699,0.699,1.614,1.047,2.53,1.047  c0.916,0,1.831-0.348,2.53-1.047c1.397-1.398,1.397-3.663,0-5.061l-8.922-8.922c-1.397-1.397-3.663-1.397-5.06,0l-8.922,8.922  c-1.397,1.397-1.397,3.662,0,5.061c1.397,1.396,3.663,1.396,5.061,0l3.012-3.012c2.007,20.579,19.403,36.719,40.498,36.719  c22.439,0,40.697-18.258,40.697-40.698C95.318,27.166,77.061,8.908,54.621,8.908z"/>
<path fill="#aaaaaa" d="M41.141,69.414c-0.971,0-1.941-0.369-2.682-1.11c-1.481-1.481-1.482-3.883-0.001-5.364l11.856-11.86V27.108  c0-2.095,1.698-3.793,3.791-3.793c2.094,0,3.79,1.698,3.79,3.793v25.541c0,1.006-0.398,1.97-1.109,2.682L43.823,68.303  C43.083,69.043,42.112,69.414,41.141,69.414z"/>
<path fill="#aaaaaa" d="M81.644,51.94h-3.926c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5h3.926c1.381,0,2.5,1.119,2.5,2.5  S83.024,51.94,81.644,51.94z"/>
<path fill="#aaaaaa" d="M72.316,71.539c-0.64,0-1.279-0.244-1.768-0.732l-2.776-2.776c-0.977-0.977-0.977-2.559,0-3.535s2.559-0.977,3.535,0  l2.776,2.776c0.977,0.977,0.977,2.559,0,3.535C73.596,71.295,72.956,71.539,72.316,71.539z"/>
<path fill="#aaaaaa" d="M52.719,79.657c-1.381,0-2.5-1.119-2.5-2.5V73.23c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5v3.927  C55.219,78.538,54.1,79.657,52.719,79.657z"/>
<path fill="#aaaaaa" d="M69.541,35.117c-0.64,0-1.279-0.244-1.768-0.732c-0.977-0.977-0.977-2.559,0-3.536l2.775-2.776  c0.975-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.559,0,3.536l-2.775,2.776C70.821,34.873,70.181,35.117,69.541,35.117z"/></svg>	


        <span  id="tmaclock" class="sf-toolbar-value">00:00:00</span>

        <span class="sf-toolbar-label"> </span>
    </div>
            <div class="sf-toolbar-info" style="left: 0px;">        <div class="sf-toolbar-info-piece">
            <b>Render Time</b>
            <span>12 ms</span>
        </div>
        <div class="sf-toolbar-info-piece">
            <b>Template Calls</b>
            <span class="sf-toolbar-status">4</span>
        </div>
        <div class="sf-toolbar-info-piece">
            <b>Block Calls</b>
            <span class="sf-toolbar-status">4</span>
        </div>
        <div class="sf-toolbar-info-piece">
            <b>Macro Calls</b>
            <span class="sf-toolbar-status">0</span>
        </div>
    </div>
</div>
    <div class="sf-toolbar-block sf-toolbar-block-time sf-toolbar-status-normal ">
		      
			<div class="sf-toolbar-icon">        
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
					<path fill="#AAAAAA" d="M15.1,4.3c-2.1-0.5-4.2-0.5-6.2,0C8.6,4.3,8.2,4.1,8.2,3.8V3.4c0-1.2,1-2.3,2.3-2.3h3c1.2,0,2.3,1,2.3,2.3
		v0.3C15.8,4.1,15.4,4.3,15.1,4.3z M20.9,14c0,4.9-4,8.9-8.9,8.9s-8.9-4-8.9-8.9s4-8.9,8.9-8.9S20.9,9.1,20.9,14z M16.7,15
		c0-0.6-0.4-1-1-1H13V8.4c0-0.6-0.4-1-1-1s-1,0.4-1,1v6.2c0,0.6,0.4,1.3,1,1.3h3.7C16.2,16,16.7,15.6,16.7,15z">
					</path>
				</svg>

				<span class="sf-toolbar-value">Inputs</span>
				<span class="sf-toolbar-label" id = "hiddenCounter">-</span>
			</div>
		       
		<div class="sf-toolbar-info" style="left: 0px;" id="hiddenInputs">        
			
		</div>
	</div>
    <div class="sf-toolbar-block sf-toolbar-block-ajax sf-toolbar-status-normal " style="display: ;">
            <div class="sf-toolbar-icon">   
            <span class="sf-toolbar-value">Requests</span>     



        <span class="sf-toolbar-ajax-requests sf-toolbar-value"></span>
		<span class="sf-toolbar-label"></span>
    </div>
        <div class="sf-toolbar-info">        
		<div class="sf-toolbar-info-piece">
            <b class="sf-toolbar-ajax-info"></b>
        </div>
        <div class="sf-toolbar-info-piece">
            <table class="sf-toolbar-ajax-requests">
                <thead>
                    <tr>
                        <th>HTTP</th>
                        <th>Status</th>
                        <th>URL</th>
                        <th>Time</th>
                        <th>.</th>
    
                    </tr>
                </thead>
                <tbody class="sf-toolbar-ajax-request-list">
                <tbody>
                    
                </tbody>
				</tbody>
            </table>
        </div>
		<div class="sf-toolbar-info-group" style="display:none;">
			<div class="sf-toolbar-info-piece">
				<b>Rechamadas</b>
				<span class="sf-toolbar-status">27%</span>
			</div>
			<div class="sf-toolbar-info-piece">
				<b>FCR</b>
				<span class="sf-toolbar-status">74%</span>
			</div>
			<div class="sf-toolbar-info-piece">
				<b>TMA</b>
				<span class="sf-toolbar-status">07:26</span>
			</div>
		</div>

    </div>
</div>


                
            
                
            
            
                                    
    
    
    <div class="sf-toolbar-block sf-toolbar-block-security sf-toolbar-status-normal sf-toolbar-block-right">
    <div class="sf-toolbar-icon">        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
    <path fill="#AAAAAA" d="M21,20.4V22H3v-1.6c0-3.7,2.4-6.9,5.8-8c-1.7-1.1-2.9-3-2.9-5.2c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1c0,2.2-1.2,4.1-2.9,5.2C18.6,13.5,21,16.7,21,20.4z"></path>
</svg>

        <span class="sf-toolbar-value">G0056638</span>
    </div>
            <div class="sf-toolbar-info" style="right: 0px;">                    <div class="sf-toolbar-info-piece">
                <b>Logged in as</b>
                <span>anon.</span>
            </div>

            <div class="sf-toolbar-info-piece">
                <b>Authenticated</b>
                <span class="sf-toolbar-status sf-toolbar-status-green" onclick="doFetch()">Yes</span>
            </div>

                        <div class="sf-toolbar-info-piece">
                <b>Token class</b>
                <span><abbr title="Symfony\Component\Security\Core\Authentication\Token\AnonymousToken">AnonymousToken</abbr></span>
            </div>
                                    </div>
</div>


                    
    
      




    <div class="sf-toolbar-block sf-toolbar-block-vardump sf-toolbar-status-normal">
        <div class="sf-toolbar-icon">                    
            <span style="display:none;" class="sf-toolbar-label">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                <path d="M166.156,512h-41.531c-7.375-0.031-20.563-8.563-20.938-8.906C37.438,437.969,0,348.906,0,255.938  C0,162.719,37.656,73.375,104.281,8.219C104.313,8.188,117.25,0,124.625,0h41.531c15.219,0,33.25,11.125,40.063,24.781l2.906,5.844  c6.781,13.594,6.188,35.563-1.344,48.75l-27.906,48.813c-7.563,13.219-26.188,24.25-41.406,24.25H110.75  c-36.813,64-36.813,143.094-0.031,207.125h27.75c15.219,0,33.844,11.031,41.406,24.25l27.875,48.813  c7.531,13.188,8.156,35.094,1.375,48.781l-2.906,5.844C199.375,500.844,181.375,512,166.156,512z M512,128v256  c0,35.344-28.656,64-64,64H244.688c-1.25-11.219-3.969-22.156-9.156-31.25l-27.875-48.813  c-13.406-23.406-42.469-40.375-69.188-40.375h-8.156c-20.188-45.438-20.188-97.719,0-143.125h8.156  c26.719,0,55.781-16.969,69.188-40.375l27.906-48.813c5.188-9.094,7.906-20.063,9.156-31.25H448C483.344,64,512,92.656,512,128z   M328,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S328,381.25,328,368z M328,304c0-13.25-10.75-24-24-24  s-24,10.75-24,24s10.75,24,24,24S328,317.25,328,304z M328,240c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24  S328,253.25,328,240z M392,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S392,381.25,392,368z M392,304  c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S392,317.25,392,304z M392,240c0-13.25-10.75-24-24-24s-24,10.75-24,24  s10.75,24,24,24S392,253.25,392,240z M456,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S456,381.25,456,368z M456,304  c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S456,317.25,456,304z M456,240c0-13.25-10.75-24-24-24s-24,10.75-24,24  s10.75,24,24,24S456,253.25,456,240z M456,144c0-8.844-7.156-16-16-16H296c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h144  c8.844,0,16-7.156,16-16V144z"/>
                </svg>

            </span>
            <span class="sf-toolbar-value" onclick="toggleRoawBox()" >VarDump <b id="vardumpcount" style="color:orange"></b></span>
        </div>
    </div>
                
        
    <div class="sf-toolbar-block sf-toolbar-block-roawbox sf-toolbar-status-normal sf-toolbar-block-right">
        <div class="sf-toolbar-icon">                    
            <span style="display:none;" class="sf-toolbar-label">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                <path d="M166.156,512h-41.531c-7.375-0.031-20.563-8.563-20.938-8.906C37.438,437.969,0,348.906,0,255.938  C0,162.719,37.656,73.375,104.281,8.219C104.313,8.188,117.25,0,124.625,0h41.531c15.219,0,33.25,11.125,40.063,24.781l2.906,5.844  c6.781,13.594,6.188,35.563-1.344,48.75l-27.906,48.813c-7.563,13.219-26.188,24.25-41.406,24.25H110.75  c-36.813,64-36.813,143.094-0.031,207.125h27.75c15.219,0,33.844,11.031,41.406,24.25l27.875,48.813  c7.531,13.188,8.156,35.094,1.375,48.781l-2.906,5.844C199.375,500.844,181.375,512,166.156,512z M512,128v256  c0,35.344-28.656,64-64,64H244.688c-1.25-11.219-3.969-22.156-9.156-31.25l-27.875-48.813  c-13.406-23.406-42.469-40.375-69.188-40.375h-8.156c-20.188-45.438-20.188-97.719,0-143.125h8.156  c26.719,0,55.781-16.969,69.188-40.375l27.906-48.813c5.188-9.094,7.906-20.063,9.156-31.25H448C483.344,64,512,92.656,512,128z   M328,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S328,381.25,328,368z M328,304c0-13.25-10.75-24-24-24  s-24,10.75-24,24s10.75,24,24,24S328,317.25,328,304z M328,240c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24  S328,253.25,328,240z M392,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S392,381.25,392,368z M392,304  c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S392,317.25,392,304z M392,240c0-13.25-10.75-24-24-24s-24,10.75-24,24  s10.75,24,24,24S392,253.25,392,240z M456,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S456,381.25,456,368z M456,304  c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S456,317.25,456,304z M456,240c0-13.25-10.75-24-24-24s-24,10.75-24,24  s10.75,24,24,24S456,253.25,456,240z M456,144c0-8.844-7.156-16-16-16H296c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h144  c8.844,0,16-7.156,16-16V144z"/>
                </svg>

            </span>
            <span class="sf-toolbar-value" onclick="toggleRoawBox()" >RoawBox</span>
        </div>
    </div>
        
        
    <div class="sf-toolbar-block sf-toolbar-block-config sf-toolbar-status-normal sf-toolbar-block-right">

	<div class="sf-toolbar-icon">                    
		<span style="display:none;" class="sf-toolbar-label">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
			<path d="M166.156,512h-41.531c-7.375-0.031-20.563-8.563-20.938-8.906C37.438,437.969,0,348.906,0,255.938  C0,162.719,37.656,73.375,104.281,8.219C104.313,8.188,117.25,0,124.625,0h41.531c15.219,0,33.25,11.125,40.063,24.781l2.906,5.844  c6.781,13.594,6.188,35.563-1.344,48.75l-27.906,48.813c-7.563,13.219-26.188,24.25-41.406,24.25H110.75  c-36.813,64-36.813,143.094-0.031,207.125h27.75c15.219,0,33.844,11.031,41.406,24.25l27.875,48.813  c7.531,13.188,8.156,35.094,1.375,48.781l-2.906,5.844C199.375,500.844,181.375,512,166.156,512z M512,128v256  c0,35.344-28.656,64-64,64H244.688c-1.25-11.219-3.969-22.156-9.156-31.25l-27.875-48.813  c-13.406-23.406-42.469-40.375-69.188-40.375h-8.156c-20.188-45.438-20.188-97.719,0-143.125h8.156  c26.719,0,55.781-16.969,69.188-40.375l27.906-48.813c5.188-9.094,7.906-20.063,9.156-31.25H448C483.344,64,512,92.656,512,128z   M328,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S328,381.25,328,368z M328,304c0-13.25-10.75-24-24-24  s-24,10.75-24,24s10.75,24,24,24S328,317.25,328,304z M328,240c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24  S328,253.25,328,240z M392,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S392,381.25,392,368z M392,304  c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S392,317.25,392,304z M392,240c0-13.25-10.75-24-24-24s-24,10.75-24,24  s10.75,24,24,24S392,253.25,392,240z M456,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S456,381.25,456,368z M456,304  c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S456,317.25,456,304z M456,240c0-13.25-10.75-24-24-24s-24,10.75-24,24  s10.75,24,24,24S456,253.25,456,240z M456,144c0-8.844-7.156-16-16-16H296c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h144  c8.844,0,16-7.156,16-16V144z"/>
			</svg>

		</span>
        <span class="sf-toolbar-value">Frontools</span>
    </div>
          
	<div class="sf-toolbar-info" style="right: 0px;">        
	<div class="sf-toolbar-info-group">
		<div class="sf-toolbar-info-group">
			<div class="sf-toolbar-info-piece sf-toolbar-info-php-ext">
				<b>Status</b>
				<span class="sf-toolbar-status sf-toolbar-status-green">Disponivel</span>
				<span class="sf-toolbar-status sf-toolbar-status-red">Pausa 0</span>
			</div>
		</div>

		<div class="sf-toolbar-info-group">

        
            <div class="sf-toolbar-info-piece">
                <b>RoawBox</b>
                <span onclick="toggleRoawBox()" class="sf-toolbar-status">open</span>
                <span onclick="modalTeste()" class="sf-toolbar-status">modal</span>
            </div>

			<div class="sf-toolbar-info-piece">
				<b>Borders</b>
				<span onclick="toggleBodyBorders()" class="sf-toolbar-status">Body</span>
                <span onclick="toggleWrapperBorders()" class="sf-toolbar-status">Wrapper</span>
			</div>
			
			<div class="sf-toolbar-info-piece">
				<b>Transferir</b>
				<span class="sf-toolbar-status">Pesquisa</span>
				<span class="sf-toolbar-status">Downgrade</span>
			</div>

			<div class="sf-toolbar-info-piece">
				<b>Pausas do Colaborador</b>
				<span class="sf-toolbar-status">8</span>
				<span class="sf-toolbar-status">1</span>
				<span class="sf-toolbar-status">9</span>
				<span class="sf-toolbar-status">2</span>
			</div>
			<div class="sf-toolbar-info-piece">
				<b>Pausas Especiais</b>
				<span class="sf-toolbar-status">3</span>
				<span class="sf-toolbar-status">5</span>
				<span class="sf-toolbar-status">7</span>
				<span class="sf-toolbar-status">9</span>
			</div>
		</div>
    </div>
    </div>
</div>

    
                
    
                
                                    
    
    
    <div class="sf-toolbar-block sf-toolbar-block-config sf-toolbar-status-normal sf-toolbar-block-right">
         
	<div class="sf-toolbar-icon">                    
        <span class="sf-toolbar-value">0.0.51</span>
    </div>
           
	<div class="sf-toolbar-info" style="right: 0px;">        
	<div class="sf-toolbar-info-group">
		<div class="sf-toolbar-info-piece">
			<b>Profiler token</b>
			<span>
				<a target="_blank" href="/vsmonitor.php">80d3dd</a>
			</span>
		</div>

                            <div class="sf-toolbar-info-piece">
                    <b>Kernel name</b>
                    <span>app</span>
                </div>
            
                            <div class="sf-toolbar-info-piece">
                    <b>Environment</b>
                    <span>dev</span>
                </div>
            
                            <div class="sf-toolbar-info-piece">
                    <b>Debug</b>
                    <span class="sf-toolbar-status sf-toolbar-status-green">enabled</span>
                </div>
                    </div>

        <div class="sf-toolbar-info-group">
            <div class="sf-toolbar-info-piece sf-toolbar-info-php">
                <b>PHP version</b>
                <span>
                    5.5.12
                    &nbsp; <a href="/app_dev.php/_profiler/phpinfo">View phpinfo()</a>
                </span>
            </div>

            <div class="sf-toolbar-info-piece sf-toolbar-info-php-ext">
                <b>PHP Extensions</b>
                <span class="sf-toolbar-status sf-toolbar-status-green">xdebug</span>
                <span class="sf-toolbar-status sf-toolbar-status-red">accel</span>
            </div>

            <div class="sf-toolbar-info-piece">
                <b>PHP SAPI</b>
                <span>apache2handler</span>
            </div>
        </div>

        <div class="sf-toolbar-info-group">
                            <div class="sf-toolbar-info-piece">
                    <b>Resources</b>
                    <span>
                                                    <a href="https://symfony.com/doc/3.1.3/index.html" rel="help">
                                Read Symfony 3.1.3 Docs
                            </a>
                                            </span>
                </div>
                <div class="sf-toolbar-info-piece">
                    <b>Help</b>
                    <span>
                        <a href="http://symfony.com/support">
                            Symfony Support Channels
                        </a>
                    </span>
                </div>
                    </div>
    </div>
</div>


    
            <a class="hide-button" title="Close Toolbar" tabindex="-1" accesskey="D" onclick="
            var p = this.parentNode;
            p.style.display = 'none';
            (p.previousElementSibling || p.previousSibling).style.display = 'none';
            document.getElementById('sfMiniToolbar-80d3dd').style.display = 'block';
            Sfjs.setPreference('toolbar/displayState', 'none');
        ">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<path fill="#AAAAAA" d="M21.1,18.3c0.8,0.8,0.8,2,0,2.8c-0.4,0.4-0.9,0.6-1.4,0.6s-1-0.2-1.4-0.6L12,14.8l-6.3,6.3
    c-0.4,0.4-0.9,0.6-1.4,0.6s-1-0.2-1.4-0.6c-0.8-0.8-0.8-2,0-2.8L9.2,12L2.9,5.7c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2-0.8,2.8,0L12,9.2
    l6.3-6.3c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8L14.8,12L21.1,18.3z"></path>
</svg>

        </a>
    </div>
<!-- END of Symfony Web Debug Toolbar -->
</div>
`;

async function dbView() {
    const req = await fetch("http://localhost:8006/vsmApi.php", {
        "headers": {
            "accept": "*/*",
            "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Linux\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "http://localhost:8006/vsmDoc.php",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "param=dbInfo",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
    const res = await req.json()
    console.table(res)
    const html1 = res.map(rdb => {
        return `<button id="${rdb.table}" type="button" class="btn btn-block dark" onclick="tableInfo(this.id)" style="text-align:left;">${rdb.table} <span style="float:right;">${rdb.size}</span></button>`
    }).join("")
    document.querySelector("#roawbox > .content").innerHTML = `
    <div style="display:flex;">
        <div style="width:30%;display:inline-block;">${html1}</div>
        <div id="tableinfos" style="width:85%;display:inline-block;margin-left:5px;">
            Database Docs
        </div>
    </div>
    `
}

async function tableInfo(tableName) {
    const req = await fetch("http://localhost:8006/vsmApi.php", {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Linux\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "http://localhost:8006/vsmDoc.php?dump",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "param=tableInfo&tableInfo=" + tableName,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
    const res = await req.json()
    console.table(res)
    const html1 = `<pre class="roawblur">${res.showCreateTable}</pre>`;

    const html2 = res.fields.map(field => {
        return `<div class="roawblur" style="padding:5px;"><h3>${field['Field']}</h3> <textarea style="width:100%;height:100px;" class="roawblur"></textarea> </div>`
    }).join("")


    document.querySelector("#tableinfos").innerHTML = html1 + html2
}



function boxVarDump() {
    const varDumps = document.querySelectorAll(".var_dump");
    if (varDumps?.length > 0) {

        document.querySelector("#vardumpcount").innerHTML = varDumps.length
        document.querySelector("#roawbox > .content").innerHTML = [...document.querySelectorAll(".var_dump")].map(d => {
            return `<pre style="background-color:#999;padding:5px;border-radius:3px;">${d.innerHTML}</pre>`
        }).join("")
        document.querySelector(".sf-toolbar-block-vardump").classList.toggle("sf-toolbar-status-yellow")
        toggleRoawBox()
    }


}

//it works, but RoawFileMimeType(); ate roaw-functions is better
function fileBlob(selector, callback = null) {
    let file = document.querySelector(selector).files[0];
    var reader = new FileReader();

    reader.addEventListener("load", f => {
        console.log("load", f)
        if (callback) {
            const blob = new Blob([new Uint8Array(f.target.result)], { type: file.type }); //esse type falha, um arquivo tiff com extensão jpg, aparece como jpg
            console.log(blob);
            callback(blob)
        }
    })

    reader.onloadend = function () {
        // Recupera os primeiros bytes do arquivo (no máximo 4 bytes)
        var arr = (new Uint8Array(reader.result)).subarray(0, 4);
        var header = "";
        for (var i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
        }

        const types = {
            "ffd8ffe0": "image/jpg",
            "89504e47": "image/png",
            "47494638": "image/gif",
            "25504446": "application/pdf"
        }
        //"49492a0": "image/tiff",

        let output = types[header] || false;
        console.log("end", output, header);
        return output;
    };

    // reader.readAsText(file)
    reader.readAsArrayBuffer(file);
}
document.body.addEventListener("keydown", e => {
    if (e.key == "F12" && e.ctrlKey == true && e.altKey == false && e.shiftKey == false) {
        toggleRoawBox()
    }
    if (e.key == "F12" && e.ctrlKey == true && e.altKey == true && e.shiftKey == false) {
        logKeys(e)
    }
    if (e.key == "F12" && e.ctrlKey == true && e.altKey == true && e.shiftKey == true) {
        logKeys(e)
    }
    if (e.key == "F12" && e.ctrlKey == false && e.altKey == true && e.shiftKey == false) {
        logKeys(e)
    }
    if (e.key == "F12" && e.ctrlKey == false && e.altKey == false && e.shiftKey == true) {
        logKeys(e)
    }

})

document.body.addEventListener("dblclick", e => {
    const el = {
        "id": e.target.id,
        "name": e.target.name,
        "tagName": e.target.tagName,
        "type": e.target.type,
        "classList": e.target.className,
        "target": e.target
    }
    console.log(el)
    /* 
    na roawbox, ter um objetom com valores de teste
    ao dar duplo click em inoput, confere nanme, id, e insere dado de teste coprrespondente
    ctrl+dblclick preencher todos os inputs que casam (na verdade melhor que seja um botao dentro da roawbox)
    */

    //just mock data for some tests
    const dataTest = {
        "placa": "vsm0000",
        "cpf": "51136415025",
        "cnh": "04215445388",
        "renavam": "24048747090",
        "chassi": "6809GbABW82BR5905",
        "boleto": "00190500954014481606906809350314337370000000100",
        "nome": "Valdecir X Merli",
        "rg": "99999992"
    }

    const newvalue = dataTest[el.id] || dataTest[el.name]
    if (newvalue) {
        e.target.value = newvalue
    }

})

function logKeys(ev) {
    console.log({
        "key": ev.key,
        "ctrl": ev.ctrlKey,
        "alt": ev.altKey,
        "shift": ev.shiftKey
    })
}
function boxDadosTeste() {
    document.querySelector("#roawbox > .content").innerHTML = `
    <div>
    <style>
    .content > div > b {
        background-color:#000;
    }
    </style>
    <b>CNH:</b> 04215445388 (111)<br>
    <b>cpf:</b> 51136415025 / 511.364.150-25<br>
    <b>placa:</b> vsm0000 / vsm-0000<br>
    <b>renavam:</b> 24048747090<br>
    <b>chassi:</b> 6809GbABW82BR5905 / 680 9GbABW 82 BR5905 <br><br>

    <b>CNH:</b> 70739848370<br>
    <b>cpf:</b> 06274864016 / 062.748.640-16<br>
    <b>placa:</b> vsm0001 / vsm-0001<br>
    <b>renavam:</b> 72715202461<br>
    <b>chassi:</b> 7rh 6kKcx9 37 h73328 / 7rh6kKcx937h73328<br><br>

    <b>placa:</b> vsm0002 / vsm-0002<br>
    <b>renavam:</b> 63915925620<br>
    <b>chassi:</b> 7tp m54g34 VA 8Z1660 / 7tpm54g34VA8Z1660<br><br>

    <b>boleto:</b> 00190500954014481606906809350314337370000000100<br>
    </div>
    `
    //
}
function boxDocumentacoes() {
    const tabHost = window.location.host
    const tabPathName = window.location.pathname
    const documentacao = {
        "/MultaDetalhada.php": `
        <h2>Multa Detalhada</h2>
        <div>
        Esta é uma das principais telas do sistema. normalmente terá 3 abas internas e a indicação de condutor pode ser iniciada na aba "indicação condutor"
        </div>
        <div>
        <b>Como indicar um condutor?</b>
        <ul>
            <li>pesquisa > consulta > placa (ou auto), detalhes</li>
            <li>indicação condutor > imagem cnh e imagem termo</li>
            <li>depois tem que ir em operação > validar notificação pra poder aprovar a indicação ou rejeitar a indicação</li>
        </ul>
        <div>
        `,
        "/Dashboard.php": `A Dashboard etc etc`,
        "/Configuracoes_Cliente_Detalhes.php": `
        <h2>Cliente Config</h2>
        <div>
        <p>2023-03-29: Atualmente esta tela é usada apenas por funcionários da LW, mas no futuro será acessível aos clientes</p>
        <h4>Devs</h4>
        <p>no html do front existe uma table <mark> id = table_body_detalhes</mark>,cada TR corresponde a uma coluna da tabela cliente_config. Em algum lugar de cada TR haverá um input ou select, e este possui um ID, que deverá ter o exato mesmo nome da coluna no banco de dados, o javascript da pagina se encarregará de carregar e configurar o valor no input, e tambem de salvar mudanças através do onchange. Para casos simples, de campos texto ou checkbox só isso basta em relação ao html/front, porém se houver modal com outras opções dentro, precisa ser desenvolver por completo as ações de dentro d modal, tanto no front quanto no back</p>
        <p>Adicionamente, se precisar usar modal, existe uma classe que ajuda com isso:</p>
        <pre>
            <code>
            const minhaModal = new ModalPortal({
                id: "ocultarImagensModal", //id do elemento principal da modal
                title: "Ocultar Imagens",
                show: true, //inicia ja mostrando em tela
                content: ""
            })
            </code>
        </pre>
        <p>Passos para criar um recurso simples (input, sem modal) nesta tela:</p>
        <ul>
            <li> <b style="color:#5697ff">Configuracoes_Cliente_Detalhes.php</b> > adicionar a TR com o input no frontend </li>
            <li> <b style="color:#5697ff">Class/ClienteConfig.php</b> > adicionar o nome do novo campo no array </li>
            <li> <b style="color:#5697ff">Class/Cliente/ClientesRepository.php</b> > adicionar novo campo na query </li>
        </ul>
        </div>
        `
    }
    let html = `
    <div style="height:80px;">
        <div style="display:inline-block; width:30%;">
            <div class="dark"><small>[ Host ] </small> &nbsp;&nbsp;&nbsp; <strong>${tabHost}</strong> </div>
            <div class="dark"><small>[ Path ] </small> &nbsp;&nbsp;&nbsp; <strong>${tabPathName}</strong> </div>
        </div>
        
        <div style="display:inline-block;float:right;">
        

            <button type="button" class="btn btn-default btn-xl roawblur">
                <i class="fa fa-3x fa-info"></i> <br> FrontEnd
            </button>

            <button type="button" class="btn btn-default btn-xl roawblur">
                <i class="fa fa-3x fa-info"></i> <br> BackEnd
            </button>

            <button type="button" class="btn btn-default btn-xl roawblur" onlick="boxEventListeners()">
                <i class="fa fa-3x fa-info"></i> <br> EventListeners
            </button>


            <button type="button" class="btn btn-default btn-xl roawblur" onclick="dbView()">
                <i class="fa fa-3x fa-database"></i> <br> Database
            </button>

            <button type="button" class="btn btn-default btn-xl roawblur" onclick="telas()">
                <i class="fa fa-3x fa-desktop"></i> <br> Funcionalidades
            </button>

            <button type="button" class="btn btn-default btn-xl roawblur" onclick="nadaAinda()">
                <i class="fa fa-3x fa-file-code-o"></i> <br> Classes
            </button>

            <button type="button" class="btn btn-default btn-xl roawblur" onclick="nadaAinda()">
                <i class="fa fa-3x fa-cubes"></i> <br> Microsserviços
            </button>

            <button type="button" class="btn btn-default btn-xl roawblur" onclick="nadaAinda()">
                <i class="fa fa-3x fa-clock-o"></i> <br> Cron Jobs
            </button>

            <button type="button" class="btn btn-default btn-xl roawblur" onclick="nadaAinda()">
                <i class="fa fa-3x fa-sitemap"></i> <br> Infra
            </button>

            <button type="button" class="btn btn-default btn-xl roawblur" onclick="nadaAinda()">
                <i class="fa fa-3x fa-sitemap"></i> <br> APM Labels
            </button>
            
        </div>
    </div>
    
    <div>Dicas sobre essa tela:</div><hr>
    <div>${documentacao[tabPathName]}</div>
    `

    document.querySelector("#roawbox > .content").innerHTML = html
}
function boxMenuFind() {
    menuFind(document.querySelector("#roawselector").value, "#roawbox > .content")
}

async function boxEventListeners(showlog = null) {

    const jqueryEvents = getEventHandlers(document);//jquery events

    const allEvents = [...document.querySelectorAll("*")].filter(e => { return e.onclick || e.onchange || e.onsubmit || e.onkeyup || e.onkeydown }).map(e => {
        let events = {};
        if (e?.onclick) events.onclick = e?.onclick?.toString();
        if (e?.onchange) events.onchange = e?.onchange?.toString();
        if (e?.onsubmit) events.onsubmit = e?.onsubmit?.toString();
        if (e?.onkeyup) events.onkeyup = e?.onkeyup?.toString();
        if (e?.onkeydown) events.onkeydown = e?.onkeydown?.toString();

        return {
            element: e,
            events
        }
    })
    if (showlog) {
        allEvents.forEach(e => {
            // console.warn(e.element)
            console.log({
                "element": e.element,
                "event": e.events
            })
        })
    }

    //console.warn(allEvents);
    console.warn("este outro funciona melhor, mas roda apenas no console: ", "await fullEventListeners()")

    console.log("jquery events", jqueryEvents)
    console.log("inline events", allEvents)


}


async function fullEventListeners() {
    const allevents = await getEvents("#page-wrapper", async function (eventArray) {
        var html = eventArray.map(i => {
            console.log(i)
            return `<div>
                <span style="background:#000;">${i.element.outerHTML}
                <span style="background:#000;">${i.type}
            </div>`
        }).join("")
        document.querySelector("#roawbox > .content").innerHTML = html
    })
    console.warn(allevents)

}

function showRoawBox() {
    document.querySelector("#roawbox").style.left = "5%"
    document.querySelector("#roawbox").style.width = "100%"
    //document.querySelector("#dumperDeguggerBG").style.opacity="0.7"
}
function hideRoawBox() {
    document.querySelector("#roawbox").style.left = "-200%"
    document.querySelector("#roawbox").style.width = "0%"
    //document.querySelector("#dumperDeguggerBG").style.opacity="0"
}

function toggleRoawBox() {
    let roawBox = document.querySelector("#roawbox");
    if (roawBox.classList.contains("roawboxhidden")) {
        roawBox.classList.remove("roawboxhidden")
    } else {
        roawBox.classList.add("roawboxhidden")
    }
    const visibility = {
        "none": "block",
        "block": "none",
    }
    //document.querySelector("#roawbox").style.display=visibility[roawBox.style.display];
}
function toggleWrapperBorders() {
    document.querySelector("#page-wrapper")?.classList.toggle("wrapperborders")
}
function toggleBodyBorders() {
    document.querySelector("body")?.classList.toggle("wrapperborders")
}

document.body.insertAdjacentHTML("beforeend", roawBox);
document.body.insertAdjacentHTML("beforeend", fullHTML);
boxVarDump()


if (displayState == 'none') {
    document.getElementById('sfToolbarMainContent-80d3dd').style.display = 'none';
    document.getElementById('sfToolbarClearer-80d3dd').style.display = 'none';
    document.getElementById('sfMiniToolbar-80d3dd').style.display = 'block';
} else {
    document.getElementById('sfToolbarMainContent-80d3dd').style.display = 'block';
    document.getElementById('sfToolbarClearer-80d3dd').style.display = 'block';
    document.getElementById('sfMiniToolbar-80d3dd').style.display = 'none';
}

/*<![CDATA[*/
Sfjs = (function () {

    "use strict";
    var classListIsSupported = 'classList' in document.documentElement;
    if (classListIsSupported) {
        var hasClass = function (el, cssClass) {
            return el.classList.contains(cssClass);
        };
        var removeClass = function (el, cssClass) {
            el.classList.remove(cssClass);
        };
        var addClass = function (el, cssClass) {
            el.classList.add(cssClass);
        };
        var toggleClass = function (el, cssClass) {
            el.classList.toggle(cssClass);
        };
    } else {
        var hasClass = function (el, cssClass) {
            return el.className.match(new RegExp('\\b' + cssClass + '\\b'));
        };
        var removeClass = function (el, cssClass) {
            el.className = el.className.replace(new RegExp('\\b' + cssClass + '\\b'), ' ');
        };
        var addClass = function (el, cssClass) {
            if (!hasClass(el, cssClass)) {
                el.className += " " + cssClass;
            }
        };
        var toggleClass = function (el, cssClass) {
            hasClass(el, cssClass) ? removeClass(el, cssClass) : addClass(el, cssClass);
        };
    }
    var noop = function () { },
        collectionToArray = function (collection) {
            var length = collection.length || 0,
                results = new Array(length);
            while (length--) {
                results[length] = collection[length];
            }
            return results;
        },
        profilerStorageKey = 'sf2/profiler/',
        request = function (url, onSuccess, onError, payload, options) {
            var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            options = options || {};
            options.maxTries = options.maxTries || 0;
            xhr.open(options.method || 'GET', url, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.onreadystatechange = function (state) {
                if (4 !== xhr.readyState) {
                    return null;
                }
                if (xhr.status == 404 && options.maxTries > 1) {
                    setTimeout(function () {
                        options.maxTries--;
                        request(url, onSuccess, onError, payload, options);
                    }, 500);
                    return null;
                }
                if (200 === xhr.status) {
                    (onSuccess || noop)(xhr);
                } else {
                    (onError || noop)(xhr);
                }
            };
            xhr.send(payload || '');
        },
        getPreference = function (name) {
            if (!window.localStorage) {
                return null;
            }
            return localStorage.getItem(profilerStorageKey + name);
        },
        setPreference = function (name, value) {
            if (!window.localStorage) {
                return null;
            }
            localStorage.setItem(profilerStorageKey + name, value);
        },
        requestStack = [],
        extractHeaders = function (xhr, stackElement) { /* Here we avoid to call xhr.getResponseHeader in order to */ /* prevent polluting the console with CORS security errors */
            var allHeaders = xhr.getAllResponseHeaders();
            var ret;
            if (ret = allHeaders.match(/^x-debug-token:\s+(.*)$/im)) {
                stackElement.profile = ret[1];
            }
            if (ret = allHeaders.match(/^x-debug-token-link:\s+(.*)$/im)) {
                stackElement.profilerUrl = ret[1];
            }
        },
        renderAjaxRequests = function () {
            var requestCounter = document.querySelectorAll('.sf-toolbar-ajax-requests');
            if (!requestCounter.length) {
                return;
            }
            var ajaxToolbarPanel = document.querySelector('.sf-toolbar-block-ajax');
            var tbodies = document.querySelectorAll('.sf-toolbar-ajax-request-list');
            var state = 'ok';
            if (tbodies.length) {
                var tbody = tbodies[0];
                var rows = document.createDocumentFragment();
                if (requestStack.length) {
                    for (var i = 0; i < requestStack.length; i++) {
                        var request = requestStack[i];
                        var row = document.createElement('tr');
                        rows.insertBefore(row, rows.firstChild);
                        var methodCell = document.createElement('td');
                        if (request.error) {
                            methodCell.className = 'sf-ajax-request-error';
                        }
                        methodCell.textContent = request.method;
                        row.appendChild(methodCell);
                        var statusCodeCell = document.createElement('td');
                        var statusCode = document.createElement('span');
                        if (request.statusCode < 300) {
                            statusCode.setAttribute('class', 'sf-toolbar-status');
                        } else if (request.statusCode < 400) {
                            statusCode.setAttribute('class', 'sf-toolbar-status sf-toolbar-status-yellow');
                        } else {
                            statusCode.setAttribute('class', 'sf-toolbar-status sf-toolbar-status-red');
                        }
                        statusCode.textContent = request.statusCode || '-';
                        statusCodeCell.appendChild(statusCode);
                        row.appendChild(statusCodeCell);
                        var pathCell = document.createElement('td');
                        pathCell.className = 'sf-ajax-request-url';
                        if ('GET' === request.method) {
                            var pathLink = document.createElement('a');
                            pathLink.setAttribute('href', request.url);
                            pathLink.textContent = request.url;
                            pathCell.appendChild(pathLink);
                        } else {
                            pathCell.textContent = request.url;
                        }
                        pathCell.setAttribute('title', request.url);
                        row.appendChild(pathCell);
                        var durationCell = document.createElement('td');
                        durationCell.className = 'sf-ajax-request-duration';
                        if (request.duration) {
                            durationCell.textContent = request.duration + "ms";
                        } else {
                            durationCell.textContent = '-';
                        }
                        row.appendChild(durationCell);
                        row.appendChild(document.createTextNode(' '));
                        var profilerCell = document.createElement('td');
                        if (request.profilerUrl) {
                            var profilerLink = document.createElement('a');
                            profilerLink.setAttribute('href', request.profilerUrl);
                            profilerLink.textContent = request.profile;
                            profilerCell.appendChild(profilerLink);
                        } else {
                            profilerCell.textContent = 'n/a';
                        }
                        row.appendChild(profilerCell);
                        var requestState = 'ok';
                        if (request.error) {
                            requestState = 'error';
                            if (state != "loading" && i > requestStack.length - 4) {
                                state = 'error';
                            }
                        } else if (request.loading) {
                            requestState = 'loading';
                            state = 'loading';
                        }
                        row.className = 'sf-ajax-request sf-ajax-request-' + requestState;
                    }
                    var infoSpan = document.querySelectorAll(".sf-toolbar-ajax-info")[0];
                    var children = collectionToArray(tbody.children);
                    for (var i = 0; i < children.length; i++) {
                        tbody.removeChild(children[i]);
                    }
                    tbody.appendChild(rows);
                    if (infoSpan) {
                        var text = requestStack.length + ' AJAX request' + (requestStack.length > 1 ? 's' : '');
                        infoSpan.textContent = text;
                    }
                    ajaxToolbarPanel.style.display = 'block';
                } else {
                    ajaxToolbarPanel.style.display = 'none';
                }
            }
            requestCounter[0].textContent = requestStack.length;
            var className = 'sf-toolbar-ajax-requests sf-toolbar-value';
            requestCounter[0].className = className;
            if (state == 'ok') {
                Sfjs.removeClass(ajaxToolbarPanel, 'sf-ajax-request-loading');
                Sfjs.removeClass(ajaxToolbarPanel, 'sf-toolbar-status-red');
            } else if (state == 'error') {
                Sfjs.addClass(ajaxToolbarPanel, 'sf-toolbar-status-red');
                Sfjs.removeClass(ajaxToolbarPanel, 'sf-ajax-request-loading');
            } else {
                Sfjs.addClass(ajaxToolbarPanel, 'sf-ajax-request-loading');
            }
        };
    var addEventListener;
    var el = document.createElement('div');
    if (!('addEventListener' in el)) {
        addEventListener = function (element, eventName, callback) {
            element.attachEvent('on' + eventName, callback);
        };
    } else {
        addEventListener = function (element, eventName, callback) {
            element.addEventListener(eventName, callback, false);
        };
    }
    if (window.XMLHttpRequest && XMLHttpRequest.prototype.addEventListener) {
        var proxied = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
            var self = this; /* prevent logging AJAX calls to static and inline files, like templates */
            var path = url;
            if (url.substr(0, 1) === '/') {
                if (0 === url.indexOf('')) {
                    path = url.substr(0);
                }
            } else if (0 === url.indexOf('http\x3A\x2F\x2Falugue\x2Dcarros')) {
                path = url.substr(20);
            }
            if (!path.match(new RegExp("^\/(app(_[\\w]+)?\\.php\/)?_wdt"))) {
                var stackElement = {
                    loading: true,
                    error: false,
                    url: url,
                    method: method,
                    start: new Date()
                };
                requestStack.push(stackElement);
                this.addEventListener('readystatechange', function () {
                    if (self.readyState == 4) {
                        stackElement.duration = new Date() - stackElement.start;
                        stackElement.loading = false;
                        stackElement.error = self.status < 200 || self.status >= 400;
                        stackElement.statusCode = self.status;
                        extractHeaders(self, stackElement);
                        Sfjs.renderAjaxRequests();
                    }
                }, false);
                Sfjs.renderAjaxRequests();
            }
            proxied.apply(this, Array.prototype.slice.call(arguments));
        };
    }
    return {
        hasClass: hasClass,
        removeClass: removeClass,
        addClass: addClass,
        toggleClass: toggleClass,
        getPreference: getPreference,
        setPreference: setPreference,
        addEventListener: addEventListener,
        request: request,
        renderAjaxRequests: renderAjaxRequests,
        load: function (selector, url, onSuccess, onError, options) {
            var el = document.getElementById(selector);
            if (el && el.getAttribute('data-sfurl') !== url) {
                request(url, function (xhr) {
                    el.innerHTML = xhr.responseText;
                    el.setAttribute('data-sfurl', url);
                    removeClass(el, 'loading');
                    (onSuccess || noop)(xhr, el);
                }, function (xhr) {
                    (onError || noop)(xhr, el);
                }, '', options);
            }
            return this;
        },
        toggle: function (selector, elOn, elOff) {
            var tmp = elOn.style.display,
                el = document.getElementById(selector);
            elOn.style.display = elOff.style.display;
            elOff.style.display = tmp;
            if (el) {
                el.style.display = 'none' === tmp ? 'none' : 'block';
            }
            return this;
        },
        createTabs: function () {
            var tabGroups = document.querySelectorAll('.sf-tabs'); /* create the tab navigation for each group of tabs */
            for (var i = 0; i < tabGroups.length; i++) {
                var tabs = tabGroups[i].querySelectorAll('.tab');
                var tabNavigation = document.createElement('ul');
                tabNavigation.className = 'tab-navigation';
                for (var j = 0; j < tabs.length; j++) {
                    var tabId = 'tab-' + i + '-' + j;
                    var tabTitle = tabs[j].querySelector('.tab-title').innerHTML;
                    var tabNavigationItem = document.createElement('li');
                    tabNavigationItem.setAttribute('data-tab-id', tabId);
                    if (j == 0) {
                        Sfjs.addClass(tabNavigationItem, 'active');
                    }
                    if (Sfjs.hasClass(tabs[j], 'disabled')) {
                        Sfjs.addClass(tabNavigationItem, 'disabled');
                    }
                    tabNavigationItem.innerHTML = tabTitle;
                    tabNavigation.appendChild(tabNavigationItem);
                    var tabContent = tabs[j].querySelector('.tab-content');
                    tabContent.parentElement.setAttribute('id', tabId);
                }
                tabGroups[i].insertBefore(tabNavigation, tabGroups[i].firstChild);
            } /* display the active tab and add the 'click' event listeners */
            for (i = 0; i < tabGroups.length; i++) {
                tabNavigation = tabGroups[i].querySelectorAll('.tab-navigation li');
                for (j = 0; j < tabNavigation.length; j++) {
                    tabId = tabNavigation[j].getAttribute('data-tab-id');
                    document.getElementById(tabId).querySelector('.tab-title').className = 'hidden';
                    if (Sfjs.hasClass(tabNavigation[j], 'active')) {
                        document.getElementById(tabId).className = 'block';
                    } else {
                        document.getElementById(tabId).className = 'hidden';
                    }
                    tabNavigation[j].addEventListener('click', function (e) {
                        var activeTab = e.target || e.srcElement; /* needed because when the tab contains HTML contents, user can click */ /* on any of those elements instead of their parent '<li>' element */
                        while (activeTab.tagName.toLowerCase() !== 'li') {
                            activeTab = activeTab.parentNode;
                        } /* get the full list of tabs through the parent of the active tab element */
                        var tabNavigation = activeTab.parentNode.children;
                        for (var k = 0; k < tabNavigation.length; k++) {
                            var tabId = tabNavigation[k].getAttribute('data-tab-id');
                            document.getElementById(tabId).className = 'hidden';
                            Sfjs.removeClass(tabNavigation[k], 'active');
                        }
                        Sfjs.addClass(activeTab, 'active');
                        var activeTabId = activeTab.getAttribute('data-tab-id');
                        document.getElementById(activeTabId).className = 'block';
                    });
                }
            }
        },
        createToggles: function () {
            var toggles = document.querySelectorAll('.sf-toggle');
            for (var i = 0; i < toggles.length; i++) {
                var elementSelector = toggles[i].getAttribute('data-toggle-selector');
                var element = document.querySelector(elementSelector);
                Sfjs.addClass(element, 'sf-toggle-content');
                if (toggles[i].hasAttribute('data-toggle-initial') && toggles[i].getAttribute('data-toggle-initial') == 'display') {
                    Sfjs.addClass(element, 'sf-toggle-visible');
                } else {
                    Sfjs.addClass(element, 'sf-toggle-hidden');
                }
                Sfjs.addEventListener(toggles[i], 'click', function (e) {
                    e.preventDefault();
                    var toggle = e.target || e.srcElement; /* needed because when the toggle contains HTML contents, user can click */ /* on any of those elements instead of their parent '.sf-toggle' element */
                    while (!Sfjs.hasClass(toggle, 'sf-toggle')) {
                        toggle = toggle.parentNode;
                    }
                    var element = document.querySelector(toggle.getAttribute('data-toggle-selector'));
                    Sfjs.toggleClass(element, 'sf-toggle-hidden');
                    Sfjs.toggleClass(element, 'sf-toggle-visible'); /* the toggle doesn't change its contents when clicking on it */
                    if (!toggle.hasAttribute('data-toggle-alt-content')) {
                        return;
                    }
                    if (!toggle.hasAttribute('data-toggle-original-content')) {
                        toggle.setAttribute('data-toggle-original-content', toggle.innerHTML);
                    }
                    var currentContent = toggle.innerHTML;
                    var originalContent = toggle.getAttribute('data-toggle-original-content');
                    var altContent = toggle.getAttribute('data-toggle-alt-content');
                    toggle.innerHTML = currentContent !== altContent ? altContent : originalContent;
                });
            }
        }
    };
})();
Sfjs.addEventListener(window, 'load', function () {
    Sfjs.createTabs();
    Sfjs.createToggles();
}); /*]]>*/



// =================================================================



/*<![CDATA[*/
(function () {
    Sfjs.load('sfwdt80d3dd', '/app_dev.php/_wdt/80d3dd', function (xhr, el) {
        el.style.display = -1 !== xhr.responseText.indexOf('sf-toolbarreset') ? 'block' : 'none';
        if (el.style.display == 'none') {
            return;
        }
        if (Sfjs.getPreference('toolbar/displayState') == 'none') {
            document.getElementById('sfToolbarMainContent-80d3dd').style.display = 'none';
            document.getElementById('sfToolbarClearer-80d3dd').style.display = 'none';
            document.getElementById('sfMiniToolbar-80d3dd').style.display = 'block';
        } else {
            document.getElementById('sfToolbarMainContent-80d3dd').style.display = 'block';
            document.getElementById('sfToolbarClearer-80d3dd').style.display = 'block';
            document.getElementById('sfMiniToolbar-80d3dd').style.display = 'none';
        }
        Sfjs.renderAjaxRequests(); /* Handle toolbar-info position */
        var toolbarBlocks = document.querySelectorAll('.sf-toolbar-block');
        for (var i = 0; i < toolbarBlocks.length; i += 1) {
            toolbarBlocks[i].onmouseover = function () {
                var toolbarInfo = this.querySelectorAll('.sf-toolbar-info')[0];
                var pageWidth = document.body.clientWidth;
                var elementWidth = toolbarInfo.offsetWidth;
                var leftValue = (elementWidth + this.offsetLeft) - pageWidth;
                var rightValue = (elementWidth + (pageWidth - this.offsetLeft)) - pageWidth; /* Reset right and left value, useful on window resize */
                toolbarInfo.style.right = '';
                toolbarInfo.style.left = '';
                if (elementWidth > pageWidth) {
                    toolbarInfo.style.left = 0;
                } else if (leftValue > 0 && rightValue > 0) {
                    toolbarInfo.style.right = (rightValue * -1) + 'px';
                } else if (leftValue < 0) {
                    toolbarInfo.style.left = 0;
                } else {
                    toolbarInfo.style.right = '0px';
                }
            };
        }
    }, function (xhr) {
        if (xhr.status !== 0) {
            confirm('An error occurred while loading the web debug toolbar (' + xhr.status + ': ' + xhr.statusText + ').\n\nDo you want to open the profiler?') && (window.location = '/app_dev.php/_profiler/80d3dd');
        }
    }, {
        'maxTries': 5
    });
})(); /*]]>*/



async function logar() {

    const formdata = new FormData();
    formdata.append("xhr", true)
    formdata.append("email", "etc@lwtecnologia.com.br")
    formdata.append("senha", "etc*****")

    const response = await fetch("http://localhost:8006/segurancaValida.php", {
        "method": "post",
        "body": formdata
    })

    if (!response.ok) {
        throw new Error(`Erro ${response.status}`);
        return
    }
    const dataText = await response.text()
    console.log("dataText", dataText);

    // const dataJson = await response.json()
    // console.log("dataJson", dataJson);

    return dataText

}

async function usuarioClienteDetalhes() {

    const baseUrl = document.location.origin;


    const response = await fetch(baseUrl + "/usuarioClienteDetalhes.php", {
        "method": "get"
    })

    if (!response.ok) {
        throw new Error(`Erro ${response.status}`);
    }

    const dataJson = await response.json()

    if (!dataJson.cliente) {
        dataJson.cliente = "Deslogado";
    }

    document.getElementById("roaw_a1").innerText = dataJson.cliente
    document.getElementById("roaw_a2").innerText = dataJson.usuario.id
    document.getElementById("roaw_a3").innerText = dataJson.usuario.nome



    var arrayObj = Object.entries(dataJson.usuario)
    let aDescHTML = arrayObj.map(e => {
        // console.log(e[0], e[1])
        const label = e[0]
        const info = Array.isArray(e[1]) ? e[1].toString() : e[1]
        return `
        <div class="sf-toolbar-info-piece">
        <b>${label}</b>
        <span>${info}</span>
        </div>
        `
    }).join("")
    const aDesc = document.querySelector(".sf-toolbar-info-group")

    aDesc.innerHTML = aDescHTML


}
usuarioClienteDetalhes()

function showHiddenInputs(showConsole) {
    const inputs = [];
    let hiddenDetected = false;
    document.querySelectorAll("input").forEach(i => {
        inputs.push(i)
        if (i.type == "hidden" && i?.id != "vsmid") {
            hiddenDetected = true;
            if (showConsole) { console.log(i) }
        }
    });


    const mappedInputs = inputs.map(function (mi) {
        let id = null, name = null, value = null;
        type = (mi?.type == 'hidden') ? `<b style="color:#f00" title="Type"> ${mi?.type} </b>` : `<b style="color:white" title="Type"> ${mi?.type} </b>`
        id = (mi?.id) ? `<b style="color:#0d0"  title="ID"> ${mi?.id} </b>` : ""
        name = (mi?.name) ? `<b style="color:#090" title="Name"> ${mi?.name} </b>` : ""
        value = (mi?.value) ? `<b style="color:orange;background-color:#000;"  title="Value"> ${mi?.value} </b>` : ''

        return `<div>${type}, ${id},  ${name}, ${value}</div>`
    }).join("")

    if (hiddenDetected) {
        document.querySelector("#hiddenInputs").parentElement.classList.remove("sf-toolbar-status-normal")
        document.querySelector("#hiddenInputs").parentElement.classList.add("sf-toolbar-status-yellow")
    }
    document.querySelector("#hiddenCounter").innerHTML = `<b style="color:orange">${inputs.length}</b>`;
    document.querySelector("#hiddenInputs").innerHTML = mappedInputs;

}
setInterval(function () {
    showHiddenInputs()
}, 1000)

function benchmarkModule() {

    var benchmarkModule = `
<div class="sf-toolbar-block sf-toolbar-block-twig sf-toolbar-status-normal ">
          
   <div class="sf-toolbar-icon">      
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<path fill="#aaaaaa" d="M54.621,8.908c-1.974,0-3.575,1.602-3.575,3.578c0,1.976,1.602,3.578,3.575,3.578c18.493,0,33.54,15.047,33.54,33.543  c0,18.495-15.047,33.542-33.54,33.542c-16.971,0-31.03-12.676-33.23-29.056l2.504,2.505c0.699,0.699,1.614,1.047,2.53,1.047  c0.916,0,1.831-0.348,2.53-1.047c1.397-1.398,1.397-3.663,0-5.061l-8.922-8.922c-1.397-1.397-3.663-1.397-5.06,0l-8.922,8.922  c-1.397,1.397-1.397,3.662,0,5.061c1.397,1.396,3.663,1.396,5.061,0l3.012-3.012c2.007,20.579,19.403,36.719,40.498,36.719  c22.439,0,40.697-18.258,40.697-40.698C95.318,27.166,77.061,8.908,54.621,8.908z"></path>
<path fill="#aaaaaa" d="M41.141,69.414c-0.971,0-1.941-0.369-2.682-1.11c-1.481-1.481-1.482-3.883-0.001-5.364l11.856-11.86V27.108  c0-2.095,1.698-3.793,3.791-3.793c2.094,0,3.79,1.698,3.79,3.793v25.541c0,1.006-0.398,1.97-1.109,2.682L43.823,68.303  C43.083,69.043,42.112,69.414,41.141,69.414z"></path>
<path fill="#aaaaaa" d="M81.644,51.94h-3.926c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5h3.926c1.381,0,2.5,1.119,2.5,2.5  S83.024,51.94,81.644,51.94z"></path>
<path fill="#aaaaaa" d="M72.316,71.539c-0.64,0-1.279-0.244-1.768-0.732l-2.776-2.776c-0.977-0.977-0.977-2.559,0-3.535s2.559-0.977,3.535,0  l2.776,2.776c0.977,0.977,0.977,2.559,0,3.535C73.596,71.295,72.956,71.539,72.316,71.539z"></path>
<path fill="#aaaaaa" d="M52.719,79.657c-1.381,0-2.5-1.119-2.5-2.5V73.23c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5v3.927  C55.219,78.538,54.1,79.657,52.719,79.657z"></path>
<path fill="#aaaaaa" d="M69.541,35.117c-0.64,0-1.279-0.244-1.768-0.732c-0.977-0.977-0.977-2.559,0-3.536l2.775-2.776  c0.975-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.559,0,3.536l-2.775,2.776C70.821,34.873,70.181,35.117,69.541,35.117z"></path></svg>	


       <span id="tmaclock" class="sf-toolbar-value">00:00:00</span>

       <span class="sf-toolbar-label"> </span>
   </div>
   <div class="sf-toolbar-info" style="left: 0px;">        
       <div class="sf-toolbar-info-piece">
           <b>Render Time</b>
           <span>12 ms</span>
       </div>
       <div class="sf-toolbar-info-piece">
           <b>Template Calls</b>
           <span class="sf-toolbar-status">4</span>
       </div>
       <div class="sf-toolbar-info-piece">
           <b>Block Calls</b>
           <span class="sf-toolbar-status">4</span>
       </div>
       <div class="sf-toolbar-info-piece">
           <b>Macro Calls</b>
           <span class="sf-toolbar-status">0</span>
       </div>
   </div>
</div>
`
    document.querySelector("#sfToolbarMainContent-80d3dd").insertAdjacentHTML("beforeend", benchmarkModule)
}





window.icones = `<div class="row">
                                <div class="fa col-lg-3">
                                    <p class="fa fa-glass"> fa-glass </p>
                                    <br>
                                    <p class="fa fa-music"> fa-music </p>
                                    <br>
                                    <p class="fa fa-search"> fa-search </p>
                                    <br>
                                    <p class="fa fa-envelope-o"> fa-envelope-o </p>
                                    <br>
                                    <p class="fa fa-heart"> fa-heart </p>
                                    <br>
                                    <p class="fa fa-star"> fa-star </p>
                                    <br>
                                    <p class="fa fa-star-o"> fa-star-o </p>
                                    <br>
                                    <p class="fa fa-user"> fa-user </p>
                                    <br>
                                    <p class="fa fa-film"> fa-film </p>
                                    <br>
                                    <p class="fa fa-th-large"> fa-th-large </p>
                                    <br>
                                    <p class="fa fa-th"> fa-th </p>
                                    <br>
                                    <p class="fa fa-th-list"> fa-th-list </p>
                                    <br>
                                    <p class="fa fa-check"> fa-check </p>
                                    <br>
                                    <p class="fa fa-times"> fa-times </p>
                                    <br>
                                    <p class="fa fa-search-plus"> fa-search-plus </p>
                                    <br>
                                    <p class="fa fa-search-minus"> fa-search-minus </p>
                                    <br>
                                    <p class="fa fa-power-off"> fa-power-off </p>
                                    <br>
                                    <p class="fa fa-signal"> fa-signal </p>
                                    <br>
                                    <p class="fa fa-gear"> fa-gear </p>
                                    <br>
                                    <p class="fa fa-cog"> fa-cog </p>
                                    <br>
                                    <p class="fa fa-trash-o"> fa-trash-o </p>
                                    <br>
                                    <p class="fa fa-home"> fa-home </p>
                                    <br>
                                    <p class="fa fa-file-o"> fa-file-o </p>
                                    <br>
                                    <p class="fa fa-clock-o"> fa-clock-o </p>
                                    <br>
                                    <p class="fa fa-road"> fa-road </p>
                                    <br>
                                    <p class="fa fa-download"> fa-download </p>
                                    <br>
                                    <p class="fa fa-arrow-circle-o-down"> fa-arrow-circle-o-down </p>
                                    <br>
                                    <p class="fa fa-arrow-circle-o-up"> fa-arrow-circle-o-up </p>
                                    <br>
                                    <p class="fa fa-inbox"> fa-inbox </p>
                                    <br>
                                    <p class="fa fa-play-circle-o"> fa-play-circle-o </p>
                                    <br>
                                    <p class="fa fa-rotate-right"> fa-rotate-right </p>
                                    <br>
                                    <p class="fa fa-repeat"> fa-repeat </p>
                                    <br>
                                    <p class="fa fa-refresh"> fa-refresh </p>
                                    <br>
                                    <p class="fa fa-list-alt"> fa-list-alt </p>
                                    <br>
                                    <p class="fa fa-lock"> fa-lock </p>
                                    <br>
                                    <p class="fa fa-flag"> fa-flag </p>
                                    <br>
                                    <p class="fa fa-headphones"> fa-headphones </p>
                                    <br>
                                    <p class="fa fa-volume-off"> fa-volume-off </p>
                                    <br>
                                    <p class="fa fa-volume-down"> fa-volume-down </p>
                                    <br>
                                    <p class="fa fa-volume-up"> fa-volume-up </p>
                                    <br>
                                    <p class="fa fa-qrcode"> fa-qrcode </p>
                                    <br>
                                    <p class="fa fa-barcode"> fa-barcode </p>
                                    <br>
                                    <p class="fa fa-tag"> fa-tag </p>
                                    <br>
                                    <p class="fa fa-tags"> fa-tags </p>
                                    <br>
                                    <p class="fa fa-book"> fa-book </p>
                                    <br>
                                    <p class="fa fa-bookmark"> fa-bookmark </p>
                                    <br>
                                    <p class="fa fa-print"> fa-print </p>
                                    <br>
                                    <p class="fa fa-camera"> fa-camera </p>
                                    <br>
                                    <p class="fa fa-font"> fa-font </p>
                                    <br>
                                    <p class="fa fa-bold"> fa-bold </p>
                                    <br>
                                    <p class="fa fa-italic"> fa-italic </p>
                                    <br>
                                    <p class="fa fa-text-height"> fa-text-height </p>
                                    <br>
                                    <p class="fa fa-text-width"> fa-text-width </p>
                                    <br>
                                    <p class="fa fa-align-left"> fa-align-left </p>
                                    <br>
                                    <p class="fa fa-align-center"> fa-align-center </p>
                                    <br>
                                    <p class="fa fa-align-right"> fa-align-right </p>
                                    <br>
                                    <p class="fa fa-align-justify"> fa-align-justify </p>
                                    <br>
                                    <p class="fa fa-list"> fa-list </p>
                                    <br>
                                    <p class="fa fa-dedent"> fa-dedent </p>
                                    <br>
                                    <p class="fa fa-outdent"> fa-outdent </p>
                                    <br>
                                    <p class="fa fa-indent"> fa-indent </p>
                                    <br>
                                    <p class="fa fa-video-camera"> fa-video-camera </p>
                                    <br>
                                    <p class="fa fa-photo"> fa-photo </p>
                                    <br>
                                    <p class="fa fa-image"> fa-image </p>
                                    <br>
                                    <p class="fa fa-picture-o"> fa-picture-o </p>
                                    <br>
                                    <p class="fa fa-pencil"> fa-pencil </p>
                                    <br>
                                    <p class="fa fa-map-marker"> fa-map-marker </p>
                                    <br>
                                    <p class="fa fa-adjust"> fa-adjust </p>
                                    <br>
                                    <p class="fa fa-tint"> fa-tint </p>
                                    <br>
                                    <p class="fa fa-edit"> fa-edit </p>
                                    <br>
                                    <p class="fa fa-pencil-square-o"> fa-pencil-square-o </p>
                                    <br>
                                    <p class="fa fa-share-square-o"> fa-share-square-o </p>
                                    <br>
                                    <p class="fa fa-check-square-o"> fa-check-square-o </p>
                                    <br>
                                    <p class="fa fa-arrows"> fa-arrows </p>
                                    <br>
                                    <p class="fa fa-step-backward"> fa-step-backward </p>
                                    <br>
                                    <p class="fa fa-fast-backward"> fa-fast-backward </p>
                                    <br>
                                    <p class="fa fa-backward"> fa-backward </p>
                                    <br>
                                    <p class="fa fa-play"> fa-play </p>
                                    <br>
                                    <p class="fa fa-pause"> fa-pause </p>
                                    <br>
                                    <p class="fa fa-stop"> fa-stop </p>
                                    <br>
                                    <p class="fa fa-forward"> fa-forward </p>
                                    <br>
                                    <p class="fa fa-fast-forward"> fa-fast-forward </p>
                                    <br>
                                    <p class="fa fa-step-forward"> fa-step-forward </p>
                                    <br>
                                    <p class="fa fa-eject"> fa-eject </p>
                                    <br>
                                    <p class="fa fa-chevron-left"> fa-chevron-left </p>
                                    <br>
                                    <p class="fa fa-chevron-right"> fa-chevron-right </p>
                                    <br>
                                    <p class="fa fa-plus-circle"> fa-plus-circle </p>
                                    <br>
                                    <p class="fa fa-minus-circle"> fa-minus-circle </p>
                                    <br>
                                    <p class="fa fa-times-circle"> fa-times-circle </p>
                                    <br>
                                    <p class="fa fa-check-circle"> fa-check-circle </p>
                                    <br>
                                    <p class="fa fa-question-circle"> fa-question-circle </p>
                                    <br>
                                    <p class="fa fa-info-circle"> fa-info-circle </p>
                                    <br>
                                    <p class="fa fa-crosshairs"> fa-crosshairs </p>
                                    <br>
                                    <p class="fa fa-times-circle-o"> fa-times-circle-o </p>
                                    <br>
                                    <p class="fa fa-check-circle-o"> fa-check-circle-o </p>
                                    <br>
                                    <p class="fa fa-ban"> fa-ban </p>
                                    <br>
                                    <p class="fa fa-arrow-left"> fa-arrow-left </p>
                                    <br>
                                    <p class="fa fa-arrow-right"> fa-arrow-right </p>
                                    <br>
                                    <p class="fa fa-arrow-up"> fa-arrow-up </p>
                                    <br>
                                    <p class="fa fa-arrow-down"> fa-arrow-down </p>
                                    <br>
                                    <p class="fa fa-mail-forward"> fa-mail-forward </p>
                                    <br>
                                    <p class="fa fa-share"> fa-share </p>
                                    <br>
                                    <p class="fa fa-expand"> fa-expand </p>
                                    <br>
                                    <p class="fa fa-compress"> fa-compress </p>
                                    <br>
                                    <p class="fa fa-plus"> fa-plus </p>
                                    <br>
                                    <p class="fa fa-minus"> fa-minus </p>
                                    <br>
                                    <p class="fa fa-asterisk"> fa-asterisk </p>
                                    <br>
                                    <p class="fa fa-exclamation-circle"> fa-exclamation-circle </p>
                                    <br>
                                    <p class="fa fa-gift"> fa-gift </p>
                                    <br>
                                    <p class="fa fa-leaf"> fa-leaf </p>
                                    <br>
                                    <p class="fa fa-fire"> fa-fire </p>
                                    <br>
                                    <p class="fa fa-eye"> fa-eye </p>
                                    <br>
                                    <p class="fa fa-eye-slash"> fa-eye-slash </p>
                                    <br>
                                    <p class="fa fa-warning"> fa-warning </p>
                                    <br>
                                    <p class="fa fa-exclamation-triangle"> fa-exclamation-triangle </p>
                                    <br>
                                    <p class="fa fa-plane"> fa-plane </p>
                                    <br>
                                    <p class="fa fa-calendar"> fa-calendar </p>
                                    <br>
                                    <p class="fa fa-random"> fa-random </p>
                                    <br>
                                    <p class="fa fa-comment"> fa-comment </p>
                                    <br>
                                    <p class="fa fa-magnet"> fa-magnet </p>
                                    <br>
                                    <p class="fa fa-chevron-up"> fa-chevron-up </p>
                                    <br>
                                    <p class="fa fa-chevron-down"> fa-chevron-down </p>
                                    <br>
                                    <p class="fa fa-retweet"> fa-retweet </p>
                                    <br>
                                    <p class="fa fa-shopping-cart"> fa-shopping-cart </p>
                                    <br>
                                    <p class="fa fa-folder"> fa-folder </p>
                                    <br>
                                    <p class="fa fa-folder-open"> fa-folder-open </p>
                                    <br>
                                </div>
                                <!-- /.col-lg-6 (nested) -->
                                <div class="fa col-lg-3">
                                    <p class="fa fa-arrows-v"> fa-arrows-v </p>
                                    <br>
                                    <p class="fa fa-arrows-h"> fa-arrows-h </p>
                                    <br>
                                    <p class="fa fa-bar-chart-o"> fa-bar-chart-o </p>
                                    <br>
                                    <p class="fa fa-twitter-square"> fa-twitter-square </p>
                                    <br>
                                    <p class="fa fa-facebook-square"> fa-facebook-square </p>
                                    <br>
                                    <p class="fa fa-camera-retro"> fa-camera-retro </p>
                                    <br>
                                    <p class="fa fa-key"> fa-key </p>
                                    <br>
                                    <p class="fa fa-gears"> fa-gears </p>
                                    <br>
                                    <p class="fa fa-cogs"> fa-cogs </p>
                                    <br>
                                    <p class="fa fa-comments"> fa-comments </p>
                                    <br>
                                    <p class="fa fa-thumbs-o-up"> fa-thumbs-o-up </p>
                                    <br>
                                    <p class="fa fa-thumbs-o-down"> fa-thumbs-o-down </p>
                                    <br>
                                    <p class="fa fa-star-half"> fa-star-half </p>
                                    <br>
                                    <p class="fa fa-heart-o"> fa-heart-o </p>
                                    <br>
                                    <p class="fa fa-sign-out"> fa-sign-out </p>
                                    <br>
                                    <p class="fa fa-linkedin-square"> fa-linkedin-square </p>
                                    <br>
                                    <p class="fa fa-thumb-tack"> fa-thumb-tack </p>
                                    <br>
                                    <p class="fa fa-external-link"> fa-external-link </p>
                                    <br>
                                    <p class="fa fa-sign-in"> fa-sign-in </p>
                                    <br>
                                    <p class="fa fa-trophy"> fa-trophy </p>
                                    <br>
                                    <p class="fa fa-github-square"> fa-github-square </p>
                                    <br>
                                    <p class="fa fa-upload"> fa-upload </p>
                                    <br>
                                    <p class="fa fa-lemon-o"> fa-lemon-o </p>
                                    <br>
                                    <p class="fa fa-phone"> fa-phone </p>
                                    <br>
                                    <p class="fa fa-square-o"> fa-square-o </p>
                                    <br>
                                    <p class="fa fa-bookmark-o"> fa-bookmark-o </p>
                                    <br>
                                    <p class="fa fa-phone-square"> fa-phone-square </p>
                                    <br>
                                    <p class="fa fa-twitter"> fa-twitter </p>
                                    <br>
                                    <p class="fa fa-facebook"> fa-facebook </p>
                                    <br>
                                    <p class="fa fa-github"> fa-github </p>
                                    <br>
                                    <p class="fa fa-unlock"> fa-unlock </p>
                                    <br>
                                    <p class="fa fa-credit-card"> fa-credit-card </p>
                                    <br>
                                    <p class="fa fa-rss"> fa-rss </p>
                                    <br>
                                    <p class="fa fa-hdd-o"> fa-hdd-o </p>
                                    <br>
                                    <p class="fa fa-bullhorn"> fa-bullhorn </p>
                                    <br>
                                    <p class="fa fa-bell"> fa-bell </p>
                                    <br>
                                    <p class="fa fa-certificate"> fa-certificate </p>
                                    <br>
                                    <p class="fa fa-hand-o-right"> fa-hand-o-right </p>
                                    <br>
                                    <p class="fa fa-hand-o-left"> fa-hand-o-left </p>
                                    <br>
                                    <p class="fa fa-hand-o-up"> fa-hand-o-up </p>
                                    <br>
                                    <p class="fa fa-hand-o-down"> fa-hand-o-down </p>
                                    <br>
                                    <p class="fa fa-arrow-circle-left"> fa-arrow-circle-left </p>
                                    <br>
                                    <p class="fa fa-arrow-circle-right"> fa-arrow-circle-right </p>
                                    <br>
                                    <p class="fa fa-arrow-circle-up"> fa-arrow-circle-up </p>
                                    <br>
                                    <p class="fa fa-arrow-circle-down"> fa-arrow-circle-down </p>
                                    <br>
                                    <p class="fa fa-globe"> fa-globe </p>
                                    <br>
                                    <p class="fa fa-wrench"> fa-wrench </p>
                                    <br>
                                    <p class="fa fa-tasks"> fa-tasks </p>
                                    <br>
                                    <p class="fa fa-filter"> fa-filter </p>
                                    <br>
                                    <p class="fa fa-briefcase"> fa-briefcase </p>
                                    <br>
                                    <p class="fa fa-arrows-alt"> fa-arrows-alt </p>
                                    <br>
                                    <p class="fa fa-group"> fa-group </p>
                                    <br>
                                    <p class="fa fa-users"> fa-users </p>
                                    <br>
                                    <p class="fa fa-chain"> fa-chain </p>
                                    <br>
                                    <p class="fa fa-link"> fa-link </p>
                                    <br>
                                    <p class="fa fa-cloud"> fa-cloud </p>
                                    <br>
                                    <p class="fa fa-flask"> fa-flask </p>
                                    <br>
                                    <p class="fa fa-cut"> fa-cut </p>
                                    <br>
                                    <p class="fa fa-scissors"> fa-scissors </p>
                                    <br>
                                    <p class="fa fa-copy"> fa-copy </p>
                                    <br>
                                    <p class="fa fa-files-o"> fa-files-o </p>
                                    <br>
                                    <p class="fa fa-paperclip"> fa-paperclip </p>
                                    <br>
                                    <p class="fa fa-save"> fa-save </p>
                                    <br>
                                    <p class="fa fa-floppy-o"> fa-floppy-o </p>
                                    <br>
                                    <p class="fa fa-square"> fa-square </p>
                                    <br>
                                    <p class="fa fa-navicon"> fa-navicon </p>
                                    <br>
                                    <p class="fa fa-reorder"> fa-reorder </p>
                                    <br>
                                    <p class="fa fa-bars"> fa-bars </p>
                                    <br>
                                    <p class="fa fa-list-ul"> fa-list-ul </p>
                                    <br>
                                    <p class="fa fa-list-ol"> fa-list-ol </p>
                                    <br>
                                    <p class="fa fa-strikethrough"> fa-strikethrough </p>
                                    <br>
                                    <p class="fa fa-underline"> fa-underline </p>
                                    <br>
                                    <p class="fa fa-table"> fa-table </p>
                                    <br>
                                    <p class="fa fa-magic"> fa-magic </p>
                                    <br>
                                    <p class="fa fa-truck"> fa-truck </p>
                                    <br>
                                    <p class="fa fa-pinterest"> fa-pinterest </p>
                                    <br>
                                    <p class="fa fa-pinterest-square"> fa-pinterest-square </p>
                                    <br>
                                    <p class="fa fa-google-plus-square"> fa-google-plus-square </p>
                                    <br>
                                    <p class="fa fa-google-plus"> fa-google-plus </p>
                                    <br>
                                    <p class="fa fa-money"> fa-money </p>
                                    <br>
                                    <p class="fa fa-caret-down"> fa-caret-down </p>
                                    <br>
                                    <p class="fa fa-caret-up"> fa-caret-up </p>
                                    <br>
                                    <p class="fa fa-caret-left"> fa-caret-left </p>
                                    <br>
                                    <p class="fa fa-caret-right"> fa-caret-right </p>
                                    <br>
                                    <p class="fa fa-columns"> fa-columns </p>
                                    <br>
                                    <p class="fa fa-unsorted"> fa-unsorted </p>
                                    <br>
                                    <p class="fa fa-sort"> fa-sort </p>
                                    <br>
                                    <p class="fa fa-sort-down"> fa-sort-down </p>
                                    <br>
                                    <p class="fa fa-sort-desc"> fa-sort-desc </p>
                                    <br>
                                    <p class="fa fa-sort-up"> fa-sort-up </p>
                                    <br>
                                    <p class="fa fa-sort-asc"> fa-sort-asc </p>
                                    <br>
                                    <p class="fa fa-envelope"> fa-envelope </p>
                                    <br>
                                    <p class="fa fa-linkedin"> fa-linkedin </p>
                                    <br>
                                    <p class="fa fa-rotate-left"> fa-rotate-left </p>
                                    <br>
                                    <p class="fa fa-undo"> fa-undo </p>
                                    <br>
                                    <p class="fa fa-legal"> fa-legal </p>
                                    <br>
                                    <p class="fa fa-gavel"> fa-gavel </p>
                                    <br>
                                    <p class="fa fa-dashboard"> fa-dashboard </p>
                                    <br>
                                    <p class="fa fa-tachometer"> fa-tachometer </p>
                                    <br>
                                    <p class="fa fa-comment-o"> fa-comment-o </p>
                                    <br>
                                    <p class="fa fa-comments-o"> fa-comments-o </p>
                                    <br>
                                    <p class="fa fa-flash"> fa-flash </p>
                                    <br>
                                    <p class="fa fa-bolt"> fa-bolt </p>
                                    <br>
                                    <p class="fa fa-sitemap"> fa-sitemap </p>
                                    <br>
                                    <p class="fa fa-umbrella"> fa-umbrella </p>
                                    <br>
                                    <p class="fa fa-paste"> fa-paste </p>
                                    <br>
                                    <p class="fa fa-clipboard"> fa-clipboard </p>
                                    <br>
                                    <p class="fa fa-lightbulb-o"> fa-lightbulb-o </p>
                                    <br>
                                    <p class="fa fa-exchange"> fa-exchange </p>
                                    <br>
                                    <p class="fa fa-cloud-download"> fa-cloud-download </p>
                                    <br>
                                    <p class="fa fa-cloud-upload"> fa-cloud-upload </p>
                                    <br>
                                    <p class="fa fa-user-md"> fa-user-md </p>
                                    <br>
                                    <p class="fa fa-stethoscope"> fa-stethoscope </p>
                                    <br>
                                    <p class="fa fa-suitcase"> fa-suitcase </p>
                                    <br>
                                    <p class="fa fa-bell-o"> fa-bell-o </p>
                                    <br>
                                    <p class="fa fa-coffee"> fa-coffee </p>
                                    <br>
                                    <p class="fa fa-cutlery"> fa-cutlery </p>
                                    <br>
                                    <p class="fa fa-file-text-o"> fa-file-text-o </p>
                                    <br>
                                    <p class="fa fa-building-o"> fa-building-o </p>
                                    <br>
                                    <p class="fa fa-hospital-o"> fa-hospital-o </p>
                                    <br>
                                    <p class="fa fa-ambulance"> fa-ambulance </p>
                                    <br>
                                    <p class="fa fa-medkit"> fa-medkit </p>
                                    <br>
                                    <p class="fa fa-fighter-jet"> fa-fighter-jet </p>
                                    <br>
                                    <p class="fa fa-beer"> fa-beer </p>
                                    <br>
                                    <p class="fa fa-h-square"> fa-h-square </p>
                                    <br>
                                    <p class="fa fa-plus-square"> fa-plus-square </p>
                                    <br>
                                </div>
                                <div class="fa col-lg-3">
                                    <p class="fa fa-angle-double-left"> fa-angle-double-left </p>
                                    <br>
                                    <p class="fa fa-angle-double-right"> fa-angle-double-right </p>
                                    <br>
                                    <p class="fa fa-angle-double-up"> fa-angle-double-up </p>
                                    <br>
                                    <p class="fa fa-angle-double-down"> fa-angle-double-down </p>
                                    <br>
                                    <p class="fa fa-angle-left"> fa-angle-left </p>
                                    <br>
                                    <p class="fa fa-angle-right"> fa-angle-right </p>
                                    <br>
                                    <p class="fa fa-angle-up"> fa-angle-up </p>
                                    <br>
                                    <p class="fa fa-angle-down"> fa-angle-down </p>
                                    <br>
                                    <p class="fa fa-desktop"> fa-desktop </p>
                                    <br>
                                    <p class="fa fa-laptop"> fa-laptop </p>
                                    <br>
                                    <p class="fa fa-tablet"> fa-tablet </p>
                                    <br>
                                    <p class="fa fa-mobile-phone"> fa-mobile-phone </p>
                                    <br>
                                    <p class="fa fa-mobile"> fa-mobile </p>
                                    <br>
                                    <p class="fa fa-circle-o"> fa-circle-o </p>
                                    <br>
                                    <p class="fa fa-quote-left"> fa-quote-left </p>
                                    <br>
                                    <p class="fa fa-quote-right"> fa-quote-right </p>
                                    <br>
                                    <p class="fa fa-spinner"> fa-spinner </p>
                                    <br>
                                    <p class="fa fa-circle"> fa-circle </p>
                                    <br>
                                    <p class="fa fa-mail-reply"> fa-mail-reply </p>
                                    <br>
                                    <p class="fa fa-reply"> fa-reply </p>
                                    <br>
                                    <p class="fa fa-github-alt"> fa-github-alt </p>
                                    <br>
                                    <p class="fa fa-folder-o"> fa-folder-o </p>
                                    <br>
                                    <p class="fa fa-folder-open-o"> fa-folder-open-o </p>
                                    <br>
                                    <p class="fa fa-smile-o"> fa-smile-o </p>
                                    <br>
                                    <p class="fa fa-frown-o"> fa-frown-o </p>
                                    <br>
                                    <p class="fa fa-meh-o"> fa-meh-o </p>
                                    <br>
                                    <p class="fa fa-gamepad"> fa-gamepad </p>
                                    <br>
                                    <p class="fa fa-keyboard-o"> fa-keyboard-o </p>
                                    <br>
                                    <p class="fa fa-flag-o"> fa-flag-o </p>
                                    <br>
                                    <p class="fa fa-flag-checkered"> fa-flag-checkered </p>
                                    <br>
                                    <p class="fa fa-terminal"> fa-terminal </p>
                                    <br>
                                    <p class="fa fa-code"> fa-code </p>
                                    <br>
                                    <p class="fa fa-mail-reply-all"> fa-mail-reply-all </p>
                                    <br>
                                    <p class="fa fa-reply-all"> fa-reply-all </p>
                                    <br>
                                    <p class="fa fa-star-half-empty"> fa-star-half-empty </p>
                                    <br>
                                    <p class="fa fa-star-half-full"> fa-star-half-full </p>
                                    <br>
                                    <p class="fa fa-star-half-o"> fa-star-half-o </p>
                                    <br>
                                    <p class="fa fa-location-arrow"> fa-location-arrow </p>
                                    <br>
                                    <p class="fa fa-crop"> fa-crop </p>
                                    <br>
                                    <p class="fa fa-code-fork"> fa-code-fork </p>
                                    <br>
                                    <p class="fa fa-unlink"> fa-unlink </p>
                                    <br>
                                    <p class="fa fa-chain-broken"> fa-chain-broken </p>
                                    <br>
                                    <p class="fa fa-question"> fa-question </p>
                                    <br>
                                    <p class="fa fa-info"> fa-info </p>
                                    <br>
                                    <p class="fa fa-exclamation"> fa-exclamation </p>
                                    <br>
                                    <p class="fa fa-superscript"> fa-superscript </p>
                                    <br>
                                    <p class="fa fa-subscript"> fa-subscript </p>
                                    <br>
                                    <p class="fa fa-eraser"> fa-eraser </p>
                                    <br>
                                    <p class="fa fa-puzzle-piece"> fa-puzzle-piece </p>
                                    <br>
                                    <p class="fa fa-microphone"> fa-microphone </p>
                                    <br>
                                    <p class="fa fa-microphone-slash"> fa-microphone-slash </p>
                                    <br>
                                    <p class="fa fa-shield"> fa-shield </p>
                                    <br>
                                    <p class="fa fa-calendar-o"> fa-calendar-o </p>
                                    <br>
                                    <p class="fa fa-fire-extinguisher"> fa-fire-extinguisher </p>
                                    <br>
                                    <p class="fa fa-rocket"> fa-rocket </p>
                                    <br>
                                    <p class="fa fa-maxcdn"> fa-maxcdn </p>
                                    <br>
                                    <p class="fa fa-chevron-circle-left"> fa-chevron-circle-left </p>
                                    <br>
                                    <p class="fa fa-chevron-circle-right"> fa-chevron-circle-right </p>
                                    <br>
                                    <p class="fa fa-chevron-circle-up"> fa-chevron-circle-up </p>
                                    <br>
                                    <p class="fa fa-chevron-circle-down"> fa-chevron-circle-down </p>
                                    <br>
                                    <p class="fa fa-html5"> fa-html5 </p>
                                    <br>
                                    <p class="fa fa-css3"> fa-css3 </p>
                                    <br>
                                    <p class="fa fa-anchor"> fa-anchor </p>
                                    <br>
                                    <p class="fa fa-unlock-alt"> fa-unlock-alt </p>
                                    <br>
                                    <p class="fa fa-bullseye"> fa-bullseye </p>
                                    <br>
                                    <p class="fa fa-ellipsis-h"> fa-ellipsis-h </p>
                                    <br>
                                    <p class="fa fa-ellipsis-v"> fa-ellipsis-v </p>
                                    <br>
                                    <p class="fa fa-rss-square"> fa-rss-square </p>
                                    <br>
                                    <p class="fa fa-play-circle"> fa-play-circle </p>
                                    <br>
                                    <p class="fa fa-ticket"> fa-ticket </p>
                                    <br>
                                    <p class="fa fa-minus-square"> fa-minus-square </p>
                                    <br>
                                    <p class="fa fa-minus-square-o"> fa-minus-square-o </p>
                                    <br>
                                    <p class="fa fa-level-up"> fa-level-up </p>
                                    <br>
                                    <p class="fa fa-level-down"> fa-level-down </p>
                                    <br>
                                    <p class="fa fa-check-square"> fa-check-square </p>
                                    <br>
                                    <p class="fa fa-pencil-square"> fa-pencil-square </p>
                                    <br>
                                    <p class="fa fa-external-link-square"> fa-external-link-square </p>
                                    <br>
                                    <p class="fa fa-share-square"> fa-share-square </p>
                                    <br>
                                    <p class="fa fa-compass"> fa-compass </p>
                                    <br>
                                    <p class="fa fa-toggle-down"> fa-toggle-down </p>
                                    <br>
                                    <p class="fa fa-caret-square-o-down"> fa-caret-square-o-down </p>
                                    <br>
                                    <p class="fa fa-toggle-up"> fa-toggle-up </p>
                                    <br>
                                    <p class="fa fa-caret-square-o-up"> fa-caret-square-o-up </p>
                                    <br>
                                    <p class="fa fa-toggle-right"> fa-toggle-right </p>
                                    <br>
                                    <p class="fa fa-caret-square-o-right"> fa-caret-square-o-right </p>
                                    <br>
                                    <p class="fa fa-euro"> fa-euro </p>
                                    <br>
                                    <p class="fa fa-eur"> fa-eur </p>
                                    <br>
                                    <p class="fa fa-gbp"> fa-gbp </p>
                                    <br>
                                    <p class="fa fa-dollar"> fa-dollar </p>
                                    <br>
                                    <p class="fa fa-usd"> fa-usd </p>
                                    <br>
                                    <p class="fa fa-rupee"> fa-rupee </p>
                                    <br>
                                    <p class="fa fa-inr"> fa-inr </p>
                                    <br>
                                    <p class="fa fa-cny"> fa-cny </p>
                                    <br>
                                    <p class="fa fa-rmb"> fa-rmb </p>
                                    <br>
                                    <p class="fa fa-yen"> fa-yen </p>
                                    <br>
                                    <p class="fa fa-jpy"> fa-jpy </p>
                                    <br>
                                    <p class="fa fa-ruble"> fa-ruble </p>
                                    <br>
                                    <p class="fa fa-rouble"> fa-rouble </p>
                                    <br>
                                    <p class="fa fa-rub"> fa-rub </p>
                                    <br>
                                    <p class="fa fa-won"> fa-won </p>
                                    <br>
                                    <p class="fa fa-krw"> fa-krw </p>
                                    <br>
                                    <p class="fa fa-bitcoin"> fa-bitcoin </p>
                                    <br>
                                    <p class="fa fa-btc"> fa-btc </p>
                                    <br>
                                    <p class="fa fa-file"> fa-file </p>
                                    <br>
                                    <p class="fa fa-file-text"> fa-file-text </p>
                                    <br>
                                    <p class="fa fa-sort-alpha-asc"> fa-sort-alpha-asc </p>
                                    <br>
                                    <p class="fa fa-sort-alpha-desc"> fa-sort-alpha-desc </p>
                                    <br>
                                    <p class="fa fa-sort-amount-asc"> fa-sort-amount-asc </p>
                                    <br>
                                    <p class="fa fa-sort-amount-desc"> fa-sort-amount-desc </p>
                                    <br>
                                    <p class="fa fa-sort-numeric-asc"> fa-sort-numeric-asc </p>
                                    <br>
                                    <p class="fa fa-sort-numeric-desc"> fa-sort-numeric-desc </p>
                                    <br>
                                    <p class="fa fa-thumbs-up"> fa-thumbs-up </p>
                                    <br>
                                    <p class="fa fa-thumbs-down"> fa-thumbs-down </p>
                                    <br>
                                    <p class="fa fa-youtube-square"> fa-youtube-square </p>
                                    <br>
                                    <p class="fa fa-youtube"> fa-youtube </p>
                                    <br>
                                    <p class="fa fa-xing"> fa-xing </p>
                                    <br>
                                    <p class="fa fa-xing-square"> fa-xing-square </p>
                                    <br>
                                    <p class="fa fa-youtube-play"> fa-youtube-play </p>
                                    <br>
                                    <p class="fa fa-dropbox"> fa-dropbox </p>
                                    <br>
                                    <p class="fa fa-stack-overflow"> fa-stack-overflow </p>
                                    <br>
                                    <p class="fa fa-instagram"> fa-instagram </p>
                                    <br>
                                    <p class="fa fa-flickr"> fa-flickr </p>
                                    <br>
                                    <p class="fa fa-adn"> fa-adn </p>
                                    <br>
                                    <p class="fa fa-bitbucket"> fa-bitbucket </p>
                                    <br>
                                    <p class="fa fa-bitbucket-square"> fa-bitbucket-square </p>
                                    <br>
                                    <p class="fa fa-tumblr"> fa-tumblr </p>
                                    <br>
                                </div>
                                <div class="fa col-lg-3">
                                    <p class="fa fa-tumblr-square"> fa-tumblr-square </p>
                                    <br>
                                    <p class="fa fa-long-arrow-down"> fa-long-arrow-down </p>
                                    <br>
                                    <p class="fa fa-long-arrow-up"> fa-long-arrow-up </p>
                                    <br>
                                    <p class="fa fa-long-arrow-left"> fa-long-arrow-left </p>
                                    <br>
                                    <p class="fa fa-long-arrow-right"> fa-long-arrow-right </p>
                                    <br>
                                    <p class="fa fa-apple"> fa-apple </p>
                                    <br>
                                    <p class="fa fa-windows"> fa-windows </p>
                                    <br>
                                    <p class="fa fa-android"> fa-android </p>
                                    <br>
                                    <p class="fa fa-linux"> fa-linux </p>
                                    <br>
                                    <p class="fa fa-dribbble"> fa-dribbble </p>
                                    <br>
                                    <p class="fa fa-skype"> fa-skype </p>
                                    <br>
                                    <p class="fa fa-foursquare"> fa-foursquare </p>
                                    <br>
                                    <p class="fa fa-trello"> fa-trello </p>
                                    <br>
                                    <p class="fa fa-female"> fa-female </p>
                                    <br>
                                    <p class="fa fa-male"> fa-male </p>
                                    <br>
                                    <p class="fa fa-gittip"> fa-gittip </p>
                                    <br>
                                    <p class="fa fa-sun-o"> fa-sun-o </p>
                                    <br>
                                    <p class="fa fa-moon-o"> fa-moon-o </p>
                                    <br>
                                    <p class="fa fa-archive"> fa-archive </p>
                                    <br>
                                    <p class="fa fa-bug"> fa-bug </p>
                                    <br>
                                    <p class="fa fa-vk"> fa-vk </p>
                                    <br>
                                    <p class="fa fa-weibo"> fa-weibo </p>
                                    <br>
                                    <p class="fa fa-renren"> fa-renren </p>
                                    <br>
                                    <p class="fa fa-pagelines"> fa-pagelines </p>
                                    <br>
                                    <p class="fa fa-stack-exchange"> fa-stack-exchange </p>
                                    <br>
                                    <p class="fa fa-arrow-circle-o-right"> fa-arrow-circle-o-right </p>
                                    <br>
                                    <p class="fa fa-arrow-circle-o-left"> fa-arrow-circle-o-left </p>
                                    <br>
                                    <p class="fa fa-toggle-left"> fa-toggle-left </p>
                                    <br>
                                    <p class="fa fa-caret-square-o-left"> fa-caret-square-o-left </p>
                                    <br>
                                    <p class="fa fa-dot-circle-o"> fa-dot-circle-o </p>
                                    <br>
                                    <p class="fa fa-wheelchair"> fa-wheelchair </p>
                                    <br>
                                    <p class="fa fa-vimeo-square"> fa-vimeo-square </p>
                                    <br>
                                    <p class="fa fa-turkish-lira"> fa-turkish-lira </p>
                                    <br>
                                    <p class="fa fa-try"> fa-try </p>
                                    <br>
                                    <p class="fa fa-plus-square-o"> fa-plus-square-o </p>
                                    <br>
                                    <p class="fa fa-space-shuttle"> fa-space-shuttle </p>
                                    <br>
                                    <p class="fa fa-slack"> fa-slack </p>
                                    <br>
                                    <p class="fa fa-envelope-square"> fa-envelope-square </p>
                                    <br>
                                    <p class="fa fa-wordpress"> fa-wordpress </p>
                                    <br>
                                    <p class="fa fa-openid"> fa-openid </p>
                                    <br>
                                    <p class="fa fa-institution"> fa-institution </p>
                                    <br>
                                    <p class="fa fa-bank"> fa-bank </p>
                                    <br>
                                    <p class="fa fa-university"> fa-university </p>
                                    <br>
                                    <p class="fa fa-mortar-board"> fa-mortar-board </p>
                                    <br>
                                    <p class="fa fa-graduation-cap"> fa-graduation-cap </p>
                                    <br>
                                    <p class="fa fa-yahoo"> fa-yahoo </p>
                                    <br>
                                    <p class="fa fa-google"> fa-google </p>
                                    <br>
                                    <p class="fa fa-reddit"> fa-reddit </p>
                                    <br>
                                    <p class="fa fa-reddit-square"> fa-reddit-square </p>
                                    <br>
                                    <p class="fa fa-stumbleupon-circle"> fa-stumbleupon-circle </p>
                                    <br>
                                    <p class="fa fa-stumbleupon"> fa-stumbleupon </p>
                                    <br>
                                    <p class="fa fa-delicious"> fa-delicious </p>
                                    <br>
                                    <p class="fa fa-digg"> fa-digg </p>
                                    <br>
                                    <p class="fa fa-pied-piper-square"> fa-pied-piper-square </p>
                                    <br>
                                    <p class="fa fa-pied-piper"> fa-pied-piper </p>
                                    <br>
                                    <p class="fa fa-pied-piper-alt"> fa-pied-piper-alt </p>
                                    <br>
                                    <p class="fa fa-drupal"> fa-drupal </p>
                                    <br>
                                    <p class="fa fa-joomla"> fa-joomla </p>
                                    <br>
                                    <p class="fa fa-language"> fa-language </p>
                                    <br>
                                    <p class="fa fa-fax"> fa-fax </p>
                                    <br>
                                    <p class="fa fa-building"> fa-building </p>
                                    <br>
                                    <p class="fa fa-child"> fa-child </p>
                                    <br>
                                    <p class="fa fa-paw"> fa-paw </p>
                                    <br>
                                    <p class="fa fa-spoon"> fa-spoon </p>
                                    <br>
                                    <p class="fa fa-cube"> fa-cube </p>
                                    <br>
                                    <p class="fa fa-cubes"> fa-cubes </p>
                                    <br>
                                    <p class="fa fa-behance"> fa-behance </p>
                                    <br>
                                    <p class="fa fa-behance-square"> fa-behance-square </p>
                                    <br>
                                    <p class="fa fa-steam"> fa-steam </p>
                                    <br>
                                    <p class="fa fa-steam-square"> fa-steam-square </p>
                                    <br>
                                    <p class="fa fa-recycle"> fa-recycle </p>
                                    <br>
                                    <p class="fa fa-automobile"> fa-automobile </p>
                                    <br>
                                    <p class="fa fa-car"> fa-car </p>
                                    <br>
                                    <p class="fa fa-cab"> fa-cab </p>
                                    <br>
                                    <p class="fa fa-taxi"> fa-taxi </p>
                                    <br>
                                    <p class="fa fa-tree"> fa-tree </p>
                                    <br>
                                    <p class="fa fa-spotify"> fa-spotify </p>
                                    <br>
                                    <p class="fa fa-deviantart"> fa-deviantart </p>
                                    <br>
                                    <p class="fa fa-soundcloud"> fa-soundcloud </p>
                                    <br>
                                    <p class="fa fa-database"> fa-database </p>
                                    <br>
                                    <p class="fa fa-file-pdf-o"> fa-file-pdf-o </p>
                                    <br>
                                    <p class="fa fa-file-word-o"> fa-file-word-o </p>
                                    <br>
                                    <p class="fa fa-file-excel-o"> fa-file-excel-o </p>
                                    <br>
                                    <p class="fa fa-file-powerpoint-o"> fa-file-powerpoint-o </p>
                                    <br>
                                    <p class="fa fa-file-photo-o"> fa-file-photo-o </p>
                                    <br>
                                    <p class="fa fa-file-picture-o"> fa-file-picture-o </p>
                                    <br>
                                    <p class="fa fa-file-image-o"> fa-file-image-o </p>
                                    <br>
                                    <p class="fa fa-file-zip-o"> fa-file-zip-o </p>
                                    <br>
                                    <p class="fa fa-file-archive-o"> fa-file-archive-o </p>
                                    <br>
                                    <p class="fa fa-file-sound-o"> fa-file-sound-o </p>
                                    <br>
                                    <p class="fa fa-file-audio-o"> fa-file-audio-o </p>
                                    <br>
                                    <p class="fa fa-file-movie-o"> fa-file-movie-o </p>
                                    <br>
                                    <p class="fa fa-file-video-o"> fa-file-video-o </p>
                                    <br>
                                    <p class="fa fa-file-code-o"> fa-file-code-o </p>
                                    <br>
                                    <p class="fa fa-vine"> fa-vine </p>
                                    <br>
                                    <p class="fa fa-codepen"> fa-codepen </p>
                                    <br>
                                    <p class="fa fa-jsfiddle"> fa-jsfiddle </p>
                                    <br>
                                    <p class="fa fa-life-bouy"> fa-life-bouy </p>
                                    <br>
                                    <p class="fa fa-life-saver"> fa-life-saver </p>
                                    <br>
                                    <p class="fa fa-support"> fa-support </p>
                                    <br>
                                    <p class="fa fa-life-ring"> fa-life-ring </p>
                                    <br>
                                    <p class="fa fa-circle-o-notch"> fa-circle-o-notch </p>
                                    <br>
                                    <p class="fa fa-ra"> fa-ra </p>
                                    <br>
                                    <p class="fa fa-rebel"> fa-rebel </p>
                                    <br>
                                    <p class="fa fa-ge"> fa-ge </p>
                                    <br>
                                    <p class="fa fa-empire"> fa-empire </p>
                                    <br>
                                    <p class="fa fa-git-square"> fa-git-square </p>
                                    <br>
                                    <p class="fa fa-git"> fa-git </p>
                                    <br>
                                    <p class="fa fa-hacker-news"> fa-hacker-news </p>
                                    <br>
                                    <p class="fa fa-tencent-weibo"> fa-tencent-weibo </p>
                                    <br>
                                    <p class="fa fa-qq"> fa-qq </p>
                                    <br>
                                    <p class="fa fa-wechat"> fa-wechat </p>
                                    <br>
                                    <p class="fa fa-weixin"> fa-weixin </p>
                                    <br>
                                    <p class="fa fa-send"> fa-send </p>
                                    <br>
                                    <p class="fa fa-paper-plane"> fa-paper-plane </p>
                                    <br>
                                    <p class="fa fa-send-o"> fa-send-o </p>
                                    <br>
                                    <p class="fa fa-paper-plane-o"> fa-paper-plane-o </p>
                                    <br>
                                    <p class="fa fa-history"> fa-history </p>
                                    <br>
                                    <p class="fa fa-circle-thin"> fa-circle-thin </p>
                                    <br>
                                    <p class="fa fa-header"> fa-header </p>
                                    <br>
                                    <p class="fa fa-paragraph"> fa-paragraph </p>
                                    <br>
                                    <p class="fa fa-sliders"> fa-sliders </p>
                                    <br>
                                    <p class="fa fa-share-alt"> fa-share-alt </p>
                                    <br>
                                    <p class="fa fa-share-alt-square"> fa-share-alt-square </p>
                                    <br>
                                    <p class="fa fa-bomb"> fa-bomb </p>
                                    <br>
                                </div>
                                <!-- /.col-lg-6 (nested) -->
                            </div>`

window.mockdoc = `
  
                            <div class="row">
                              <div class="col-lg-8">
                                              <div class="panel panel-default">
                                                  <div class="panel-heading">
                                                      <i class="fa fa-bar-chart-o fa-fw"></i> Area Chart Example
                                                      <div class="pull-right">
                                                          <div class="btn-group">
                                                            
                                                            
                                                            <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                                                Actions
                                                                <span class="caret"></span>
                                                            </button>
                                                            <button type="button" class="btn btn-default btn-xs">
                                                                <span action="toggleMinMax" param="searchresult" class="fa fa-minus"></span>
                                                            </button>
                                                              <ul class="dropdown-menu pull-right" role="menu">
                                                                  <li><a href="#">Action</a>
                                                                  </li>
                                                                  <li><a href="#">Another action</a>
                                                                  </li>
                                                                  <li><a href="#">Something else here</a>
                                                                  </li>
                                                                  <li class="divider"></li>
                                                                  <li><a href="#">Separated link</a>
                                                                  </li>
                                                              </ul>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="panel-body searchresult">
                            
                            
                            
                            
                            
                                                  </div>

                                                  </div>

                                                  

                                      
                                              </div>
                                              <!-- /.panel -->
                                          </div>
                              <div class="col-md-4"> 
                            <div class="form-group"> 
                                              <div class="input-group"> 
                                                  <input id="searchbox" placeholder="Auto de Infração" type="text" class="form-control" >
                                                  <div class="input-group-btn"> 
                                                      <button id="fanta" type="button" class="btn btn-default"><i class="fa fa-code"></i></button> 
                                                      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
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
                                                          <li><a href="#"><label><input checked="checked" type="radio"> Modal<label></label></label></a></li> 
                                                          <li><a href="#"><label><input disabled="" type="radio"> Debug Page</label></a></li> 
                            
                                                      </ul> 
                                                  </div> 
                                              </div>
                                          </div>
                                       
                                          
                            
                            
                            <style>
                            .styledlabel label{
                                border:solid 1px #000;
                                border-radius:5px;
                                padding:0px 5px 0px 5px;
                                margin-bottom:3px;
                            }
                            </style>
                            
                            <div class="panel panel-default">
                                                  <div class="panel-body styledlabel">
                                                        <label><input name="searchFunction" value="buscarMenu" type="radio" />Menu</label>
                                                        <label><input name="searchFunction" value="multaId" type="radio" />Multa ID</label>
                                                        <label><input name="searchFunction" value="buscarAutoInfracao" type="radio" checked />Auto</label>
                                                        <label><input name="searchFunction" value="veiculoId" type="radio" />Veículo ID</label>
                                                        <label><input name="searchFunction" value="VeiculoPlaca" type="radio" />Veículo Placa</label>
                                                        <label><input name="searchFunction" value="veiculoRenavam" type="radio" />Veículo Renavam </label>
                                                        <label><input name="searchFunction" value="clienteId" type="radio" />Cliente ID </label>
                                                        <label><input name="searchFunction" value="clienteNome" type="radio" />Cliente Nome </label>
                                                        <label><input name="searchFunction" value="icones" action="icones" type="radio" />Icones </label>
                                                        <label><input name="searchFunction" value="alterarCliente" type="radio" />Alterar Cliente </label>
                            
                                                        
                            
                                                        
                                          
                                           
                            
                              
                                          </div></div>
                            
                            
                            
                            
                            
                            
                            
                                          
                                              <div class="panel panel-default">
                                                  <div class="panel-heading">
                                                      <i class="fa fa-car fa-fw"></i> Notifications Panel
                                                  </div>
                                                  <!-- /.panel-heading -->
                                                  <div class="panel-body">
                                                      
                                                      <!-- /.list-group -->
                                                      <a href="#" class="btn btn-default btn-block">View All Alerts</a>
                                                  </div>
                                                  <!-- /.panel-body -->
                                              </div>
                            
                            
                                              <div class="list-group">
                                                          <a href="#" class="list-group-item">
                                                              <i class="fa fa-file-text-o fa-fw"></i> Multa
                                                              <span class="pull-right text-muted small"><em><span class="label label-warning">1</span></em>
                                                              </span>
                                                          </a>
                                                          <a href="#" class="list-group-item">
                                                              <i class="fa fa-image fa-fw"></i> Imagens
                                                              <span class="pull-right text-muted small"><em>...</em>
                                                              </span>
                                                          </a>
                                                          <a href="#" class="list-group-item">
                                                              <i class="fa fa-hand-o-up fa-fw"></i> Indicação
                                                              <span class="pull-right text-muted small"><em>..</em>
                                                              </span>
                                                          </a>
                                                          <a href="#" class="list-group-item">
                                                              <i class="fa fa-dollar fa-fw"></i> Pagamento
                                                              <span class="pull-right text-muted small"><em>..</em>
                                                              </span>
                                                          </a>
                                                          <a href="#" class="list-group-item">
                                                              <i class="fa fa-car fa-fw"></i> Veículo
                                                              <span class="pull-right text-muted small"><em>...</em>
                                                              </span>
                                                          </a>
                                                          <a href="#" class="list-group-item">
                                                              <i class="fa fa-info fa-fw"></i> Veículo Histórico
                                                              <span class="pull-right text-muted small"><em>...</em>
                                                              </span>
                                                          </a>
                                                          <a href="#" class="list-group-item">
                                                              <i class="fa fa-info fa-fw"></i> Veículo Histórico Grupo
                                                              <span class="pull-right text-muted small"><em>...</em>
                                                              </span>
                                                          </a>
                                                          <a href="#" class="list-group-item">
                                                              <i class="fa fa-envelope-o fa-fw"></i> Envio Email
                                                              <span class="pull-right text-muted small"><em>..</em>
                                                              </span>
                                                          </a>
                                                          <a href="#" class="list-group-item">
                                                              <i class="fa fa-info fa-fw"></i> Info
                                                              <span class="pull-right text-muted small"><em>43 minutes ago</em>
                                                              </span>
                                                          </a>
                                                      </div>
                            </div>
                            </div>
                                          
                            `

window.mockzao = `
  
<div class="row">
  <div class="col-lg-8">
                  <div class="panel panel-default">
                      <div class="panel-heading">
                          <i class="fa fa-bar-chart-o fa-fw"></i> Area Chart Example
                          <div class="pull-right">
                              <div class="btn-group">
                                
                                
                                <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                    Actions
                                    <span class="caret"></span>
                                </button>
                                <button type="button" class="btn btn-default btn-xs">
                                    <span action="toggleMinMax" param="searchresult" class="fa fa-minus"></span>
                                </button>
                                  <ul class="dropdown-menu pull-right" role="menu">
                                      <li><a href="#">Action</a>
                                      </li>
                                      <li><a href="#">Another action</a>
                                      </li>
                                      <li><a href="#">Something else here</a>
                                      </li>
                                      <li class="divider"></li>
                                      <li><a href="#">Separated link</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <!-- /.panel-heading -->
                      <div class="panel-body searchresult">





                      </div>
                      <!-- /.panel-body -->
                  </div>
                  <!-- /.panel -->
                  
                  <!-- /.panel -->
                  <div class="panel panel-default">
                      <div class="panel-heading">
                          <i class="fa fa-clock-o fa-fw"></i> Responsive Timeline

                          <div class="pull-right">
                              <div class="btn-group">
                                <button type="button" class="btn btn-default btn-xs">
                                    <span action="toggleMinMax" param="timeline" class="fa fa-minus"></span>
                                </button>
                              </div>
                          </div>

                      </div>
                      <!-- /.panel-heading -->
                      <div class="panel-body timeline">
                          <ul class="timeline">
                              <li>
                                  <div class="timeline-badge"><i class="fa fa-check"></i>
                                  </div>
                                  <div class="timeline-panel">
                                      <div class="timeline-heading">
                                          <h4 class="timeline-title">Lorem ipsum dolor</h4>
                                          <p><small class="text-muted"><i class="fa fa-clock-o"></i> 11 hours ago via Twitter</small>
                                          </p>
                                      </div>
                                      <div class="timeline-body">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>
                                      </div>
                                  </div>
                              </li>
                              <li class="timeline-inverted">
                                  <div class="timeline-badge warning"><i class="fa fa-credit-card"></i>
                                  </div>
                                  <div class="timeline-panel">
                                      <div class="timeline-heading">
                                          <h4 class="timeline-title">Lorem ipsum dolor</h4>
                                      </div>
                                      <div class="timeline-body">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="timeline-badge danger"><i class="fa fa-bomb"></i>
                                  </div>
                                  <div class="timeline-panel">
                                      <div class="timeline-heading">
                                          <h4 class="timeline-title">Lorem ipsum dolor</h4>
                                      </div>
                                      <div class="timeline-body">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>
                                      </div>
                                  </div>
                              </li>
                              <li class="timeline-inverted">
                                  <div class="timeline-panel">
                                      <div class="timeline-heading">
                                          <h4 class="timeline-title">Lorem ipsum dolor</h4>
                                      </div>
                                      <div class="timeline-body">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="timeline-badge info"><i class="fa fa-save"></i>
                                  </div>
                                  <div class="timeline-panel">
                                      <div class="timeline-heading">
                                          <h4 class="timeline-title">Lorem ipsum dolor</h4>
                                      </div>
                                      <div class="timeline-body">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>
                                          <hr>
                                          <div class="btn-group">
                                              <button type="button" class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">
                                                  <i class="fa fa-gear"></i> <span class="caret"></span>
                                              </button>
                                              <ul class="dropdown-menu" role="menu">
                                                  <li><a href="#">Action</a>
                                                  </li>
                                                  <li><a href="#">Another action</a>
                                                  </li>
                                                  <li><a href="#">Something else here</a>
                                                  </li>
                                                  <li class="divider"></li>
                                                  <li><a href="#">Separated link</a>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="timeline-panel">
                                      <div class="timeline-heading">
                                          <h4 class="timeline-title">Lorem ipsum dolor</h4>
                                      </div>
                                      <div class="timeline-body">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>
                                      </div>
                                  </div>
                              </li>
                              <li class="timeline-inverted">
                                  <div class="timeline-badge success"><i class="fa fa-graduation-cap"></i>
                                  </div>
                                  <div class="timeline-panel">
                                      <div class="timeline-heading">
                                          <h4 class="timeline-title">Lorem ipsum dolor</h4>
                                      </div>
                                      <div class="timeline-body">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <!-- /.panel-body -->
                  </div>
                  <!-- /.panel -->
              </div>
  <div class="col-md-4"> 
<div class="form-group"> 
                  <div class="input-group"> 
                      <input id="searchbox" placeholder="Auto de Infração" type="text" class="form-control" >
                      <div class="input-group-btn"> 
                          <button id="fanta" type="button" class="btn btn-default"><i class="fa fa-code"></i></button> 
                          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
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
                              <li><a href="#"><label><input checked="checked" type="radio"> Modal<label></label></label></a></li> 
                              <li><a href="#"><label><input disabled="" type="radio"> Debug Page</label></a></li> 

                          </ul> 
                      </div> 
                  </div>
              </div>
           
              


<style>
.styledlabel label{
    border:solid 1px #000;
    border-radius:5px;
    padding:0px 5px 0px 5px;
    margin-bottom:3px;
}
</style>

<div class="panel panel-default">
                      <div class="panel-body styledlabel">
                            <label><input name="searchFunction" value="buscarMenu" type="radio" />Menu</label>
                            <label><input name="searchFunction" value="multaId" type="radio" />Multa ID</label>
                            <label><input name="searchFunction" value="buscarAutoInfracao" type="radio" checked />Auto</label>
                            <label><input name="searchFunction" value="veiculoId" type="radio" />Veículo ID</label>
                            <label><input name="searchFunction" value="VeiculoPlaca" type="radio" />Veículo Placa</label>
                            <label><input name="searchFunction" value="veiculoRenavam" type="radio" />Veículo Renavam </label>
                            <label><input name="searchFunction" value="clienteId" type="radio" />Cliente ID </label>
                            <label><input name="searchFunction" value="clienteNome" type="radio" />Cliente Nome </label>
                            <label><input name="searchFunction" value="icones" action="icones" type="radio" />Icones </label>
                            <label><input name="searchFunction" value="alterarCliente" type="radio" />Alterar Cliente </label>

                            

                            
              
               

  
              </div></div>







              
                  <div class="panel panel-default">
                      <div class="panel-heading">
                          <i class="fa fa-car fa-fw"></i> Notifications Panel
                      </div>
                      <!-- /.panel-heading -->
                      <div class="panel-body">
                          
                          <!-- /.list-group -->
                          <a href="#" class="btn btn-default btn-block">View All Alerts</a>
                      </div>
                      <!-- /.panel-body -->
                  </div>


                  <div class="list-group">
                              <a href="#" class="list-group-item">
                                  <i class="fa fa-file-text-o fa-fw"></i> Multa
                                  <span class="pull-right text-muted small"><em><span class="label label-warning">1</span></em>
                                  </span>
                              </a>
                              <a href="#" class="list-group-item">
                                  <i class="fa fa-image fa-fw"></i> Imagens
                                  <span class="pull-right text-muted small"><em>...</em>
                                  </span>
                              </a>
                              <a href="#" class="list-group-item">
                                  <i class="fa fa-hand-o-up fa-fw"></i> Indicação
                                  <span class="pull-right text-muted small"><em>..</em>
                                  </span>
                              </a>
                              <a href="#" class="list-group-item">
                                  <i class="fa fa-dollar fa-fw"></i> Pagamento
                                  <span class="pull-right text-muted small"><em>..</em>
                                  </span>
                              </a>
                              <a href="#" class="list-group-item">
                                  <i class="fa fa-car fa-fw"></i> Veículo
                                  <span class="pull-right text-muted small"><em>...</em>
                                  </span>
                              </a>
                              <a href="#" class="list-group-item">
                                  <i class="fa fa-info fa-fw"></i> Veículo Histórico
                                  <span class="pull-right text-muted small"><em>...</em>
                                  </span>
                              </a>
                              <a href="#" class="list-group-item">
                                  <i class="fa fa-info fa-fw"></i> Veículo Histórico Grupo
                                  <span class="pull-right text-muted small"><em>...</em>
                                  </span>
                              </a>
                              <a href="#" class="list-group-item">
                                  <i class="fa fa-envelope-o fa-fw"></i> Envio Email
                                  <span class="pull-right text-muted small"><em>..</em>
                                  </span>
                              </a>

                              <a href="#" class="list-group-item">
                                  <i class="fa fa-cog fa-fw"></i> Cliente Config (prazos)
                                  <span class="pull-right text-muted small"><em>..</em>
                                  </span>
                              </a>

                              <a href="#" class="list-group-item">
                                  <i class="fa fa-cog fa-fw"></i> Regras Email
                                  <span class="pull-right text-muted small"><em>..</em>
                                  </span>
                              </a>

                              <a href="#" class="list-group-item">
                                  <i class="fa fa-info fa-fw"></i> Info
                                  <span class="pull-right text-muted small"><em>43 minutes ago</em>
                                  </span>
                              </a>
                          </div>
</div>
</div>
              
`























if (typeof debounce != 'function') {
    function debounce(funcao, delay) {
        let temporizador = null;
        return function () {
            clearTimeout(temporizador);
            temporizador = setTimeout(funcao.bind(null, ...arguments), delay);
        }
    }
}




setTimeout(t => {
    if (typeof $.fn.modal != 'function') {

        /* ========================================================================
         * Bootstrap: modal.js v3.3.7
         * http://getbootstrap.com/javascript/#modals
         * ========================================================================
         * Copyright 2011-2016 Twitter, Inc.
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
         * ======================================================================== */


        +function ($) {
            'use strict';

            // MODAL CLASS DEFINITION
            // ======================

            var Modal = function (element, options) {
                this.options = options
                this.$body = $(document.body)
                this.$element = $(element)
                this.$dialog = this.$element.find('.modal-dialog')
                this.$backdrop = null
                this.isShown = null
                this.originalBodyPad = null
                this.scrollbarWidth = 0
                this.ignoreBackdropClick = false

                if (this.options.remote) {
                    this.$element
                        .find('.modal-content')
                        .load(this.options.remote, $.proxy(function () {
                            this.$element.trigger('loaded.bs.modal')
                        }, this))
                }
            }

            Modal.VERSION = '3.3.7'

            Modal.TRANSITION_DURATION = 300
            Modal.BACKDROP_TRANSITION_DURATION = 150

            Modal.DEFAULTS = {
                backdrop: true,
                keyboard: true,
                show: true
            }

            Modal.prototype.toggle = function (_relatedTarget) {
                return this.isShown ? this.hide() : this.show(_relatedTarget)
            }

            Modal.prototype.show = function (_relatedTarget) {
                var that = this
                var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

                this.$element.trigger(e)

                if (this.isShown || e.isDefaultPrevented()) return

                this.isShown = true

                this.checkScrollbar()
                this.setScrollbar()
                this.$body.addClass('modal-open')

                this.escape()
                this.resize()

                this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

                this.$dialog.on('mousedown.dismiss.bs.modal', function () {
                    that.$element.one('mouseup.dismiss.bs.modal', function (e) {
                        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
                    })
                })

                this.backdrop(function () {
                    var transition = $.support.transition && that.$element.hasClass('fade')

                    if (!that.$element.parent().length) {
                        that.$element.appendTo(that.$body) // don't move modals dom position
                    }

                    that.$element
                        .show()
                        .scrollTop(0)

                    that.adjustDialog()

                    if (transition) {
                        that.$element[0].offsetWidth // force reflow
                    }

                    that.$element.addClass('in')

                    that.enforceFocus()

                    var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

                    transition ?
                        that.$dialog // wait for modal to slide in
                            .one('bsTransitionEnd', function () {
                                that.$element.trigger('focus').trigger(e)
                            })
                            .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
                        that.$element.trigger('focus').trigger(e)
                })
            }

            Modal.prototype.hide = function (e) {
                if (e) e.preventDefault()

                e = $.Event('hide.bs.modal')

                this.$element.trigger(e)

                if (!this.isShown || e.isDefaultPrevented()) return

                this.isShown = false

                this.escape()
                this.resize()

                $(document).off('focusin.bs.modal')

                this.$element
                    .removeClass('in')
                    .off('click.dismiss.bs.modal')
                    .off('mouseup.dismiss.bs.modal')

                this.$dialog.off('mousedown.dismiss.bs.modal')

                $.support.transition && this.$element.hasClass('fade') ?
                    this.$element
                        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
                        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
                    this.hideModal()
            }

            Modal.prototype.enforceFocus = function () {
                $(document)
                    .off('focusin.bs.modal') // guard against infinite focus loop
                    .on('focusin.bs.modal', $.proxy(function (e) {
                        if (document !== e.target &&
                            this.$element[0] !== e.target &&
                            !this.$element.has(e.target).length) {
                            this.$element.trigger('focus')
                        }
                    }, this))
            }

            Modal.prototype.escape = function () {
                if (this.isShown && this.options.keyboard) {
                    this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
                        e.which == 27 && this.hide()
                    }, this))
                } else if (!this.isShown) {
                    this.$element.off('keydown.dismiss.bs.modal')
                }
            }

            Modal.prototype.resize = function () {
                if (this.isShown) {
                    $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
                } else {
                    $(window).off('resize.bs.modal')
                }
            }

            Modal.prototype.hideModal = function () {
                var that = this
                this.$element.hide()
                this.backdrop(function () {
                    that.$body.removeClass('modal-open')
                    that.resetAdjustments()
                    that.resetScrollbar()
                    that.$element.trigger('hidden.bs.modal')
                })
            }

            Modal.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove()
                this.$backdrop = null
            }

            Modal.prototype.backdrop = function (callback) {
                var that = this
                var animate = this.$element.hasClass('fade') ? 'fade' : ''

                if (this.isShown && this.options.backdrop) {
                    var doAnimate = $.support.transition && animate

                    this.$backdrop = $(document.createElement('div'))
                        .addClass('modal-backdrop ' + animate)
                        .appendTo(this.$body)

                    this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
                        if (this.ignoreBackdropClick) {
                            this.ignoreBackdropClick = false
                            return
                        }
                        if (e.target !== e.currentTarget) return
                        this.options.backdrop == 'static'
                            ? this.$element[0].focus()
                            : this.hide()
                    }, this))

                    if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

                    this.$backdrop.addClass('in')

                    if (!callback) return

                    doAnimate ?
                        this.$backdrop
                            .one('bsTransitionEnd', callback)
                            .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                        callback()

                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass('in')

                    var callbackRemove = function () {
                        that.removeBackdrop()
                        callback && callback()
                    }
                    $.support.transition && this.$element.hasClass('fade') ?
                        this.$backdrop
                            .one('bsTransitionEnd', callbackRemove)
                            .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                        callbackRemove()

                } else if (callback) {
                    callback()
                }
            }

            // these following methods are used to handle overflowing modals

            Modal.prototype.handleUpdate = function () {
                this.adjustDialog()
            }

            Modal.prototype.adjustDialog = function () {
                var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
                    paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
                })
            }

            Modal.prototype.resetAdjustments = function () {
                this.$element.css({
                    paddingLeft: '',
                    paddingRight: ''
                })
            }

            Modal.prototype.checkScrollbar = function () {
                var fullWindowWidth = window.innerWidth
                if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
                    var documentElementRect = document.documentElement.getBoundingClientRect()
                    fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
                }
                this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
                this.scrollbarWidth = this.measureScrollbar()
            }

            Modal.prototype.setScrollbar = function () {
                var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
                this.originalBodyPad = document.body.style.paddingRight || ''
                if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
            }

            Modal.prototype.resetScrollbar = function () {
                this.$body.css('padding-right', this.originalBodyPad)
            }

            Modal.prototype.measureScrollbar = function () { // thx walsh
                var scrollDiv = document.createElement('div')
                scrollDiv.className = 'modal-scrollbar-measure'
                this.$body.append(scrollDiv)
                var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
                this.$body[0].removeChild(scrollDiv)
                return scrollbarWidth
            }


            // MODAL PLUGIN DEFINITION
            // =======================

            function Plugin(option, _relatedTarget) {
                return this.each(function () {
                    var $this = $(this)
                    var data = $this.data('bs.modal')
                    var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

                    if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
                    if (typeof option == 'string') data[option](_relatedTarget)
                    else if (options.show) data.show(_relatedTarget)
                })
            }

            var old = $.fn.modal

            $.fn.modal = Plugin
            $.fn.modal.Constructor = Modal


            // MODAL NO CONFLICT
            // =================

            $.fn.modal.noConflict = function () {
                $.fn.modal = old
                return this
            }


            // MODAL DATA-API
            // ==============

            $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
                var $this = $(this)
                var href = $this.attr('href')
                var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
                var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

                if ($this.is('a')) e.preventDefault()

                $target.one('show.bs.modal', function (showEvent) {
                    if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
                    $target.one('hidden.bs.modal', function () {
                        $this.is(':visible') && $this.trigger('focus')
                    })
                })
                Plugin.call($target, option, this)
            })

        }(jQuery);

    }

    document.body.insertAdjacentHTML("afterbegin", `
    <style id="bootstrapmodalfallback">
   .modal-open {
   overflow: hidden;
   }
   
   .modal {
       font-family: sans-serif;
   position: fixed;
   top: 50px;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 1050;
   display: none;
   overflow: hidden;
   outline: 0;
   }
   
   .modal.fade .modal-dialog {
   transition: -webkit-transform 0.3s ease-out;
   transition: transform 0.3s ease-out;
   transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
   -webkit-transform: translate(0, -25%);
        transform: translate(0, -25%);
   }
   
   .modal.show .modal-dialog {
   -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
   }
   
   .modal-open .modal {
   overflow-x: hidden;
   overflow-y: auto;
   }
   
   .modal-dialog {
   position: relative;
   width: auto;
   margin: 10px;
   }
   
   .modal-content {
   position: relative;
   display: -ms-flexbox;
   display: flex;
   -ms-flex-direction: column;
    flex-direction: column;
   background-color: #fff;
   background-clip: padding-box;
   border: 1px solid rgba(0, 0, 0, 0.2);
   border-radius: 0.3rem;
   outline: 0;
   }
   
   .modal-backdrop {
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 1040;
   background-color: #000;
   }
   
   .modal-backdrop.fade {
   opacity: 0;
   }
   
   .modal-backdrop.show {
   opacity: 0.5;
   }
   
   .modal-header {
   display: -ms-flexbox;
   display: flex;
   -ms-flex-align: center;
    align-items: center;
   -ms-flex-pack: justify;
    justify-content: space-between;
   padding: 15px;
   border-bottom: 1px solid #e9ecef;
   }
   
   .modal-title {
   margin-bottom: 0;
   line-height: 1.5;
   }
   
   .modal-body {
   position: relative;
   -ms-flex: 1 1 auto;
    flex: 1 1 auto;
   padding: 15px;
   }
   
   .modal-footer {
   display: -ms-flexbox;
   display: flex;
   -ms-flex-align: center;
    align-items: center;
   -ms-flex-pack: end;
    justify-content: flex-end;
   padding: 15px;
   border-top: 1px solid #e9ecef;
   }
   
   .modal-footer > :not(:first-child) {
   margin-left: .25rem;
   }
   
   .modal-footer > :not(:last-child) {
   margin-right: .25rem;
   }
   
   .modal-scrollbar-measure {
   position: absolute;
   top: -9999px;
   width: 50px;
   height: 50px;
   overflow: scroll;
   }
   
   @media (min-width: 576px) {
   .modal-dialog {
   /* max-width: 500px; */
   margin: 30px auto;
   }
   .modal-sm {
   max-width: 300px;
   }
   }
   
   @media (min-width: 992px) {
   .modal-lg {
   max-width: 800px;
   }
   }
   
   
   
   
   button.close {
   -webkit-appearance: none;
   padding: 0;
   cursor: pointer;
   background: transparent;
   border: 0;
   }
   .modal-open {
   overflow: hidden;
   }
   .modal {
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 1050;
   display: none;
   overflow: hidden;
   -webkit-overflow-scrolling: touch;
   outline: 0;
   }
   .modal.fade .modal-dialog {
   -webkit-transition: -webkit-transform .3s ease-out;
     -o-transition:      -o-transform .3s ease-out;
        transition:         transform .3s ease-out;
   -webkit-transform: translate(0, -25%);
    -ms-transform: translate(0, -25%);
     -o-transform: translate(0, -25%);
        transform: translate(0, -25%);
   }
   .modal.in .modal-dialog {
   -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
     -o-transform: translate(0, 0);
        transform: translate(0, 0);
   }
   .modal-open .modal {
   overflow-x: hidden;
   overflow-y: auto;
   }
   .modal-dialog {
   position: relative;
   width: auto;
   margin: 10px;
   }
   .modal-content {
   position: relative;
   background-color: #fff;
   -webkit-background-clip: padding-box;
        background-clip: padding-box;
   border: 1px solid #999;
   border: 1px solid rgba(0, 0, 0, .2);
   border-radius: 6px;
   outline: 0;
   -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
        box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
   }
   .modal-backdrop {
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 1040;
   background-color: #000;
   }
   .modal-backdrop.fade {
   filter: alpha(opacity=0);
   opacity: 0;
   }
   .modal-backdrop.in {
   filter: alpha(opacity=50);
   opacity: .5;
   }
   .modal-header {
   padding: 15px;
   border-bottom: 1px solid #e5e5e5;
   display:block;
   }
   .modal-header .close {
   margin-top: -2px;
   }
   .modal-title {
   margin: 0;
   line-height: 1.42857143;
   }
   .modal-body {
   position: relative;
   padding: 15px;
   }
   .modal-footer {
   padding: 15px;
   text-align: right;
   border-top: 1px solid #e5e5e5;
   }
   .modal-footer .btn + .btn {
   margin-bottom: 0;
   margin-left: 5px;
   }
   .modal-footer .btn-group .btn + .btn {
   margin-left: -1px;
   }
   .modal-footer .btn-block + .btn-block {
   margin-left: 0;
   }
   .modal-scrollbar-measure {
   position: absolute;
   top: -9999px;
   width: 50px;
   height: 50px;
   overflow: scroll;
   }
   @media (min-width: 768px) {
   .modal-dialog {
   width: 600px;
   margin: 30px auto;
   }
   .modal-content {
   -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
          box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
   }
   .modal-sm {
   width: 300px;
   }
   }
   @media (min-width: 992px) {
   .modal-lg {
   width: 900px;
   }
   }
   
   
   .clearfix:before,
   .clearfix:after,
   .dl-horizontal dd:before,
   .dl-horizontal dd:after,
   .container:before,
   .container:after,
   .container-fluid:before,
   .container-fluid:after,
   .row:before,
   .row:after,
   .form-horizontal .form-group:before,
   .form-horizontal .form-group:after,
   .btn-toolbar:before,
   .btn-toolbar:after,
   .btn-group-vertical > .btn-group:before,
   .btn-group-vertical > .btn-group:after,
   .nav:before,
   .nav:after,
   .navbar:before,
   .navbar:after,
   .navbar-header:before,
   .navbar-header:after,
   .navbar-collapse:before,
   .navbar-collapse:after,
   .pager:before,
   .pager:after,
   .panel-body:before,
   .panel-body:after,
   .modal-header:before,
   .modal-header:after,
   .modal-footer:before,
   .modal-footer:after {
   display: table;
   content: " ";
   }
   .clearfix:after,
   .dl-horizontal dd:after,
   .container:after,
   .container-fluid:after,
   .row:after,
   .form-horizontal .form-group:after,
   .btn-toolbar:after,
   .btn-group-vertical > .btn-group:after,
   .nav:after,
   .navbar:after,
   .navbar-header:after,
   .navbar-collapse:after,
   .pager:after,
   .panel-body:after,
   .modal-header:after,
   .modal-footer:after {
   clear: both;
   }
   .center-block {
   display: block;
   margin-right: auto;
   margin-left: auto;
   }
   .pull-right {
   float: right !important;
   }
   .pull-left {
   float: left !important;
   }`);



    document.body.insertAdjacentHTML("afterbegin", `
 <style id="roawmodalstyle">
.modal-open {
overflow: hidden;
}

.modal {
    font-family: sans-serif;
position: fixed;
top: 50px;
right: 0;
bottom: 0;
left: 0;
z-index: 1050;
display: none;
overflow: hidden;
outline: 0;
}

.modal.fade .modal-dialog {
transition: -webkit-transform 0.3s ease-out;
transition: transform 0.3s ease-out;
transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
-webkit-transform: translate(0, -25%);
     transform: translate(0, -25%);
}

.modal.show .modal-dialog {
-webkit-transform: translate(0, 0);
     transform: translate(0, 0);
}

.modal-open .modal {
overflow-x: hidden;
overflow-y: auto;
}

.modal-dialog {
position: relative;
width: auto;
margin: 10px;
}

.modal-content {
position: relative;
display: -ms-flexbox;
display: flex;
-ms-flex-direction: column;
 flex-direction: column;
background-color: #fff;
background-clip: padding-box;
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 0.3rem;
outline: 0;
}

.modal-backdrop {
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1040;
background-color: #000;
}

.modal-backdrop.fade {
opacity: 0;
}

.modal-backdrop.show {
opacity: 0.5;
}

.modal-header {
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
 align-items: center;
-ms-flex-pack: justify;
 justify-content: space-between;
padding: 15px;
border-bottom: 1px solid #e9ecef;
}

.modal-title {
margin-bottom: 0;
line-height: 1.5;
}

.modal-body {
position: relative;
-ms-flex: 1 1 auto;
 flex: 1 1 auto;
padding: 15px;
}

.modal-footer {
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
 align-items: center;
-ms-flex-pack: end;
 justify-content: flex-end;
padding: 15px;
border-top: 1px solid #e9ecef;
}

.modal-footer > :not(:first-child) {
margin-left: .25rem;
}

.modal-footer > :not(:last-child) {
margin-right: .25rem;
}

.modal-scrollbar-measure {
position: absolute;
top: -9999px;
width: 50px;
height: 50px;
overflow: scroll;
}

@media (min-width: 576px) {
.modal-dialog {
/* max-width: 500px; */
margin: 30px auto;
}
.modal-sm {
max-width: 300px;
}
}

@media (min-width: 992px) {
.modal-lg {
max-width: 800px;
}
}




button.close {
-webkit-appearance: none;
padding: 0;
cursor: pointer;
background: transparent;
border: 0;
}
.modal-open {
overflow: hidden;
}
.modal {
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1050;
display: none;
overflow: hidden;
-webkit-overflow-scrolling: touch;
outline: 0;
}
.modal.fade .modal-dialog {
-webkit-transition: -webkit-transform .3s ease-out;
  -o-transition:      -o-transform .3s ease-out;
     transition:         transform .3s ease-out;
-webkit-transform: translate(0, -25%);
 -ms-transform: translate(0, -25%);
  -o-transform: translate(0, -25%);
     transform: translate(0, -25%);
}
.modal.in .modal-dialog {
-webkit-transform: translate(0, 0);
 -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
     transform: translate(0, 0);
}
.modal-open .modal {
overflow-x: hidden;
overflow-y: auto;
}
.modal-dialog {
position: relative;
width: auto;
margin: 10px;
}
.modal-content {
position: relative;
background-color: #fff;
-webkit-background-clip: padding-box;
     background-clip: padding-box;
border: 1px solid #999;
border: 1px solid rgba(0, 0, 0, .2);
border-radius: 6px;
outline: 0;
-webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
     box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
}
.modal-backdrop {
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1040;
background-color: #000;
}
.modal-backdrop.fade {
filter: alpha(opacity=0);
opacity: 0;
}
.modal-backdrop.in {
filter: alpha(opacity=50);
opacity: .5;
}
.modal-header {
padding: 15px;
border-bottom: 1px solid #e5e5e5;
display:block;
}
.modal-header .close {
margin-top: -2px;
}
.modal-title {
margin: 0;
line-height: 1.42857143;
}
.modal-body {
position: relative;
padding: 15px;
}
.modal-footer {
padding: 15px;
text-align: right;
border-top: 1px solid #e5e5e5;
}
.modal-footer .btn + .btn {
margin-bottom: 0;
margin-left: 5px;
}
.modal-footer .btn-group .btn + .btn {
margin-left: -1px;
}
.modal-footer .btn-block + .btn-block {
margin-left: 0;
}
.modal-scrollbar-measure {
position: absolute;
top: -9999px;
width: 50px;
height: 50px;
overflow: scroll;
}
@media (min-width: 768px) {
.modal-dialog {
width: 600px;
margin: 30px auto;
}
.modal-content {
-webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
       box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
}
.modal-sm {
width: 300px;
}
}
@media (min-width: 992px) {
.modal-lg {
width: 900px;
}
}


.clearfix:before,
.clearfix:after,
.dl-horizontal dd:before,
.dl-horizontal dd:after,
.container:before,
.container:after,
.container-fluid:before,
.container-fluid:after,
.row:before,
.row:after,
.form-horizontal .form-group:before,
.form-horizontal .form-group:after,
.btn-toolbar:before,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:before,
.btn-group-vertical > .btn-group:after,
.nav:before,
.nav:after,
.navbar:before,
.navbar:after,
.navbar-header:before,
.navbar-header:after,
.navbar-collapse:before,
.navbar-collapse:after,
.pager:before,
.pager:after,
.panel-body:before,
.panel-body:after,
.modal-header:before,
.modal-header:after,
.modal-footer:before,
.modal-footer:after {
display: table;
content: " ";
}
.clearfix:after,
.dl-horizontal dd:after,
.container:after,
.container-fluid:after,
.row:after,
.form-horizontal .form-group:after,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:after,
.nav:after,
.navbar:after,
.navbar-header:after,
.navbar-collapse:after,
.pager:after,
.panel-body:after,
.modal-header:after,
.modal-footer:after {
clear: both;
}
.center-block {
display: block;
margin-right: auto;
margin-left: auto;
}
.pull-right {
float: right !important;
}
.pull-left {
float: left !important;
}

 

 .hiddenOpacity {
     opacity: 0;
   }
   .modal-portal * {
     transition:0.3s all !important;
   }
 
   .modal-portal > .modal-dialog > .modal-content >  .modal-body {
     overflow:auto;
     max-height:70vh;
   }
   
   .modal-portal button.right-button {
     -webkit-appearance: none;
     padding: 0;
     cursor: pointer;
     background: 0 0;
     border: 0;
     margin-right: 8px;
 }
 .modal-portal .right-button {
     float: right;
     font-size: 20px;
     font-weight: 700;
     line-height: 1;
     color: #000;
     filter: alpha(opacity=20);
     border: 0px;
 }
   .modal-portal .custom-close {
     opacity: 1;
     font-size:3rem
   }
 
   .border-none > .modal-dialog > .modal-content >  .modal-header {
     border: 0px;

   }
 
   .border-internals > .modal-dialog > .modal-content >  .modal-header {
     padding-bottom: 0px;
   }
 
   .border-internals > .modal-dialog > .modal-content >  .modal-body {
     padding-top: 12px;
   }
 
   .border-internals > .modal-dialog > .modal-content >  .modal-header > .modal-title {
     border-bottom: solid 1px #ccc;
     padding-bottom: 10px;
   }
 
   .border-internals > .modal-dialog > .modal-content >  .modal-footer > .border-footer {
     border-top: solid 1px #ccc;
     padding-top: 10px;
     width:100%;
   }
 
   .border-internals > .modal-dialog > .modal-content >  .modal-footer {
     border: 0px;
   }
 
   .border-none > .modal-dialog > .modal-content >  .modal-footer {
     border: 0px;
   }
 
   .modal-portal .border-none .modal-footer {
     border-top  : 0px;
   }
 
   .modal-100{
     width: 100%;
   }
   .modal-90{
     width: 90%;
   }
   .modal-80{
     width: 80% !important;
   }
   .modal-70{
     width: 70%;
   }
   .modal-60{
     width: 60%;
   }
   .modal-40{
     width: 40%;
   }
   .modal-30{
     width: 30%;
   }
   .modal-20{
     width: 20%;
   }
   .modal-10{
     width: 10%;
   }
 
   .modal-dialog > .modal-content{
     margin-left:5px;
   }
 
   .modal-dialog > .modal-full{
     border:solid 1px #f00;
     margin-left:10px;
   }
 
   .loading-overlay{
     position: absolute;
     width: 100%;
     height: 100%;
     z-index: 1; /* Índice z maior que o conteúdo interno */
   }
 
 
 
   .gradient-text{
     background: -webkit-linear-gradient(45deg, #09009f, #4533eb 80%);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
   }
 
 .hidden-footer .modal-footer {
     display: none;
 }
 
 </style>

`);



    if (typeof ModalPortal != 'undefined') {
        console.log("modal ja existe")
    } else {
        console.log("criando Modal")
        function modalTesting() {
            console.log("etc")
        }
        modalTesting()

        class ModalPortal {
            constructor(configs) {
                this.configs = configs;
                const selector = this.configs?.selector
                const someCallback = this.configs?.someCallback || null;
                if (configs?.debug === true) {
                    this.configs.debug = this.internalDebugger
                }
                if (this.configs?.alert) {
                    this.configs.show = true;
                    this.configs.destroyOnClose = true;
                    this.configs.content = this.alertContent()
                }
                this.configs.id = configs?.id || `modal_${Date.now()}`
                this.configs.size = configs?.size || `md`
                this.configs.title = configs?.title || `<img style="width:24px;background-color:#333;padding:2px;border-radius:5px;" src="img/Logo_LW_Branco.png">`;
                this.configs.loadingTemplate = configs?.loadingTemplate || `<div style='text-align:center;'><span class='gradient-text fa fa-circle-o-notch fa-3x fa-spin'></span></div>`;

                this.createModal();

                if (this.configs?.show == true) {
                    this.show()
                }
                if (configs?.preventCloseDropdown === true) {
                    $(document).on('click', selector, (e) => {
                        e.stopPropagation();
                    });
                }

                //dentro do on do jquery o this é o elemento do dom, usar o self se necessário
                var self = this;
                this.$element.on('show.bs.modal', function (e) {
                    if (self.configs?.debug) { self.configs.debug(self, e, "beforeShow") }
                    if (self.configs?.beforeShow) {
                        self.configs.beforeShow(self, e)
                    }
                })
                this.$element.on('shown.bs.modal', function (e) {
                    if (self.configs?.debug) { self.configs.debug(self, e, "afterShow") }
                    if (self.configs?.afterShow) {
                        self.configs?.afterShow(self, e)
                    }
                })
                this.$element.on('hide.bs.modal', function (e) {
                    if (self.configs?.debug) { self.configs.debug(self, e, "beforeHide") }
                    if (self.configs?.preventClose) {
                        if (typeof self.configs?.preventClose == "function") {
                            self.configs?.preventClose(self, e);
                        }
                        e.preventDefault();
                        return;
                    }
                    if (self.configs?.beforeHide) {
                        self.configs?.beforeHide(self, e)
                    }
                    if (self.configs?.destroyOnClose) {
                        self.destroy()
                    }
                })

                this.$element.on('hidden.bs.modal', function (e) {
                    if (self.configs?.debug) { self.configs.debug(self, e, "afterHide") }
                    if (self.configs?.afterHide) {
                        self.configs?.afterHide(self, e)
                    }
                })
                this.$element.on('loaded.bs.modal', function (e) {
                    if (self.configs?.debug) { self.configs.debug(self, e, "loaded") }
                    if (self.configs?.loaded) {
                        self.configs?.loaded(self, e)
                    }
                })

                return this
            }

            createFooter(footerCallback = null, footerParams = null) {
                if (footerCallback === false) {
                    return "";
                }
                if (typeof footerCallback == 'function') {
                    return footerCallback(this, footerParams);
                }

                if (footerCallback === null) {
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

            createHeader(headerCallback = null, headerParams = null) {
                if (headerCallback === false) {
                    return "";
                }
                if (typeof headerCallback == 'function') {
                    return headerCallback(this, headerParams);
                }

                if (headerCallback === null) {

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

            createModal() {
                let footer = this.createFooter(this.configs?.footer);
                let header = this.createHeader(this.configs?.header);
                document.body.insertAdjacentHTML("beforeend", `
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
                this.element.addEventListener("click", (e) => {
                    let target = e.target
                    let action = target.getAttribute("action");
                    let param = target.getAttribute("param") || target.value || target.innerText;
                    if (this[action]) {
                        if (this.configs?.debug) { this.configs.debug(this, e, { action, param }) }
                        this[action](param);
                    }
                })

                if (this.configs?.headerButtons == "default") {
                    this.configs.headerButtons = [

                        {
                            className: "right-button",
                            text: `<span class="fa fa-ellipsis-h"></span>`,
                            onclick: (modal, event) => {
                                console.log("er", modal)
                                modal.toggleButtonVisibility()
                            }
                        }, {
                            className: "hiddenOpacity hidden modalHeaderButtons right-button",
                            text: `<span class="fa fa-car"></span>`,
                            onclick: () => { }
                        }, {
                            className: "hiddenOpacity hidden modalHeaderButtons right-button",
                            text: `<span class="fa fa-database"></span>`,
                            onclick: () => { }
                        }
                        , {
                            className: "hiddenOpacity hidden modalHeaderButtons right-button",
                            text: `<span class="fa fa-table"></span>`,
                            onclick: () => { }
                        }
                        , {
                            className: "hiddenOpacity hidden modalHeaderButtons right-button",
                            text: `<span class="fa fa-columns"></span>`,
                            onclick: (modal, event) => {
                                modal.loading();
                                setTimeout(() => {
                                    modal.setContent(mockzao);
                                    modal.setSize("70");
                                    modal.loading(false);
                                }, 2000)

                            }
                        }
                        , {
                            className: "hiddenOpacity hidden modalHeaderButtons right-button",
                            text: `<span class="fa fa-eye"></span>`,
                            onclick: (modal, event) => {
                                modal.element.classList.toggle('border-internals');
                                event.target.classList.toggle('fa-eye-slash');
                                event.target.classList.toggle('fa-eye');
                            }
                        }
                    ]
                }

                if (Array.isArray(this.configs?.footerButtons)) {
                    this.addButton(".border-footer", this.configs?.footerButtons);
                }

                if (Array.isArray(this.configs?.headerButtons)) {
                    this.addButton(".header-buttons", this.configs?.headerButtons);
                }

                if (typeof this.configs?.help == "function") {
                    this.addButton(".header-buttons", [{
                        className: "right-button",
                        text: `<span class="fa fa-question-circle"></span>`,
                        onclick: this.configs.help
                    }]);
                }

                if (typeof this.configs?.debug == "function") {
                    this.addButton(".header-buttons", [{
                        className: "right-button",
                        text: `<span class="fa fa-bug"></span>`,
                        onclick: this.configs.debug
                    }]);
                }
            }

            addButton(target, buttons) {
                let newButtons = buttons.map((buttonObj => {
                    if (this.configs?.debug) { this.configs.debug(this, buttonObj, "addButton") }
                    let buttonElement = document.createElement(buttonObj.tagName || "button");
                    if (buttonObj?.onclick) {
                        buttonElement.addEventListener("click", (e) => {
                            buttonObj.onclick(this, e);
                        })
                    }
                    if (buttonObj?.id) {
                        buttonElement.id = buttonObj.id;
                    }
                    if (buttonObj?.className) {
                        buttonElement.className = buttonObj.className;
                    }
                    buttonElement.innerHTML = buttonObj.text || buttonObj.innerHTML;
                    return buttonElement;
                }))
                newButtons.forEach((i) => {
                    let elementPosition = i?.position || "beforeend";
                    this.element.querySelector(target).insertAdjacentElement(elementPosition, i);
                })
            }

            show() {
                this.$element.modal("show")
            }

            hide() {
                this.$element.modal("hide")
            }

            setTitle(html) {
                this.title.innerHTML = html
            }

            setHeader(html) {
                this.header.innerHTML = html
            }

            setFooter(html) {
                this.footer.innerHTML = html
            }

            setContent(html) {
                this.body.innerHTML = html;
            }

            setBody(html) {
                this.body.innerHTML = html;
            }

            alertContent() {
                let alertType = {
                    success: `<span class="fa fa-check fa-3x" style="color:#4caf50"></span>`,
                    warning: `<span class="fa fa-exclamation fa-3x" style="color:#ffc107"></span>`,
                    error: `<span class="fa fa-times fa-3x" style="color:#f44336"></span>`,
                    info: `<span class="fa fa-info fa-3x" style="color:#31708f"></span>`,
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

            loading(state = true) {
                if (state == "false") {
                    state = false;
                }

                let timeout = parseInt(state);

                if (state) {
                    this.element.querySelector(".modal-body").style.opacity = "0.2";
                    this.element.querySelector(".modal-body").style.overflow = "hidden";
                    if (!this.element.querySelector(".loading-overlay")) {
                        this.element.querySelector(".modal-body").insertAdjacentHTML("afterbegin", `
                <div class="loading-overlay"></div>
                `);
                    }
                    this.element.querySelector(".loading-overlay").innerHTML = `${this.configs.loadingTemplate}`;
                    this.element.querySelector(".loading-overlay").style.opacity = "1";

                    if (!isNaN(timeout)) {
                        setTimeout(() => {
                            this.loading(false)
                        }, timeout);
                    }
                } else {
                    this.element.querySelector(".modal-body").style.opacity = "1";
                    this.element.querySelector(".loading-overlay").style.opacity = "0";
                    setTimeout(() => {
                        this.element.querySelector(".loading-overlay").remove();
                        this.element.querySelector(".modal-body").style.overflow = "auto";
                    }, 300)
                }

            }

            setBorder(param) {
                if (param == "internal") {
                    this.element.classList.add("border-none")
                    this.element.classList.add("border-internals")
                }
                if (param == "classic") {
                    this.element.classList.remove("border-none")
                    this.element.classList.remove("border-internals")
                }
                console.log(param)
            }

            setSize(newSize) {
                if (newSize == "full") {
                    this.element.querySelector(".modal-dialog").className = `modal-dialog modal-${newSize}`;
                    this.element.querySelector(".modal-content").className = `modal-content`;
                } else {
                    this.element.querySelector(".modal-dialog").className = `modal-dialog modal-${newSize}`;
                    this.element.querySelector(".modal-content").className = `modal-content`;
                }
            }

            destroy() {
                DestroyDom.all(`#${this.configs.id}`);
                if (this.configs?.debug) { this.configs.debug(this, "Destroy") }
            }

            toggleButtonVisibility(modal) {
                var start = 0;
                this.header.querySelectorAll("button.modalHeaderButtons").forEach((btn) => {
                    start += 10;
                    if (btn.classList.contains("hidden")) {
                        setTimeout(() => { btn.classList.toggle("hidden") }, start)
                        setTimeout(() => { btn.classList.toggle("hiddenOpacity") }, start + 100)
                    } else {
                        setTimeout(() => { btn.classList.toggle("hiddenOpacity") }, start)
                        setTimeout(() => { btn.classList.toggle("hidden") }, start + 100)
                    }
                })
            }

            internalDebugger(...args) {
                let debug = console;
                debug.warn("Debug", args)

            }

        }

        class DestroyDom {

            //precisava criar alguns loops de removeListeners de click,change,load,keys,etc, pois o dom é removido mas events ficam na memoria
            //existe uma certa complexidade em remover eventListeners nativamente, alguns loops aninhados, o jquery ajuda um pouco
            //na verdade é impossivel deletar objetos no js, apenas a referencia é deletada, 
            //se nao houver mais referencia o garbage collector termina o serviço
            //porem tem casos em que outras referencias nao obvias mantem o objeto vivo, outras referencias ao objeto que o dev não sabe que existe
            //a principio é inefetvivo deletar, uma tentativa seria guardar a referencia do new MinhaClasse em uma variavel e depois setar ela como null, mas precisaria criar um "gerenciador externo de instancias"
            //isso aqui é uma tentativa de limpar memoria, ela limpa pelo menos algumas coisas, por mais que fiquem rastros ocupando memoria de forma invisivel

            static all(selector) {
                $(selector).off()
                let childrens = document.querySelector(selector)
                while (childrens.lastElementChild) {
                    childrens.removeChild(childrens.lastElementChild);
                }
                $(selector).remove()
            }
        }


       
    }















}, 300)

















if (typeof ModalPortal != 'undefined') {

    window.portalDocs = new ModalPortal({
        id: "portaldocs", //id do elemento principal da modal
        title: "Documentation Box",
        size: "80",
        show: !!localStorage["portaldocs"], //inicia ja mostrando em tela
        headerButtons: "default",
        footerButtons: [
            {
                text: "Acessar",
                className: "btn btn-primary",
                onclick: () => { }
            }
        ],
        content: mockzao,
        onCreate: (modal) => {
            modal.loading(100)
            $.toaster("", "criou modal", "success")
            modal.element.addEventListener("keyup", async (e) => {
                if (e.target.id == "searchbox") {
                    const metodo = document.querySelector("input[name=searchFunction]:checked").value
                    const parametro = document.querySelector("#searchbox").value
                    await modal.configs[metodo](modal, parametro)
                }
            })
            document.body.insertAdjacentHTML("beforeend", `
          <button type="button" data-toggle="modal" data-target="#${modal.configs.id}" style="position:fixed;right:5px;bottom:100px;width:40px;height:40px;border-radius:50px;border:solid 3px #90adff; color:#90adff; background-color:#fff;">
            <span class="fa fa-book"></span>
          </button>
          `)
        },
        beforeShow: (modal) => {
            modal.loading(1000)
            $.toaster("", "mostrar", "info")
        },
        afterShow: (modal) => {
            $.toaster("", "apareceu", "success")
        },
        beforeHide: (modal) => {
            $.toaster("", "fechar", "info")
        },
        afterHide: (modal) => {
            $.toaster("", "fechou", "success")
        },
        buscarMenu: (modal, event) => {
            menuFind(document.querySelector("#searchbox").value, ".searchresult")
        },
        toggleMinMax: (modal, event, parametro) => {
            event.target.classList.toggle("fa-minus")
            event.target.classList.toggle("fa-plus")
            let viewArea = document.querySelector(`.${parametro}`)
            viewArea.classList.toggle("hidden")

        },
        icones: (modal, event, parametro) => {
            let video = `<div class="embed-responsive embed-responsive-16by9"><iframe width="100%" height="806" src="https://www.youtube.com/embed/lYvYWJxvxHg" title="LW Tecnologia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`
            document.querySelector(".searchresult").innerHTML = icones


        },
        alterarCliente: debounce(async (modal, parametro) => {

            var host = window.location.host;
            var id_cliente = $("#searchbox").val()
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
        }, 600),
        buscarAutoInfracao: debounce(async (modal, parametro) => {
            console.log("debounced", parametro)
            const data = new FormData();
            data.append("post", "buscarMultaPorAuto");
            data.append("auto", parametro);
            modal.loading()
            const request = await fetch("json/manutencao_alterar_auto_infracao.php", {
                "body": data,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            });
            modal.loading(false)
            if (!request.ok) {
                modal.element.querySelector(".searchresult").innerHTML = `<div class="alert alert-warning">Erro</div>`;

                new ModalPortal({
                    alert: "warning",
                    title: "ops",
                    message: "houve um erro"
                });

                return;
            }
            const response = await request.json();
            console.warn("debounced response")
            if (response?.erro == "1") {
                modal.element.querySelector(".searchresult").innerHTML = `<div class="alert alert-warning">${response?.descricao}</div>`;
                return;
            }
            console.table(response.dados)
            const autoEncontrado = response.dados[0]
            let result = []
            for (key in autoEncontrado) {
                if (key == "link") {
                    autoEncontrado[key] = `<a href="./MultaDetalhada.php?p=${autoEncontrado[key]}" target="_blank">link para multa detalhada</a>`
                }
                result.push(`<tr><td>${key}</td> <td>${autoEncontrado[key]}</td></tr>`)
            }
            modal.element.querySelector(".searchresult").innerHTML = `<table>${result.join("")}</table>`;
        }, 600)
    })





    window.ferramentas = new ModalPortal({
        id: "portaltools", //id do elemento principal da modal
        title: "ToolBox",
        size: "80",
        show: !!localStorage["portaldocs"], //inicia ja mostrando em tela
        headerButtons: "default",
        footerButtons: [
            {
                text: "Acessar",
                className: "btn btn-primary",
                onclick: () => { }
            }
        ],
        content: mockzao,
        onCreate: (modal) => {
            modal.loading(100)
            $.toaster("", "criou modal", "success")
            modal.element.addEventListener("keyup", async (e) => {
                if (e.target.id == "searchbox") {
                    const metodo = document.querySelector("input[name=searchFunction]:checked").value
                    const parametro = document.querySelector("#searchbox").value
                    await modal.configs[metodo](modal, parametro)
                }
            })
            document.body.insertAdjacentHTML("beforeend", `
      <button type="button" data-toggle="modal" data-target="#${modal.configs.id}" style="position:fixed;right:5px;bottom:50px;width:40px;height:40px;border-radius:50px;border:solid 3px #f0ad4e; color:#f0ad4e; background-color:#fff;">
        <span class="fa fa-car"></span>
      </button>
      `)
        },
        beforeShow: (modal) => {
            modal.loading(1000)
        },
        afterShow: (modal) => {
        },
        beforeHide: (modal) => {
        },
        afterHide: (modal) => {
        },
        buscarMenu: (modal, event) => {
            menuFind(document.querySelector("#searchbox").value, ".searchresult")
        },
        toggleMinMax: (modal, event, parametro) => {
            event.target.classList.toggle("fa-minus")
            event.target.classList.toggle("fa-plus")
            let viewArea = document.querySelector(`.${parametro}`)
            viewArea.classList.toggle("hidden")

        },
        icones: (modal, event, parametro) => {
            let video = `<div class="embed-responsive embed-responsive-16by9"><iframe width="100%" height="806" src="https://www.youtube.com/embed/lYvYWJxvxHg" title="LW Tecnologia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`
            document.querySelector(".searchresult").innerHTML = icones


        },
        alterarCliente: debounce(async (modal, parametro) => {

            var host = window.location.host;
            var id_cliente = $("#searchbox").val()
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
        }, 600),
        buscarAutoInfracao: debounce(async (modal, parametro) => {
            console.log("debounced", parametro)
            const data = new FormData();
            data.append("post", "buscarMultaPorAuto");
            data.append("auto", parametro);
            modal.loading()
            const request = await fetch("json/manutencao_alterar_auto_infracao.php", {
                "body": data,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            });
            modal.loading(false)
            if (!request.ok) {
                modal.element.querySelector(".searchresult").innerHTML = `<div class="alert alert-warning">Erro</div>`;

                new ModalPortal({
                    alert: "warning",
                    title: "ops",
                    message: "houve um erro"
                });

                return;
            }
            const response = await request.json();
            console.warn("debounced response")
            if (response?.erro == "1") {
                modal.element.querySelector(".searchresult").innerHTML = `<div class="alert alert-warning">${response?.descricao}</div>`;
                return;
            }
            console.table(response.dados)
            const autoEncontrado = response.dados[0]
            let result = []
            for (key in autoEncontrado) {
                if (key == "link") {
                    autoEncontrado[key] = `<a href="./MultaDetalhada.php?p=${autoEncontrado[key]}" target="_blank">link para multa detalhada</a>`
                }
                result.push(`<tr><td>${key}</td> <td>${autoEncontrado[key]}</td></tr>`)
            }
            modal.element.querySelector(".searchresult").innerHTML = `<table>${result.join("")}</table>`;
        }, 600)
    })

}


