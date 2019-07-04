@playlists.each do |playlist|
  json.set! playlist.id do
    song = playlist.songs.sample
    json.album_art = song.album.cover_art_url
    json.partial! 'playlist', playlist: playlist
  end
end
