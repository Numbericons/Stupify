class DropDescription < ActiveRecord::Migration[5.2]
  def change
    remove_column :playlists, :description, :string
  end
end
