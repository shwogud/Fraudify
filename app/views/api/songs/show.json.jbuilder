json.extract! @song, :id, :title, :album_id
json.artist @song.artist, :id, :name
json.mp3 url_for(@song.mp3_file)