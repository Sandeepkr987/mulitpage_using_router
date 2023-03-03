import React from "react";
import './Form.css';

function Form() {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
    Cpassword: '',
    join: true,
    user: ''
})
//computed properties: [name]
function  handleChange (e) {
    const {name, value, type, checked} = e.target
    setForm(prevData => {
        return {
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }
    })
    
}
function handleSubmit(event) {
    event.preventDefault()
    console.log(form)
    if (form.password === form.Cpassword ) {
      console.log('signed successfully')
      console.log(form)
    } else {
      console.log('password do not matched')
    }
}
  return (
    <div className="form-container">
    <form className="form" onSubmit={handleSubmit}>
        <input 
            type="email" 
            placeholder="Email address"
            className="form--input" onChange={handleChange}
            name = 'email'
            value ={form.email}
        />
        <input 
            type="password" 
            placeholder="Password"
            className="form--input" onChange={handleChange}
            name = 'password'
            value ={form.password}
        />
        <input 
            type="password" 
            placeholder="Confirm password"
            className="form--input" onChange={handleChange}
            name = 'Cpassword'
            value ={form.Cpassword}
        />
        
        <div className="form--marketing">
            <input
                id="okayToEmail"
                type="checkbox"
                name = 'join' onChange={handleChange}
                checked = {form.join}
            />
            <label htmlFor="okayToEmail">want our premium support ?</label>
        </div>
        <fieldset className=" form--set">
            <legend>Already a User ?</legend>
            <input type='radio' id="YES" name="user"
             value='YES' checked={form.user === 'YES'} onChange={handleChange}/>
            <label htmlFor="YES">YES</label>
            <br/>
            <input type='radio' id="NO" name="user" 
             value='NO' checked={form.user === 'NO'} onChange={handleChange}/>
            <label htmlFor="NO">NO</label>
            <br/>
        </fieldset>
        <button className="form--submit">Sign up</button>
    </form>

</div>
  );
}

export default Form;