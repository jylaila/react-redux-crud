import React from 'react';
import { storeEmail } from '../actions';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../assets/css/login.css';

class Login extends React.Component {
  componentDidMount() {
    document.title = "Trybe Wallet - Login"
  }
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
    };
    this.handleonChange = this.handleonChange.bind(this);
    this.ValidateLogin = this.ValidateLogin.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  ValidateLogin(email, password) {
    return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(email)
      && password.length >= 6;
  }

  handleonChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onLogin(event) {
    event.preventDefault();
    const { email } = this.state;
    const { storeEmail: storeEmailAction } = this.props;

    storeEmailAction(email);
    this.setState({
      loggedIn: true,
    });
  }
  render() {
    const { email, password, loggedIn } = this.state;

    if (loggedIn) return <Redirect to="/carteira" />;

    return (
      <div className="container">
        <div className="fieldset">
          <img
            src={require('../assets/images/logo.svg')}
            alt="Logotipo Trybe"
          />
          <img className="img-wallet"
            src={require('../assets/images/wallet-and-coin.svg')}
            alt="Logotipo Trybe"
          />
          <form>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e-mail"
              data-testid="email-input"
              onChange={this.handleonChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="senha"
              data-testid="password-input"
              onChange={this.handleonChange}
            />
            <button
              type="submit"
              disabled={!this.ValidateLogin(email, password)}
              onClick={this.onLogin}
        
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  storeEmail,
};

Login.propTypes = {
  storeEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
