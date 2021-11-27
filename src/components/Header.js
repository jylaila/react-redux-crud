/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../assets/css/header.css';

class Header extends React.Component {
  componentDidMount() {
    document.title = "Trybe Wallet"
  }
  ExpenseValue() {
    const { expenses } = this.props;
    return expenses
      .reduce((acc, expense) => {
        const value = parseFloat(expense.value);
        const rate = parseFloat(expense.exchangeRates[expense.currency].ask);
          return acc + (value * rate);
      }, 0);
  }
 

  render() {
    const { email } = this.props;

    return (
      <header>
        <img
          src={ require('../assets/images/logo.svg') }
          alt="Trybe Wallet"
        />
          <div>
            <span  id="emailValue" data-testid="email-field">{ `Email: ${email}` }</span>
                   Despesa Total: R$
              {' '}
              <span data-testid="total-field">
                {this.ExpenseValue().toFixed(2)}
                
              </span>
              <span data-testid="header-currency-field">
                {'BRL'}
                
              </span>
           
          </div>
         
    
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
