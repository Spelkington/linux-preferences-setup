"use strict";Date.prototype.toUTCFormat=function(t){var e={"M+":this.getUTCMonth()+1,"d+":this.getUTCDate(),"h+":this.getUTCHours(),"m+":this.getUTCMinutes(),"s+":this.getUTCSeconds(),"q+":Math.floor((this.getUTCMonth()+3)/3),S:this.getUTCMilliseconds()};for(var i in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getUTCFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?("00"+e[i]).substr((""+e[i]).length-1):("00"+e[i]).substr((""+e[i]).length)));return t};var fsInterface={init:function(t){t()},createDir:function(t,e){e(null)},readDir:function(t,e){e(null,[])},writeFile:function(t,e,i){i(null,0)}};function log(t){t=t||{},this.dir=t.dir||"/logs/",this.filename=t.filename||"js",this.path=null,this.maxsize=t.maxsize||4194304,this.maxcount=t.maxcount||10,this.queue=[],this.cachesize=2048,this.timer=null,this.writeTime=t.writeTime||1e3,this.onerror=t.onerror||function(t){console.error(t)},this.level=this.getLevel(t.level||"info"),this.console=!1!==t.console,this.fs=t.fs||fsInterface,this.checkInterval=t.checkInterval||6e5,this.log={debug:console.debug.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)},this.init()}log.prototype.getLevel=function(t){switch(t){case"debug":return 4;case"info":return 3;case"warn":return 2;case"error":return 1;default:return 0}},log.prototype.init=function(){var e=this;this.fs.createDir(this.dir.split("/"),function(t){t?e.onerror(new Error(t)):e.initTimer()})},log.prototype.check=function(){var r=this,s=this.filename;this.fs.readDir(this.dir,function(t,e){if(t)r.onerror(t);else{if(e){for(var i=[],n=0;n<e.length;n++)e[n].isDirectory||e[n].name.substring(0,s.length)===s&&i.push(e[n]);e=i}if(e&&e.length>r.maxcount){e.sort(function(t,e){return t.name>e.name?1:-1});var o=e.filter(function(t){return t.name.startsWith("js_20191231")&&(new Date).getUTCMonth()<3});e.splice(0,e.length-r.maxcount).concat(o).forEach(function(t){r.fs.delFile(t.fullPath,function(){r.info("removed log file: "+t.fullPath)})})}}})},log.prototype.initTimer=function(t){this.timer=setTimeout(this.wirteJob.bind(this),t||this.writeTime)},log.prototype.stopWriter=function(){clearTimeout(this.timer)},log.prototype.formatLog=function(t,e){var i="";if(e instanceof Object){var n=Object.keys(e),o=n.length;if(1===o)for(var r=0;r<n.length;r++)i+="string"==typeof e[r]?e[r]:JSON.stringify(e[r],null,16),r!=n.length-1&&(i+=" ");else if(1<o){i=e[0]+" ";for(r=1;r<n.length;r++)/(\%[sdfio])/.test(i)?i=i.replace(RegExp.$1,"string"==typeof e[r]?e[r]:JSON.stringify(e[r],null,16)):i+="string"==typeof e[r]?e[r]:JSON.stringify(e[r],null,16),r!=o-1&&(i+=" ")}}return"["+(new Date).toUTCFormat("yyyy-MM-dd hh:mm:ss.S")+"] - "+t+" :"+i},log.prototype.debug=function(){if(!(this.level<4))this.write("debug",arguments)},log.prototype.info=function(){if(!(this.level<3))this.write("info",arguments)},log.prototype.warn=function(){if(!(this.level<2)){this.write("warn",arguments);this.console&&this.log.warn.apply(console,arguments)}},log.prototype.error=function(){if(!(this.level<1)){this.write("error",arguments);this.console&&this.log.error.apply(console,arguments)}},log.prototype.write=function(t,e){var i=this.formatLog(t,e);return this.queue.push(i+"\n"),this.queue.length>this.cachesize&&(this.queue=this.queue.splice(1024)),i},log.prototype.getNewFilename=function(){return this.dir+this.filename+"_"+(new Date).toUTCFormat("yyyyMMdd_hhmmss_S")+".log"},log.prototype.getPath=function(t){return this.dir+t},log.prototype.wirteJob=function(){var i=this;if(0!==this.queue.length){this.path||(this.path=this.getNewFilename(),this.check());for(var t=[],e=0;e<this.queue.length;e++)t.push(this.queue[e]);this.queue=[];var n=new Blob(t,{type:"text/plain"});this.fs.writeFile(this.path,n,function(t,e){if(t)return i.initTimer(5e3),void(i.path=null);e>=i.maxsize&&(i.path=null),i.initTimer(0)})}else this.initTimer()};