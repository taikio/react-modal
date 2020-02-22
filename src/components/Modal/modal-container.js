import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const modalContainer = document.getElementById('modal');

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // cria uma div filha de <div id="modal" />
    modalContainer.appendChild(this.el);
  }

  componentWillUnmount() {
    // remove a div filha de <div id="modal" />
    modalContainer.removeChild(this.el);
  }

  render() {
    // tem o mesmo efeito de ReactDom.render(), porém permite usar uma segunda div do DOM
    return ReactDOM.createPortal(this.props.children,this.el);
  }
}

export default ModalContainer;