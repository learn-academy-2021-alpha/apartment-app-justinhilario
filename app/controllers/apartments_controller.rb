class ApartmentsController < ApplicationController

def index
    apartments = Apartment.all 
    render json:apartments
end

def create
    apartment = Apartment.create(apartment_params)
    render json: apartment
end

def update
    apartment = Apartment.update(apartment_params)
    render json: apartment
end

def destroy
    apartment = Apartment.find(params[:id])
    if apartment.destroy
        render json: apartment
    else
        render json: apartment.errors, status: 422
    end
end

private
def apartment_params
    params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :user_id, :image, :name, :sqft, :listprice, :hoa, :zip)
end
end

end
