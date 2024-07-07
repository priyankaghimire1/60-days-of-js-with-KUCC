import React, {useState} from 'react'
import localstorage from './localstorage'
export default function Helloworld(){
         const [name, setName]=localstorage('name', '')
        return (
            <input 
            type="text"
            value={name}
            onChange={e=>setName(e.target.value)}
            />
        )
    }
