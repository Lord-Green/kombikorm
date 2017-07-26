var currentWidthWindow = document.documentElement.clientWidth;
var tabletSize = 768, desktopSize = 1024;

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
      $(".header .all-product .fon").css("display", "block");
      $(".header .all-product").addClass('active');
    } else {
      $(".header .all-product .menu").css("max-height", "0");
      $(".header .all-product .fon").css("display", "none");
      $(".header .all-product").removeClass('active');
    }
  });
  $('.header .all-product .menu .title .close').click(function () {
    if ($(".header .all-product").hasClass('active')) {
      $(".header .all-product .menu").css("max-height", "0");
      $(".header .all-product .fon").css("display", "none");
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
  $('.accordion').click(function () {
    if (!$(this).next().hasClass('active')) {
      $(this).next().addClass('active');
      $(this).next().css('display', 'flex');
    } else {
      $(this).next().removeClass('active');
      $(this).next().css('display', 'none');
    }
  });
}




$(document).ready(function ($) {
  filters_button_mobile();
  preset_button_catalog();
  view_mode_catalog();
  sort_mode_catalog();
  show_search_form();
  accordion_button();
  tamingselect();
  menu_all_products();

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

function tamingselect() {
  if (!document.getElementById && !document.createTextNode) { return; }

  var ts_selectclass = 'turnintodropdown_demo2'; 	// class to identify selects
  var ts_listclass = 'turnintoselect_demo2';		// class to identify ULs
  var ts_boxclass = 'select--body'; 		// parent element
  var ts_triggeron = 'select--title active'; 		// class for the active trigger link
  var ts_triggeroff = 'select--title';			// class for the inactive trigger link
  var ts_dropdownclosed = 'dropdownhidden_demo2'; // closed dropdown
  var ts_dropdownopen = 'dropdownvisible_demo2';	// open dropdown

  var count = 0;
  var toreplace = new Array();
  var sels = document.getElementsByTagName('select');



  for (var i = 0; i < sels.length; i++) {
    if (ts_check(sels[i], ts_selectclass)) {
      var hiddenfield = document.createElement('input');
      hiddenfield.name = sels[i].name;
      hiddenfield.type = 'hidden';
      hiddenfield.id = sels[i].id;
      hiddenfield.value = sels[i].options[0].value;
      sels[i].parentNode.insertBefore(hiddenfield, sels[i])
      var trigger = document.createElement('a');
      ts_addclass(trigger, ts_triggeroff);
      trigger.href = '#';
      trigger.onclick = function () {
        ts_swapclass(this.parentNode.getElementsByTagName('ul')[0], ts_dropdownclosed, ts_dropdownopen);
        return false;
      }
      trigger.appendChild(document.createTextNode(sels[i].options[0].text));
      sels[i].parentNode.insertBefore(trigger, sels[i]);
      var replaceUL = document.createElement('ul');
      for (var j = 0; j < sels[i].getElementsByTagName('option').length; j++) {
        var newli = document.createElement('li');
        var newa = document.createElement('a');
        newli.v = sels[i].getElementsByTagName('option')[j].value;
        newli.elm = hiddenfield;
        newli.istrigger = trigger;
        newa.href = '#';
        newa.appendChild(document.createTextNode(
          sels[i].getElementsByTagName('option')[j].text));
        newli.onclick = function () {
          this.elm.value = this.v;
          // скрываем список с элементами после выбора нужного
          ts_swapclass(this.istrigger, ts_triggeron, ts_triggeroff);
          ts_swapclass(this.parentNode, ts_dropdownopen, ts_dropdownclosed)
          // устанавливаем в заголовок значение выбранного элемента
          this.istrigger.firstChild.nodeValue = this.firstChild.firstChild.nodeValue;
          return false;
        }
        newli.appendChild(newa);
        replaceUL.appendChild(newli);
      }
      ts_addclass(replaceUL, ts_dropdownclosed);
      var div = document.createElement('div');
      div.appendChild(replaceUL);
      ts_addclass(div, ts_boxclass);
      sels[i].parentNode.insertBefore(div, sels[i])
      toreplace[count] = sels[i];
      count++;
    }
  }

  /*
    Turn all ULs with the class defined above into dropdown navigations
  */
  var uls = document.getElementsByTagName('ul');
  for (var i = 0; i < uls.length; i++) {
    if (ts_check(uls[i], ts_listclass)) {
      var newform = document.createElement('form');
      var newselect = document.createElement('select');
      for (j = 0; j < uls[i].getElementsByTagName('a').length; j++) {
        var newopt = document.createElement('option');
        newopt.value = uls[i].getElementsByTagName('a')[j].href;
        newopt.appendChild(document.createTextNode(uls[i].getElementsByTagName('a')[j].innerHTML));
        newselect.appendChild(newopt);
      }
      newselect.onchange = function () {
        window.location = this.options[this.selectedIndex].value;
      }
      newform.appendChild(newselect);
      uls[i].parentNode.insertBefore(newform, uls[i]);
      toreplace[count] = uls[i];
      count++;
    }
  }
  for (i = 0; i < count; i++) {
    toreplace[i].parentNode.removeChild(toreplace[i]);
  }
  function ts_check(o, c) {
    return new RegExp('\\b' + c + '\\b').test(o.className);
  }
  function ts_swapclass(o, c1, c2) {
    var cn = o.className
    o.className = !ts_check(o, c1) ? cn.replace(c2, c1) : cn.replace(c1, c2);
  }
  function ts_addclass(o, c) {
    if (!ts_check(o, c)) { o.className += o.className == '' ? c : ' ' + c; }
  }

  $('.select--title').click(function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      // $(this).next().addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
}