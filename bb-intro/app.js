var myModel, myView, myCollection, collectionView;
var myData = [
  {
    title: "This is my first blog",
    content: "This is some killer content, we're going to be famous!",
    author: "Calvin Webster, from the web™"
  },
  {
    title: "This is my second time doing this",
    content: "Here's some content for ya!",
    author: "Hi, from the web™"
  },
  {
    title: "title 3",
    content: "Here's some content for ya!",
    author: "Hi, from the web™"
  },
  {
    title: "title 4",
    content: "Here's some content for ya!",
    author: "Hi, from the web™"
  }
];
$(function () {

  myCollection = new PostCollection(myData);

  collectionView = new PostCollectionView({collection: myCollection});



});
