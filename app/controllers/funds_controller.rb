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

  def show
    @fund = Fund.find_by(id: params[:id])
    respond_to do |f|
      f.html { render 'funds/show' }
      f.json { render :json=>  @fund, :layout => false }
    end
  end

  private

  def fund_params
    params.require(:fund).permit(:symbol, :search)
  end
end
