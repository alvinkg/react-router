import { useParams } from "react-router-dom";

export default function Post(props) {
    // gets the index from the url params
    const { slug } = useParams();
    const BlogPosts = props.BlogPosts;
    // search the array with index
    const post = BlogPosts[slug];
    if (!post) {
      return <span>The blog post you've requested doesn't exist.</span>
    }
    // decompose post into title and description
    const { title, description } = post;
    return (
      <div style={{ padding: 20 }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    )
  }