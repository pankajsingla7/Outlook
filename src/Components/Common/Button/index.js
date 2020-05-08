import React from 'react';
//import styles from './styles.modules.css';

const Button = ({clickHandler,buttonText,looks}) => {
  return (
    <button
    className={looks}
  
    onClick={clickHandler}>{buttonText}</button>
  );
}

export default Button;