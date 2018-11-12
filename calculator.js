var x1,y1,z ; 
var sen ;

function changeformat(){
  document.getElementById("title").style.color = "white" ;
  document.getElementById("head").style.backgroundColor = "blue" ; 
}
function resetformat(){
 document.getElementById("title").style.color = "blue" ;
 document.getElementById("head").style.backgroundColor = "white" ; 
}

function  addition() {
	var x=document.getElementById("screen").value ;
    x1=parseFloat(x) ;
    sen =1 ;
    document.getElementById("screen").value ="" ;
    console.log(sen) ;
}
function subtraction(){
   var x=document.getElementById("screen").value ;
    x1=parseFloat(x);
    sen =2 ;
    document.getElementById("screen").value ="" ;
}
function multiplication(){
   var x=document.getElementById("screen").value ;
    x1=parseFloat(x);
    sen =3 ;
    document.getElementById("screen").value ="" ;
}
function divide(){
   var x=document.getElementById("screen").value ;
    x1=parseFloat(x);
    sen =4 ; 
    document.getElementById("screen").value ="" ;
}
function equal(){
   var y=document.getElementById("screen").value ;
   y1=parseFloat(y) ;
   switch(sen){
      case 1 :
          z =x1+y1 ;
          document.getElementById("screen").value =z ;
          break ;
      case 2 : 
           z =x1-y1 ;
          document.getElementById("screen").value =z ;
          break ;
      case 3 :
          z =x1*y1 ;
          document.getElementById("screen").value =z ;
          break ;
      default :
        z =x1/y1 ;
          document.getElementById("screen").value =z ;
   }
 sen ="" ;
 /*if (sen=="add"){
   z= x1 + y1;
   document.getElementById("screen").value = z ;
 }else if(sen=="sub"){
 	z= x1-y1 ;
 	document.getElementById("screen").value = z ;
 }else if (sen="multi"){
    z= x1*y1 ;
    document.getElementById("screen").value = z ;
 }else if (sen=="div"){
     document.getElementById("screen").value =  ;     //document.getElementById("screen").value = z ;
 }*/
}
function add1(){
   document.getElementById("screen").value+="1" ; 
}
function add2(){
   document.getElementById("screen").value+="2" ; 
}
function add3(){
   document.getElementById("screen").value+="3" ; 
}
function add4(){
   document.getElementById("screen").value+="4" ; 
}
function add5(){
   document.getElementById("screen").value+="5" ; 
}
function add6(){
   document.getElementById("screen").value+="6" ; 
}
function add7(){
   document.getElementById("screen").value+="7" ; 
}
function add8(){
   document.getElementById("screen").value+="8" ; 
}
function add9(){
   document.getElementById("screen").value+="9" ; 
}
function add0(){
   document.getElementById("screen").value+="0" ; 
}
function addpoint(){
   document.getElementById("screen").value+="." ; 
}
function sign(){
  var res = document.getElementById("screen").value ;
  res = parseFloat(res) ;
  document.getElementById("screen").value = res*(-1) ;
}
function del(){
  var res = document.getElementById("screen").value ;
  var length = res.length;
  res = res.substring(0,length-1) ; 
  document.getElementById("screen").value = res ; 
}
function delall(){
  document.getElementById("screen").value ="" ;
}
function power2(){
  var input =  document.getElementById("screen").value ;
   document.getElementById("screen").value = input*input ; 
}
