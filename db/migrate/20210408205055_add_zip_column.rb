class AddZipColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :zip, :integer
  end
end
