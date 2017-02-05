const express = require("express");
const path = require("path");

const app = express();

const server = app.listen(process.env.PORT || 8080, function () {
    const port = server.address().port;
    console.log("App now running on port", port);
});

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get("**", (req, res) => {
	res.status(404).json("Not Found")
})