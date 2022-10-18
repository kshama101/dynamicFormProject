import { useState } from 'react';


function Form() {
  const [inputFields, setInputFields] = useState([])
  const [inputField, setInputField] = useState({name:"",age:"",salary:""})

  

  const AddInputFields = (info) => {
    setInputFields([...inputFields, info]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputField);

    AddInputFields(inputField);

    setInputField({name:"",age:"",salary:""});
    }

const handleChange = (event) => {
  setInputField({ ...inputField, [event.target.name]: event.target.value });
};

  return (
    <div className="App">
      <form>
     
              <input
                name='name'
                placeholder='Name'
                onChange={event => handleChange( event)}
                value={inputField.name}
              />
              <br />
             
              <input
                name='age'
                placeholder='Age'
                onChange={event => handleChange(event)}
                value={inputField.age}
              />
              <br /> 
              <input
                name='salary'
                placeholder='Salary'
                onChange={event => handleChange(event)}
                value={inputField.salary}
              />
               <br />
          
        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
      <div>
      {inputFields.map((info) => (
        <div className="card" key={info.name}>
          <p className="card-name">{info.name}</p>
          <p>{info.age}</p>
          <p>{info.salary}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
export default Form;


    
 