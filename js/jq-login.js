var script = document.createElement('script');
script.src = "js/console.js";
document.head.appendChild(script)

$(window).on("load", function () {

  
});


$(document).ready(function () {

  $("#btn_signin").click(function (event) {

    event.preventDefault();

    if ((!$("#email").val()=="") && (!$("#password").val()=="")) {
      document.getElementById("btn_signin").disabled = true;
      $("#btn_signin").fadeTo(200,0.25);
      $("#form").submit();

    } 

  });

   
});




