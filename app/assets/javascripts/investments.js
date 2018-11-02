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
      data.forEach(function(item) {
        let investment = new Investment(item)
        $('#render-investments').append(
          `<tr>
              <td>${investment.fund}</td>
              <td>${investment.quantity}</td>
              <td>${investment.price}</td>
              <td>${investment.user.username}</td>
              <td>${investment.formattedDate()}</td>
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
      console.log(investment)
      clearInputs();

      $('li#create-new-fund').append(
        `<a href="/funds/${investment.id}">${investment.fund}</a>`
      );

      $('table#investment-table tbody').append((investment.renderNewInvestment()));
    }).fail(function() {
      alert("Error. Please try again.")
    })
  });
});

function clearInputs(){
  $('input#investment_quantity').val('');
  $('input#investment_price').val('');
  $('select#investment_fund_id').val([]);
  $('input#investment_new_fund_symbol').val('');
}


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
    return moment(this.created_at).format("MM/DD/YYYY");
  }
  deleteButton() {
    return `<form class="button_to" method="post" action="/users/${this.user.id}/investments/${this.id}">
        <input type="hidden" name="_method" value="delete">
        <input id="delete-investment" data-confirm="Please confirm deletion:" type="submit" value="Sell">
        <input type="hidden" name="authenticity_token" value="sHxSG0iBKs2E5Pf0bynA5hVd9dgsTjfXWlyf/XB+WXPT0ew1rNBmI7HS9VPxJaSXQWbeZxMd4I2rIJsfP9AUYQ==">
      </form>`
  };
  renderNewInvestment(){
    return `<tr>
        <td class="investment-fund-symbol">${this.fund}</td>
        <td class="investment-quantity">${this.quantity}</td>
        <td class="investment-price">${this.price}</td>
        <td class="investment-created-at">${this.formattedDate()}</td>
        <td class="investment-delete">${this.deleteButton()}</td>
      </tr>`
  };
}
