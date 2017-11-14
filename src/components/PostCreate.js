import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  createPostSucceeded,
  createPostRequest,
} from '../actions/createPostAction';

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
    this.props.createPostRequest(values)
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <div>
          <Field
            name="first_name"
            component={renderTextField}
            label="First Name"
          />
          <Field
            name="last_name"
            component={renderTextField}
            label="Last Name"
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
  createPost: state.createPost
});

const selector = formValueSelector('PostCreate');

PostCreate = reduxForm({
  form: 'PostCreate',
  /* onSubmit: (values, dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(createPostRequest(values));
    });
  }, */
  validate,
})(PostCreate);

export default connect(mapStateToProps, {
  createPostRequest,
  createPostSucceeded,
})(PostCreate);
