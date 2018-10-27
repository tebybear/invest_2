class Fund < ApplicationRecord
  has_many :investments
  has_many :users, through: :investments

  validates :symbol, presence: true, uniqueness: true
  validates_format_of :symbol, :with => /[A-Za-z]*/

  scope :all_funds, -> { order(symbol: :ASC)}
  scope :top_funds, -> { joins(:users).group(:fund_id).order("count(user_id) DESC").limit(5)}
end
