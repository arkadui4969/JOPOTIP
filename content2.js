import { useState } from 'react';
import Users from '../Users'
const Content2 = () =>{
    const [state, setState] = useState(
        {users:[
            { 
                id:1,
                name:`JON`,
                bio:`dafdsfasfasevrasdfsa`,
                age:23
            },
            {
                id:2,
                name:`Emeli`,
                bio:`1231234512344`,
                age:42
            }
            ]   
        }
    );
    return(
        // <div className="tabs-content" id="item-3-content">
        //     <Users users={state.users}/>
        // </div>   
        1 
    )

  }
export default Content2;





// import { useState } from 'react';
// import Users from '../Users';
// import AddUser from '../addUser'; // Предполагаем, что AddUser — это компонент для добавления пользователя

// const Content2 = () => {
//     const [state, setState] = useState({
//         users: [
//             { 
//                 id: 1,
//                 name: 'JON',
//                 bio: 'dafdsfasfasevrasdfsa',
//                 age: 23
//             },
//             {
//                 id: 2,
//                 name: 'Emeli',
//                 bio: '1231234512344',
//                 age: 42
//             }
//         ]
//     });

//     // Функция добавления нового пользователя
//     const addUser = (newUser) => {
//         const id = state.users.length + 1; // Генерируем новый id для пользователя
//         const updatedUser = { id, ...newUser }; // Создаем нового пользователя с новым id
//         setState((prevState) => ({
//             users: [...prevState.users, updatedUser] // Обновляем состояние, добавляя нового пользователя
//         }));
//         console.log('Пользователь добавлен:', updatedUser);
//     };

//     return (
//         <div className="tabs-content" id="item-3-content">
//             <Users users={state.users} /> {/* Отображение пользователей */}
//             <AddUser onAdd={addUser} />  {/* Форма или кнопка для добавления пользователя */}
//         </div>    
//     );
// };

// export default Content2;

