var currentWidthWindow = document.documentElement.clientWidth;
var tabletSize = 768, desktopSize = 1024;
var widthColumn = 360;
var currentScrollPosition = 0;



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

      if ($(this).attr("class") != "multi-colons") {
        $(".content.catalog-page .product-items").find(".product-item").each(function () {
          $(this).css('height', "auto");
          $(this).css('height', $(this).css('height'));
        });
      } else {
        $(".content.catalog-page .product-items").find(".product-item").each(function () {
          $(this).css('height', "auto");
        });
        product_items_fix_jump();
      }
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

      $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".header .all-product .menu"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
          $(".header .all-product .menu").css("max-height", "0");
          $(".header .all-product .fon").css("display", "none");
          $(".header .all-product").removeClass('active');
        }
      });
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
    $(".header .all-product .menu  ul li").parent("li ul").parent().css("position", "initial");
    $(this).parent("li").find("ul").css("display", "flex");
    $(this).parent("li").find(".subtitle").css("display", "flex");
    $(this).parent("li").find("ul").css("top", $(this).parent("li").find(".subtitle").css("height"));
  });
  $(".header .all-product .menu ul li .subtitle .close").click(function () {
    $(".header .all-product .menu  ul li").parent("li ul").parent().css("position", "relative");
    $(".header .all-product .menu .title .close").trigger("click");
  });
  $(".header .all-product .menu ul li .subtitle .down").click(function () {
    $(".header .all-product .menu  ul li").parent("li ul").parent().css("position", "relative");
    $(this).parent().parent().find("ul").css("display", "none");
    $(this).parent(".subtitle").css("display", "none");
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
    $(this).parent("li").find(".subtitle").css("display", "flex");
    $(this).parent("li").find("ul").css("top", $(this).parent("li").find(".subtitle").css("height"));
  });
  $(".header .top-menu nav ul li .subtitle .close").click(function () {
    $(".header .top-menu nav .close .button").trigger("click");
  });
  $(".header .top-menu nav ul li .subtitle .down").click(function () {
    $(this).parent().parent().find("ul").css("display", "none");
    $(this).parent(".subtitle").css("display", "none");
  });
}

function show_search_form() {
  var search = $(".header .search");

  search.find(".img").click(function () {
    if (!search.hasClass('active')) {
      search.addClass('active');
      search.find(".input").focus();
      search.focusout(function () {
        search.removeClass('active');
      });
    }
  });
}

function catalog_accordion_button() {
  $('.catalog .accordion').click(function () {
    var next_elem = $(this).next();
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      if (next_elem.hasClass('content-accordion')) {
        next_elem.css('display', 'flex');
      }
    } else {
      $(this).removeClass('active');
      if (next_elem.hasClass('content-accordion')) {
        next_elem.css('display', 'none');
      }
    }
  });
}
function catalog_accordion_remove_excess_button() {
  $('.catalog #filters_list').find(".accordion").each(function () {
    var next_elem = $(this).next();
    if (!next_elem.hasClass('content-accordion')) {
      $(this).addClass('empty');
    }
  });

}
function cart_button() {
  var cart = $('.header .cart'), cart_content = cart.find(".cart-content");

  cart.find('.icon').click(function () {
    if (!cart.hasClass('active')) {
      cart.addClass('active');
      // cart_content.css('display', 'flex');
      // $("body").css("height", cart_content.css('height'));
      // $("html").css("overflow-y", "hidden");
      $("html").css('overflow', 'hidden');
      cart_content.show().css('overflow', 'auto');
    } else {
      $('html').css('overflow-y', 'auto');
      cart.removeClass('active');
      cart_content.css('display', 'none');

    }
  });


  $('.header .cart .title .close').click(function () {
    cart.removeClass('active');
    cart_content.css('display', 'none');
    $('html').css('overflow', 'auto');
  });

  cart_content.find(".cart-content__footer .continue").click(function () {
    cart.removeClass('active');
    cart_content.css('display', 'none');
    $('html').css('overflow', 'auto');
  });
}

function cart_change_value() {
  var cart_content = $('.cart .cart-content'), amount_items = $('.cart .icon');

  cart_content.find(".item .text .amount .plus").click(function () {
    var current_element = $(this).parent().find('.value'),
      current_value = parseFloat(current_element.text());
    current_element.text(current_value + 1);
    cart_amount_items();
    cart_all_sum();
  });

  cart_content.find(".item .text .amount .minus").click(function () {
    var current_element = $(this).parent().find('.value'),
      current_value = parseFloat(current_element.text());
    if (current_value == 1) {
      $(this).parent().parent().find(".close").trigger("click");
    } else { current_element.text(current_value - 1); }
    cart_amount_items();
    cart_all_sum();
  });
}

function cart_remove_item() {
  $(".cart .cart-content .item .text .close").click(function () {
    $(this).parent().parent().remove();
    //если удалили все товары из корзины - закрываем
    if ($(".header .cart .cart-content .item").length == 0) {
      $(".header .cart").removeClass('active');
      $(".header .cart .cart-content").css('display', 'none');
      $(".header .cart .cart-content .title").after(function () {
        return '<p class="empty">Корзина пуста</div>';
      });
    }
    cart_amount_items();
    cart_all_sum();
  });
}

function cart_amount_items() {
  var cart = $(".header .cart .cart-content"), i = 0;

  cart.find(".item").each(function () {
    i += parseFloat($(this).find('.amount .value').text());
  });
  cart.parent().find('.icon').attr("data-label", i);
}

function cart_all_sum() {
  var cart = $(".header .cart .cart-content"), i = 0;

  cart.find(".item").each(function () {
    i += parseFloat($(this).find('.item-price').text().replace(' ', '')) * $(this).find(".amount .value").text();
  });
  $(".cart .cart-content__footer .resume .sum").text(i + " руб.")
}


function product_slider_correct_thumb() {
  var i = 0;
  $(".slider-block .slider-gallery li").each(function () {
    if ($(this).hasClass('circle')) {
      $(".slider-block .lSPager li:nth-child(" + i + ")").addClass("circle");
    }
    i++;
  });
}

function product_accordion_button() {
  if (currentWidthWindow >= tabletSize) {
    var tab_elem = $(".product-page .tabs .tab:first"), tab_height = tab_elem.parent().css('height'), contentAccordionStep = 30;

    // т.к. первый элемент у нас активный, то по умолчанию развернём его
    tab_elem.find(".accordion:first").addClass('active');
    tab_elem.find(".content-accordion:first").css('display', 'flex');
    tab_elem.parent().css("height", Number.parseFloat(tab_elem.find(".content-accordion:first").css('height')) + Number.parseFloat(tab_height) + contentAccordionStep);

    // у всех табов одинаковая изначально будет одинаковая высота, 
    // чтобы она не менялась во время перестроения - зафиксируем её
    for (var i = 0; i < 4; i++) {
      tab_elem.css("height", tab_height);
      tab_elem = tab_elem.next();
    }
  }

  $('.product-page .tabs .tab').click(function () {
    var element = $(this).find(".accordion"), content_height = 0;
    // при разворачивании элемента необходимо увеличить высоту блока tabs,
    // чтобы сохранить отступы
    if (!element.hasClass('active')) {
      // если есть другой открытый tab - сбросим его параметры
      if (currentWidthWindow >= tabletSize) {
        var temp_elem = $(".product-page .tabs .tab");
        temp_elem.parent().css("height", tab_height);
        for (var i = 0; i < 3; i++) {
          temp_elem.find(".accordion").removeClass('active');
          temp_elem.find(".content-accordion").css('display', 'none');
          temp_elem = temp_elem.next();
        }
      }
      element.addClass('active');
      element.next().css('display', 'flex');
      // возьмём высоту содержимого текущего аккордеона и добавим к ней высоту вкладки
      if (currentWidthWindow >= tabletSize) {
        content_height = element.next().css('height');
        $(this).parent().css("height", Number.parseFloat(content_height) + Number.parseFloat(tab_height) + contentAccordionStep);
      }
    } else {
      element.removeClass('active');
      element.next().css('display', 'none');
      if (currentWidthWindow >= tabletSize) { $(this).parent().css("height", tab_height); }
    }
  });
}


function product_items_fix_jump() {
  var current_height = 0, temp_height = 0;

  $('.content').find(".product-items").each(function () {
    if (!$(this).hasClass('with-options') && !$(this).hasClass('short-list')) {
      $(this).find(".product-item").each(function () {
        temp_height = Number.parseFloat($(this).css('height'));

        if (current_height < temp_height) {
          current_height = temp_height;
          $(this).css('height', current_height);
        } else if (current_height == temp_height) {
          $(this).css('height', current_height);
        }
      })
    }
  });
}

function select_button() {
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

(function (f) { "use strict"; "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery) })(function ($) { "use strict"; function n(a) { return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) } function h(a) { return $.isFunction(a) || $.isPlainObject(a) ? a : { top: a, left: a } } var p = $.scrollTo = function (a, d, b) { return $(window).scrollTo(a, d, b) }; p.defaults = { axis: "xy", duration: 0, limit: !0 }; $.fn.scrollTo = function (a, d, b) { "object" === typeof d && (b = d, d = 0); "function" === typeof b && (b = { onAfter: b }); "max" === a && (a = 9E9); b = $.extend({}, p.defaults, b); d = d || b.duration; var u = b.queue && 1 < b.axis.length; u && (d /= 2); b.offset = h(b.offset); b.over = h(b.over); return this.each(function () { function k(a) { var k = $.extend({}, b, { queue: !0, duration: d, complete: a && function () { a.call(q, e, b) } }); r.animate(f, k) } if (null !== a) { var l = n(this), q = l ? this.contentWindow || window : this, r = $(q), e = a, f = {}, t; switch (typeof e) { case "number": case "string": if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) { e = h(e); break } e = l ? $(e) : $(e, q); case "object": if (e.length === 0) return; if (e.is || e.style) t = (e = $(e)).offset() }var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset; $.each(b.axis.split(""), function (a, c) { var d = "x" === c ? "Left" : "Top", m = d.toLowerCase(), g = "scroll" + d, h = r[g](), n = p.max(q, c); t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d); b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n)); !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {})) }); k(b.onAfter) } }) }; p.max = function (a, d) { var b = "x" === d ? "Width" : "Height", h = "scroll" + b; if (!n(a)) return a[h] - $(a)[b.toLowerCase()](); var b = "client" + b, k = a.ownerDocument || a.document, l = k.documentElement, k = k.body; return Math.max(l[h], k[h]) - Math.min(l[b], k[b]) }; $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = { get: function (a) { return $(a.elem)[a.prop]() }, set: function (a) { var d = this.get(a); if (a.options.interrupt && a._last && a._last !== d) return $(a.elem).stop(); var b = Math.round(a.now); d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a)) } }; return p });

// function compare_table_width_column() {
//   if (window.matchMedia('all and (min-width: 1024px)').matches) {
//     widthColumn = 300;
//   } else if (window.matchMedia('all and (min-width: 940px)').matches) {
//     widthColumn = 300;
//   } else if (window.matchMedia('all and (min-width: 768px)').matches) {
//     widthColumn = 360;
//   } else {
//     widthColumn = $(window).width();
//   }
// }


function compare_table_resize() {
  var mql = window.matchMedia('all and (min-width: 768px)');
  // compare_table_width_column();
  if (mql.matches) {
    var currentWidthContent = $(".wrapp-table").parent().width();
    var optimalValueColumn = Math.floor((currentWidthContent - parseFloat($(".wrapp-table").css("margin-left"))) / widthColumn);
    $(".wrapp-table").css('max-width', optimalValueColumn * widthColumn);
  }
}

function compare_table_height_for_feature() {
  var mql = window.matchMedia('all and (min-width: 768px)');
  if (mql.matches) {

    $(".wrapp-table .table").find(".line").each(function () {
      $(this).find(".feature").css("height", $(this).css("height"));
    });
  }
}

function compare_table_arrows() {
  $('.wrapp-table .button .next').click(function () {
    currentScrollPosition += widthColumn;
    $(".table").scrollTo(currentScrollPosition, 0);
  })
  $('.wrapp-table .button .prev').click(function () {
    currentScrollPosition = (currentScrollPosition > 0) ? (currentScrollPosition - widthColumn) : 0;
    $(".table").scrollTo(currentScrollPosition, 0);
  })
}
$(document).ready(function ($) {
  /*********    НА ВСЕХ СТРАНИЦАХ    *********/
  menu_gamburger();
  show_search_form();
  menu_all_products();
  cart_button();
  cart_change_value();
  cart_remove_item();
  cart_amount_items();
  cart_all_sum();
  select_button();
  product_items_fix_jump();
  /*********   END: НА ВСЕХ СТРАНИЦАХ    *********/


  /*********    КАТАЛОГ С КАТЕГОРИЯМИ       ********/
  catalog_accordion_button();
  catalog_accordion_remove_excess_button();
  /*********   END: КАТАЛОГ С КАТЕГОРИЯМИ   ********/


  /*********    КАТАЛОГ С ТОВАРАМИ    *********/
  filters_button_mobile();
  preset_button_catalog();
  view_mode_catalog();
  sort_mode_catalog();
  /*********    END:  КАТАЛОГ С ТОВАРАМИ   *********/


  /*********    СТРАНИЦА ПРОДУКТА       ********/
  product_accordion_button();
  product_slider_correct_thumb();
  /*********   END: СТРАНИЦА ПРОДУКТА   ********/

  /*********    СТРАНИЦА СРАВНЕНИЯ      ********/
  // compare_table_width_column();
  compare_table_height_for_feature();
  compare_table_arrows();
  compare_table_resize();



  window.onresize = function () {
    compare_table_resize();
    // compare_table_width_column();
  }
  /*********   END: СТРАНИЦА СРАВНЕНИЯ   ********/
});