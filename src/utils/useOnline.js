import { useState } from "react"

const useOnline = ()=>{
    const[check,setcheck]=useState(true);
    window.addEventListener("offline" ,()=>{
        setcheck(false)
    })
    window.addEventListener("online" ,()=>{
        setcheck(true)
    })
    return check
}
export default useOnline