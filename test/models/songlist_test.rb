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

require 'test_helper'

class SonglistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
