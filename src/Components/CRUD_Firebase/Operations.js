import React, { useEffect, useId, useState } from 'react';
import { aaa, dataRef } from './Firebases';
import {getAuth} from 'firebase/auth';
import "./Operation.css";
function Operations(){
    const [name,setName]=useState('')
    const [allValue,setAllValue]=useState([])
    const [updates,setUpdate]=useState(false)
    const [indexs,setIndex]=useState()
    const [keyss,setKeyss]=useState()
    const handleAdd=()=>{
        if(name!==""){
        dataRef.ref().child("all").push(name)
        setName("")
        }
    }
    const handleEdit=(data,i)=>{
        console.log(data,"index",i)
        setName(data)
        setIndex(i)
        setUpdate(true)
    }
    const handleDelete=(i,data)=>{
        dataRef.ref("all").on('value',data=>
            Object.keys(data.val())[i]  
        
        ).remove()
        
        // console.log(getAuth.uid,"smvdfsdfsdf")
        // dataRef.ref(`all/${}`)

            // const datas=
        // console.log(i,"i<<2",keyss)
        // dataRef.ref(`all/${keyss}`).remove()

        //     const getData=Object.keys(data.val())
        //     // console.log(Object.values(data),"uii",data.key)
        //     // setAllValue(getData)
        //     // setKeyss(getData[i])
        //     data.ref(`all/${getData[i]}`).remove()
        // })
        
    }
    console.log(keyss,"amacjgan");
    const handleUpdate=()=>{
        // dataRef.ref().child('all').update(name,indexs)
        dataRef.ref().child("all").on('value',data=>{
            
            const getData=Object.keys(data.val())
            // console.log(Object.values(data),"uii",data.key)
            setAllValue(getData)
        })
        dataRef.ref().child(`all/${keyss}`).update(name)
    }
    useEffect(()=>{
        dataRef.ref().child("all").on('value',data=>{
            console.log(data,"adfsdff");
            const getData=Object.values(data.val())
            console.log(Object.values(data),"uii")
            setAllValue(getData)
        }) 
    },[])
    console.log(allValue,"ooi")
    return(
        <div>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} />
            {updates?<button onClick={handleUpdate}>Update</button>:<button onClick={handleAdd}>Add</button>}
            <div>
                {allValue.map((valData,i)=><div key={i}>
                    <div>
                    <h1  className='list-container' >{valData}</h1>
                    </div>
                    <div>
                        <button onClick={()=>handleEdit(valData,i)}>Edit</button>
                        <button onClick={()=>handleDelete(i,valData)}>Delete</button>
                    </div>
                </div>)}
            </div>
        </div>
    );
}
export default Operations;