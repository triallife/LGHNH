let mainMenu = $('.origin .main_menu > li'),
	twodebth = $('.main_menu li ul'),
	formLabel = $('.search_bar label'),
  header = $('.origin'),
  width = $(window).width(),
  close_aside = $('.close_btn'),
  open_aside = $('.aside_btn');
  
let clone = $('.header-clone'),
c_mainmenu = clone.find('.main_menu > li'),
c_twodebth = clone.find('.main_menu li ul');

c_mainmenu.hover(function(){
  let width = $(window).width();
  if (width  > 768) {
    clone.css({
      paddingBottom: '54px'
      }),
      c_twodebth.css({
      display: 'flex'
      }),
      $('.line').css({
      opacity: 1
      })
  }
  },function(){
    let width = $(window).width();
    if (width > 768) {
      clone.css({
        paddingBottom: '47px'
        }),
        c_twodebth.css({
        display: 'none'
        }),
        $('.line').css({
        opacity: 0
        })
    }
})

$('label').mouseenter(function () {
if(clone.hasClass('visible')){
clone.find('.menu .main_menu').css({
  visibility: 'hidden'
})
}else{
$('.menu .main_menu').css({
  visibility: 'hidden'
})
}
});

$('form').mouseleave(function () {
if(clone.hasClass('visible')){
clone.find('.main_menu').css({
  visibility: 'visible'
})
} else {
$('.main_menu').css({
  visibility: 'visible',
})
}
})

$('.lang').mouseenter(function(){
  let width = $(window).width();
  if (width  > 768) {
    $('.lang_list').css({
      display: 'block'
      })
  }else{
    $('.lang_list').css({
      display: 'flex'
      })
  }
});
$('.lang_list').mouseleave(function(){
  let width = $(window).width();
  if (width  > 768) {
    $('.lang_list').css({
      display: 'none'
      })
  }else{
    $('.lang_list').css({
      display: 'flex'
      })
  }
})


// if ($(window).width() > 480) { //tablet

// } else { //mobile
  
// }

let title = $('.title a'),
  info = $('.info');
    
title.on('click', function (e) {
  e.preventDefault();
  $(this).parent().siblings('li').find('> ul').slideUp();
  $(this).parent().find('> ul').slideToggle();
  $(this).toggleClass('active');
  // $(this).parent().siblings('li').find('> a').removeClass('active');
  // $(this).find('span').toggleClass('active');
  })

open_aside.click(function(){
  $('.aside_menu_side').css({right: '0'})
})
close_aside.click(function(){
  $('.aside_menu_side').css({right: '-286px'})
    open_aside.show();
});


$(window).resize(function(){
  width = $(window).width();
  console.log(width);
  if (width > 768) {
    header.show();
    // $('.aside').hide();
  } else {
    header.hide();
    $('.aside_menu_side').css({right: '-286px'})
    // $('.aside').show();
  }
})