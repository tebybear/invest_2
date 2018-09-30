class FundsController < ApplicationController
  before_action :require_signin
  skip_before_action :require_signin, only: [:index]

  def index
    @funds = Fund.all
  end

  def top_funds
    @top_funds = Fund.all
  end

  private

  def fund_params
    params.require(:fund).permit(:symbol, :search)
  end
end
