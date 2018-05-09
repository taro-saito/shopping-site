$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
    {
            loop: true,
            nav: false,
            dotseach: true,
            items: 1,
            autoplay: true,
        }
    );
});

$(document).ready(function(){
  $("#sp_navi_btn").click(function(){
    $(".sp_navi_li_toggle").slideToggle();
  });
});

$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});