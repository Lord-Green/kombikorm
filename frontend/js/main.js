function filters_button_mobile() {
  $(".filters .catalog-filters__header .button").click(function () {
    if (!$(this).hasClass('active')) {
      $(".filters #filters_list").css("max-height", "none");
      $(this).addClass('active');
    } else {
      $(".filters #filters_list").css("max-height", "0");
      $(this).removeClass('active');
    }
  });
}

function preset_button_catalog() {
  $(".catalog--header .presets a").click(function () {
    if (!$(this).hasClass('current')) {
      $(".catalog--header .presets a.current").removeClass('current');
      $(this).addClass('current');
    }
  });
}

function view_mode_catalog() {
  $(".content.catalog.catalog-page .click-filters .position a").click(function () {
    if (!$(this).hasClass('active')) {
      $(".content.catalog.catalog-page .click-filters .position a.active").removeClass('active');
      $(".content.catalog.catalog-page .items").attr("class", "items " + $(this).attr("class"));
      $(this).addClass('active');
      // 

    }
  });
}


$(document).ready(function ($) {
  filters_button_mobile();
  preset_button_catalog();
  view_mode_catalog();
});

// $("#check_1_1").click(function () {
//   $("#check_1_1").attr("checked", "checked");
// });

// $("#uncheck_1_1").click(function () {
//   $("#check_1_1").removeAttr("checked");
// });

// document.getElementById('uncheck_1_1').onclick = function () { document.getElementById('check_1_1').checked = "false" }

var owl = $('.owl-carousel-for-1');
owl.owlCarousel({
  margin: 10,
  nav: true,
  navText: true,
  loop: true,
  dots: true,
  responsive: {
    0: {
      items: 1
    }
  }
})