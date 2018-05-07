import React from 'react';
import PropTypes from 'prop-types';
import styles from './UsersList.css';

const UserList = (props) => (
    <div className={styles.Users}>
        <div className={styles.UsersOnline}>{props.users.lenght} people online</div>
        <ul className={styles.UserList}>
            {props.users.map((user) => {
                return (
                    <li key={user.id} className={styles.UserItem}>
                        {user.name}
                    </li>
                );
            })}
        </ul>
    </div>
);

UserList.propTypes = {
    users: PropTypes.string,
    
};

export default UserList;