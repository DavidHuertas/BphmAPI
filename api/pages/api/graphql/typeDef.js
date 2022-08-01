import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Foo {
    id: ID!
    name: String
    bar: [Bar]
    message: String
  }

  type Bar {
    id: ID!
    name: String
    message: String
  }

  type Query {
    foo(
      id: ID
      name: String
      message: String
      page: Int = 0
      limit: Int
    ): [Foo]
    getFoo(id: String!): Foo!

    bar(
      id: ID
      name: String
      description: String
      page: Int = 0
      limit: Int
    ): [Bar]
    getBar(id: String!): Bar!
  }
`;
