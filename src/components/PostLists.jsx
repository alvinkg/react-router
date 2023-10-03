import { Link } from "react-router-dom";


export default function PostLists(props) {
  const BlogPosts = props.BlogPosts;
  //below we wrap the title of each post within a Link component
    return (
      <ul>
        {Object.entries(BlogPosts).map(([slug, { title, description }]) => (
          <li key={slug}>
            <Link to={`/posts/${slug}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    );  
  }