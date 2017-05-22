$(document).ready( function() {

  $('.instrument').on('click', 'button', function(event) {
    // $('button').append('<embed id="embed_player" src="audio.wav" autostart="true" hidden="true"></embed>');
    var note = $(this).attr('class').slice(-1);
    var audio = $('#' + note + 'Audio');
    // console.log(audio);

    // who knows what get(0) is doing ...
    // The get method returns the element itself, as an object. For example, we have this element:
    // .get(0) will give you the first element in the jquery object,
    audio.get(0).load();
    audio.get(0).play();

    // if you can access the html with elementById doesn't require the get(0).. to play
  });

  $('body').keydown( function(event) {
    // a through g letter keycodes fall between 65 through 71
    if ( event.keyCode > 64 && event.keyCode < 72) {
      var note = String.fromCharCode(event.keyCode).toLowerCase();
      var audio = $('#' + note + 'Audio')

      audio.get(0).load();
      audio.get(0).play();
    }
  });
});
