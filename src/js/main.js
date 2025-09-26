

// Sticky navbar
// =========================
// $(document).ready(function () {
//   // Custom function which toggles between sticky class (is-sticky)
//   var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
//     var stickyHeight = sticky.outerHeight();
//     var stickyTop = stickyWrapper.offset().top;
//     if (scrollElement.scrollTop() >= stickyTop) {
//       stickyWrapper.height(stickyHeight);
//       sticky.addClass("is-sticky");
//     }
//     else {
//       sticky.removeClass("is-sticky");
//       stickyWrapper.height('auto');
//     }
//   };

//   // Find all data-toggle="sticky-onscroll" elements
//   $('[data-toggle="sticky-onscroll"]').each(function () {
//     var sticky = $(this);
//     var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
//     sticky.before(stickyWrapper);
//     sticky.addClass('sticky');

//     // Scroll & resize events
//     $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
//       stickyToggle(sticky, stickyWrapper, $(this));
//     });

//     // On page load
//     stickyToggle(sticky, stickyWrapper, $(window));
//   });
// });
// Sticky navbar end



// Dropdown navbar HOVER

// const $dropdown = $(".dropdown");
// const $dropdownToggle = $(".dropdown-toggle");
// const $dropdownMenu = $(".dropdown-menu");
// const showClass = "show";

// $(window).on("load resize", function () {
//   if (this.matchMedia("(min-width: 768px)").matches) {
//     $dropdown.hover(
//       function () {
//         const $this = $(this);
//         $this.addClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "true");
//         $this.find($dropdownMenu).addClass(showClass);
//       },
//       function () {
//         const $this = $(this);
//         $this.removeClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "false");
//         $this.find($dropdownMenu).removeClass(showClass);
//       }
//     );
//   } else {
//     $dropdown.off("mouseenter mouseleave");
//   }
// });

// Dropdown navbar HOVER End
// time
// $(document).ready(() => {

//   function AddZero(num) {
//     return num >= 0 && num < 10 ? "0" + num : num + "";
//   }

//   function getTime() {
//     var now = new Date();
//     var strDateTime = [
//       [AddZero(now.getHours()), AddZero(now.getMinutes())].join(":"),
//     ];
//     document.getElementById("time").innerHTML = strDateTime;
//   }

//   getTime();

//   setInterval(() => {
//     getTime();
//   }, 1000);

//   const backToTop = $('#backToTop')
//   const amountScrolled = 300

//   $(window).scroll(() => {
//     $(window).scrollTop() >= amountScrolled
//       ? backToTop.fadeIn('fast')
//       : backToTop.fadeOut('fast')
//   })

//   backToTop.click(() => {
//     $('body, html').animate({
//       scrollTop: 0
//     }, 600)
//     return false
//   })
// })

// time end

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

// news
// more read
document.querySelectorAll(".management-more-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const text = btn.previousElementSibling;
    const icon = btn.querySelector(".management-more-icon");

    if (text.style.maxHeight) {
      // Bağlamaq üçün
      text.style.maxHeight = null;
      btn.querySelector(".caption-more").innerHTML = `Ətraflı <span class="management-more-icon">${icon.innerHTML}</span>`;
    } else {
      // Açmaq üçün
      text.style.maxHeight = text.scrollHeight + "px";
      btn.querySelector(".caption-more").innerHTML = `Gizlət <span class="management-more-icon">${icon.innerHTML}</span>`;
    }
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

  // Open / Close funksiyaları
  function openCollapse() {
    collapse.classList.add("show");
    toggler.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeCollapse() {
    collapse.classList.remove("show");
    toggler.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    // içəridə açıq dropdown-ları bağla
    collapse.querySelectorAll(".dropdown-menu.show").forEach(m => m.classList.remove("show"));
    collapse.querySelectorAll(".nav-item.dropdown > a[aria-expanded='true']").forEach(a => a.setAttribute("aria-expanded", "false"));
  }

  // Toggler click — dərhal aç/bağla, scroll olmadan
  toggler.addEventListener("click", function (e) {
    e.preventDefault();
    document.activeElement?.blur();
    if (collapse.classList.contains("show")) closeCollapse();
    else openCollapse();
  });

  // Nav içində adi linkə klikləyəndə (mobil) menyunu bağla — istəsən çıxara bilərsən
  collapse.querySelectorAll(".nav-link").forEach(link => {
    // əgər link dropdown toggle-dursa, onu burda idarə etməyəcəyik
    if (link.closest(".nav-item.dropdown")) return;
    link.addEventListener("click", function () {
      if (isMobile()) closeCollapse();
    });
  });

  // Dropdown toggle-ları (mobil üçün kliklə açılır)
  collapse.addEventListener("click", function (e) {
    const toggle = e.target.closest(".nav-item.dropdown > a");
    if (!toggle) return;
    if (!isMobile()) return; // desktop üçün mövcud hover davranışı saxla

    e.preventDefault();
    const parent = toggle.parentElement;
    const menu = parent.querySelector(".dropdown-menu");
    if (!menu) return;

    const isOpen = menu.classList.contains("show");

    // digər açıq dropdownları bağla
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

  // Səhifənin hara kliklədiyinə görə bağlamaq (toggler və collapse xaricində klik)
  document.addEventListener("click", function (e) {
    if (!e.target.closest("#navbarSupportedContent") && !e.target.closest(".navbar-toggler")) {
      if (collapse.classList.contains("show")) closeCollapse();
    }
  });

  // ESC ilə bağlamaq
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeCollapse();
  });

  // Resize zamanı desktop-a keçəndə vəziyyəti sıfırla
  window.addEventListener("resize", function () {
    if (!isMobile()) {
      document.body.style.overflow = "";
      collapse.classList.remove("show");
      collapse.querySelectorAll(".dropdown-menu.show").forEach(m => m.classList.remove("show"));
      document.querySelectorAll(".nav-item.dropdown > a[aria-expanded='true']").forEach(link => link.setAttribute("aria-expanded", "false"));
    }
  });
});
