import * as Knex from "knex";

const infinity: Knex = Knex({
  client: process.env.DB_CLIENT,
  connection: process.env.DATABASE_URL
});

export default infinity;