@songs.each do |song|
  json.set! song.id do 
    json.extract! song, :id, :title, :album_id
    json.artist song.artist, :id, :name
    json.albumTitle song.album.title
    json.mp3 url_for(song.mp3_file)
  end 
end