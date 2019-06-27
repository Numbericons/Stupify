class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :album_id, null: false
      t.string :song_url, null: false, unique: true
      t.integer :track_num, null: false
      t.integer :duration, null: false
      t.integer :plays, null: false
      t.timestamps
    end
    add_index :songs, :title
    add_index :songs, :album_id
  end
end
