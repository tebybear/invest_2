class FundSerializer < ActiveModel::Serializer
  attributes :id, :symbol
  has_many :investments
  has_many :users, through: :investments
end
