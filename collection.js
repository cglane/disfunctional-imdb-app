var Backbone = require('backbone');
var ItemModel = require('./model');

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/moviesCharles',
  model: ItemModel,
});
