/*
* @Author: Lenovo
* @Date:   2018-03-08 13:34:58
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-03-14 16:07:51
*/



var d1=document.querySelector(".bb_1 span:nth-child(2)");
var d2=document.querySelector(".bb_2 span:nth-child(2)");
var d3=document.querySelector(".bb_3 span:nth-child(2)");

	var timer=0;
	function changenum(obj,params,speed){
		//console.log(obj.innerHTML)
		//console.log(channum)
		var ordernum=Number(obj.innerHTML);
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var channum=Math.ceil(Math.random()*1000);
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

changenum(d1,3202,100);
changenum(d2,40404,20);
changenum(d3,42846,20);


// 无缝滚动

// var oDiv = document.getElementById('div1');
//       var oUl = document.getElementById('ul1');
 var slider=document.querySelector(".slider");
  // var slider123=document.querySelectorAll(".slider>div");
  var box =document.querySelector(".box");
      var speed=2;

// var mybannerbox=document.getElementById('mybannerbox');
// var mybannerboxul=document.getElementById('mybannerboxul');
var widow_width=document.documentElement.clientWidth; 
box.style.width=widow_width;
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

//轮播

var newbannerul=document.getElementById('newbannerul');
var newlis=newbannerul.getElementsByTagName('li');
var btnshow=document.getElementById('btnshow');
var btnlis=btnshow.getElementsByTagName('li');
var newbanner=document.querySelector(".news_slider");
var itimer=null;
var k=0;
var nth=0;
// console.log(moveg)
function imgmove(){
	k++;
	// console.log(k)
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



// ajax
// 
// 
var title=document.querySelectorAll(".new_title p>a");

console.log(title)
var xhr=new XMLHttpRequest();
xhr.open("get","http://jsonplaceholder.typicode.com/posts",true);
xhr.onreadystatechange=function(){
	if(xhr.status==200&&xhr.readyState==4){
        var output="";

        var user_info=JSON.parse(xhr.responseText);
        var info=user_info.slice(0, 10);
        // console.log(info)

        // var n=0;
        // console.log(info.n)
        // for(var i=0;i<info.length;i++){
        	
        	for(var p in info){
                // console.log(info[p].title)
        		title[p].innerHTML=info[p].title;
        	}
         
     
        // }
	}
}
xhr.send();
for(var p  in title){
     
	title[p].href = title[p].href + "?id="+(1+Number(p));
	 console.log(title[p])
}

// radio


var video=document.querySelector(".bad-video");
var close=document.querySelector(".close");
var toplay=document.querySelector(".ban_center span:nth-child(4)>a");
console.log(video);
toplay.onclick=function(){
	video.style.display="block";
	close.onclick=function(){
     video.style.display="none";
}
	
}
