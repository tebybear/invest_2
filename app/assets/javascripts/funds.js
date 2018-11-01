// Render previous and next show pages for funds via Ajax.
$(function(){
  $("a#previous-fund").on("click", function(e){
    e.preventDefault();
    fundId = $(this).data("fundid") - 1
    $.get("/funds/" + fundId + ".json", function(data) {
      $("#fund-symbol").text()
      console.log(data);
    });
  });
});

// <h1 id="fund-symbol"><%= @fund.symbol %></h1>
// <p id="fund-company"><strong>Company</strong>: <%= @quote["companyName"] %></p>
// <p id="fund-sector"><strong>Sector</strong>: <%= @quote["sector"] %></p>
// <p id="fund-price"><strong>Latest Price</strong>: $<%= @quote["latestPrice"] %></p>
// <p id="fund-users">Users With This Fund: <%= @fund.users.uniq.length %></p>
// <p id="fund-investments">Investments With This Fund: <%= @fund.investments.length %></p>
//


//User Model Object
class Fund {
  constructor(attributes) {
    this.id = attributes.id;
    this.symbol = attributes.symbol;
    this.users = attributes.users;
    this.investments = attributes.investments;
  }
}
