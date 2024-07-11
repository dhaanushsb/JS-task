// A blog post

const { title } = require("process");

var post = {
	id : 1,
	title : "My Crazy Space Adventure",
	author : "Philae",
	created : "2015-06-21",
	body : "You will not believe where I just woke up!! Only on a comet..."
};
console.log(post.author);
console.log(post.id);
console.log(post.title);

var post2 ={
	id : 2,
	title : "Personal Bio" ,
	created : "2024-07-11",
};
console.log(post2.id);



/* Further Adventures
 *
 * 1) Display some of the properties.
 *
 * 2) Add a second post.
 *
 */