import React, { Component } from 'react';
import closeIcon from 'assets/close.svg';
import { isValidName, isValidEmail } from 'utils/validations';

interface Props {
  header: string;
  show: boolean;
  hideSignup: () => void;
}

interface Errors {
  firstName: string;
  lastName: string;
  email: string;
  zipCode: string;
  phoneNumber: string;
}

interface State {
  firstName: string;
  lastName: string;
  email: string;
  zipCode: string;
  phoneNumber: string;
  errors: any;
}

class Signup extends Component<Props, State> {
  state: State = {
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    phoneNumber: '',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      zipCode: '',
      phoneNumber: ''
    }
  };

  onChangeFirstName = (value: string) => {
    this.setState({ firstName: value });
  };

  validateFirstName = () => {
    if (!isValidName(this.state.firstName)) {
      return 'Please provide a first name';
    }

    return '';
  };

  onChangeLastName = (value: string) => {
    this.setState({ lastName: value });
  };

  validateLastName = () => {
    if (!isValidName(this.state.lastName)) {
      return 'Please provide a last name';
    }

    return '';
  };

  onChangeEmail = (value: string) => {
    this.setState({ email: value });
  };

  validateEmail = () => {
    if (!this.state.email) {
      return 'Please provide an email address';
    }

    if (!isValidEmail(this.state.email)) {
      return 'Please provide a valid email address';
    }

    return '';
  };

  onChangeZipCode = (value: string) => {
    this.setState({ zipCode: value });
  };

  validateZipCode = () => {
    if (!this.state.zipCode) {
      return 'Please provide a zip code';
    }

    return '';
  };

  onChangePhoneNumber = (value: string) => {
    this.setState({ phoneNumber: value });
  };

  isValid = (field: string) => {
    const errors = this.state.errors;
    switch (field) {
      case 'firstName':
        errors.firstName = this.validateFirstName();
        break;
      case 'lastName':
        errors.lastName = this.validateLastName();
        break;
      case 'email':
        errors.email = this.validateEmail();
        break;
      case 'zipCode':
        errors.zipCode = this.validateZipCode();
        break;
      default:
        errors.firstName = this.validateFirstName();
        errors.lastName = this.validateLastName();
        errors.lastName = this.validateLastName();
        errors.email = this.validateEmail();
        errors.zipCode = this.validateZipCode();
    }

    this.setState({ errors });
  };

  onSubmit = () => {
    this.isValid('all');

    const formHasErrors = Object.keys(this.state.errors).some(
      formField => !!this.state.errors[formField]
    );
    const formHasBeenFilledOut =
      !!this.state.firstName &&
      !!this.state.lastName &&
      !!this.state.zipCode &&
      !!this.state.email;

    if (!formHasErrors && formHasBeenFilledOut) {
      // submit
    }
  };

  closeSignupForm = () => {
    this.props.hideSignup();
  };

  render() {
    if (!this.props.show) return null;

    return (
      <div
        className="Signup franklin-gothic bg-color-green flex flex-col text-md p1"
        role="region"
      >
        <div className="flex flex-row">
          <p className="text-xl">{this.props.header}</p>
          <button
            className="Signup__close-icon-container bg-color-transparent absolute pointer"
            onClick={this.closeSignupForm}
          >
            <img alt="close icon" src={closeIcon} />
          </button>
        </div>

        <form
          className="flex flex-wrap justify-between"
          onSubmit={e => {
            e.preventDefault();
            this.onSubmit();
          }}
        >
          <div className="col-12 md:col-4 md:pr2">
            <input
              onBlur={() => this.isValid('firstName')}
              onChange={e => this.onChangeFirstName(e.target.value)}
              className="mt1 bg-color-transparent text-md w100"
              type="text"
              name="firstName"
              id="firstName"
              value={this.state.firstName}
            />
            <div className="md:mr1 mt1 flex flex-row">
              <label htmlFor="firstName" className="Signup__input-label">
                First Name
              </label>
              <p className="Signup__input-error">
                {this.state.errors.firstName}
              </p>
            </div>
          </div>
          <div className="col-12 md:col-4 md:pr2">
            <input
              onBlur={() => this.isValid('lastName')}
              onChange={e => this.onChangeLastName(e.target.value)}
              className="mt1 bg-color-transparent text-md w100"
              type="text"
              name="lastName"
              id="lastName"
              value={this.state.lastName}
            />
            <div className="md:mr1 mt1 flex flex-row">
              <label htmlFor="lastName" className="Signup__input-label">
                Last Name
              </label>
              <p className="Signup__input-error">
                {this.state.errors.lastName}
              </p>
            </div>
          </div>
          <div className="col-12 md:col-4 md:pr2">
            <input
              onBlur={() => this.isValid('email')}
              onChange={e => this.onChangeEmail(e.target.value)}
              className="mt1 bg-color-transparent text-md w100"
              type="text"
              name="email"
              id="email"
              value={this.state.email}
            />
            <div className="md:mr1 mt1 flex flex-row">
              <label htmlFor="email" className="Signup__input-label">
                Email
              </label>
              <p className="Signup__input-error">{this.state.errors.email}</p>
            </div>
          </div>
          <div className="col-12 md:col-4 md:pr2">
            <input
              onBlur={() => this.isValid('zipCode')}
              onChange={e => this.onChangeZipCode(e.target.value)}
              className="mt1 bg-color-transparent text-md w100"
              type="text"
              name="zipcode"
              id="zipcode"
              value={this.state.zipCode}
            />
            <div className="md:mr1 mt1 flex flex-row">
              <label htmlFor="zipcode" className="Signup__input-label">
                Zip Code
              </label>
              <p className="Signup__input-error">{this.state.errors.zipCode}</p>
            </div>
          </div>
          <div className="col-12 md:col-4 md:pr2">
            <input
              onChange={e => this.onChangePhoneNumber(e.target.value)}
              className="mt1 bg-color-transparent text-md w100"
              type="text"
              name="phone"
              id="phone"
              value={this.state.phoneNumber}
            />
            <div className="md:mr1 mt1 flex flex-row">
              <label htmlFor="phone" className="Signup__input-label">
                Phone (optional)
              </label>
            </div>
          </div>
          <div className="col-12 md:col-4 md:pr2 mt1 md:mt2">
            <button className="text-sm pointer w100 mt1 pt1 pb1" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;