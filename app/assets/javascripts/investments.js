$(function(){
  $('#load_investments').on('click', function(e) {
    e.preventDefault();
    $.get("/investments").success(function(json) {
      $('#load_investments').hide();
      $('#render_investments').append(
        `<h1>All Investments</h1>
        <table>
          <tr>
            <th align="left">Fund:</th>
            <th align="left">Quantity:</th>
            <th align="left">Price:</th>
            <th align="left">Created By:</th>
            <th align="left">Date Created:</th>
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
            </tr>
          </table>`
        )
      });
    });
  });
});
