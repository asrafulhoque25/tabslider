$(document).ready(function() {
//   // Initialize Owl Carousel
//   $('.owl_1').owlCarousel({
//       loop: true,
//       nav:true,
//       items:5,
//       // autoplay: true,
//       autoWidth: true,
//       paginationSpeed: 400,
//       autoplayTimeout: 3000,
//       autoWidth: false,
//       navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right.svg' class='img-fluid' />"],
//       responsive: {
//           0: { items: 1, nav: true, loop: true ,   items: 1,            // Number of items displayed
//             slideBy: 1 },
//           556: { items: 3, nav: true, loop: true },
//           1000: { items: 4, nav: true, loop: true }
//       }
//   });

//   // Add click event for tabs
$('.slideItem .tabNav').click(function(e) {
  e.preventDefault(); // Prevent default anchor behavior
  
  // Remove 'active' class from all tab navigation items
  $('.slideItem .tabNav').removeClass('active'); 

  // Add 'active' class to the clicked tab
  $(this).addClass('active');

  // Show corresponding tab content
  const target = $(this).attr('href'); // Get the target from href attribute
  $('.tab-content .tab-pane').removeClass('active'); // Hide all tab content
  $(target).addClass('active'); // Show the corresponding tab content
});
});
document.addEventListener( 'DOMContentLoaded', function() {
  new Splide('#splide', {
    type: 'loop',
    perPage: 4,
    focus: 'center',
    autoplay: false,
    interval: 8000,
    pagination: false,
    padding: '10%',
    breakpoints: {
      1200: {
        perPage: 2,
        padding: '20%'
      },
      850: {
        perPage: 2,
        padding: '20%'
      },
      776: {
        perPage: 2,
        padding: '10%'
      },
      556: {
        perPage: 2,
        padding: '2%',
        arrows: false, 

      }
    }
  }).mount();
} );