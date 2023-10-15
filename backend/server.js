const express = require("express");
const app = express();
const cors = require("cors");

const { makeOpenAICall } = require("./openai");
const { processQs } = require("./processQs");
const { assess } = require("./assess");

app.use(cors());
app.use(express.json());

// session cache
const sessionCache = new Map();

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

        // Check if the OpenAI response is already cached for this session
        //if (sessionCache.has(req.sessionID)) {
        //    const cachedResponse = sessionCache.get(req.sessionID);
        //    res.json(cachedResponse);
        //} else {
        //    console.log(quizprompt);
            const openAIResponse = await makeOpenAICall(text + quizprompt);

            sessionCache.set(req.sessionID, openAIResponse);

            const qsJson = processQs(openAIResponse);

            // Cache the OpenAI response for this session
            sessionCache.set(req.sessionID, openAIResponse);

            res.json(qsJson);
        //}
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

app.post("/api/responses", async function (req, res) {
    const requestData = req.body;
    const { responses } = requestData
    if (sessionCache.has(req.sessionID)) {
        const quiz = sessionCache.get(req.sessionID);
        const assessment = await assess(responses, quiz);
        res.json({ assessment, quiz });
    }
    else {
        res.json({ data: "Some error" });
    }
});

app.listen(6969, () => {
  console.log("app listening on port 6969");
});
