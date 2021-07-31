const AddUserField = ({addUser, handleFnameChange, handleLnameChange, handleSubmit}) => {

    if(!addUser){
        return <></>
    } else {
        return(
            <tr>
                <td>                      
                    <input style={{"border" : "none"}} placeholder="First" form="my_form" onChange={handleFnameChange}/>
                </td>
                <td className="d-flex justify-content-between">                      
                    <input style={{"border" : "none"}} placeholder="Last" form="my_form" onChange={handleLnameChange}/>
                    <span>
                        <button type="button" className="btn btn-primary btn-sm" onClick={handleSubmit}>Add</button>
                    </span>
                </td>
                <td></td>
            </tr>
        )
    }
}

export default AddUserField;