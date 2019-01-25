# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all
Playlist.destroy_all
PlaylistSong.destroy_all



ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('artists')
ApplicationRecord.connection.reset_pk_sequence!('albums')
ApplicationRecord.connection.reset_pk_sequence!('songs')
ApplicationRecord.connection.reset_pk_sequence!('playlists')
ApplicationRecord.connection.reset_pk_sequence!('playlist_songs')


User.create([
  { username: 'demo', password: 'password', img_url: '' },
  { username: 'shwogud', password: 'password', img_url: '' },
  { username: 'agron', password: 'password', img_url: '' },
  { username: 'christian', password: 'password', img_url: '' },
  { username: 'native', password: 'password', img_url: '' },
])

Artist.create([
  { name: 'Taylor Swift', img_url: '' },
  { name: 'Ed Sheeran', img_url: '' },
  { name: 'Avril Lavigne', img_url: '' },
])

Album.create([
  { title: 'Fearless', artist_id: 1, release_year: '2008', img_url: '' },
  { title: 'x', artist_id: 2, release_year: '2014', img_url: '' },
  { title: 'Let Go', artist_id: 3, release_year: '2002', img_url: '' },
])

Song.create([
  { title: 'Love Story', album_id: 1 },
  { title: 'White Horse', album_id: 1 },
  { title: 'You Belong with Me', album_id: 1 },
  { title: 'Sing', album_id: 2 },
  { title: 'Photograph', album_id: 2 },
  { title: 'Thinking Out Loud', album_id: 2 },
  { title: 'Complicated', album_id: 3 },
  { title: 'Sk8er Boi', album_id: 3 },
  { title: 'Losing Grip', album_id: 3 },
])

Playlist.create([
  { title: 'Everyday We Lit Bro', user_id: 1 },
  { title: 'Everyday We Lit Bro', user_id: 1 },
  { title: 'Everyday We Lit Bro', user_id: 1 },
  { title: 'Everyday We Lit Bro', user_id: 1 },
  { title: 'Everyday We Lit Bro', user_id: 1 },
  { title: 'Everyday We Lit Bro', user_id: 1 },
  { title: 'Everyday We Lit Bro', user_id: 1 },
  { title: 'Everyday We Lit Bro', user_id: 1 },
  { title: 'Shower Vibes', user_id: 3 },
  { title: 'Workout Vibes', user_id: 4 },
  { title: 'playlist1', user_id: 1 },
  { title: 'playlist2', user_id: 3 },
  { title: 'playlist3', user_id: 4 },
])

PlaylistSong.create([
  { playlist_id: 1, song_id: 1 },
  { playlist_id: 1, song_id: 3 },
  { playlist_id: 2, song_id: 2 },
  { playlist_id: 2, song_id: 9 },
  { playlist_id: 3, song_id: 5 },
  { playlist_id: 3, song_id: 4 },
])
