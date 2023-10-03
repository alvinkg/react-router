// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
// import BlogPosts from './components/BlogPosts';
import Posts from './components/Posts';
import Post from './components/Post';
import NoMatch from './components/NoMatch';
import About from './components/About';
import PostLists from './components/PostLists';
import BlogPostsCopy from './components/BlogPostsCopy';
import './App.css'

function App() {
  //Link avoids href and the slowing down via refresh pages
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
        Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
        About
        </Link>
        <Link to='/posts' style={{ padding: 4 }}>
          Posts
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NoMatch/>}/>
        <Route path='/posts' element={<Posts />}>
          {/* index prop for the PostLists route specifies the index of /posts. This indicates that whenever the URL http://localhost:3000/posts is triggered, a list of posts is going to be rendered, hence, the component PostsLists */}
          <Route index element={<PostLists BlogPosts={BlogPostsCopy} />} />
          {/* add a dynamic route called :slug in the App function component to render the contents of each post */}
          <Route path=':slug' element={<Post BlogPosts={BlogPostsCopy}/>} />
        </Route>
      </Routes>
    
      
    </Router>
  );
}

export default App;

// function Post() {
//   const { slug } = useParams();
//   const post = BlogPosts[slug];
//   if (!post) {
//     return <span>The blog post you've requested doesn't exist.</span>
//   }
//   const { title, description } = post;
//   return (
//     <div style={{ padding: 20 }}>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   )
// }


// const BlogPosts = {
//   'first-blog-post': {
//     title: 'First Blog Post',
//     description: 'Lorem ipsum dolor sit amet, consectetur adip.'
//   },
//   'second-blog-post': {
//     title: 'Second Blog Post',
//     description: 'Hello React Router v6'
//   }
// };


// function PostLists() {
//   return (
//     <ul>
//       {Object.entries(BlogPosts).map(([slug, { title, description }]) => (
//         <li key={slug}>
//           <Link to={`/posts/${slug}`}>
//             <h3>{title}</h3>
//             {/* <h4>{description}</h4> */}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );  
// }

// function Posts() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Blog</h2>
//       <Outlet/>
//     </div>
//   )  
// }

// function NoMatch() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>404: Page Not Found</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>About View</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Home View</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
//     </div>
//   );
// }
