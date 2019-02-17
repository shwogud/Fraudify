json.extract! @song, :id, :title, :length

json.mp3 url_for(@song.mp3_file)