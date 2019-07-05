@playlists.each do |playlist|
  json.set! playlist.id do
    json.count playlist.songs.length
    if playlist.songs.length > 0
      song = playlist.songs.sample
      json.album_art song.album.cover_art_url
    end
    json.partial! 'playlist', playlist: playlist
  end
end
