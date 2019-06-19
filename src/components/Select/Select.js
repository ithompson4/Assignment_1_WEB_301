import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './Select.module.css';

const Select = (props) => {
    const { children, selectStyle } = props;
    const [value, setValue] = useState('');
    return (
        <div>
            <select onChange={(event) => setValue(event.target.value)} 
                    className={`${styles.select} ${styles[selectStyle]}`
        }>
            <option value="Select again">Select car:</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Lincoln">Lincoln</option>
            <option value="Ford">Ford</option>
            <option value="Mercedes-Benz ">Mercedes-Benz</option>
        </select>
            {children}
            <div>{value}</div>
        </div>
    );
};

Select.propTypes = {
    selectStyle: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node,
    ]),
}

export default Select;