export default /* GraphQL */ `
    type Article {
      id: ID!
      title: String!
      slug: String!
      content: String
      thumbnailUrl: String
      author: Author!
      comments: [Comment!]
    }

    type Author{
      id: Int!
      name: String!
      username: String!
      profilePictureUrl: String
      articles: [Article!]
    }

    type User{
      id: Int!
      name: String!
      username: String!
      profilePictureUrl: String
      comments: [Comment!]
    }

    type Comment {
      id: ID!
      content: String
      user: User!
      article: Article!
    }

    type Query {
      articles(per_page: Int!, page: Int!): [Article]
      article(id: Int!): Article
      author(id: Int!): Author
    }
  `