import users from "../../data";
import {useState} from "react"
import Table from "../share/Table";
import Search from "../share/Search";


function UserList(props) {
    const [data, setData] = useState(users ?? []);

    let columsTableUser = ["#", "Name", "Email","Avatar", "Active", "Delete", "Update"]

    return (
        <div className="user-list">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            { props.title }
                        </div>
                        <div className="col-12 col-md-8">
                            <Search/>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <button className="btn btn-success">Show/Hide</button>
                    <Table columns={columsTableUser} data={data}/>
                </div>
            </div>
        </div>
    );
}

export default UserList;
