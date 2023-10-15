const express = require("express");
const app = express();
const cors = require("cors");

const { makeOpenAICall } = require("./openai");
const { processQs } = require("./processQs")

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send({ name: "Jane Doe" }); // Should be json format
});

app.post("/api/inputtext", async function (req, res) {
    try {
        const requestData = req.body;
        //console.log(requestData);
        const { text, numMCQ, numTF, numFreeResponse } = requestData;

        const quizprompt = `
        \nGenerate a quiz on the above text. The quiz should include ${numMCQ} MCQs, ${numTF} True/False questions and ${numFreeResponse} free-response questions. Include the answer key at the bottom of the quiz. Number questions consecutively. Give questions sections-wise in the order MCQ, True/False, and Free-response.
        `

        console.log(quizprompt);
        const openAIResponse = await makeOpenAICall(text + quizprompt);
        const qsJson = processQs(openAIResponse);

        res.json( qsJson );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while processing the request." });
    }
});

app.get("/api/result", function (req, res) {
    // Handle the second GET request here
    res.json({ data: "This is the response for GET request 2" });
});

app.get("/api/answerkey", function (req, res) {
    // Handle the third GET request here
    res.json({ data: "This is the response for GET request 3" });
});

app.post("/api/responses", function (req, res) {
    // Handle the second POST request here
    const requestData = req.body; // Access the JSON data from the request body
    // Do something with requestData
    res.json({ message: "This is the response for POST request 2" });
});

app.listen(6969, () => {
  console.log("app listening on port 6969");
});
