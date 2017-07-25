var currentWidthWindow = document.documentElement.clientWidth;
const tabletSize = 768, desktopSize = 1024;

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
  $(".catalog-page--header .presets a").click(function () {
    if (!$(this).hasClass('current')) {
      $(".catalog-page--header .presets a.current").removeClass('current');
      $(this).addClass('current');
    }
  });
}

function view_mode_catalog() {
  $(".content.catalog-page .click-filters .position a").click(function () {
    if (!$(this).hasClass('active')) {
      $(".content.catalog-page .click-filters .position a.active").removeClass('active');
      $(".content.catalog-page .product-items").attr("class", "product-items " + $(this).attr("class"));
      $(this).addClass('active');
    }
  });
}

function sort_mode_catalog() {
  $(".content.catalog-page .click-filters .sort a").click(function () {
    if (!$(this).hasClass('active')) {
      $(".content.catalog-page .click-filters .sort a.active").removeClass('active');
      $(this).addClass('active');
    }
  });
}

function menu_all_products() {
  $(".header .all-product > a").click(function () {
    if (!$(".header .all-product").hasClass('active')) {
      $(".header .all-product .menu").css("max-height", "none");
      $(".header .all-product").addClass('active');
    }
  });
  $('.header .all-product .menu .title .close').click(function () {
    if ($(".header .all-product").hasClass('active')) {
      $(".header .all-product .menu").css("max-height", "0");
      $(".header .all-product").removeClass('active');
    }
  });

  $(".header .all-product .menu ul li .submenu").click(function () {
    $(this).parent("li").find("ul").css("display", "flex");
  });

  $(".header .all-product .menu ul li ul .subtitle .down").click(function () {
    $(this).parent(".subtitle").parent("ul").css("display", "none");
  });

  $(".header .all-product .menu ul li ul .subtitle .close").click(function () {
    $(".header .all-product .menu .title .close").trigger("click");
  });
}

function menu_gamburger() {
  $('.header .top-menu .gamburger').click(function () {
    if (!$(".header .top-menu").hasClass('active')) {
      $('.header .top-menu nav').css('display', 'flex');
      $(".header .top-menu").addClass('active');
    }
  });
  $('.header .top-menu nav .close .button').click(function () {
    if ($(".header .top-menu").hasClass('active')) {
      $('.header .top-menu nav').css('display', 'none');
      $(".header .top-menu").removeClass('active');
    }
  });
  $(".header .top-menu nav ul li .submenu").click(function () {
    $(this).parent("li").find("ul").css("display", "flex");
  });
  $(".header .top-menu nav ul li ul .subtitle .close").click(function () {
    $(".header .top-menu nav .close .button").trigger("click");
  });
  $(".header .top-menu nav ul li ul .subtitle .down").click(function () {
    $(this).parent(".subtitle").parent("ul").css("display", "none");
  });
}

function show_search_form() {
  $('.header .search .img').click(function () {
    if (!$(".header .search").hasClass('active')) {
      $(".header .search").addClass('active');
    }
  });
  $('.header .top-menu nav .close .button').click(function () {
    if ($(".header .top-menu").hasClass('active')) {
      $('.header .top-menu nav').css('display', 'none');
      $(".header .top-menu").removeClass('active');
    }
  });
}

function accordion_button() {
  var acc = document.getElementsByClassName("accordion"), i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }

}

$(document).ready(function ($) {
  filters_button_mobile();
  preset_button_catalog();
  view_mode_catalog();
  sort_mode_catalog();
  show_search_form();
  accordion_button();

  if (currentWidthWindow < desktopSize) {
    menu_all_products();
  }
  if (currentWidthWindow < tabletSize) {
    menu_gamburger();
  }
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