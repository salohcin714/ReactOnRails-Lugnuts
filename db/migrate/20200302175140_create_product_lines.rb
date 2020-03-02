class CreateProductLines < ActiveRecord::Migration[6.0]
  def change
    create_table :product_lines do |t|
      t.string :productLine
      t.string :textDescription
      t.text :htmlDescription
      t.string :image

      t.timestamps
    end
  end
end
