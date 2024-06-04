import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwy4b5lp07ug07w8zu1eehxz/master',
  cache: new InMemoryCache(),
});

// GraphQL query
const GET_POSTS = gql`
  query Assets {
    posts {
      id
      slug
      title
      createdAt
      coverImage {
        url
      }
      author {
        picture {
          url
        }
        name
      }
      excerpt
    }
  }
`

const GET_POST = gql`
  query Assets($slug: String!) {
    post(where: {slug: $slug}) {
      title
      createdAt
      content {
        html
      }
      coverImage {
        url
      }
      author {
        picture {
          url
        }
        name
      }
      excerpt
    }
  }
`

type List<T> = Promise<T[]>


// Function to fetch data
export async function getPosts(): List<{
  slug: string
  title: string
  coverImage: {
    url: string
  }
  createdAt: string
  author: {
    picture: {
      url: string
    }
    name: string
  }
  excerpt: string
}> {
  const { data } = await client.query({
    query: GET_POSTS
  });
  return data.posts;
}

export async function getPost(slug: string): Promise<{
  title: string
  createdAt: string
  content: {
    html: string
  }
  coverImage: {
    url: string
  }
  author: {
    picture: {
      url: string
    }
    name: string
  }
  excerpt: string
}> {
  const { data } = await client.query({
    query: GET_POST, variables: {slug}
  });
  return data.post;
}