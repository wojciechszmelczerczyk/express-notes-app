const { path } = require("app-root-path");

// env
require("dotenv").config({ path: `${path}/.env` });

// express
const createServer = require("../server/util/createServer");

// db connection
const { dbConnection } = require("../server/db/connection");

dbConnection(process.env.DB_URI);

const app = createServer();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
