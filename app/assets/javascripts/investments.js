//Load All Investments via Ajax on button click on latest investments page.
$(function(){
  $('#load_investments').on('click', function(e) {
    e.preventDefault();
    $.get("/investments").success(function(json) {
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
      json.forEach(function(investment) {
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
