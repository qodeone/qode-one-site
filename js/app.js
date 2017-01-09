(function ($, Drupal, window, document, undefined) {



})(jQuery, Drupal, this, this.document);

(function($) {
Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {
  


   $('.hideright').on('click', function(e) {
      $('#bhr').toggleClass("hideright showright"); //you can list several class names 
      e.preventDefault();
    });
    
    
    
    
    
}};
})(jQuery);