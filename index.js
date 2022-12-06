
$(function(){	  
  setInterval(function () {
      $('#slider').animate({left: 0}, 500, function () {
          $('#slider img:first-child').appendTo('#slider');
          $('#slider img').css('left', '0');
  
      });
   }, 1000);
});

