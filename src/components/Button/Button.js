import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = (props) => {
    const { children, buttonStyle, handleClick } = props;
    return (
        <button 
            type="button"
            className={`${styles.button} ${styles[buttonStyle]}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    buttonStyle: PropTypes.string,
    handleClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node,
    ]),
}

export default Button;