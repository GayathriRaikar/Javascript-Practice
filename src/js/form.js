$(document).ready(function(){
  $('#sub').click(function(){
    if (!$('#fn').val() && !$('#ln').val() && !$('#num').val() && !$('#gm').val() && !$('#adr').val() && !$('#res').val()) {
      $('#result').html('enter all the fields marked with *')
    } else {
      $('#result').html('student details submitted successfully')
    }
  });
}); 