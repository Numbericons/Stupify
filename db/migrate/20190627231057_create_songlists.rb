class CreateSonglists < ActiveRecord::Migration[5.2]
  def change
    create_table :songlists do |t|
      t.integer :song_id, null: false
      t.integer :playlist_id, null: false
      t.timestamps
    end
    add_index :songlists, :song_id
    add_index :songlists, :playlist_id
  end
end
