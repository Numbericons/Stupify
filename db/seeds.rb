# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# email = potterArr.map{|capStr| capStr.split("").reject{|char| char == " " }.join("").downcase}

User.create(username: 'Demo User', email: 'demo', password: '123456')

Artist.create(name: 'Lin-Manuel Miranda', mon_listeners: 1000000, image_url: 'www.puertorico.com')
Artist.create(name: 'Spearhead', mon_listeners: 500000, image_url: 'www.metta.com')
Artist.create(name: 'Guilhem Desq', mon_listeners: 200000, image_url: 'www.hurdy.com')
Artist.create(name: 'SOJA', mon_listeners: 200000, image_url: 'www.muirbeach.com')

Album.create(name: 'Hamilton', artist_id: 1, year: 2015, cover_art_url: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Hamilton_cast_recording_cover.jpeg')
Album.create(name: 'Chocolate Supa Highway', artist_id: 2, year: 1997, cover_art_url: 'https://img.discogs.com/Bxz9CaABzChlO01V-xPCBHAXXKo=/fit-in/600x593/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3303632-1324848913.jpeg.jpg')
Album.create(name: 'Visions', artist_id: 3, year: 2017, cover_art_url: 'https://m.media-amazon.com/images/I/71XB9aVUk9L._SS500_.jpg')
Album.create(name: 'Amid the Noise and Haste', artist_id: 4, year: 2014, cover_art_url: 'https://i2.wp.com/www.sojamusic.com/wpsite/wp-content/uploads/2014/08/soja_amid_1500_rgb.jpeg?fit=640%2C640')

Song.create(title: 'Alexander Hamilton', album_id: 1, song_url: 'www.stupify/albums/1/alexanderhamilton', track_num: 1, duration: 237, plays: 1000000)
Song.create(title: 'Aaron Burr, Sir', album_id: 1, song_url: 'www.stupify/albums/1/aaronburrsir', track_num: 2, duration: 157, plays: 1000000)
Song.create(title: 'My Shot', album_id: 1, song_url: 'www.stupify/albums/1/myshot', track_num: 3, duration: 333, plays: 1000000)
Song.create(title: 'Right Hand Man', album_id: 1, song_url: 'www.stupify/albums/1/righthandman', track_num: 8, duration: 180, plays: 1000000)
Song.create(title: 'Satisfied', album_id: 1, song_url: 'www.stupify/albums/1/satisfied', track_num: 11, duration: 329, plays: 1000000)
Song.create(title: 'Wait for It', album_id: 1, song_url: 'www.stupify/albums/1/waitforit', track_num: 13, duration: 194, plays: 1000000)
Song.create(title: 'Food For The Masses', album_id: 2, song_url: 'www.stupify/albums/', track_num: 4, duration: 302, plays: 50000)
Song.create(title: "U Can't Sing R Song", album_id: 2, song_url: 'www.stupify/albums/32', track_num: 5, duration: 327, plays: 40000)
Song.create(title: "Wayfarin' Stranger", album_id: 2, song_url: 'www.stupify/albums/12', track_num: 13, duration: 328, plays: 333333)
Song.create(title: "Le chateau magique", album_id: 3, song_url: 'www.stupify/albums/777', track_num: 1, duration: 250, plays: 222222)
Song.create(title: "Omen", album_id: 3, song_url: 'www.stupify/albumsbro/', track_num: 6, duration: 221, plays: 222222)
Song.create(title: "Tear It Down", album_id: 4, song_url: 'www.stupify/albumsdon/', track_num: 1, duration: 249, plays: 111111)
Song.create(title: "Talking To Myself", album_id: 4, song_url: 'www.stupify/albumsdude/', track_num: 15, duration: 222, plays: 111111)

Playlist.create(owner_id: 1, name: 'Hammy')
Songlist.create(song_id: 1, playlist_id: 1)

domains = ['.com', '.co', '.edu', '.uk', '.wiz']
symbols = "!@#$%^&*()-+=[];:,<>/?'|\`~ "

50.times do
    newUser = Faker::Movies::HarryPotter.character
    emailName = newUser.split('').reject{ |ch| symbols.include?(ch) }.join("").downcase

    location = Faker::Movies::HarryPotter.location
    site = location.split('').reject{ |ch| symbols.include?(ch) }.join("").downcase

    email = emailName + rand(100).to_s + "@" + site + domains[rand(4)]
    User.create(username: newUser, email: email, password: '123456')
end
