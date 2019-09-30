import PropTypes from "prop-types";

function SimpleQuestion(props) {
  return <input type="text" placeholder={props.content} />;
}

SimpleQuestion.propTypes = {
  content: PropTypes.string
};

SimpleQuestion.defaultProps = {};

export default SimpleQuestion;
