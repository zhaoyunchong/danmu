//1.1创建俩个全局变量保存画布和画笔
var c3;
var ctx;
//1.2创建全局变量来保存画布宽高
var canWidth;
var canHeight;
//1.3创建一个全局变量用来保存弹幕对象
var msg;
//1.4创建四个全局变量
//输入框//颜色//字体//发送按钮
var inputMsg,inputFont,inputColor,inputBtn;
//创建三个初始化函数
function game(){
	init();
	gameloop();
	console.log('画布的宽度是:'+canWidth,'画布的高度是:'+canHeight);
}
function init(){
	//2.1获取画布对象赋值给c3
	c3=document.getElementById('c3');
	//2.2获取画笔对象赋值给ctx
	ctx=c3.getContext('2d');
	//2.3获取画布宽度赋值给canWidth
	canWidth=c3.width;
	//2.4获取画布高度赋值给canWidth
	canHeight=c3.height;
	//2.5创建画布对象赋值给msg
	msg=new msgObj();
	//2.6调用弹幕对象init函数
	msg.init();
	//2.7:获取输入框赋值
	inputMsg=document.getElementById('msg');
	//2.8:获取文字大小赋值
	inputFont=document.getElementById('font');
	//2.9:获取文字颜色赋值inputColor
	inputColor=document.getElementById('color');
	//2.10:获取发送按钮
	inputBtn=document.getElementById('btn');
	//2.11:为按钮绑定单击事件并且指定事件处理函数handleMsg
	inputBtn.addEventListener('click',handler);
}
function gameloop(){
	//3.1:定时器
	ctx.clearRect(0,0,canWidth,canHeight);
	requestAnimationFrame(gameloop);
	//3.2:弹幕绘制的方法
	msg.draw();
}

function handler(){
	//1.获取用户输入的内容
	var color=inputColor.value;
	var message=inputMsg.value;
	var font=inputFont.value;
	msg.add({color,message,font});
}
//加上小括号是立即执行的意思,注意点
// document.body.onload=game();
//网页加载成功后调用name函数
document.body.onload=game;

