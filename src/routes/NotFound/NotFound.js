import React from 'react';
import './NotFound.css';

function NotFound() {
  return (
    <div className={'ErrorContainer'}>
      <p className={'primer-p'}>404</p>
      <p className={'segundo-p'}>Not Found</p>
    </div>
  );
}

export { NotFound };
