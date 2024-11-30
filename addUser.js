import { useState } from 'react';
    const AddUser = ({ onAdd, user }) => {
        const [first_name, setName] = useState('');
        const [last_name, setlastname] = useState('');
        const [age, setAge] = useState('');
        const handleSubmit = (e) => {
            e.preventDefault();
            const newUser = { first_name, last_name, age: parseInt(age) };
            if (user) {
                onAdd({ ...newUser, id: user.id });
            } else {
                onAdd(newUser);
            }
            setName('');
            setAge('');
            setlastname('');
        };
    return (
        <form onSubmit={handleSubmit} className='form'>
            <input
                type="text"
                placeholder="Имя"
                value={first_name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="фамилия" 
                value={last_name}
                onChange={(e) => setlastname(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Возраст"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            /> 
            <button type="submit">Добавить пользователя</button>
        </form>
    );
};

export default AddUser;
