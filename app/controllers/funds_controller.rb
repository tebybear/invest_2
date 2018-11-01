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
    symbol = @fund.symbol
    # respond_to do |f|
    #   f.html { render 'funds/show' }
    #   f.json { render :json=>  @fund, :layout => false }
    # end
    url = "https://api.iextrading.com/1.0/stock/#{symbol}/stats"
    uri = URI(url)
    result = Net::HTTP.get(uri)
    @stats = JSON.parse(result)
    render 'show'
  end

  # def top_funds
  #   @top_funds = Fund.top_funds
  # end

  private

  def fund_params
    params.require(:fund).permit(:symbol, :search)
  end
end
