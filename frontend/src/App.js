import React, { Component } from 'react';
import './App.css';
import ComicList from './components/ComicList';
import Searchbar from './components/Searchbar';
import Loading from './components/Loading';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loading />
        <Searchbar />
        <ComicList />
        <Modal />
      </div>
    );
  }
}

export default App;
