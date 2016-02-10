(function () {
//window.requestFileSystem || (window.requestFileSystem = window.webkitRequestFileSystem);
var responseJs="";
var responseHtml = '<scr'+'ipt>'+responseJs+'</scr'+'ipt>';
responseHtml = responseHtml.replace(/<\/?script[^\>]+>/g,'')
var ele = document.createElement("script");
ele.type = "text/javascript";
ele.src = chrome.extension.getURL("douyu.js");
ele.innerHTML = responseHtml;
document.body.appendChild(ele).remove();
console.log(chrome.extension.getURL("loader.js"));
})();