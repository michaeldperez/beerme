class Favorite < ActiveRecord::Base
  belongs_to :user

  validates :venue, :latitude, :longitude, { presence: true }

end
