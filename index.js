import express from "express";
import { createYoga } from "graphql-yoga";
import { schema } from "./graphql/schema.js";

const app = express();
const yoga = createYoga({ schema });

app.use(yoga.graphqlEndpoint, yoga);

app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
