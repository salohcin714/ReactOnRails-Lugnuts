class Order < ApplicationRecord
  has_many :orderDetails
  belongs_to :customer

end
