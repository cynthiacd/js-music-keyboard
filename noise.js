$(document).ready( function() {
  var audio = $('#cAudio');
  console.log(audio);

  $('.instrument').on('click', 'button', function(event) {
    // $('button').append('<embed id="embed_player" src="audio.wav" autostart="true" hidden="true"></embed>');
    audio.get(0).load();
    audio.get(0).play();
    return false;
  });
});

// $('#wrap').append('<embed id="embed_player" src="audio.wav" autostart="true" hidden="true"></embed>');


//
// var colors = ['blue', 'green', 'orange'];
// var color_index = 0;
//
// var nextColor = function() {
//   var color = colors[color_index];
//   color_index++;
//   color_index %= colors.length;
//   return color;
// };
//
// $(document).ready(function() {
//   // Add code that uses the DOM here
//   $("body").keydown( function(event) {
//     // if you hit space bar in body - the box will change color
//     // can also have event.key == "32"
//     if (event.keyCode == 32){ $("#color-box").removeClass().addClass(nextColor()); }
//   });
//
// });
