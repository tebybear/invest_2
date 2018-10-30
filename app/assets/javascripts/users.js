//Render user's funds on users index page.

$(function() {
  $("a.view-profile").on("click", function(e) {
    e.preventDefault();
    var id = $(this).data("id");
    console.log(this);
  });
});
