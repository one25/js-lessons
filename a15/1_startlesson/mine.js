$(document).ready(function() {
$("body").on("change", ".select_start", function(){
  if(form_start.select_start.selectedIndex!=0) {
    BaseRecord.user(form_start.select_start.options[form_start.select_start.selectedIndex].text);
  }
  else {
    $(".table").html("");
    $(".name_image").attr("src", "img/nophoto.jpg");
  }
});
BaseRecord.start();
});
var BaseRecord={
start:function() {
   var ajaxSetting={
      method:"post",
      url:"array_db.php",
      success:function(data) {
         var data_json=JSON.parse(data);
         var str_json="";
         for(var i in data_json) {
            str_json+="<option>"+data_json[i]['name']+"</option>";
         }
         $(".select_start").append(str_json);
      },
   };
   $.ajax(ajaxSetting);
},

user:function(value) {
   var ajaxSetting={
      method:"post",
      url:"array_db.php",
      success:function(data) {
         var data_json=JSON.parse(data);
         var str_json="";
         for(var i in data_json) {
           if(data_json[i]['name']==value) {
            str_json+="<tr><td>"+data_json[i]['name']+"</td><td>"+data_json[i]['address']+"</td><td>"+data_json[i]['email']+"</td><td>"+data_json[i]['phone']+"</td><td style='visibility:hidden;'>"+data_json[i]['image']+"</td></tr>";
           }
         }
         str_json="<table>"+str_json+"</table>";
         $(".table").html(str_json);
         $(".name_image").attr("src", $("tr").children("td:eq(4)").html());
      },
   };
   $.ajax(ajaxSetting);
},

};
