import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatUser.module.scss';

const TchatUser = (props) => (
  <li className={styles.TchatUser} data-testid="TchatUser">
    {props.user.id}-{props.user.name}
  </li>
);

TchatUser.propTypes = {user:PropTypes.object.isRequired};

export default TchatUser;
