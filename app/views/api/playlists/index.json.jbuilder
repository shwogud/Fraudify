@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title, :user_id, :song_ids
    json.username playlist.user.username
  end
end