class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :orderNumber
      t.date :orderDate
      t.date :requiredDate
      t.date :shippedDate
      t.string :status
      t.text :comments
      t.integer :customerNumber

      t.timestamps
    end
  end
end
