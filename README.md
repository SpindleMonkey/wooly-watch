
# WoolyWatch

## Overview

![App Home Page](assets/appHome.png)

WoolyWatch is an app that lists all known wool festivals in the US, and keeps track of which festivals you've visited. The entire list of festivals is available without logging in.

New festivals can be added; existing festivals can be edited and deleted, as needed.

If you create an account, you can save festivals you've visited, find festivals by state/region.

## Wireframes

![Sign In](assets/IMG_7041.JPG)
![Map](assets/IMG_7042.JPG)
![Festival](assets/IMG_7043.JPG)
![Visited Festivals](assets/IMG_7044.JPG)
![Search Results](assets/IMG_7045.JPG)


## Stretch Goals

Future additions:
* show festival location with Google maps
* arrange meetups at the festivals
* link in breeds api from Stashy
* animal shows (which: sheep, goats, alpaca, llama, etc.)
* nearest airport
* wishlist
* reviews/attendee advice
* link to Stashy


## Development Notes

[Trello board](https://trello.com/b/z4T0eaGs/woolywatch)

![ERD](assets/ERD.JPG)

BUG: Axios caches data by default, which is nice enough, but I haven't figured out, yet, how to override that default so I can sort festival data by region, state. Currently, you have to click the filter twice.


## Installation

### Heroku
[https://ancient-gorge-96585.herokuapp.com/](https://ancient-gorge-96585.herokuapp.com/)

### Local Install
* Start the Mongo DB: mongod
* Seed the DB: node seed.js
* Start the server: node src/server.js
* Start the front end: npm run start

## Technology

* React 
* Bootstrap
* Axios
* Mongo so i can merge with stashy!
* I might use that JavaScript thing, too


## Wool Festival API Info

GET /api for wool festival API documentation

