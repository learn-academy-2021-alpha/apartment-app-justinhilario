class DeleteAddressPetsAddListpriceHoa < ActiveRecord::Migration[6.1]
  def change
    remove_column :apartments, :pets, :string
    remove_column :apartments, :address, :string
    add_column :apartments, :listprice, :integer
    add_column :apartments, :hoa, :integer
  end
end
