$(document).ready(function($) {
  $(document).scroll( function() {
    updateScrollerListeners();
  });
});

function getWindowPosition() {
  return $(window).scrollTop() + $(window).height();
}

function scrollListeners() {
  return {
    '#discovery' : ['.animate', 'animated fadeInUp'],
    '#wireframing' : ['.animate', 'animated flipInX'],
    '#prototyping' : ['.animate', 'animated fadeInLeft'],
    '#user-testing' : ['.animate', 'animated fadeInRight'],
    '#visual-design' : ['.animate', 'animated fadeInLeft'],
    '#implementation' : ['.animate', 'animated fadeInUp']
  };
}

function animationThreshhold(element, percent) {
  return element.offset().top + (element.height() * percent);
}

function updateScrollerListeners() {
  var listeners = Object.keys(scrollListeners());

  for (var i = 0; i < listeners.length; i++) {
    var key = listeners[i];
    var parentElement = $(key);
    var scrollListener = scrollListeners()[key];
    var animatedElementSelector = scrollListener[0];
    var action = scrollListener[1];

    if (getWindowPosition() > animationThreshhold(parentElement, 0.5)) {
      parentElement.find(animatedElementSelector).addClass(action);
    }
  }
}
