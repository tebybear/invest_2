class User < ApplicationRecord
  has_many :funds
  has_many :portfolios, through: :funds

  validates :username, presence: true
  validates :username, uniqueness: true
  validates :email, presence: true
  validates :email, uniqueness: true

  has_secure_password
end
