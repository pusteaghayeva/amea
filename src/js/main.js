
$(document).ready(() => {

    function AddZero(num) {
        return num >= 0 && num < 10 ? "0" + num : num + "";
    }

    function getTime() {
        var now = new Date();
        var strDateTime = [
            [AddZero(now.getHours()), AddZero(now.getMinutes())].join(":"),
        ];
        document.getElementById("time").innerHTML = strDateTime;
    }

    getTime();

    setInterval(() => {
        getTime();
    }, 1000);

    const backToTop = $('#backToTop')
    const amountScrolled = 300

    $(window).scroll(() => {
        $(window).scrollTop() >= amountScrolled
            ? backToTop.fadeIn('fast')
            : backToTop.fadeOut('fast')
    })

    backToTop.click(() => {
        $('body, html').animate({
            scrollTop: 0
        }, 600)
        return false
    })
})


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


// news-slider
$("#news-slider").owlCarousel({
  loop: false,
  autoplay: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    840: {
      items: 2
    },
    1024: {
      items: 3
    },
    1200: {
      items: 3
    },
    1400: {
      items: 3
    }
  }
});

// elanlar
$("#owl-demo").owlCarousel({
  loop: false,
  autoplay: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    840: {
      items: 2
    },
    1024: {
      items: 3
    },
    1200: {
      items: 3
    },
    1400: {
      items: 4
    }
  }
});

// elmi emekdaslar
$("#owl-carousel3").owlCarousel({
  loop: false,
  autoplay: false,
  responsiveClass: true,
  nav: false,
  dots: false,
  responsive:
  {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    840: {
      items: 3
    },
    1024: {
      items: 4
    },
    1200: {
      items: 5
    },
    1400: {
      items: 7
    }
  }
});

// projects
$("#owl-carousel-project").owlCarousel({
  loop: false,
  margin: 10,
  autoplay: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    840: {
      items: 2
    },
    1024: {
      items: 2
    },
    1200: {
      items: 3
    },
    1400: {
      items: 3
    }
  }
});

// useful-links
$(document).ready(function () {
  $("#owl-carousel4").owlCarousel({
    items: 4,
    pagination: true,
    autoPlay: true,
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
        items: 4
      }
    }
  });
});

$(document).ready(function () {
  $("#owl-carousel-organization").owlCarousel({
    items: 4,
    autoPlay: true,
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
        items: 4
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const collapse = document.getElementById("navbarSupportedContent");

  if (!toggler || !collapse) {
    console.warn("Navbar toggler və ya #navbarSupportedContent tapılmadı.");
    return;
  }

  const isMobile = () => window.matchMedia("(max-width: 991px)").matches;

  function openCollapse() {
    collapse.classList.add("show");
    toggler.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeCollapse() {
    collapse.classList.remove("show");
    toggler.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    collapse.querySelectorAll(".dropdown-menu.show").forEach(m => m.classList.remove("show"));
    collapse.querySelectorAll(".nav-item.dropdown > a[aria-expanded='true']").forEach(a => a.setAttribute("aria-expanded", "false"));
  }

  toggler.addEventListener("click", function (e) {
    e.preventDefault();
    document.activeElement?.blur();
    if (collapse.classList.contains("show")) closeCollapse();
    else openCollapse();
  });

  collapse.querySelectorAll(".nav-link").forEach(link => {
    if (link.closest(".nav-item.dropdown")) return;
    link.addEventListener("click", function () {
      if (isMobile()) closeCollapse();
    });
  });

  collapse.addEventListener("click", function (e) {
    const toggle = e.target.closest(".nav-item.dropdown > a");
    if (!toggle) return;
    if (!isMobile()) return; 

    e.preventDefault();
    const parent = toggle.parentElement;
    const menu = parent.querySelector(".dropdown-menu");
    if (!menu) return;

    const isOpen = menu.classList.contains("show");

    collapse.querySelectorAll(".dropdown-menu.show").forEach(m => {
      if (m !== menu) {
        m.classList.remove("show");
        m.previousElementSibling?.setAttribute("aria-expanded", "false");
      }
    });

    if (isOpen) {
      menu.classList.remove("show");
      toggle.setAttribute("aria-expanded", "false");
    } else {
      menu.classList.add("show");
      toggle.setAttribute("aria-expanded", "true");
    }
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest("#navbarSupportedContent") && !e.target.closest(".navbar-toggler")) {
      if (collapse.classList.contains("show")) closeCollapse();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeCollapse();
  });

  window.addEventListener("resize", function () {
    if (!isMobile()) {
      document.body.style.overflow = "";
      collapse.classList.remove("show");
      collapse.querySelectorAll(".dropdown-menu.show").forEach(m => m.classList.remove("show"));
      document.querySelectorAll(".nav-item.dropdown > a[aria-expanded='true']").forEach(link => link.setAttribute("aria-expanded", "false"));
    }
  });
});
// copy
document.addEventListener("DOMContentLoaded", function () {
  // Bütün copy şəkillərini tapırıq
  const copyIcons = document.querySelectorAll(".modal-other-img-copy");

  copyIcons.forEach(icon => {
    icon.addEventListener("click", function () {
      // Eyni container-dəki (yəni div-dəki) mail linkini tapırıq
      const parent = icon.closest(".modal-other-contact");
      const emailLink = parent.querySelector(".modal-other-phone");

      if (emailLink) {
        const textToCopy = emailLink.textContent.trim();

        // Clipboard-a kopyalama
        navigator.clipboard.writeText(textToCopy).then(() => {
          // Uğur mesajı (məsələn qısa effekt)
          icon.style.opacity = "0.5";
          setTimeout(() => icon.style.opacity = "1", 500);
        }).catch(err => {
          console.error("Kopyalama alınmadı:", err);
        });
      }
    });
  });
});