import React, { useState } from 'react'

const useForm = (initialValue) => {

    const [values, setValues] = useState(initialValue)  
    
    const handleChange= ()=>{
        const {name,value}=e.target
        setValues((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const resetForm= ()=>{
        setValues(initialValue)
    }
    
    return {
        values,handleChange,resetForm
    }
    
}

export default useForm