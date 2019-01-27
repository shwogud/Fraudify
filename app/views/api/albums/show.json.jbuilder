json.extract! @album, :id, :title, :artist_id, :release_year, :img_url, :song_ids

json.artist @album.artist.name

