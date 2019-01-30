@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title, :user_id, :song_ids
    json.username playlist.user.username
    if playlist.photo.attached?
      json.photo url_for(playlist.photo)
    end
  end
end