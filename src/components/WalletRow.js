import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { removeExpense, isEditing } from '../actions';
import { GoPencil } from "react-icons/go";
import { GoTrashcan } from "react-icons/go";


class WalletRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(id) {
    const { removeExpense: removeExpenseAction } = this.props;
    removeExpenseAction(id);
  }

  handleEdit(id) {
    const { isEditing: isEditingAction } = this.props;
    isEditingAction(id);
  }

  render() {
    const { expense } = this.props;

    return (
      <tr key={expense.id}>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>
          {expense.currency}
          {" "}
          {parseFloat(expense.value).toFixed(2)}
        </td>
        <td>{(expense.exchangeRates[expense.currency].name).split('/')[0]}</td>
        <td>{"R$ "}
          {parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}
        </td>
        <td>
          {"R$ "}
          {(parseFloat(expense.exchangeRates[expense.currency].ask
            * parseFloat(expense.value))).toFixed(2)}
        </td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="edit-btn"
            id="btnEdit"
            onClick={() => this.handleEdit(expense.id)}>
            <GoPencil />
          </button>
          <button
            type="button"
            data-testid="delete-btn"
            id="btnDelete"
            onClick={() => this.handleDelete(expense.id)}>
            <GoTrashcan />
          </button>
        </td>
      </tr>
    );
  }
}

WalletRow.propTypes = {
  expense: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ])).isRequired,
  removeExpense: PropTypes.func.isRequired,
  isEditing: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  removeExpense,
  isEditing,
};

export default connect(null, mapDispatchToProps)(WalletRow);
