class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.date :date
      t.date :shippedDate
      t.string :status
      t.string :comments
      t.belongs_to :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
