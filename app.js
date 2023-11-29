import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
app.use(cors());

app.get("/ask", (req, res) => {
  const question = req.query.question;
  let answer = "I am not sure.";
  if (question.toLowerCase().includes("hello")) {
    answer = "Hello there!";
  } else if (question.toLowerCase().includes("time")) {
    answer = `The current time is ${new Date().toLocaleTimeString()}.`;
  }
  res.send({ question, answer });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
