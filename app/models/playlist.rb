# == Schema Information
#
# Table name: playlists
#
#  id          :bigint           not null, primary key
#  owner_id    :integer          not null
#  name        :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Playlist < ApplicationRecord
    validates :owner_id, :name, presence: true
    
    belongs_to :owner,
    foreign_key: :owner_id,
    class_name: 'User'
    
    has_many :songlists

    has_many :songs,
    through: :songlists,
    source: :song
end
