import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import TableRow from './WalletRow';
import '../assets/css/walletTable.css';

class WalletTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table className="wallet-list">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <TableRow
              expense={expense}
                key={expense.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletTable);
