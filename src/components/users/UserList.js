import users from "../../data";
import {useState} from "react"
import Table from "../share/Table";
import Search from "../share/Search";
import UserAdd from "./UserAdd";

function UserList(props) {
    const [data, setData] = useState(users ?? []);

    let columsTableUser = ["#", "Name", "Email","Avatar", "Active", "Delete", "Update"]

    const searchUser = (e) => {
        console.log(e);
    }

    const addUser = (user) => {
        setData([...data, user])
    }

    return (
        <div className="row">
            <div className="col-12 col-md-4">
                <UserAdd createUser={addUser}/>
            </div>
            <div className="user-list col-12 col-md-8">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                { props.title }
                            </div>
                            <div className="col-12 col-md-8">
                                <Search search={searchUser} />
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <button className="btn btn-success">Show/Hide</button>
                        <Table columns={columsTableUser} data={data}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;
