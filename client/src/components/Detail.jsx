import React from 'react'
import {NavLink, useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

const Detail = () => {


   const navigate = useNavigate();
  const {id} = useParams("");
  const [user,setUser] = useState([])
  const getuser = async(e)=>{



    const res = await fetch(`/getuser/${id}`,{

      method:'GET',

      headers:{

        "Content-Type":"application/json"

      },

    });

    const data = await res.json();



    if(res.status === 404 || !data){

      alert("error");


    } else{

     setUser(data)



    }

  }
  useEffect(() => {
    getuser();
  }, []);

  //Deleting user function
  const deleteUser = async (id)=>{

    const res2 = await fetch(`/deleteuser/${id}`, {



    method: 'DELETE',

    headers: {

 "Content-Type": "application/json"

},



});

const deletedata = await res2.json();
navigate('/')

  }

  return (
    <div className='container mt-3'>

      <h1>Welcom {user.name}</h1>
      <img src="logo192.png" alt="profile" style={{ width: 50 }} />
      <div className="add_btn">
       <NavLink to={`/edit/${user._id}`} ><button className="btn btn-primary">Edit</
        button></NavLink>
        <button className="btn btn-danger
         mx-2" onClick={()=>deleteUser(user._id)}>Delete</button>
      </div>

      <div className="row">
        <div className="left-view col-lg-6 col-md-6 col-12">
          <h5>Name: <span style={{fontWeight:100}}>{user.name}</span></h5>
          <h5>Age:<span style={{fontWeight:100}}>{user.age}</span></h5>
          <p>Email: <span>{user.email}</span></p>
          <p>Occupation: <span>{user.work}</span></p>

        </div>

        <div className='right-view col-lg-6 col-md-6 col-12'>
          <p className='lg-mt-3 md-mt-3 mt-2'>Mobile: <span>{user.mobile}</span></p>
          <p className='mt-3'>Location: <span>{user.address}</span></p>
          <p className='mt-2'>Description: <span>{user.description}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Detail