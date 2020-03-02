class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :productCode
      t.string :productName
      t.string :productLine
      t.string :productScale
      t.string :productVendor
      t.text :productDescription
      t.integer :quantityInStock
      t.decimal :buyPrice
      t.decimal :MSRP

      t.timestamps
    end
  end
end
