import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { Header } from '../containers/Header';
import { Balance } from '../components/Balance';
import { IncomeExpenses } from '../components/IncomeExpenses';
import { ExpensesList } from '../components/ExpensesList';
import { AddExpense } from '../components/AddExpense';
import '../assets/css/styles.css';
import { GlobalProvider } from '../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Header />
      <GlobalProvider>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
          <Balance />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
              <AddExpense />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
          <IncomeExpenses />
          <ExpensesList />
          </Paper>
        </Grid>
      </Grid>
      </GlobalProvider>
    </div>
  );
}
