var script = document.createElement('script');
script.src = "js/console.js";
document.head.appendChild(script)

function reseterrors() {

  reseterror('name');
  reseterror('telephone');
  reseterror('email');
  reseterror('subject');
  reseterror('order');
  reseterror('message');

  resetdoberror();

}

function reseterror(varname) {

  if ($("#" + varname + "_div").hasClass("error_field")) {
    $("#" + varname + "_div").removeClass("error_field");
  }
  $("#" + varname + "_error").hide();
  $("#" + varname + "_error").text("");

}

function resetdoberror() {

  if ($("#dob_day_span").hasClass("error_field_date")) {
    $("#dob_day_span").removeClass("error_field_date");
  }
  if ($("#dob_month_span").hasClass("error_field_date")) {
    $("#dob_month_span").removeClass("error_field_date");
  }
  if ($("#dob_year_span").hasClass("error_field_date")) {
    $("#dob_year_span").removeClass("error_field_date");
  }

  $("#dob_error").hide();
  $("#dob_error").text("");

}

function validatedisplayerror(data, varname, objScroll) {

  if (Array.isArray(data)) {

    if (!objScroll.done === true) {
      // alert(objScroll.done);
      objScroll.done = true;
      // alert(varname);
      $('html, body').animate({
        scrollTop: $("#" + varname + "_div").offset().top
      }, 500);
    }

    // if (!$("#" + varname + "_div").hasClass("error_field")) {
    //   $("#" + varname + "_div").addClass("error_field");
    // }
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

  // var callingSelector = event.target.id;
  // var last3 = callingSelector.slice(-3);
  // console.log(event.target.id);
  // // alert("amountChange-" + callingSelector);

  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();
  
  var name = $("#name").val();
  var telephone = $("#telephone").val();
  var email = $("#email").val();
  // var subject = $("#contact_drop_a").val();
  // if (subject == 'nun') {
  //   subject = ''
  // }
  var category = $("#contact_drop_a").val();
  if (category == 'nun') {
    category = ''
  }
  var query = $("#contact_drop2_a").val();
  if (query == 'nun') {
    query = ''
  }
  var order_reference = $("#order").val();

  var message = $("#message").val();

  var order_number_mandatory = $("#order_number_mandatory").val();

  console.log(name);

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    name: name,
    telephone: telephone,
    email: email,
    // subject: subject,
    message: message,
    category: category,
    query: query,
    order_reference: order_reference,
    order_number_mandatory: order_number_mandatory,
  };

  console.log(formData);
  $.ajax({
    type: "post",
    url: "contact-travelfx-validate",
    data: formData,
    dataType: "json",
    encode: true,
    async: false
  }).done(function (data) {

    console.log(data);
    // console.log(typeof data);
    // return;
    // if (Array.isArray(data)) {
    if (typeof data === "object" && data !== null) {
      // console.log(data.first_name);
      // console.log(data.first_name[0]);
      // console.log(data.first_name[1]);

      // var scrolldone = false;
      var myScroll = { done: false };

      validatedisplayerror(data.name, 'name', myScroll);
      validatedisplayerror(data.telephone, 'telephone', myScroll);
      validatedisplayerror(data.email, 'email', myScroll);
      validatedisplayerror(data.subject, 'subject', myScroll);
      validatedisplayerror(data.order_reference, 'order', myScroll);
      validatedisplayerror(data.message, 'message', myScroll);

      return false;

    }
    console.log('validated');
    document.getElementById("send").disabled = true;
    $("#send").fadeTo(200,0.25);

    // submit data
    // $("#form").submit();
    submit();
    return true;

  });


};


var submit = function () {
  console.log('submit');

  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();
  
  var name = $("#name").val();
  var telephone = $("#telephone").val();
  var email = $("#email").val();
  // var subject = $("#contact_drop_a").val();
  // if (subject == 'nun') {
  //   subject = ''
  // }
  var category = $("#contact_drop_a option:selected").text();
  if (category == 'nun') {
    category = ''
  }
  var query = $("#contact_drop2_a option:selected").text();
  if (query == 'nun') {
    query = ''
  }
  var order_reference = $("#order").val();
  var message = $("#message").val();
  var token = $("#token").val();

  console.log(name);

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    name: name,
    telephone: telephone,
    email: email,
    // subject: subject,
    message: message,
    category: category,
    query: query,
    order_reference: order_reference,
    token: token
  };

  console.log(formData);
  $.ajax({
    type: "post",
    url: "contact-travelfx-submit",
    data: formData,
    dataType: "json",
    encode: true,
    async: false
  }).done(function (data) {

    console.log('data');
    console.log(data);

    // $("#success-msg").show(500);

    // if ((typeof data === "object" && data !== null) || ((typeof data !== "object" && data != '')  && (typeof data !== "object" && data != 'out-of-hours-success'))) {
    if ((typeof data === "object" && data !== null) || (typeof data !== "object" && data != '')) {
      
      // console.log(Object.values(data).join(', '));
      if (Array.isArray(data)) {
        $("#send-error").html('Sorry, there was an error, please try again: </br>' + Object.values(data).join(', '));
      } else {
        $("#send-error").html('Sorry, there was an error, please try again: </br>' + data);
      }
      $("#error-msg").show(500);
      $("#send").show(200);
      document.getElementById("send").disabled = false;
      $("#send").fadeTo(200,1);

      return false;

    }
    
    console.log('submitted');
    // document.getElementById("send").disabled = true;
    // $("#send").fadeTo(200,0.25);
    $("#send").hide(200);
    $("#success-msg").show(500);

    // check if out of hours
    out_of_hours = ooh();
    console.log('out_of_hours');
    console.log(out_of_hours);
  
    if (out_of_hours == true) {
      $("#out-of-hours-msg").show(1000);
    }
    
    return true;

  });

  console.log('nodata');

};



var ooh = function () {

  console.log('ooh');
  var retVal = false;

  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
  };

  console.log(formData);
  $.ajax({
    type: "post",
    url: "contact-travelfx-ooh",
    data: formData,
    dataType: "json",
    encode: true,
    async: false
  }).done(function (data) {

    console.log('oohdata');
    console.log(data);

    if (typeof data == "boolean") {

      retVal= data;

    }

    console.log('ooh complete');

  });

  return retVal;
};



$(window).on("load", function () {
});




$(document).ready(function () {

  $("#send").click(function (event) {
    console.log('send');
    event.preventDefault();
    $("#success-msg").hide(500);
    $("#error-msg").hide(500);

    validate();
    // submit();
  });


  function isEmpty(value){
    return (value == null || value.length === 0);
  }

    
});


$(document).ready(function () {

  function initRecaptcha() {
    if (typeof grecaptcha !== 'undefined' && typeof grecaptcha.ready !== 'undefined') {
      grecaptcha.ready(function () {
        var grecaptcha_key = $("#grecaptcha_key").val();

        // grecaptcha.execute('6LdqdsIcAAAAAL3ASWTVx63XtRhCC4y1c5OHRlEo', {action: 'contact'}).then(function(token) {
        grecaptcha.execute(grecaptcha_key, {action: 'contact'}).then(function(token) {
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
