var BaseRecord=(function() {

$(document).ready(function() {
   $("body").on("mouseover", "li", function(){BaseRecord.elem=this; BaseRecord.method_over();});
   $("body").on("mouseout", "li", function(){BaseRecord.method_out();});
});

return {

elem:null,

method_over:function(){
$(".result").html($(this.elem).html());
$(".result").css("font-size", $(this.elem).html());
},

method_out:function(){$(".result").html("");},

};   

})();