class OrderSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :date, :shippedDate, :status, :comments, :customer_id
  has_many :orderDetails
end
