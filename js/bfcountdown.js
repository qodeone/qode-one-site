(function ($, Drupal, window, document, undefined) {



})(jQuery, Drupal, this, this.document);

(function($) {
Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {
  


  $("#bfdatedown")
  .countdown("2016/12/25", function(event) {
    $(this).text(
      event.strftime('%D days %H:%M:%S')
    );
  });
    
    
    
    
	}
};
})(jQuery);