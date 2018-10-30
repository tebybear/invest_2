//Render user's funds on users index page.

$(function() {
  $("a.view-profile").on("click", function(e) {
    e.preventDefault();
    let id = $(this).data("id");
    $.get("/users/" + id + ".json", function(data) {
      user = new User(data);
      console.log(user);
    });
  });
});


//User Model Object
class User {
  constructor(attributes) {
    this.username = attributes.username;
    this.id = attributes.id;
    this.funds = attributes.funds;
    this.investments = attributes.investments;
  }
  // renderFunds() {
  //   $("ul.render-funds").append(this.funds);
  // }
}
