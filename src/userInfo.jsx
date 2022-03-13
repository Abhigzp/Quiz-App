import React from "react";
import { useState,useEffect } from "react";

export default function UserInfo(){
        const[userName, setUserName]=useState('');
        useEffect(()=>{
            let name = localStorage.getItem("name");
            setUserName(name)
        })
    return(<div className="userInfo bg-light">
        <span className="text-center">Welcome <b>{userName}</b> </span>
    </div>)
}