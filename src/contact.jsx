import { useState, useEffect } from 'preact/hooks';
import "./style/contact.css";
const ContactUs=()=>{
    let allInputs=[];
    const Input=(prop)=>{
        allInputs.push(prop.id);
        return(<>
            <label for={prop.id}>{prop.title}</label><br/>
            <input name={prop.id} id={prop.id} type="text" />
        </>);
    }
    const Click=(e)=>{
        e.preventDefault();
        let cf_dat = {
            name: document.getElementById('cf_name').value,
            email: document.getElementById('cf_email').value,
            msg: document.getElementById('cf_msg').value,
        }
        if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "")
            alert(`localhost detected\nDebug stats:\nname: "${cf_dat.name}"\nemail: "${cf_dat.email}"\nmsg: "${cf_dat.msg}"`);
        else alert('Coming Soon! (sorry)');
    }
    return(<>
        <div id="c_header">
            <h1>Contact Us</h1>
        </div>
        <section className='c_section'>
            <div className='contentWrapper'>
                <div className='form'>
                    <Input title="Name" id="cf_name" />
                    <Input title="Email" id="cf_email" />
                    <Input title="Message" id="cf_msg" />
                    <button id="c_submit" onClick={(e)=>Click(e)}>Submit</button>
                </div>
            </div>
        </section>
    </>);
}
export default ContactUs;