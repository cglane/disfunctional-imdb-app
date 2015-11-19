var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/moviesCharles',
  idAttribute: '_id',
  defaults:{
    movieTitle:"No title given",
    releaseYear:"1900",
    coverImg:"http://www.dvdsreleasedates.com/covers/casablanca-dvd-cover-20.jpg",
    plot:"no plot information at this time",
    rating:"0"
  },
  initialize: function () {
  },

});
