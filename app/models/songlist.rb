# == Schema Information
#
# Table name: songlists
#
#  id          :bigint           not null, primary key
#  song_id     :integer          not null
#  playlist_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Songlist < ApplicationRecord
    validates :song_id, :playlist_id, presence: true

    belongs_to :song
    belongs_to :playlist
end
