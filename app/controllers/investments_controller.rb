class InvestmentsController < ApplicationController
  before_action :require_signin

  def index
    @investments = Investment.all
  end

  def new
    @user = User.find(params[:user_id])
    @investment = @user.investments.build
  end

  def create
    @user = User.find(params[:user_id])
    @investment = @user.investments.build(investment_params)
    if @investment.save
      redirect_to user_path(@user)
    else
      render 'new'
    end
  end

  def destroy
    @investment = Investment.find_by(id: params[:id])
    @investment.destroy
    redirect_to user_path(current_user)
  end

  def latest
    @latest_investments = Investment.latest
  end

  private

  def investment_params
    params.require(:investment).permit(:quantity, :price, :user_id, :fund_id,
      new_fund: [:symbol])
  end
end
