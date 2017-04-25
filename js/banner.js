window.onload =  function(){
	fnTab([ 'img/mx6.gif', 'img/car.gif', 'img/banner.jpg', 'img/jiushui.gif', 'img/meizu6.jpg'] );
};

function fnTab(arrUrl){
		var oDiv = document.getElementById("banner")
		var oImg = document.getElementsByTagName('img')[0];
		var aDiv = document.getElementById('pic');
		var aLi = aDiv.getElementsByTagName('li');
		var num = 0;
		//定时器部分
		// var timer=null;
		function autoPlay(){
			oDiv.timer=setInterval(function(){
			num++;
			num%=arrUrl.length;
			fnTab();
		},1000)
		}
		autoPlay();
		oDiv.onmouseover=function(){
			clearInterval(oDiv.timer)
		}
		oDiv.onmouseout=autoPlay;
		for(var i=0;i<arrUrl.length;i++){
				aDiv.innerHTML+='<li></li>';
			}
		function fnTab(){
			oImg.src = arrUrl[num];
			for(var i=0;i<arrUrl.length;i++){
					aLi[i].className='';
				}
			aLi[num].className='active';
		};
		fnTab();
		for(var i=0;i<arrUrl.length;i++){
				aLi[i].index=i;
				aLi[i].innerHTML=i+1;
				aLi[i].onmouseover = function(){
						num=this.index;
						fnTab();
				}
			
		}
}

