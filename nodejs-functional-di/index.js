const express = require("express");
const api = require("./api");

const app = express();
const webapi = api();
app.get("/nodejs", webapi.getUserHandler);

const PORT = 8000;
app.listen(PORT, () => console.log(`listening to port: ${PORT}`));
