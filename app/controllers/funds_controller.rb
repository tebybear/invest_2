class FundsController < ApplicationController

  def index
    @funds = Fund.all
  end

  def new
    @user = User.find(params[:user_id])
    @fund = @user.funds.build
  end

  def create
    @user = User.find(params[:user_id])
    @fund = @user.funds.build(fund_params)
    if @fund.save
      redirect_to user_path(@user)
    else
      render 'new'
    end
  end

  def show
    if params[:user_id]
      @funds = User.find(params[:user_id]).funds
    else
      @funds = Fund.all
    end
  end

  private

  def fund_params
    params.require(:fund).permit(:name, :industry, :strategy,
      investment_ids:[], new_investment: [:symbol, :user_id])
  end
end
