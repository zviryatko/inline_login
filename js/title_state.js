(function($) {

  $(document).bind('state:title', function(e) {
    if (e.trigger) {
      var $formItem = $(e.target).closest('.form-item, .form-wrapper');
      var $label = $formItem.find('label');
      var $description = $formItem.find('.label-description');
      if (e.value) {
        $label.text($(e.target).data('checked-title'));
        $description.text($(e.target).data('checked-description'));
      }
      else {
        $label.text($(e.target).data('unchecked-title'));
        $description.text($(e.target).data('unchecked-description'));
      }
    }
  });
})(jQuery);
