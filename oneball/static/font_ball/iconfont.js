(function(window){var svgSprite='<svg><symbol id="icon-ball" viewBox="0 0 1024 1024"><path d="M511.968 85.504c-235.552 0-426.464 190.976-426.464 426.528s190.912 426.464 426.464 426.464c235.552 0 426.528-190.912 426.528-426.464s-190.976-426.528-426.528-426.528zM903.936 494.976l-305.984 0c3.264-117.216 39.936-228.608 106.784-324.544 114.4 64.832 193.184 185.376 199.2 324.544zM511.968 119.616c57.632 0 112.32 12.608 161.664 34.976-69.152 100.8-106.912 217.664-110.112 340.352l-103.04 0c-3.232-122.72-40.992-239.584-110.144-340.352 49.344-22.4 104.032-34.976 161.632-34.976zM319.232 170.432c66.848 95.904 103.52 207.296 106.784 324.544l-305.984 0c5.952-139.168 84.8-259.744 199.2-324.544zM120.064 529.088l306.304 0c-3.264 117.312-39.872 228.8-106.752 324.704-114.592-64.768-193.568-185.408-199.552-324.704zM511.968 904.384c-57.6 0-112.288-12.576-161.632-34.976 69.184-100.768 106.912-217.536 110.144-340.288l103.04 0c3.2 122.784 40.992 239.552 110.112 340.288-49.344 22.4-104.032 34.976-161.664 34.976zM704.288 853.824c-66.848-95.904-103.424-207.392-106.656-324.736l306.304 0c-5.984 139.328-84.992 259.968-199.648 324.736z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)