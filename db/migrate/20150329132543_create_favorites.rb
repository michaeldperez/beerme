class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.belongs_to :user
      t.string :venue, :address, :city, :postal_code, :phone, :url
      t.integer :latitude, :longitude
      t.timestamps
    end
  end
end
