export const fetchPlaylistSong = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/playlist_songs/${id}`
  })
}

export const createPlaylistSong = (playlistSong) => {
  return $.ajax({
    method: 'POST',
    url: "api/playlist_songs",
    data: { playlistSong }
  })
}

export const destroyPlaylistSong = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/playlist_songs/${id}`
  })
}

