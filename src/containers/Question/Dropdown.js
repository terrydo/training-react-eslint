import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/FormBlock/Input';

const renderChoices = (choices) => {
  let idx = 0;

  return choices.map((choice) => {
    idx += 1;

    return (
      <option key={`options${idx}`} name={choice.value}>
        {choice.displayingText}
      </option>
    );
  });
};

function DropdownQuestion(props) {
  const {
    question,
    choices,
  } = props;

  return (
    <>
      <p>{question}</p>
      <Input as="select">
        {renderChoices(choices)}
      </Input>
    </>
  );
}

DropdownQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DropdownQuestion;
