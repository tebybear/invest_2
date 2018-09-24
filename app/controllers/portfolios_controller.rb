class PortfoliosController < ApplicationController
  def new
    @portfolio = Portfolio.new
  end

  def create
    @portfolio = Portfolio.new(portfolio_params)
    if @portfolio.save
      redirect_to portfolio_path(@portfolio)
    else
      redirect_to portfolios_path
    end
  end

  def show
    @portfolio = Portfolio.find_by(id: params[:id])
  end

  def edit
    @portfolio = Portfolio.find_by(id: params[:id])
  end

  def update
    @portfolio = Portfolio.find_by(id: params[:id])
    @portfolio.update(portfolio_params)
    redirect_to portfolio_path(@portfolio)
  end

  def destroy
    @portfolio = Portfolio.find_by(id: params[:id])
    @Portfolio.destroy
    redirect_to '/'
  end

  private

  def portfolio_params
    params.require(:portfolio).permit(:name, :strategy, :email)
  end
end
