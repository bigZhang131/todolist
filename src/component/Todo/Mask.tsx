import React,{FC,useState} from 'react'
import {Input,Button,notification} from'antd'
interface IMaskProps {
    MaskValue:string;
    close:()=>void;
    edit:(id:number,conent:string)=>void;
    id:number
}
const Mask:FC<IMaskProps>=({MaskValue,close,edit,id})=>{
    const [input,setInput]=useState<string>(MaskValue)
    const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)
    }
    const click=(e:any)=>{
        e.target.dataset.id==='mask'&&close();
    }
    const confirm=()=>{
        input.trim()?(edit(id,input)):(notification.open({
            message: '待办事项不能为空',
            description:'如果想关闭弹窗可以点击取消按钮或黑色区域'
        }));
    }
    return (
        <div data-id="mask" style={{position: 'fixed',top: 0,left: 0,right: 0,bottom: 0,backgroundColor: 'rgba(0,0,0,.8)'}} onClick={click}>
            <div style={{backgroundColor: '#fff',padding: '30px',width:'400px',height:'200px',position:'absolute',top: '50%',left:'50%',marginLeft:'-230px',marginTop: '-130px',borderRadius:'20px'}}>
                <div style={{paddingTop: '20px'}}>
                    <Input value={input} onChange={change} style={{borderRadius:'10px'}}/>
                </div>
                <div style={{paddingTop: '40px'}}>
                    <Button type="primary" onClick={confirm} style={{ float:'right'}}>确定</Button>
                    <Button onClick={close} style={{marginRight:'10px',float:'right'}}>取消</Button>
                </div>
            </div>
        </div>
    )
}
export default Mask;