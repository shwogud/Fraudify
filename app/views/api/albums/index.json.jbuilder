@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :release_year, :img_url, :artist_id, :song_ids
    json.artist album.artist.name
  end
end