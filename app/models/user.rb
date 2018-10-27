class User < ApplicationRecord
  has_many :investments
  has_many :funds, through: :investments

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
  validates :password, presence: true

  has_secure_password
end
