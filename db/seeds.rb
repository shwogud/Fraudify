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


# User.create([
#   { username: 'demo', password: 'password', img_url: '' },
#   { username: 'shwogud', password: 'password', img_url: '' },
#   { username: 'agron', password: 'password', img_url: '' },
#   { username: 'christian', password: 'password', img_url: '' },
#   { username: 'native', password: 'password', img_url: '' },
# ])


u1 = User.new({ username: 'demo', password: 'password'})
u1.save!

u2 = User.new({ username: 'shwogud', password: 'password'})
u2.save! 

u3 = User.new({ username: 'agron', password: 'password'})
u3.save!

u4 = User.new({ username: 'christian', password: 'password'})
u4.save!

u5 = User.new({ username: 'navtive', password: 'password'})
u5.save!


a1 = Artist.new(name: 'Taylor Swift')
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/tswiftagron.jpg')
a1.photo.attach(io: file, filename: 'tswiftagron.jpg')
a1.save!

a2 = Artist.new(name: 'Jason Mraz')
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/jaon.jpg')
a2.photo.attach(io: file, filename: 'jaon.jpg')
a2.save!

a3 = Artist.new(name: 'Justin Bieber')
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/jb.jpg')
a3.photo.attach(io: file, filename: 'jb.jpg')
a3.save!

a4 = Artist.new(name: 'Avici')
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/avicibigggg.jpeg')
a4.photo.attach(io: file, filename: 'avicibigggg.jpeg')
a4.save!

a5 = Artist.new(name: 'TWICE')
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/TWICE8.jpg')
a5.photo.attach(io: file, filename: 'TWICE8.jpg')
a5.save!

a6 = Artist.new(name: 'Billy Joel')
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/billy-joel-net-worth-mst.jpg')
a6.photo.attach(io: file, filename: 'billy-joel-net-worth-mst.jpg')
a6.save!

# Artist.create([
#   { name: 'Taylor Swift', img_url: '' },
#   { name: 'Jason Mraz', img_url: '' },
#   { name: 'Avici', img_url: '' },
#   { name: 'Justin Bieber', img_url: '' },
#   { name: 'TWICE', img_url: '' },
# ])

alb1 = Album.new({title: 'Fearless', artist_id: a1.id, release_year: 2008})
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/tswift1989.png')
alb1.photo.attach(io: file, filename: 'tswift1989.png')
alb1.save!

alb2 = Album.new({title: 'Sing, Dance, Steal', artist_id: a2.id, release_year: 2008})
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/We_Sing%2C_We_Dance%2C_We_Steal_Things_Official_Cover.jpg')
alb2.photo.attach(io: file, filename: 'We_Sing,_We_Dance,_We_Steal_Things_Official_Cover.jpg')
alb2.save!

alb3 = Album.new({title: 'Purpose', artist_id: a3.id, release_year: 2015})
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/jbAlbum.jpg')
alb3.photo.attach(io: file, filename: 'jbAlbum.jpg')
alb3.save!

alb4 = Album.new({title: 'Stories', artist_id: a4.id, release_year: 2017})
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/avici-album.png')
alb4.photo.attach(io: file, filename: 'avici-album.png')
alb4.save!

alb5 = Album.new({title: '#Twice', artist_id: a5.id, release_year: 2017})
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/Twice-Standard_edition_(album_cover).jpg')
alb5.photo.attach(io: file, filename: 'Twice-Standard_edition_(album_cover).jpg')
alb5.save!

alb6 = Album.new({title: 'The Stranger', artist_id: a6.id, release_year: 1977})
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/220px-Thestranger1977.jpg')
alb6.photo.attach(io: file, filename: '220px-Thestranger1977.jpg')
alb6.save!




s1 = Song.new({title: "Love Story", album: alb1})
song = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/Taylor+Swift+-+Love+Story.mp3')
s1.mp3_file.attach(io: song, filename: 'Taylor Swift - Love Story.mp3')
s1.save!

s2 = Song.new({title: "You Belong with Me", album: alb1})
song = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/Taylor+Swift+-+You+Belong+With+Me.mp3')
s2.mp3_file.attach(io: song, filename: 'Taylor Swift - You Belong With Me.mp3')
s2.save!

s3 = Song.new({title: "Our Song", album: alb1})
song = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/Taylor+Swift+-+Our+Song.mp3')
s3.mp3_file.attach(io: song, filename: 'Taylor Swift - Our Song.mp3')
s3.save!

s4 = Song.new({title: "Blank Space", album: alb1})
song = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/Taylor+Swift+-+Blank+Space.mp3')
s4.mp3_file.attach(io: song, filename: 'Taylor Swift - Blank Space.mp3')
s4.save!

s5 = Song.new({title: "22", album: alb1})
song = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/Taylor+Swift+-+22.mp3')
s5.mp3_file.attach(io: song, filename: 'Taylor Swift - 22.mp3')
s5.save!

s6 = Song.new({title: "I'm Yours", album: alb2})
song = EzDownload.open("https://s3.amazonaws.com/full-stack-upload-dev/Jason+Mraz+-+I'm+Yours+(Official+Video).mp3")
s6.mp3_file.attach(io: song, filename: "Jason Mraz - I'm Yours (Official Video).mp3")
s6.save!

s7 = Song.new({title: "Lucky", album: alb2})
song = EzDownload.open("https://s3.amazonaws.com/full-stack-upload-dev/Jason+Mraz++Colbie+Caillat+-+Lucky+(Video).mp3")
s7.mp3_file.attach(io: song, filename: "Jason Mraz  Colbie Caillat - Lucky (Video).mp3")
s7.save!


s8 = Song.new({title: "Sorry", album: alb3})
song = EzDownload.open("https://s3.amazonaws.com/full-stack-upload-dev/Justin+Bieber+-+Sorry+(Dance+Video).mp3")
s8.mp3_file.attach(io: song, filename: "Justin Bieber - Sorry (Dance Video).mp3")
s8.save!

s9 = Song.new({title: "What Do You Mean", album: alb3})
song = EzDownload.open("https://s3.amazonaws.com/full-stack-upload-dev/Justin+Bieber+-+What+Do+You+Mean.mp3")
s9.mp3_file.attach(io: song, filename: "Justin Bieber - What Do You Mean.mp3")
s9.save!

s16 = Song.new({title: "Love Yourself", album: alb3})
song = EzDownload.open("https://s3.amazonaws.com/full-stack-upload-dev/Justin+Bieber+-+Love+Yourself++(PURPOSE++The+Movement).mp3")
s16.mp3_file.attach(io: song, filename: "Justin Bieber - Love Yourself  (PURPOSE  The Movement).mp3")
s16.save!


s10 = Song.new({title: "Broken Arrows", album: alb4})
song = EzDownload.open("https://s3.amazonaws.com/full-stack-upload-dev/Avicii+-+Broken+Arrows.mp3")
s10.mp3_file.attach(io: song, filename: "Avicii - Broken Arrows.mp3")
s10.save!

s11 = Song.new({title: "Hey Brother", album: alb4})
song = EzDownload.open("https://s3.amazonaws.com/full-stack-upload-dev/Avicii+-+Hey+Brother+(Lyric).mp3")
s11.mp3_file.attach(io: song, filename: "Avicii - Hey Brother (Lyric).mp3")
s11.save!


s12 = Song.new({title: "OOH-AHH 하게", album: alb5})
song = EzDownload.open("https://s3.amazonaws.com/full-stack-upload-dev/TWICE+OOH-AHH%E1%84%92%E1%85%A1%E1%84%80%E1%85%A6(Like+OOH-AHH)+MV.mp3")
s12.mp3_file.attach(io: song, filename: "TWICE OOH-AHH하게(Like OOH-AHH) MV.mp3")
s12.save!

s13 = Song.new({title: "LIKEY", album: alb5})
song = EzDownload.open("https://s3.amazonaws.com/full-stack-upload-dev/TWICE+LIKEY+MV.mp3")
s13.mp3_file.attach(io: song, filename: "TWICE LIKEY MV.mp3")
s13.save!

s17 = Song.new({title: "Sandstorm", album: alb5})
song = EzDownload.open("https://s3.amazonaws.com/notefloat-dev/sandstorm.mp3")
s17.mp3_file.attach(io: song, filename: "sandstorm.mp3")
s17.save!

s14 = Song.new({title: "Piano Man", album: alb6})
song = EzDownload.open("https://s3.amazonaws.com/full-stack-upload-dev/Piano+Man.mp3")
s14.mp3_file.attach(io: song, filename: "Piano Man.mp3")
s14.save!

s15 = Song.new({title: "Uptown Girl", album: alb6})
song = EzDownload.open("https://s3.amazonaws.com/full-stack-upload-dev/Billy+Joel+-+Uptown+Girl.mp3")
s15.mp3_file.attach(io: song, filename: "Billy Joel - Uptown Girl.mp3")
s15.save!




p1 = Playlist.new({title: 'Everyday We Lit Bro', user: u1})
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/Party.jpg')
p1.photo.attach(io: file, filename: 'Party.jpg')
p1.save!

p2 = Playlist.new({title: 'Shower Vibes', user: u1})
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/shower.jpeg')
p2.photo.attach(io: file, filename: 'shower.jpeg')
p2.save!

p3 = Playlist.new({title: 'Love at First Sight', user: u1})
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/love.jpg')
p3.photo.attach(io: file, filename: 'love.jpg')
p3.save!

p4 = Playlist.new({title: 'No Pain No Gainzzz', user: u1})
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/HIIT-Workout-Lose-Belly-Fat.jpg')
p4.photo.attach(io: file, filename: 'HIIT-Workout-Lose-Belly-Fat.jpg')
p4.save!

p5 = Playlist.new({title: 'Sleep is for the Weak', user: u1})
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/bedtime.jpg')
p5.photo.attach(io: file, filename: 'bedtime.jpg')
p5.save!

p6 = Playlist.new({title: 'Live. Laugh. Camp.', user: u1})
file = EzDownload.open('https://s3.amazonaws.com/full-stack-upload-dev/camp.jpg')
p6.photo.attach(io: file, filename: 'camp.jpg')
p6.save!



#playlist 1
pSong1 = PlaylistSong.new({playlist: p1, song: s4})
pSong1.save!

pSong2 = PlaylistSong.new({playlist: p1, song: s5})
pSong2.save!

pSong3 = PlaylistSong.new({playlist: p1, song: s8})
pSong3.save!

pSong4 = PlaylistSong.new({playlist: p1, song: s10})
pSong4.save!

pSong5 = PlaylistSong.new({playlist: p1, song: s11})
pSong5.save!

#playlist 2

pSong6 = PlaylistSong.new({playlist: p2, song: s9})
pSong6.save!

pSong7 = PlaylistSong.new({playlist: p2, song: s16})
pSong7.save!

pSong8 = PlaylistSong.new({playlist: p2, song: s14})
pSong8.save!

pSong9 = PlaylistSong.new({playlist: p2, song: s15})
pSong9.save!

pSong10 = PlaylistSong.new({playlist: p2, song: s13})
pSong10.save!

#playlist4

pSong11 = PlaylistSong.new({playlist: p4, song: s12})
pSong11.save!
pSong12 = PlaylistSong.new({playlist: p4, song: s5})
pSong12.save!
pSong13 = PlaylistSong.new({playlist: p4, song: s8})
pSong13.save!
pSong14 = PlaylistSong.new({playlist: p4, song: s11})
pSong14.save!
pSong15 = PlaylistSong.new({playlist: p4, song: s4})
pSong15.save!

#playlist3
pSong16 = PlaylistSong.new({playlist: p3, song: s1})
pSong16.save!
pSong17 = PlaylistSong.new({playlist: p3, song: s2})
pSong17.save!
pSong18 = PlaylistSong.new({playlist: p3, song: s3})
pSong18.save!
pSong19 = PlaylistSong.new({playlist: p3, song: s6})
pSong19.save!
pSong20 = PlaylistSong.new({playlist: p3, song: s7})
pSong20.save!

#playlist5
pSong21 = PlaylistSong.new({playlist: p5, song: s5})
pSong21.save!
pSong22 = PlaylistSong.new({playlist: p5, song: s7})
pSong22.save!
pSong23 = PlaylistSong.new({playlist: p5, song: s16})
pSong23.save!
pSong24 = PlaylistSong.new({playlist: p5, song: s14})
pSong24.save!

#playlist6
pSong25 = PlaylistSong.new({playlist: p6, song: s6})
pSong25.save!
pSong26 = PlaylistSong.new({playlist: p6, song: s8})
pSong26.save!
pSong27 = PlaylistSong.new({playlist: p6, song: s11})
pSong27.save!
pSong28 = PlaylistSong.new({playlist: p6, song: s17})
pSong28.save!
pSong29 = PlaylistSong.new({playlist: p6, song: s15})
pSong29.save!

