import UserTable from './components/UserTable';
import ExpenseTable from './components/ExpenseTable';
import CompanyTable from './components/CompanyTable';
// import UserForm from './components/UserForm';
import { useEffect, useState } from 'react';

const App = () => {

  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState("select");
  const [isDisabled, setIsDisabled] = useState(true);
  const [newUser, setNewUser] = useState([])

  useEffect( () => {
    fetch("http://localhost:3001/api/users")
    .then(res => res.json())
    .then(data => setUserList(data))
    .catch(err => console.log("error: ", err))
  }, []);


  const postUser = (data) => {
    fetch('"http://localhost:3001/api/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(obj => console.log(obj))
  }

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log('handleSubmit', e.target.value)
    e.preventDefault();
  };

  const changeUser = (e) => {
    console.log(e.target.value);
    setCurrentUser(e.target.value)
  }

  const addField = () => {
    let user = {};
    setUserList([...userList, user]);
  }

  const editUser = (user) => {
    console.log("edit User")
  }

  const handleDisable = () => {

  }




  return (
    <>
      <UserTable userList={userList} handleSubmit={handleSubmit} isDisabled={isDisabled} editUser={editUser} addField={addField} />
      <ExpenseTable userList={userList} handleSubmit={handleSubmit} handleChange={handleChange} changeUser={changeUser} currentUser={currentUser}/>
      <CompanyTable userList={userList} currentUser={currentUser}/>
    </>
  );
}

export default App;
