$(document).ready(function() {

  var return_btn = $(".btn");
  var vistHistory = [];

  $('.normal-btn').on('click', function(e) {// click on buttons
    e.preventDefault();
    var nextStep = $(this).attr('data-next');
    var currStep = $(this).attr('data-curr');
    normalSwitch(nextStep, currStep);
    vistHistory.push(currStep);
  });

  $('.normal-img-btn').on('click', function(e) {// click on images
    e.preventDefault();
    var nextStep = $(this).attr('data-next');
    var currStep = $(this).attr('data-curr');
    normalSwitch(nextStep, currStep);
    vistHistory.push(currStep);
  });

  function normalSwitch(nextStep, currStep){// hide current page and show next page
    var show_renovate = $(nextStep).attr('data-show-inovate');
    if(!nextStep){
      $("#section-intro").addClass('active');
    }else{
      $(nextStep).addClass('active');
    }
    $(currStep).removeClass('active');
    if(show_renovate=="true"){
      show_renovate_btn();
    }else{
      hide_renovate_btn();
    }
  }
  
  $('#back-btn').on('click', function(e) {//go back function
    e.preventDefault();
    var prevSection = vistHistory[vistHistory.length-1];
    var currentSection = $('div.section-block.active').find(return_btn).attr('data-curr');
    vistHistory.pop();
    if(prevSection){
      var show_renovate = $(prevSection).attr('data-show-inovate');
      $(currentSection).removeClass('active');
      $(prevSection).addClass('active');
    }
    if(show_renovate=="true"){
      show_renovate_btn();
    }else{
      hide_renovate_btn();
    }
  });

  $("#restart-btn").on('click', function(e) {//restart function
    e.preventDefault();
    hide_currentPage();
    var startPage = $("#section-intro");
    $(startPage).addClass('active');
    vistHistory = [];
  });

  $(".renovate-room-btn").on('click', function(e) {//renovate room function in specific pages
    e.preventDefault();
    hide_currentPage();
    var renovatePage = $("#section-renovation");
    $(renovatePage).addClass('active');
  });

  function show_renovate_btn(){// show renovate room btn function
    $("#restart-btn").addClass('left');
    $(".renovate-room-btn").addClass('show-renovate-room');
  }

  function hide_renovate_btn(){// hide renovate room btn function
    $("#restart-btn").removeClass('left');
    $(".renovate-room-btn").removeClass('show-renovate-room');
  }

  function hide_currentPage(){// hide current and renovate room btn function
    var currentSection = $('div.section-block.active').find(return_btn).attr('data-curr');
    vistHistory.push(currentSection);
    $(currentSection).removeClass('active');
    hide_renovate_btn();
  }

  $(".section1").on('click', function(e) {// process section 1 btn
    e.preventDefault();
    hide_currentPage();
    var renovatePage = $("#section-one");
    $(renovatePage).addClass('active');
  });

  $(".section2").on('click', function(e) {// process section 2 btn
    e.preventDefault();
    hide_currentPage();
    var renovatePage = $("#section-renovation");
    $(renovatePage).addClass('active');
  });

  $(".section3").on('click', function(e) {// process section 3 btn
    e.preventDefault();
    hide_currentPage();
    var renovatePage = $("#section-Addition");
    $(renovatePage).addClass('active');
  });

  $(".section4").on('click', function(e) {// process section 4 btn
    e.preventDefault();
    hide_currentPage();
    var renovatePage = $("#section-Outdoor");
    $(renovatePage).addClass('active');
  });

});