import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './Textarea.module.css';

const Textarea = (props) => {
    const { children, message, areaTitle, textareaStyle } = props;
    const [text, setText] = useState('');
    return (
        <div>
            <p>{message}</p>
            <textarea 
                className={`${styles.textarea} ${styles[textareaStyle]}`}
                placeholder={areaTitle}
                onChange={(event) => setText(event.target.value)}>
            </textarea>
            {text}
            {children}
        </div>
    );
};

Textarea.propTypes = {
    message: PropTypes.string,
    textareaStyle: PropTypes.string,
    areaTitle: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
    ]),
}

export default Textarea;
