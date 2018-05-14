export const setSingleChoiceQuestionAnswer = (questions, questionId, optionId) => {
    const newQuestions = questions.map(question => {
        if (question.id !== questionId) {
            return question;
        }
        const newOptions = question.options.map(option => {
            if (option.id !== optionId) {
                delete option.selected;
                return option;
            }
            return {
                ...option,
                selected: true
            };
        });
        return {
            ...question,
            options: newOptions
        };
    });
    return newQuestions;
};

export const setTextAnswer = (questions, questionId, value) => {
    const newQuestions = questions.map(question => {
        if (question.id !== questionId) {
            return question;
        }
        const newOptions = question.options.map(option => {
            return {
                ...option,
                text: value
            };
        });
        return {
            ...question,
            options: newOptions
        }
    });
    return newQuestions;
};

export const setMultipleChoiceQuestionAnswer = (questions, questionId, optionId, checked) => {
    const newQuestions = questions.map(question => {
        if (question.id !== questionId) {
            return question;
        }
        const newOptions = question.options.map(option => {
            if (option.id !== optionId) {
                return option;
            }
            const newOption = {
                ...option,
            };
            if (checked) {
                newOption.selected = true;
            } else {
                delete newOption.selected;
            }
            return newOption;
        });
        return {
            ...question,
            options: newOptions
        };
    });
    return newQuestions;
};

export const getQuestionsDeepCopy = (questions) => {
    const newQuestions = questions.map(question => {
        const newOptions = question.options.map(option => {
            return {
                ...option,
            };
        });
        return {
            ...question,
            options: newOptions
        };
    });
    return newQuestions;
};