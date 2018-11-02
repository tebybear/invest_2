class FundSerializer < ActiveModel::Serializer
  attributes :id, :symbol, :price, :company, :sector
  has_many :investments
  has_many :users, through: :investments
end
