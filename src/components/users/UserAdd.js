import {useState} from "react";

function UserAdd(props) {
    const [form, setForm] = useState({
        fields: {
            name: "",
            email: "",
            active: "1",
        },
        errors: {
            name: "",
            email: "",
        },
        inValidate: true
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form.fields)
        props.createUser(form.fields)
        setForm({
                fields: {
                    name: "",
                    email: "",
                    active: "1",
                },
                errors: {
                    name: "",
                    email: "",
                },
                inValidate: true
            }
        )
    }

    const handleChange = (e, field) => {

        let {fields, errors} = {...form}

        let value = e.target.value;
        if (!value) {
            errors[field] = "Please enter a value";
            setForm({...form, errors})
            form.inValidate = true
            setForm({...form})
        } else {
            errors[field] = ""
            form.inValidate = false
            setForm({...form})
        }

        fields[field] = e.target.value
        setForm({...form, fields})
    }

    return (
       <div>

           <form onSubmit={handleSubmit}>
               <div className="form-group">
                   <label htmlFor="exampleInputEmail1">Name</label>
                   <input type="text" name="name" value={form.fields.name} onChange={(e) => handleChange(e, "name")} className="form-control" aria-describedby="emailHelp"
                          placeholder="Name"/>
                   <p className="text-danger">{form.errors.name}</p>
               </div>

               <div className="form-group">
                   <label htmlFor="exampleInputEmail1">Email</label>
                   <input type="email" name="email" value={form.fields.email} onChange={(e) => handleChange(e, "email")} className="form-control" id="" aria-describedby="emailHelp"
                          placeholder="Enter email"/>
               </div>
               <div className="form-group">
                   <label htmlFor="exampleFormControlSelect1">Status</label>
                   <select className="form-control" value={form.fields.active} name="active" onChange={(e) => handleChange(e, "active")} id="exampleFormControlSelect1">
                       <option value="1">Active</option>
                       <option value="0">Disable</option>
                   </select>
               </div>

               <button disabled={form.inValidate} type="submit" className="btn btn-primary">Submit</button>
           </form>
       </div>
    );
}

export default UserAdd;
