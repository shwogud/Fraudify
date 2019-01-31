json.extract! @song, :id, :title

json.mp3 url_for(@song.mp3_file)