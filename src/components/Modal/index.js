import React from 'react';
import ModalContainer from './modal-container';

import './index.css';

const Modal = ({ escondeModalFunc }) => {
  
    return (
        <ModalContainer>
            <div className="modal">
            <div className="modal-content">
                <div>Olá, eu sou um modal!</div>
                <button onClick={escondeModalFunc}>Hide modal</button>
            </div>          
            </div>
      </ModalContainer>
    );
}

export default Modal;