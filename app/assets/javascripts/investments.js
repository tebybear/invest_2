$(document).ready(function(){
  $('#load_investments').on('click', function(e) {
    e.preventDefault();
    $.get("/investments", function(data) {
      $('#render_investments').html(data);
      $('#load_investments').hide();
    });
  });
});
