import fetch from "node-fetch";

const fetchQuestion = (text) => {
  fetch(`http://askmeapi.app/ask?question=${text}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Answer:", data.answer);
    })
    .catch((error) => console.error("Error:", error));
};

export default fetchQuestion;

fetchQuestion("hello");
