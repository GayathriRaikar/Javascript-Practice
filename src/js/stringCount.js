$(document).ready(function(){
  $('#sub').click(function(){
    if (!$('#str').val()) {
      $('#result').html('Enter some text')
    } else {
      var result = $('#str').val().split(" ").length;
      $('#result').html( result + ' is the string count')
    }
  });
}); 