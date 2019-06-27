# == Schema Information
#
# Table name: artists
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  mon_listeners :integer          not null
#  image_url     :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Artist < ApplicationRecord
    validates :name, :mon_listeners, :image_url, presence: true

    has_many :albums
    
    has_many :songs,
    through: :albums,
    source: :songs
end
