import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

const Input = (props) => {
    const [name, setName] = useState('');

    const { children, inputLabel, styleInput } = props;
    return (
        <span>
            <label>
                {inputLabel}
            </label>
            <input
                type="text"
                name="userName"
                value={name}
                className={`${styles.input} ${styles[styleInput]}`}
                onChange={(e) => setName(e.target.value)} 
            />
            <p>
                {name}
            </p>
                {children}
        </span>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    styleInput: PropTypes.string,
    inputLabel: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node,
    ]),
}

export default Input;