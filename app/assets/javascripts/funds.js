// Render funds's show page via Ajax on funds index page.
$(function(){
  $("a.view-fund").on("click", function(e) {
    e.preventDefault();
    var fundId = $(this).data("id");
    $.get("/funds/" + fundId + ".json", function(data) {
      console.log("Hi");
    });
  });
});

// $(function() {
//   $("a.view-profile").on("click", function(e) {
//     e.preventDefault();
//     var id = $(this).data("id");
//     $(this).hide();
//     $.get("/users/" + id + ".json", function(data) {
//       let user = new User(data);
//       user.showFunds();
//     });
//   });
// });

//User Model Object
class Fund {
  constructor(attributes) {
    this.symbol = attributes.symbol;
    this.users = attributes.users;
    this.investments = attributes.investments;
  }
  totalUsers(){
    return this.users.length;
  }
  totalInvestments(){
    return this.investments.length;
  }
}
