class InvestmentSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :price, :created_at
  belongs_to :user
  belongs_to :fund
end
