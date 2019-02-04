json.extract! @album, :id, :title, :artist_id, :release_year, :img_url, :song_ids

json.artist @album.artist.name

json.songs @album.songs

json.playlists @album.playlists

if @album.photo.attached?
  json.photo url_for(@album.photo)
end