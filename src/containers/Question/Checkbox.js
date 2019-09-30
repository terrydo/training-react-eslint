import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Spacer = styled.div`
  margin-bottom: 5px;
`;

const renderChoices = (choices) => {
  let idx = 0;

  return choices.map((choice) => {
    idx += 1;

    return (
      <>
        <input type="checkbox" key={`checkbox${idx}`} name={choice.value} />
        &nbsp;
        {choice.displayingText}
        <Spacer />
      </>
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
      {renderChoices(choices)}
    </>
  );
}

DropdownQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DropdownQuestion;
