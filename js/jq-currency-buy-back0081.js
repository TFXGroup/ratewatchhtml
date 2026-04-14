var script = document.createElement('script');
script.src = "js/console.js";
document.head.appendChild(script)

var sellCurrencyLoadFlagWithRate = function () {
  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#Sellcurrency_select_2").val(),
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
    amount_currency = Number(data.data.amount_currency);
    
    $("#buybackrate").html("Best exchange rate: " + numberWithCommas(exchange_rate.toFixed(4)) + " " + $('#Sellcurrency_select_2 option:selected').attr('symbol') + " <span>✓</span>");
    $("#currencyrate").val(exchange_rate);
    $("#recipient_amount").html("You receive £ " + numberWithCommas(amount_pounds.toFixed(2)));
    $("#buybackyoureceive").val(amount_pounds);
    $("#You-send-us").val(amount_currency.toFixed(2));
    $('#You-send-us-flag').attr('src', $('#Sellcurrency_select_2 option:selected').attr('data-src'));
    console.log(data);
    document.getElementById("You-send-us").disabled = false;

  });
};
$(document).ready(sellCurrencyLoadFlagWithRate);







$(document).ready(function () {
  // $("#Buytravelmoney_1").change(buyCurrency);
  // $("#Amount-in-pounds").change(buyCurrency);
  $("#Sellcurrency_select_2").change(buyYouReceive);
  // $("#You-send-us").change(buyYouReceive);
  $("#You-send-us").keyup(sellCurrencyCalc);
  $("#Sellcomparecurrency_select_2").change(buybackComparisons);
  
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
  $("#buybackyoureceive").val(amountinpounds.toFixed(2));

}













var buyYouReceive = function () {
  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    currency: $("#Sellcurrency_select_2").val(),
    amountcurrency: $("#You-send-us").val(),
  };

  $.ajax({
    type: "post",
    url: "buyback-amount",
    data: formData,
    dataType: "json",
    encode: true,
    async: false    
  }).done(function (data) {
    console.log('buyback2');
    if(data=='') {
      location.reload();
      return;
    }

      // fix for toFixed(2) errors
      amount_pounds = Number(data.data.amount_pounds);
      amount_currency = Number(data.data.amount_currency);
    
      $("#buybackrate").html("Best exchange rate: " + numberWithCommas(data.data.exchange_rate.toFixed(4)) + " " + $('#Sellcurrency_select_2 option:selected').attr('symbol') + " <span>✓</span>");
      $("#currencyrate").val(data.data.exchange_rate);
      $("#recipient_amount").html("You receive £ " + numberWithCommas(amount_pounds.toFixed(2)));
      $("#buybackyoureceive").val(amount_pounds);
      $("#You-send-us").val(amount_currency.toFixed(2));
      $('#You-send-us-flag').attr('src', $('#Sellcurrency_select_2 option:selected').attr('data-src'));
  
    console.log(data);

  });
};







function buybackComparisons() {

  currency_symbol = $("#Sellcomparecurrency_select_2").val();

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
          <p class="red">▼ -{{difference_currency}} GBP</p>
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
    url: "get-buyback-compare-rates-currency",
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
      console.log(data);

      
      $("#compare-currency-header").html("Selling 1,000 " + data[0].symbol + " with");
      // $("#compare-receive").html(data[0].you_receive + " " + data[0].symbol);
      // $("#compare-save").html("Save up to " + data[0].difference_currency + " " + data[0].symbol);
      $("#compare-receive").html(numberWithCommas(data[0].you_receive) + " GBP");
      $("#compare-save").html("Save up to " + numberWithCommas(data[0].difference_currency) + " GBP");
      $("#compare-rate").html(numberWithCommas(data[0].exchange_rate));


      full_currency_html = '';
      
      for (let i = 1; i < data.length; i++) {

        temp_html = currency_html;
        temp_html = temp_html.replace("{{logo}}", data[i].logo);
        temp_html = temp_html.replace("{{logo_alt_tag}}", data[i].logo_alt_tag);
        temp_html = temp_html.replace("{{you_receive}}", data[i].you_receive);
        // temp_html = temp_html.replace("{{symbol}}", data[i].symbol);
        temp_html = temp_html.replace("{{difference_currency}}", data[i].difference_currency);
        temp_html = temp_html.replace("{{exchange_rate}}", data[i].exchange_rate);
        // console.log(temp_html);

        full_currency_html = full_currency_html + temp_html;
        
      }
  

      $("#comparison_table").html(full_currency_html);

      // $("#button-sell-now").href('sell-us-dollars');
      // $("#button-sell-now-mob").href('sell-us-dollars');
      $("#button-sell-now").prop("href", "sell-" + data[0].currency_fullname.replace(/ /g, "-").toLowerCase())
      $("#button-sell-now-mob").prop("href", "sell-" + data[0].currency_fullname.replace(/ /g, "-").toLowerCase())

    }

  });

}


$(document).ready(function () {

  $("#button-buyback").click(function (event) {

    console.log('buyback');
   
    event.preventDefault();

    document.getElementById("button-buyback").disabled = true;
    $("#button-buyback").fadeTo(200, 0.25);
    // console.log('submit');
    $("#buyback").submit();

    // $("#buy").submit();

  });

});


