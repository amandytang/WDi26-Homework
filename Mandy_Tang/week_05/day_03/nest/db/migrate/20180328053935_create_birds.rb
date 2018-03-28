class CreateBirds < ActiveRecord::Migration[5.1]
  def change
    create_table :birds do |t|
      t.text :name
      t.text :species
      t.text :colour
      t.text :image
    end
  end
end
