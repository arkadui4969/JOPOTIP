import React from 'react';
import {useState} from 'react';
import AddUser from './addUser'
const User = ({ user, onDelit, redactUser}) => {
  const [editForm, setEditForm] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => onDelit(user.id)}>удалить</button>
        <button onClick={() => setEditForm(!editForm)}>редакт</button>
        <div>{user.first_name} {user.age} {user.last_name}</div>
        {editForm && (<AddUser user={user} onAdd={redactUser}/>
        )}
      </div>
    </div>
  );
};

export default User;