/*
* @Author: Administrator
* @Date:   2018-03-07 12:45:32
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-03-12 15:45:34
*/
window.onload=function(){
	var chezhu=document.getElementById('chezhu');
	var shijan=document.getElementById('shijan');
	var co2=document.getElementById('co2');
	var timer=0;
	function changenum(obj,params,speed){
		//console.log(obj.innerHTML)
		//console.log(channum)
		var ordernum=Number(obj.innerHTML);
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var channum=Math.ceil(Math.random()*10);
			//console.log(channum)
			ordernum+=Number(channum);
			obj.innerHTML=ordernum;
			//console.log(obj.innerHTML)
			if(obj.innerHTML>=params){
				obj.innerHTML=params;
				clearInterval(obj.timer);
			}
		},speed)

	}

changenum(chezhu,3202,20);
changenum(shijan,40404,10);
changenum(co2,42846,10);



// 首页滚动图
var box=document.querySelector('.box');
var mybannerboxul=document.getElementById('mybannerboxul');
var widow_width=document.documentElement.clientWidth;
var i=0;
var otimer=null;
function move(){
	i++;
	if(i>=widow_width){
		i=0;
	}
	box.scrollLeft=i;
	//console.log(i)
}

otimer=setInterval(move,30)
box.onmouseenter=function(){
	clearInterval(otimer)
}
box.onmouseleave=function(){
	otimer=setInterval(move,30)
}




// 轮播图
var newbannerul=document.getElementById('newbannerul');
var newlis=newbannerul.getElementsByTagName('li');
var btnshow=document.getElementById('btnshow');
var btnlis=btnshow.getElementsByTagName('li')
var itimer=null;
var k=0;
var nth=0;
function imgmove(){
	k++;
	console.log(k)
	if(k>newlis.length-2){
		k=0;
	}
	for(var j=0;j<btnlis.length;j++){
			btnlis[j].className='';	
		}
		btnlis[k].className="new";
	moveg(newbannerul,'left',-k*423);
}


itimer=setInterval(imgmove,2000) ;

newbanner.onmouseenter=function(){
	clearInterval(itimer)
}
newbanner.onmouseleave=function(){
	itimer=setInterval(imgmove,2000) ;
}

for(var i=0;i<btnlis.length;i++){
	btnlis[i].index=i;
	btnlis[i].onclick=function(){
		for(var j=0;j<btnlis.length;j++){
			btnlis[j].className='';	
		}
		this.className="new";
		moveg(newbannerul,'left',-this.index*423)
	}
}








}
// }window.onload结束

function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, true)[name];
    }
}

function moveg(obj, attr, iTarget) {
    //关闭自身物体的定时器
    clearInterval(obj.timer);
    //开启当前点中物体的定时器
    obj.timer = setInterval(function() {
        //定义变量，计算一下速度
        //让目标减去这个alpha的值
        //除6让运动缓冲
        var cur;
        if (attr == 'opacity') {
            //Math.round
            //这里需要用一个四舍五入的方法、去除小数点
            //计算机有些计算是有BUG问题的
            //比如alert(0.07*100);
            var cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);

        } else {
            var cur = parseInt(getStyle(obj, attr));
            //alert(cur);
        }


        var speed = (iTarget - cur) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        //console.log(spped);
        if (cur == iTarget) {
            clearInterval(obj.timer);
        } else {

            if (attr == 'opacity') {
                cur += speed;
                obj.style.filter = 'alpha(opacity:' + cur + ')';
                obj.style.opacity = cur / 100;
            } else {
                obj.style[attr] = cur + speed + 'px';
                //console.log(cur+speed);
            }

        }
    }, 30)
}