$(document).ready(function() {
  // anything i do in here is safe to interact with the document
  // when i say 'safe', i mean the dom exists at this point
  //
function addFour(number) {
  console.log(typeof number);
  return Number(number) + 4;
}

$('.addFour').click(function(event) {
  event.preventDefault();
  var amount = $('input[name="addfour"]').val();
  var finalCalc = addFour(amount);
  $('.total').text(finalCalc);
});



var template = "";
posts.forEach(function(el) {
  template += "<article class='post'><h3>"
  + el.title
  +"</h3><p>"
  + el.content
  + "</p>"
  + "<blockquote cite='http://calvin.io'>"
  + el.author
  + "</blockquote><a href='' class='delete'>delete</a>"
  + "</article>";


});

$('body').on('click', '.delete', function(e) {
  e.preventDefault();
  $(this).closest("article").remove();
});



$('.content').append(template);

$('.newBlogSubmit').click(function(event) {
  event.preventDefault();

  var addPostTmpl = "<article class='post'><h3>"
  + $('input[name="title"]').val()
  +"</h3><p>"
  + $('textarea').val()
  + "</p>"
  + "<blockquote cite='http://calvin.io'>"
  + $('input[name="author"]').val()
  + "</blockquote><a href='' class='delete'>delete</a>"
  + "</article>";

  $('.content').prepend(addPostTmpl);
  $('input, textarea').val("");

});




});
