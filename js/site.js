/*
  Your Excuse Sucks
  http://www.yourexcuse.org
  -----------------------------------------------------------------------------

  If you are reading this, go vote if you haven't already!


*/

jQuery.noConflict();

jQuery(document).ready(function() {
  jQuery('#excuses_list li a').click(function() {
    var n = jQuery(this).attr('href'), to = jQuery('#content .excuse a.anchor[name="!'+ n +'"]:eq(0)');

    if (to.size()) {
      window.history.replaceState({}, document.title, n);
      jQuery('html, body').animate({scrollTop: to.offset().top}, 500);
      return false;
    }
  });
});