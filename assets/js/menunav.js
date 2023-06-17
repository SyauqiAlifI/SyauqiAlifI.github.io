$(document).ready(function () {
  $('#menu-nav').on('click', function () {
    $('#sidebar-nav').toggleClass('side-nav-open');
  });
  $('#close-side-nav').on('click', function () {
    $('#sidebar-nav').toggleClass('side-nav-open');
  });
});