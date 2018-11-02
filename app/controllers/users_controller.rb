class UsersController < ApplicationController
  before_action :verify_user, only: [:edit, :update]

  def index
    @users = User.all
  end

  def new
    if session[:user_id]
      redirect_to user_path(current_user)
    else
      @user = User.new
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path(@user.id)
    else
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
    @investment = @user.investments.build
    respond_to do |f|
      f.html { render 'users/show' }
      f.json { render :json=>  @user, :layout => false }
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to user_path(@user)
    else
      render :edit
    end
  end

  private

  def verify_user
    @user = User.find(params[:id])
    unless current_user == @user
      redirect_to signin_url, notice: "You are not authorized to access this account."
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :uid, :name)
  end
end
