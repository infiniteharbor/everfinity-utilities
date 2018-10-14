"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Knex = require("knex");
const infinity = Knex({
    client: process.env.DB_CLIENT,
    connection: process.env.DATABASE_URL
});
exports.default = infinity;
