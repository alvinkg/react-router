

let BlogPosts = {
    'first-blog-post': {
      title: 'First Blog Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adip.'
    },
    'second-blog-post': {
      title: 'Second Blog Post',
      description: 'Hello React Router v6'
    },

};
import Post3 from "./Post3";

// const values = Object.values(Post3)[0]
const key = Object.keys(Post3)
let post3 = Post3[key];
// const x = Object.values(Post3[key])
// console.log('post3', post3)
// console.log('values', values)
// console.log('x', x)
const BlogPostsCopy = {
  ...BlogPosts,
  post3
  
}
// console.log(BlogPostsCopy)


export default BlogPostsCopy;