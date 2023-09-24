require('dotenv').config();
const mysql = require('promise-mysql');
const { Pool } = require('pg');

const DB_HOST='janggambbo.chbqg4dculoi.us-east-2.rds.amazonaws.com'
const DB_USER='postgres'
const DB_PASSWORD='alsrkd123'
const DB_DATABASE='janggambbo'
const DB_PORT='5432'

const dbConfig = {
    host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database:DB_DATABASE,
  port            : DB_PORT,
}

const pool = new Pool({
  user: process.env.DB_USER,
  host: DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432, // PostgreSQL 기본 포트
});



module.exports = pool;