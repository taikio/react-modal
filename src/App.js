import React from 'react';
import './App.css';
import Modal from './components/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.mostraModal = this.mostraModal.bind(this);
    this.escondeModal = this.escondeModal.bind(this);
  }

  mostraModal() {
    this.setState({showModal: true});
  }

  escondeModal() {
    this.setState({showModal: false});
  }

  render() {
    const modal = this.state.showModal 
      ? (<Modal escondeModalFunc={this.escondeModal} />) 
      : null;

    return (
      <div>
        <button onClick={this.mostraModal}>Show modal</button>
        {modal}
      </div>
    );
  }
}

export default App;
