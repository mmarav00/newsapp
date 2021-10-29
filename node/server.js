const express = require("express");
const newsapi = require("newsapi");

const app = express(); 

app.use(express.json()); 

app.post("/", (req, res) => {
  const { category, lang, numOfResults } = req.body;

  var options = {
    lang,
    category,
    numOfResults,
  };

  newsapi.get(options, function (result) {
    res.send(result);
  });
});

app.listen(5000, console.log(`Server running in port ${5000}..`));