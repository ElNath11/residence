import React, { Component } from 'react';

const ModalContent = ({ show, modalTitle, children, handleClose }) => {
    
  const showClass = show ? 'c-modal' : 'c-modal c-modal--close';
  const title = modalTitle ? <h2 className="c-modal__title">{ modalTitle }</h2> : '';

  return (
    <div className={showClass}>
      <div className='c-modal__container'>
        {title}
        {children}
        <i className='fa fa-times c-modal__button-close' onClick={handleClose}></i>
      </div>
    </div>
  )
}

export default ModalContent;