$(document).ready(function() {
    // // Smooth scroll effect for anchor links
    // $('a[href^="#"]').on('click', function(event) {
    //   var target = $(this.getAttribute('href'));
    //   if( target.length ) {
    //     event.preventDefault();
    //     $('html, body').stop().animate({
    //       scrollTop: target.offset().top - 70 // adjust the offset to fit your layout
    //     }, 1000);
    //   }
    // });
    // Smooth scroll effect for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            var offset = target.offset().top;
            if ($(this).attr("href") === "#projects") { // check if the link is for the projects section
                offset -= $(".header").outerHeight(); // subtract the height of the header from the offset
            }
            $('html, body').stop().animate({
                scrollTop: offset
            }, 1000);
        }
    });
  
    // Sticky header effect
    $(window).on("scroll", function() {
      var header = $(".header");
      var scroll = $(window).scrollTop();
  
      if (scroll >= 100) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
    });
  
    // Responsive menu toggle
    $(".menu-toggle").on("click", function() {
      $("nav").toggleClass("open");
    });
  
    // Close responsive menu when clicking outside of it
    $(document).on("click", function(event) {
      if (!$(event.target).closest(".header").length) {
        $("nav").removeClass("open");
      }
    });
  
    // Filter projects by category
    $(".filter-nav li").on("click", function() {
      var category = $(this).attr("data-category");
      if (category == "all") {
        $(".project-item").show();
      } else {
        $(".project-item").not("." + category).hide();
        $(".project-item." + category).show();
      }
      $(this).addClass("active").siblings().removeClass("active");
    });
  });
  