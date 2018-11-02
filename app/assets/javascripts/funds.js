// Render previous and next show pages for funds via Ajax.

$(function(){
  var id = $("#fund-symbol").data("fundid")
  if (id > 0) {
    var fundId = parseInt(id.split("-")[1])
  }
  console.log(fundId);
  $("a#previous-fund").on("click", function(e){
    e.preventDefault();
    --fundId;
    $.get("/funds/" + fundId + ".json", function(data) {
      $("#fund-symbol").html(data["symbol"]);
      $("#fund-company").html("<strong>Company</strong>: " + data["company"]);
      $("#fund-sector").html("<strong>Sector</strong>: " + data["sector"]);
      $("#fund-price").html("<strong>Latest Price</strong>: " + data["price"]);
      $("#fund-users").html("Users With This Fund: " + data["users"].length);
      $("#fund-investments").html("Investments With This Fund: " + data['investments'].length);
      $("#fund-id").text(data["id"]);
      console.log(data)
    });
  });

  $("a#next-fund").on("click", function(e){
    e.preventDefault();
    ++fundId;
    $.get("/funds/" + fundId + ".json", function(data) {
      $("#fund-symbol").html(data["symbol"]);
      $("#fund-company").html("<strong>Company</strong>: " + data["company"]);
      $("#fund-sector").html("<strong>Sector</strong>: " + data["sector"]);
      $("#fund-price").html("<strong>Latest Price</strong>: " + data["price"]);
      $("#fund-users").html("Users With This Fund: " + data["users"].length);
      $("#fund-investments").html("Investments With This Fund: " + data['investments'].length);
      $("#fund-id").text(data["id"]);
    });
  });

});


//User Model Object
class Fund {
  constructor(attributes) {
    this.id = attributes.id;
    this.symbol = attributes.symbol;
    this.company = attributes.company;
    this.sector = attributes.sector;
    this.price = attributes.price;
    this.users = attributes.users;
    this.investments = attributes.investments;
  }
}
