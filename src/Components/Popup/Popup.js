import React, { useEffect, useState }  from "react";
import './Popup.css'
function PopUp(){
    const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }
    useEffect(()=>{
        document.addEventListener("keyup",(e)=>{
            console.log(e.code,"key")
            if(e.code=="Enter"){
                setPop(true)
            }
            else if(e.code=="ShiftLeft"){
                setPop(false)
            }
        })
    })
    return(
        <div>
            <button onClick={handleClickOpen}>Open popup</button>
            <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>popup</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <div>
                            <p>This is simple popup in React js</p>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}
export default PopUp;