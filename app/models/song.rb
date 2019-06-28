# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  album_id   :integer          not null
#  song_url   :string           not null
#  track_num  :integer          not null
#  duration   :integer          not null
#  plays      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
    validates :title, :album_id, :track_num, :duration, :plays, presence: true
    validates :song_url, presence: true, uniqueness: true

    belongs_to :album

    has_many :playlists

    # belongs_to :artist,
    # through: :album,
    # source: :artist
end
