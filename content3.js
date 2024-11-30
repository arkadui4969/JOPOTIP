import { useState, useEffect } from 'react';
import Users from '../Users';
import AddUser from '../addUser'; 
import axios from 'axios';

const baseUrl = 'https://reqres.in/api/users?page=1';

const Content3 = () => {
    const [state, setState] = useState({
        users: []
    });

    useEffect(() => {
        axios.get(baseUrl)
            .then((res) => {
                setState({ users: res.data.data });
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []); // Empty dependency array to ensure it only runs once

    const addUser = (newUser) => {
        const id = state.users.length + 1;
        const updatedUser = { id, ...newUser };
        setState((prevState) => ({
            users: [...prevState.users, updatedUser] 
        }));
    };

    const deleteUser = (id) => {
        setState((state) => {
            const updatedUsers = state.users.filter((el) => el.id !== id);
            if (updatedUsers.length === state.users.length) {
                return state;
            }
            return {
                ...state,
                users: updatedUsers
            };
        });
    };

    const redactUser = (updatedUser) => {
        setState((prevState) => ({
            users: prevState.users.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            ),
        }));
    };

    return (
        <div className="tabs-content" id="item-3-content">
            <div className='userForm'>
                <Users users={state.users} onDelit={deleteUser} redactUser={redactUser} />
                <AddUser onAdd={addUser} />
            </div>
            
        </div>    
    );
};

export default Content3;
