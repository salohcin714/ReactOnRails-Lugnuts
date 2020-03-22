class OrderDetailSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :order_id, :product_id, :quantity, :sellPrice
end
