const express = require("express");
const app = express();
const port = 5000;

const authors = [
  {
    id: 1,
    name: "Lawrence Nowell",
    nationality: "UK",
    books: ["Beowulf"],
  },
  {
    id: 2,
    name: "William Shakespeare",
    nationality: "UK",
    books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
  },
  {
    id: 3,
    name: "Charles Dickens",
    nationality: "US",
    books: ["Oliver Twist", "A Christmas Carol"],
  },
  {
    id: 4,
    name: "Oscar Wilde",
    nationality: "UK",
    books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
  },
];

app.get("/", (req, res) => {
  res.send("Authors API");
});

app.get("/author/1", (req, res) => {
  res.send(`${authors[0].name}, ${authors[0].nationality}`);
});

app.get("/author/2", (req, res) => {
  res.send(`${authors[1].name}, ${authors[1].nationality}`);
});

app.get("/author/3", (req, res) => {
  res.send(`${authors[2].name}, ${authors[2].nationality}`);
});

app.get("/author/4", (req, res) => {
  res.send(`${authors[3].name}, ${authors[3].nationality}`);
});

app.get("/authors/:id", (req, res) => {
  const find = authors.find((author) => {
    return author.id === Number(req.params.id);
  });
  if (find) {
    res.send(`${find.name}, ${find.nationality}`);
  }
});

app.listen(port, () => {
  console.log("Server started on port: " + port);
});
