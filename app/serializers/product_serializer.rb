class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :product_line_id, :description, :retail
  has_many :reviews
end
