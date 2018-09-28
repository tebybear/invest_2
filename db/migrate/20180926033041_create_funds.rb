class CreateFunds < ActiveRecord::Migration[5.2]
  def change
    create_table :funds do |t|
      t.string :fund_name
      t.string :industry
      t.string :strategy
      t.timestamps
    end
  end
end
