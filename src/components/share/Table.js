import {Avatar, Button} from "@mui/material";

function Table(props) {

    let columns = props.columns.map((column, index) => (
        <th scope="col" key={index}>{column}</th>
    ));

    let list =  props.data.map((item,index)=>(
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
                <Avatar
                    alt="Remy Sharp"
                    src={item.image}
                    sx={{ width: 56, height: 56 }}
                />
            </td>
            <td>{item.active == "1" ? 'active' : 'disabled'}</td>
            <td>
                <Button variant="contained">Edit</Button>
            </td>
            <td><label className="btn btn-danger">remove</label></td>
        </tr>
    ))

    return (
        <table className="table">
            <thead className="thead-light">
            <tr>
                {columns}
            </tr>
            </thead>
            <tbody>
                {list}
            </tbody>
        </table>
    )
}

export default Table;
