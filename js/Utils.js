//求和函数
function sum(val1, val2){
	var sum = Number(val1) + Number(val2);
	console.log(sum);
}	//调用方式： sum(val1, val2);

//选中状态取反
var isChecked = function(aInput){
	for(var i=0; i<aInput.length; i++){
//改变input的checked属性的状态
		aInput[i].checked = isChecked;
	}
//每次点击之后选中状态取反
	isChecked = !isChecked;
}	//调用方式： isChecked;

//随机数函数
function getRandom(min, max){
	return Math.floor(Math.random()*(max-min)+min);
}	//调用方式： getRandom(min, max);

//改变背景色
function changeBgColor(){
	this.style.backgroundColor = "rgb("+getRandom(0,255)+","+getRandom(0,255)+","+getRandom(0,255)+")";
}	//调用方式： changeBgColor();

//分割成数组并排序
function sortNum(a, b){
	return a-b;
}	//调用方式： sortNum(a, b);

//定时器
function(){
//4.清除定时器
	clearInterval(timer);
//5.设置定时器
	timer = setInterval(function(){
		
	}, 1000);
}

//延时器
function(){
//清除延时器
	clearTimeout(timeout);
//设置延时器
	timeout = setTimeout(function(){
		
	}, 1000);
}

//延时器仿定时器
function repeatExe(){
	clearTimeout(timer);
	timer = setTimeout(repeatExe, 1000);
}	//调用方式： repeatExe();

//加零函数
function addZero(num){
	if(num < 10){
		return "0"+num;
	}else{
		return num;
	}
}	//调用方式： addZero(num);

//重置样式函数
function resetCSS(tagName1, tagName2){
	for(var j=0; j<dots.length; j++){
		tagName1[j].className = "";
		tagName2[j].className = "";
	}
}	//调用方式： resetCSS(tagName1, tagName2);

//激活样式函数
function activeCSS(tagName1, tagName2, index){		//参数a为下标
	tagName1[index].className = "active_dot";
	tagName2[index].className = "active";
}	//调用方式： activeCSS(tagName1, tagName2, index);

//自动轮播图
function slideShow(tagName1, tagName2){
	//设置定时器自动轮播	
	clearInterval(timer);
	timer = setInterval(autoPlay, 1000);
	//绑定鼠标移入事件,停止定时器
	tagName1.onmouseover = function(){
		clearInterval(timer);
	}
	//绑定鼠标移出事件,启动定时器
	tagName1.onmouseout = function(){
		clearInterval(timer);
		timer = setInterval(autoPlay, 1000);
	}
	//自动向右切换函数
	function autoPlay(){
	//判断是否为最后一个
		if(ind == tagName2.length - 1){
			ind = 0;
		}else{
			ind++;
		}
	//重置样式
		resetCSS();
	//激活样式
		activeCSS(index);
	}
}

//设置或获取样式函数
function css(obj, attr, val){
//判断是设置样式还是获取样式
	if(!val){		//获取样式
		if(window.getComputedStyle){	//判断浏览器是否支持getComputedStyle
           return getComputedStyle(obj)[attr];
       	}else{
           return obj.currentStyle[attr];
        }
	}else{	//设置样式
		return obj.style[attr] = val;
	}
}	//调用方式： css(obj, attr, val);

//键码获取打印
document.onkeydown = function(ev){
	var ev = ev || window.event;
	if(ev.keyCode == 13){
		console.log("您按下了enter键");
	}else{
		console.log("您按下了"+ev.key+"---"+ev.keyCode);
	}
}	//调用方式： document.onkeydown;

//改变文字内容
function changeTxt(){
	this.innerHTML = Number(this.innerHTML)+1;
	if(this.innerHTML >= 5){
		deEvent(this,"click",changeTxt);		//取消click事件的changeTxt方法(changeBgColor的方法仍然执行)
	}
}	//调用方式： changeTxt();

//判断PC端设备上的浏览器
function browserNavigator(){
	if(navigator.userAgent.search("Chrome") != -1){
		alert("这是谷歌浏览器");
	}else if(navigator.userAgent.search("Firefox") != -1){
		alert("这是火狐浏览器");
	}else if(navigator.userAgent.search("MSIE") != -1){
		alert("这是IE浏览器");
	}else{
		alert("不要用杂七杂八的浏览器");	
	}
//判断移动设备还是PC
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
	    window.location.href = "https://www.baidu.com/";
	}else{
	    window.location.href = "http://news.baidu.com/";
	}
}

//截取从1下标到最后的字符
//var restTxt = txt.substring(1);

//禁用按钮
//this.disabled = true;
//按钮解禁
//_this.disabled = false;

//获取星期
//var weekArr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"] 
//var oDay = weekArr[myDate.getDay()];

//oImg.src = "../img/数码时钟/"+oNow+".png";

//算缩放比
//var oScaleX = oMaskLeft/(oSmallBox.offsetWidth - oMask.offsetWidth);
//var oScaleY = oMaskTop/(oSmallBox.offsetHeight - oMask.offsetHeight);
//根据缩放比设置oImg的位置
//oImg.style.left = -oScaleX*(oImg.offsetWidth - oBigBox.offsetWidth)+"px";
//oImg.style.top = -oScaleY*(oImg.offsetHeight - oBigBox.offsetHeight)+"px";

//hash值得三目运算
//var obj = window.location.hash?window.location.hash.substring(1):0;

