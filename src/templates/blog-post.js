import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => {
  const { post } = data.postgres;
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <h3>
          {post.author.username} @ {post.createdAt}
        </h3>
        <p>{post.body}</p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($postId: Int!) {
    postgres {
      post: postById(id: $postId) {
        id
        title
        body
        createdAt
        author: userByAuthorId {
          id
          username
        }
      }
    }
  }
`;
