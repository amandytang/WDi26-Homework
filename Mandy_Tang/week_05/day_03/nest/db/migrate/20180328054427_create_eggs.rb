class CreateEggs < ActiveRecord::Migration[5.1]
  def change
    create_table :eggs do |t|
      t.text :name
      t.text :pattern
      t.text :image
    end
  end
end
