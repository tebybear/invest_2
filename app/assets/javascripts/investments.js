$(document).ready(function(){
  $('#load_investments').on('click', function(e) {
    e.preventDefault();
    $.get("/investments", function(data) {
      console.log(data);
    });
  });
});
