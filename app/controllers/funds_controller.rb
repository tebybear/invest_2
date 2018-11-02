require 'net/http'
require 'json'
require 'uri'

class FundsController < ApplicationController
  before_action :require_signin
  skip_before_action :require_signin, only: [:index]

  def index
    @funds = Fund.all
    @top_funds = Fund.top_funds
    @user = current_user
    @investment = Investment.new
  end

  def show
    @fund = Fund.find_by(id: params[:id])
    
    iex_api(@fund.symbol)

    @fund.company = @quote["companyName"]
    @fund.sector = @quote["sector"]
    @fund.price = @quote["latestPrice"]

    respond_to do |f|
      f.html { render 'funds/show' }
      f.json { render :json=>  @fund, :layout => false, status: 200 }
    end
    # render 'show'
  end

  private

  def iex_api(symbol)
    url = "https://api.iextrading.com/1.0/stock/#{symbol}/quote"
    uri = URI(url)
    result = Net::HTTP.get(uri)
    if result != "Unknown symbol"
      @quote = JSON.parse(result)
    else
      @quote = "N/A"
    end
  end

  def fund_params
    params.require(:fund).permit(:symbol, :price, :company, :sector)
  end
end
