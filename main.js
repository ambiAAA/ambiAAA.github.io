// Smooth scrolling for links with hashes
// $('a[href*="#"]')
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     if (
//       location.pathname.replace(/^\//, '') ==
//         this.pathname.replace(/^\//, '') &&
//       location.hostname == this.hostname
//     ) {
//       var target = $(this.hash);
//       target = target.length
//         ? target
//         : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         event.preventDefault();
//         $('html, body').animate(
//           {
//             scrollTop: target.offset().top
//           },
//           1000,
//           function() {
//             var $target = $(target);
//             $target.focus();
//             if ($target.is(':focus')) {
//               return false;
//             } else {
//               $target.attr('tabindex','-1');
//               $target.focus();
//             };
//           }
//         );
//       }
//     }
//   });

// // Add or remove "active" class from navbar items on scroll
// $(window).scroll(function() {
//   var position = $(this).scrollTop();
//   $('section').each(function() {
//     var target = $(this).offset().top - 100;
//     var id = $(this).attr('id');
//     if (position >= target) {
//       $('.nav-item').removeClass('active');
//       $('.nav-item a[href="#' + id + '"]').parent().addClass('active');
//     }
//   });
// });

// // Collapse navbar on click
// $('.navbar-nav>li>a').on('click', function(){
//     $('.navbar-collapse').collapse('hide');
// });

// // Smooth scroll for "Back to Top" button
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//         $('#back-to-top').fadeIn();
//     } else {
//         $('#back-to-top').fadeOut();
//     }
// });
// $('#back-to-top').click(function() {
//     $('html, body').animate({
//         scrollTop: 0
//     }, 1000);
//     return false;
// });

const fadeContainer = document.querySelector('#fade-container');
const fadeContainer2 = document.querySelector('#fade-container2');
const fadeContainer3 = document.querySelector('#fade-container3');
// Fade in function
function fadeIn() {
  fadeContainer.style.opacity = '1';
}

function fadeIn2() {
  fadeContainer2.style.opacity = '1';
}

function fadeIn3() {
  fadeContainer3.style.opacity = '1';
}
// window.onload = function() {
 
  // Call the fadeIn function after 1 second
  setTimeout(fadeIn, 1000);
  setTimeout(fadeIn2, 2500);
  setTimeout(fadeIn3, 3500);

  // Call the fadeOut function after 3 seconds
  // setTimeout(fadeOut, 3000);
 
// }