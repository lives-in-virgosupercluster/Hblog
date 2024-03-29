"use client"
import React from 'react'
import styles from "./write.module.css"
import Image from 'next/image'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css';
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react"
 const Writepage = () => {
    const{status}=useSession();
    //console.log(data,status);
    const router=useRouter();
  
    const [open,setOpen]=useState(false);
    const[value,setValue]=useState("");
    if(status==="loading"){
        return <div className={styles.loading}>Loading...</div>
      }
      if(status==="authenticated"){
       router.push("/");
      }
  return (
    <div className={styles.container}>
        <input type="text" placeholder="Title" className={styles.input}/>
        <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen(!open)}>
            <Image src="/plus.png" alt="" width={16} height={16}/>
        </button>
        {open && (<div className={styles.add}>
        <button className={styles.addbutton}>
            <Image src="/image.png" alt="" width={16} height={16}/>
        </button>
        <button className={styles.addbutton}>
            <Image src="/external.png" alt="" width={16} height={16}/>
        </button>
        <button className={styles.addbutton}>
            <Image src="/video.png" alt="" width={16} height={16}/>
        </button>

            
            </div>)}
            <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell Your Story" className={styles.TextArea}/>

        </div>
        <button className={styles.publish}>Publish</button>

        
        </div>
  )
}
export default Writepage;