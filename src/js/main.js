// Sticky navbar
// =========================
$(document).ready(function () {
  // Custom function which toggles between sticky class (is-sticky)
  var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop) {
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    }
    else {
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function () {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');

    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
      stickyToggle(sticky, stickyWrapper, $(this));
    });

    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
});
// Sticky navbar end



// Dropdown navbar HOVER

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
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

// Dropdown navbar HOVER End

// back to top
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});


// xeberlers

$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 3,
        // itemsDesktop:[1199,3],
        // itemsDesktopSmall:[980,2],
        // itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
        responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });
    });
// });

// elanlar
$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        items : 4,
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
        responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }, 
      1200:{
        items: 4
      }
    }
  });
    });

    // 3
$(document).ready(function() {
    $("#owl-carousel2").owlCarousel({
        items : 3,
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
        responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }, 
      1200: {
        items: 3
      }
    }
  });
    });

    // statistics
document.addEventListener("DOMContentLoaded", function () {
    const speed = 200;
    const statisticsNumbers = document.querySelectorAll('.statistics-number');
    const animateNumbers = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const updateCount = () => {
                    const targetNumber = +target.innerText;
                    const increment = targetNumber / speed;

                    let count = 0;

                    const animate = () => {
                        count += increment;
                        if (count < targetNumber) {
                            target.innerText = Math.floor(count);
                            requestAnimationFrame(animate);
                        } else {
                            target.innerText = targetNumber;
                        }
                    };
                    animate();
                };
                updateCount();
                observer.unobserve(target);
            }
        });
    };

    const observer = new IntersectionObserver(animateNumbers, {
        threshold: 1.0
    });

    statisticsNumbers.forEach(number => {
        observer.observe(number);
    });
});

$(document).ready(function() {
    $("#owl-carousel3").owlCarousel({
        items : 7,
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
        responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }, 
      1200: {
        items: 3
      }
    }
  });
    });

    $(document).ready(function() {
    $("#owl-carousel4").owlCarousel({
        items : 4,
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
        responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }, 
      1200: {
        items: 3
      }
    }
  });
    });


    // faydali link
var Lowl = $("#owl-demos");
Lowl.owlCarousel({
     items : 4,
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
        responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }, 
      1200: {
        items: 3
      }
    }

    
});
// modal copy
document.querySelectorAll(".modal-other-contact").forEach(contact => {
    const link = contact.querySelector(".modal-other-phone");
    const copyBtn = contact.querySelector(".modal-other-img-copy");

    if (copyBtn && link) {
        copyBtn.addEventListener("click", () => {
            const text = link.textContent.trim();

            navigator.clipboard.writeText(text).catch(err => {
                console.error("Kopyalama alınmadı:", err);
            });
        });
    }
});



// border
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('hidden.bs.modal', () => {
    document.activeElement.blur();
  });
});

    $(document).ready(function() {
    $("#owl-carousel-organization").owlCarousel({
        items : 4,
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
        loop:true,
        responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }, 
      1200: {
        items: 3
      }
    }
  });
    });

    // news
