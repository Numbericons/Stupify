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

    def self.find_by_credentials(pl_id, s_id)
        songlists = Songlist.where(playlist_id: pl_id)
        songlist = songlists.where(song_id: s_id)[0]
        songlist ? songlist : nil
    end
end
