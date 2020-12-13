
$(window).scroll(function() {
    $('.an_fid').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+200) {
        $(this).addClass('animate__fadeInDown');
      }
    });
  });


  $(window).scroll(function() {
    $('.an_fileft').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('animate__fadeInLeft');
        $(this).removeClass("dsp");
      }
    });
  });

  $(window).scroll(function() {
    $('.an_fileft_two').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+550) {
        $(this).addClass('animate__fadeInLeft');
        $(this).removeClass("dsp");
      }
    });
  });



  $(window).scroll(function() {
    $('.an_firight').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('animate__fadeInRight');
        $(this).removeClass("dsp");
      }
    });
  });

  $(window).scroll(function() {
    $('.an_fidown').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('animate__fadeInDown');
        $(this).removeClass("dsp");
      }
    });
  });


  $(window).scroll(function() {
    $('.an_fiup').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('animate__fadeInUp');
         $(this).removeClass("dsp");
      }
    });
  });

  $(window).scroll(function() {
    $('.an_fiup_two').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('animate__fadeInUp');
        $(this).removeClass("dsp");
      }
    });
  });



$("#exp-btn").click(function() {
  $(".select-form").show();
  $(".select-form2").hide();
  $(".btn-form").css("background", "linear-gradient(to right, #9d0000 50%, #ffcc00 50%)" );
  $("#log-btn").css("color", "#ba0000");
  $("#exp-btn").css("color", "#ffffff");
})


$("#log-btn").click(function() {
  $(".select-form").hide();
  $(".select-form2").show();
  $(".btn-form").css("background", "linear-gradient(to right, #ffcc00 50%, #9d0000 50%)" )
  $("#log-btn").css("color", "#ffffff");
  $("#exp-btn").css("color", "#ba0000");
})

$(window).scroll(function pgq() {
  if(pageYOffset > 500) {
    $("#arr").show();
  } else {
    $("#arr").hide();
  }
})

$("#arr").click(function() {
  pageYOffset = 0;
  return pgq();
})
