var script = document.createElement('script');
script.src = "js/console.js";
document.head.appendChild(script)

$(window).on("load", function () {
  loadPage();
});


var loadPage = function () {
  console.log("loadPage");
  loadDropdown();
};


var loadDropdown = function (){

  console.log("initialLoad");

  var csrf_name = $("#csrf_name").val();
  var csrf_value = $("#csrf_value").val();

  var formData = {
    csrf_name: csrf_name,
    csrf_value: csrf_value,
    source_symbol: $("#Latesttransferrates_a").val(),
    sort: 'target_currency_fullname'
  };
  console.log(formData);
  // var $dropdown = $("#Internationalrecipient_2");
  
  $.ajax({
    type: "post",
    url: "transfer-load",
    data: formData,
    dataType: "json",
    encode: true,
  }).done(function (data) {
    console.log(data);
    console.log(data.data);
    var html = '';
    $.each(data.data, function () {

      // $dropdown.append('<option value="' + this.target_currency + '" data-src="flags/' + this.target_flag + '">' + this.target_currency + '</option>');
      html=html + `<tr>
              <td data-label="Currency"><span><img src="flags/` + this.target_flag + `" alt=""></span>
              ` + this.target_currency_fullname + ` (` + this.target_currency + `)</td>
              <td data-label="Rate">` + numberWithCommas(Number(this.rate).toFixed(4)) + `</td>
              <td data-label=""><a href="transfer-` + this.source_currency_fullname.replace(/ /g, "-").toLowerCase() + `-to-` + this.target_currency_fullname.replace(/ /g, "-").toLowerCase() + `"><button class="button">Start Transfer</button></a>
              </tr>`
    });
    // <td data-label=""><button onclick="location.href='/transfer-` + this.source_currency_fullname.replace(/ /g, "-").toLowerCase() + `-to-` + this.target_currency_fullname.replace(/ /g, "-").toLowerCase() + `'"  class="button">Start Transfer</button></td>

    console.log(html);
    $("#transfer_order_currency_block").html(html);

  });

  event.preventDefault();
};



$(document).ready(function () {
  $("#Latesttransferrates_a").change(function (event) {
    loadDropdown();
  });
});



