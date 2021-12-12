require("dotenv").config()

export const port = process.env.PORT || 3000;
export const DATABASE_URL = process.env.DATABASE_URL;