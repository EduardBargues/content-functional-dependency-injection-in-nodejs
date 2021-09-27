const express = require("express");
const Api = require("./api");

const app = express();
const webapi = new Api();
app.get("/nodejs", webapi.getUser);

const PORT = 4000;
app.listen(PORT, () => console.log(`listening to port: ${PORT}`));
