const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "Jamie",
      birthday: "921015",
      gender: "male",
      job: "traveler",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "Sunny",
      birthday: "911010",
      gender: "female",
      job: "traveler",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "Jamie",
      birthday: "921015",
      gender: "male",
      job: "traveler",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
