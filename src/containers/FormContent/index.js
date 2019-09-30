import React from 'react';
import FormContent from 'components/FormContent';

import FormBlock from 'containers/FormBlock';

const questions = [
  {
    id: 1,
    type: 'SimpleQuestion',
    data: {
      question: 'What is your name',
    },
  },
  {
    id: 2,
    type: 'DropdownQuestion',
    data: {
      question: 'What is your gender',
      choices: [
        {
          value: 'nam',
          displayingText: 'Nam',
        },
        {
          value: 'nu',
          displayingText: 'Nữ',
        },
        {
          value: 'khongtietlo',
          displayingText: 'Không tiết lộ',
        },
      ],
    },
  },
  {
    id: 3,
    type: 'CheckboxQuestion',
    data: {
      question: 'What is your favourite food?',
      choices: [
        {
          value: 'pizza',
          displayingText: 'Pizza',
        },
        {
          value: 'steak',
          displayingText: 'Steak',
        },
        {
          value: 'shit',
          displayingText: 'Sh1t',
        },
      ],
    },
  },
];

export default function FormContentContainer() {
  return (
    <FormContent>
      <FormBlock questions={questions} />
    </FormContent>
  );
}
