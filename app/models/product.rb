class Product < ApplicationRecord
  belongs_to :productLine
  has_many :reviews
end
