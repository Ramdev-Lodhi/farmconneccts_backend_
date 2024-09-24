import dotenvFlow from 'dotenv-flow'

dotenvFlow.config()

// logger.log(process.env);
export default {
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,

    // Database
    DATABASE_URL: process.env.DATABASE_URL
}