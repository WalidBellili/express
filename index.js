const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
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
  res.send(authors);
});
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
