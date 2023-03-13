$(document).ready(function() {
       $('#selectFile').change(function() {
       var fileName = $('#selectFile').val();
       $('.fileName').text(fileName);
    
  });

       $(".menuBar , sidebar .bi-x").click(function(){       
              $("body").toggleClass('sidebarOpen');
       });
       $('.posAbslte a.btn.btn-outline-light').click(function(){
          $(this).hide();
          $('.inputJoin').fadeIn('slow');
          $('.posAbslte').toggleClass('showInput');
       });

    setTimeout(function() {
      $('body').addClass("sidebarOpen");
    }, 3000);


$('.teamConnect > .col-3 ').click(function(){
            $('.teamConnect > .col-3').removeClass('activeCol');
            $(this).addClass('activeCol');
            var tagid = $(this).data('tag');
            $('.qouteBox').removeClass('active').addClass('hide');
         $('#' + tagid).addClass('active').removeClass('hide').each(function() {
             $('html, body').animate({
                 scrollTop: $(this).offset().top - navbarHeight - 20
             }, 500);
         });
        });

 // slick slider home page

 $('.sliderClient').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

});

         

