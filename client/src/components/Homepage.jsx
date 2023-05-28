import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Homepage = () => {

  const [getUserData, setUserData] = useState([]);


  // api request to get data from server

  const getdata = async (e) => {

    const res = await fetch("/getdata", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },

    });
    const data = await res.json();

    if (res.status === 404 || !data) {
      alert("error");
    } else {
      setUserData(data)

    }
  }

  useEffect(() => {
    getdata();

  }, []);


  // Delete User

  const deleteUser = async (id)=>{

    const res2 = await fetch(`/deleteuser/${id}`, {



    method: 'DELETE',

    headers: {

 "Content-Type": "application/json"

},



});

const deletedata = await res2.json();

getdata();
  }
  return (
    <>

    <div className="mt-5">
      <div className="container">
        <div className="add_btn m-2">
          <NavLink to='/register'> <button className="btn btn-primary">Add Data</button></NavLink>
        </div>
        <table className="table">
          <thead>
            <tr className='table-dark'>
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>

            </tr>
          </thead>
          <tbody>
            {
              getUserData.map((user, id) => {

                return (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.work}</td>
                      <td>{user.mobile}</td>
                      <td className='d-flex justify-content-between '>
                        <NavLink to={`view/${user._id}`}> <button className='btn btn-success m-2'>read</button></NavLink>
                        <NavLink to={`edit/${user._id}`}><button className='btn btn-primary m-2'>update</button></NavLink>
                        <button className='btn btn-danger m-2' onClick={()=>deleteUser(user._id)}>delete</button>

                      </td>


                    </tr>
                  </>
                )

              })
            }
          </tbody>

        </table>
      </div>
    </div>
    </>
  )
}

export default Homepage