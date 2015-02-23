$(function() {
  var navigation = $("nav");
  var navigationToggle = $('[data-id="navigation-toggle"]');

  navigationToggle.click(function() {
    navigation.toggleClass("is-open");
  });

  new ClipboardInteractor('.copy-button', '.copy-area');
});
