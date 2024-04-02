import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import TextArea from "../Components/Textarea";
import GoogleMap from "../Components/GoogleMap";

import classes from './Contact.module.css'

import phoneLogo from '../Images/ICONO-TELEFONO.png';
import emailLogo from '../Images/ICONO-MAIL.png';
import locationLogo from '../Images/ICONO-UBICACION.png'

export default function Contact() {

    const [credentials, setCredentials] = useState({
        name: '',
        about: '',
        email:'',
        body:''
    })

    const initError = {
        exists: false,
        helperText: null,
    };

    const [userError, setUserError] = useState(initError);

    const handleChange = (evt) => {
        let value = evt.target.value;
        let name = evt.target.name;
        setCredentials((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // setEnteredUserTouched(true);
        // setEnteredPwdTouched(true);


        // if (!userIsValid) {
        //     return;
        // }
        // if (!pwdIsValid) {
        //     return;
        // }

        fetch("https://super-useful-cms-a844104e433f.herokuapp.com/api/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {data:{...credentials}}
            ),
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };

    return(
        <>
        <Header/>
        <section className={classes.ContactContainer}>
            <div className={classes.Contact} >
                <div className={classes.ContactInfo}>
                    <div>
                        <div style={{display:'flex'}}>
                            <img src={phoneLogo} />
                            <span>55 4002 8524</span>
                        </div>
                        <div style={{display:'flex'}}>
                            <img src={emailLogo} />
                            <span>contacto@superutil.mx</span>
                        </div>
                        <div style={{display:'flex'}}>
                            <img height={"21px"} src={locationLogo} />
                            <span>avenida independencia <br/> #1320, Toluca <br/> Estado de México</span>
                        </div>
                    </div>
                    <div >
                        <GoogleMap/>
                    </div>
                </div>
                <form  style={{position:'relative'}} onSubmit={handleSubmit}>
                    <h1>Contacto</h1>
                    <div style={{marginBottom:'10px'}} >
                        <Input 
                            title = {"name"}
                            type = {"text"}
                            name = {"name"}
                            placeholder = {"NOMBRE"}
                            value={credentials.txt}
                            handleChange={handleChange}
                            // handleBlur={userBlurHandler}
                            className={userError.exists ? "is-invalid": ""}
                            errorDiv = {userError.exists ? "text-danger" : "no-danger"}
                            errorMsg = {userError.helperText}
                        /> 
                    </div>
                    <div style={{marginBottom:'10px'}} >
                        <Input 
                            title = {"about"}
                            type = {"text"}
                            name = {"about"}
                            placeholder = {"ASUNTO"}
                            value={credentials.txt}
                            handleChange={handleChange}
                            // handleBlur={userBlurHandler}
                            className={userError.exists ? "is-invalid": ""}
                            errorDiv = {userError.exists ? "text-danger" : "no-danger"}
                            errorMsg = {userError.helperText}
                        /> 
                    </div>
                    <div style={{marginBottom:'10px'}} >
                        <Input 
                            title = {"email"}
                            type = {"text"}
                            name = {"email"}
                            placeholder = {"CORREO ELECTRÓNICO"}
                            value={credentials.txt}
                            handleChange={handleChange}
                            // handleBlur={userBlurHandler}
                            className={userError.exists ? "is-invalid": ""}
                            errorDiv = {userError.exists ? "text-danger" : "no-danger"}
                            errorMsg = {userError.helperText}
                        /> 
                    </div>
                    <TextArea 
                        placeholder="MENSAJE"
                        name="body" 
                        handleChange={handleChange} 
                        // handleBlur={commentBlurHandler}
                        style={{height:'150px', resize:'none', border:'2px solid grey', borderRadius:'5px', padding:'10px',}}
                        className={userError.exists ? "is-invalid": ""}
                        errorDiv = {userError.exists ? "text-danger" : "no-danger"}
                        errorMsg = {userError.helperText}
                        // writtenCharacters ={feedback.comment.length}
                    />
                    <button>Enviar</button>
                </form>
            </div>
            
        </section>
        <Footer/>
        </>
    )
}

// AIzaSyBsptCN9-LH5vQPCON8mZDBG2pGQYQnS8c