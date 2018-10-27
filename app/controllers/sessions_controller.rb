class SessionsController < ApplicationController
  def new
  end

  def create
    if auth_hash
      @user = User.find_or_create_by(uid: auth_hash['uid'][0..8]) do |u|
        u.id = auth_hash['uid'][0..8]
        u.username = unique_username
        u.name = auth_hash['info']['name']
        u.email = auth_hash['info']['email']
        u.password = SecureRandom.hex
      end
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      @user = User.find_by(username: params[:username])
      if @user && @user.authenticate(params[:password])
        session[:user_id] = @user.id
        redirect_to user_path(@user.id)
      else
        flash[:notice] = "Invalid username or password. Please try again."
        redirect_to signin_path
      end
    end
  end

  def destroy
    session.clear
    redirect_to root_path
  end

  private

  def unique_username
    auth_hash['info']['email'].split("@").first + rand(1...100).to_s
  end

  def auth_hash
    request.env['omniauth.auth']
  end
end
