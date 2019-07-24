import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import cx from 'classnames';
import { getLocale, Polyglot } from 'constants/Locales';
import closeIcon from 'assets/close.svg';
import { isValidName, isValidEmail } from 'utils/validations';
import { unfreezeScroll } from 'utils/manageScrollingElement';
import { Button, Image } from 'components/base';

interface Props {
  header: string;
  hideSignup: () => void;
  backgroundColor: 'green' | 'yellow';
  showCloseIcon: boolean;
}

interface FormErrors {
  [id: string]: string;
}

interface State {
  firstName: string;
  lastName: string;
  email: string;
  zipCode: string;
  phoneNumber: string;
  errors: FormErrors;
  formUUID: number;
}

const statusSuccess = 'success';
const statusError = 'error';

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
    },
    formUUID: Math.floor(Math.random() * 100000)
  };

  onChangeFirstName = (value: string) => {
    this.setState({ firstName: value });
  };

  validateFirstName = () => {
    if (!isValidName(this.state.firstName)) {
      return 'signupForm.noFirstNameError';
    }

    return '';
  };

  onChangeLastName = (value: string) => {
    this.setState({ lastName: value });
  };

  validateLastName = () => {
    if (!isValidName(this.state.lastName)) {
      return 'signupForm.noLastNameError';
    }

    return '';
  };

  onChangeEmail = (value: string) => {
    this.setState({ email: value });
  };

  validateEmail = () => {
    if (!this.state.email) {
      return 'signupForm.noEmailError';
    }

    if (!isValidEmail(this.state.email)) {
      return 'signupForm.invalidEmailError';
    }

    return '';
  };

  onChangeZipCode = (value: string) => {
    this.setState({ zipCode: value });
  };

  validateZipCode = () => {
    if (!this.state.zipCode) {
      return 'signupForm.noZipCodeError';
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

  onSubmit = (subscribe: any) => {
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
      const subscriptionData: { [k: string]: string } = {
        MERGE0: this.state.email,
        MERGE1: this.state.firstName,
        MERGE2: this.state.lastName,
        MERGE3: this.state.zipCode
      };

      if (this.state.phoneNumber) {
        subscriptionData['MERGE4'] = this.state.phoneNumber;
      }

      subscribe(subscriptionData);
    }
  };

  closeSignupForm = () => {
    this.props.hideSignup();
    unfreezeScroll();
  };

  renderHeader = (status: string) => {
    const Language = getLocale() as Polyglot;

    if (status === statusSuccess) {
      return (
        <p className="itc-franklin-gothic-demi-compressed text-xxxl bold pr3">
          {Language.t('signupForm.thankYou')}
        </p>
      );
    }

    return (
      <p className="itc-franklin-gothic-demi-compressed text-xxxl bold pr3">
        {this.props.header}
      </p>
    );
  };

  renderSubscriptionError = (status: string, submitMessage: string) => {
    const Language = getLocale() as Polyglot;

    if (status !== statusError) return null;

    if (submitMessage.includes('is already subscribed to list')) {
      return (
        <p className="Signup__input-error mt_5">
          {Language.t('signupForm.emailIsAlreadySubscribed')}
        </p>
      );
    }

    return (
      <p className="Signup__input-error mt_5">
        {Language.t('signupForm.defaultError')}
      </p>
    );
  };

  render() {
    const url = process.env.REACT_APP_MAILCHIMP_URL;

    if (!url) return null;

    const Language = getLocale() as Polyglot;

    return (
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => {
          return (
            <div
              className={`Signup franklin-gothic bg-color-${this.props.backgroundColor} flex flex-col text-md p1 pb3`}
              role="region"
            >
              <div className="flex flex-row mb3">
                {this.renderHeader(status)}
                {this.props.showCloseIcon && (
                  <Button
                    className="Signup__close-icon-container bg-color-transparent absolute pointer"
                    onClick={this.closeSignupForm}
                    ariaLabel="close the sign up form"
                  >
                    <Image alt="close icon" src={closeIcon} />
                  </Button>
                )}
              </div>
              <form
                className={cx('flex flex-wrap justify-between', {
                  hidden: status === statusSuccess
                })}
                onSubmit={e => {
                  e.preventDefault();
                  this.onSubmit(subscribe);
                }}
              >
                <div className="col-12 md:col-4 md:pr2">
                  <input
                    onBlur={() => this.isValid('firstName')}
                    onChange={e => this.onChangeFirstName(e.target.value)}
                    className="mt1 bg-color-transparent text-md w100"
                    type="text"
                    name="firstName"
                    id={`${this.state.formUUID}-firstName`}
                    value={this.state.firstName}
                  />
                  <div className="md:mr1 mt1 flex flex-row">
                    <label
                      htmlFor={`${this.state.formUUID}-firstName`}
                      className="Signup__input-label"
                    >
                      {Language.t('signupForm.firstName')}
                    </label>
                    <p className="Signup__input-error">
                      {this.state.errors.firstName &&
                        Language.t(this.state.errors.firstName)}
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
                    id={`${this.state.formUUID}-lastName`}
                    value={this.state.lastName}
                  />
                  <div className="md:mr1 mt1 flex flex-row">
                    <label
                      htmlFor={`${this.state.formUUID}-lastName`}
                      className="Signup__input-label"
                    >
                      {Language.t('signupForm.lastName')}
                    </label>
                    <p className="Signup__input-error">
                      {this.state.errors.lastName &&
                        Language.t(this.state.errors.lastName)}
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
                    id={`${this.state.formUUID}-email`}
                    value={this.state.email}
                  />
                  <div className="md:mr1 mt1 flex flex-row">
                    <label
                      htmlFor={`${this.state.formUUID}-email`}
                      className="Signup__input-label"
                    >
                      {Language.t('signupForm.email')}
                    </label>
                    <p className="Signup__input-error">
                      {this.state.errors.email &&
                        Language.t(this.state.errors.email)}
                    </p>
                  </div>
                </div>
                <div className="col-12 md:col-4 md:pr2">
                  <input
                    onBlur={() => this.isValid('zipCode')}
                    onChange={e => this.onChangeZipCode(e.target.value)}
                    className="mt1 bg-color-transparent text-md w100"
                    type="text"
                    name="zipcode"
                    id={`${this.state.formUUID}-zipcode`}
                    value={this.state.zipCode}
                  />
                  <div className="md:mr1 mt1 flex flex-row">
                    <label
                      htmlFor={`${this.state.formUUID}-zipcode`}
                      className="Signup__input-label"
                    >
                      {Language.t('signupForm.zipCode')}
                    </label>
                    <p className="Signup__input-error">
                      {this.state.errors.zipCode &&
                        Language.t(this.state.errors.zipCode)}
                    </p>
                  </div>
                </div>
                <div className="col-12 md:col-4 md:pr2">
                  <input
                    onChange={e => this.onChangePhoneNumber(e.target.value)}
                    className="mt1 bg-color-transparent text-md w100"
                    type="text"
                    name="phone"
                    id={`${this.state.formUUID}-phone`}
                    value={this.state.phoneNumber}
                  />
                  <div className="md:mr1 mt1 flex flex-row">
                    <label
                      htmlFor={`${this.state.formUUID}-phone`}
                      className="Signup__input-label"
                    >
                      {Language.t('signupForm.phoneOptional')}
                    </label>
                  </div>
                </div>
                <div
                  className={cx('relative col-12 md:col-4 md:pr2 mt1', {
                    'md:mt2': status !== statusError,
                    'md:mt0': status === statusError
                  })}
                >
                  {this.renderSubscriptionError(status, message)}
                  <Button
                    className={cx(
                      'Signup__submit-button itc-franklin-gothic-demi-compressed text-md pointer w100 p1',
                      {
                        mt1: status !== statusError,
                        mt_5: status === statusError
                      }
                    )}
                    type="submit"
                    ariaLabel="submit sign up information"
                    label={Language.t('signupForm.submit')}
                  />
                </div>
              </form>
            </div>
          );
        }}
      />
    );
  }
}

export default Signup;
