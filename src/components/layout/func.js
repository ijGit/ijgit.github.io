/* page scroll */
pageScroll();

function pageScroll() {
  var prev_offset = window.pageYOffset;
  
  var header = document.getElementById("header");
  var bio = document.getElementById("bio");

  window.onscroll = function () {
    var cur_offset = window.pageYOffset;
    if (prev_offset > cur_offset) {
      header.style.top = "0";
      bio.style.top = "6rem";
    } else {
      header.style.top = "-6rem";
      bio.style.top = "-12rem";
    }
    prev_offset = cur_offset;
  };
}
