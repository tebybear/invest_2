class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :investments
  has_many :funds
end
