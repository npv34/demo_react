function Table(props) {

    let columns = props.columns.map((column, index) => (
        <th scope="col" key={index}>{column}</th>
    ));

    let list =  props.data.map((item,index)=>(
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td><img src={item.image} alt="" width="100"/></td>
            <td>{item.active ? 'active' : 'disabled'}</td>
            <td><label className="btn btn-primary">modify</label></td>
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
