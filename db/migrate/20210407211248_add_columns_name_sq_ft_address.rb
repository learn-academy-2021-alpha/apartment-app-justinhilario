class AddColumnsNameSqFtAddress < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :name, :string
    add_column :apartments, :address, :string
    add_column :apartments, :sqft, :integer
  end
end
