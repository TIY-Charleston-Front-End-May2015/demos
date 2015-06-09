

var refinedReddit = _.map(redditData.data.children, function(el) {
  return { title: el.data.title, author: el.data.author, score: el.data.score, url: el.data.url};
});
var redditTmpl = _.template($('#redditTmpl').html());

_.each(refinedReddit, function (el) {
  console.log(redditTmpl(el));
  $('.reddits').append(redditTmpl(el));
});

// console.log("refined reddit", refinedReddit);

var sampleReddit = {
  title: "This is my first reddit, gimme some gold!",
  author: "Calvin WEbster",
  score: "100",
  url: "http://www.charleston.com",
  isCool: true
};


// _.times(100, function () {
//   $('.reddits').append(redditTmpl(sampleReddit));
// });
var mergedTmpl = redditTmpl(sampleReddit);


// console.log(mergedTmpl);
