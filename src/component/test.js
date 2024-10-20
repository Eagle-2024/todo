// import { useState } from "react";
// import React  from "react";
// import { contextLabel,contextPhone } from "../App";
// import { useContext } from "react";

// export function Model({isVisible,errorMsg=null}){
//    if (isVisible){
//        return (
         
//                <div style={{position:"absolute",}}>
                 
//                    <div>
   
//    <h1>{errorMsg!=null?errorMsg:<h1>the form has been submited successfully</h1>}</h1>
//    </div>
 
// </div> 
//        )
// } else{
//    return <></>
// }
// }

// export function Noor ({title}){
//    return (
//       <div>
// <h1>{title}</h1>
//       </div>
//    )
// }


// export function Label (){
//    let inputContext = useContext(contextLabel);

//    return (
//       <div>
//   <label>{inputContext.labelTitle}</label>
//   <input value={inputContext.value} onChange={(e)=>{inputContext.change(e.target.value)}} />
//       </div>
//    )
// }

// export function Phone ({value,changePhone,inputName}){
//    let inputContextPhone = useContext(contextPhone)
//    return (
//       <div>
//   <label>{inputContextPhone.label}</label>
//   <input value={inputContextPhone.v} onChange={(e)=>{inputContextPhone.c(e.target.value)}}  />
//       </div>
//    )
// }
// export function Age ({value,changeAge,inputName}){
   
//    return (
//       <div>
//   <label>{inputName}</label>
//   <input value={value} onChange={(e)=>{changeAge(e.target.value)}}   />
//       </div>
//    )
// }