$(document).ready( function() {

  $('button').click( function(event) {
    var note = $(this).html();
    var audio = note + 'Audio';

    document.getElementById(audio).load();
    document.getElementById(audio).play();
  });

  $('body').keydown( function(event) {
    // a through g letter keycodes fall between 65 through 71
    var note = event.key;
    var audio = note + 'Audio';

    document.getElementById(audio).load();
    document.getElementById(audio).play();
  });
});
