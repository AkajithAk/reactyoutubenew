import React, { useEffect, useState } from "react";

function PopUp(props){
    console.log(props.data,"got_data")
    const [aa,setAa]=useState();
    const [bb,setBb]=useState();

    useEffect(()=>{
        setAa(props.data.name)
        setBb(props.data.data)
    },[props.data])
    const handleUpdate=()=>{
        props.editData({name:aa,data:bb})
    }
    return(<>
        <div>
            <form onSubmit={handleUpdate}>
            <input value={aa} onChange={(e)=>setAa(e.target.value)} />
            <input value={bb} onChange={(e)=>setBb(e.target.value)}/>
            <button>Update</button>
            </form>
        </div>
    </>);
}
export default PopUp;