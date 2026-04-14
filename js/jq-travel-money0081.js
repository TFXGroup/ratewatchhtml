var script = document.createElement('script');
script.src = "js/console.js";
document.head.appendChild(script)

var buyCurrencyLoadFlagWithRate = function () {
  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#Buycurrency_select_2").val(),
  };

  $.ajax({
    type: "post",
    url: "buy-amount",
    data: formData,
    dataType: "json",
    encode: true,
  }).done(function (data) {
    console.log('buy1');
    // if(data=='') {
    //   location.reload();
    //   return;
    // }
    $("#buyrate").html("Best exchange rate 1 GBP = " + numberWithCommas(data.data.exchange_rate.toFixed(4)) + " " + $('#Buycurrency_select_2 option:selected').attr('symbol') + " <span>✓</span>");
    $("#currencyrate").val(data.data.exchange_rate);
    $('#You-receive-flag').attr('src', $('#Buycurrency_select_2 option:selected').attr('data-src'));
    console.log(data);
    document.getElementById("Amount-in-pounds").disabled = false;
    document.getElementById("You-receive").disabled = false;

  });
};
$(document).ready(buyCurrencyLoadFlagWithRate);




$(document).ready(function () {
  $("#Buycurrency_select_2").change(buyCurrency);
  // $("#Amount-in-pounds").change(buyCurrency);
  // $("#You-receive").change(buyYouReceive);
  $("#Amount-in-pounds").keyup(buyCurrencyCalcFrom);
  $("#You-receive").keyup(buyCurrencyCalcTo);
  $("#Buycomparecurrency_select_2").change(buyComparisons);
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


var buyCurrency = function () {
  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#Buycurrency_select_2").val(),
    amountinpounds: $("#Amount-in-pounds").val(),
  };

  $.ajax({
    type: "post",
    url: "buy-amount",
    data: formData,
    dataType: "json",
    encode: true,
    async: false
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

    $("#buyrate").html("Best exchange rate 1 GBP = " + numberWithCommas(exchange_rate.toFixed(4)) + " " + $('#Buycurrency_select_2 option:selected').attr('symbol') + " <span>✓</span>");
    $("#currencyrate").val(exchange_rate);
    $("#Amount-in-pounds").val(amount_pounds.toFixed(2));
    $("#You-receive").val(amount_currency.toFixed(2));
    $('#You-receive-flag').attr('src', $('#Buycurrency_select_2 option:selected').attr('data-src'));
    console.log(data);

  });
};


var buyYouReceive = function () {
  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#Buycurrency_select_2").val(),
    youreceive: $("#You-receive").val(),
  };

  $.ajax({
    type: "post",
    url: "buy-amount",
    data: formData,
    dataType: "json",
    encode: true,
    async: false
  }).done(function (data) {
    console.log('buy3');
    // if(data=='') {
    //   location.reload();
    //   return;
    // }

    // fix for toFixed(2) errors
    exchange_rate = Number(data.data.exchange_rate);
    amount_pounds = Number(data.data.amount_pounds);
    amount_currency = Number(data.data.amount_currency);

    $("#buyrate").html("Best exchange rate 1 GBP = " + numberWithCommas(exchange_rate.toFixed(4)) + " " + $('#Buycurrency_select_2 option:selected').attr('symbol') + " <span>✓</span>");
    $("#currencyrate").val(exchange_rate);
    $("#Amount-in-pounds").val(amount_pounds.toFixed(2));
    $("#You-receive").val(amount_currency.toFixed(2));

    console.log(data);

  });
};
 





function buyComparisons() {

  currency_symbol = $("#Buycomparecurrency_select_2").val();

  console.log(currency_symbol);

  var currency_html = `
  <tr>
  <td>
      <div class="logo_box">
          <img src="images/buyselltransfer/logos/{{logo}}" alt="{{logo_alt_tag}}">
      </div>
  </td>
  <td>
      <div class="receive_box">
          <p>{{you_receive}} GBP</p>
          <p class="red">▼ -{{difference_currency}} {{symbol}}</p>
      </div>
  </td>
  <td class="d-sm-table-cell d-none">
      <div class="fee_box">
          <p>0.00 GBP</p>
      </div>
  </td>
  <td>
      <div class="exchange_box">
          <p>{{exchange_rate}}</p>
      </div>
  </td>
  <td class="empty">
      <div>
          <p></p>
      </div>
  </td>
</tr>                                                              
`;

  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency_symbol: currency_symbol
  };

  console.log(formData);
  $.ajax({
    type: "post",
    url: "get-buy-compare-rates-currency",
    data: formData,
    // async: false,
    dataType: "json",
    encode: true,
  }).done(function (data) {
    if(data=='') {
      location.reload();
      return;
    }

    console.log(data);

    if (typeof data == "string") {
      // error

    } else if (Array.isArray(data)) {
      // continue

      // $("#compare-currency-header").html("Buying 1,000 " + data[0].symbol + " with"); // buy page is different to buyback - doesn't mention the currency
      $("#compare-receive").html(numberWithCommas(data[0].you_receive) + " " + data[0].symbol);
      $("#compare-save").html("Save up to " + numberWithCommas(data[0].difference_currency) + " " + data[0].symbol);
      // $("#compare-receive").html(data[0].you_receive + " GBP");
      // $("#compare-save").html("Save up to " + data[0].difference_currency + " GBP");
      $("#compare-rate").html(numberWithCommas(data[0].exchange_rate));


      full_currency_html = '';
      
      for (let i = 1; i < data.length; i++) {

        temp_html = currency_html;
        temp_html = temp_html.replace("{{logo}}", data[i].logo);
        temp_html = temp_html.replace("{{logo_alt_tag}}", data[i].logo_alt_tag);
        temp_html = temp_html.replace("{{you_receive}}", data[i].you_receive);
        temp_html = temp_html.replace("{{symbol}}", data[i].symbol);
        temp_html = temp_html.replace("{{difference_currency}}", data[i].difference_currency);
        temp_html = temp_html.replace("{{exchange_rate}}", data[i].exchange_rate);
        // console.log(temp_html);

        full_currency_html = full_currency_html + temp_html;
        
      }

      $("#comparison_table").html(full_currency_html);

      $("#button-buy-now").prop("href", "buy-" + data[0].currency_fullname.replace(/ /g, "-").toLowerCase())
      $("#button-buy-now-mob").prop("href", "buy-" + data[0].currency_fullname.replace(/ /g, "-").toLowerCase())


    }

  });

}





$(document).ready(function () {

  $("#button-buy").click(function (event) {

    console.log('buy');
   
    event.preventDefault();

    document.getElementById("button-buy").disabled = true;
    $("#button-buy").fadeTo(200, 0.25);
    // console.log('submit');
    $("#buy").submit();

    // $("#buy").submit();

  });

});



