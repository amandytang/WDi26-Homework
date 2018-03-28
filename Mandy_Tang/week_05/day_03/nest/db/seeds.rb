# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bird.destroy_all
Bird.create(:name => 'Superb Fairy Wren', :species => 'Maluridae', :colour => 'Brown, black and blue')
Bird.create(:name => 'Kingfisher', :species => 'Alcedinidae', :colour => 'Blue and orange')

Egg.destroy_all
Egg.create(:name => 'Superb Fairy Wren egg', :pattern => 'Matte white with reddish-brown splotches')
Egg.create(:name => 'Kingfisher egg', :pattern => 'White and glossy')
