json.playlist do
  json.extract! @playlist, :id, :title, :user_id, :song_ids
  if @playlist.photo.attached?
    json.photo url_for(@playlist.photo)
  end
end

json.songs do 
  @playlist.songs.each do |song|
    json.set! song.id do 
      json.extract! song, :id, :title, :album_id, :artist
      json.artist song.artist.name
      json.album song.album.title
    end
  end
end 