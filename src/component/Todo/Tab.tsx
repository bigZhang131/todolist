import React,{FC, useState} from "react";
import {Input} from 'antd'
interface Props{
    add:(conent:string)=>void
}
export const Tab:FC<Props>=({add})=>{
    const [value,setValue]=useState<string>('')
    const setInput=(e:any)=>{
        setValue(e.target.value)
    }
    const confirm=()=>{
        if(value.trim()===''){
            setValue('')
            return
        }
        add(value)
        setValue('')
    }
    return <div style={{display:'flex',justifyContent:'center'}}>
        <Input type='text' placeholder="Add a task" value={value} onPressEnter={confirm} onChange={setInput}  style={{borderRadius:'20px',width:'400px',height:'50px',}}/>
    </div>
}
export default Tab