import React from 'react';

import './todoForm.css';
import { useNavigate } from 'react-router-dom';

import useWindowSize from 'use-window-size-v2';

function TodoForm(props) {
  const [newTodoValue, setNewTodoValue] = React.useState(
    props.defaultTodoText || ''
  );

  const navigate = useNavigate();

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    navigate('/');
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/');
  };

  const { width } = useWindowSize(100);

  return (
    <div className={width < 800 ? 'form-container' : 'form-container-desktop'}>
      <form onSubmit={onSubmit} className='form'>
        <label className='form-title'>{props.label}</label>
        <div className='group-container'>
          <textarea
            placeholder='Pedir las hamburguesas para la cena'
            value={newTodoValue}
            onChange={onChange}
            className='form-textarea'
          />
          <div className={'button-container'}>
            <button
              type='submit'
              className='button submit-button'
              disabled={props.loading}
            >
              {props.submitText}
            </button>

            <button
              type='button'
              onClick={onCancel}
              className='button cancel-button'
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export { TodoForm };
