class InvestmentsController < ApplicationController
  before_action :require_signin

  def index
    @latest_investments = Investment.latest
    @investments = Investment.all
    # render :json => @investments, status: 200, :layout => false
    respond_to do |f|
      f.html { render 'investments/index'}
      f.json { render :json=> @investments, :layout => false }
    end
  end

  def new
    @user = User.find(params[:user_id])
    @investment = @user.investments.build
  end

  def create
    @user = User.find(params[:user_id])
    @investment = @user.investments.build(investment_params)
    @fund = @investment.fund

    iex = IexService.new
    @quote = iex.quote(@fund.symbol)

    @investment.price = @quote["latestPrice"]
    # @fund.company = @quote["companyName"]
    # @fund.sector = @quote["sector"]
    
    if @investment.save

      respond_to do |f|
        f.html { redirect_to user_path(@user) }
        f.json { render :json => @investment, :layout => false, status: 200 }
      end
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
    @investments = Investment.all
  end

  private

  def investment_params
    params.require(:investment).permit(:quantity, :price, :user_id, :fund_id,
      new_fund: [:symbol])
  end
end
