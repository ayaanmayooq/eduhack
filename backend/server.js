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
        const inputText = requestData.text;

        const exinput = `
        Subject: Astronomy
Page Number: 65
Content: In this chapter, we will be discussing the phenomenon of supernovas. These powerful explosions occur when a star reaches the end of its life and can release an immense amount of energy, sometimes as much as the entire energy output of the Sun throughout its entire lifetime. This energy is dispersed in the form of bright light, radiation, and shock waves, which can have a significant impact on surrounding celestial bodies.

Supernovas can be categorized into two types: Type I and Type II. Type I supernovas occur in binary star systems, where one star has already reached the end of its life and has become a white dwarf. The white dwarf then accretes material from its companion star, causing it to reach a critical mass and explode as a Type I supernova. These explosions are relatively uniform in brightness and are used as standard candles for measuring astronomical distances.

On the other hand, Type II supernovas occur in single stars that are at least eight times more massive than the Sun. As these stars reach the end of their life, they undergo a series of nuclear reactions, creating heavier elements in their core until the core can no longer sustain itself. The core then collapses, leading to a violent explosion known as a supernova. These explosions can be up to 100 times brighter than Type I supernovas and can also leave behind a remnant, such as a neutron star or black hole.

Supernovas play a crucial role in the creation of elements in the universe. The intense energy and pressure released during these explosions can fuse lighter elements together, creating heavier elements like iron, gold, and uranium. Without supernovas, these elements would not exist in the vast quantities that we see today.

In conclusion, supernovas are incredibly powerful and fascinating events in the universe. They can help us understand the life cycle of stars and the creation of elements, and their impact can be felt throughout the galaxy.
        `
        const quizprompt = `
        Generate a quiz on the above text. The quiz should include 5 MCQs, 3 True/False questions and 2 free-response questions. Include the answer key at the bottom of the quiz.
        `

        const openAIResponse = await makeOpenAICall(exinput + quizprompt);
        const qsJson = processQs(openAIResponse);

        res.json({ data: qsJson });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while processing the request." });
    }
});

app.get("/api/questions", async function (req, res) {
    try {
        const openAIResponse = await makeOpenAICall();
        res.json({ data: openAIResponse || "No OpenAI response available" });
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
