import React, { useEffect, useRef, useState } from "react";
import PopUp from "./popup";

function CrudOperation(){
    const [aa,setAa]=useState()
    const [bb,setBb]=useState()
    const [data,setData]=useState([])
    const [update,setUpadte]=useState(false)
    const [initialVal,setInterval]=useState()
    const [indexs,setIndex]=useState()
    const a=useRef();
    const b=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        // setData(newData=>[...newData,{name:aa,data:bb}])
        setData(newData=>[...newData,{name:aa}])
        setAa("")
        setBb("")
    }
    const editData=(e,i)=>{
        setIndex(i)
        setAa(data[i].name)
        // setAa(data[i].name)
        // setBb(data[i].data)
        setUpadte(true)

    }
    const updatess=()=>{
        data.splice(indexs,1,{name:aa})
        setAa("")
        setBb("")
        // data.splice(indexs,1,{name:aa,data:bb})

    }
    const deleteData=(i)=>{
        data.splice(i,1)
        setData([...data])
    }
    return(
        <>
        {/* <form onSubmit={(e)=>handleSubmit(e)}> */}
            <input value={aa} onChange={(e)=>setAa(e.target.value)} />
            {/* <input value={bb} onChange={(e)=>setBb(e.target.value)}/> */}
            <button onClick={(e)=>handleSubmit(e)}>Add</button>
        {/* </form> */}
        <button onClick={updatess}>update</button>
        {
            data.map((ae,i)=>
                <div>
                    <h1>
                        {ae.name}
                    </h1>
                    <h2>
                        {ae.data}
                    </h2>

                    <button onClick={(e)=>editData(e,i)}>edit</button>
                    <button onClick={()=>deleteData(i)}>delete</button>
                </div>
            )
        }
        {/* {update&& <PopUp data={initialVal} editData="mb"/>} */}
        </>
    );
}
export default CrudOperation;