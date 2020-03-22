class Product < ApplicationRecord
  belongs_to :product_line
  has_many :reviews
  has_many :order_details
end
