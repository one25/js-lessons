var arr_a=new Array();
function func_load() {
arr_a=document.body.getElementsByTagName("a");
for(var i=0; i<arr_a.length; ++i) {
   arr_a[i].setAttribute("onclick", "func_click(this);return false;");
}
}

function func_click(el) {
for(var i=0; i<arr_a.length; ++i) {
   arr_a[i].style.backgroundColor="white";
}
el.style.backgroundColor="red";
}



