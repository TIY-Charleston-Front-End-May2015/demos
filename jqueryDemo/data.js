// our default post data
var posts = [
  {
    title: "Lucius Title",
    author: "Calvin",
    content: "This is calvins content.....lotsa text here."
  },
  {
    title: "Kelsey Title",
    author: "Kelsey",
    content: "This is Kelsey's content.....lotsa text here."
  },
  {
    title: "Nathan Title",
    author: "Nathan",
    content: "This is Kelsey's content.....lotsa text here."
  }
];

var templates = {};

// single post template
templates.post = [
  "<article class='post'>",
  "<h3><%= title %></h3>",
  "<p><%= content %></p>",
  "<blockquote cite='http://calvin.io'>",
  "<%= author %></blockquote>",
  "<a href='' class='delete'>delete</a>",
  "</article>"
].join("");
templates.boo = [
  "<ul>",
    "<li><%= name %></li>",
  "</ul>"
].join("");

// about me page template
templates.about = [
  "<h1>More About Me</h1>",
  "<p>ThiCompiles JavaScript templates into functions that can be evaluated for rendering. Useful for rendering complicated bits of HTML from JSON data sources. Template functions can both interpolate values, using something, as well as execute arbitrary JavaScript code, with something. If you wish to interpolate a value, and have it be HTML-escaped, use something. When you evaluate a template function, pass in a data object that has properties corresponding to the template's free variables. The settings argument should be a hash containing any _.templateSettings that should be overridden.</p>"
].join("");
