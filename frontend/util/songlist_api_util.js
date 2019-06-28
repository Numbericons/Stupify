export const addSonglist = data => (
    $.ajax({
        method: 'POST',
        url: `api/playlists/${data.playlist_id}/songlists`,
        data: { songlist:  data }
    })
)

export const removeSonglist = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/songlists/${id}`
  })
);

