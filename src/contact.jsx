import { useState, useEffect } from 'preact/hooks'
import "./style/contact.css"
const ContactUs=()=>{
    let allInputs=[];
    const Input=(prop)=>{
        allInputs.push(prop.id)
        return(<>
            <label for={prop.id}>{prop.title}</label><br/>
            <input name={prop.id} id={prop.id} type="text" />
        </>)
    }
    const Click=(e)=>{
        e.preventDefault();
        alert('Coming Soon! (sorry)')
    }
    return(<>
        <div id="c_header">
            <h1>Contact Us</h1>
        </div>
        <section className='c_section'>
            <div className='contentWrapper'>
                <div className='form'>
                    <Input title="Name" id="name" />
                    <Input title="Email" id="email" />
                    <Input title="Message" id="msg" />
                    <button id="c_submit" onClick={(e)=>Click(e)}>Submit</button>
                </div>
            </div>
        </section>
    </>)
}
export default ContactUs;