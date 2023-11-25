$(document).ready(function(){
    // scrollTop

    $(".scrolltop").hide();
    $(window).scroll(function(){
        var x=$ (document).scrollTop();
        if(x>50){
            $(".scrolltop").show("slow");
        }
        else{
            $(".scrolltop").hide("slow");
        }
    });
    $(".scrolltop").click(function(){
        $(window).scrollTop(0);
    });

    // nav-menu

  $(".mobile-menu i").click(function(){
    $(".menu-main").show();
    $("body").addClass("overflow-hidden")
  });
  $(".close-menu i").click(function(){
    $(".menu-main").hide();
    $("body").removeClass("overflow-hidden")
  });

});
