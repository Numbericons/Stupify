# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# email = potterArr.map{|capStr| capStr.split("").reject{|char| char == " " }.join("").downcase}

User.create(username: 'Demo User', email: 'demo', password: '123456')
Artist.create(name: 'Lin Manuel Miranda', mon_listeners: 1000000, image_url: 'www.puertorico.com')
Album.create(name: 'Hamilton', artist_id: 1, year: 2015, cover_art_url: 'www.hamilton.com')
Song.create(title: 'My Shot', album_id: 1, song_url: 'www.stupify/albums/1/myshot', track_num: 3, duration: 180, plays: 1000000)
Playlist.create(owner_id: 1, name: 'Hammy', description: 'Broadway show')
Songlist.create(song_id: 1, playlist_id: 1)

domains = [".com", '.co', '.edu', '.uk']
symbols = "!@#$%^&*()-+=[];:,<>/?'|\`~ "

50.times do
    newUser = Faker::Movies::HarryPotter.character
    emailName = newUser.split('').reject{ |ch| symbols.include?(ch) }.join("").downcase

    location = Faker::Movies::HarryPotter.location
    site = location.split('').reject{ |ch| symbols.include?(ch) }.join("").downcase

    email = emailName + rand(100).to_s + "@" + site + domains[rand(4)]
    User.create(username: newUser, email: email, password: '123456')
end
