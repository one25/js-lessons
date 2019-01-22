$(document).ready(function(){
   $("a").click(function(){
      $("a").css("background-color", "white");
      $(this).css("background-color", "red");
      return false;   
   });
});


