import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({ root: { '& > *': { margin: theme.spacing(1),},},}));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="R"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const AddExpense = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const classes = useStyles();
  const [values, setValues] = React.useState({ textmask: '(1  )    -    ', numberformat: '00',});

  const { addExpense } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newExpense = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addExpense(newExpense);
  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h3>Add new Expenses</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Expence type..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          <TextField label="react-number-format" value={values.numberformat}
            onChange={handleChange}
            name="numberformat" id="formatted-numberformat-input"
            InputProps={{ inputComponent: NumberFormatCustom,}}
          />
        </div>
        <button className="btn">Add Expense</button>
      </form>
    </>
  )
}
