//Load All Investments via Ajax on button click on latest investments page.
$(function(){
  $('#load-investments').on('click', function(e) {
    e.preventDefault();
    $.get("/investments" + ".json").done(function(data) {
      $('#load-investments').hide();
      $('#load-investments').after(
        '<h1>All Investments</h1>'
      )
      renderHeader();
      data.forEach(function(investment) {
        $('#render-investments').append(
          `<tr>
              <td>${investment.fund.symbol}</td>
              <td>${investment.quantity}</td>
              <td>${investment.price}</td>
              <td>${investment.user.username}</td>
              <td>${investment.created_at}</td>
            </tr>`
        )
      });
    });
  });
});

function renderHeader(){
  $('#render-investments').append(
    `<tr>
        <th>Fund:</th>
        <th>Quantity:</th>
        <th>Price:</th>
        <th>Created By:</th>
        <th>Date Created:</th>
      </tr>`
    )
}

//Render new investments via Ajax after submission on user show page.
$(function() {
  $('form#new_investment').on("submit", function(e) {
    e.preventDefault();
    var id = $("input#investment_user_id").val();
    let formData = $(this).serialize();
    $.post("/users/" + id + "/investments" + ".json", formData).done(function(data) {
      let investment = new Investment(data);
      $("tr#render-new-investment").show();
      $('li#create-new-fund').show();

      $('td#investment-fund-symbol').text(investment.fund);
      $('td#investment-quantity').text(investment.quantity);
      $('td#investment-price').text(investment.price);
      $('td#investment-created-at').text(investment.formattedDate());
      $('li#create-new-fund').text(investment.fund);

      $('input#investment_quantity').val('');
      $('input#investment_price').val('');
      $('select#investment_fund_id').val([]);
      $('input#investment_new_fund_symbol').val('');
      // console.log(investment);
    });
  });
});


//Investment Model Object
class Investment {
  constructor(attributes) {
    this.id = attributes.id;
    this.quantity = attributes.quantity;
    this.price = attributes.price;
    this.created_at = attributes.created_at;
    this.user = attributes.user;
    this.fund = attributes.fund.symbol;
  }
  formattedDate(){
    return moment(this.created_at).subtract(10, 'days').calendar();
  }
}
