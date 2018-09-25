class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.string :name
      t.string :strategy
      t.integer :user_id
      t.integer :fund_id
      t.timestamps
    end
  end
end
