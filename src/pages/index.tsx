import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"

interface GraphQLResponse {
  allNotion: {
    edges: Array<{
      node: {
        title: string;
        properties: {
          description: {
            value: string;
          }
        }
      };
    }>;
  };
}

const IndexPage: React.FC<PageProps> = () => {
  const data: GraphQLResponse = useStaticQuery(graphql`
    query {
      allNotion {
        edges {
          node {
            title
            properties {
              description {
                value
              }
            }
          }
        }
      }
    } 
  `)

  const allPosts = data.allNotion.edges.map((edge) => {
    const { title } = edge.node;
    const { value: description } = edge.node.properties.description
    
    return { 
      title,
      description
    }
  });

  return (
    <main>
      <Layout>
        Home page

        <ul>
          {allPosts.map((post, index) => {
            return (
              <li key={index}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </li>
            )
          })}
        </ul>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
