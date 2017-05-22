$(document).ready( function() {

  $('.instrument').on('click', 'button', function(event) {
    // $('button').append('<embed id="embed_player" src="audio.wav" autostart="true" hidden="true"></embed>');
    var note = $(this).attr('class').slice(-1);
    // using elementById doesn't require the get(0)..
    var audio = $('#' + note + 'Audio')
    console.log(audio);

    // who knows what get(0) is doing ...
    audio.get(0).load();
    audio.get(0).play();
  });

  $('body').keydown( function(event) {

    if ( event.keyCode > 64 && event.keyCode < 72) {
      var note = String.fromCharCode(event.keyCode).toLowerCase();
      var audio = $('#' + note + 'Audio')

      audio.get(0).load();
      audio.get(0).play();
    }
  });
});

// keycodes 65 through 71
