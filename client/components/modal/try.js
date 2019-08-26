import React from 'react';
import Modali, { useModali } from 'modali';

const Try = () => {
  
  const [completeModal, toggleCompleteModal] = useModali({
  animated: true,
  title: 'Are you sure?',
  message: 'Deleting this user will be permanent.',
  buttons: [
    <Modali.Button
      label="Cancel"
      isStyleCancel
      onClick={() => toggleCompleteModal()}
    />,
    <Modali.Button
      label="Delete"
      isStyleDestructive
      onClick={() => deleteUserWithId(123)}
    />,
  ],
});

  return (
    <div className="">
      <button onClick={toggleCompleteModal}>
        Click me to open a basic modal
      </button>
      <Modali.Modal {...completeModal} className="p15">
        Hi, I'm a Modali!
      </Modali.Modal>
    </div>
  );
};

export default Try;