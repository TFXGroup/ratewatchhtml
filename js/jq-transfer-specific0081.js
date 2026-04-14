var script = document.createElement('script');
script.src = "js/console.js";
document.head.appendChild(script)


/////////////////////////////////////////////////////////////////////
// v1
/////////////////////////////////////////////////////////////////////
// $(document).ready(function () {
//   // $("#source_amount").change(transferSource);
//   // $("#target_amount").change(transferTarget);
//   $("#source_amount").keyup(transferCurrencyCalcFrom);
//   $("#target_amount").keyup(transferCurrencyCalcTo);
// });



// var transferCurrencyCalcFrom = function () {

//   var currencyrate = $("#transfercurrencyrate").val();
//   var source_amount = $("#source_amount").val();
//   var target_amount = $("#target_amount").val();

//   currencyrate = Number(currencyrate);
//   source_amount = Number(source_amount);
//   target_amount = Number(target_amount);

//   target_amount = source_amount * currencyrate;
//   $("#target_amount").val((target_amount).toFixed(2));

// }

// var transferCurrencyCalcTo = function () {

//   var currencyrate = $("#transfercurrencyrate").val();
//   var source_amount = $("#source_amount").val();
//   var target_amount = $("#target_amount").val();

//   currencyrate = Number(currencyrate);
//   source_amount = Number(source_amount);
//   target_amount = Number(target_amount);

//   source_amount = target_amount / currencyrate;
//   $("#source_amount").val((source_amount).toFixed(2));

// }









// var transferSource = function () {

//     var csrf_name = $("#csrf_name").val();
//     var csrf_value = $("#csrf_value").val();
  
//     var formData = {
//       csrf_name: csrf_name,
//       csrf_value: csrf_value,
//       source_symbol: $("#source_currency").val(),
//       target_symbol: $("#target_currency").val(),
//       source_amount: $("#source_amount").val(),
//     };
//     console.log(formData);

//     $.ajax({
//       type: "post",
//       url: "transfer-amount",
//       data: formData,
//       dataType: "json",
//       encode: true,
//       async: false
//     }).done(function (data) {
//       console.log(data);
//       console.log(data.data);

//       // fix for toFixed(2) errors
//       rate = Number(data.data.rate);
//       source_amount = Number(data.data.source_amount);
//       target_amount = Number(data.data.target_amount);
      
//       $("#transfer_rate").html("Best exchange rate 1 " + $("#source_currency").val() + " = " + numberWithCommas(rate.toFixed(4)) + " " + $("#target_currency").val() + " <span>✓</span>");
//       $("#transfercurrencyrate").val(rate);
//       $("#source_amount").val((source_amount).toFixed(2));
//       $("#target_amount").val((target_amount).toFixed(2));
//       document.getElementById("source_amount").disabled = false;
//       document.getElementById("target_amount").disabled = false;

//     });

//   }


//   var transferTarget = function () {

//     var csrf_name = $("#csrf_name").val();
//     var csrf_value = $("#csrf_value").val();
  
//     var formData = {
//       csrf_name: csrf_name,
//       csrf_value: csrf_value,
//       source_symbol: $("#source_currency").val(),
//       target_symbol: $("#target_currency").val(),
//       target_amount: $("#target_amount").val(),
//     };
//     console.log(formData);

//     $.ajax({
//       type: "post",
//       url: "transfer-amount",
//       data: formData,
//       dataType: "json",
//       encode: true,
//       async: false
//     }).done(function (data) {
//       console.log(data);
//       console.log(data.data);

//       // fix for toFixed(2) errors
//       rate = Number(data.data.rate);
//       source_amount = Number(data.data.source_amount);
//       target_amount = Number(data.data.target_amount);
      
//       $("#transfer_rate").html("Best exchange rate 1 " + $("#source_currency").val() + " = " + numberWithCommas(rate.toFixed(4)) + " " + $("#target_currency").val() + " <span>✓</span>");
//       $("#transfercurrencyrate").val(rate);
//       $("#source_amount").val((source_amount).toFixed(2));
//       $("#target_amount").val((target_amount).toFixed(2));

//     });

//   }



  
// $(document).ready(function () {

//   $("#button-transfer").click(function (event) {
  
//     console.log('transfer');
//         event.preventDefault();
//     document.getElementById("button-transfer").disabled = true;
//     $("#button-transfer").fadeTo(200, 0.25);
//     $("#transfer").submit();

//   });
  
// });

  



// $(window).on("load", function () {
//   loadPage();
// });

// var loadPage = function () {
//   console.log("loadPage");
//   // loadDropdownSearch2();

//   transferSource();
// };
/////////////////////////////////////////////////////////////////////




















/////////////////////////////////////////////////////////////////////
// v1.5 test 20220926
/////////////////////////////////////////////////////////////////////
// $(document).ready(function () {
//   if ($('#Internationaltransfer_2').length > 0) {
//     new TomSelect('#Internationaltransfer_2', {
//       maxOptions: 300,
//       render: {
//         option: function (data, escape) {
//           return `<div><img class="opt_flag" src="${data.src}"><div class="opt_name">${data.text}</div></div>`;
//         },
//         item: function (item, escape) {
//           return `<div><img class="opt_flag" src="${item.src}"><div class="opt_name">${item.text}</div></div>`;
//         }
//       }
//     });
//   }
// });
// var loadDropdownSearch1 = function () {
//   console.log("loadDropdownSearch1");
//   console.log("asyncType: " + asyncType);
//   // alert(controlname);
//   // return;
//   Window.tom1 = new TomSelect("#Internationaltransfer_1", {
//     render: {
//       option: function (data, escape) {
//         return `<div><img class="opt_flag" src="${data.src}"><div class="opt_name">${data.text}</div></div>`;
//       },
//       item: function (item, escape) {
//         return `<div><img class="opt_flag" src="${item.src}"><div class="opt_name">${item.text}</div></div>`;
//       },
//     },
//   });
// };

// var loadDropdownSearch2 = function () {
//   console.log("loadDropdownSearch2");
//   console.log("asyncType: " + asyncType);
//   // alert(controlname);
//   // return;
//   Window.tom2 = new TomSelect("#Internationaltransfer_2", {
//     render: {
//       option: function (data, escape) {
//         return `<div><img class="opt_flag" src="${data.src}"><div class="opt_name">${data.text}</div></div>`;
//       },
//       item: function (item, escape) {
//         return `<div><img class="opt_flag" src="${item.src}"><div class="opt_name">${item.text}</div></div>`;
//       },
//     },
//   });
// };
/////////////////////////////////////////////////////////////////////












/////////////////////////////////////////////////////////////////////
// v2 20220926
/////////////////////////////////////////////////////////////////////
// $(document).ready(function () {
//   if ($('#Internationaltransfer_2').length > 0) {
//     new TomSelect('#Internationaltransfer_2', {
//       maxOptions: 300,
//       render: {
//         option: function (data, escape) {
//           return `<div><img class="opt_flag" src="${data.src}"><div class="opt_name">${data.text}</div></div>`;
//         },
//         item: function (item, escape) {
//           return `<div><img class="opt_flag" src="${item.src}"><div class="opt_name">${item.text}</div></div>`;
//         }
//       }
//     });
//   }
// });
// $(document).ready(function () {
//     new TomSelect('#Internationaltransfer_2', {
//       maxOptions: 300,
//       render: {
//         option: function (data, escape) {
//           return `<div><img class="opt_flag" src="${data.src}"><div class="opt_name">${data.text}</div></div>`;
//         },
//         item: function (item, escape) {
//           return `<div><img class="opt_flag" src="${item.src}"><div class="opt_name">${item.text}</div></div>`;
//         }
//       }
//     });
  
// });

$(document).ready(function () {
  // $("#Internationalcurrency_2").change(transferSource); // expanded to do more work
  $("#Internationalcurrency_2").change(function(event){
    event.preventDefault();
    // store the currently selected target currency
    target_symbol = $("#Internationalrecipient_2").val();
    transferLoad(target_symbol);
    // transferSource(); // removed 20211126
  }
  );
  $("#Internationalrecipient_2").change(transferSource);
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





var transferSource = function () {

    var csrf_name = $("#csrf_name").val();
    var csrf_value = $("#csrf_value").val();
  
    var formData = {
      csrf_name: csrf_name,
      csrf_value: csrf_value,
      source_symbol: $("#Internationalcurrency_2").val(),
      target_symbol: $("#Internationalrecipient_2").val(),
      source_amount: $("#source_amount").val(),
    };
    console.log(formData);

    $.ajax({
      type: "post",
      url: "transfer-amount",
      data: formData,
      dataType: "json",
      encode: true
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

      $("#transfer_rate").html("Best exchange rate 1 " + $("#Internationalcurrency_2").val() + " = " + numberWithCommas(rate.toFixed(4)) + " " + $("#Internationalrecipient_2").val() + " <span>✓</span>");
      $("#transfercurrencyrate").val(rate);
      $("#source_amount").val(source_amount.toFixed(2));
      $("#target_amount").val(target_amount.toFixed(2));
      document.getElementById("source_amount").disabled = false;
      document.getElementById("target_amount").disabled = false;

    });

  }





  var transferTarget = function () {

    var csrf_name = $("#csrf_name").val();
    var csrf_value = $("#csrf_value").val();
  
    var formData = {
      csrf_name: csrf_name,
      csrf_value: csrf_value,
      source_symbol: $("#Internationalcurrency_2").val(),
      target_symbol: $("#Internationalrecipient_2").val(),
      target_amount: $("#target_amount").val(),
    };
    console.log(formData);

    $.ajax({
      type: "post",
      url: "transfer-amount",
      data: formData,
      dataType: "json",
      encode: true,
      async: false
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

      $("#transfer_rate").html("Best exchange rate 1 " + $("#Internationalcurrency_2").val() + " = " + numberWithCommas(rate.toFixed(4)) + " " + $("#Internationalrecipient_2").val() + " <span>✓</span>");
      $("#transfercurrencyrate").val(rate);
      $("#source_amount").val(source_amount.toFixed(2));
      $("#target_amount").val(target_amount.toFixed(2));
      document.getElementById("source_amount").disabled = false;
      document.getElementById("target_amount").disabled = false;

    });

  }





  var transferLoad = function (target_symbol='GBP') {


    var csrf_name = $("#csrf_name").val();
    var csrf_value = $("#csrf_value").val();
  
    var formData = {
      csrf_name: csrf_name,
      csrf_value: csrf_value,
      source_symbol: $("#Internationalcurrency_2").val()
    };
    console.log(formData);
    var $dropdown = $("#Internationalrecipient_2");
    
    $.ajax({
      type: "post",
      url: "transfer-load",
      data: formData,
      dataType: "json",
      encode: true,
      async: false
    }).done(function (data) {
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

      loadDropdownSearch2();

      transferTarget();

    });

    // event.preventDefault();
  }




$(window).on("load", function () {
  loadPage();
});

var loadPage = function () {
  console.log("loadPage");
  loadDropdownSearch2();
  // $("#Internationalcurrency_2").change();

  // transferLoad(); 20220926

  var transfercurrencytarget = $("#target_currency").val();
  transferLoad(transfercurrencytarget);

  transferSource();
};



var loadDropdownSearch2 = function () {
  console.log("loadDropdownSearch2");
  // alert(controlname);
  // return;
  Window.tom2 = new TomSelect("#Internationalrecipient_2", {
    render: {
      option: function (data, escape) {
        return `<div><img class="opt_flag" src="${data.src}"><div class="opt_name">${data.text}</div></div>`;
      },
      item: function (item, escape) {
        return `<div><img class="opt_flag" src="${item.src}"><div class="opt_name">${item.text}</div></div>`;
      },
    },
  });
};



$(document).ready(function () {

  $("#button-transfer").click(function (event) {
    
    console.log('transfer');
    event.preventDefault();
    document.getElementById("button-transfer").disabled = true;
    $("#button-transfer").fadeTo(200,0.25);

    $("#transfer").submit();
  });

});



