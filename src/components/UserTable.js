import { useEffect, useState } from 'react';

const UserTable = ({userList, handleSubmit, isDisabled, editUser, addField, handleChange}) => {

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
              {userList.map(user => (
                <tr key={user.id}>
                  <td>
                    <input style={{"border" : "none"}} form="my_form" defaultValue={user.fname} onChange={handleChange} disabled={isDisabled}/>
                  </td>
                  <td className="d-flex justify-content-between">
                    <input style={{"border" : "none"}} form="my_form" defaultValue={user.lname} onChange={handleChange} disabled={isDisabled}/>
                    <span>
                      <i style={{"cursor" : "pointer"}} className="bi bi-pencil-fill m-2" onClick={editUser}></i>
                      <i style={{"cursor" : "pointer"}} className="bi bi-trash-fill text-danger"></i>
                    </span>
                  </td>
                  <td>{user.expenses}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div style={{"cursor" : "pointer"}} onClick={addField}>
            <span>
              <i className="bi bi-plus-lg"></i>
              <span> Add User</span>
            </span>
          </div>
      </div>
    )
}

export default UserTable;