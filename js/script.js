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