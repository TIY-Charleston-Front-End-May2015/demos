// var mockData = require('./data');
var MovieCollection = require('./movieCollection');
var MovieCollectionView = require('./movieColView');
var $ = require('jquery');
var formView = require('./formView');

module.exports = $(function () {
  var collection = new MovieCollection();

  collection.fetch().then(function (data) {
    console.log('here be dataaaaa', data);
      var AppView = new MovieCollectionView({collection: collection});
    var newMovieFormView = new formView({collection: collection});
  });


});
