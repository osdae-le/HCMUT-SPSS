
const envPath =
  process.env.NODE_ENV === 'development'
    ? '.env.development'
    : process.env.NODE_ENV === 'staging'
    ? '.env.staging'
    : '.env'
require('dotenv').config({ path: envPath })

export const config = {
  aws_region: process.env.AWS_REGION,
  aws_media_bucket: process.env.AWS_BUCKET,
}
