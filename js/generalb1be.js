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


// New JS 08/04/2026 started

// Chart js
$(document).ready(function () {
  const customCanvasBackgroundColor = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
        const {ctx, chartArea} = chart;

        if (!chartArea) return; // prevents error on initial load

        ctx.save();
        ctx.fillStyle = options.color || '#fff';
        ctx.fillRect(
            chartArea.left,
            chartArea.top,
            chartArea.right - chartArea.left,
            chartArea.bottom - chartArea.top
        );
        ctx.restore();
    }
  };

  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7',],
        datasets: [{
            data: [1.1555, 1.1568, 1.1522, 1.1520, 1.1528, 1.1505, 1.1482],
            borderColor: '#ff4d4d',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            customCanvasBackgroundColor: {
                color: '#E6F2FF'
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#e5e5e5'
                }
            },
            y: {
                grid: {
                    color: '#e5e5e5'
                },
                ticks: {
                    callback: function(value) {
                        return value.toFixed(4);
                    }
                }
            }
        }
    },
    plugins: [customCanvasBackgroundColor]
  });

  const sellTravelChart = document.getElementById('sellTravelChart');
  new Chart(sellTravelChart, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7',],
        datasets: [{
            data: [1.1555, 1.1568, 1.1522, 1.1520, 1.1528, 1.1505, 1.1482],
            borderColor: '#ff4d4d',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            customCanvasBackgroundColor: {
                color: '#E6F2FF'
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#e5e5e5'
                }
            },
            y: {
                grid: {
                    color: '#e5e5e5'
                },
                ticks: {
                    callback: function(value) {
                        return value.toFixed(4);
                    }
                }
            }
        }
    },
    plugins: [customCanvasBackgroundColor]
  });

  const internationalTransfer = document.getElementById('internationalTransferChart');
  new Chart(internationalTransferChart, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7',],
        datasets: [{
            data: [1.1555, 1.1568, 1.1522, 1.1520, 1.1528, 1.1505, 1.1482],
            borderColor: '#ff4d4d',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            customCanvasBackgroundColor: {
                color: '#E6F2FF'
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#e5e5e5'
                }
            },
            y: {
                grid: {
                    color: '#e5e5e5'
                },
                ticks: {
                    callback: function(value) {
                        return value.toFixed(4);
                    }
                }
            }
        }
    },
    plugins: [customCanvasBackgroundColor]
  });
});

// Rate watch Page - tom select JS added

$(document).ready(function () {
  if ($('#BuyTravelMoney_1').length > 0) {
    new TomSelect('#BuyTravelMoney_1', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `
          <div>
            <img class="opt_flag" src="${data.src}" alt="${escape(data.text)}">
            <div class="opt_name">${escape(data.text)}</div>
          </div>`;
        },
        item: function (item, escape) {
          return `
          <div>
            <div class="opt_name">${escape(item.text)}</div>
            <img class="opt_flag_selected" src="${item.src}" alt="${escape(item.text)}">
          </div>`;
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
  if ($('#homeSellTravel').length > 0) {
    new TomSelect('#homeSellTravel', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `
          <div>
            <img class="opt_flag" src="${data.src}" alt="${escape(data.text)}">
            <div class="opt_name">${escape(data.text)}</div>
          </div>`;
        },
        item: function (item, escape) {
          return `
          <div>
            <div class="opt_name">${escape(item.text)}</div>
            <img class="opt_flag_selected" src="${item.src}" alt="${escape(item.text)}">
          </div>`;
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
  if ($('#youSendCurrency').length > 0) {
    new TomSelect('#youSendCurrency', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `
          <div>
            <img class="opt_flag" src="${data.src}" alt="${escape(data.text)}">
            <div class="opt_name">${escape(data.text)}</div>
          </div>`;
        },
        item: function (item, escape) {
          return `
          <div>
            <div class="opt_name">${escape(item.text)}</div>
            <img class="opt_flag_selected" src="${item.src}" alt="${escape(item.text)}">
          </div>`;
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
  if ($('#recipientGets').length > 0) {
    new TomSelect('#recipientGets', {
      maxOptions: 300,
      render: {
        option: function (data, escape) {
          return `
          <div>
            <img class="opt_flag" src="${data.src}" alt="${escape(data.text)}">
            <div class="opt_name">${escape(data.text)}</div>
          </div>`;
        },
        item: function (item, escape) {
          return `
          <div>
            <div class="opt_name">${escape(item.text)}</div>
            <img class="opt_flag_selected" src="${item.src}" alt="${escape(item.text)}">
          </div>`;
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
  new TomSelect('#country-code', {
    maxItems: 1,
    valueField: 'dialCode',
    labelField: 'dialCode',
    searchField: ['country', 'dialCode'],
    items: ['+44'],          // Default selected — Canada (matching your screenshot)
    controlInput: null,     // Disable typing in control

    options : [
        { dialCode: '+93', country: 'Afghanistan', code: 'af' },
        { dialCode: '+355', country: 'Albania', code: 'al' },
        { dialCode: '+213', country: 'Algeria', code: 'dz' },
        { dialCode: '+61', country: 'Australia', code: 'au' },
        { dialCode: '+43', country: 'Austria', code: 'at' },
        { dialCode: '+880', country: 'Bangladesh', code: 'bd' },
        { dialCode: '+32', country: 'Belgium', code: 'be' },
        { dialCode: '+55', country: 'Brazil', code: 'br' },
        { dialCode: '+1', country: 'Canada', code: 'ca' },
        { dialCode: '+86', country: 'China', code: 'cn' },
        { dialCode: '+20', country: 'Egypt', code: 'eg' },
        { dialCode: '+33', country: 'France', code: 'fr' },
        { dialCode: '+49', country: 'Germany', code: 'de' },
        { dialCode: '+91', country: 'India', code: 'in' },
        { dialCode: '+62', country: 'Indonesia', code: 'id' },
        { dialCode: '+353', country: 'Ireland', code: 'ie' },
        { dialCode: '+972', country: 'Israel', code: 'il' },
        { dialCode: '+39', country: 'Italy', code: 'it' },
        { dialCode: '+81', country: 'Japan', code: 'jp' },
        { dialCode: '+60', country: 'Malaysia', code: 'my' },
        { dialCode: '+52', country: 'Mexico', code: 'mx' },
        { dialCode: '+31', country: 'Netherlands', code: 'nl' },
        { dialCode: '+64', country: 'New Zealand', code: 'nz' },
        { dialCode: '+234', country: 'Nigeria', code: 'ng' },
        { dialCode: '+92', country: 'Pakistan', code: 'pk' },
        { dialCode: '+63', country: 'Philippines', code: 'ph' },
        { dialCode: '+48', country: 'Poland', code: 'pl' },
        { dialCode: '+351', country: 'Portugal', code: 'pt' },
        { dialCode: '+974', country: 'Qatar', code: 'qa' },
        { dialCode: '+7', country: 'Russia', code: 'ru' },
        { dialCode: '+966', country: 'Saudi Arabia', code: 'sa' },
        { dialCode: '+65', country: 'Singapore', code: 'sg' },
        { dialCode: '+27', country: 'South Africa', code: 'za' },
        { dialCode: '+82', country: 'South Korea', code: 'kr' },
        { dialCode: '+34', country: 'Spain', code: 'es' },
        { dialCode: '+94', country: 'Sri Lanka', code: 'lk' },
        { dialCode: '+46', country: 'Sweden', code: 'se' },
        { dialCode: '+41', country: 'Switzerland', code: 'ch' },
        { dialCode: '+66', country: 'Thailand', code: 'th' },
        { dialCode: '+90', country: 'Turkey', code: 'tr' },
        { dialCode: '+971', country: 'United Arab Emirates', code: 'ae' },
        { dialCode: '+44', country: 'United Kingdom', code: 'gb' },
        { dialCode: '+1', country: 'United States', code: 'us' },
        { dialCode: '+84', country: 'Vietnam', code: 'vn' },
    ],

    render: {
      // Closed state — flag + code
      item: function(data, escape) {
        return `
          <div class="ts-selected-item">
            <img src="../country-code-flags/${data.code}.png" width="30" alt="${escape(data.country)}">
            <span>${escape(data.dialCode)}</span>
          </div>
        `;
      },
      // Dropdown list rows
      option: function(data, escape) {
        return `
          <div class="ts-option-item">
            <img src="../country-code-flags/${data.code}.png" width="30" alt="${escape(data.country)}">
            <span class="ts-country-name">${escape(data.country)}</span>
            <span class="ts-country-code">${escape(data.dialCode)}</span>
          </div>
        `;
      }
    }
  });
});

$(document).ready(function () {
  new TomSelect('#international-country-code', {
    maxItems: 1,
    valueField: 'dialCode',
    labelField: 'dialCode',
    searchField: ['country', 'dialCode'],
    items: ['+44'],          // Default selected — Canada (matching your screenshot)
    controlInput: null,     // Disable typing in control

    options : [
        { dialCode: '+93', country: 'Afghanistan', code: 'af' },
        { dialCode: '+355', country: 'Albania', code: 'al' },
        { dialCode: '+213', country: 'Algeria', code: 'dz' },
        { dialCode: '+61', country: 'Australia', code: 'au' },
        { dialCode: '+43', country: 'Austria', code: 'at' },
        { dialCode: '+880', country: 'Bangladesh', code: 'bd' },
        { dialCode: '+32', country: 'Belgium', code: 'be' },
        { dialCode: '+55', country: 'Brazil', code: 'br' },
        { dialCode: '+1', country: 'Canada', code: 'ca' },
        { dialCode: '+86', country: 'China', code: 'cn' },
        { dialCode: '+20', country: 'Egypt', code: 'eg' },
        { dialCode: '+33', country: 'France', code: 'fr' },
        { dialCode: '+49', country: 'Germany', code: 'de' },
        { dialCode: '+91', country: 'India', code: 'in' },
        { dialCode: '+62', country: 'Indonesia', code: 'id' },
        { dialCode: '+353', country: 'Ireland', code: 'ie' },
        { dialCode: '+972', country: 'Israel', code: 'il' },
        { dialCode: '+39', country: 'Italy', code: 'it' },
        { dialCode: '+81', country: 'Japan', code: 'jp' },
        { dialCode: '+60', country: 'Malaysia', code: 'my' },
        { dialCode: '+52', country: 'Mexico', code: 'mx' },
        { dialCode: '+31', country: 'Netherlands', code: 'nl' },
        { dialCode: '+64', country: 'New Zealand', code: 'nz' },
        { dialCode: '+234', country: 'Nigeria', code: 'ng' },
        { dialCode: '+92', country: 'Pakistan', code: 'pk' },
        { dialCode: '+63', country: 'Philippines', code: 'ph' },
        { dialCode: '+48', country: 'Poland', code: 'pl' },
        { dialCode: '+351', country: 'Portugal', code: 'pt' },
        { dialCode: '+974', country: 'Qatar', code: 'qa' },
        { dialCode: '+7', country: 'Russia', code: 'ru' },
        { dialCode: '+966', country: 'Saudi Arabia', code: 'sa' },
        { dialCode: '+65', country: 'Singapore', code: 'sg' },
        { dialCode: '+27', country: 'South Africa', code: 'za' },
        { dialCode: '+82', country: 'South Korea', code: 'kr' },
        { dialCode: '+34', country: 'Spain', code: 'es' },
        { dialCode: '+94', country: 'Sri Lanka', code: 'lk' },
        { dialCode: '+46', country: 'Sweden', code: 'se' },
        { dialCode: '+41', country: 'Switzerland', code: 'ch' },
        { dialCode: '+66', country: 'Thailand', code: 'th' },
        { dialCode: '+90', country: 'Turkey', code: 'tr' },
        { dialCode: '+971', country: 'United Arab Emirates', code: 'ae' },
        { dialCode: '+44', country: 'United Kingdom', code: 'gb' },
        { dialCode: '+1', country: 'United States', code: 'us' },
        { dialCode: '+84', country: 'Vietnam', code: 'vn' },
    ],

    render: {
      // Closed state — flag + code
      item: function(data, escape) {
        return `
          <div class="ts-selected-item">
            <img src="../country-code-flags/${data.code}.png" width="30" alt="${escape(data.country)}">
            <span>${escape(data.dialCode)}</span>
          </div>
        `;
      },
      // Dropdown list rows
      option: function(data, escape) {
        return `
          <div class="ts-option-item">
            <img src="../country-code-flags/${data.code}.png" width="30" alt="${escape(data.country)}">
            <span class="ts-country-name">${escape(data.country)}</span>
            <span class="ts-country-code">${escape(data.dialCode)}</span>
          </div>
        `;
      }
    }
  });
});

$(document).ready(function () {
  new TomSelect('#sell-country-code', {
    maxItems: 1,
    valueField: 'dialCode',
    labelField: 'dialCode',
    searchField: ['country', 'dialCode'],
    items: ['+44'],          // Default selected — Canada (matching your screenshot)
    controlInput: null,     // Disable typing in control

    options : [
        { dialCode: '+93', country: 'Afghanistan', code: 'af' },
        { dialCode: '+355', country: 'Albania', code: 'al' },
        { dialCode: '+213', country: 'Algeria', code: 'dz' },
        { dialCode: '+61', country: 'Australia', code: 'au' },
        { dialCode: '+43', country: 'Austria', code: 'at' },
        { dialCode: '+880', country: 'Bangladesh', code: 'bd' },
        { dialCode: '+32', country: 'Belgium', code: 'be' },
        { dialCode: '+55', country: 'Brazil', code: 'br' },
        { dialCode: '+1', country: 'Canada', code: 'ca' },
        { dialCode: '+86', country: 'China', code: 'cn' },
        { dialCode: '+20', country: 'Egypt', code: 'eg' },
        { dialCode: '+33', country: 'France', code: 'fr' },
        { dialCode: '+49', country: 'Germany', code: 'de' },
        { dialCode: '+91', country: 'India', code: 'in' },
        { dialCode: '+62', country: 'Indonesia', code: 'id' },
        { dialCode: '+353', country: 'Ireland', code: 'ie' },
        { dialCode: '+972', country: 'Israel', code: 'il' },
        { dialCode: '+39', country: 'Italy', code: 'it' },
        { dialCode: '+81', country: 'Japan', code: 'jp' },
        { dialCode: '+60', country: 'Malaysia', code: 'my' },
        { dialCode: '+52', country: 'Mexico', code: 'mx' },
        { dialCode: '+31', country: 'Netherlands', code: 'nl' },
        { dialCode: '+64', country: 'New Zealand', code: 'nz' },
        { dialCode: '+234', country: 'Nigeria', code: 'ng' },
        { dialCode: '+92', country: 'Pakistan', code: 'pk' },
        { dialCode: '+63', country: 'Philippines', code: 'ph' },
        { dialCode: '+48', country: 'Poland', code: 'pl' },
        { dialCode: '+351', country: 'Portugal', code: 'pt' },
        { dialCode: '+974', country: 'Qatar', code: 'qa' },
        { dialCode: '+7', country: 'Russia', code: 'ru' },
        { dialCode: '+966', country: 'Saudi Arabia', code: 'sa' },
        { dialCode: '+65', country: 'Singapore', code: 'sg' },
        { dialCode: '+27', country: 'South Africa', code: 'za' },
        { dialCode: '+82', country: 'South Korea', code: 'kr' },
        { dialCode: '+34', country: 'Spain', code: 'es' },
        { dialCode: '+94', country: 'Sri Lanka', code: 'lk' },
        { dialCode: '+46', country: 'Sweden', code: 'se' },
        { dialCode: '+41', country: 'Switzerland', code: 'ch' },
        { dialCode: '+66', country: 'Thailand', code: 'th' },
        { dialCode: '+90', country: 'Turkey', code: 'tr' },
        { dialCode: '+971', country: 'United Arab Emirates', code: 'ae' },
        { dialCode: '+44', country: 'United Kingdom', code: 'gb' },
        { dialCode: '+1', country: 'United States', code: 'us' },
        { dialCode: '+84', country: 'Vietnam', code: 'vn' },
    ],

    render: {
      // Closed state — flag + code
      item: function(data, escape) {
        return `
          <div class="ts-selected-item">
            <img src="../country-code-flags/${data.code}.png" width="30" alt="${escape(data.country)}">
            <span>${escape(data.dialCode)}</span>
          </div>
        `;
      },
      // Dropdown list rows
      option: function(data, escape) {
        return `
          <div class="ts-option-item">
            <img src="../country-code-flags/${data.code}.png" width="30" alt="${escape(data.country)}">
            <span class="ts-country-name">${escape(data.country)}</span>
            <span class="ts-country-code">${escape(data.dialCode)}</span>
          </div>
        `;
      }
    }
  });
});

// New JS 08/04/2026 ended