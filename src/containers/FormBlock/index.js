import React from 'react';
import PropTypes from 'prop-types';

import FormBlock from 'components/FormBlock';
import QuestionGroup from 'components/FormBlock/QuestionGroup';

import SimpleQuestion from 'containers/Question';
import DropdownQuestion from 'containers/Question/Dropdown';
import CheckboxQuestion from 'containers/Question/Checkbox';

const defaultQuestion = 'SimpleQuestion';

const questionComponents = {
  SimpleQuestion,
  DropdownQuestion,
  CheckboxQuestion,
};

class FormBlockContainer extends React.PureComponent {
  renderQuestions() {
    const { questions } = this.props;

    if (!questions) return '';

    return questions.map((question) => {
      const questionComponent = questionComponents[question.type];
      const renderComponent = questionComponent
        ? questionComponent(question.data)
        : questionComponents[defaultQuestion](question.data);

      return (
        <QuestionGroup key={question.id}>
          {renderComponent}
        </QuestionGroup>
      );
    });
  }

  render() {
    return (
      <FormBlock>
        {this.renderQuestions()}
      </FormBlock>
    );
  }
}

FormBlockContainer.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FormBlockContainer;
