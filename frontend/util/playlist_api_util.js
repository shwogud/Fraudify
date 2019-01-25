
//all playlists
export const fetchPlaylists = () => {
  return $.ajax ({
    method: 'GET',
    url: 'api/playlists'
  }) 
}

//single playlist
export const fetchPlaylist = (id) => {
  
  return $.ajax ({
      method: 'GET',
      url: `api/playlists/${id}`
  })
}

export const createPlaylist = (playlist) => {
  return $.ajax({
      method: 'POST',
      url: "api/playlists",
      data: { playlist }
  })
}

export const destroyPlaylist = (id) => {
  return $.ajax({
      method: 'DELETE',
      url: `api/playlists/${id}`
  })
}