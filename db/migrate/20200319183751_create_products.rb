class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.belongs_to :product_line, null: false, foreign_key: true
      t.string :description
      t.integer :quantity
      t.decimal :cost
      t.decimal :retail

      t.timestamps
    end
  end
end
