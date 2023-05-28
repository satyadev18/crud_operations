import React from 'react'
import { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
const Edit = () => {
const navigate = useNavigate();

  //const [user,setUser] = useState([])

    const [inputVal, setInputVal] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        address: "",
        work: "",
        description: ""

    })

    const setData = (e) => {

        const { name, value } = e.target;
        setInputVal((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })

    }


    // api work
    const {id} = useParams("")

    const getuser = async(e)=>{







      const res = await fetch(`/getuser/${id}`,{



        method:'GET',



        headers:{



          "Content-Type":"application/json"



        },



      });



 const data = await res.json()
if(res.status === 404 || !data){





      } else{

 setInputVal(data)

 }
 }

    useEffect(() => {

      getuser();

    }, []);


    // updating user using ID
    const updateUser = async(e)=>{
      e.preventDefault();


      const {name,email,work,address,description,mobile,age} = inputVal;
      const res2 = await fetch(`/updateuser/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({

          name,email,work,address,mobile,age,description


        })

      });
      const data2 = await res2.json();


      if(res2.status === 404 || !data2)
      {
        alert("fill the data")
      }
      else{
        setTimeout(navigate('/'),11000);
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

            <button type="submit" onClick={updateUser}  className="btn btn-primary">Submit</button>

          </div>

        </form>

      </div>

    )
}

export default Edit