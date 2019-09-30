import PropTypes from 'prop-types';
import React from 'react';

function SimpleQuestion(props) {
  const { content } = props;
  return <input type="text" placeholder={content} />;
}

SimpleQuestion.propTypes = {
  content: PropTypes.string.isRequired,
};

export default SimpleQuestion;
