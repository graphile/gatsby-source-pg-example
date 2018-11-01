import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import slugifyPost from "../../slugifyPost";

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Post List</h1>
    <ul>
      {data.postgres.posts.map(post => (
        <li key={post.id}>
          <strong>
            <Link to={slugifyPost(post)}>{post.title}</Link>
          </strong>{" "}
          by <em>{post.author.username}</em>
        </li>
      ))}
    </ul>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export const query = graphql`
  {
    postgres {
      posts: allPostsList {
        id
        author: userByAuthorId {
          id
          username
        }
        title
      }
    }
  }
`;

export default IndexPage;
