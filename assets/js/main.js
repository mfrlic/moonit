/**
* Template Name: OnePage - v4.3.0
* Template URL: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

$("#btn-p").click(function() {
  if($("#form-p").hasClass("d-none") && !$("#form-q").hasClass("d-none")) {
    $("#form-p").removeClass("d-none");
    $("#form-q").addClass("d-none");

    $("#btn-p").addClass("active");
    $("#btn-q").removeClass("active");
  }
})

$("#btn-q").click(function() {
  if($("#form-q").hasClass("d-none") && !$("#form-p").hasClass("d-none")) {
    $("#form-q").removeClass("d-none");
    $("#form-p").addClass("d-none");

    $("#btn-q").addClass("active");
    $("#btn-p").removeClass("active");
  }
})

$("#opt1").click(function() {
  if($("#opt1").hasClass("active")) {
    $("#opt1").removeClass("active")
    $("#checkbox1").prop("checked", false)
  }
  else {
    $("#opt1").addClass("active")
    $("#checkbox1").prop("checked", true)
  }
})

$("#opt2").click(function() {
  if($("#opt2").hasClass("active")) {
    $("#opt2").removeClass("active")
    $("#checkbox2").prop("checked", false)
  }
  else {
    $("#opt2").addClass("active")
    $("#checkbox2").prop("checked", true)
  }
})

$("#opt3").click(function() {
  if($("#opt3").hasClass("active")) {
    $("#opt3").removeClass("active")
    $("#checkbox3").prop("checked", false)
  }
  else {
    $("#opt3").addClass("active")
    $("#checkbox3").prop("checked", true)
  }
})

$("#opt4").click(function() {
  if($("#opt4").hasClass("active")) {
    $("#opt4").removeClass("active")
    $("#checkbox4").prop("checked", false)
  }
  else {
    $("#opt4").addClass("active")
    $("#checkbox4").prop("checked", true)
  }
})

$("#opt5").click(function() {
  if($("#opt5").hasClass("active")) {
    $("#opt5").removeClass("active")
    $("#checkbox5").prop("checked", false)
  }
  else {
    $("#opt5").addClass("active")
    $("#checkbox5").prop("checked", true)
  }
})

$("#opt6").click(function() {
  if($("#opt6").hasClass("active")) {
    $("#opt6").removeClass("active")
    $("#checkbox6").prop("checked", false)
  }
  else {
    $("#opt6").addClass("active")
    $("#checkbox6").prop("checked", true)
  }
})

$("#contact1").click(function() {
  if(!$("#contact1").hasClass("active")) {
    $("#contact-input").attr("placeholder", "Email")
    $("#contact1").addClass("active")
    if($("#contact2").hasClass("active")) {
      $("#contact2").removeClass("active")
    }
    if($("#contact3").hasClass("active")) {
      $("#contact3").removeClass("active")
    }
  }
})

$("#contact2").click(function() {
  if(!$("#contact2").hasClass("active")) {
    $("#contact-input").attr("placeholder", "Telegram @")
    $("#contact2").addClass("active")
    if($("#contact1").hasClass("active")) {
      $("#contact1").removeClass("active")
    }
    if($("#contact3").hasClass("active")) {
      $("#contact3").removeClass("active")
    }
  }
})

$("#contact3").click(function() {
  if(!$("#contact3").hasClass("active")) {
    $("#contact-input").attr("placeholder", "Twitter @")
    $("#contact3").addClass("active")
    if($("#contact1").hasClass("active")) {
      $("#contact1").removeClass("active")
    }
    if($("#contact2").hasClass("active")) {
      $("#contact2").removeClass("active")
    }
  }
})