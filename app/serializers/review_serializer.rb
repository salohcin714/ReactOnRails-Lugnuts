class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :description, :product_id, :customer_id
end
