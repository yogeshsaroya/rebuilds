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
});

         

