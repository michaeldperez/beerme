class Favorite < ActiveRecord::Base
  belongs_to :user

  validates :venue, { presence: true }

end
