$(document).ready(function () {
   $('.preloader, .overlay').fadeOut();
   $('#phone-number').mask('+7-000-000-00-00');
   $('#phone-number-m').mask('+7-000-000-00-00');
   $('#phone-number-m-m').mask('+7-000-000-00-00');
   $('#sandbox-container .input-group.date').datepicker({
      startDate: "today",
      clearBtn: true,
      language: "ru",
      orientation: "bottom auto",
      autoclose: true,
   });

   $('.select').on('click', '.select__head', function () {
      if ($(this).hasClass('open')) {
         $(this).removeClass('open');
         $(this).next().fadeOut();
      } else {
         $('.select__head').removeClass('open');
         $('.select__list').fadeOut();
         $(this).addClass('open');
         $(this).next().fadeIn();
      }
   });

   $('.select').on('click', '.select__item', function () {
      $('.select__head').removeClass('open');
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
   });
   $(document).click(function (e) {
      if (!$(e.target).closest('.select').length) {
         $('.select__head').removeClass('open');
         $('.select__list').fadeOut();
      }
   });
   $('.timepicker1').timepicker({
      timeFormat: 'H:mm',
      interval: 20,
      minTime: '0',
      maxTime: '23:00',
      defaultTime: '9',
      startTime: '00:00',
      dynamic: false,
      dropdown: true,
      scrollbar: false
   });
   $('.timepicker2').timepicker({
      timeFormat: 'H:mm',
      interval: 20,
      minTime: '0',
      maxTime: '23:00',
      defaultTime: '9',
      startTime: '00:00',
      dynamic: false,
      dropdown: true,
      scrollbar: false
   });
   $('.timepicker3').timepicker({
      timeFormat: 'H:mm',
      interval: 20,
      minTime: '0',
      maxTime: '23:00',
      defaultTime: '9',
      startTime: '00:00',
      dynamic: false,
      dropdown: true,
      scrollbar: false
   })
});

const swiper = new Swiper('.swiper-types', {
   pagination: {
      el: '.swiper-pagination-types',
      clickable: true
   },
   autoHeight: true,
   breakpoints: {
      // when window width is >= 480px
      480: {
         slidesPerView: 1,
         spaceBetween: 40
      },
      // when window width is >= 768px
      640: {
         slidesPerView: 2,
         spaceBetween: 40
      }
   }
});

const swiperNew = new Swiper('.swiper-comments', {
   pagination: {
      el: '.swiper-pagination-comments',
      clickable: true
   },
   autoHeight: true,
   slidesPerView: 1,
   spaceBetween: 30,
   breakpoints: {
      // when window width is >= 480px
      769: {
         slidesPerView: 2
      }
   }
});

$(window).on('load resize', function () {
   if ($(window).width() > 768) {
      swiper.destroy(true, true);
      $('.swiper-wrapper-types').addClass('row min-m pt-5 pt-lg-0 w-100 mx-auto');
      $('.slider-card').removeClass('swiper-slide');
   } else {
      $('.swiper-wrapper-types').removeClass('row min-m pt-5 pt-lg-0 w-100 mx-auto');
      $('.slider-card').addClass('swiper-slide');
   }
});

var Map;

function init() {
   // вот команда отключения масштабирования по скроллу
   Map.behaviors.disable('scrollZoom');
}

const MenuLinks = document.querySelectorAll('.scrollto[data-goto]');

if (MenuLinks.length > 0) {
   MenuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenulinkClick);
   })

   function onMenulinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         e.preventDefault();
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockvalue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
         window.scrollTo({
            top: gotoBlockvalue,
            behavior: "smooth"
         });

      }

   }
}