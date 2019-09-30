import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/FormBlock/Input';

function SimpleQuestion(props) {
  const { question } = props;
  return (
    <>
      <p>{question}</p>
      <Input type="text" />
    </>
  );
}

SimpleQuestion.propTypes = {
  question: PropTypes.string.isRequired,
};

export default SimpleQuestion;
