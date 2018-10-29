// Render user's funds via Ajax on users index page

$(function() {
  $("view-profile").on("submit", function(e) {
    e.preventDefault();
    var id = $(this).data("id");
    console.log(id);
  });
});
