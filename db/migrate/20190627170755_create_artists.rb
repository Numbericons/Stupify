class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.integer :mon_listeners, null: false
      t.string :image_url, null: false
      t.timestamps
    end
    add_index :artists, :name
  end
end
