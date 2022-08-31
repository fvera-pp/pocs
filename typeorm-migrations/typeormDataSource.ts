import "reflect-metadata"
require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'local'}` })
import { DataSource, DataSourceOptions } from 'typeorm';
console.log(process.env.MY_TEST)
const options = {
    type: "postgres",
    host: process.env.DB_WRITE_ENDPOINT,
    port: parseInt(process.env.DB_PORT,10),
    username:  process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database:  process.env.DB_DATABASE,
    synchronize: false,
    logging: false,
    migrations: ['./migrations/**/*.ts'],
    migrationsRun: true,
};
console.log(options)
export default new DataSource(options as DataSourceOptions)
