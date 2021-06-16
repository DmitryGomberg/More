
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
$(document).ready(function () {
   $('#phone-number').mask('+375 (00) 000-00-00');
});
const da = new DynamicAdapt("max");  
da.init();