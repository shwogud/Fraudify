
@artists.each do |artist|
  json.set! artist.id do 
    json.extract! artist, :id, :name, :img_url, :album_ids, :song_ids
    if artist.photo.attached?
      json.photo url_for(artist.photo)
    end
  end
end