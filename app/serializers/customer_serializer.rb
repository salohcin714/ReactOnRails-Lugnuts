class CustomerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :firstName, :lastName, :phone, :address, :city, :state, :postalCode, :country, :user_id
  has_many :orders
  has_many :reviews
end
