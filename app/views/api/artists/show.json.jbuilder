json.extract! @artist, :id, :name, :img_url, :album_ids, :song_ids

json.songs @artist.songs

json.albums @artist.albums

if @artist.photo.attached?
  json.photo url_for(@artist.photo)
end