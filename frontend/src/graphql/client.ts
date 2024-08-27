import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_GRAPHQL_API_URL || "http://localhost:4000";

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
  credentials: "include",
});

export default client;
