$(document).ready(function() {
    $(".burger-nav").on("click", function() {
      $("header nav ul ul").toggleClass("open");
    });
});