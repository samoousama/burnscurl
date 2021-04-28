const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
 
$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

// Scroll Top 

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 3300 ) {
        $(".testimonial-block").addClass("fix-testimonial");
    } else{
        $(".testimonial-block").removeClass("fix-testimonial");
    }
    if (scroll > 4100 ){
        $(".testimonial-block").removeClass("fix-testimonial");
    }

    // other pages 
    if (scroll > 600 ) {
        $(".content-tabs").addClass("fix-sidebar");
    } else{
        $(".content-tabs").removeClass("fix-sidebar");
    }
    if (scroll > 1500 ){
        $(".content-tabs").removeClass("fix-sidebar");
    }

});

