import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import BookTicketForm from './components/BookTicketForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ShowList} />
        <Route path="/show/:id" component={ShowDetails} />
        <Route path="/book/:id" component={BookTicketForm} />
      </Switch>
    </Router>
  );
};

export default App;
