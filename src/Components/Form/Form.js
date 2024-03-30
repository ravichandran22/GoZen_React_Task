import React, { useState } from 'react';

const Form = () => {
  const [formData, setformData] = useState({
    name: '',
    age: '',
    email: ''
  });

  const [err, setErr] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validation
    const err = {};
    if(!formData.name.trim()){
        err.name = 'Name field cannot be empty';
    }
    if(!formData.age.trim()){
        err.age = 'Age field cannot be empty';
    }
    if(!formData.email.trim()){
        err.email = 'Email field cannot be empty';
    }
    if(Object.keys(err).length === 0){
        console.log('form submitted with value:', formData);
        setformData({
            name: '',
            age: '',
            email: ''
    })
    setErr({});
    }
    else{
        setErr(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" name="name" style={inputStyle} value={formData.name} onChange={handleChange} />
            {err.name && <span className="error">{err.name}</span>}
        </div>
        <div>
            <label>Age:</label>
            <input type="number" name="age" style={inputStyle} value={formData.age} onChange={handleChange} />
            {err.age && <span className="error">{err.age}</span>}
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" style={inputStyle} value={formData.email} onChange={handleChange} />
            {err.email && <span className="error">{err.email}</span>}
        </div>
      <button type="submit" style={btn}>Submit</button>
    </form>
  );
};

export default Form;

const inputStyle = {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  };

const btn = {
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: 'pointer'
};
