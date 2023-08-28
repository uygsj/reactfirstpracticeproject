import { useState} from 'react';
import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
    const [usersList, setUserList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUserList((prevUsersList) => {
            return [...prevUsersList, {name: uName, age: uAge, id:Math.random().toString() }]
        })
    }
  return (
    <div>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList}/>
    </div>
  );
}

export default App;
