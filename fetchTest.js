import fetch from "node-fetch";

fetch("http://askmeapi.app/ask?question=hello")
  .then((response) => response.json())
  .then((data) => {
    console.log("Answer:", data.answer);
  })
  .catch((error) => console.error("Error:", error));
