var msgObj=function(){
	this.x=[];//弹幕文字x坐标
	this.y=[];//弹幕文字y坐标
	this.msg=[];//弹幕文字
	this.spd=[];//弹幕速度
	this.font=[];//弹幕字体
	this.color=[];//弹幕颜色
	this.alive=[];//弹幕状态true显示false隐藏
}
msgObj.prototype.num=100;
msgObj.prototype.init=function(){
	//创建循环遍历所有的弹幕
	for(var i=0;i<this.num;i++){
		//赋值x
		this.x[i]=canWidth;
		//赋值y
		this.y[i]=0;
		//赋值m,文字
		this.msg[i]='';
		//文字大小与颜色
		this.font[i]="16px";
		this.color[i]="#fff";
		//赋值spd
		this.spd[i]=3;
		//赋值alive
		this.alive[i]=false;
	}
}

msgObj.prototype.draw=function(){
	//创建循环遍历每一个弹幕文字
	for(var i=0;i<this.num;i++){
		//判断当前文字是否是显示状态
		if(this.alive[i]){
			//获取当前文字的颜色
			ctx.fillStyle=this.color[i];
			//获取当前文字的字体大小
			ctx.font=this.font[i]+" SimHei";
			//获取当前文字的内容
			var msg=this.msg[i];
			//修改文字的速度
			this.x[i]-=this.spd[i];
			//绘制文字,如果文字移出了就修改状态为false
			ctx.textBaseline="top";
			ctx.fillText(msg,this.x[i],this.y[i]);
			if(this.x[i]<=-ctx.measureText(this.msg[i]).width){
				console.log(1);
				this.alive[i]=false;
				this.x[i]=canWidth;
			}
		}
	}
}
//添加一个新的弹幕
//用户如果在输入框中输入了文字,就要显示在屏幕上
//参数，如何产生一个弹幕 msg:{msg:'999',color:'#fc0',font:'22px'}按照参数生成弹幕  
msgObj.prototype.add=function(obj){
	for (var i = 0; i < this.num; i++) {
		if(this.alive[i]==false){
			this.alive[i]=true;
			this.y[i]=Math.random()*canHeight;
			this.spd[i]=1+Math.random()*8;
			this.font[i]=obj.font;
			this.color[i]=obj.color;
			this.msg[i]=obj.message;
			return;
		}
	}
}