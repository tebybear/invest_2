class InvestmentSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :price
  belongs_to :user
  belongs_to :fund
end
