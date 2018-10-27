class Fund < ApplicationRecord
  has_many :investments
  has_many :users, through: :investments

  validates :symbol, presence: true, uniqueness: true
  validates_format_of :symbol, :with => /[A-Za-z]*/

  scope :top_funds, -> { joins(:users).group(:fund_id).having("count(user_id) > 1") }
end
