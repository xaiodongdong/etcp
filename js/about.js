/*
* @Author: Lenovo
* @Date:   2018-03-13 09:00:55
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-03-15 08:46:03
*/
var cons=document.querySelectorAll(".con_box>div");

var lis=document.querySelectorAll(".nav1>li>a");
console.log(cons);
for(var i=0;i<lis.length;i++){
	 // console.log(i)
	lis[i].index=i;  
	lis[i].onclick=function(){
	    
	      for(let i=0;i<lis.length;i++){ 
                  lis[i].className='';
                   // console.log(this)
                  // cons[i].addClass('hidden');
                  cons[i].className="";
                  cons[i].classList.add("hidden");

           };
        // console.log(this)
        lis[this.index].className='act';
        // cons[this.index].addClass('show');
        cons[this.index].classList.add("show");

		
}      
}

