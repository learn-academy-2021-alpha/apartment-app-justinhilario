class AddBathroomsColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :bathrooms, :integer
  end
end
