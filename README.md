# Fraudify README

Live(link)



Fraudify was inspired by Spotify, a music streaming service allowing users to continously listen to songs across pages, search for artists and albums, create playlists, and follow other users.


### Technologies Used
  + Fraudify was created with Rails on the backend using a PostgreSQL database and React/Redux on the frontend.
  + Images and MP3 files were stored on AWS S3, increasing scalability
  + The loading time of the app was optimized through jBuilder and Rails' Active Storage. Fewer interactions with the database helps increase user experience.
  
### Key Features
  + Continuous Play
    + Continuous Play is very important for streaming. Fraudify allowed users to continously play muisic as they navigated to other pages without interrupting their experience.
  + Progress Bar
    + The dynamic progress bar allows users to play and pause songs. To do this, I created a reference to both the progress bar and the audio player using a React element, createRef.
  
  + The user is also able to choose what part of the song they want to move to using the progress bar. I was able to accomplish this by using percentages, thinking of the progress bar as a whole, and calculating the percent change based on the user's click location.
  
  + Signed in users are also able to create their own playlists. Once created, the playlist shows up on the page with a default picture. Users are also given the ability to deete playlists. All playlists are shown on the Home page of the website! 
  
### Future Plans
  + Implement ability for users to add songs to playlists
  + Queue for songs
  + Follow other users

