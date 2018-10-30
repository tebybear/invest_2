//Render user's funds on users index page.
$(function() {
  $("a.view-profile").on("click", function(e) {
    e.preventDefault();
    var id = $(this).data("id");
    $.get("/users/" + id + ".json", function(data) {
      let user = new User(data);
      user.showFunds();
      // data.funds.forEach(function(fund){
      //   $("#user-" + id).append(fund.symbol + "<br>");
      // });
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
  showFunds(){
    let userFunds = this.funds.map(function(fund) {
      return fund.symbol;
    });
    let uniqueFunds = [...new Set(userFunds)]
    uniqueFunds.forEach((symbol) => {
      $("#user-" + this.id).append(symbol + "<br>");
    });
  }
}
