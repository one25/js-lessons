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
$("body").on("click", ".link_insert", function(){location.href="insertpage.php";return false;});
$("body").on("click", ".button_insert", function(){BaseRecord.insert(form_insert.name_insert.value, form_insert.address_insert.value, form_insert.email_insert.value, form_insert.phone_insert.value, form_insert.image_insert.value);});
BaseRecord.start();
});
var BaseRecord={
start:function() {
   var ajaxSetting={
      method:"post",
      url:"controller.php",
      data:"hook=start",
      success:function(data) {
         //alert(data);
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
      url:"form_update.php",
      success:function(data) {
         $(".table").html(data);
         $("body").on("click", ".button_update", function(){BaseRecord.update(form_start.select_start.value, form_update.name_update.value, form_update.address_update.value, form_update.email_update.value, form_update.phone_update.value);});                                         
         BaseRecord.update_view(value);
      },
   };
   $.ajax(ajaxSetting);
},

update_view:function(value){
   var ajaxSetting={
      method:"post",
      url:"controller.php",
      data:"hook=user&id_user="+value,
      success:function(data) {
         //alert(data);
         var data_json=JSON.parse(data);
         var str_json="";
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

update:function(id, name, address, email, phone){
   if(name!='' && address!='' && email!='' && phone!='') {
   $(".span_error").html("&nbsp;");
   var ajaxSetting={
      method:"post",
      url:"controller.php",
      data:"hook=update&id="+id+"&name="+name+"&address="+address+"&email="+email+"&phone="+phone,
      success:function(data) {
         location.href="/";
      },
   };
   $.ajax(ajaxSetting);
   }
   else {
      $(".span_error").html("Bad format of field...");
   }
},

insert:function(name, address, email, phone, image){
   if(name!='' && address!='' && email!='' && phone!='' && image!='') {
   $(".span_error").html("&nbsp;");
   var ajaxSetting={
      method:"post",
      url:"controller.php",
      data:"hook=insert&name="+name+"&address="+address+"&email="+email+"&phone="+phone+"&image="+image,
      success:function(data) {
         location.href="/index.php";
      },
   };
   $.ajax(ajaxSetting);
   }
   else {
      $(".span_error").html("Bad format of field(s)...");
   }
},

};
