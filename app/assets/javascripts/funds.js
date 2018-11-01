// Render funds's show page via Ajax on funds index page.
// $(function(){
//   $("a.view-fund").on("click", function(e) {
//     e.preventDefault();
//     var fundId = $(this).data("id");
//     console.log(fundId);
//     $.get("/funds/" + fundId + ".json", function(data) {
//       // $("div#id-" + fundId).append(data)
//       $("p#fund-company").text = "Hi";
//       console.log(data.investments.length);
//     });
//   });
// });

//User Model Object
class Fund {
  constructor(attributes) {
    this.id = attributes.id;
    this.symbol = attributes.symbol;
    this.users = attributes.users;
    this.investments = attributes.investments;
  }
}
