$(document).ready(function () {
   $('#phone-number').mask('+375 (00) 000-00-00');
   $('#phone-number-m').mask('+375 (00) 000-00-00');
   $('#sandbox-container .input-group.date').datepicker({
      startDate: "today",
      clearBtn: true,
      language: "ru",
      orientation: "bottom auto",
      autoclose: true,
   });
   $(".selector").flatpickr({
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      time_24hr: true
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
});

const swiper = new Swiper('.swiper-types', {
   pagination: {
      el: '.swiper-pagination-types',
      clickable: true
   },
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