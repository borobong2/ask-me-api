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
  } else if (question.toLowerCase().includes("date")) {
    answer = `Today's date is ${new Date().toLocaleDateString()}.`;
  } else if (question.toLowerCase().includes("how are you")) {
    answer = "I'm an AI, so I don't have feelings, but thank you for asking!";
  } else {
    answer = "I'm sorry, I didn't understand your question.";
  }
  res.send({ question, answer });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
