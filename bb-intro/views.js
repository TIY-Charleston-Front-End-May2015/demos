// views!!
var PostView = Backbone.View.extend({
  template: _.template($('#postTmpl').html()),
  tagName: 'article',
  events: {
    'click .add': 'alertMe'
  },
  alertMe: function (event) {
    event.preventDefault();
    alert("hi from alert");
  },
  initialize: function (options) {
    // console.log('view created');
    // console.log('in initialize', this.el);
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // console.log('in render', this.el);
    return this;
  }
});
var PostCollectionView = Backbone.View.extend({
  el: '#container',
  collection: null,
  events: {

  },
  initialize: function (options) {
    console.log('options', options);

    this.addAll();
  },
  changeColor: function (event) {
    console.log('hi, this is a cool article');
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  },
  addOne: function (post, idx, arr) {
    var postView = new PostView({model: post});
    this.$el.append(postView.render().el);
  }

});
