import { Checkbox, Input } from "antd";
import React,{FC, useMemo, useState} from "react";
import  {IDate} from './index'
import {CloseOutlined} from '@ant-design/icons'
interface Props {
    date:IDate[]
    selected:(id:number)=>void
    remove:(id:number)=>void
    open:(id:number,conent:string)=>void
}
export const List:FC<Props>=({date,selected,remove,open})=>{
    const list=useMemo(()=>{
        return date?.map((item:IDate)=>{
            return <div key={item.id} style={{display:'flex',alignItems:'center'}}>
                <Checkbox checked={item.select} onChange={()=>{selected(item.id)}}/>
                {item.select?<Input value={item.conent} bordered={false}  style={{flex:'1',textDecoration:'line-through'}} onClick={()=>open(item.id,item.conent)}/>:<Input bordered={false} value={item.conent} style={{flex:'1'}} onClick={()=>open(item.id,item.conent)}/>}
                {item.select&&<CloseOutlined style={{color:'red'}} onClick={()=>{remove(item.id)}}/>}
            </div>
        })
    },[date])
    return <div style={{width:'400px',margin:'auto',paddingTop:'20px'}}>
        {list}
    </div>
}
export default List