class Favorite < ActiveRecord::Base
  belongs_to :user

  validate :venue, :latitude, :longitude, { presence: true }

end
