export const addSonglist = data => (
    $.ajax({
        method: 'POST',
        url: `api/playlists/${data.playlist_id}/songlists`,
        data: { songlist:  data }
    })
)

export const removeSonglist = (playlist_id, id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlist_id}/songlists/${id}`
  })
);

