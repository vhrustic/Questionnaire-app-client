import {questionType} from "../constants";

export const prepareAnswersArray = (pages) => {
    const answers = [];
    pages.forEach(page => {
        page.questions.forEach(question => {
            question.options.forEach(option => {
                let answer = null;
                switch (question.type) {
                    case questionType.TEXT:
                        answer = {
                            optionId: option.id,
                            text: option.text
                        };
                        break;
                    default:
                        if (option.selected) {
                            answer = {
                                optionId: option.id
                            };
                        }
                        break;
                }
                if (answer) {
                    answers.push(answer);
                }
            });
        });
    });
    return answers;
};