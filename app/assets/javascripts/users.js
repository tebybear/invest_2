//Render new investments via Ajax after submission on user show page.
$(function() {
  $('form#new_investment').on("submit", function(e) {
    e.preventDefault();
    formData = $(this).serialize();
    $.post(`/users/${this.user_id}/investments}`, formData).done(function(data) {
      $('render_new_investment').append(data);
    });
  });
});

// "render_new_investment"
