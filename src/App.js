import UserTable from './components/UserTable';
import ExpenseTable from './components/ExpenseTable';
import CompanyTable from './components/CompanyTable';
// import UserForm from './components/UserForm';
import { useEffect, useState } from 'react';

const App = () => {

  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState("select");
  const [isDisabled, setIsDisabled] = useState(false);
  const [newUser, setNewUser] = useState([])

  useEffect( () => {
    fetch("http://localhost:3001/api/users")
    .then(res => res.json())
    .then(data => setUserList(data))
    .catch(err => console.log("error: ", err))
  }, []);


  const postUser = (first, last) => {
    let data = {...first, ...last};
    fetch("http://localhost:3001/api/users", {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(obj => {
      removeField();

     let newArr = userList.concat(obj);
      setUserList(newArr)
      // setUserList([...userList, userList[userList.length -1] = obj]);
    })
  }

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const changeUser = (e) => {
    setCurrentUser(e.target.value)
  }


  //prevent from adding field multiple times
  const addField = () => {
    if(userList[userList.length - 1].id && userList[userList.length - 1].fname){
      let user = {}; 
      setUserList([...userList, user]);
    }
  }

  const removeField = () => {
    setUserList(userList.filter(item => item.id !== undefined));
    return;
  }

  const editUser = (user) => {
    console.log("edit User")
  }

  const handleDisable = () => {

  }

  return (
    <>
      <UserTable userList={userList} handleSubmit={handleSubmit} isDisabled={isDisabled} editUser={editUser} addField={addField}  handleChange={handleChange} postUser={postUser}/>
      <ExpenseTable userList={userList} handleSubmit={handleSubmit} handleChange={handleChange} changeUser={changeUser} currentUser={currentUser}/>
      <CompanyTable userList={userList} currentUser={currentUser}/>
    </>
  );
}

export default App;
