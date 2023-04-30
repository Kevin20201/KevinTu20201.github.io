$(document).ready(function() {
      
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
  