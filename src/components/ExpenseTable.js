import Category from './Category';

const ExpenseTable = ({userList, handleSubmit, handleChange, currentUser, changeUser}) => {

    return(
        <div className="container-md mt-4">
            <h2>Expense Table</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cars">Choose a user:</label>
                <select className="form-select" name="users" id="cars" onChange={changeUser} value={currentUser}>
                    <option value="select">Select</option>
                    {userList.map(user => (
                    <option key={user.id} value={`${user.fname} ${user.lname}`}>{`${user.fname} ${user.lname}`}</option>
                ))}
                </select>
            </form>
            <Category></Category>
        </div>
    )
}

export default ExpenseTable;