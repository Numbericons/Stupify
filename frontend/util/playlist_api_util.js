export const fetchPlaylists = data => (
  $.ajax({
    method: 'GET',
    url: `api/playlists`,
    data: data
  })
);

export const fetchPlaylist = id => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`
  })
);

export const removePlaylist = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${id}`
  })
);

export const addPlaylist = data => (
    $.ajax({
        method: 'POST',
        url: 'api/playlists',
        data: { playlist:  data }
    })
)
