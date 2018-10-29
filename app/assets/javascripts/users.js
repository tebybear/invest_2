//Render new investments via Ajax after submission on user show page.
$(function() {
  $('#new_investment').on("submit", function(e) {
    e.preventDefault();
    let formData = $(this).serialize();
    $.post(`/users/${this.user_id}/investments`, formData).done(function(data) {
      // $('render_new_investment').append(data);
      console.log(data);
    });
  });
});

// "render_new_investment"
