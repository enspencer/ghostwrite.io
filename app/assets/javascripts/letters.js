  //cover letter//
$(document).ready(function(){

  $('.next').on('click', function(){
  $('#originHint').hide();
  });


  $('input#one_word').on('focus', function(){
  $("#oneWordHint").show();
  });

  $('input#one_word').on('blur', function(){
  $("#oneWordHint").hide();
  });

  $('input#last_job').on('focus', function(){
  $("#lastJobHint").show();
  });

  $('input#last_job').on('blur', function(){
  $("#lastJobHint").hide();
  });

  $('input#position').on('focus', function(){
  $("#positionHint").show();
  });

  $('input#position').on('blur', function(){
  $("#positionHint").hide();
  });

  $('input#interest').on('focus', function(){
  $("#interestHint").show();
  });
  
  $('input#interest').on('blur', function(){
  $("#interestHint").hide();
  });

  $('input#skill1').on('focus', function(){
  $("#skillHint").show();
  });

  $('input#skill2').on('blur', function(){
  $("#skillHint").hide();
  });

  $('#company').on('keyup', function(){
  $('#inputDiv').html($('#company').val()).append(" would be lucky to have you!");
  });

  //networking//

  $('.next').on('click', function(){
  $('#commonGroundHint').hide();
  });

  $('input#common_ground').on('focus', function(){
  $('#commonGroundHint').show(); 
  });

  $('input#reason').on('focus', function(){
  $("#reasonHint").show();
  });

  $('input#reason').on('blur', function(){
  $("#reasonHint").hide();
  });

  $('input#admire').on('focus', function(){
  $("#admireHint").show();
  });

  $('input#admire').on('blur', function(){
  $("#admireHint").hide();
  });

  $('input#background').on('focus', function(){
  $("#backgroundHint").show();
  });

  $('input#background').on('blur', function(){
  $("#backgroundHint").hide();
  });

  $('#their_name').on('keyup', function(){
  $('#inputDiv').html($('#their_name').val()).prepend("OH HEY, ");
  });


 });

