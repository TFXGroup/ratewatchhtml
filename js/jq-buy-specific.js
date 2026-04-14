var script = document.createElement('script');
script.src = "js/console.js";
document.head.appendChild(script)


$(document).ready(function () {
  // $("#Amount-in-pounds").change(buyCurrency);
  $("#Amount-in-pounds").keyup(buyCurrencyCalcFrom);
  // $("#Amount-in-pounds").change(buyCurrencyTest);
  // $("#You-receive").change(buyYouReceive);
  $("#You-receive").keyup(buyCurrencyCalcTo);
  // showGraph();
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







buyCurrencyAmount = function () {
  console.log('buyCurrencyAmount');

  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#currencyid").val(),
    amountinpounds: $("#Amount-in-pounds").val(),
  };
  console.log(formData);

  return $.ajax({
    type: "post",
    url: "buy-amount",
    data: formData,
    dataType: "json",
    encode: true
  });
  
};

buyCurrencyTest = function () {
  console.log('buyCurrencyTest');

  buyCurrencyAmount().then(function(data){
    console.log(data);
    // fix for toFixed(2) errors
    amount_pounds = Number(data.data.amount_pounds);
    amount_currency = Number(data.data.amount_currency);
    
    $("#Amount-in-pounds").val(amount_pounds.toFixed(2));
    $("#You-receive").val(amount_currency.toFixed(2));

  }, function (err) {
    console.log("An error ocurred");
    console.log(err);
  });
  
};






var buyCurrency = function () {
  console.log('buyCurrency');

  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#currencyid").val(),
    amountinpounds: $("#Amount-in-pounds").val(),
  };
  console.log(formData);

  $.ajax({
    type: "post",
    url: "buy-amount",
    data: formData,
    dataType: "json",
    encode: true,
    async: false
  }).done(function (data) {
    console.log(data);

    // fix for toFixed(2) errors
    amount_pounds = Number(data.data.amount_pounds);
    amount_currency = Number(data.data.amount_currency);
    
    $("#Amount-in-pounds").val(amount_pounds.toFixed(2));
    $("#You-receive").val(amount_currency.toFixed(2));
    console.log(data);

  });
};

var buyYouReceive = function () {
  console.log('buyYouReceive');

  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#currencyid").val(),
    amountcurrency: $("#You-receive").val(),
  };
  console.log(formData);

  $.ajax({
    type: "post",
    url: "buy-amount",
    data: formData,
    dataType: "json",
    encode: true,
    async: false
  }).done(function (data) {

    // fix for toFixed(2) errors
    amount_pounds = Number(data.data.amount_pounds);
    amount_currency = Number(data.data.amount_currency);
    
    $("#Amount-in-pounds").val(amount_pounds.toFixed(2));
    $("#You-receive").val(amount_currency.toFixed(2));

    console.log(data);
    document.getElementById("Amount-in-pounds").disabled = false;
    document.getElementById("You-receive").disabled = false;

  });
};


$(document).ready(function () {

  $("#button-buy").click(function (event) {
  
    console.log('buy');
    event.preventDefault();
    document.getElementById("button-buy").disabled = true;
    $("#button-buy").fadeTo(200, 0.25);
    $("#buy").submit();

  });
  
});



  var showGraph = function () {
    var csrf_name = $("#csrf_name").val();
    var csrf_value = $("#csrf_value").val();
  
    var formData = {
      csrf_name: csrf_name,
      csrf_value: csrf_value,
      currency: $("#currencyid").val(),
    };
    console.log('showGraph2');
    console.log($("#currencyid").val());
 
    $.ajax({
      type: "post",
      url: "currency-data",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
      var date = [];
      var rate = [];

      for (var i in data) {
          date.push(data[i].date);
          rate.push(data[i].rate);
      }

      var chartdata = {
          labels: date,
          datasets: [{
              label: $("#currencysymbol").val() + ' Rate',
              fill: true,
              backgroundColor: '#7d00f2',
              borderColor: '#4010eb',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: rate
          }]
      };

      var graphTarget = $("#graphCanvas");

      var barGraph = new Chart(graphTarget, {
          type: 'line',
          data: chartdata,
          options: {
            responsive: true,
            scales: {

            xAxes: [{
              display: true,
              type: 'time',
              time: {
                parser: 'YYYY-MM-DD HH:mm:ss',
                unit: 'minute',
                displayFormats: {
                    'minute': 'YYYY-MM-DD HH:mm:ss',
                    'hour': 'YYYY-MM-DD HH:mm:ss'
                }
            },
    }
          ],            
          yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                }
            }]
        },
        animations: {
              tension: {
                duration: 5000,
                easing: 'linear',
                from: 0.75,
                to: 0.25,
                loop: true
              }

        },

                                plugins: {
                                  legend: {
                                    display: false,
                                      title: {
                                        display: true,
                                        text: 'Legend Title',
                                      }
                                    }
                                                      }
          }
      });

    });
};
  

