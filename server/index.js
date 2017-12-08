const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const mainCtrl = require("./controllers/mainCtrl");

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

app.get("/api/characters", mainCtrl.getChars);
app.post("/api/characters", mainCtrl.addChar);
app.put("/api/characters/:id", mainCtrl.updateChar);
app.delete("/api/characters/:id", mainCtrl.destroyChar);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
