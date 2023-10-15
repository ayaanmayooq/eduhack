
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
function assess(responses, quiztext) {
    const answerkey = extractAnswerKey(quiztext);
    console.log(answerkey);

}

module.exports = { assess };