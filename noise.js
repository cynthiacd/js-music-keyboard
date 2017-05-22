$(document).ready( function() {

  $('button').click( function(event) {
    var note = $(this).html() + 'Audio';

    document.getElementById(note).load();
    document.getElementById(note).play();
  });

  $('body').keydown( function(event) {
    var note = event.key + 'Audio';

    document.getElementById(note).load();
    document.getElementById(note).play();
  });
});
