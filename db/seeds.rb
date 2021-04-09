# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create email:"email@gmail.com", password:"1password", password_confirmation:"1password"
user2 = User.create email:"email@yahoo.com", password:"2password", password_confirmation:"3password2"
user3 = User.create email:"email@comcast.com", password:"3password", password_confirmation:"3password"

apartments = [
    {
      street: "8169 Sterling Dr",
      city: "El Cajon",
      state: "CA",
      price: 3040,
      manager: "Clarence Thomas",
      email: "bridgeview@gmail.com",
      bedrooms: 4,
      bathrooms: 2,
      image: "https://ssl.cdn-redfin.com/photo/48/mbphoto/992/genMid.190058992_1.jpg",
      name: "Up Above El Cajon",
      sqft: 4208,
      listprice: 858450,
      hoa: 500,
      zip: 92020,
      user_id: 1
    },
     {
      street: "1819 32nd St",
      city: "San Diego",
      state: "CA",
      price: 5695,
      manager: "Judge Judy",
      email: "studio@yahoo.com",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://photos.zillowstatic.com/fp/3d578fcf09665a71c93e4c89a1d09a2b-p_e.jpg",
      name: "ADU in back!",
      sqft: 1520,
      listprice: 1299000,
      hoa: 0,
      zip: 92102,
      user_id: 2
    },
]

apartments.each do |attr|
    Apartment.create attr
    puts "creating apartment: #{attr}"
end