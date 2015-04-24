// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require godmin-medium/medium-editor

window.Godmin = window.Godmin || {};

Godmin.Medium = (function() {
  function initialize() {
    initializeState();
  }

  function initializeState() {
    initializeMedium($('[data-behavior~=medium-editor]'));
  }

  function initializeMedium($el) {
    var editor = new MediumEditor($el, $el.data('options'));
    $(editor.elements).css('height', 'auto');
  }

  return {
    initialize: initialize,
    initializeMedium: initializeMedium
  };
})();

$(function() {
  Godmin.Medium.initialize();
});
