class AddBirdIdToEggs < ActiveRecord::Migration[5.1]
  def change
    add_column :eggs, :bird_id, :integer
  end
end
