$(document).ready(function(){
    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //     notify(this.element.id + ' hit 25% from top of window') 
    //   }, {
    //     offset: '25%'
    //   })

    //select the section after which you want the bar to appear (before this point is hidden)
    $('.js--section-about').waypoint(function(direction){
        if(direction=="down"){
            $('.navigation').addClass('sticky');
        }else{
            $('.navigation').removeClass('sticky'); 
        }
    },{offset: '70px'})

//----------------------SCROLL ON BTN ---------------------------
// 
//js--scroll-to-contact

$('.js--scroll-to-header').click(function(){
    //we have to select html and body 
    $('html,body').animate({scrollTop:$('.js--section-header').offset().top},1000);
});
$('.js--scroll-to-about').click(function(){
    //we have to select html and body 
    $('html,body').animate({scrollTop:$('.js--section-about').offset().top},1000);
});

$('.js--scroll-to-projects').click(function(){
    //we have to select html and body 
    $('html,body').animate({scrollTop:$('.js--section-projects').offset().top},1000);
});


$('.js--scroll-to-contact').click(function(){
    //we have to select html and body 
    $('html,body').animate({scrollTop:$('.js--section-contact').offset().top},1000);
});



$('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
      }, {offset: '50%'});
  
  $('.js--wp-2').waypoint(function(direction){
  
    $('.js--wp-2').addClass('animated fadeIn');
  
  }, {offset: '50%'});
  
  $('.js--wp-3').waypoint(function(direction){
  
    $('.js--wp-3').addClass('animated fadeIn');
  
  }, {offset: '50%'});


//--------MOBILE NAVIGATION--------------------------
$('.js--nav-icon').click(function(){
  console.log("you clicked the nav-icon")
    var nav=$('.js--main-nav');
    var icon=$('.js--nav-icon')
    // nav.slideToggle(200); //opens and close a box 
    if(nav.hasClass("dis-main-nav")){
      nav.removeClass('dis-main-nav');
    }else{
      nav.addClass('dis-main-nav');
    }
    if(icon.attr('name')=='menu'){
      icon.attr('name','close');
      // icon.removeAttr('name');
    }else if(icon.attr('name')=='close'){
      icon.attr('name','menu');
    }
  });

});