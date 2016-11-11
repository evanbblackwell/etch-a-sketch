
$(document).ready(function(){

  gridSize(16);
  $('.square').hover(colorIn);
  $('button').click(function(){
    var size = prompt("what size would you like?");
    gridSize(size);
    $('.square').hover(colorIn);
    $('.square').css({'height': (800 / size)+ 'px' , 'width': (800/size) + 'px'})
  })
});


function colorIn(){
  var currentOpacity = +$(this).css('opacity');
  if(currentOpacity > 0) currentOpacity-= .10;
  $(this).css({'opacity': currentOpacity});
}

function gridSize(size){
  var squares = size * size;
  $('#container').empty();
  for (var i = 0; i < squares; i++){
    $('#container').append('<div class="square"></div>');
  }
}
