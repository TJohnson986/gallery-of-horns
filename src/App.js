import './App.css';
import Footer from './Footer.js';
import FormFilter from './FormFilter.js';
import Header from './Header.js';
import Main from './Main.js';
import React from 'react';
import data from './data.json';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormFilter />
          animals = {data};
        <Main />
          animals = {data};
        <Footer />
      </div>
    );

  }
}

export default App;
