import React,{FC, useState} from 'react'
import Tab from './Tab'
import List from './List'
import Mask from './Mask'
interface Props{

}
export interface IDate {
    id:number;
    conent:string;
    select:boolean;
}
export const TodoList:FC<Props>=()=>{
    const [date,SetDate]=useState<IDate[]>([])
    const [show,setShow]=useState<boolean>(false)
    const [MaskValue,setMaskValue]=useState<string>('')
    const [selectId,SetId]=useState<number>(0)
    const sort=(arr:IDate[])=>{
        if(!arr.length)return 1
        const newArr=arr.sort((pre:IDate,next:IDate)=>{
            return next.id-pre.id
        })
        return newArr[0].id+1
    }
    const add=(conent:string)=>{
        SetDate([{id:sort(date),conent,select:false},...date])
    }
    const selected=(id:number)=>{
        const res=date.filter((item:IDate)=>{
            if(item.id===id){
                item.select=!item.select
            }
            return item
        })
        SetDate(res)
    }
    const remove=(id:number)=>{
        const res=date.filter((item:IDate)=>item.id!==id)
        SetDate(res)
    }
    const edit=(id:number,conent:string)=>{
        const res=date.filter((item:IDate)=>{
            if(item.id===id){
                item.conent=conent
            }
            return item
        })
        SetDate(res)
        close()
    }
    const close=()=>{
        setShow(false)
    }
    const open=(id:number,conent:string)=>{
        setMaskValue(conent)
        SetId(id)
        setShow(true)
    }
    return <div>
        <p style={{textAlign:'center',fontSize:'30px',fontWeight:700}}>Todo List</p>
        <Tab add={add}/>
        <List date={date} selected={selected} remove={remove} open={open}/>
        {show&&<Mask close={close} MaskValue={MaskValue} edit={edit} id={selectId}/>}
    </div>
}
export default TodoList