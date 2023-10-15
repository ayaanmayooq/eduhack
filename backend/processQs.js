
function processQs(inputText) {
    const lines = inputText.split('\n').filter(line => line.trim() !== '');
    const questions = [];
    let currentQuestion = null;
    let currentType = 'MCQ';

    for (const line of lines) {
        const trimmedLine = line.trim();

        // Set the current question type based on the header
        if (trimmedLine === 'MCQs:') {
            currentType = 'MCQ';
        } else if (trimmedLine === 'True/False:') {
            currentType = 'TF';
        } else if (trimmedLine === 'Free-response:') {
            currentType = 'FR';
        } else if (trimmedLine === 'Answer key:') {
                
            break; // Stop when reaching the "Answer key"
        }
        else if (currentType) {
            if (/\d+\.\s/.test(trimmedLine)) {
                // New question found
                if (currentQuestion) {
                    questions.push(currentQuestion);
                }
                currentQuestion = {
                    num: parseInt(trimmedLine.match(/\d+/)[0], 10),
                    type: currentType,
                    text: trimmedLine.replace(/^\d+\.\s/, ''),
                    options: [],
                };
            } else if (currentQuestion) {
                // Add options
                if (currentType === 'MCQ' && /^[A-D]\.\s/.test(trimmedLine)) {
                    currentQuestion.options.push(trimmedLine.replace(/^[A-D]\.\s/, ''));
                }
            }
        }
    }

    if (currentQuestion) {
        questions.push(currentQuestion);
    }

    return questions;
}







module.exports = { processQs };
