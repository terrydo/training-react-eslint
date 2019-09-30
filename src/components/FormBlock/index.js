import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SimpleAnswer from "../Question";
import Dropdown from "../Question/dropdown";

const DivFormBlock = styled.div`
  width: 100%;
  background: #fafafa;
  padding: 15px 25px;
`;

const questionComponents = {
  SimpleAnswer,
  Dropdown
};

class FormBlock extends React.PureComponent {
  renderQuestions() {
    const { questions } = this.props;

    if (questions.length < 1) return;

    for (const question of questions) {
      return questionComponents[question];
    }
  }
  render() {
    return <DivFormBlock>{this.renderQuestions()}</DivFormBlock>;
  }
}

FormBlock.propTypes = {
  questions: PropTypes.array.isRequired
};

export default FormBlock;
