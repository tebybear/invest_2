module UsersHelper
  def new_user(user)
    if user.investments.count === 0
      true
    end
  end
end
