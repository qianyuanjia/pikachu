var codeStr=`/**
*我想画个皮卡丘
*首先我需要皮卡丘耀眼的皮肤
**/
.pikachuPreview{
	position:relative;
	background: #FEE600;
}
.wrap{
	width:320px;
	height:182px;
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
	margin:auto;
}
/*我想它得有个鼻子*/
.nose{
	width:0;
	height:0;
	border-style:solid;
	border-width:14px 18px;
	border-color:transparent;
	border-top-color:#000;
	border-radius:50%;
	position:absolute;
	top:25px;
	left:0;
	right:0;
	margin:auto;
}
/*虽然是神奇宝贝，但还是有眼睛的*/
.left-eye,
.right-eye{
	width:48px;
	height:48px;
	border:2px solid #030100;
	background: #2E2E2E;
	border-radius:50%;
	position:absolute;
}
.left-eye::after,
.right-eye::after{
	content:'';
	display:block;
	width:20px;
	height:20px;
	background: #fff;
	border:2px solid #000000;
	border-radius:50%;
	position:absolute;
	left:4px;
	top:2px;
}
.left-eye{
	left:45px;
}
.right-eye{
	right:45px;
}
/*红彤彤的脸颊超级可爱*/
.left-face,
.right-face{
	width:66px;
	height:66px;
	border:2px solid #160100;
	background: #FE0000;
	border-radius:50%;
	position:absolute;
	top:85px;
}
.right-face{
	right:0;
}
/*它是兔儿唇吗？可以试一下*/
.left-lip,
.right-lip{
	width:58px;
	height:20px;
	border:2px solid #0F110F;
	border-top:none;
	position:absolute;
	top:46px;
	background: #FEE600;
	z-index: 1;
}
.left-lip{
	border-right:none;
	border-bottom-left-radius:27px 18px; 
	transform:rotate(-24deg);
	right:50%;
}
.right-lip{
	border-left:none;
	border-bottom-right-radius:27px 18px; 
	transform:rotate(24deg);
	left:50%;
}
/*一张尖尖的嘴巴更显可爱*/
.mouse{
	width:96px;
	height:128px;
	position:absolute;
	z-index:0;
	left:0;
	right:0;
	bottom:0;
	margin:auto;
	overflow:hidden;
}
.mouse>.tongue{
	content:'';
	display:block;
	width:100%;
	height:310px;
	background: #9B000A;
	position:absolute;
	bottom:0;
	border-radius:50% ;
	border:2px solid #0F110F;
	overflow:hidden;
}
/*给它一个小舌头*/
.tongue::after{
	content:'';
	display:block;
	width:88px;
	height:106px;
	position:absolute;
	bottom:0;
	left:0;
	right:0;
	margin:auto;
	background: #FF475F;
	z-index:1;
	border-radius:45px/30px;
}
/**
*好啦，一只可爱的皮卡丘送给你！
**/

`;
let duration=30;
writeCode('.codePreview','#styleCss',codeStr);
$('.btns').on('click','button',function(ev){
	$(ev.currentTarget).addClass('active').siblings().removeClass('active');
	var speed=$(ev.currentTarget).attr('data-speed');
	switch(speed){
		case 'slow':
			duration=50;break;
		case 'normal':
			duration=30;break;
		case 'fast':
			duration=10;break;
	}
})
function writeCode(codeSelector,cssSelector,codeStr){
  var obj=document.querySelector(codeSelector);
  var oCss=document.querySelector(cssSelector);
  var n=0;
  var timer=setTimeout(function showCode(){
	  obj.innerHTML=Prism.highlight(codeStr.substring(0,++n), Prism.languages.css, 'css');
	  oCss.innerHTML=codeStr.substring(0,n);
	  obj.scrollTop=obj.scrollHeight;
	  if(n<codeStr.length){
	    setTimeout(showCode,duration);
	  }
  },duration)
}
