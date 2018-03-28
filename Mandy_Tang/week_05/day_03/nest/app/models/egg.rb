class Egg < ActiveRecord::Base
  belongs_to :bird, :optional => true
end
