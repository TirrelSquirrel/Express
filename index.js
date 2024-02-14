const express = require("express");

const app = express();

const PORT = 5000;

const friends = [
  {
    id: 0,
    name: "Jhon",
  },
  {
    id: 1,
    name: "Mike",
  },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };

  friends.push(newFriend);

  res.json(newFriend);
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Heeey Mike!</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages...");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
