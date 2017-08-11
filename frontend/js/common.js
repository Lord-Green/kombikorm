// let $ = require('jquery');
// import 'jquery-ui/ui/widget';
// import 'jquery-ui/ui/widgets/accordion';
// import 'jquery-ui/ui/widgets/spinner';
// import 'jquery-ui/ui/widgets/selectmenu';
// import 'jquery-ui/themes/base/slider.css';
// import 'jquery-ui/themes/base/spinner.css';
// import 'jquery-ui/themes/base/selectmenu.css';
// import 'owl.carousel';
// import 'owl/owl.carousel.css';
// import 'compare/css/compare.css';
// import 'device.js/lib/device.js';

var indexPageAccordion = '.accordeon_index';
var accordion = $('.accordeon');
var mainAccordion = $('.main-accordeon');
var purchased = $('.purchased');
var signIn = $('.sign-in_js');
var open = 'open';
var autorization = $('.autorization__item');
var basket = $('.basket-container');
var catalogList = $('.catalog_list');
var btnChangeView = $('.button-change-view');
var body = $('body');
var bodyOverflow = 'body_overflow-hidden';
var tabletMenu = $('.catalog-menu > li');







function uiController(domElement){
 var data = domElement.data();
 domElement.toggleClass('active');
 $(data.target).toggleClass('active');
 $(data.remove).removeClass('active');
}

$('.ui-controller').click(function(e){
  uiController($(this));
  e.preventDefault();
});








if(!(mainAccordion.parent().hasClass('accordeon_main-page'))){
  mainAccordion.accordion({
      collapsible: true,
      active: true,
      heightStyle: "content"
  });
}

$('.accordeon_show-mobile').accordion({
      collapsible: true,
      active: false,
      heightStyle: "content"
});

$('.second-accordeon').accordion({
  collapsible: true,
  active: 0,
  heightStyle: "content",

});

 

$('.accordeon-btn').on('click',function () {
	$(this).find('.arrow').toggleClass('arrow_top');

});


$('.button-change-view_rows').on('click',function () {
  catalogList.addClass('catalog_list-rows');
});


$('.button-change-view_column').on('click',function () {
  catalogList.removeClass('catalog_list-rows');
});


btnChangeView.on('click',function () {
 btnChangeView .removeClass('button-change-view_active');
  $(this).toggleClass('button-change-view_active');
});



$('.filter-1').selectmenu({
  appendTo: ".select-1",
});
$('.filter-2').selectmenu({
  appendTo: ".select-2",
});
$('.filter-3').selectmenu({
  appendTo: ".wrapper-pagination",
});
$('.select-menu').selectmenu({
  appendTo: '.container-select-menu'
})

$('.payment-method-select').selectmenu({
  appendTo: '.payment-method-container'
});
$('.delivery, .delivery-time').selectmenu({
  appendTo: '.delivery-container'
});




$('.breadcrumbs-select__item').selectmenu({
  appendTo: ".breadcrumbs-select",
  width: false
});



$( ".spinner" ).spinner({
      step: 1,
      min: 0,
      numberFormat: false
});


$('.manufacture__carousel').owlCarousel({
  items: 1,
  dots: true,
  responsive:{
    768:{
      items: 3,
      margin: 55
    },
    1440:{
      items: 6,
      margin: 35
    }
  }
});






$(window).on('scroll',function () {
    var top  = $(document).scrollTop();
    var headerSelector = $('.header__bg--js');
    var headerHeight = $('.header__bg--js').outerHeight();
    if(top > headerHeight){
      $(headerSelector).addClass('header__bg--stick');
    }
    else{
      if(top === 0){
        $(headerSelector).removeClass('header__bg--stick');
      }
    }
});

function putElement () {
  var width = $(window).outerWidth();
  var maxPhoneDisplay = 768;
  if(width<maxPhoneDisplay){
     $('.news--js').appendTo('.news-put-here--js');
  }
}
putElement();


$(window).on('load resize', function () {
  var $width = $(window).outerWidth();
  if($width < 1024){
    tabletMenu.on('click',function () {
        $(this).siblings().removeClass('active')
        uiController($(this));
      return false

    });
    $('.catalog-menu li ul li').on('click',function () {
      event.stopPropagation();
    });
  }
  else{
    tabletMenu.removeClass('active');
  }
  
});

  








$('.compare-products--js').owlCarousel({
  items: 1,
  dots: false,
  nav: true,
  navText: false,
  responsive: {
    320:{
      dots: true
    },
    768:{
      dots: false
    },
    800:{
      items: 2
    },
    1400:{
      items: 3
    }
  }
});










var ul = $('.feature-list--js');
var li = ul.first().find('li').length;
var productName = $('.catalog-item-product-name--js');
var array = [];
var maximum;
// computed height for name product
  for (var i = 0; i < productName.length; i++) {
    array[i] = productName.eq(i).outerHeight();

  }
  maximum = Math.max.apply(null, array);

  for (var i = 0; i<productName.length; i++) {
    productName.eq(i).css("height", maximum);
  }
// 









// computed height for compare blocks
  for (var i = 0; i < li; i++) {
    array = [];
    maximum = 0;

    for (var x = 0; x < ul.length; x++) {
      array[x] = ul.eq(x).find('li').eq(i).outerHeight();

    }
     maximum = Math.max.apply(null, array);


     for (var x = 0; x < ul.length; x++) {
       ul.eq(x).find('li').eq(i).css("height", maximum);
      
     }
  }
//



