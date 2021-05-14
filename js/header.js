$(function(){
  //window scroll시 네비 축소
  $(window).scroll(function(){
    let mainHeader = $('#header'),
    defaultLogo = $('.header .first > h1'),
    navLetter = $('.header .topnav > a'),
    navLetActive = $('.header .topnav.active >a'),
    sevenActive = $('.header .seventh span.active a'),
    wScroll = $(this).scrollTop();

    mainHeader.css('color','#000');
    navLetActive.css('color','#fff');
    // mainHeader.find('.header>div').css('border-right','1px solid #e8e8e8');  
    if(wScroll>100){
      if(!mainHeader.hasClass('shrink')){
        mainHeader
        .addClass('shrink')
        .css({'background':'#000','border-bottom':'none'});
        mainHeader.find('.header>div').css('border-right','none');        
        navLetter.css({'line-height':'80px','color':'#555'});
        defaultLogo.css({'line-height':'80px',
        'font-size':'35px','color':'#fff'});
        sevenActive.css({'color':'#fff','border-bottom':'1px solid #fff'});
      }
    }else{
      if(mainHeader.hasClass('shrink')){
        mainHeader
        .removeClass('shrink')
        .css({'background':'transparent','border-bottom':'1px solid #e8e8e8'});
        mainHeader.find('.header>div').css({'border-right':'1px solid #e8e8e8','color':'#000'});
        navLetter.css({'line-height':'126px','color':'#000'});
        defaultLogo.css({'line-height':'126px',
        'font-size':'50px','color':'#000'});
        sevenActive.css({'color':'#000','border-bottom':'1px solid #000'});
      }
    }
  });
});