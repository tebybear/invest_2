class CreateFunds < ActiveRecord::Migration[5.2]
  def change
    create_table :funds do |t|
      t.string :symbol
      t.string :company
      t.string :sector
      t.decimal :price
      t.timestamps
    end
  end
end
