class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers do |t|
      t.string :firstName
      t.string :lastName
      t.string :phone
      t.string :address
      t.string :city
      t.string :state
      t.string :postalCode
      t.string :country
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
