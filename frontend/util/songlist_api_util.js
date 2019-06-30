export const addSonglist = (playlist_id, song_id) => (
    $.ajax({
        method: 'POST',
        url: `api/playlists/${playlist_id}/songlists`,
        data: {song_id}
    })
)

export const removeSonglist = (playlist_id, song_id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/songlists/${playlist_id}`,
    data: {song_id}
  })
);

