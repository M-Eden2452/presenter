
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    });
});



///анимация

const animItems =  document.querySelectorAll("._anim-items")

  if(animItems.length > 0 ){
    window.addEventListener('scroll', animOnScroll); 
    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
           animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
           if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
              animItem.classList.add('_active');
           } else {
            if(animItem.classList.contains('_anim-no-hide')) {
              animItem.classList.remove('_active');
           }
        }
    } 
}
  function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }   
    animOnScroll(() => {
        animOnScroll();
    }, 300); 

}


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});


var swiper = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});



$(document).ready(function(){
  $(".set > a").on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(200);
      $(".set > a span").removeClass("minus").addClass("plus");
    }else{
      $(".set > a span").removeClass("minus").addClass("plus");
      $(this).find("span").removeClass("plus").addClass("minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $('.content').slideUp(200);
      $(this).siblings('.content').slideDown(200);
    }    
  });
});

var parentTitleAcc = document.querySelector('.sn-accordion-container');
var titleAcc = document.querySelector('.sn-accordion-container a');

titleAcc.onclick = function (e) {
	e.preventDefault();
  var target = e.target;
  
  if (traget.titleAcc != 'a') return;
  
  highlight(target); // подсветить TD
};




// показать еще 

const divs = document.querySelectorAll('.clients__card-mobile')
const length = divs.length;
const btnShow = document.querySelector('.show')
const btnHide = document.querySelector('.hide')

function showVisible(visible) {
  const toShow = Math.min(visible, length);

  for (let i=0; i < length; i++) {
      divs[i].style.display = i < toShow ? 'block' : 'none';
  }
}

let visible = 0;
showVisible(visible);

btnShow.addEventListener('click', function () {
  visible = Math.min(visible + 4, length);
  showVisible(visible);
  btnShow.addEventListener('click', function () { 
    btnShow.style.display = i < toShow ? '.show' : 'none';
  });
 
});

btnHide.addEventListener('click', function () {
  visible = Math.max(visible - 4, 0);
  showVisible(visible);
});
