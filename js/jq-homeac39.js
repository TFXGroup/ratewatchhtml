var script = document.createElement('script');
script.src = "js/console.js";
document.head.appendChild(script)

// var timeoutTimer;
// // var expireTime = 1000*60*30;
// var expireTime = 10000;
// function expireSession(){
//     clearTimeout(timeoutTimer);
//     timeoutTimer = setTimeout("IdleTimeout()", expireTime);
// }
// function IdleTimeout() {
//     localStorage.setItem("logoutMessage", true);
//     window.location.href="help";
// }
// $(document).on('click mousemove scroll', function() {
//     expireSession();
// });
// expireSession();

var asyncType = true

$(window).on("load", function () {
  console.log("preload");
  asyncType = true
  loadPage();
  console.log("postload");
  asyncType = false
});

var loadPage = function () {
  console.log("loadPage");
  buyCurrencyLoadFlagWithRate();
  sellCurrencyLoadFlagWithRate();
  // loadDropdownSearch1();
  loadDropdownSearch2();
  // $("#Internationaltransfer_1").change();
  // 20220804 removed because it isn't needed on load - the global load populates the dropdowns
  // transferLoad();
  // transferSource(); 20251104 moved to tab click
};

var buyCurrencyLoadFlagWithRate = function () {
  var rateset = $("#currencyrate").val();
  if (rateset > 0) {
    document.getElementById("Amount-in-pounds").disabled = false;
    document.getElementById("You-receive").disabled = false;
    return;
  }

  console.log("buyCurrencyLoadFlagWithRate");
  console.log("asyncType: " + asyncType);
  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#Buytravelmoney_1").val(),
  };

  $.ajax({
    type: "post",
    url: "buy-amount",
    data: formData,
    dataType: "json",
    encode: true,
  }).done(function (data) {
    // if the response is empty, reload the page
    console.log('buy1');
    // if(data=='') {
    //   location.reload();
    //   return;
    // }

    $("#buyrate").html("Best exchange rate 1 GBP = " + numberWithCommas(data.data.exchange_rate.toFixed(4)) + " " + $('#Buytravelmoney_1 option:selected').attr('symbol') + " <span>✓</span>");
    $("#currencyrate").val(data.data.exchange_rate);

    $('#You-receive-flag').attr('src', $('#Buytravelmoney_1 option:selected').attr('data-src'));
    $("#You-receive").attr('step', $('#Buytravelmoney_1 option:selected').attr('lowest-bill'));
    console.log(data);
    // enable the inputs after we have received the latest rate
    document.getElementById("Amount-in-pounds").disabled = false;
    document.getElementById("You-receive").disabled = false;
      
  });
};

// $(document).ready(buyCurrencyLoadFlagWithRate); // moved to onload function



var sellCurrencyLoadFlagWithRate = function () {
  var rateset = $("#buybackcurrencyrate").val();
  if (rateset > 0) {
    document.getElementById("You-send-us").disabled = false;
    return;
  }
  console.log("sellCurrencyLoadFlagWithRate");
  console.log("asyncType: " + asyncType);
  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#Selltravelmoney_1").val(),
    amountcurrency: $("#You-send-us").val(),
  };

  $.ajax({
    type: "post",
    url: "buyback-amount",
    data: formData,
    dataType: "json",
    encode: true,
  }).done(function (data) {
    console.log('buyback1');
    // if(data=='') {
    //   location.reload();
    // return;
    // }

    // fix for toFixed(2) errors
    exchange_rate = Number(data.data.exchange_rate);
    amount_pounds = Number(data.data.amount_pounds);

    $("#buybackrate").html("Best exchange rate 1 GBP = " + numberWithCommas(exchange_rate.toFixed(4)) + " " + $('#Selltravelmoney_1 option:selected').attr('symbol') + " <span>✓</span>");
    $("#buybackcurrencyrate").val(exchange_rate);
    $("#recipient_amount").html("You receive £ " + numberWithCommas(amount_pounds.toFixed(2)));
    $("#buybackyoureceive").val((amount_pounds).toFixed(2));
    $('#You-send-us-flag').attr('src', $('#Selltravelmoney_1 option:selected').attr('data-src'));
    console.log(data);
    document.getElementById("You-send-us").disabled = false;

  });
};
// $(document).ready(sellCurrencyLoadFlagWithRate); // moved to onload function







$(document).ready(function () {
  $("#Buytravelmoney_1").change(buyCurrency);
  // $("#Amount-in-pounds").change(buyCurrency);
  $("#Amount-in-pounds").keyup(buyCurrencyCalcFrom);
  // $("#You-receive").change(buyYouReceive);
  $("#You-receive").keyup(buyCurrencyCalcTo);
});

var buyCurrencyCalcFrom = function () {

  var currencyrate = $("#currencyrate").val();
  var amountinpounds = $("#Amount-in-pounds").val();
  var amountcurrency = $("#You-receive").val();

  currencyrate = Number(currencyrate);
  amountinpounds = Number(amountinpounds);
  amountcurrency = Number(amountcurrency);
  
  amountcurrency = amountinpounds * currencyrate;
  $("#You-receive").val((amountcurrency).toFixed(2));

}

var buyCurrencyCalcTo = function () {

  var currencyrate = $("#currencyrate").val();
  var amountinpounds = $("#Amount-in-pounds").val();
  var amountcurrency = $("#You-receive").val();

  currencyrate = Number(currencyrate);
  amountinpounds = Number(amountinpounds);
  amountcurrency = Number(amountcurrency);

  amountinpounds = amountcurrency / currencyrate;
  $("#Amount-in-pounds").val((amountinpounds).toFixed(2));

}


$(document).ready(function () {
  $("#Selltravelmoney_1").change(sellCurrency)
  // $("#You-send-us").change(sellYouReceive)
  $("#You-send-us").keyup(sellCurrencyCalc)
});


var sellCurrencyCalc = function () {

  var currencyrate = $("#buybackcurrencyrate").val();
  var amountinpounds = $("#buybackyoureceive").val();
  var amountcurrency = $("#You-send-us").val();

  currencyrate = Number(currencyrate);
  amountinpounds = Number(amountinpounds);
  amountcurrency = Number(amountcurrency);

  amountinpounds = amountcurrency / currencyrate;
  // $("#You-receive").val((amountinpounds).toFixed(2));
  $("#recipient_amount").html("You receive £ " + numberWithCommas(amountinpounds.toFixed(2)));
  $("#buybackyoureceive").val((amountinpounds).toFixed(2));

}







$(document).ready(function () {
  // $("#Internationaltransfer_1").change(transferSource);

  $("#Internationaltransfer_1").change(function(event){
    event.preventDefault();
    // store the currently selected target currency
    target_symbol = $("#Internationaltransfer_2").val();
    transferLoad(target_symbol);
    // transferSource(); // removed 20211126
  }
  );


  $("#Internationaltransfer_2").change(transferSource);
  // $("#source_amount").change(transferSource);
  // $("#target_amount").change(transferTarget);
  $("#source_amount").keyup(transferCurrencyCalcFrom);
  $("#target_amount").keyup(transferCurrencyCalcTo);
});


var transferCurrencyCalcFrom = function () {

  var currencyrate = $("#transfercurrencyrate").val();
  var source_amount = $("#source_amount").val();
  var target_amount = $("#target_amount").val();

  currencyrate = Number(currencyrate);
  source_amount = Number(source_amount);
  target_amount = Number(target_amount);

  target_amount = source_amount * currencyrate;
  $("#target_amount").val((target_amount).toFixed(2));

}

var transferCurrencyCalcTo = function () {

  var currencyrate = $("#transfercurrencyrate").val();
  var source_amount = $("#source_amount").val();
  var target_amount = $("#target_amount").val();

  currencyrate = Number(currencyrate);
  source_amount = Number(source_amount);
  target_amount = Number(target_amount);

  source_amount = target_amount / currencyrate;
  $("#source_amount").val((source_amount).toFixed(2));

}
















var buyCurrency = function () {
  console.log("buyCurrency" );
  console.log("asyncType: " + asyncType);
  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#Buytravelmoney_1").val(),
    amountinpounds: $("#Amount-in-pounds").val(),
  };
  console.log('buyCurrency');
  console.log(formData);

  $.ajax({
    type: "post",
    url: "buy-amount",
    data: formData,
    dataType: "json",
    encode: true,
    async: asyncType
  }).done(function (data) {
    console.log('buy2');
    if(data=='') {
      location.reload();
      return;
    }

    // fix for toFixed(2) errors
    exchange_rate = Number(data.data.exchange_rate);
    amount_pounds = Number(data.data.amount_pounds);
    amount_currency = Number(data.data.amount_currency);

    $("#buyrate").html("Best exchange rate 1 GBP = " + numberWithCommas(exchange_rate.toFixed(4)) + " " + $('#Buytravelmoney_1 option:selected').attr('symbol') + " <span>✓</span>");
    $("#currencyrate").val(exchange_rate);
    $("#Amount-in-pounds").val((amount_pounds).toFixed(2));
    $("#You-receive").val((amount_currency).toFixed(2));
    $('#You-receive-flag').attr('src', $('#Buytravelmoney_1 option:selected').attr('data-src'));
    console.log(data);
    console.log('buyCurrency COMPLETE');

  });
};

var buyYouReceive = function () {
  console.log("buyYouReceive");
  console.log("asyncType: " + asyncType);
  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#Buytravelmoney_1").val(),
    amountcurrency: $("#You-receive").val(),
  };
  console.log(formData);

  $.ajax({
    type: "post",
    url: "buy-amount",
    data: formData,
    dataType: "json",
    encode: true,
    async: asyncType
  }).done(function (data) {
    console.log('buy3');
    // if(data=='') {
    //   location.reload();
    // return;
    // }

    // fix for toFixed(2) errors
    exchange_rate = Number(data.data.exchange_rate);
    amount_pounds = Number(data.data.amount_pounds);
    amount_currency = Number(data.data.amount_currency);

    $("#buyrate").html("Best exchange rate 1 GBP = " + numberWithCommas(exchange_rate.toFixed(4)) + " " + $('#Buytravelmoney_1 option:selected').attr('symbol') + " <span>✓</span>");
    $("#currencyrate").val(exchange_rate);
    $("#Amount-in-pounds").val((amount_pounds).toFixed(2));
    $("#You-receive").val((amount_currency).toFixed(2));

    console.log(data);

  });
};




var sellCurrency = function () {
  console.log("sellCurrency");
  console.log("asyncType: " + asyncType);
  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#Selltravelmoney_1").val(),
    amountcurrency: $("#You-send-us").val(),
  };

  $.ajax({
    type: "post",
    url: "buyback-amount",
    data: formData,
    dataType: "json",
    encode: true,
    async: asyncType
  }).done(function (data) {
    console.log('buyback2');
    if(data=='') {
      location.reload();
      return;
    }

    // fix for toFixed(2) errors
    exchange_rate = Number(data.data.exchange_rate);
    amount_pounds = Number(data.data.amount_pounds);
    amount_currency = Number(data.data.amount_currency);

    $("#buybackrate").html("Best exchange rate 1 GBP = " + numberWithCommas(exchange_rate.toFixed(4)) + " " + $('#Selltravelmoney_1 option:selected').attr('symbol') + " <span>✓</span>");
    $("#buybackcurrencyrate").val(exchange_rate);
    $("#recipient_amount").html("You receive £ " + numberWithCommas(amount_pounds.toFixed(2)));
    $("#buybackyoureceive").val((amount_pounds).toFixed(2));
    $("#You-send-us").val((amount_currency).toFixed(2));
    $('#You-send-us-flag').attr('src', $('#Selltravelmoney_1 option:selected').attr('data-src'));
    console.log(data);
    
  });

}

  
var sellYouReceive = function () {
  console.log("sellYouReceive");
  console.log("asyncType: " + asyncType);
    var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#Selltravelmoney_1").val(),
    amountcurrency: $("#You-send-us").val(),
  };

  $.ajax({
    type: "post",
    url: "buyback-amount",
    data: formData,
    dataType: "json",
    encode: true,
    async: asyncType
  }).done(function (data) {
    console.log('buyback3');
    // if(data=='') {
    //   location.reload();
    // return;
    // }

    // fix for toFixed(2) errors
    exchange_rate = Number(data.data.exchange_rate);
    amount_pounds = Number(data.data.amount_pounds);
    amount_currency = Number(data.data.amount_currency);

    $("#buybackrate").html("Best exchange rate 1 GBP = " + numberWithCommas(exchange_rate.toFixed(4)) + " " + $('#Selltravelmoney_1 option:selected').attr('symbol') + " <span>✓</span>");
    $("#buybackcurrencyrate").val(exchange_rate);
    $("#recipient_amount").html("You receive £ " + numberWithCommas(amount_pounds.toFixed(2)));
    $("#buybackyoureceive").val((amount_pounds).toFixed(2));
    $("#You-send-us").val((amount_currency).toFixed(2));
    $('#You-send-us-flag').attr('src', $('#Selltravelmoney_1 option:selected').attr('data-src'));
    console.log(data);
    
  });

}



var transferSource = function () {
  console.log("transferSource<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  console.log("asyncType: " + asyncType);

    var csrf_name = $("#csrf_name").val();
    var csrf_value = $("#csrf_value").val();
  
    var formData = {
      csrf_name: csrf_name,
      csrf_value: csrf_value,
      source_symbol: $("#Internationaltransfer_1").val(),
      target_symbol: $("#Internationaltransfer_2").val(),
      source_amount: $("#source_amount").val(),
    };
    console.log(formData);

    $.ajax({
      type: "post",
      url: "transfer-amount",
      data: formData,
      dataType: "json",
      encode: true,
      async: asyncType
    }).done(function (data) {
      console.log('transfer1');
      if(data=='') {
        location.reload();
        return;
      }
      console.log(data);
      console.log(data.data);

      // fix for toFixed(2) errors
      rate = Number(data.data.rate);
      source_amount = Number(data.data.source_amount);
      target_amount = Number(data.data.target_amount);

      $("#transfer_rate").html("Best exchange rate 1 " + $("#Internationaltransfer_1").val() + " = " + numberWithCommas(rate.toFixed(4)) + " " + $("#Internationaltransfer_2").val() + " <span>✓</span>");
      $("#transfercurrencyrate").val(rate);
      $("#source_amount").val((source_amount).toFixed(2));
      $("#target_amount").val((target_amount).toFixed(2));
      document.getElementById("source_amount").disabled = false;
      document.getElementById("target_amount").disabled = false;

    });

  }


  var transferTarget = function () {
    console.log("transferTarget");
    console.log("asyncType: " + asyncType);
  
    var csrf_name = $("#csrf_name").val();
    var csrf_value = $("#csrf_value").val();
  
    var formData = {
      csrf_name: csrf_name,
      csrf_value: csrf_value,
      source_symbol: $("#Internationaltransfer_1").val(),
      target_symbol: $("#Internationaltransfer_2").val(),
      target_amount: $("#target_amount").val(),
    };
    console.log(formData);

    $.ajax({
      type: "post",
      url: "transfer-amount",
      data: formData,
      dataType: "json",
      encode: true,
      async: asyncType
    }).done(function (data) {
      console.log('transfer2');
      if(data=='') {
        location.reload();
        return;
      }
      console.log(data);
      console.log(data.data);

      // fix for toFixed(2) errors
      rate = Number(data.data.rate);
      source_amount = Number(data.data.source_amount);
      target_amount = Number(data.data.target_amount);

      $("#transfer_rate").html("Best exchange rate 1 " + $("#Internationaltransfer_1").val() + " = " + numberWithCommas(rate.toFixed(4)) + " " + $("#Internationaltransfer_2").val() + " <span>✓</span>");
      $("#transfercurrencyrate").val(rate);
      $("#source_amount").val((source_amount).toFixed(2));
      $("#target_amount").val((target_amount).toFixed(2));

    });

  }






$(document).ready(function () {
  $("#Internationaltransfer_1xxxxxxxxxxxxxxxxxxx").change(function (event) {
    console.log("Internationaltransfer_1.change");
    console.log("asyncType: " + asyncType);

    var csrf_name = $("#csrf_name").val();
    var csrf_value = $("#csrf_value").val();
  
    var formData = {
      csrf_name: csrf_name,
      csrf_value: csrf_value,
      source_symbol: $("#Internationaltransfer_1").val()
    };
    console.log(formData);
    var $dropdown = $("#Internationaltransfer_2");
    
    $.ajax({
      type: "post",
      url: "transfer-load",
      data: formData,
      dataType: "json",
      encode: true,
      async: asyncType
    }).done(function (data) {
      console.log('transfer3');
      // if(data=='') {
      //   location.reload();
      // return;
      // }
      console.log(data);
      console.log(data.data);
      Window.tom2.destroy();

      $dropdown.empty();

      $.each(data.data, function () {
        if (this.target_currency == "GBP") {
          $dropdown.append('<option value="' + this.target_currency + '" selected = "selected" data-src="flags/' + this.target_flag + '">' + this.target_currency + '</option>');
        } else {
          $dropdown.append('<option value="' + this.target_currency + '" data-src="flags/' + this.target_flag + '">' + this.target_currency + '</option>');
        }
      });

      console.log($dropdown.prop("id"));
      console.log("asyncType: " + asyncType);

      loadDropdownSearch2();

      transferTarget();

    });

    event.preventDefault();
  });

});








var transferLoad = function (target_symbol='GBP') {
 
console.log("Internationaltransfer_1.change");
console.log("asyncType: " + asyncType);

var csrf_name = $("#csrf_name").val();
var csrf_value = $("#csrf_value").val();

var formData = {
  csrf_name: csrf_name,
  csrf_value: csrf_value,
  source_symbol: $("#Internationaltransfer_1").val()
};
console.log(formData);
var $dropdown = $("#Internationaltransfer_2");

$.ajax({
  type: "post",
  url: "transfer-load",
  data: formData,
  dataType: "json",
  encode: true,
  async: asyncType
}).done(function (data) {
  console.log('transfer4');
  if(data=='') {
    location.reload();
    return;
  }
  console.log(data);
  console.log(data.data);
  Window.tom2.destroy();

  $dropdown.empty();

  $.each(data.data, function () {
    if (this.target_currency == target_symbol) {
      $dropdown.append('<option value="' + this.target_currency + '" selected = "selected" data-src="flags/' + this.target_flag + '">' + this.target_currency + '</option>');
    } else {
      $dropdown.append('<option value="' + this.target_currency + '" data-src="flags/' + this.target_flag + '">' + this.target_currency + '</option>');
    }
  });

  console.log($dropdown.prop("id"));
  console.log("asyncType: " + asyncType);

  loadDropdownSearch2();

  transferTarget();

});

// event.preventDefault();

}










var loadDropdownSearch2 = function () {
  console.log("loadDropdownSearch2");
  console.log("asyncType: " + asyncType);
  // alert(controlname);
  // return;
  Window.tom2 = new TomSelect("#Internationaltransfer_2", {
    render: {
      option: function (data, escape) {
        return `<div><img class="opt_flag" src="${data.src}" alt="${escape(data.text)}"><div class="opt_name">${escape(data.text)}</div></div>`;
      },
      item: function (item, escape) {
        return `<div><img class="opt_flag" src="${item.src}" alt="${escape(item.text)}"><div class="opt_name">${escape(item.text)}</div></div>`;
      }
    },
    onInitialize: function() {
      this.control_input.addEventListener('paste', (e) => {
        e.stopPropagation();
      }, true);
    }
  });
};

// $(document).ready(loadDropdownSearch2());
// $(document).ready($("#Internationaltransfer_1").change());



$(document).ready(function () {

  $("#tab_buy").click(function() {
    $("#tab_header").text("Travel Money");
    $("#tab_text").text("If you are looking to buy travel money online you are in the right place, we consistently have the cheapest exchange rates, offer multiple payment options and guaranteed delivery.");
  });
  $("#tab_sell").click(function() {
    $("#tab_header").text("Sell Travel Money Online");
    $("#tab_text").text("Sell your unused currency back to us and save up to 10-15% against the airports and banks.");
  });
  $("#tab_transfer").click(function() {
    $("#tab_header").text("Send Money Abroad");
    $("#tab_text").text("We offer a cheap and simple way to send money abroad with continually competitive international transfer exchange rates and great service.");

    // Lazy load transfer data when the tab is first clicked
    if (!window.transferInitialised) {
      window.transferInitialised = true;
      transferLoad();       // populate dropdowns 20251104
      transferSource();     // load rate 20251104
    }
  });

  $("#button-buy").click(function (event) {
    
    console.log('buy');
    event.preventDefault();
    document.getElementById("button-buy").disabled = true;

    $("#button-buy").fadeTo(200, 0.25);
    $("#buy").submit();

  });


  $("#button-buyback").click(function (event) {
    
    console.log('buyback');
    event.preventDefault();
    document.getElementById("button-buyback").disabled = true;
    $("#button-buyback").fadeTo(200,0.25);

    $("#buyback").submit();
  });


  $("#button-transfer").click(function (event) {
    
    console.log('transfer');
    event.preventDefault();
    document.getElementById("button-transfer").disabled = true;
    $("#button-transfer").fadeTo(200,0.25);

    $("#transfer").submit();
  });

//   $("#Buytravelmoney-tab").click(function (event) {
//     console.log('Buytravelmoney-tab');
//   });
//   $("#Selltravelmoney-tab").click(function (event) {
//     console.log('Selltravelmoney-tab');
//     sellCurrencyLoadFlagWithRate();
// });
//   $("#Internationaltransfer-tab").click(function (event) {
//     console.log('Internationaltransfer-tab');
//   // loadDropdownSearch2();
//   $("#Internationaltransfer_1").change();
//   transferSource();
//   });


  // $("input").blur(function() {
  //   if ($(this).attr("data-selected-all")) {
  //     $(this).removeAttr("data-selected-all");
  //   }
  // });
  

  // $("input").click(function() {
  //   if (!$(this).attr("data-selected-all")) {
  //     try {
  //       $(this).selectionStart = 0;
  //       $(this).selectionEnd = $(this).value.length + 1;
  //       //add atribute allowing normal selecting post focus
  //       $(this).attr("data-selected-all", true);
  //     } catch (err) {
  //       $(this).select();
  //       //add atribute allowing normal selecting post focus
  //       $(this).attr("data-selected-all", true);
  //     }
  //   }
  // });












    //    $("#newsletter-button").click(function(event) {
    //     // we stopped it
    //     // alert('stopped');
    //     event.preventDefault();
    //     var email = $('#email').val();
    //     console.log(email);
    //     //
    //     // needs for recaptacha ready
    //     grecaptcha.ready(function() {
    //         // do request for recaptcha token
    //         // response is promise with passed token
    //         grecaptcha.execute('6LdqdsIcAAAAAL3ASWTVx63XtRhCC4y1c5OHRlEo', {action: 'newsletter_subscribe'}).then(function(token) {
    //             // add token to form
    //             $('#newsletter_form').prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
    //               $.post("newsletter-recaptcha",{email: email, token: token}, function(result) {
    //                 console.log(result);
    //                 if(result.success) {
    //                   // alert('Thanks for posting.')
    //                   $("#newsletter_form").submit();
    //                 } else {
    //                         // alert('No spam, thanks.')
    //                 }
    //               });
    //         });;
    //     });
    // });
  

    // $('#newsletter_form').submit(function() {
    //     // we stopped it
    //     // alert('stopped');
    //     event.preventDefault();
    //     var email = $('#email').val();
    //     console.log(email);
    //     //
    //     // needs for recaptacha ready
    //     grecaptcha.ready(function() {
    //         // do request for recaptcha token
    //         // response is promise with passed token
    //         grecaptcha.execute('6LdqdsIcAAAAAL3ASWTVx63XtRhCC4y1c5OHRlEo', {action: 'newsletter_subscribe'}).then(function(token) {
    //             // add token to form
    //             $('#newsletter_form').prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
    //               $.post("newsletter-subscribe",{email: email, token: token}, function(result) {
    //                 console.log(result);
    //                 if(result.success) {
    //                   // alert('Thanks for posting.')
    //                 } else {
    //                         // alert('No spam, thanks.')
    //                 }
    //               });
    //         });;
    //     });
    // });
  









});

