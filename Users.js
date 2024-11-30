import react from 'react';
import { useState } from 'react';

import User from './User';

const Users = ({ users, onDelit, redactUser}) => {  // Используем деструктуризацию для получения props

    if (users.length > 0) {
        return (
            <div className='users'>
                {users.map((el) => (
                    <User redactUser={redactUser} onDelit={onDelit} key={el.id} user={el} />
                ))}
            </div>
        );
    } else {
        return <div>Нет пользователей</div>;
    } 
};

export default Users;