import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.css';

const Card = (props) => {
    const { children, cardTitle, cardStyle } = props;
    return (
        <div
            className={`${styles.card} ${styles[cardStyle]}`}
        >
            {cardTitle}
            {children}
        </div>
    );
};

Card.propTypes = {
    cardTitle: PropTypes.string,
    cardStyle: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node,
    ]),
}

export default Card;