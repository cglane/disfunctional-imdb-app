var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');

Backbone.$ = $;

module.exports = Backbone.View.extend({
  // el: '.col-md-6',
  tagName: 'article',
  template: _.template(tmpl.movie),
  events: {
    'click .delete': 'deletePost',
    // 'click div': 'onArticleClick',
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  initialize: function () {
  },
  deletePost:function(e){
    var that = this;
    e.preventDefault();
    this.$el.remove();
    this.model.destroy();
  },



});
