class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :name, null: false
      t.integer :artist_id, null: false
      t.integer :year, null: false
      t.string :cover_art_url, null: false
      t.timestamps
    end
    add_index :albums, :name
    add_index :albums, :artist_id
    add_index(:albums, [:name, :artist_id], unique: true)
  end
end
