

json.set! @playlist_song.song.id do 
  json.extract! @playlist_song.song, :id, :title, :album_id
  json.artist @playlist_song.song.artist.name
  json.album @playlist_song.song.album.title
end