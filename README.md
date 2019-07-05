# STUPIFY

[Stupify Live](https://stupify.herokuapp.com/#/)

Greetings from the good, honest and decent folks at Stupify. We aim to stupefy our audience with the simplicity and elegance of our presentation, like a baby seeing a sunset for the first time. 

Stupify is a clone of Spotify conceived in two weeks. The site mimicks the appearence of Spotify and allows users to create, view and edit playlists of songs from the database with associated album and artist information.

The backend of Stupify was created using Ruby on Rails along with Postgresql. Data is retrieved to the frontend using AJAX calls. Javascript libraries React.js and Redux are utilized to create the html for the pages of the site and a final layer of CSS is applied to complete the presentation.

Playlists are the central feature of this website.  To reduce redundancy, the same song can be added to multiple playlists and a playlist can have many songs. After all, it's not a traditional library where one user checks out a song for their playlist making it unavailable to the rest of the population. To accomplish this, an entry in a join table of Songlists - foreign keys to songs and playlists - is created to make the association.

When viewing a playlist, the Songlist associations are used to select a random song from the playlist and then fetch the associated album and its art to display to the user. Here is the chained method used to show how the JSON attribute of album art is set:

json.album_art playlist.songs.sample.song.album.cover_art_url



This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

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

