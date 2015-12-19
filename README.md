# BeerMe
An application that uses your geolocation to pinpoint the nearest places for you to find a beer.

## How to Use

Sign in, or create a secure account, and **BeerMe** will use HTML5's built-in geolocator to determine your current location. **BeerMe** will then use your location to make an API call to [Foursquare](http://foursquare.com) and return 30 nearby venues for you to purchase a beer.

Venue information includes it's name, address, phone, web address, and current popularity--based on realtime [Foursquare](http://foursquare.com) check-ins.

You can also view a map of the location and receive directions to the venue from your current location using the [Google Maps](http://maps.google.com) API.

If you visited and enjoyed a particular venue, or want to save a location for future visits, you can store the venue's information on a personalized *favorites* page.

## Languages

- Ruby
- JavaScript

## Libraries, Frameworks, and Plugins

- Sinatra
- JQuery
- [Pure CSS](http://purecss.io)
- [Simple Grid](http://thisisdallas.github.io/Simple-Grid/)
- [Simple Modal](http://www.ericmmartin.com/projects/simplemodal/)

## APIs

- [Foursquare](https://developer.foursquare.com/)
- [Google Maps](https://developers.google.com/maps/)

## Updates

This project is in the process of being updated. Proposed future changes include:

- Decoupling the application and refactoring the API to be entirely json.
- Re-writing the front-end in [React.js](https://facebook.github.io/react/).
- Adding tests ([RSpec][rs] and [Mocha][mo]/[Chai][ch]).
- Implementing a front-end build system.
- Adding continuous integration.
- Deploying application to [Heroku](https://www.heroku.com/).
- (Ideal): Replace jQuery with vanilla JavaScript.

[rs]: http://rspec.info/
[mo]: https://mochajs.org/
[ch]: http://chaijs.com/
