const { response } = require("express");
const { makeOpenAICall } = require("./openai");

function extractAnswerKey(text) {
    const lines = text.split('\n');
    let answerKey = [];

    // Flag to indicate when to capture lines
    let capturing = false;

    for (const line of lines) {
        if (capturing) {
            // Stop capturing when an empty line is encountered
            if (line.trim() === '') {
                break;
            }
            answerKey.push(line.trim());
        } else if (line.toLowerCase().includes('answer key')) {
            capturing = true;
        }
    }

    return answerKey.join('\n');
}
async function assess(responses, quiztext) {
    //const answerkey = extractAnswerKey(quiztext);
    //console.log(answerkey);
    console.log('Assessing');

    const assess_prompt = "\nAssess the responses against the quiz and answer key. Give score and corrections and explanation.";

    const prompt = "Responses:\n" + responses + "\nQuiz:\n" + quiztext + assess_prompt;

    const result = await makeOpenAICall(prompt);

    console.log(result);
    return result;
}

module.exports = { assess };