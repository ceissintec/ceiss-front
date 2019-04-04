import React from 'react';
import { isObjEmpty } from '../utils/Validate';

const ErrorNotification = ({ errors }) => {
  if (!errors || isObjEmpty(errors)) {
    return null;
  }

  return (
    <div className="notification is-danger animated bounce">
      <h3>Error!</h3>
      {Object.entries(errors).map(([key, value]) => (
        <li key={key} className="lightning-error">
          {value}
        </li>
      ))}
    </div>
  );
};

export default ErrorNotification;
