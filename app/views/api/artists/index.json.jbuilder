@artists.each do |artist|
  json.set! artist.id do 
    json.extract! artist, :id, :name, :img_url, :album_ids, :song_ids
  end
end