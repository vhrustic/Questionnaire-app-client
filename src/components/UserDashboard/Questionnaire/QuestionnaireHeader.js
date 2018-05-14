import React from 'react';

const QuestionnaireHeader = (props) => {
    const {title} = props;
    return (
        <div>
            <h3><strong>Questionnaire: </strong>{title}</h3>
        </div>
    );
};

export {QuestionnaireHeader};