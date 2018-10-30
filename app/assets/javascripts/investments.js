//Load All Investments via Ajax on button click on latest investments page.
$(function(){
  $('#load-investments').on('click', function(e) {
    e.preventDefault();
    $.get("/investments" + ".json").done(function(data) {
      $('#load-investments').hide();
      $('#load-investments').after(
        '<h1>All Investments</h1>'
      )
      $('#render-investments').append(
        `<tr>
            <th>Fund:</th>
            <th>Quantity:</th>
            <th>Price:</th>
            <th>Created By:</th>
            <th>Date Created:</th>
          </tr>`
        )
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


//Render new investments via Ajax after submission on user show page.
$(function() {
  $('form#new_investment').on("submit", function(e) {
    e.preventDefault();
    var id = $("input#investment_user_id").val();
    let formData = $(this).serialize();
    $.post("/users/" + id + "/investments", formData).done(function(data) {
      // $('render_new_investment').append(data);
      // console.log(data);
    });
  });
});
