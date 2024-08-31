import React from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Receipt from './components/Receipt';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseForm />
      <ExpenseList />
      <Receipt />
    </div>
  );
}

export default App;
