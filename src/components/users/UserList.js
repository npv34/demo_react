import users from "../../data";
import {useState} from "react"


function UserList() {
    const [data, setData] = useState(users ?? []);

    const deleteUser = (index) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to delete')) {
            data.splice(index, 1);
            setData([...data])
            //setData((data) => data.filter((_, i) => i !== index))
        }
    }

    let userList =  data.map((item,index)=>(
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.active ? 'active' : 'disabled'}</td>
            <td><label className="btn btn-primary">modify</label></td>
            <td><label className="btn btn-danger" onClick={()=> deleteUser(index)}>remove</label></td>
        </tr>
    ))

    return (
        <div className="user-list">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            User manager
                        </div>
                        <div className="col-12 col-md-8">
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                    </div>

                </div>
                <div className="card-body">
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Active</th>
                            <th scope="col"/>
                            <th scope="col"/>
                        </tr>
                        </thead>
                        <tbody>
                        {userList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserList;
