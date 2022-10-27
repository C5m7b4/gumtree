import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import formatGraphQLErrors from "./formatGraphQLErrors";
import accessEnv from "#root/helpers/accessEnv";

const port = accessEnv("PORT", 7000);

import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";

const apolloServer = new ApolloServer({
  formatError: formatGraphQLErrors,
  resolvers,
  typeDefs,
});

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

apolloServer.applyMiddleware({ app, cors: false, path: "/graphql" });

app.listen(port, "0.0.0.0", () => {
  console.info(`apollo api-gateway is running on ${port}`);
});
