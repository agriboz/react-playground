import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createPostSucceeded } from '../actions/createPostAction';

import { Field, reduxForm, formValueSelector } from 'redux-form';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const validate = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'favoriteColor',
    'notes',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    text={label}
    error={touched && error}
    {...input}
    {...custom}
  />
);

class PostCreate extends Component {
  submit = values => {
    this.props.createPostSucceeded(values);
    console.log(values);
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <div>
          <Field
            name="first_name"
            component={renderTextField}
            label="First Name"
          />

        </div>
        <div>
          <Button
            type="submit"
            disabled={pristine || submitting}
            raised
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  firstName: selector(state, 'firstName'),
});

const selector = formValueSelector('PostCreate');

PostCreate = reduxForm({
  form: 'PostCreate',
  validate,
})(PostCreate);

export default connect(mapStateToProps, { createPostSucceeded })(PostCreate);
