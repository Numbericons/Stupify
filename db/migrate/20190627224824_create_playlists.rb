class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.integer :owner_id, null: false
      t.string :name, null: false
      t.string :description, null: false
      t.timestamps
    end
    add_index :playlists, :name
    add_index :playlists, :owner_id
    add_index(:playlists, [:owner_id, :name], unique: true)
  end
end
