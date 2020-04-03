class AddPublishedToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :published, :boolean, :default => false
  end
end
