var script = document.createElement('script');
script.src = "js/console.js";
document.head.appendChild(script)

function reseterrors() {

  reseterror('email');

}

function reseterror(varname) {

  if ($("#" + varname + "_div").hasClass("error_field")) {
    $("#" + varname + "_div").removeClass("error_field");
  }
  $("#" + varname + "_error").hide();
  $("#" + varname + "_error").text("");

}


function validatedisplayerror(data, varname, objScroll) {
  console.log(data);
  console.log(varname);

  if (Array.isArray(data)) {

    if (!objScroll.done === true) {
      // alert(objScroll.done);
      objScroll.done = true;
      // alert(varname);
      $('html, body').animate({
        scrollTop: $("#" + varname + "_div").offset().top
      }, 500);
    }

    if (!$("#" + varname + "_div").hasClass("error_field")) {
      $("#" + varname + "_div").addClass("error_field");
    }
    if (!$("#" + varname + "_span").hasClass("error_field")) {
      $("#" + varname + "_span").addClass("error_field");
    }
    console.log(data[0]);
    $("#" + varname + "_error").show();
    $("#" + varname + "_error").text(data[0]);
  }

}


var pad = function (num, size) {
  var s = "000000000" + num;
  return s.substr(s.length - size);
};



var validate = function () {
  console.log('validate');
  reseterrors();
  $("#error-msg").hide(500);


  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();
  
  var email = $("#email").val();


  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    email: email
  };

  console.log(formData);
  $.ajax({
    type: "post",
    url: "email-process-validate",
    data: formData,
    dataType: "json",
    encode: true,
  }).done(function (data) {

    console.log(data);

    if (typeof data === "object" && data !== null) {


      // console.log(Object.values(data).join(', '));
      // console.log(data.email[0]);

      if (data[0] !== null) {
        $("#send-error").html(data.email[0]);
      }
      // $("#send-error").html('Sorry, there was an error, please try again: </br>' + Object.values(data).join(', '));
      // $("#send-error").html(Object.values(data).join(', '));

      // console.log(data.reference); 

      // var myScroll = { done: false };

      // validatedisplayerror(data.reference, 'reference', myScroll);

      $("#error-msg").show(500);
      $("#newsletter-button").show(200);
      document.getElementById("newsletter-button").disabled = false;
      $("#newsletter-button").fadeTo(200,1);

      return false;


    }

    document.getElementById("newsletter-button").disabled = true;
    $("#newsletter-button").fadeTo(200,0);

    submit();
    return true;

  });


};






var submit = function () {
  console.log('submit');

  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();
  
  var email = $("#email").val();
  var token = $("#token").val();

  console.log(name);

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    email: email,
    token: token
  };

  console.log(formData);
  $.ajax({
    type: "post",
    url: "newsletter-subscribe-submit",
    data: formData,
    dataType: "json",
    encode: true,
  }).done(function (data) {

    console.log(data);

    // $("#success-msg").show(500);

    if (typeof data === "object" && data !== null) {
      
      console.log(Object.values(data).join(', '));
      $("#send-error").html('Sorry, there was an error, please try again: </br>' + Object.values(data).join(', '));

      $("#error-msg").show(500);
      $("#newsletter-button").show(200);
      document.getElementById("newsletter-button").disabled = false;
      $("#newsletter-button").fadeTo(200,1);

      return false;

    }

    console.log('submitted');
    // document.getElementById("newsletter-button").disabled = true;
    // $("#newsletter-button").fadeTo(200,0.25);
    $("#newsletter-button").hide(200);
    $("#success-msg").show(500);
  
    return true;
  


  });


};









$(window).on("load", function () {
  
});




$(document).ready(function () {

  $("#newsletter-button").click(function (event) {
    console.log('newsletter-button');
    event.preventDefault();
    $("#success-msg").hide(500);
    $("#error-msg").hide(500);

    validate();
  });





  function isEmpty(value){
    return (value == null || value.length === 0);
  }
 

    
});


$(document).ready(function () {

  function initRecaptcha() {
    if (typeof grecaptcha !== 'undefined' && typeof grecaptcha.ready !== 'undefined') {
      grecaptcha.ready(function() {
        var grecaptcha_key = $("#grecaptcha_key").val();

        // grecaptcha.execute('6LdqdsIcAAAAAL3ASWTVx63XtRhCC4y1c5OHRlEo', { action: 'contact' }).then(function (token) {
        grecaptcha.execute(grecaptcha_key, { action: 'contact' }).then(function (token) {
            // console.log(token);
          document.getElementById("token").value = token;
        });
        // refresh token every minute to prevent expiration
        setInterval(function(){
          // grecaptcha.execute('6LdqdsIcAAAAAL3ASWTVx63XtRhCC4y1c5OHRlEo', {action: 'contact'}).then(function(token) {
          grecaptcha.execute(grecaptcha_key, {action: 'contact'}).then(function(token) {
              // console.log( 'refreshed token:', token );
            document.getElementById("token").value = token;
          });
        }, 60000);

      });
    } else {
      setTimeout(initRecaptcha, 500);
    }
  }

  initRecaptcha();
  
});
