$(document).ready( function() {

  // $('.instrument').on('click', 'button', function(event) {
  //   // $('button').append('<embed id="embed_player" src="audio.wav" autostart="true" hidden="true"></embed>');
  //   var note = $(this).attr('class').slice(-1);
  //   // using elementById doesn't require the get(0)
  //   var audio = $('#' + note + 'Audio')
  //   console.log(audio);
  //
  //   // who knows what get(0) is doing ...
  //   audio.get(0).load();
  //   audio.get(0).play();
  // });

  $('body').keydown( function(event) {
    switch (event.key) {
      case 'c':
        var audio = $('#cAudio');
        break;
      case 'd':
        var audio = $('#dAudio');
        break;
      case 'e':
        var audio = $('#eAudio');
        break;
      case 'f':
        var audio = $('#fAudio');
        break;
      case 'g':
        var audio = $('#gAudio');
        break;
      case 'a':
        var audio = $('#aAudio');
        break;
      case 'b':
        var audio = $('#bAudio');
        break;
    }

    // if (event.key == 'c') {
    //   var audio = $('#cAudio');
    // } else if (event.key == 'd' ) {
    // }
    audio.get(0).load();
    audio.get(0).play();
  });
});
