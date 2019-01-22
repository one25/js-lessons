$(document).ready(function() {
$("body").on("change", ".select_start", function(){
  if(form_start.select_start.selectedIndex!=0) {
    BaseRecord.user(form_start.select_start.options[form_start.select_start.selectedIndex].value);
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
      //url:"array_db.php",
      url:"controller.php",
      data:"hook=start",
      success:function(data) {
         var data_json=JSON.parse(data);
         var str_json="";
         for(var i in data_json) {
            str_json+="<option value='"+data_json[i]['id']+"'>"+data_json[i]['name']+"</option>";
         }
         $(".select_start").append(str_json);
      },
   };
   $.ajax(ajaxSetting);
},

user:function(value) {
   var ajaxSetting={
      method:"post",
      //url:"array_db.php",
      url:"form_update.php",
      success:function(data) {
         $(".table").html(data);
         $("body").on("click", ".button_update", function(){
             BaseRecord.update(form_start.select_start.options[form_start.select_start.selectedIndex].value, form_update.name_update.value, form_update.address_update.value, form_update.email_update.value, form_update.phone_update.value)
         });
         BaseRecord.update_view(value);
      },
   };
   $.ajax(ajaxSetting);
},

update_view:function(value) {
   var ajaxSetting={
      method:"post",
      url:"controller.php",
      data:"hook=user&id_user="+value,
      success:function(data) {
         var data_json=JSON.parse(data);
         for(var i in data_json) {
            form_update.name_update.value=data_json[i]['name'];
            form_update.address_update.value=data_json[i]['address'];
            form_update.email_update.value=data_json[i]['email'];
            form_update.phone_update.value=data_json[i]['phone'];
            $(".name_image").attr("src", data_json[i]['image']);
         }
      },
   };
   $.ajax(ajaxSetting);
},

update:function(id, name, address, email, phone) {
   var ajaxSetting={
      method:"post",
      url:"controller.php",
      data:"hook=update&id="+id+"&name="+name+"&address="+address+"&email="+email+"&phone="+phone,
      success:function(data) {
         location.href="/";
      },
   };
   $.ajax(ajaxSetting);
},


};
