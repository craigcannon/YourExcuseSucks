/*
  Your Excuse Sucks
  http://www.yourexcuse.org
  -----------------------------------------------------------------------------

  If you are reading this, go vote if you haven't already!


*/

jQuery.noConflict();

jQuery(document).ready(function() {
  jQuery('#excuses_list li a').click(function() {
    var n = jQuery(this).attr('data-excuse'), to = jQuery('#content .excuse a.anchor[data-excuse='+ n +']:eq(0)');
    if (to.size()) {
      window.history.replaceState({}, document.title, jQuery(this).attr('href'));
      to.ScrollTo({duration:500});
      return false;
    }
  });
});