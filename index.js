

function createModal(){
  document.querySelector('body').insertAdjacentHTML('beforeend', 
  <div class="modal-container" aria-modal="true" role="dialog" hidden>
    <div class="modal">
      <div class="modal__overlay">
        <div class="modal__btn--container">
          <button class="modal__btn modal__arrow modal__arrow--left" aria-label="Previous image">
            /* 7:07 ve videu */
          </button>
        </div>

      </div>
    </div>

  </div>
    
  )
};

createModal();

/*
$(function(){	  
  setInterval(function () {
      $('#slider').animate({left: 0}, 500, function () {
          $('#slider img:first-child').appendTo('#slider');
          $('#slider img').css('left', '0');
  
      });
   }, 1000);
});
*/