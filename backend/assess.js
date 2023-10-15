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

    jsonRes = resToJson(result);
    console.log(jsonRes);
    return jsonRes;
}

function resToJson(result) {
    const lines = result.trim().split('\n').map((line) => line.trim());
    //console.log(lines);
    const scoreLine = lines.shift().trim();    
    const scoreMatch = scoreLine.match(/Score: (\d+\/\d+)/);
    const score = scoreMatch ? scoreMatch[1] : '';

    const responses = [];
    let responseObj = {};

    for (const line of lines) {
        if (line.match(/^\d+\./)) {
            // This line starts with a number, indicating the beginning of a new response
            if (responseObj.user_response) {
                responses.push(responseObj);
            }
            responseObj = {
                user_response: line.replace(/^\d+\.\s*/, '').replace("Response: ", ''),
            };
        } else if (line.startsWith('Correct answer:')) {
            responseObj.correct_answer = line.split(': ')[1];
        } else if (line.startsWith('Explanation:')) {
            responseObj.explanation = line.split(': ')[1];
            responses.push(responseObj);
            responseObj = {};
        }
    }

    return {
        score,
        responses,
    };
}

module.exports = { assess };