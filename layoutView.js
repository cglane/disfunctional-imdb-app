var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var HeaderView = require('./headerView');
var FooterView = require('./footerView');
var FormView = require('./formView');
var CollectionView = require('./collectionView');
var Collection = require('./collection');
var EditForm = require('./editForm');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function () {
    var self = this;
    var headerHTML = new HeaderView();
    var footerHTML = new FooterView();
    var formHTML = new FormView();
    var collection = new Collection();
    var editForm = new EditForm();
    collection.fetch().then(function () {
      var movieView = new CollectionView({collection: collection});
      self.$el.find('header').html(headerHTML.render().el);
      self.$el.find('footer').html(footerHTML.render().el);
      self.$el.find('aside').html(formHTML.render().el);
      self.$el.find('header').html(editForm.render().el);
    });


  }

});
