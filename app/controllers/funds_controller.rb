class FundsController < ApplicationController
  before_action :require_signin
  skip_before_action :require_signin, only: [:index]

  def index
    @funds = Fund.all
    @top_funds = Fund.top_funds
    @user = current_user
    @investment = Investment.new
  end

  # def top_funds
  #   @top_funds = Fund.top_funds
  # end

  private

  def fund_params
    params.require(:fund).permit(:symbol, :search)
  end
end
