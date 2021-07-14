const CompanyTable = ({userList, currentUser}) => {
    console.log(userList, currentUser)
    if(currentUser !== "select"){
         return(
            <div className="container-md mt-4">
                <h2>Company Expenses</h2>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Total Expense</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((user, i) => {
                            let entry = Object.keys(user.category);
                            console.log(entry[i])
                            return(
                                <tr key={user.id}>
                                    <td>{entry[i]}</td>
                                    <td>
                                        { entry[i] === 'food' ? user.category.food : null}
                                        { entry[i] === 'travel' ? user.category.travel : null}
                                        { entry[i] === 'health' ? user.category.health : null}
                                    </td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td>Total</td>
                            {userList.filter(user => {
                                if(user.fname + " " +user.lname === currentUser){
                                    return user
                                }
                                }).map(match => (<td key={match.id}>{match.expenses}</td>))}
                        </tr>
                    </tbody>
                </table>
            </div>
        )   
    } else {
        return null
    }

}


// "food" : 200,
// "travel" : 300,
// "health" : 400,
// "supplies" : 500
export default CompanyTable;