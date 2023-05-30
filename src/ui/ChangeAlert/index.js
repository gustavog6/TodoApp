import React from 'react';
// import { withStorageListener } from './withStorageListener';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className='ChangeAlert-container'>
        <button className='ChangeAlert-button' onClick={toggleShow}>
          Refrescar
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
