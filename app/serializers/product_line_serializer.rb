class ProductLineSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description
  has_many :products
end
