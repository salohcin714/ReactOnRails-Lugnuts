class CreateTestimonials < ActiveRecord::Migration[6.0]
  def change
    create_table :testimonials do |t|
      t.string :title
      t.string :content
      t.string :firstName
      t.string :lastName
      t.boolean :verified

      t.timestamps
    end
  end
end
