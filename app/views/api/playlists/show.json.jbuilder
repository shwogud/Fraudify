json.song do 
  @playlist.songs.each do |song|
    json.set! song.id do 
      json.extract! song, :id, :title, :album_id
      json.artist song.artist.name
      json.album song.album.title
    end
  end
end 