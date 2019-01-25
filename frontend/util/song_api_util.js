export const fetchSongs = () => {
  return $.ajax({
    method: 'GET',
    url: "api/songs"
  })
}

export const fetchSong = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/songs/${id}`
  })
}

export const addPlaylistSong = (playlistId, songId) => {
  return $.ajax({
    method: 'POST',
    url: 'api/playlist_songs',
    data: {playlist_song: {
      playlist_id: playlistId,
      song_id: songId
    }}
  });
};

export const removePlaylistSong = (playlistId, songId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/playlist_songs/${playlistId}`,
    data: { songId },
  });
};