class Apartment < ApplicationRecord
    belongs_to :user
    validates :street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :user_id, :image, :name, :sqft, :listprice, :zip, presence: true
end
