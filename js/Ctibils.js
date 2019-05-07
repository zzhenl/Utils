//获取最终样式的兼容写法。
function  getStyle(obj, attr){	//获取最终样式函数
   	if(window.getComputedStyle){	//判断浏览器是否支持getComputedStyle
       return getComputedStyle(obj)[attr];
   	}else{
       return obj.currentStyle[attr];
    }
}	//调用方式： getStyle(obj, attr);

//获取第一个子节点的兼容写法
function firstNode(obj){
	if(!obj.firstChild){
		return false;
	}else{
		return obj.firstElementChild || (obj.firstChild.nodeType==1?obj.firstChild:(obj.firstChild).nextSibling);
	}
}	//调用方式： firstNode(obj);

//获取最后一个子节点的兼容写法
function lastNode(obj){
	if(!obj.lastChild){
		return false;
	}
	return obj.lastElementChild || (obj.lastChild.nodeType==1?obj.lastChild:(obj.lastChild).previousSibling);
}	//调用方式： lastNode(obj);

//获取弟弟节点的兼容写法
function nextNode(obj){
	if(!obj.nextSibling){
		return false;
	}else{
		return obj.nextElementSibling ||(obj.nextSibling.nodeType==1?obj.nextSibling:nextNode(obj.nextSibling));
	}
}	//调用方式： nextNode(obj);

//获取哥哥节点的兼容写法
function previousNode(obj){
	if(!obj.previousSibling){
		return false;
	}else{
		return obj.previousElementSibling||(obj.previousSibling.nodeType==1?obj.previousSibling:previousNode(obj.previousSibling));
	}
}	//调用方式： previousNode(obj);

//获取浏览器窗口尺寸的兼容写法。
function windowWidth(){
	return document.documentElement.clientWidth || window.innerWidth;
}	//调用方式： windowWidth();
function windowHeight(){
	return document.documentElement.clientHeight || window.innerHeight;
}	//调用方式： windowHeight();

//设置滚动高度的兼容写法。
function setScrollY(num){
	document.documentElement.scrollTop = document.body.scrollTop = num;
}	//调用方式： setScrollY(num);

//获取滚动高度的兼容写法。
function getScrollY(){
	return window.pageYOffset || document.documentElement.scrollTop;
}	//调用方式： getScrollY();

//4.ev兼容写法。
var ev = function(){
	var ev = ev || window.event;
}	//调用方式： ev;

//阻止默认事件的兼容写法。
function stopPrevent(ev){
	if(ev && ev.preventDefault){
		ev.preventDefault();
	}else{	//IE浏览器
		window.event.returnValue = false;
	}
	return false;
}	//调用方式： stopPrevent(ev);

//取消冒泡事件的兼容写法。
function stopBubble(ev){
	if(ev && ev.stopPropagation){	//标准
		ev.stopPropagation();
	}else{	//ie
		ev.cancelBubble = true;
	}
}	//调用方式： stopBubble(ev);

//事件源的兼容写法。
var evSource = function(){
	var target = ev.target || ev.srcElement;
}	//调用方式： evSource;

//添加事件监听的兼容写法。
function bindEvent(obj, events, fn){
	if(obj.addEventListener){
		obj.addEventListener(events, fn, false);
   }else{		//ie低版本
		obj.attachEvent('on'+events, fn);
    }
}	//调用方式： bindEvent(obj,events, fn);

//取消事件监听的兼容写法。
function deEvent(obj, events, fn){
	if(removeEventListener){
		obj.removeEventListener(events,fn,false);
	}else{	//IE版本
		obj.detachEvent("on"+events,fn);
	}
}	//调用方式： deEvent(obj,events,fn);

//ajax创建对象的兼容写法。
function xhrRequest(xhr){
	try{						
		xhr = new XMLHttpRequest();	//正常浏览器下
	}catch{
		xhr= ActiveXObject('Microsoft.XMLHTTP');
	}
}	//调用方式： xhrRequest(xhr);

