$(document).ready(function($) {

  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
  });

  $('.fade').addClass('animated fadeIn');

  initializeTabs('.tab-wrap');
});

function initializeTabs(tabWrapSelector) {
  var tabNavigationSelector = '.tab-nav';
  var tabContentSelector    = '.tab-content';

  hideBackgroundContentTabs(tabContentSelector);
  bindTabNavigation(tabNavigationSelector, tabContentSelector);
};

function bindTabNavigation(tabNavigationSelector, tabContentSelector) {
  $(tabNavigationSelector).children('li').click( function() {
    $(this).siblings('li').removeClass('active-tab');

    var activeTab   = $(this).data('tabName');
    var thisContent = $(this).parent().siblings(tabContentSelector);

    thisContent.children('div').hide();
    thisContent.find("." + activeTab).show();

    $(this).addClass('active-tab');
  });
};

function hideBackgroundContentTabs(tabContentSelector) {
  $(tabContentSelector).each(function(){
    var contentTabs = $(this).children('div');
    contentTabs.hide();
    contentTabs.first().show();
  });
};
