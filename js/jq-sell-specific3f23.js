var script = document.createElement('script');
script.src = "js/console.js";
document.head.appendChild(script)



$(document).ready(function () {
  // $("#You-send-us").change(sellYouReceive);
  $("#You-send-us").keyup(sellCurrencyCalc);
});

var sellCurrencyCalc = function () {

  var currencyrate = $("#currencyrate").val();
  var amountinpounds = 0;
  var amountcurrency = $("#You-send-us").val();

  currencyrate = Number(currencyrate);
  amountinpounds = Number(amountinpounds);
  amountcurrency = Number(amountcurrency);

  amountinpounds = amountcurrency / currencyrate;
  // $("#You-receive").val((amountinpounds).toFixed(2));
  $("#recipient_amount").html("You receive £ " + numberWithCommas(amountinpounds.toFixed(2)));
  $("#buybackyoureceive").val((amountinpounds).toFixed(2));

}



var sellYouReceive = function () {
  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#currencyid").val(),
    amountcurrency: $("#You-send-us").val(),
  };

  $.ajax({
    type: "post",
    url: "buyback-amount",
    data: formData,
    dataType: "json",
    encode: true,
  }).done(function (data) {

    // fix for toFixed(2) errors
    amount_pounds = Number(data.data.amount_pounds);
    amount_currency = Number(data.data.amount_currency);

    $("#recipient_amount").html("You receive £ " + numberWithCommas(amount_pounds.toFixed(2)));
    $("#buybackyoureceive").val(amount_pounds.toFixed(2));
    $("#You-send-us").val(amount_currency.toFixed(2));
    
    console.log(data);

  });
};



$(document).ready(function () {

  $("#button-buyback").click(function (event) {

    console.log('buyback');
    event.preventDefault();
    document.getElementById("button-buyback").disabled = true;
    $("#button-buyback").fadeTo(200, 0.25);
    $("#buyback").submit();

  });

});


