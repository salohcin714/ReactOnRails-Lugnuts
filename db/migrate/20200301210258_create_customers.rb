class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers do |t|
      t.integer :customerNumber
      t.string :customerName
      t.string :contactLastName
      t.string :contactFirstName
      t.string :phone
      t.string :addressLine1
      t.string :addressLine2
      t.string :city
      t.string :state
      t.string :zipCode

      t.timestamps
    end
  end
end
