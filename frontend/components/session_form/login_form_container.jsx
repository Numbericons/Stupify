import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clear } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign Up Link</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => {
      return (
        dispatch(clear())
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
