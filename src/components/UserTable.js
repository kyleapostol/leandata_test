import { useEffect, useState } from 'react';

const UserTable = ({userList, isDisabled, editUser, addField, handleChange, postUser}) => {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const handleFnameChange = (e) => {
    setFname(e.target.value);
  }

  const handleLnameChange = (e) => {
    setLname(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postUser({"fname" : fname}, {"lname" : lname})
  }
    return(
      <div className="container-md">
        <h2>Users Table</h2>
        <form method="GET" id="my_form" onSubmit={handleSubmit}></form>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Expense</th>
            </tr>
          </thead>
          <tbody>
              {userList.map(user => {
                return(
                  <tr key={user.id}>
                    <td>
                      <input style={{"border" : "none"}} form="my_form" defaultValue={user.fname} onChange={handleFnameChange} disabled={isDisabled}/>
                    </td>
                    <td className="d-flex justify-content-between">
                      <input style={{"border" : "none"}} form="my_form" defaultValue={user.lname} onChange={handleLnameChange} disabled={isDisabled}/>
                      {user.id ? 
                        <span>
                          <i style={{"cursor" : "pointer"}} className="bi bi-pencil-fill m-2" onClick={editUser}></i>
                          <i style={{"cursor" : "pointer"}} className="bi bi-trash-fill text-danger"></i>
                        </span> :
                        <span>
                          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
                        </span>
                      }

                    </td>
                    <td>{user.expenses}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
        <div className="col-2" style={{"cursor" : "pointer"}} onClick={addField}>
            <span>
              <i className="bi bi-plus-lg"></i>
              <span> Add User</span>
            </span>
          </div>
      </div>
    )
}

export default UserTable;