json.set! :playlist do 
    json.set! @playlist.id do 
        json.partial! "api/playlists/playlist", playlist: @playlist
    end
end
json.set! :songs do
    @playlist.songs.each do |song|
        json.set! song.id do
            json.cover_art_url song.album.cover_art_url
            json.artist_name song.album.artist.name
            json.extract! song, :id, :title, :album_id, :song_url, :track_num, :duration, :plays
        end
    end
end
