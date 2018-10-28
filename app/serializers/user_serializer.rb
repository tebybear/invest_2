class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :investments
  has_many :funds, through: investments
end
