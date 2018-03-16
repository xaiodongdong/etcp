/*
* @Author: Lenovo
* @Date:   2018-03-13 11:34:29
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-03-13 13:28:38
*/
/*
* @Author: Lenovo
* @Date:   2018-03-13 11:21:40
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-03-13 11:33:21
*/
var lists=document.querySelectorAll(".nav>li>a");
for(var i=0;i<lists.length;i++){
	// console.log(lists)
	lists[i].index=i;  
	var href=window.location.href;
	// console.log(lists[i].href);


if(lists[i].href==href){
	// console.log(lists[i])
	lists[i].classList.add("color_blue");
}else{
	lists[i].className="";
}
}
   


