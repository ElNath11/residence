import React, { Component } from 'react';

const modalRoot =  document.getElementById('modal')
const root =  document.getElementById('root')

// modal.js
// Modal component


class ModalComponent extends React.Component { 
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
                                     
  render(){
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

export default ModalComponent;