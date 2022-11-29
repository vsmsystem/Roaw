const fullHTML = `
	<div id="sfwdt80d3dd" class="sf-toolbar" style="display: block;" data-sfurl="/app_dev.php/_wdt/80d3dd"><!-- START of Symfony Web Debug Toolbar -->
    <div id="sfMiniToolbar-80d3dd" class="sf-minitoolbar" data-no-turbolink="" style="display: none;">
        <a href="javascript:void(0);" title="Show Symfony toolbar" tabindex="-1" accesskey="D" onclick="
            var elem = this.parentNode;
            if (elem.style.display == 'none') {
                document.getElementById('sfToolbarMainContent-80d3ddxxx').style.display = 'none';
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
			<span class="sf-toolbar-status sf-toolbar-status-green">4330641172</span>
			<span class="sf-toolbar-label"> Tec. </span>
			<span class="sf-toolbar-value sf-toolbar-info-piece-additional">Jose Silva</span>
		</div>
    <!-- </a> -->       
		<div class="sf-toolbar-info" style="left: 0px;">        
			<div class="sf-toolbar-info-group">
				<div class="sf-toolbar-info-piece">
					<b>Atividade</b>
					<span>1234567</span>
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
	<div class="sf-toolbar-block sf-toolbar-block-twig sf-toolbar-status-normal ">
           
	<div class="sf-toolbar-icon">      
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<path fill="#aaaaaa" d="M54.621,8.908c-1.974,0-3.575,1.602-3.575,3.578c0,1.976,1.602,3.578,3.575,3.578c18.493,0,33.54,15.047,33.54,33.543  c0,18.495-15.047,33.542-33.54,33.542c-16.971,0-31.03-12.676-33.23-29.056l2.504,2.505c0.699,0.699,1.614,1.047,2.53,1.047  c0.916,0,1.831-0.348,2.53-1.047c1.397-1.398,1.397-3.663,0-5.061l-8.922-8.922c-1.397-1.397-3.663-1.397-5.06,0l-8.922,8.922  c-1.397,1.397-1.397,3.662,0,5.061c1.397,1.396,3.663,1.396,5.061,0l3.012-3.012c2.007,20.579,19.403,36.719,40.498,36.719  c22.439,0,40.697-18.258,40.697-40.698C95.318,27.166,77.061,8.908,54.621,8.908z"/>
<path fill="#aaaaaa" d="M41.141,69.414c-0.971,0-1.941-0.369-2.682-1.11c-1.481-1.481-1.482-3.883-0.001-5.364l11.856-11.86V27.108  c0-2.095,1.698-3.793,3.791-3.793c2.094,0,3.79,1.698,3.79,3.793v25.541c0,1.006-0.398,1.97-1.109,2.682L43.823,68.303  C43.083,69.043,42.112,69.414,41.141,69.414z"/>
<path fill="#aaaaaa" d="M81.644,51.94h-3.926c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5h3.926c1.381,0,2.5,1.119,2.5,2.5  S83.024,51.94,81.644,51.94z"/>
<path fill="#aaaaaa" d="M72.316,71.539c-0.64,0-1.279-0.244-1.768-0.732l-2.776-2.776c-0.977-0.977-0.977-2.559,0-3.535s2.559-0.977,3.535,0  l2.776,2.776c0.977,0.977,0.977,2.559,0,3.535C73.596,71.295,72.956,71.539,72.316,71.539z"/>
<path fill="#aaaaaa" d="M52.719,79.657c-1.381,0-2.5-1.119-2.5-2.5V73.23c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5v3.927  C55.219,78.538,54.1,79.657,52.719,79.657z"/>
<path fill="#aaaaaa" d="M69.541,35.117c-0.64,0-1.279-0.244-1.768-0.732c-0.977-0.977-0.977-2.559,0-3.536l2.775-2.776  c0.975-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.559,0,3.536l-2.775,2.776C70.821,34.873,70.181,35.117,69.541,35.117z"/></svg>	


        <span onmouseover="tmaactivate();" id="tmaclock" class="sf-toolbar-value">00:00:00</span>

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

				<span class="sf-toolbar-value">Checklists</span>
				<span class="sf-toolbar-label">3</span>
			</div>
		       
		<div class="sf-toolbar-info" style="left: 0px;">        
			<div class="sf-toolbar-info-piece">
				<b>Manobra Unica</b>
				<span>Preenchido</span>
			</div>
			<div class="sf-toolbar-info-piece">
				<b>SAS</b>
				<span>Preenchido</span>
			</div>
			<div class="sf-toolbar-info-piece">
				<b>Wisetool</b>
				<span>Preenchido</span>
			</div>
		</div>
	</div>
    <div class="sf-toolbar-block sf-toolbar-block-ajax sf-toolbar-status-normal " style="display: ;">
            <div class="sf-toolbar-icon">        

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<path fill="#AAAAAA" d="M512,480v32H32H0v-32V0h32v480H512z M448,0L322.031,20.594l30.281,37.031l-266.438,218l20.25,24.75l266.469-218l30.281,37   L448,0z M413.219,182.563L384,146.844V448h64V90.531L413.219,182.563z M192,271.469V448h64V219.125L192,271.469z M101.609,345.406   L96,338.531V448h64V297.625L101.609,345.406z M288,192.938V448h64V140.563L288,192.938z"/>
</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
</svg>

        <span class="sf-toolbar-ajax-requests sf-toolbar-value">73%</span>
		<span class="sf-toolbar-label">[ 07:26 ]</span>
    </div>
        <div class="sf-toolbar-info">        
		<div class="sf-toolbar-info-piece">
            <b class="sf-toolbar-ajax-info"></b>
        </div>
        <div class="sf-toolbar-info-piece">
            <table class="sf-toolbar-ajax-requests">
                <thead>
                    <tr>
                        <th>RC</th>
                        <th>Instancia</th>
                        <th>Atividade</th>
                        <th>Tipo</th>
                        <th>Inicio</th>
                        <th>Fim</th>
						<th>Tempo</th>
                    </tr>
                </thead>
                <tbody class="sf-toolbar-ajax-request-list">
                <tbody>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>4100001111</td>
                        <td><b>23456798</b></td>
                        <td><b>Manobra</b></td>
                        <td><b>13:21</b></td>
                        <td><b>13:29</b></td>
						<td><b>00:08</b></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>4100002222</td>
                        <td><b>23456798</b></td>
						<td><b>Manobra</b></td>
                        <td><b>13:29</b></td>
                        <td><b>13:35</b></td>
						<td><b>00:06</b></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>4100003333</td>
                        <td><b>23456798</b></td>
						<td><b>Manobra</b></td>
                        <td><b>13:35</b></td>
                        <td><b>13:46</b></td>
						<td><b>00:11</b></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>4100004444</td>
                        <td><b>23456798</b></td>
						<td><b>Manobra</b></td>
                        <td><b>13:35</b></td>
                        <td><b>13:46</b></td>
						<td><b>00:11</b></td>
                    </tr>
                        <td><input type="checkbox" /></td>
                        <td>4100005555</td>
                        <td><b>23456798</b></td>
						<td><b>Manobra</b></td>
                        <td><b>13:35</b></td>
                        <td><b>13:46</b></td>
						<td><b>00:11</b></td>
                    </tr>
                        <td><input type="checkbox" /></td>
                        <td>4100006666</td>
                        <td><b>23456798</b></td>
						<td><b>Manobra</b></td>
                        <td><b>13:35</b></td>
                        <td><b>13:46</b></td>
						<td><b>00:11</b></td>
                    </tr>
                        <td><input type="checkbox" /></td>
                        <td>4100007777</td>
                        <td><b>23456798</b></td>
						<td><b>Manobra</b></td>
                        <td><b>13:35</b></td>
                        <td><b>13:46</b></td>
						<td><b>00:11</b></td>
                    </tr>
                        <td><input type="checkbox" /></td>
                        <td>4100008888</td>
                        <td><b>23456798</b></td>
						<td><b>Manobra</b></td>
                        <td><b>13:35</b></td>
                        <td><b>13:46</b></td>
						<td><b>00:11</b></td>
                    </tr>
                        <td><input type="checkbox" /></td>
                        <td>4100009999</td>
                        <td><b>23456798</b></td>
						<td><b>Manobra</b></td>
                        <td><b>13:35</b></td>
                        <td><b>13:46</b></td>
						<td><b>00:11</b></td>
                    </tr>
                        <td><input type="checkbox" /></td>
                        <td>4111110000</td>
                        <td><b>23456798</b></td>
						<td><b>Manobra</b></td>
                        <td><b>13:35</b></td>
                        <td><b>13:46</b></td>
						<td><b>00:11</b></td>
                    </tr>
                        <td><input type="checkbox" /></td>
                        <td>4111112345</td>
                        <td><b>23456798</b></td>
						<td><b>Manobra</b></td>
                        <td><b>13:35</b></td>
                        <td><b>13:46</b></td>
						<td><b>00:11</b></td>
                    </tr>
                        <td><input type="checkbox" /></td>
                        <td>4100004673</td>
                        <td><b>23456798</b></td>
						<td><b>Manobra</b></td>
                        <td><b>13:35</b></td>
                        <td><b>13:46</b></td>
						<td><b>00:11</b></td>
                    </tr>
                </tbody>
				</tbody>
            </table>
        </div>
		<div class="sf-toolbar-info-group">
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
                <span class="sf-toolbar-status sf-toolbar-status-green">Yes</span>
            </div>

                        <div class="sf-toolbar-info-piece">
                <b>Token class</b>
                <span><abbr title="Symfony\Component\Security\Core\Authentication\Token\AnonymousToken">AnonymousToken</abbr></span>
            </div>
                                    </div>
</div>


                    
    
      




                
        
        
        
        
    <div class="sf-toolbar-block sf-toolbar-block-config sf-toolbar-status-normal sf-toolbar-block-right">
         
	<div class="sf-toolbar-icon">                    
		<span class="sf-toolbar-label">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
			<path d="M166.156,512h-41.531c-7.375-0.031-20.563-8.563-20.938-8.906C37.438,437.969,0,348.906,0,255.938  C0,162.719,37.656,73.375,104.281,8.219C104.313,8.188,117.25,0,124.625,0h41.531c15.219,0,33.25,11.125,40.063,24.781l2.906,5.844  c6.781,13.594,6.188,35.563-1.344,48.75l-27.906,48.813c-7.563,13.219-26.188,24.25-41.406,24.25H110.75  c-36.813,64-36.813,143.094-0.031,207.125h27.75c15.219,0,33.844,11.031,41.406,24.25l27.875,48.813  c7.531,13.188,8.156,35.094,1.375,48.781l-2.906,5.844C199.375,500.844,181.375,512,166.156,512z M512,128v256  c0,35.344-28.656,64-64,64H244.688c-1.25-11.219-3.969-22.156-9.156-31.25l-27.875-48.813  c-13.406-23.406-42.469-40.375-69.188-40.375h-8.156c-20.188-45.438-20.188-97.719,0-143.125h8.156  c26.719,0,55.781-16.969,69.188-40.375l27.906-48.813c5.188-9.094,7.906-20.063,9.156-31.25H448C483.344,64,512,92.656,512,128z   M328,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S328,381.25,328,368z M328,304c0-13.25-10.75-24-24-24  s-24,10.75-24,24s10.75,24,24,24S328,317.25,328,304z M328,240c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24  S328,253.25,328,240z M392,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S392,381.25,392,368z M392,304  c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S392,317.25,392,304z M392,240c0-13.25-10.75-24-24-24s-24,10.75-24,24  s10.75,24,24,24S392,253.25,392,240z M456,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S456,381.25,456,368z M456,304  c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S456,317.25,456,304z M456,240c0-13.25-10.75-24-24-24s-24,10.75-24,24  s10.75,24,24,24S456,253.25,456,240z M456,144c0-8.844-7.156-16-16-16H296c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h144  c8.844,0,16-7.156,16-16V144z"/>
			</svg>

		</span>
        <span class="sf-toolbar-value">Avaya</span>
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
				<b>Controles</b>
				<span class="sf-toolbar-status">Logar</span>
				<span class="sf-toolbar-status">Deslogar</span>
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


document.body.appendChild(fullHTML);

/*<![CDATA[*/
Sfjs = (function() {

    "use strict";
    var classListIsSupported = 'classList' in document.documentElement;
    if (classListIsSupported) {
        var hasClass = function(el, cssClass) {
            return el.classList.contains(cssClass);
        };
        var removeClass = function(el, cssClass) {
            el.classList.remove(cssClass);
        };
        var addClass = function(el, cssClass) {
            el.classList.add(cssClass);
        };
        var toggleClass = function(el, cssClass) {
            el.classList.toggle(cssClass);
        };
    } else {
        var hasClass = function(el, cssClass) {
            return el.className.match(new RegExp('\\b' + cssClass + '\\b'));
        };
        var removeClass = function(el, cssClass) {
            el.className = el.className.replace(new RegExp('\\b' + cssClass + '\\b'), ' ');
        };
        var addClass = function(el, cssClass) {
            if (!hasClass(el, cssClass)) {
                el.className += " " + cssClass;
            }
        };
        var toggleClass = function(el, cssClass) {
            hasClass(el, cssClass) ? removeClass(el, cssClass) : addClass(el, cssClass);
        };
    }
    var noop = function() {},
        collectionToArray = function(collection) {
            var length = collection.length || 0,
                results = new Array(length);
            while (length--) {
                results[length] = collection[length];
            }
            return results;
        },
        profilerStorageKey = 'sf2/profiler/',
        request = function(url, onSuccess, onError, payload, options) {
            var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            options = options || {};
            options.maxTries = options.maxTries || 0;
            xhr.open(options.method || 'GET', url, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.onreadystatechange = function(state) {
                if (4 !== xhr.readyState) {
                    return null;
                }
                if (xhr.status == 404 && options.maxTries > 1) {
                    setTimeout(function() {
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
        getPreference = function(name) {
            if (!window.localStorage) {
                return null;
            }
            return localStorage.getItem(profilerStorageKey + name);
        },
        setPreference = function(name, value) {
            if (!window.localStorage) {
                return null;
            }
            localStorage.setItem(profilerStorageKey + name, value);
        },
        requestStack = [],
        extractHeaders = function(xhr, stackElement) { /* Here we avoid to call xhr.getResponseHeader in order to */ /* prevent polluting the console with CORS security errors */
            var allHeaders = xhr.getAllResponseHeaders();
            var ret;
            if (ret = allHeaders.match(/^x-debug-token:\s+(.*)$/im)) {
                stackElement.profile = ret[1];
            }
            if (ret = allHeaders.match(/^x-debug-token-link:\s+(.*)$/im)) {
                stackElement.profilerUrl = ret[1];
            }
        },
        renderAjaxRequests = function() {
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
        addEventListener = function(element, eventName, callback) {
            element.attachEvent('on' + eventName, callback);
        };
    } else {
        addEventListener = function(element, eventName, callback) {
            element.addEventListener(eventName, callback, false);
        };
    }
    if (window.XMLHttpRequest && XMLHttpRequest.prototype.addEventListener) {
        var proxied = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
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
                this.addEventListener('readystatechange', function() {
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
        load: function(selector, url, onSuccess, onError, options) {
            var el = document.getElementById(selector);
            if (el && el.getAttribute('data-sfurl') !== url) {
                request(url, function(xhr) {
                    el.innerHTML = xhr.responseText;
                    el.setAttribute('data-sfurl', url);
                    removeClass(el, 'loading');
                    (onSuccess || noop)(xhr, el);
                }, function(xhr) {
                    (onError || noop)(xhr, el);
                }, '', options);
            }
            return this;
        },
        toggle: function(selector, elOn, elOff) {
            var tmp = elOn.style.display,
                el = document.getElementById(selector);
            elOn.style.display = elOff.style.display;
            elOff.style.display = tmp;
            if (el) {
                el.style.display = 'none' === tmp ? 'none' : 'block';
            }
            return this;
        },
        createTabs: function() {
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
                    tabNavigation[j].addEventListener('click', function(e) {
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
        createToggles: function() {
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
                Sfjs.addEventListener(toggles[i], 'click', function(e) {
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
Sfjs.addEventListener(window, 'load', function() {
    Sfjs.createTabs();
    Sfjs.createToggles();
}); /*]]>*/



// =================================================================



/*<![CDATA[*/
(function() {
    Sfjs.load('sfwdt80d3dd', '/app_dev.php/_wdt/80d3dd', function(xhr, el) {
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
            toolbarBlocks[i].onmouseover = function() {
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
    }, function(xhr) {
        if (xhr.status !== 0) {
            confirm('An error occurred while loading the web debug toolbar (' + xhr.status + ': ' + xhr.statusText + ').\n\nDo you want to open the profiler?') && (window.location = '/app_dev.php/_profiler/80d3dd');
        }
    }, {
        'maxTries': 5
    });
})(); /*]]>*/



