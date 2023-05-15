import './Pagination.scss';

import React from 'react';

export const Pagination: React.FC = () => {
  return (
    <div className="pagination">
      <button>{'<'}</button>
      <button>{'1'}</button>
      <button>{'2'}</button>
      <button>{'3'}</button>
      <button>{'4'}</button>
      <div>...</div>
      <button>{'40'}</button>
      <button>{'>'}</button>
    </div>
  );
};
