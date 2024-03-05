// Adaptive menu
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');


function switchMenu() {
  toggleBtn.classList.toggle('collapsed');
  nav.classList.toggle('collapsed');
  navList.classList.toggle('collapsed');
}
toggleBtn.addEventListener('click', switchMenu);

function closeMenu() {
  setTimeout(() => {
    toggleBtn.classList.remove('collapsed');
    nav.classList.remove('collapsed');
    navList.classList.remove('collapsed');
  }, 1000);  
}
navItems.forEach(el => el.addEventListener('click', closeMenu));


// slider
$(document).ready(function () {
  $('.sliders').slick({
    arrows: false,
    dots: true,
  });
});

//   $(document).ready(function () {
//   $('.section-content').slick({
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       dots: true,
//   });
  
// });



// if(window.innerWidth < 576) {
//   mobileOnlySlider();
// }
// $(window).resize(function(e){
//   if(window.innerWidth < 576) {
//       if(!$('.slider').hasClass('slick-initialized')){
//           mobileOnlySlider();
//       }

//   }else{
//       if($('.slider').hasClass('slick-initialized')){
//           $('.slider').slick('unslick');
//       }
//   }
// });

// $(window).on('load resize', function() {
//   if ($(window).width() < 576) {
//     $('#items:not(.slick-initialized)').slick({
//       centerMode: true,
//       dots: true,
//       infinite: true,
//       speed: 100,
//       slidesToShow: 1
//     });
//   } else {
//     $("#items.slick-initialized").slick("unslick");
//   }
// });

