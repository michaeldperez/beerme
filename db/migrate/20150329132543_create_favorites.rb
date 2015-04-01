class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.belongs_to :user
      t.string :venue, :address, :phone, :url
      t.timestamps
    end
  end
end
