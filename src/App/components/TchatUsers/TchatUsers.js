import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatUsers.module.scss';
import TchatUser from '../TchatUser/TchatUser';
const TchatUsers = (props) => (
  <div className={styles.TchatUsers} data-testid="TchatUsers">
    <ul>
      {props.users.map((e,i)=><TchatUser key={`user-${i}`} user={e}/>)}
    </ul>
  </div>
);

TchatUsers.propTypes = {users:PropTypes.array.isRequired};
TchatUsers.defaultProps={users:[
  {"id": 1,"name": "Alex","nickname": "champix"},
  {"id": 2,"name": "Oumayma","nickname": "Oumayma"}
]}
export default TchatUsers;
