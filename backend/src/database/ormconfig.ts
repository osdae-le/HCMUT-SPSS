import { join } from 'path'
import { DataSource, DataSourceOptions } from 'typeorm'
import { PROD_ENV } from '../constants'

const envPath =
  process.env.NODE_ENV === 'development'
    ? '.env.development'
    : process.env.NODE_ENV === 'staging'
    ? '.env.staging'
    : '.env'
require('dotenv').config({ path: envPath })
const config = {
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  port: parseInt(process.env.SQL_PORT || '3306'),
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
}

const connectionOptions: DataSourceOptions = {
  type: 'postgres',
  host: config.host || 'db',
  port: config.port || 5437,
  username: config.user || 'postgres',
  password: config.password || 'root',
  database: config.database || 'smart-home-db',
  ssl:
    process.env.NODE_ENV === PROD_ENV ? { rejectUnauthorized: false } : false,
  entities: [join(__dirname, '../models/*{ts,.js}')],
  // We are using migrations, synchronize should be set to false.
  synchronize: true,
  dropSchema: false,
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,
  logging: ['warn', 'error'],
  logger: process.env.NODE_ENV === PROD_ENV ? 'file' : 'debug',
  migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
}

export default connectionOptions
export const connectionSource = new DataSource(
  connectionOptions as DataSourceOptions,
)
