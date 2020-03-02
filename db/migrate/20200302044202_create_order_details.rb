class CreateOrderDetails < ActiveRecord::Migration[6.0]
  def change
    create_table :order_details do |t|
      t.integer :orderNumber
      t.integer :productCode
      t.integer :quantityOrdered
      t.decimal :priceEach
      t.integer :orderLineNumber

      t.timestamps
    end
  end
end
