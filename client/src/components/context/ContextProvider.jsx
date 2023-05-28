import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const addData = createContext("")

const ContextProvider = ({children}) => {
    const [udata,setUdata] = useState("")
  return (
         <addData.Provider value={{udata,setUdata}}>
            {children}

         </addData.Provider>
  )
}

export default ContextProvider