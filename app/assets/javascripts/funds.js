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
