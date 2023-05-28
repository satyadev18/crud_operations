import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { addData } from './context/ContextProvider';
const Register = () => {
  const navigate = useNavigate();
  const {udata,setUdata} = useContext(addData);

  const [inputVal, setInputVal] = useState({
    name:"",
    email:"",
    age:"",
    mobile:"",
    address:"",
    work:"",
    description:""

  })

  // creating fetch api for sending registration data to database



  const setData=(e)=>{

    const {name,value}=e.target;
    setInputVal((preval)=>{
    return  {
        ...preval,
        [name]:value
      }
    })

  }

  const addingData = async(e)=>{

    e.preventDefault();
    const {name,email,age,mobile,work,address,description} = inputVal;

    const res = await fetch("/register",{

      method:'POST',

      headers:{

        "Content-Type":"application/json"

      },

      body:JSON.stringify({

        name,email,age,mobile,work,address,description
      })

    });

    const data = await res.json();


    if(res.status === 404 || !data){
      alert("error");
    } else{
      setUdata(data);
      navigate('/')

    }



  }

  return (
    <div className='container'>

      <form className='mt-4'>
        <div className='row'>
          <div className="mb-3 col-g-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" onChange={setData}
            value={inputVal.email}
            name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

          </div>
          <div className="mb-3 col-g-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1">Name</label>
            <input type="text"onChange={setData} value={inputVal.name} name='name' className="form-control" id="exampleInputPassword1" placeholder="Name" />
          </div>

          <div className="mb-3 col-g-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1">age</label>
            <input type="text"value={inputVal.age}onChange={setData}  name='age' className="form-control" id="exampleInputPassword1" placeholder="Age" />
          </div>

          <div className="mb-3 col-g-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1">Mobile</label>
            <input type="text"value={inputVal.mobile} onChange={setData} name='mobile' className="form-control" id="exampleInputPassword1" placeholder="Mobile" />
          </div>

          <div className="mb-3 col-g-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1">Work</label>
            <input type="text"value={inputVal.work} onChange={setData} name='work' className="form-control" id="exampleInputPassword1" placeholder="occupation" />
          </div>
          <div className="mb-3 col-g-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1">Address</
            label>
            <input type="text" value={inputVal.address}onChange={setData} name='address'
              className="form-control"
              id="exampleInputPassword1"
              placeholder="address" />
          </div>

          <div className="mb-3 col-g-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1">Description</label>
            <textarea name="description" value={inputVal.description}onChange={setData} id="" cols="30" className="form-control" rows="3"></textarea>
          </div>

          <button type="submit" onClick={addingData} className="btn btn-primary">Submit</button>
        </div>
      </form>


    </div>
  )
}

export default Register