//Load All Investments via Ajax on button click on latest investments page.
$(function(){
  $('#load_investments').on('click', function(e) {
    e.preventDefault();
    $.get("/investments" + ".json").done(function(data) {
      $('#load_investments').hide();
      $('#load_investments').after(
        '<h1>All Investments</h1>'
      )
      $('#render_investments').append(
        `<tr>
            <th>Fund:</th>
            <th>Quantity:</th>
            <th>Price:</th>
            <th>Created By:</th>
            <th>Date Created:</th>
          </tr>`
        )
      data.forEach(function(investment) {
        $('#render_investments').append(
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


//Render new investments via Ajax after submission on user show page.
$(function() {
  $('#new_investment').on("submit", function(e) {
    e.preventDefault();
    let formData = $(this).serialize();
    $.post(`/users/${this.user_id}/investments`, formData).done(function(data) {
      // $('render_new_investment').append(data);
      console.log(data);
    });
  });
});
