//Render user's funds on users index page.

$(function() {
  $("a.view-profile").on("click", function(e) {
    e.preventDefault();
    var id = $(this).data("id");
    $.get("/users/" + id + ".json", function(user) {
      console.log(user);
    });
  });
});
