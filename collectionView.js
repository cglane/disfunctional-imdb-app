var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var itemView = require('./modelView');
var itemModel = require('./model');

module.exports = Backbone.View.extend({
  el: '.container',
  events: {
    'click #submitted': 'submitForm',
    'click #edit':'onEditReturn',
    'dblclick .movie': 'editPost',


  },
  submitForm: function (e) {
    e.preventDefault();
    var myFriend = this;
    var movie = {
      movieTitle:this.$el.find('input[id="title"]').val(),
      releaseYear:this.$el.find('input[id="release"]').val(),
      coverImg:this.$el.find('input[id="cover"]').val(),
      plot:this.$el.find('input[id="plots"]').val(),
      rating:this.$el.find('input[id="rating"]').val()
    }
    var newModel = new itemModel(movie);
    newModel.save().then(function(){
      myFriend.collection.add(newModel);
      myFriend.addOne(newModel);
      $('input[type="text"], textarea').val('');
      $('.first-form').addClass('display-none');
    });
  },
  editPost:function(e){
    $('.first-form').css('display','none');
    $('.edit-form').removeClass('display-none');
    $('.edit-form').addClass('display-block');
    $('input[id="titles"], value').val(this.model.get('movieTitle'));
    $('input[id="releases"], value').val(this.model.get('releaseYear'));
    $('input[id="covers"], value').val(this.model.get('coverImg'));
    $('input[id="plotss"], value').val(this.model.get('plot'));
    $('input[id="ratings"], value').val(this.model.get('rating'));
  },
  onEditReturn:function(e){
    e.preventDefault();
    var movie = {
      // _id:this.model.get('_id'),
      movieTitle:this.$el.find('input[id="titles"]').val(),
      releaseYear:this.$el.find('input[id="releases"]').val(),
      coverImg:this.$el.find('input[id="covers"]').val(),
      plot:this.$el.find('input[id="plotss"]').val(),
      rating:this.$el.find('input[id="ratings"]').val()
    };
    newModel.save(movie);
  },
  initialize: function () {
    this.addAll();
  },
  addOne: function(shit) {
    glob = shit;
    var modelView = new itemView({model: shit});
    this.$el.append(modelView.render().el);
  },
  addAll: function () {

    _.each(this.collection.models, this.addOne, this);

  }
})
