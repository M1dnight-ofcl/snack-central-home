import { useState, useEffect, useRef } from 'preact/hooks';
import emailjs from '@emailjs/browser';
import { SHA256, enc } from 'crypto-js';
import "./style/contact.css";
const ContactUs=()=>{
    let allInputs=[];
    const form=useRef();
    const Input=(prop)=>{
        allInputs.push(prop.id);
        return(<>
            <label for={prop.name}>{prop.title}</label><br/>
            <input name={prop.name} id={prop.id} type="text" />
        </>);
    }
    const GenerateContactFormKey=()=>{
        return SHA256(btoa(Math.random() + 1).toString(36).substring(7))
        .toString(enc.Hex).split('',6).join('');
    }
    const Click=(e)=>{
        e.preventDefault();
        let cf_dat = {
            name: document.getElementById('cf_name').value,
            email: document.getElementById('cf_email').value,
            msg: document.getElementById('cf_msg').value,
        }
        if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "")
            console.log(`localhost detected\nDebug stats:\nname: "${cf_dat.name}"\nemail: "${cf_dat.email}"\nmsg: "${cf_dat.msg}"`);
        // else alert('Coming Soon! (sorry)');
        emailjs.sendForm('snaclcentralemailjs', 'contactus_sent', 
            form.current, {publicKey: 'i59EM-dm7QDrNOM0z',})
        .then(
            () => { console.log('SUCCESS!'); },
            (error) => { console.log('FAILED...', error.text); },
        );
        emailjs.sendForm('snaclcentralemailjs', 'contactus_toadmin', 
            form.current, {publicKey: 'i59EM-dm7QDrNOM0z',})
        .then(
            () => { console.log('SUCCESS!'); },
            (error) => { console.log('FAILED...', error.text); },
        );
    }
    return(<>
        <div id="c_header">
            <h1>Contact Us</h1>
        </div>
        <section className='c_section'>
            <div className='contentWrapper'>
                <div className='form'>
                    <form className='c_form' ref={form} onSubmit={(e)=>Click(e)}>
                        <Input title="Name" id="cf_name"  name="user_name"/>
                        <Input title="Email" id="cf_email" name="user_email" />
                        <Input title="Message" id="cf_msg" name="message" />
                        <input type='text' value={GenerateContactFormKey()} name="cf_id" id="cf_id" style="display:none;" />
                        <input type="submit" id="c_submit" value="Submit" />
                    </form>
                </div>
            </div>
        </section>
    </>);
}
export default ContactUs;