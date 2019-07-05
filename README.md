# STUPIFY

[Stupify Live](https://stupify.herokuapp.com/#/)

Greetings from the good, honest and decent folks at Stupify. We aim to stupefy our audience with the simplicity and elegance of our presentation, like a newborn babe seeing a sunset for the first time.

![hamilton-ss](https://user-images.githubusercontent.com/16912968/60735158-1eb0c700-9f07-11e9-9de2-d6953625f051.png)

Stupify is a clone of Spotify conceived in two weeks. The site mimics the appearence of Spotify and allows users to create, view and edit playlists of songs from the database with the associated album and artist information.

The backend of Stupify was created using Ruby on Rails along with Postgresql. Data is retrieved to the frontend using AJAX calls. Javascript libraries React.js and Redux are utilized to create the html for the pages of the site and a final layer of CSS is applied to complete the presentation.

Playlists are the central feature of this website.  To reduce redundancy, the same song can be added to multiple playlists and a playlist can have many songs. After all, it is not a traditional library where one user checks out a song for their playlist, making it unavailable to the rest of the population. To accomplish this, an entry in a join table of Songlists, foreign keys to songs and playlists, is created to make the association.

When viewing a playlist, the Songlist associations are used to select a random song from the playlist and then fetch the associated album and its art to display to the user. Below is the snippet showing how the JSON attribute of album art is set for a playlist:

``` ruby
if playlist.songs.length > 0
  song = playlist.songs.sample
  json.album_art song.album.cover_art_url
end
```

To create a core cast of characters for the users in the database, the Ruby Faker gem was utilized. Each user in the database is based on a Harry Potter character with emails created from locations in the Wizarding and Muggle worlds. A sample domain appropriate for good British wizard children and adults is added to complete the email address.

``` ruby
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
```
### Site Features:

* User Authentication - Login and Signup
* Browse songs and playlists
* Create Playlists and add songs

### Technologies and Libraries:
 1.	PostgreSQL
 2. Ruby on Rails
 3. Bcrypt for User Auth
 4. jQuery for backend AJAX requests
 5. Javascript
 6. React.js
 7. Redux
 8.	HTML
 9.	SCSS/CSS

### Features to be Implemented:
 1. Player functionality
 2. Interface for selecting songs and albums
 3. Ellipses to hide and show additional options
