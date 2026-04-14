// ***************Featured Logo Slider************************//
$(document).ready(function () {
  
  var $featuredSlider = $(".featured_slider");

  $(window).resize(function () {
    showFeaturedSlider();
  });

  function showFeaturedSlider() {
    if ($featuredSlider.data("owlCarousel") !== "undefined") {
      if (window.matchMedia("(max-width: 1099px)").matches) {
        initialFeaturedSlider();
      } else {
        destroyFeaturedSlider();
      }
    }
  }
  showFeaturedSlider();

  function initialFeaturedSlider() {
    $featuredSlider.addClass("owl-carousel").owlCarousel({
      autoplay: true,
      items: 5,
      loop: true,
      nav: false,
      dots: false,
      autoWidth: false,
      margin: 20,
      responsive: {
        0: {
          items: 2,
          autoWidth: false,
        },
        479: {
          items: 2,
          autoWidth: false,
        },
        768: {
          items: 3,
          autoWidth: false,
        },
        991: {
          items: 4,
          margin: 22,
        },
        1099: {
          items: 5,
        },
      },
    });
  }

  function destroyFeaturedSlider() {
    $featuredSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
  }
});

// ***********Partner Logo Slider*************************//
$(document).ready(function () {
  var $partnerSlider = $(".partner_slider");

  $(window).resize(function () {
    showPartnerSlider();
  });

  function showPartnerSlider() {
    if ($partnerSlider.data("owlCarousel") !== "undefined") {
      if (window.matchMedia("(max-width: 1099px)").matches) {
        initialPartnerSlider();
      } else {
        destroyPartnerSlider();
      }
    }
  }
  showPartnerSlider();

  function initialPartnerSlider() {
    $partnerSlider.addClass("owl-carousel").owlCarousel({
      autoplay: true,
      items: 6,
      loop: true,
      nav: false,
      dots: false,
      margin: 30,
      autoWidth: false,
      responsive: {
        0: {
          items: 3,
        },
        479: {
          items: 3,
        },
        768: {
          items: 4,
        },
        991: {
          items: 5,
        },
        1099: {
          items: 6,
        },
      },
    });
  }

  function destroyPartnerSlider() {
    $partnerSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
  }
});

// buy-your-currency-payment-options select pay option
$(document).ready(function () {
    $('.selectpay-methodbox .default-paymentbx').click(function(){

      // added by pab to be able to track payment type after post
      var status = $(this).attr('id');
      // alert(status);
      $("#paymenttype").val(status);
      // added by pab to be able to track payment type after post

        $('.default-paymentbx.selected-pay-metbox').removeClass('selected-pay-metbox'); //Remove active class from all td
        $(this).addClass('selected-pay-metbox');
    });
});

// buy-your-currency-payment-options new design select pay option
$(document).ready(function () {
  $('.selectyourpay-method .paymentbox_main').click(function(){

    // added by pab to be able to track payment type after post
    var status = $(this).attr('id');
    // alert(status);
    $("#paymenttype").val(status);
    // added by pab to be able to track payment type after post

      $('.paymentbox_main.selected-pay-metbox').removeClass('selected-pay-metbox'); //Remove active class from all td
      $(this).addClass('selected-pay-metbox');
  });
});

// nav dropdown clicked
$('.navbar .dropdown > a').click(function() {
 if (!$(this).hasClass("parent-clicked")) {
    $(this).addClass("parent-clicked");
  } else {
    location.href = this.href;
  }
});

// client area side menu
$(document).ready(function () {
  $(".mobilemenu-click").click(function () {
    $(".side-menu.mobile-sidemenu").animate({ right: 0 });
  });
});
$(document).mouseup(function (e) {
  var outsideclick = $(".side-menu.mobile-sidemenu");

  // if the target of the click isn't the container nor a descendant of the container
  if (!outsideclick.is(e.target) && outsideclick.has(e.target).length === 0) {
    outsideclick.animate({ right: "-260px" });
  }
});

// client area dropdown
$(document).ready(function(){
  $("a.down-arrow-click").click(function(){
      $(this).parents(".find-parent-tran").find(".transactin-info").slideToggle();
      $(this).parents(".find-parent-tran").toggleClass("open-slide-div");
  });
});


// New Tom select js

// Home Buy travel money
$(document).ready(function () {
  if ($('#Buytravelmoney_1').length > 0) {
    new TomSelect('#Buytravelmoney_1', {
      maxOptions: 300,
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
  }
});

$(document).ready(function () {
  if ($('#Selltravelmoney_1').length > 0) {
    new TomSelect('#Selltravelmoney_1', {
      maxOptions: 300,
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
  }
});

$(document).ready(function () {
  if ($('#Internationaltransfer_1').length > 0) {
    new TomSelect('#Internationaltransfer_1', {
      maxOptions: 300,
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
  }
});

// $(document).ready(function () {
//   if ($('#Internationaltransfer_2').length > 0) {
//     new TomSelect('#Internationaltransfer_2', {
//       create: true,
//       render: {

//         option: function (data, escape) {
//           return `<div><img class="opt_flag" src="${data.src}"><div class="opt_name">${data.text}</div></div>`;
//         },
//         item: function (item, escape) {
//           return `<div><img class="opt_flag" src="${item.src}"><div class="opt_name">${item.text}</div></div>`;
//         }
//         // ,
//         // option_create: function(data, escape) {
//         //   return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
//         // }
//           }
//     });
//   }
// });


// contact dropdown subject
$(document).ready(function () {

  if ($('#contact_drop_a').length > 0) {
    new TomSelect("#contact_drop_a", {
      create: true,
      maxOptions: 300,
    });
  }
});

// Buy currency
$(document).ready(function () {
  if ($('#Buycurrency_select_2').length > 0) {
    new TomSelect('#Buycurrency_select_2', {
      maxOptions: 300,
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
  }
});

$(document).ready(function () {
  if ($('#Buycomparecurrency_select_2').length > 0) {
    new TomSelect('#Buycomparecurrency_select_2', {
      maxOptions: 300,
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
  }
});

// Sell currency
$(document).ready(function () {
  if ($('#Sellcurrency_select_2').length > 0) {
    new TomSelect('#Sellcurrency_select_2', {
      maxOptions: 300,
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
  }
});

$(document).ready(function () {
  if ($('#Sellcomparecurrency_select_2').length > 0) {
    new TomSelect('#Sellcomparecurrency_select_2', {
      maxOptions: 300,
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
  }
});

// International Transfers currency
$(document).ready(function () {
  if ($('#Internationalcurrency_2').length > 0) {
    new TomSelect('#Internationalcurrency_2', {
      maxOptions: 300,
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
  }
});

// $(document).ready(function () {
//   if ($('#Internationalrecipient_2').length > 0) {
//     new TomSelect('#Internationalrecipient_2', {
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

$(document).ready(function () {
  if ($('#Internationalcompare_2').length > 0) {
    new TomSelect('#Internationalcompare_2', {
      maxOptions: 300,
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
  }
});

// Latest International Transfer
$(document).ready(function () {
  if ($('#Latesttransferrates_a').length > 0) {
    new TomSelect('#Latesttransferrates_a', {
      maxOptions: 300,
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
  }
});

// Buy Your Currency steps form start
$(document).ready(function () {
  if ($('#Buyyourcurrency_A3').length > 0) {
    new TomSelect('#Buyyourcurrency_A3', {
      maxOptions: 300,
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
  }
});

$(document).ready(function () {
  if ($('#Buyyourcurrency_B3').length > 0) {
    new TomSelect('#Buyyourcurrency_B3', {
      maxOptions: 300,
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
  }
});

$(document).ready(function () {
  if ($('#Gender_select_a').length > 0) {
    new TomSelect("#Gender_select_a", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Nationality_select_a').length > 0) {
    new TomSelect("#Nationality_select_a", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

// Transfer Pounds To Euros

$(document).ready(function () {
  if ($('#Transferpoundseuros_A4').length > 0) {
    new TomSelect('#Transferpoundseuros_A4', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `<div><img class="opt_flag" src="${data.src}" alt="${escape(data.text)}"><div class="opt_name">${escape(data.text)}</div></div>`;
        },
        item: function (item, escape) {
          return `<div><img class="opt_flag" src="${item.src}" alt="${escape(item.text)}"><div class="opt_name">${escape(item.text)}</div></div>`;
        }
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Transferpoundseuros_B4').length > 0) {
    new TomSelect('#Transferpoundseuros_B4', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `<div><img class="opt_flag" src="${data.src}" alt="${escape(data.text)}"><div class="opt_name">${escape(data.text)}</div></div>`;
        },
        item: function (item, escape) {
          return `<div><img class="opt_flag" src="${item.src}" alt="${escape(item.text)}"><div class="opt_name">${escape(item.text)}</div></div>`;
        }
      }
    });
  }
});

// Sell Your Currency steps form start
$(document).ready(function () {
  if ($('#Sellyourcurrency_A3').length > 0) {
    new TomSelect('#Sellyourcurrency_A3', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `<div><img class="opt_flag" src="${data.src}" alt="${escape(data.text)}"><div class="opt_name">${escape(data.text)}</div></div>`;
        },
        item: function (item, escape) {
          return `<div><img class="opt_flag" src="${item.src}" alt="${escape(item.text)}"><div class="opt_name">${escape(item.text)}</div></div>`;
        }
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Sellyourcurrency_B3').length > 0) {
    new TomSelect('#Sellyourcurrency_B3', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `<div><img class="opt_flag" src="${data.src}" alt="${escape(data.text)}"><div class="opt_name">${escape(data.text)}</div></div>`;
        },
        item: function (item, escape) {
          return `<div><img class="opt_flag" src="${item.src}" alt="${escape(item.text)}"><div class="opt_name">${escape(item.text)}</div></div>`;
        }
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Gender_select_b').length > 0) {
    new TomSelect("#Gender_select_b", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Nationality_select_b').length > 0) {
    new TomSelect("#Nationality_select_b", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

// transfer Your Currency steps form start
// $(document).ready(function () {
//   if ($('#Internationaltransfer_A4').length > 0) {
//     new TomSelect('#Internationaltransfer_A4', {
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
//   if ($('#Internationaltransfer_B4').length > 0) {
//     new TomSelect('#Internationaltransfer_B4', {
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

$(document).ready(function () {
  if ($('#Gender_select_c').length > 0) {
    new TomSelect("#Gender_select_c", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Nationality_select_c').length > 0) {
    new TomSelect("#Nationality_select_c", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Country_select_TA1').length > 0) {
    new TomSelect("#Country_select_TA1", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Country_select_TB1').length > 0) {
    new TomSelect("#Country_select_TB1", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});


// Client area main
$(document).ready(function () {
  if ($('#Gender_select_d').length > 0) {
    new TomSelect("#Gender_select_d", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Nationality_select_d').length > 0) {
    new TomSelect("#Nationality_select_d", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Country_select_TA2').length > 0) {
    new TomSelect("#Country_select_TA2", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Country_select_TB2').length > 0) {
    new TomSelect("#Country_select_TB2", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

//PAB
$(document).ready(function () {
  if ($('#Country_select_RA').length > 0) {
    new TomSelect("#Country_select_RA", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});
//PAB

$(document).ready(function () {
  if ($('#Reminder_select_TA1').length > 0) {
    new TomSelect("#Reminder_select_TA1", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Reminder_select_TB1').length > 0) {
    new TomSelect("#Reminder_select_TB1", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Currencyreminder_select_a').length > 0) {
    new TomSelect('#Currencyreminder_select_a', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `<div><img class="opt_flag" src="${data.src}" alt="${escape(data.text)}"><div class="opt_name">${escape(data.text)}</div></div>`;
        },
        item: function (item, escape) {
          return `<div><img class="opt_flag" src="${item.src}" alt="${escape(item.text)}"><div class="opt_name">${escape(item.text)}</div></div>`;
        }
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Ratereminder_select_a').length > 0) {
    new TomSelect('#Ratereminder_select_a', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `<div><img class="opt_flag" src="${data.src}" alt="${escape(data.text)}"><div class="opt_name">${escape(data.text)}</div></div>`;
        },
        item: function (item, escape) {
          return `<div><img class="opt_flag" src="${item.src}" alt="${escape(item.text)}"><div class="opt_name">${escape(item.text)}</div></div>`;
        }
      }
    });
  }
});

// Client Area Buy Currency steps form start
$(document).ready(function () {
  if ($('#CABuyyourcurrency_A1').length > 0) {
    new TomSelect('#CABuyyourcurrency_A1', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `<div><img class="opt_flag" src="${data.src}" alt="${escape(data.text)}"><div class="opt_name">${escape(data.text)}</div></div>`;
        },
        item: function (item, escape) {
          return `<div><img class="opt_flag" src="${item.src}" alt="${escape(item.text)}"><div class="opt_name">${escape(item.text)}</div></div>`;
        }
      }
    });
  }
});

$(document).ready(function () {
  if ($('#CABuyyourcurrency_B1').length > 0) {
    new TomSelect('#CABuyyourcurrency_B1', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `<div><img class="opt_flag" src="${data.src}" alt="${escape(data.text)}"><div class="opt_name">${escape(data.text)}</div></div>`;
        },
        item: function (item, escape) {
          return `<div><img class="opt_flag" src="${item.src}" alt="${escape(item.text)}"><div class="opt_name">${escape(item.text)}</div></div>`;
        }
      }
    });
  }
});

// Client Area Sell Currency steps form start
$(document).ready(function () {
  if ($('#CASellyourcurrency_A1').length > 0) {
    new TomSelect('#CASellyourcurrency_A1', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `<div><img class="opt_flag" src="${data.src}" alt="${escape(data.text)}"><div class="opt_name">${escape(data.text)}</div></div>`;
        },
        item: function (item, escape) {
          return `<div><img class="opt_flag" src="${item.src}" alt="${escape(item.text)}"><div class="opt_name">${escape(item.text)}</div></div>`;
        }
      }
    });
  }
});

$(document).ready(function () {
  if ($('#CASellyourcurrency_B1').length > 0) {
    new TomSelect('#CASellyourcurrency_B1', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `<div><img class="opt_flag" src="${data.src}" alt="${escape(data.text)}"><div class="opt_name">${escape(data.text)}</div></div>`;
        },
        item: function (item, escape) {
          return `<div><img class="opt_flag" src="${item.src}" alt="${escape(item.text)}"><div class="opt_name">${escape(item.text)}</div></div>`;
        }
      }
    });
  }
});


// Client Area Transfer Currency steps form start
$(document).ready(function () {
  if ($('#CATransfercurrency_A1').length > 0) {
    new TomSelect('#CATransfercurrency_A1', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `<div><img class="opt_flag" src="${data.src}" alt="${escape(data.text)}"><div class="opt_name">${escape(data.text)}</div></div>`;
        },
        item: function (item, escape) {
          return `<div><img class="opt_flag" src="${item.src}" alt="${escape(item.text)}"><div class="opt_name">${escape(item.text)}</div></div>`;
        }
      }
    });
  }
});

$(document).ready(function () {
  if ($('#CATransfercurrency_B1').length > 0) {
    new TomSelect('#CATransfercurrency_B1', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `<div><img class="opt_flag" src="${data.src}" alt="${escape(data.text)}"><div class="opt_name">${escape(data.text)}</div></div>`;
        },
        item: function (item, escape) {
          return `<div><img class="opt_flag" src="${item.src}" alt="${escape(item.text)}"><div class="opt_name">${escape(item.text)}</div></div>`;
        }
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Country_select_TA3').length > 0) {
    new TomSelect("#Country_select_TA3", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

$(document).ready(function () {
  if ($('#Country_select_TB3').length > 0) {
    new TomSelect("#Country_select_TB3", {
      create: true,
      maxOptions: 300,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
});

// ADDED BY PAB TO AUTO SELECT THE CONTENTS OF AN INPUT BOX ON FOCUS
$(document).ready(function () {

  $("input").blur(function() {
    if ($(this).attr("data-selected-all")) {
      $(this).removeAttr("data-selected-all");
    }
  });
  
  $("input").click(function() {
    if (!$(this).attr("data-selected-all")) {
      try {
        $(this).selectionStart = 0;
        $(this).selectionEnd = $(this).value.length + 1;
        // add atribute allowing normal selecting post focus
        $(this).attr("data-selected-all", true);
      } catch (err) {
        $(this).select();
        // add atribute allowing normal selecting post focus
        $(this).attr("data-selected-all", true);
      }
    }
  });

});


function numberWithCommas(num) {
  try {
    var formatted = num.toString().replace("/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g", ",");
    return formatted;
  } catch (error) {
    return num
  }
  return formatted;
}


// ADDED BY PAB TO AUTO SELECT THE CONTENTS OF AN INPUT BOX ON FOCUS

// ADDED BY PAB TO AUTOMATICALLY GET THE API AMOUNT ON ANY CALC
// var timeout = null;

// $(document).ready(function () {
//   $("input").keyup(function () {
//     clearTimeout(timeout); // this will clear the recursive unneccessary calls
//     timeout = setTimeout(() => {
//       $(this).trigger("change");
//       $(this).trigger("blur");
//     }, 1000);
//     // wait x seconds
//   });
// });
// ADDED BY PAB TO AUTOMATICALLY GET THE API AMOUNT ON ANY CALC
